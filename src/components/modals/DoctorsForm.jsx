import { useState } from "react";

export default function DoctorsForm() {
  const [formState, setFormState] = useState({
    name: "",
    speciality: "",
    experience: "",
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
    <div className="w-full">
      <p className="text-lg font-normal ttext-black ">
        Enter your details below
      </p>
      <form className="pt-[60px]" onSubmit={formSubmit}>
        <div className="flex flex-col gap-[17px] pb-7">
          <label htmlFor="name" className="text-lg font-normal text-black ">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400 "
          />
        </div>
        <div className="flex flex-col gap-[17px] pb-7">
          <label
            htmlFor="spciality"
            className="text-lg font-normal text-black "
          >
            Speciality
          </label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            required
            value={formState.speciality}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-[17px] pb-8">
          <label
            htmlFor="experience"
            className="text-lg font-normal text-black "
          >
            Years of Experience
          </label>
          <input
            id="experience"
            name="experience"
            type="number"
            required
            value={formState.experience}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
          />
        </div>

        <button
          className="w-[93px] h-[38px] bg-sky-400 rounded-[100px] disabled:bg-black/40 disabled:cursor-not-allowed hover:bg-sky-300 duration-300 transition-colors ease-in-out"
          disabled={
            formState.name === "" ||
            formState.experience === "" ||
            formState.speciality === ""
          }
        >
          Connect
        </button>
      </form>
    </div>
  );
}
