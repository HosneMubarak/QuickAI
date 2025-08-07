import { useSelector } from "react-redux";
import AiTools from "../components/AiTools";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import Plan from "../components/Plan";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const selector = useSelector((store) => store.user);
  console.log("selector", selector);
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  );
};

export default Home;
