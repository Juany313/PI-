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
  /* const { pathname } = useLocation();

  useEffect(() => {
    // Elimina todas las clases anteriores antes de aplicar las nuevas
    document.body.classList.remove('landing_body', 'home_body', 'detail_body', 'form_body');
  
    // Verifica la ruta actual y agrega la clase correspondiente
    if (pathname === "/detail/:id") {
      document.body.classList.add('detail_body');
    } else if (pathname === "/home") {
      document.body.classList.add('home_body');
    } else if (pathname === "/") {
      document.body.classList.add('landing_body');
    } else {
      // Si no es ninguna de las rutas anteriores, aplica una clase predeterminada
      document.body.classList.add('form_body');
    }
  
    // Importante: limpiar las clases cuando el componente se desmonta
    return () => {
      document.body.classList.remove('landing_body', 'home_body', 'detail_body', 'form_body');
    };
  }, [pathname]);
   */

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
