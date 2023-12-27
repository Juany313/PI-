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
 




function Home() {

  const dispatch = useDispatch();
  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);
  const driversCopy = useSelector((state)=> state.driversCopy);
  const [searchString, setSearchString] = useState("");

  function handleChange(e){
    setSearchString(e.target.value)
  }

  function handleSubmit(){
    dispatch(getDriversByName(searchString))
    setValorPage(() => ({
      start: 0,
      end: 9,
    }));
  }
  function handleSubmitTeam(){
    console.log(searchString);
    dispatch(getDriversByTeam(searchString))
    setValorPage(() => ({
      start: 0,
      end: 9,
    }));
  }

  useEffect(()=>{
    dispatch(getDrivers());
  }, [dispatch]);
  
  /* Estado local buttons Prev y Next*/
  const [valorPage, setValorPage] = useState({ start: 0, end: 9 });
  const [activeButton, setActiveButton] = useState(null);
  const [driversForCards, setDriversForCards] = useState([])
  
  const handlePrevClick = () => {
    if (valorPage.start > 0) {
      setValorPage((prevState) => ({
        start: prevState.start - 9,
        end: prevState.end - 9,
      }));
    }
  };

  const handleNextClick = () => {
    // Aquí puedes agregar una verificación para evitar que se excedan los límites de tu array
    // Supongamos que hay un array llamado `tuArray` y su longitud es `tuArray.length`
     if (valorPage.end < allDrivers.length) {
      console.log("aca cantidad de driversssssssss",driversForCards.length);
      console.log("aca valorprevState.end + 9",valorPage.end + 9);
    setValorPage((prevState) => ({
      start: prevState.start + 9,
      end: prevState.end + 9,
    }));
     }
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  
    // Lógica de ordenación según el tipo de botón
    let sortedDrivers = [...allDrivers];
  
    if (buttonType === 'ascendente') {
      // Ordenar alfabéticamente ascendente
      sortedDrivers = [...allDrivers].sort((a, b) => a.name.localeCompare(b.name));
    } else if (buttonType === 'descendente') {
      // Ordenar alfabéticamente descendente
      sortedDrivers = [...allDrivers].sort((a, b) => b.name.localeCompare(a.name));
    } else if (buttonType === 'fechaNacimiento') {
      // Ordenar por fecha de nacimiento
      sortedDrivers = [...allDrivers].sort((a, b) => new Date(a.dob) - new Date(b.dob));
    } else if (buttonType === 'sinOrden') {
        //borro lo del campo de busqueda
        setSearchString("");
      // Ordenar como cuando carga la página
      sortedDrivers = [...driversCopy];
    }
  
    // Actualizar el estado con la lista ordenada
    setDriversForCards(sortedDrivers);
  
    // Resetear la paginación
    setValorPage(() => ({ start: 0, end: 9 }));
  };
  
  let driversForCardsRecorte = driversForCards.slice(valorPage.start, valorPage.end);
  
  // Si no se ha presionado ningún botón, usar allDrivers por props
  if (!activeButton) {
    driversForCardsRecorte = allDrivers.slice(valorPage.start, valorPage.end);
  }
  
  return (
    <div className={style.home}>
      <p className={style.title}>Home</p>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      
      <h2>Filtrar:</h2>
      <div>
      <input type="search" value={searchString} onChange={handleChange} />
      <button onClick={handleSubmitTeam}>Buscar Team</button>
    </div>

      <h2>Ordenar:</h2>
      <div>
      <button
        type="button"
        className={activeButton === 'ascendente' ? 'active' : 'noactive'}
        onClick={() => handleButtonClick('ascendente')}
      >
        Ascendente
      </button>
      <button
        type="button"
        className={activeButton === 'descendente' ? 'active' : 'noactive'}
        onClick={() => handleButtonClick('descendente')}
      >
        Descendente
      </button>
      <button
        type="button"
        className={activeButton === 'fechaNacimiento' ? 'active' : 'noactive'}
        onClick={() => handleButtonClick('fechaNacimiento')}
      >
        Fecha de Nacimiento
      </button>
      <button
        type="button"
        className={activeButton === 'sinOrden' ? 'active' : 'noactive'}
        onClick={() => handleButtonClick('sinOrden')}
      >
        Reset
      </button>
      </div>
      
      <div>
          <button type="button" onClick={handlePrevClick}>
            Prev
          </button>
          <button type="button" onClick={handleNextClick}>
            Next
          </button>
      </div>
      

      <Cards driversForCards={driversForCardsRecorte} />
    </div>
  );
  }
  
  export default Home;

