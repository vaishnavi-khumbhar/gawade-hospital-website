import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Doctors from "../pages/Doctors";
import Specialities from "../pages/Specialities";
import Facilities from "../pages/Facilities";
import Gallery from "../pages/Gallery";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/specialities" element={<Specialities />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
};

export default AppRoutes;