/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import Specialists from "../components/Specialists";
import Services from "../components/services/Services";

const Home = ({ openModal }) => {
  return (
    <>
      <Header openModal={openModal} />
      <Services />
      <Specialists />
      <Footer />
    </>
  );
};

export default Home;
