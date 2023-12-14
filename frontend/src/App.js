import React from "react";
import Header from "./container/Header/Header"
import Footer from "./container/Footer/Footer"
import About from "./container/About/About"
import Work from "./container/Work/Work"
import Skills from "./container/Skills/Skills";
import Testimony from "./container/Testimonial/Testimony";
import Navbar from "./component/Navbar/Navbar";
import './App.scss'
function App() {
  return (
    <>
    <div className="app">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimony/>
    <Footer/>

    </div>
    </>
  );
}

export default App;
