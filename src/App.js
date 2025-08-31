// App.jsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import { Profile } from "./components/Profile";
import { Business } from "./components/Business";
import Loan from "./components/Loan";
import Inventory from "./components/Inventory";
import Services from "./components/Services";
import Licenses from "./components/Licenses";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="business" element={<Business />} />
        <Route path="loan" element={<Loan />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="services" element={<Services />} />
        <Route path="licenses" element={<Licenses />} />
      </Route>
    </Routes>
  );
}
