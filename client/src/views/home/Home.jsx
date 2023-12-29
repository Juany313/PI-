/* style */
import style from './Home.module.css'; 

/* components */
import Navbar from "../../components/navbar/Nav"
import Cards from "../../components/cards/Cards"

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import {getDrivers, getDriversByName,getDriversByTeam} from "../../redux/actions"
 


//! lo enfoco de esta manera
/* adentro de la funcion de los ordenamientos (ascendente,etc) ni bien la uso mando 
un dispatch con getDrivers, entonces condiciono a que allDrivers sea lo que yo quiera
y asi lo mismo en las otras funciones*/

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

  //!Falta hacer la logica
  function handleSubmitOrigin(){
    dispatch(getDriversByOrigin())
    //console.log("acaDriverrsss", allDrivers);
  }

  useEffect(()=>{
    dispatch(getDrivers());
    console.log("aca allDrivers###############",allDrivers);
  }, [dispatch]);

  return (
    <div className={style.home}>
      <p className={style.title}>Home</p>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div>
        <input type="search" value={searchStringTeam} onChange={handleChangeTeam} />
          <button onClick={handleSubmitTeam}>Buscar Team</button>
        </div>
      {/* <h2>Filtrar:</h2>
      <div>
        

        <button
          type="button"
          className={activeButton === 'bdd' ? 'active' : 'noactive'}
          onClick={() => handleOriginClick('bdd')}>
            Drivers BDD
        </button>
        <button
          type="button"
          className={activeButton === 'api' ? 'active' : 'noactive'}
          onClick={() => handleOriginClick('api')}>
            Drivers Api
        </button>
      </div>
 */}

      <Cards driversForCards={allDrivers} allDriversCopy={allDriversCopy} />
    </div>
  );
  }
  
  export default Home;

