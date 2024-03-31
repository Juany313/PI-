import style from './Cards.module.css';

/* dependencias */
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import { advancePage, goBackPage, setCurrentPage, resetPage,getDriversByOrder } from '../../redux/actions';
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

  //! Usar esta funcion, que aparezcan los numeros de páginasssssssssssss
  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };


  /* function handleSelectChange() {
    var orden = document.getElementById("ordenSeleccionado").value;
    handleButtonClick(orden);
  }
  const handleButtonClick = (order) => {
    dispatch(getDriversByOrder(order))
  } */
  
  

  


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

          {/* <select className={style.ordenSeleccionado} id="ordenSeleccionado" onChange={handleSelectChange}>
            <option value="orden">Orden</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
            <option value="fechaNacimiento">FDN</option>
          </select> */}

         

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
    </div>
    
  );
}


export default Cards;


