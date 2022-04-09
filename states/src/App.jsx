import {Category} from "./components/Category"
import "./App.css"
import {useState} from "react";
// function App(){
//     const navbar = [
//         {
//             image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//             title:"top offer"
//         },
//         {
//             image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//             title:"grocery"
//         }
//     ]



//     return (
//         <div className="nav">{navbar.map(el=> <Category image={el.image} label={el.title}/>)}</div>
//     )
// }



function App(){
    const [counter,setCounter]=useState(10)
    const handleAdd=(value)=>{
      
   setCounter(counter+value)
    }

    const double=()=>{
      
        setCounter(counter*2)
         }
// if(counter>=10){
//     return  0
// }
    
    return (<div className="App">
        <h3 className={counter % 2===0 ?"red" :"green"}>Counter:{counter}</h3>
        <button onClick={()=>handleAdd(1)}>Add</button>

<button onClick={()=>handleAdd(-1)}>sub</button>
<button onClick={()=>double()}>double</button>

  <div>Number is {counter % 2===0 ? "even" :"odd"}</div>
    </div>)

    
}
export default App