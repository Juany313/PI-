/* style */
import style from './Detail.module.css'; 

/* hooks */
import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from 'react';

/* dependencias */
import axios from 'axios';

 
function Detail() {

  const { id } = useParams();
  const [driver, setDriver] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
      setDriver(data);
    });
    return setDriver({});
 }, [id]);
 console.log("ACA IDDDDDDDDDDD",id);
  console.log("este es el driver", driver);
    return (
      <div className={style.container}>
        <Link  to={`/home`}>
        <button>HOME</button>
        </Link>
        <p>ACA DETAIL</p>
        {driver.nationality && <h2>{driver.nationality}</h2>}
          
      </div>
    )
  }
  
  export default Detail;
  
  /* 
        ID.
      Nombre.
      Apellido.
      Nacionalidad.
      Imagen.
      Descripción.
      Fecha de Nacimiento.
      Escuderías.
  */