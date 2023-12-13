import { Link } from "react-router-dom";

export default function InquiryModal() {
   return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl">
         <div className="max-w-[700px] min-w-[400px] bg-white h-[350px] rounded-[30px] flex-col flex justify-center items-center shadow-2xl">
            <div className="text-center text-black text-4xl font-normal font-['Inter'] pb-[39px]">
               Who are you?
            </div>
            <div className="flex justify-center gap-8">
               <Link to="/doctor-form" className=" hover:bg-sky-300 duration-300 transition-colors ease-in-out bg-sky-400  text-black text-lg font-normal font-['Inter'] w-28 h-12 rounded-full">
                  Doctor
               </Link>
               <Link to="/patient-form" className="hover:bg-sky-300 duration-300 transition-colors ease-in-out bg-sky-400 text-black text-lg font-normal font-['Inter'] w-28 h-12 rounded-full">
                  Patient
               </Link>
            </div>
         </div>
      </div>
   );
}
