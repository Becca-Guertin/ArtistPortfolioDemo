import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AlienBabes from "./components/AlienBabes.jsx";
import Commissions from "./components/Commissions.jsx";
import Footer from "./components/Footer.jsx";

import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import SunPopShop from "./components/SunPop.jsx";

import "./assets/css/App.css";

function App() {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    console.log("App", {
      currentPath: location.pathname,
      previousPath: prevLocation.current.pathname, // You need to track the previous location
    });
    // Update prevLocation after the render
    prevLocation.current = location;
  }, [location]); // Re-run when location changes
  return (
    <main>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Collections/AlienBabes" element={<AlienBabes />} />
            <Route path="/Collections/Commissions" element={<Commissions />} />
            <Route path="/Collections/OtherIllos" element={<SunPopShop />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
