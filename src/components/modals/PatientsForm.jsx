import { useState } from "react";

export default function PatientsForm() {
  const [formState, setFormState] = useState({
    name: "",
    dob: "",
  });

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  };

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
      <p className="text-lg font-normal text-black ">
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
            className="max-w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400 "
          />
        </div>

        <div className="flex flex-col gap-[17px] pb-8">
          <label htmlFor="dob" className="text-lg font-normal text-black ">
            Date of birth
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formState.dob}
            onChange={handleChange}
            max={getTodayDate()}
            required
            className="max-w-[410px] min-w-[400px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
          />
        </div>

        <button
          className="w-[93px] h-[38px] bg-sky-400 rounded-[100px] disabled:bg-black/40 disabled:cursor-not-allowed hover:bg-sky-300 duration-300 transition-colors ease-in-out"
          disabled={formState.dob === "" || formState.name === ""}
        >
          Next
        </button>
      </form>
    </div>
  );
}
