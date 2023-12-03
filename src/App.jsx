// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Footer from "./components/Footer";
import Specialists from "./components/Specialists";
import Header from "./components/Header";

const App = () => {
  const { web5, did } = useContext(Web5Context);

  console.log("web5 : ", web5);
  console.log("Did : ", did);
  return (
    <>
      <Header />
      <Specialists />
      <Footer />
    </>
  );
};

export default App;
