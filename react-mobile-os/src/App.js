// import logo from './logo.svg';
import './App.css';

function App() {
  const food="REACT MOBILE OS"
  
  const skills=["Android","Blackberry","iPhone","Windows Phone"]
  const com=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
    <p> {food}</p>
    {/* <div>you are {age>18 ? "eligible":"Not eligible"}</div> */}
    <div>
      <h1>Mobile Operating System</h1>
   <ul> {skills.map((e)=>{
      return <Skill skill={e}/>
    })}
    </ul>
    <h1>Mobile Manufacturers</h1>
   <ul> {com.map((e)=>{
      return <Com com={e}/>
    })}
    </ul>
 
    </div>
    </div>
  );
}
function Skill({skill}){
  return <li className='redtext'>{skill}</li>
}
function Com({com}){
  return <li className='redtext'>{com}</li>
}
export default App;
