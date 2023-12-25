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

  //!ENCONTRAR UNA IMAGEN ALTERNATIVA SIN DERECHOS DE AUTOR DE UN DRIVER

  const imageAlternativa = "https://wallpapers.com/images/featured/universe-qs811igzbabl1m0o.jpg"

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
        <img
        src={driver.image ? (typeof image === "string" ? driver.image : driver.image.url) : imageAlternativa}
        alt=""
      />
        {driver.id && <h2>Id: {driver.id}</h2>}
        {driver.name && <h2>Nombre: {driver.name}</h2>}
        {driver.lastName && <h2>Apellido: {driver.lastName}</h2>}
        {driver.nationality && <h2>Nacionalidad: {driver.nationality}</h2>}
        {driver.dob && <p>Fecha de Nacimiento: {driver.dob}</p>}
        {driver.description && <p>Descripción: {driver.description}</p>}
        {driver.Teams && (
      <div>
        <h2>Escuderías:</h2>
        <ul>
          {driver.Teams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
    )}
          
      </div>
    )
  }
  
  export default Detail;
  
  