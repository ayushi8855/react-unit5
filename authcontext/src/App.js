import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Showstatus } from './components/Showstatus';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Showstatus/>
    </div>
  );
}

export default App;
