/* style */
import style from './Form.module.css'; 

/* hooks */
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
/* actions */
import {getTeams} from "../../redux/actions"

/* components */
import ListaTeams from "../../components/listaTeams/ListaTeams"
 
  function Form() {
      //const dispatch = useDispatch();
      /* Estado global */
    /*  const allTeams = useSelector((state)=> state.allTeams);

      useEffect(()=>{
        dispatch(getTeams());
      }, [dispatch]);

      

      const handleOpcionesSeleccionadasChange = (nuevasOpcionesSeleccionadas) => {
        // Maneja las opciones seleccionadas como sea necesario en el componente padre
        console.log("Opciones seleccionadas en el componente padre:", nuevasOpcionesSeleccionadas);
      };
    */

      const [driverData, setDriverData] = useState({
        name: '',
        description:'',
        nationality:'',
        dob:''
        
      });
      const [errors, setErrors] = useState({
        name: '',
        description:'',
        nationality:'',
        dob:''
      });

      const validate = (driverData)=>{
        
        let errors = {};
    /* Sabri recomienda hacer un if elseif si es necesario por cada campo */
        if (!driverData.name) {
          errors.name = 'El nombre del driver no puede estar vacío.';
        }
        return errors;
      }
        const handleChange= (event)=>{
          const property = event.target.name;
          const value = event.target.value;

          setDriverData({...driverData, [property]: value});

          setErrors(
            validate({
              ...driverData,
              [event.target.name]: event.target.value,
            })
          );
        }

 console.log("acadriverdataaaaaaa",driverData);
 console.log("acaerrors",errors);
        
        const handleSubmit = (event) => {
          event.preventDefault();

        };
//description  image  nationality   dob
    return (
      <>
      <div>
        <Link  to={`/home`}>
          <button>HOME</button>
        </Link>
      </div>
      
      <form onSubmit={handleSubmit}>
      <div> 
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          name="name" 
          value={driverData.name} 
          onChange={handleChange} 
          />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div> 
        <label htmlFor="description">Descripción</label>
        <input 
          type="text" 
          name="description" 
          value={driverData.description} 
          onChange={handleChange} 
          />
        {errors.description && <span>{errors.description}</span>}
      </div>

      <div> 
        <label htmlFor="nationality">Nacionalidad</label>
        <input 
          type="text" 
          name="nationality" 
          value={driverData.nationality} 
          onChange={handleChange} 
          />
        {errors.nationality && <span>{errors.nationality}</span>}
      </div>
      <div> 
        <label htmlFor="dob">Fecha de Nacimiento</label>
        <input 
          type="date" 
          name="dob" 
          value={driverData.dob} 
          onChange={handleChange} 
          />
        {errors.dob && <span>{errors.dob}</span>}
      </div>
      
      {/* <div>
          <h1>Lista de Teams</h1>
          <ListaTeams 
          opciones={allTeams} 
          onOpcionesSeleccionadasChange={handleOpcionesSeleccionadasChange} 
           />
        </div> */}
      <button type="submit">Crear Driver</button>
    </form>
        
  
          
      </>
    )
  }
  
  export default Form;
  