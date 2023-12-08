import React, {useState} from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import APPUrl from "../../RestAPI/APPUrl";

const Register=(props)=>{

const[state,statekey]=useState({
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
})
    
let Sub=(e)=>{
    e.preventDefault();

    let data={
        name:state.name,
        email:state.email,
        password:state.password,
        password_confirmation:state.password_confirmation,
        loggedIn:false,
    }
    axios.post(APPUrl.Register,data)
      .then( (response)=> {
      console.log(response)
        statekey({
            Register:true
          })
          
      })
      .catch((error)=> {
        console.log(error);
      });

      }
      

   
      if(state.Register){
        return <Redirect to={'/login'}/> 
    }
    
    


    return (
        <div class="row mt-5 text-start">
      <div class="jumbotron col-lg-4 offset-lg-4 mt-5"style={{background:"lightGrey"}}><br/>
        
          <h3 class='text-center'>REGISTER USER</h3>

          <form onSubmit={Sub} id="forgetform"><br/>
          
          <div class="mb-3">
          <label>Username</label>
    <input type="text" class="form-control" name="name" onChange={(e)=>statekey({...state,name:e.target.value})}/>
    
  </div>
          
  <div class="mb-3">
  <label>Email</label>
    <input type="email" class="form-control" name="email" aria-describedby="emailHelp"onChange={(e)=>statekey({...state,email:e.target.value})}/>
    
  </div>
  <div class="mb-3">
  <label>Password</label>
    <input type="password" class="form-control" name="password" onChange={(e)=>statekey({...state,password:e.target.value})}/>
    <p>Password must be 8 password lenght</p>
  </div>
  



  <div class="mb-3">
  <label>Password Confirmation</label>
    <input type="password" class="form-control" name="password_confirmation" onChange={(e)=>statekey({...state,password_confirmation:e.target.value})}/>
  </div>
  
  <button type="submit" class="btn  btn-sm form-control" style={{background:"rgb(124, 7, 99)",color:'white'}} >Register</button><br/><br/>

  <p style={{fontSize:"12px"}}>Already Register?<Link to='/login'style={{textDecoration:"none",fontSize:"12px"}}>Login</Link></p>
</form><br/>  
        </div>
        </div>
    )
}
export default Register;