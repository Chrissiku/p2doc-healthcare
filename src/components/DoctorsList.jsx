import { useContext, useState } from 'react';
import { Web5Context } from '../utils/Web5Context';
import BookingForm from './AppointmentForm';

// eslint-disable-next-line react/prop-types
const DoctorsList = ({ close }) => {
    const { doctorList } = useContext(Web5Context);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [recipientDid, setRecipientDid] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const paginatedList = doctorList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handleBookClick = (doctor) => {
        setSelectedDoctor(doctor);
        setShowBookingForm(true);
        setRecipientDid(doctor.did)
    }

    const handleFormSubmit = () => {
        setShowBookingForm(false);
    }
    return (
        <div className='mx-auto h-screen bg-white w-[85%] p-3 rounded-lg'>
            <button className='font-medium bg-og-blue h-10 w-10 text-3xl mb-10' onClick={close}>X</button>
            <div className='grid grid-cols-2 gap-9 justify-center items-center px-5 xl:grid-cols-4 '>
                {paginatedList.map((doctor, index) => (
                    <div key={index} className='border border-og-blue p-3 flex flex-col gap-3 bg-slate-100 rounded-lg h-[220px] w-[220px]'>
                        <h4 className='font-semibold text-lg'>Dr. {doctor.name}</h4>
                        <span>{doctor.did ? doctor.did.slice(8, 20) + "..." + doctor.did.slice(-8): ''}</span>
                        <p className='text-gray-400 text-base'>{doctor.speciality}</p>
                        <p>Experience: <span>{doctor.experience} </span>years</p>
                        <div>
                            <button className="bg-og-blue px-6 py-1 rounded-xl" key={index} onClick={() => handleBookClick(doctor)}>Book
                            </button>
                            {showBookingForm && (
                                <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                                    <button onClick={() => setShowBookingForm(false)} className="absolute top-4 flex justify-center right-4 bg-og-blue p-2 w-10 h-10 rounded-full"><span>X</span></button>
                                    <BookingForm doctorDid={recipientDid} doctor={selectedDoctor} onSubmit={handleFormSubmit} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-10 mt-10'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}>{"<<"}Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(doctorList.length / itemsPerPage-1)} className={`${currentPage === Math.ceil(doctorList.length / itemsPerPage-1) ? 'text-gray-400' : 'text-black'}`}>Next{">>"}</button>
            </div>
        </div>
    );
};

export default DoctorsList;