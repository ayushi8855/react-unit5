import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { Showtitle } from './components/Showtitle';
import { Todo } from './components/Todo';
import { addCount } from './Redux/action';
import { store } from './Redux/store';


function App() {

  return (
    <div className="App">
     {/* <Counter></Counter>
     <Todo/> */}
     <Routes>
       <Route path='/'  element={<Todo></Todo>}></Route>
       <Route path="/todo/:id"  element={<Showtitle></Showtitle>}></Route>
     </Routes>
    </div>
  );
}

export default App;
