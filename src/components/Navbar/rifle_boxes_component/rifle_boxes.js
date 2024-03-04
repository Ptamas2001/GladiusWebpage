
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";
import "./rifle_boxes.css"


function Rifle_boxes() {
  return (
    <div>
    
    <div className="Rifle_boxes_maincontainer">
       <div className="riflebox1"></div>
       <div className="riflebox2"></div>
       <div className="riflebox3"></div>
    </div>
    </div>
  );
   

}

export default Rifle_boxes;
