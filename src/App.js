// Import Section

import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';




function App() {
  let myAppStyle = {
    // backgroundColor:'#c1c1c1',
    // color:'white'
    fontFamily:'Times'
  }
  return (
    <div className="App" style={myAppStyle}>
    <Router>
     <Navbar/>
      <Routes>
        {/* <Route path="/" element={<News category="general" />}/> */}
        <Route exact path="/" element={<News category="General" key="General"/>}/>
        <Route exact path="/business" element={<News category="Business" key="Business"/>}/>
        <Route exact path="/science" element={<News category="Science" key="Science"/>}/>
        <Route exact path="/entertainment" element={<News category="Entertainment" key="Entertainment"/>}/> 
        <Route exact path="/health" element={<News category="Health" key="Health"/>}/>
        <Route exact path="/sports" element={<News category="Sports" key="Sports"/>}/>
        <Route exact path="/technology" element={<News category="Technology" key="Technology"/>}/>
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
