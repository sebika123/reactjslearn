//To visit website project
// import Button from './Button'
// const App = ()=> {
//     return <div>
//     <h1>Useful Website to  learn reactjs </h1>
//     <p><h3>Which website you want to open?</h3></p>
    
//    <Button name="Google" link="https://www.google.com/"/>
//    <Button name="Facebook" link="www.facebook.com"/>
//    <Button name="Youtube"link="www.youtube.com"/>
//    <br>
//    </br>
//    <br></br>
//    <Button name="Twitter" link="https://www.google.com/"/>
//    <Button name="Instagram" link="https://www.google.com/"/>
//    <Button name="Leafrog" link="https://www.lftechnology.com/"/>



// </div>
// }
// export default App;


import React,{useState} from "react";
import './style.css'; 
const App=()=>{
    const [number,setNumber]=useState(0)
    return <div>
        <h1>{number}</h1>
        <button  onClick={()=>setNumber(number+1)}  className="button">Add</button>
        <button onClick={()=>setNumber(number-1)} className="button">Less</button>
        <button  onClick={()=>setNumber(0)} className="button">Reset</button>
    </div>
}
 export default App;