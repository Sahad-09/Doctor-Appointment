import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Doctors from "../Doctors/Doctors";
import DocterDetails from "../Doctors/DocterDetails";

import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DocterDetails />} />
    </Routes>
  );
};

export default Router;
