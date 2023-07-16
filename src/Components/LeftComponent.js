import React from "react";
import Abstraction from "../Images/Abstraction.png"
const LeftComponent =()=>{
    
    return(
          <div className="left-container">
             
             <p className="desc">
                  SignUp/Login Form
             </p>

             <img src={Abstraction} className="illustration"/>
          </div>
    )
}

export default LeftComponent