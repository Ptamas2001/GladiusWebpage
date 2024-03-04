import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Home_slideshow from "../../components/Navbar/Home_slideshow/Home_slideshow";
import Rifle_boxes from "../../components/Navbar/rifle_boxes_component/rifle_boxes";
import RifleApp from "../../components/Navbar/3D_envinorment/3D_envinorment";
import Second_content from "../../components/Navbar/home_second_content/Second_content";
import Rifleapp2 from "../../components/Navbar/3D_envinorment_2/3d_envinorment_2";
import ThirdContent from "../../components/Navbar/home_third_content/Third_content";

function Home() {

  let history = useHistory();
  return (
    <div>
        <Navbar></Navbar>
    
        <div className="home_container">
          <div className="home_first_content">
            
          <Home_slideshow></Home_slideshow>
        

          <div className="Sldeshow_text_container">
            <div className="mobileview">
          <h1>Gladius weapons</h1>
          <h2>Gladius Weapons Center deals in the sale of weapons that meet your needs worldwide contact us with confidence</h2>
          </div>
          <button className="slideshow_shopnow"><h3>shop now</h3></button>
          
        </div>
        <Rifle_boxes></Rifle_boxes>
        
          </div>

          <div className="lets-start-box">
          <h1>
          <span className="purple">Leave</span> the usual, this is your time</h1>
            <h2>Let's start a <span className="purple">something</span> new</h2>
            
            <div className="lets-start-box-shadow">
            
          </div>
          </div>

          <RifleApp></RifleApp>

          <Second_content></Second_content>
          <div className="third-content-before">
            <h1 className="third_content_title">The new generation of SMG rifles</h1>
          </div>
          <Rifleapp2></Rifleapp2>
        </div>
        
        <ThirdContent/>
        
      

      
    </div>
    
  );
}

export default Home;
