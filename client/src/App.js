import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Details from './views/Details';
import CreateTravel from './views/CreateTravel';
import UpdateTravel from './views/UpdateTravel';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/create"}>create</Link>
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
