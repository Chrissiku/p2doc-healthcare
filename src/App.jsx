// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import { Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";
import InquiryModal from "./components/modals/InquiryForm";
import DoctorsForm from "./components/modals/DoctorsForm";
import PatientsForm from "./components/modals/PatientsForm";

const App = () => {
  const { web5, did } = useContext(Web5Context);

  // console.log("web5 : ", web5);
  console.log("Did : ", did);

  useEffect(() => {
    if (web5 && did) {
      // Configure protocol
    }
  }, [web5, did]);

  const protocolDefinition = {
    protocol: "https://localhost:5173",
    published: true,
    types: {
      patient: {
        schema: "https://localhost:5173/patient",
        dataFormats: ["application/json"],
      },
      doctor: {
        schema: "https://localhost:5173/doctor",
        dataFormats: ["application/json"],
      },
    },
    structure: {
      patient: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "patient", can: "read" },
        ],
      },
      doctor: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", can: "read" },
        ],
      },
    },
  };

  const installPrivateProtocol = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        filter: {
          protocol: protocolDefinition,
        },
      },
    });
  };

  const installPublicProtocol = async (web5, did, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        filter: {
          protocol: protocolDefinition,
        },
      },
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/inquiry-form" element={<InquiryModal />} />
        <Route path="/doctor-form" element={<DoctorsForm />} />
        <Route path="/patient-form" element={<PatientsForm />} />
      </Routes>
    </>
  );
};

export default App;
