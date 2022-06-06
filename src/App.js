import React, { useState } from "react";

export default function App() {



  let CurTime = new Date().toLocaleTimeString();
  let CurDate = new Date().toLocaleDateString();
  
  

  const [Time, setTime] = useState(CurTime);
  
  
  const updatetime=()=>{
    let CurUpdatedTime = new Date().toLocaleTimeString();
    
    setTime(CurUpdatedTime);
  }

  setInterval(updatetime,1000)


  return (
    <>

   
    <div className="MyDiv">
    <h1>Welcome to the Digital Clock</h1>  
      <h2>{Time}</h2>
      <span>{CurDate}</span> 
        
    </div>
    </>
    );
}
