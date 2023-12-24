/* style */
import style from './Detail.module.css'; 

/* hooks */
import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from 'react';

/* dependencias */
import axios from 'axios';

 
function Detail() {

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  
    return (
      <div className={style.container}>
        <Link  to={`/home`}>
        <button>HOME</button>
        </Link>
        <p>ACA DETAIL</p>
        {character && <h2>character.nationality</h2>}
          
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