import "./Second_content.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



function Second_content() {


  return (<>
    <div className="second_container_head">
        </div>
    <div className="second_container">
    <div className="history-box-shadow"></div>
        <div className="histoy-box">
            
      <h1>History</h1>
      <h3>
      Walther guns have always been in a class of their own: from the 6.35 mm semiautomatic Model 1, designed in 1908 and sold starting in 1911, to the classic PP and PPK, and then the P38, which had a second career as the German army’s P1 service pistol, and right through to the present-day PPQ and its all-steel sisters, the Q5 and Q4 Steelframe.<br></br>

Each of these pistols is regarded as a milestone in development. The same is true for the sporting rifles and pistols that bear the famous Walther banner, such as the iconic Walther GSP.<br></br>

Another example is the LP 500 air pistol. Its trigger pull profile, ergonomics, balance and weight distribution make it the first choice of demanding shooters all over the world.<br></br>

Or the innovative high-end KK 500.<br></br>

And finally, the LG 400 air rifle. The version with an innovative monotec mounting delivers an extraordinary boost in performance and has attracted notice throughout the industry.<br>
</br>
“Do everything so well that no one can surpass you.”
That was the Carl Walther’s motto and the one shared by his son Fritz Walther, who reestablished the company in Ulm after World War II. In 1993 Walther joined the Umarex Group, preserving the invaluable expertise of its employees and securing a foundation for future investments.
      </h3>
    </div>
    
    </div>
    </>
  );
}

export default Second_content;
