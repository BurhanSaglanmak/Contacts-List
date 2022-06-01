import React, { useState } from "react";

function Contact({setCallName, callName}){
    const [fullName,setFullName]=useState({name: "", phone:""});
   
    const  change=(e)=>{
        setFullName({...fullName, [e.target.name] : e.target.value})
    }


    function Submit (e){

        e.preventDefault();
        if (fullName.name ==="" || fullName.phone==="") {
            return(false)
        }
      
        setCallName([...callName, fullName]);
        setFullName({name:"", phone:""})
    }
    return(
        <div>
            <form onSubmit={Submit}>
                <input value={fullName.name} name="name" onChange={change} placeholder="Ad Soyad" />
                <br></br>
                <input value={fullName.phone} name="phone" onChange={change} placeholder="Telefon" />
                <br></br>
                <button >Add</button>
            </form>
        </div>
    )
}
export default Contact;