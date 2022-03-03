import {useState} from 'react'
import {auth,db} from "../config/firebase";
export default function Log() {
const [data,setData] = useState({
  email:"",
  password:""
})

let set = (e,prop) =>{
  setData({...data,[prop]:e})
}
let next = () =>{
  auth.signInWithEmailAndPassword(data.email,data.password)
  .then((success)=>{
    console.log(success)
  })
  .catch((error)=>{
    console.log(error)
  })

}
  return (
    <div>
      <input value = {data.email} type="email" onChange={(e)=>set(e.target.value,"email")}/><br/>        
      <input value = {data.password}type="password" onChange={(e)=>set(e.target.value,"password")}/><br/>
      <button onClick={()=>next()}>Log In</button>        
    </div>
  );
}