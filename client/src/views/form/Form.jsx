/* style */
import style from './Form.module.css'; 

/* hooks */
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
/* actions */
import {getTeams,postDriver} from "../../redux/actions"

/* utils */
import validate from "../../utils"



  function Form() {

    const [mostrarLista, setMostrarLista] = useState(false);
    const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);
    const [driverData, setDriverData] = useState({
      name: '',
      lastName: '',
      description:'',
      nationality:'',
      dob:'',
      teams: [], 
      
    });
    const [errors, setErrors] = useState({
      name: '',
      lastName: '',
      description:'',
      nationality:'',
      dob:'',
      teams: ''
    });

    
    /* Estado global */
    const dispatch = useDispatch();
    const allTeams = useSelector((state)=> state.allTeams);
    
    useEffect(()=>{
      dispatch(getTeams());
    }, [dispatch]);
    
    
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
          teams: nuevasOpcionesSeleccionadas,
        }));
    
        // Validar Teams y actualizar errores
          const newErrors = validate({
            ...driverData,
            teams: nuevasOpcionesSeleccionadas,
          });

          setErrors(newErrors);

        return nuevasOpcionesSeleccionadas;
      });
    };

      

      const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
      
        setDriverData({ ...driverData, [property]: value });
      
        setErrors((prevErrors) => {
          const newErrors = validate({
            ...driverData,
            [property]: value, 
          });
      

          return newErrors;
          });
        };
      
        
        const handleSubmit = (event) => {
          event.preventDefault();
          dispatch(postDriver(driverData));
          alert("CONDUCTOR CREADO CON EXITO!!")
          // Recarga la página
          window.location.reload();
        };

    return (
      <div className={style.container_principal}>
        <div className={style.container}>

              <div className={style.container_butonn}>
                <Link  to={`/home`}>
                  <button >HOME</button>
                </Link>
              </div>
            
              <form className={style.container_form} onSubmit={handleSubmit}>
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
                <label htmlFor="lastName">Apellido</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={driverData.lastName} 
                  onChange={handleChange} 
                  />
                {errors.lastName && <span>{errors.lastName}</span>}
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
                  <button type="button" onClick={toggleMostrarLista}>{mostrarLista ? 'Ocultar Lista' : 'Seleccionar Teams'}</button>
                  {errors.teams && <span>{errors.teams}</span>}
                  {mostrarLista && (
                    <div className={style.lista_teams_scrollable}>
                      <ul className={style.lista_teams}>
                        {allTeams?.map((opcion) => (
                          <li key={opcion}>
                            <input
                              type="checkbox"
                              id={opcion}
                              value={opcion}
                              checked={opcionesSeleccionadas.includes(opcion)}
                              onChange={() => handleCheckboxChange(opcion)}
                            />
                            <label htmlFor={opcion} style={{ color: opcionesSeleccionadas.includes(opcion) ? 'pink' : 'yellow' }}>
                              {opcion}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>


              <button type="submit" disabled={Object.keys(errors).length > 0}>Crear Driver</button>
              </form>
        </div>
        
  
          
      </div>
    )
  }
  
  export default Form;
  