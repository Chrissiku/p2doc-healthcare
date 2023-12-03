import React from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Footer from "./components/Footer";
import Specialists from "./components/Specialists";
import NavBar from "./components/NavBar";

const App = () => {
  const { web5, did } = useContext(Web5Context);

  console.log("web5 : ", web5);
  console.log("Did : ", did);
  return (
    <>
      <NavBar />
      <Specialists />
      <Footer />
    </>
  );
};

export default App;
