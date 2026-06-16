import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    // min-h-screen + flex col + flex-1 on main ensures footer sticks to bottom
    <div className="min-h-screen flex flex-col bg-white">
 
      {/* Navigation — always at the top */}
      <Navbar />
 
      {/* Main content — Outlet renders the matched child page */}
      <main className="flex-1">
        <Outlet />
      </main>
 
      {/* Footer — always at the bottom */}
      <Footer />
    </div>
  );
}
 
export default Layout;