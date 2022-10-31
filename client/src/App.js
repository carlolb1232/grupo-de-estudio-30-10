import './App.css';
import Main from './views/Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Details from './views/Details';
import CreateTravel from './views/CreateTravel';
import UpdateTravel from './views/UpdateTravel';

function App() {
  return (
    <div className="App">
      <nav className='nav-container'>
        <ul className='nav justify-content-end'>
          <li className='nav-item'>
            <Link className='nav-link' to={"/"}>HOME</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={"/create"}>create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/:id' element={<Details></Details>}/>
        <Route path='/create' element={<CreateTravel />}/>
        <Route path='/update/:id' element={<UpdateTravel />}/>
      </Routes>

    </div>
  );
}

export default App;
