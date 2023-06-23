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


//COUNTER APP

// import React,{useState} from "react";
// import './style.css'; 
// const App=()=>{
//     const [number,setNumber]=useState(0)
//     return <div>
//         <h1>{number}</h1>
//         <button  onClick={()=>setNumber(number+1)}  className="button">Add</button>
//         <button onClick={()=>setNumber(number-1)} className="button">Less</button>
//         <button  onClick={()=>setNumber(0)} className="button">Reset</button>
//     </div>
// }
//  export default App;



//Dice roller

// import React,{useState} from 'react';
// import './style.css';
// const App=()=> {
//     const [diceNumber,setDiceNumber]=useState(4)

//     const refreshDice=()=>{
//       const ranno=Math.floor(Math.random()*6)+1;
//       setDiceNumber(ranno);

//     }
//   return (
//     <div>
//        <center> <img width={300} height={300} src={require(`./images/${diceNumber}.jpg`)} alt="dice"/><br></br>
//        <button  onClick ={()=> { refreshDice()
//        }}
//        className="button">Roll The dice</button>
//        </center>
//     </div>
//   )
// }

// export default App;



//calculator for simpole interest
// import React,{useState} from 'react';
// //import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import './style.css';



// const App=()=>{
//   const[P,setP]=useState(0)
//   const[T,setT]=useState(0)
//   const[R,setR]=useState(0)
//   const[Si,setSi]=useState(0)

//   const Calculate=()=>{
    
//    setSi((P*T*R)/100);

//   }

// return (
// <div className="div">
// <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
         
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             SimpleInterest
//           </Typography>
          
//         </Toolbar>
//       </AppBar>
//       <br></br>
//       <TextField onChange={(event)=>setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" />
//       <TextField onChange={(event)=>setT(event.target.value)} id="outlined-basic" label="Enter t" variant="outlined" />
//       <TextField onChange={(event)=>setR(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" />
    
//     <br>
//     </br>
//     <Button onClick={()=>{
//       Calculate()
//     }} variant="contained">Calculate</Button>
//     <br>
//     </br>
//     <Typography variant="h6" gutterBottom>
//        SimpleInterest is {Si}
//       </Typography>
//     </Box>
// </div>
// )}
// export default App;


//for to do wishlist project
//  import React,{useState} from "react";
//  import"./style.css";


// const App  =()=>  {
//   const [userinput,setuserinput]=useState([""])
//   const [todos,settodos]=useState([])

//  const Add=()=>{
//   settodos([...todos,userinput])
// }
  
// return (
//   <div>
//    <h4>Todo list</h4>
//    <br></br>
//    <input type="text"   onChange={(event)=> setuserinput(event.target.value)} ></input>
//    <button className="button " onClick={()=> Add()}>Add</button>
//    <ul>{
//   todos.map((todo,index)=> <li key={index}>{todo}</li>)
//    } </ul>
//   </div> 
     
// )
//    }
//  export default App; 



//motivational quptes project in react

import React,{useState} from 'react';
import ItemQuote from 'ItemQuote';


const App=()=>{
  const [items,setItems]=useState([
                                  {"text":"We can do it","from":"Sebika Nepal"},
                                  {"text":"keep learning","from":"Rojina Nepal"},
                               
                                  ])


  return (
  <div>
 {items.map((item)=>  <ItemQuote author={item.from} text={item.text}/>)}
  
  
  </div>

)
}
export default App
