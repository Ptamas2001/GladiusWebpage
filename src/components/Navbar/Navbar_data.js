import React from 'react';
import "./Navbar.css";
import { GiBull } from "react-icons/gi";


export const Navbar_data = [
  {
    title: (
      <>
      <h1 className="logo-title">
        Gladius <span> <GiBull /> Guns</span> Center
      </h1>
    </>
    
    ),
    path: "/home",
    cName: "nav-logo",
  },
  {title: (
    <>
    <h3>
   
    </h3>
    </>
  ),
  cName: 'nav-text',},
  {
    title: <h3>Home</h3>,
    cName: 'nav-text'
  },
 
  {
    title: <h3>Modells</h3>,
    path: '/team',
    cName: 'nav-text'
  },
  {
    title: <h3>History</h3>,
    path: '/news',
    cName: 'nav-text'
  },
 /*
  {
    title: <h3><CgProfile /></h3>,
    path: '/login',
    cName: 'nav-text'
  },
  */
];