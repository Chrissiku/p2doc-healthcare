import { useState } from "react";

export default function PatientsForm() {
   const [formState, setFormState] = useState({
      name: "",
      dob: "",
   });

   const handleChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name]: e.target.value,
      });
   };

   const formSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-3xl">
         <div className="bg-white max-w-[700px] py-[75px] px-9 rounded-[30px] shadow-2xl">
            <h2 className=" text-black text-[32px] font-normal pb-4 ">
               Patient Details
            </h2>
            <p className="text-lg font-normal ttext-black ">
               Enter your details below
            </p>
            <form className="pt-[60px]" onSubmit={formSubmit}>
               <div className="flex flex-col gap-[17px] pb-7">
                  <label
                     htmlFor="name"
                     className="text-lg font-normal text-black ">
                     Name
                  </label>
                  <input
                     id="name"
                     type="text"
                     required
                     name="name"
                     value={formState.name}
                     onChange={handleChange}
                     className="max-w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400 "
                  />
               </div>

               <div className="flex flex-col gap-[17px] pb-8">
                  <label
                     htmlFor="dob"
                     className="text-lg font-normal text-black ">
                     Date of birth
                  </label>
                  <input
                     id="dob"
                     name="dob"
                     type="text"
                     value={formState.dob}
                     onChange={handleChange}
                     required
                     className="max-w-[410px] min-w-[400px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
                  />
               </div>

               <button
                  className="w-[93px] h-[38px] bg-sky-400 rounded-[100px] disabled:bg-black/40 disabled:cursor-not-allowed hover:bg-sky-300 duration-300 transition-colors ease-in-out"
                  disabled={formState.dob === "" || formState.name === ""}>
                  Next
               </button>
            </form>
         </div>
      </div>
   );
}
