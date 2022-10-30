import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/:id' element={<Details></Details>}/>
      </Routes>
      
    </div>
  );
}

export default App;
