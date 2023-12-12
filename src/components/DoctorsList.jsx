import { useContext, useState } from 'react';
import { Web5Context } from '../utils/Web5Context';

// eslint-disable-next-line react/prop-types
const DoctorsList = ({ close }) => {
    const { doctorList } = useContext(Web5Context);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const paginatedList = doctorList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className='mx-auto h-screen bg-white w-[75%] p-3 rounded-lg'>
            <button className='font-medium text-3xl mb-10' onClick={close}>X</button>
            <div className='grid grid-cols-4 gap-9 justify-center items-center px-5'>
                {paginatedList.map((doctor, index) => (
                    <div key={index} className='border border-og-blue p-3 flex flex-col h-[150px] rounded-lg'>
                        <h4 className='font-semibold text-lg'>Dr. {doctor.name}</h4>
                        <p className='text-gray-400 text-base'>{doctor.speciality}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-10 mt-10'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`${currentPage === 1 ? 'text-gray-400': 'text-black'}`}>{"<<"}Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(doctorList.length / itemsPerPage)} className={`${currentPage === Math.ceil(doctorList.length / itemsPerPage) ? 'text-gray-400': 'text-black'}`}>Next{">>"}</button>
            </div>
        </div>
    );
};

export default DoctorsList;