import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Login";
import Jobpost from "./components/Jobpost";
import Contact from "./pages/Contact";
import VendorDashboard from "./components/VendorDashboard";
import VendorJobInbox from "./components/VendorJobInbox"; // <-- import this
import StudentList from "./components/StudentList"; // <-- import this
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Vendor Routes */}
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/vendor-jobs" element={<VendorJobInbox />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/jobpost" element={<Jobpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
