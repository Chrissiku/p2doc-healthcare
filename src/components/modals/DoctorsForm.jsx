/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Web5Context } from "../../utils/Web5Context";
import { publicDid } from "../../utils/constants";

export default function DoctorsForm({ userType, closeModal }) {
  const { web5, did, setUserType, protocolDefinition } = useContext(
    Web5Context
  );

  const [formState, setFormState] = useState({
    name: "",
    speciality: "",
    experience: "",
    did: did,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const createDoctor = async () => {
    console.log("Creating Doctor Profile ...");

    try {
      const { record, status } = await web5.dwn.records.write({
        data: { ...formState },
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "doctorProfile",
          schema: protocolDefinition.types.doctorProfile.schema,
          recipient: did,
          published: true,
        },
      });
      console.log("Profile Created : ", { record, status });

      // Send to public and private did
      const DIDs = [did, publicDid];
      await Promise.all(
        DIDs.map(async (did) => {
          await record.send(did);
        })
      );
      console.log("Profile sent");
    } catch (error) {
      console.error("Error Creating doctor data : ", error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    createDoctor().finally(() => {
      closeModal();
      setUserType("doctor");
    });
  };
  return (
    <div className="w-full">
      <p className="text-lg font-normal text-black ">
        Enter your details below {userType}
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
            htmlFor="speciality"
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
