import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navbar_data } from "./Navbar_data";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let history = useHistory();
  const [activeItem, setActiveItem] = useState(Navbar_data[0].title);

  const [isNavActive, setIsNavActive] = useState(false);
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  const navTriggerClass = `navTrigger ${isNavActive ? 'active' : ''}`;



  return (
    <div>
      <div className="Navbar_container">
        <div className=".nav_background_container">
          
        </div>
        <nav className="nav">
          <div className="container">
            <div className="logo">
              <Link to={Navbar_data[0].path}>
                <span>{Navbar_data[0].title}</span>
              </Link>
            </div>
            <div className="main_list">
              <ul>
                {Navbar_data.slice(1).map((item, index) => (
                  <li
                    key={index}
                    className={item.title === activeItem ? "active" : ""}
                  >
                    <Link to={item.path} onClick={() => setActiveItem(item.title)}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <span className={navTriggerClass} onClick={toggleNav}>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <div className={`mobile_size_nav ${isNavActive ? 'active' : ''}`}>
             
            <div className="mobile_view_nav">
            <ul>
              {Navbar_data.slice(1).map((item, index) => (
                // Ellenőrizze, hogy az elem nem a 2. indexű-e
                index !== 0 && (
                  <li
                    key={index}
                    className={item.title === activeItem ? "active" : ""}
                  >
                    <Link to={item.path} onClick={() => setActiveItem(item.title)}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>

            </div>
          </div>
        </nav>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   

                  

    </div>

                  

  );
}

export default Navbar;
