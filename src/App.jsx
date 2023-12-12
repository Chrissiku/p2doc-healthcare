// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import { Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";

const App = () => {

  const { web5, did } = useContext(Web5Context);

  console.log("web5 : ", web5);
  console.log("Did : ", did);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </>
  );
};

export default App;
