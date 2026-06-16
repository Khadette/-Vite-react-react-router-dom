import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
  
    <Routes>
      {/* Layout route — Navbar and Footer are inside Layout */}
      <Route path="/" element={<Layout />}>
 
        {/* index = the default child route for '/' */}
        <Route index element={<Home />} />
 
        {/* Named child routes */}
        <Route path="about"   element={<About />} />
        <Route path="contact" element={<Contact />} />
 
        {/* Catch-all: anything that doesn't match above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;