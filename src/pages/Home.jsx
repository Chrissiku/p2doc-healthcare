import Footer from "../components/Footer";
import Header from "../components/Header";
import Specialists from "../components/Specialists";
import Services from "../services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Specialists />
      <Footer />
    </>
  );
};

export default Home;
