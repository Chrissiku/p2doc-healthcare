/* eslint-disable react/prop-types */
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Specialists from "../components/Specialists";
import Services from "../components/services/Services";
// import { specialistData as specialist } from "../components/specialistsData";
import { Web5Context } from "../utils/Web5Context";

const Home = ({ openModal }) => {
  const { doctorList } = useContext(Web5Context);

  return (
    <>
      <Header openModal={openModal} />
      <Services />
      <Specialists specialistData={doctorList} />
      <Footer />
    </>
  );
};

export default Home;
