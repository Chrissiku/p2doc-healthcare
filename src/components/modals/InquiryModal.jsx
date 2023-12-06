export default function InquiryModal() {
   return (
      <div className="max-w-[700px] bg-white h-[350px] rounded-[30px] flex-col flex justify-center items-center">
         <div className="text-center text-black text-4xl font-normal font-['Inter'] pb-[39px]">
            Who are you?
         </div>
         <div className="flex justify-center gap-8">
            <button className=" bg-sky-400  text-black text-lg font-normal font-['Inter'] w-28 h-12 rounded-full">
               Doctor
            </button>
            <button className=" bg-sky-400 text-black text-lg font-normal font-['Inter'] w-28 h-12 rounded-full">
               Patient
            </button>
         </div>
      </div>
   );
}
