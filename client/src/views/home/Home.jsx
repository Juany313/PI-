/* style */
import style from './Home.module.css'; 
import miImagen from '../../assets/fondoHome.jpg';
/* components */
import Navbar from "../../components/navbar/Nav"
import Cards from "../../components/cards/Cards"

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import {getDrivers, getDriversByName,getDriversByTeam,getDriversByOrigin} from "../../redux/actions"
 

//! LE DEDICO TIEMPO Y LO HAGO LO MEJOR QUE PUEDO. VAMOS CARAJOOOO!!!
//! COMPRENDO BIEN COMO FUNCIONA TODA LA LÒGICA ASI LA PUEDO EXPLICAR BIEN TAMBIÉN

function Home() {

  const dispatch = useDispatch();
  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);
  const allDriversCopy = useSelector((state)=> state.driversCopy);
  
  /* Estado local */
  const [searchString, setSearchString] = useState("");
  const [searchStringTeam, setSearchStringTeam] = useState("");

  
  /* const [activeButton, setActiveButton] = useState(null);
  const [driversForCards, setDriversForCards] = useState([])
   */

  
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
    console.log("aca lo que hay en searchString",searchString);
    dispatch(getDriversByName(searchString))
  }
  function handleSubmitTeam(){
    console.log("aca lo que hay en searchStringTeam",searchStringTeam);
    dispatch(getDriversByTeam(searchStringTeam))
    //console.log("acaDriverrsss", allDrivers);
  }

 

  useEffect(()=>{
    dispatch(getDrivers());
    console.log("aca allDrivers###############",allDrivers);
  }, [dispatch]);

  useEffect(() => {
    console.log("aca allDrivers actualizado:", allDrivers);
  }, [allDrivers]);

  function handleSubmitOrigin(origin){
    // Despachar la acción con el argumento 
    console.log("ACAORIGIN", origin);
    dispatch(getDriversByOrigin(origin));
    console.log("aca allDrivers###############",allDrivers);

  }

  return (
    <div className={style.home}>
      <div className={style.nav_container}>
        <Navbar className={style.nav_container_navbar} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div>
          <input className={style.buscar_team} type="search" value={searchStringTeam} onChange={handleChangeTeam} />
            <button onClick={handleSubmitTeam}>Buscar Team</button>
        </div>
      </div>
      <div>
        <button onClick={() => handleSubmitOrigin("api")}>Obtener origen API</button>
        <button onClick={() => handleSubmitOrigin("bdd")}>Obtener origen BDD</button>
        <button onClick={() => handleSubmitOrigin("all")}>Obtener TODOS</button>
      </div>

      <Cards driversForCards={allDrivers} allDriversCopy={allDriversCopy} />
    </div>
  );
  }
  
  export default Home;

