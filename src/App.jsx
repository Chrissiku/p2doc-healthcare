import Services from "./services/Services";
import React from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Footer from "./components/Footer";
import Specialists from "./components/Specialists";

const App = () => {
  const { web5, did } = useContext(Web5Context);

  console.log("web5 : ", web5);
  console.log("Did : ", did);
  return (
    <>
      <Services />
      <Specialists />
      <Footer />
    </>
  );
};

export default App;
