import React, { useState } from "react";

function Filter1({callName}){
    const [filterText,setFilterText]= useState("")

    const filtered= callName.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
        );
    } );

   
    return(
        <div>
            <input value={filterText} onChange={(e)=>{setFilterText(e.target.value)}} placeholder="ara"/>
            <ul className="list">
                
           {filtered.map((item, i)=> (<li key={i}> <span>{item.name}</span> <span> {item.phone}</span> </li>)) }  
            </ul>
            <p>Total Contacts ({filtered.length})</p>

        </div>
    )
}
export default Filter1;