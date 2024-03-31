import style from './Cards.module.css';

/* dependencias */
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import { advancePage, goBackPage, setCurrentPage, resetPage } from '../../redux/actions';
/* para usar con estas actions */
const itemsPerPage = 6; // Número de objetos por página

/* components */
import Card from "../card/Card"

import {Link} from "react-router-dom";



function Cards() {
  //Cuando me llega una sola props hago el destructuring directo.
  //Cuando me llegan muchas props hago el destructuring dentro de la funcion, queda mas ordenado.

  /* ESTADOS LOCALES */
  const [driversForCard, setDriversForCard] = useState([])
 

  /* ESTADO GLOBAL */
  const allDrivers = useSelector((state)=> state.allDrivers);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    // Esta función se ejecutará cada vez que currentPage o allDrivers cambien
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const driversForCardRecorte = allDrivers.slice(startIndex, endIndex);
    console.log("Lista de conductores recortada:", driversForCardRecorte);
    setDriversForCard(driversForCardRecorte);
  }, [currentPage, allDrivers]); // Dependencias del efecto


  /* PAGINADO */
  /* const totalPages = allDrivers.length;  no uso esto porque a partir de la pagina 86 ya no hay nada
  */
  const totalPages = 86;

  const handleResetClick = () => {
    console.log("resetttttttttt");
    dispatch(resetPage()); // Despachar la acción para restablecer la página
  };
  const nextPage = () => {
    dispatch(advancePage());
  };

  const prevPage = () => {
    if(currentPage>1){

      dispatch(goBackPage());
    }
  };
  const finalPage = () => {
    dispatch(setCurrentPage(totalPages));
  };
  

  //! Usar esta funcion, que aparezcan los numeros de páginasssssssssssss
  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };
 

  // Calcula el rango de botones de página a mostrar
const maxButtonsToShow = 8;
let startPage = currentPage - Math.floor(maxButtonsToShow / 2);
let endPage = startPage + maxButtonsToShow - 1;

// Ajusta el inicio y fin del rango si es necesario
if (startPage < 1) {
  startPage = 1;
  endPage = Math.min(totalPages, maxButtonsToShow);
} else if (endPage > totalPages) {
  endPage = totalPages;
  startPage = Math.max(1, endPage - maxButtonsToShow + 1);
}

  const pageButtons = [];
for (let i = startPage; i <= endPage; i++) {
  const buttonStyle = i === currentPage ? { 
    border: '2px solid #1a1a1a',
    borderRadius: '20px',
    backgroundColor: '#41e6e5',
    color: '#1a1a1a'
  } : null;
  pageButtons.push(
    <button key={i} type="button" onClick={() => goToPage(i)} style={buttonStyle}>{i}</button>
  );
}



  return (
    <div className={style.cards_container_principal}>
      <div className={style.list}>

      {(Array.isArray(driversForCard)) && driversForCard.map((driver)=>{
        return (
          <Link key={driver.id} to={`/detail/${driver.id}`}>
            <Card key={driver.id} driver={driver}/>
          </Link>
        )
      })}
      </div>
      <div className={style.cards_container_principal_but}>

          <button type="button" onClick={prevPage}>
            Prev
          </button>
          <button type="button" onClick={handleResetClick}>
            ..
          </button>
          {pageButtons}
          <button type="button" onClick={finalPage}>
            ..
          </button>
          <button type="button" onClick={nextPage}>
            Next
          </button>
         
      </div> 
    </div>
    
  );
}


export default Cards;


