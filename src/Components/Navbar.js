import React, { Component } from 'react';
import './myStyle.css';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

export default class Navbar extends Component {
    
    render() {
        const mystyle = {
           
            backgroundColor: "DodgerBlue",
             fontSize:"17px",
            fontFamily: "Arial",
            // position:"absolute",
            width:"100%",
            
            // marginTop:"-1%"
          }
        return (
            <nav class="navbar navbar-expand-lg" style={mystyle}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">News Application</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li class="nav-item"><Link class="nav-link" aria-current="page" to="/about">About</Link></li>
                           <li class="nav-item"><Link class="nav-link" aria-current="page" to="/business">business</Link></li>
                           <li class="nav-item"><Link class="nav-link" aria-current="page" to="/entertainment">entertainment</Link></li>
                           {/* <li class="nav-item"><a class="nav-link" aria-current="page" href="/general">general</a></li> */}
                          <li class="nav-item"><Link class="nav-link" aria-current="page" to="/health">health</Link></li>
                         <li class="nav-item"><Link class="nav-link" aria-current="page" to="/science">science</Link></li>
                          <li class="nav-item"><Link class="nav-link" aria-current="page" to="/sports">sports</Link></li>
                         <li class="nav-item"><Link class="nav-link" aria-current="page" to="/technology">technology</Link></li>

                       </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

