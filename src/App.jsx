import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Home from "./pages/home";
import Cloud from './pages/services/Cloud'
import ManagedIT from './pages/services/ManagedIT'
import Security from './pages/services/Security'
import Software from './pages/services/Software'
import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/software" element={<Software />} />
        <Route path="/security" element={<Security />} />
        <Route path="/managed-it" element={<ManagedIT />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
