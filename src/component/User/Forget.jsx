import React, { useState } from "react"
import axios from "axios";
import APPUrl from "../../RestAPI/APPUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Forget=(props)=>{

    const [state,setState]=useState({
        email:"",
        message:"",
        error:"",
    });


    const data={
        email:state.email,
    }
    

    let Submitme=(e)=>{
         e.preventDefault();
         axios.post(APPUrl.Forget,data)
  .then((response)=>{
    const { message } = response.data;
       toast.success(message, { position: 'top-right' })
       document.getElementById('forgetform').reset();

     })
    
  
  .catch( (error)=> {
    
    
  });
    }



// let error =""
// if(state.error){
//     error=(
        
//     toast.error(state.error, { position: 'top-right' })
    
//     )
// }
   
  

   
   
    return(
        <div>
           <div class="row mt-5 text-start">
      <div class="jumbotron col-lg-4 offset-lg-4 mt-5"style={{background:"lightGrey"}}><br/>
        
          <h3>FORGET PASSWORD?</h3>

          <form onSubmit={Submitme} id="forgetform"><br/>
                 
  <div class="mb-3">
  <label>Enter Your Email</label>
    <input type="email" class="form-control" name="email" aria-describedby="emailHelp" onChange={(e)=>setState({...state,email:e.target.value})} required />
    
  </div>
  
  
  <button type="submit" class="btn  btn-sm form-control" style={{background:"rgb(124, 7, 99)",color:'white'}} >Reset Password</button>
        
        </form><br/>
        </div>
        </div>
        <ToastContainer/>
        </div>
    )
};

export default Forget