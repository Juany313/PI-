import style from './Cards.module.css';

/* dependencias */
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import { advancePage, goBackPage, setCurrentPage, resetPage } from '../../redux/actions';
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
  
  // Calcula el índice de inicio y fin del array para la página actual
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  
  console.log("###########current startIndex ACAA; ",startIndex);
  console.log("###########current endIndex ACAA; ",endIndex);

  /* PAGINADO */
  //! tengo que ver como hacer que funcione el reset, que recargue la pagina
  const handleResetClick = () => {
    console.log("resetttttttttt");
    dispatch(resetPage()); // Despachar la acción para restablecer la página
  };
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
  //! esto quizas es mejor hacerlo en redux
  //! MODIFICO LO QUE TENGA QUE MODIFICAR PARA QUE QUEDE LO MEJOR POSIBLE EL PROYECTO, QUE FUNCIONE COMO QUIERO
  //! QUE ME HAGA SENTIR ORGULLOSOS DE LO QUE HICE
  //? HAGO UNA LISTA DE LO QUE QUIERO MEJORAR, Y LO ESTRUCTURO EN PASOS
  //! YA QUE ESTA ESTO ME SIRVE PARA MEJORAR MI MANERA DE ORGANIZARME Y SER MÁS AGIL

  /* 
    MAQUETACIÓN (puedo hacer una vista nueva para practicar eso y para practicar lo demas puedo hacer lo mismo 
      entonces practico en la misma app y me aseguro de que funcione sin poner en riesgo lo otro y probando cosas nuevas!!)
  */


//! HACER ESTO EN REDUXXXXXXXXXXXXXXXXX
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
         
          <button type="button" onClick={handleResetClick}>
            Reset
          </button>
          <button type="button" onClick={prevPage}>
            Prev
          </button>
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


