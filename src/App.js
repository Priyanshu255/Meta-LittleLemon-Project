import React from "react";
// import {Route, Routes} from "react-router-dom";
// import BookingPage from "./routes/BookingPage";
// import About from './routes/About';
// import Home from "./routes/Home";
import Nav from "./routes/Nav";
import Footer from "./routes/Footer";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Nav />
      {/* <Routes>
        <Route exact path = "/" element = {<Home />}/>
        <Route exact path='/about' element = {<About />}></Route>
        <Route exact path = "/reservations" element = {<BookingPage />}/>
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
