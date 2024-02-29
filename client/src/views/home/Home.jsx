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
import {getDrivers, getDriversByName,getDriversByTeam,getDriversByOrigin} from "../../redux/actions"
 


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
  function handleSubmitOrigin(origin){
    // Despachar la acción con el argumento 
    dispatch(getDriversByOrigin(origin));
  }
  
  

 /*  useEffect(()=>{
    dispatch(getDrivers());
  }, [dispatch]); */
  
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
            
            <button onClick={() => handleSubmitOrigin("api")}>Obtener origen API</button>
            <button onClick={() => handleSubmitOrigin("bdd")}>Obtener origen BDD</button>
            <button onClick={() => handleSubmitOrigin("all")}>Obtener TODOS</button>
          </div>
      </div>
      

      <Cards driversForCards={allDrivers}  />
    </div>
  );
  }
  
  export default Home;

