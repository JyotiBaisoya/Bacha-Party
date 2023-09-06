import React ,{useState}from "react";
import "../css/signup.css";
import Swal from "sweetalert2"

function Signup (){
   const [username,setUsername] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");


   const handleSignup = async(e)=>{
       e.preventDefault();
       const formData ={
           username,
           email,
           password
       }

       try {
           const req = await fetch("https://nanhe-munhe-2.onrender.com/user/signup",{
               method:"POST",
               headers :{
                   "Content-Type":"application/json"
               },
               body:JSON.stringify(formData)
           })
           if(req.ok){
               const data = await req.json()
               console.log(data)
             
               Swal.fire(data.message)
               window.location.href="/login"
           }else{
               Swal.fire("Something Went Wrong")
           }
          
       } catch (error) {
           console.log(error)
       }
   }
  
  return (
   <div className = "signup-container">
       <h1>Create an Account</h1>
       <form onSubmit ={handleSignup}>
           <input type = "text" value ={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" required/>
            <input type="text" value={email} onChange ={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder ="Password" required/>
            <button>Submit</button>
       </form>
       <p>Account already exists <a href="/login">Login</a></p>

   </div>
  )

}

export default Signup

