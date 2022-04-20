import logo from './logo.svg';
import './App.css'
import{Style} from "./component/Style"

function App() {

  return (
    <div className="App">
     
     <Style type ="Primary">Primary</Style>
      <Style type="default">Default</Style>
      <Style type="dashed">Dashed</Style>
      <Style type="text">Text</Style>
      <Style type="link">Link</Style>
    </div>
  )
}

export default App
