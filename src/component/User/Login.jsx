

import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import APPUrl from "../../RestAPI/APPUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login=(props)=>{

    

    const[state,statekey]=useState({
       email:'',
       password:'',
       loggedIn:false,
       
    })

    




let Sub=(e)=>{
    e.preventDefault();

    const data={
        email:state.email,
        password:state.password,
    }
    axios.post(APPUrl.Login,data)
      .then( (response)=> {
        localStorage.setItem('token',response.data.access_token);
        statekey({loggedIn:true})
          const { message } = props.setUser(response.data.user)
          toast.success(message, { position: 'top-right' })
       
      }).catch((error)=>{
        console.log(error)
      });
     
      }
        if(localStorage.getItem('token')){
          return <Redirect to='/profile'/>
          }
     
   

    

    return (
        <div class="row mt-5 text-start">
      <div class="jumbotron col-lg-4 offset-lg-4 mt-5"style={{background:"lightGrey"}}><br/>
        
          <h3 class='text-center'>USER SIGN IN</h3>

          <form onSubmit={Sub} ><br/>

          
  <div class="mb-3">
    <label>Email</label>
    <input type="email" class="form-control" name="email" aria-describedby="emailHelp" required onChange={(e)=>statekey({...state,email:e.target.value})}/>
    
  </div>
  <div class="mb-3">
  <label>Password</label>
    <input type="password" class="form-control" name="password" required onChange={(e)=>statekey({...state,password:e.target.value})}/>
  </div>

  
  <button type="submit" class="btn  btn-sm form-control" style={{background:"rgb(124, 7, 99)",color:'white'}} >Login</button>

  <span><Link to='/forgetpassword'style={{textDecoration:"none",fontSize:"12px",color:"black"}}>Forget Password?</Link></span>

  <p style={{color:"black",fontSize:"12px"}}>Dont have an Account?<Link to='/register'style={{textDecoration:"none",fontSize:"12px",}}>Register</Link></p>
</form><br/>  
        </div>
        <ToastContainer/>
        </div>
    )
}

export default Login;