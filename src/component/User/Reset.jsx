import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import axios from "axios";
import APPUrl from '../../RestAPI/APPUrl';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Reset = ({ token }) => {
const[state,statekey]=useState({

    email:"",
    password:"",
    password_confirmation:"",
    token:"",
    message:"",
    error:""
})


useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) {
      statekey(tokenParam);
    }
  }, []);
    
let Sub=(e)=>{
    e.preventDefault();

    let data={
        
        email:state.email,
        password:state.password,
        password_confirmation:state.password_confirmation,
        token:state.token
    }
    axios.post(APPUrl.Reset,data)
      .then( (response)=> {
        const { message } = response.data;
       toast.success(message, { position: 'top-right' })
       document.getElementById('forgetform').reset();

     
          
      })
      .catch((error)=> {
        statekey({error:'Password reset failed. Please try again later'});
      });

      }
      
      let message="";
      if(state.message){
          message=(
              <div>
                  <div>
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{state.message}</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
                  </div>
                  
              </div>
          )
      }
  
  
      let error="";
      if(state.error){
          error=(
              <div>
                  <div>
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>{state.error}</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
                  </div>
              </div>
          )
      }
   
    
    


    return (
        <div class="row mt-5 text-start">
      <div class="jumbotron col-lg-4 offset-lg-4 mt-5"style={{background:"lightGrey"}}><br/>
        
          <h3 class='text-center'>RESET PASSWORD</h3>

          <form onSubmit={Sub} id="forgetform"><br/>
          {message}
          {error}
          
  <div class="mb-3">
  <label>Email</label>
    <input type="email" class="form-control" name="email" aria-describedby="emailHelp"onChange={(e)=>statekey({...state,email:e.target.value})}/>
    
  </div>
  <div class="mb-3">
  <label>New Password</label>
    <input type="password" class="form-control" name="password" onChange={(e)=>statekey({...state,password:e.target.value})}/>
  </div>
  



  <div class="mb-3">
  <label>Password Confirmation</label>
    <input type="password" class="form-control" name="password_confirmation" onChange={(e)=>statekey({...state,password_confirmation:e.target.value})}/>
  </div>


  <div class="mb-3">
          <label>Token</label>
    <input type="text" class="form-control" name="token" onChange={(e)=>statekey({...state,token:e.target.value})}/>
    
  </div>
  
  <button type="submit" class="btn  btn-sm form-control" style={{background:"rgb(124, 7, 99)",color:'white'}} >Reset password</button><br/><br/>

  <p style={{fontSize:"12px"}}>Already Register?<Link to='/login'style={{textDecoration:"none",fontSize:"12px"}}>Login</Link></p>
</form><br/>  
        </div>
        <ToastContainer/>
        </div>
    )
}


export default Reset;
