import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Home } from "./components/Home";
import Contact from "./components/Contact";
import { TripDetails } from "./components/TripDetails";
import { TripProvider } from '../utils/TripContext';
function App() {
  return (
      <BrowserRouter>
      <TripProvider>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-trip" element={<Body />} />
          <Route path="/trip-details" element={<TripDetails />} />
        </Routes>

      <Footer />
      </TripProvider>
      </BrowserRouter>
  );
}

export default App;
