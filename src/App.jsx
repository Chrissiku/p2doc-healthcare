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
      <h1 className="text-3xl font-bold underline text-og-blue">
        Hello world!
      </h1>
      <Specialists />
      <Footer />
    </>
  );
};

export default App;
