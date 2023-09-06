import React ,{useState}from "react";
import "../css/login.css";
import Swal from "sweetalert2";

function Login (){
   const [username,setUsername] = useState("");
   
   const [password,setPassword] = useState("");


   const handleLogin = async(e)=>{
       e.preventDefault();
       const formData ={
           username,
           
           password
       }

       try {
           const req = await fetch("https://nanhe-munhe-2.onrender.com/user/login",{
               method:"POST",
               headers :{
                   "Content-Type":"application/json"
               },
               body:JSON.stringify(formData)
           })
           if(req.ok){
               const data = await req.json()
               console.log(data)
             localStorage.setItem("token",data.token);
             localStorage.setItem("name",data.user.username)
               Swal.fire(data.message)
               window.location.href="/"
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
       <form onSubmit ={handleLogin}>
           <input type = "text" value ={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" required/>
           
            <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder ="Password" required/>
            <button>Submit</button>
       </form>
       <p>New to Nanhe-Munhe <a href="/signup">Register</a></p>

   </div>
  )

}

export default Login