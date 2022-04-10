// import logo from './logo.svg';

import './App.css';

const logo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4DmMe3rhYV2-vGH_EkaHVuPlSnfhGCzN6A&usqp=CAU"

function App() {
  const link=[{name:"service",lin:"https://github.com/ayushi8855/unit5"},{name:"project",lin:"https://github.com/ayushi8855/unit5"},{name:"about",lin:"https://github.com/ayushi8855/unit5"}]
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        {link.map((e)=>{
      return <Link link={e}/>
    })}

        <button className='btn'>connect</button>

        
    </div>
  );
}
function Link({link}){
  return <a className='redtext'href={link.lin}>{link.name}</a>
}
export default App;
