import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import CarouselComponent from "./components/Carousel";
import CardComponent from "./components/Card";
import ReservationForm from "./components/Reser";
import WebFooter from "./components/Footer";
import FullMenu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="bg-dark-subtle">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselComponent />
              <CardComponent />
              <ReservationForm />
            </>
          } />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default App;