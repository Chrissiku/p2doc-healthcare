import Footer from "../components/Footer";
import Header from "../components/Header";
import Specialists from "../components/Specialists";
import Services from "../components/services/Services";
import { publicDid } from "../utils/constants";

const Home = ({ openModal }) => {
  console.log("public DID : ", publicDid);
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
