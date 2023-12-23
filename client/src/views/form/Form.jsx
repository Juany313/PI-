/* style */
import style from './Form.module.css'; 

/* hoocks */
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
/* actions */
import {getTeams} from "../../redux/actions"

/* components */
import ListaTeams from "../../components/listaTeams/ListaTeams"
 
function Form() {
  const dispatch = useDispatch();
  /* Estado global */
  const allTeams = useSelector((state)=> state.allTeams);



//! ver como hacer que se borren los datos del formulario cuando se envian


  useEffect(()=>{
    dispatch(getTeams());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  const handleOpcionesSeleccionadasChange = (nuevasOpcionesSeleccionadas) => {
    // Maneja las opciones seleccionadas como sea necesario en el componente padre
    console.log("Opciones seleccionadas en el componente padre:", nuevasOpcionesSeleccionadas);
  };
 
  

    return (
      <>
      <form onSubmit={handleSubmit}>
      <div>
          <h1>Lista de Teams</h1>
          <ListaTeams 
          opciones={allTeams} 
          onOpcionesSeleccionadasChange={handleOpcionesSeleccionadasChange} 
           />
        </div>
      <button type="submit">Enviar</button>
    </form>
        
  
          
      </>
    )
  }
  
  export default Form;
  