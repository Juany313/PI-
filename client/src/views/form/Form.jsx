/* style */
import style from './Form.module.css'; 

/* hooks */
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
/* actions */
import {getTeams} from "../../redux/actions"



  function Form() {

    /* aca va lo referido a la lista de teams */
    const [mostrarLista, setMostrarLista] = useState(false);
    const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

    const toggleMostrarLista = () => {
      setMostrarLista(!mostrarLista);
    };

    const handleCheckboxChange = (opcion) => {
      setOpcionesSeleccionadas((prevOpcionesSeleccionadas) => {
        const nuevasOpcionesSeleccionadas = prevOpcionesSeleccionadas.includes(opcion)
          ? prevOpcionesSeleccionadas.filter((opt) => opt !== opcion)
          : [...prevOpcionesSeleccionadas, opcion];
    
        setDriverData((prevDriverData) => ({
          ...prevDriverData,
          Teams: nuevasOpcionesSeleccionadas,
        }));
    
        return nuevasOpcionesSeleccionadas;
      });
    };
    
  

    /* Estado global */
    const dispatch = useDispatch();
    const allTeams = useSelector((state)=> state.allTeams);
      
      useEffect(()=>{
        dispatch(getTeams());
      }, [dispatch]);
      
   

      const [driverData, setDriverData] = useState({
        name: '',
        description:'',
        nationality:'',
        dob:'',
        Teams: [], // Inicializa Teams como un array vacío
        
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
 console.log("acateammmmmmss", opcionesSeleccionadas);
        
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
      
      <div className="lista-teams-container">
      <button onClick={toggleMostrarLista}>{mostrarLista ? 'Ocultar Lista' : 'Mostrar Lista'}</button>
      {mostrarLista && (
        <ul className="lista-teams">
          {allTeams?.map((opcion) => (
            <li key={opcion}>
              <input
                type="checkbox"
                id={opcion}
                value={opcion}
                checked={opcionesSeleccionadas.includes(opcion)}
                onChange={() => handleCheckboxChange(opcion)}
              />
              <label htmlFor={opcion} style={{ color: opcionesSeleccionadas.includes(opcion) ? 'yellow' : 'black' }}>
                {opcion}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>

      <button type="submit">Crear Driver</button>
    </form>
        
  
          
      </>
    )
  }
  
  export default Form;
  