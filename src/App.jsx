// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import { Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";
import InquiryModal from "./components/modals/InquiryForm";
import DoctorsForm from "./components/modals/DoctorsForm";
import PatientsForm from "./components/modals/PatientsForm";
import MyModal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const { did, userType } = useContext(Web5Context);

  useEffect(() => {
    if (did) {
      console.log(did);
    }
  }, [did, userType]);

  const DashboardComponent =
    userType === "doctor" ? Doctor : userType === "patient" ? Patient : Home;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<DashboardComponent openModal={openModal} />}
        />
        <Route path="/inquiry-form" element={<InquiryModal />} />
        <Route path="/doctor-form" element={<DoctorsForm />} />
        <Route path="/patient-form" element={<PatientsForm />} />
      </Routes>
      <MyModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default App;
