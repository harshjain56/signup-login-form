import React, { useState } from "react";
import Google from "../Images/Google.png"
import Facebook from "../Images/Facebook.png"

const RightComponent = () => {

    let [user,setUser]=useState({name:"", email:"",password:"",confirmPassword:""})
    console.log(user)
      
    let [error , setError] = useState("")

    let [success , setSuccess]=useState("")

    function resgisteringUser(event){
        event.preventDefault()
        if(user.name===""||user.password===""||user.email===""||user.confirmPassword===""){
            setError("No field Should Be Empty")
            setSuccess("")
            return;
        }

        if(user.name.length<3||user.name.length>30){
            setError("The name should be btween 3 to 30 letters")
            setSuccess("")
            return;
        }

        if(!user.email.includes("@")||!user.email.includes(".")){
            setError("Enter a valid email Address")
            setSuccess("")
            return;
        }

        if(user.password.length<8){
            setError("Password should be of length greater than 8 letters")
            setSuccess("")
            return;
        }

        if(user.password!==user.confirmPassword){
            setError("Password and Confirmed Password doesnt match")
            setSuccess("")
            return;
        }
        
        setError("")
        setSuccess("User details registered Successfully")



    }

    function checkingfilled(event){
        if(event.target.value!=""){
            event.target.className="filled"
         }
         else{
            event.target.className=""
         }
    }

    return (
        <div className="right-container">

            <div className="wrapper">
                <h1 className="heading">
                    Create Account
                </h1>

                <div className="social-login">
                    <a href="#">
                        <img src={Google} />
                        <span>Sign Up with Google</span>
                    </a>

                    <a href="#">
                        <img src={Facebook} />
                        <span>Sign Up with Facebook</span>
                    </a>
                </div>

                <div className="or">--OR--</div>

                <form className="form">

                    <div className="input-group">
                        <input type="text" onChange={(event)=>{setUser({...user, name:event.target.value}); checkingfilled(event)}}/>
                        <label>Full Name</label>
                    </div>

                    <div className="input-group">
                        <input type="email" onChange={(event)=>{setUser({...user, email:event.target.value}); checkingfilled(event)}}/>
                        <label>Email</label>
                    </div>

                    <div className="input-group">
                        <input type="password" onChange={(event)=>{setUser({...user, password:event.target.value}); checkingfilled(event)}} />
                        <label>Password</label>
                        <img src="https://svgshare.com/i/uqQ.svg" alt="" className="eye" />
                        <img
                            src="https://svgshare.com/i/uqu.svg"
                            alt=""
                            class="close-eye"
                            style={{display:"none"}}
                        />
                    </div>

                    <div className="input-group">
                        <input type="password"onChange={(event)=>{setUser({...user, confirmPassword:event.target.value}); checkingfilled(event)}} />
                        <label>Confrim Password</label>
                        <img src="https://svgshare.com/i/uqQ.svg" alt="" className="eye" />
                        <img
                            src="https://svgshare.com/i/uqu.svg"
                            alt=""
                            class="close-eye"
                            style={{display:"none"}}
                        />
                    </div>

                    <button className="btn" onClick={resgisteringUser}>Create Account</button>

                    <p className="bottom-text">
                        Already Have an Acocount? 
                        <a href="#"> LogIn</a>
                        
                    </p>
                    


                </form>
                 

                 {
                    error && (
                        <div className="error">{error}</div>
                    )
                 }

                 {
                   success && (
                        <div className="success">{success}</div>
                    )
                 }
            </div>

        </div>
    )
}

export default RightComponent