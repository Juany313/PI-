import style from './Cards.module.css';

/* dependencias */
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import { advancePage, goBackPage, setCurrentPage } from '../../redux/actions';
/* para usar con estas actions */
const itemsPerPage = 9; // Número de objetos por página

/* components */
import Card from "../card/Card"

import {Link} from "react-router-dom";

function Cards({driversForCards}) {
  //Cuando me llega una sola props hago el destructuring directo.
  //Cuando me llegan muchas props hago el destructuring dentro de la funcion, queda mas ordenado.

  /* ESTADOS LOCALES */
  
  const [driversForCard, setDriversForCard] = useState([])
  const [activeButton, setActiveButton] = useState(null);
 

  /* ESTADO GLOBAL */
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  console.log("###########current PAGEEEE ACAA; ",currentPage);
  //!#####################################################################################
  //! TENGO QUE VER PORQUE ESTO ME DA UNDIFINED Y HACER CORRECCIONES!!
  console.log("###########current startIndex ACAA; ",startIndex);
  console.log("###########current endIndex ACAA; ",endIndex);

  // Calcula el índice de inicio y fin del array para la página actual
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  

  /* PAGINADO */
  const nextPage = () => {
    dispatch(advancePage());
  };

  const prevPage = () => {
    dispatch(goBackPage());
  };

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };


  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  
    // Lógica de ordenación según el tipo de botón
    let sortedDrivers = [];
  
    if (buttonType === 'ascendente') {
      // Ordenar alfabéticamente ascendente
      sortedDrivers = [...driversForCards].sort((a, b) => a.name.localeCompare(b.name));
    } else if (buttonType === 'descendente') {
      // Ordenar alfabéticamente descendente
      sortedDrivers = [...driversForCards].sort((a, b) => b.name.localeCompare(a.name));
    } else if (buttonType === 'fechaNacimiento') {
      // Ordenar por fecha de nacimiento
      sortedDrivers = [...driversForCards].sort((a, b) => new Date(a.dob) - new Date(b.dob));
    } else if (buttonType === 'sinOrden') {
      // Ordenar como cuando carga la página
      
      setActiveButton(null);
    }

    // Actualizar el estado con la lista ordenada
    setDriversForCard(sortedDrivers);
  }
  
  console.log("driversforcarddddddddddddddddd", driversForCard );
  
  let driversForCardRecorte = driversForCard.slice(startIndex, endIndex);
  
  // Si no se ha presionado ningún botón, usar allDrivers por props
   if (!activeButton) {
    driversForCardRecorte = driversForCards.slice(startIndex, endIndex);
  } 

 
  
  return (
    <div className={style.cards_container_principal}>
      <div className={style.cards_container_principal_but}>
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
          <button type="button" onClick={prevPage}>
            Prev
          </button>
          {/* <button type="button" onClick={handlePrevClick}>
          {valorPage.numero}
          </button> */}
          <button type="button" onClick={nextPage}>
            Next
          </button>
         
      </div> 
      <div className={style.list}>

      {(Array.isArray(driversForCardRecorte)) && driversForCardRecorte.map((driver)=>{
        return (
          <Link key={driver.id} to={`/detail/${driver.id}`}>
            <Card key={driver.id} driver={driver}/>
          </Link>
        )
      })}
      </div>
    </div>
    
  );
}


export default Cards;


