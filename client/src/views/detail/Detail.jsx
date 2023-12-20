/* style */
import style from './Detail.module.css'; 

import React from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

 
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