/* style */
import style from './Home.module.css'; 
import miImagen from '../../assets/fondoHome.jpg';

/* components */
import Navbar from "../../components/navbar/Nav"
import Cards from "../../components/cards/Cards"

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"

/* actions */
import {getDrivers, getDriversByName,getDriversByTeam,getDriversByOrigin,getDriversByOrder} from "../../redux/actions"
 


function Home() {

  const dispatch = useDispatch();
  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);
  
  /* Estado local */
  const [searchString, setSearchString] = useState("");
  const [searchStringTeam, setSearchStringTeam] = useState("");

  

  
  function handleChange(e) {
    setSearchString(e.target.value);
  
    if (e.target.value === "") {
      dispatch(getDrivers());
    }
  }
  function handleChangeTeam(e){
    setSearchStringTeam(e.target.value)

    if (e.target.value === "") {
      dispatch(getDrivers());
    }
  }

  function handleSubmit(){
    //console.log("aca lo que hay en searchString",searchString);
    dispatch(getDriversByName(searchString))
    
  }

  function handleSubmitTeam(){
    //console.log("aca lo que hay en searchStringTeam",searchStringTeam);
    dispatch(getDriversByTeam(searchStringTeam))
    //console.log("acaDriverrsss", allDrivers);
  }
  

  function handleSelectChangeOrigin() {
    var origin = document.getElementById("origenSeleccionado").value;
    console.log("acaestael origennnn", origin);
    handleSubmitOrigin(origin);
  }



  function handleSubmitOrigin(origin){
    // Despachar la acción con el argumento 
    dispatch(getDriversByOrigin(origin));
    let orden = document.getElementById("ordenSeleccionado");
    orden.value = "orden";
  }
  
  //Aca funciones de los ordenamientossssssssssss
  function handleSelectChange() {
    let orden = document.getElementById("ordenSeleccionado").value;
    handleButtonClick(orden);
  }
  const handleButtonClick = (order) => {
    dispatch(getDriversByOrder(order));
  }
  

  //Primera renderizacion
  useEffect(() => {
    // Verifica si la lista de conductores ya está cargada en el estado global de Redux
    if (!allDrivers.length) {
      // Si no está cargada, realiza la carga inicial
      dispatch(getDrivers());
    }
  }, [dispatch, allDrivers]);


  return (
    <div className={style.home}>
      <div className={style.nav_container}>
      
          <Link to="/">
          <button>Landing</button>
          </Link>
          <Link to="/form">
          <button>Crear Driver</button>
          </Link>
        
          <div>
            <Navbar className={style.nav_container_navbar} handleChange={handleChange} handleSubmit={handleSubmit} />
              <input className={style.buscar_team} type="search" value={searchStringTeam} onChange={handleChangeTeam} />
                <button onClick={handleSubmitTeam}>Buscar Team</button>
            

            <select className={style.origenSeleccionado} id="origenSeleccionado" onChange={handleSelectChangeOrigin}>
            <option value="all">Origen</option>
            <option value="api">Origen API</option>
            <option value="bdd">Origen BDD</option>
            <option value="all">TODOS</option>
            </select>

            <select className={style.ordenSeleccionado} id="ordenSeleccionado" onChange={handleSelectChange}>
            <option value="orden">Orden</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
            <option value="fechaNacimiento">FDN</option>
            </select>
          </div>
      </div>
      

      <Cards driversForCards={allDrivers}  />
    </div>
  );
  }
  
  export default Home;

