import Hero from "../components/Hero/Hero";
import Specialities from "../components/Specialities/Specialities";
import AboutSection from "../components/AboutSection/AboutSection";
import Facilities from "../components/Facilities/Facilities";
import DoctorsSection from "../components/Doctors/DoctorsSection";
import Testimonials from "../components/Testimonials/Testimonials";
import GallerySection from "../components/Gallery/GallerySection";
import ContactSection from "../components/Contact/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
       <AboutSection />
      <Specialities />
      <DoctorsSection />
       <Facilities />
       <GallerySection />
       <Testimonials />
      
      <ContactSection />
    </>
  );
};

export default Home;