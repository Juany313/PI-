/* style */
import './App.css'

/* dependencias */
import {Route,Routes,useLocation} from "react-router-dom";
import { useEffect } from 'react';

/* Components */
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';

function App() {
  

  return (
      <>
        <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/form" element={<Form/>} />
        </Routes> 
      </>
  )  
}

export default App
