import style from './Cards.module.css';

/* dependencias */
import {useState} from "react";

/* components */
import Card from "../card/Card"

import {Link} from "react-router-dom";

function Cards({driversForCards,allDriversCopy}) {
  //Cuando me llega una sola props hago el destructuring directo.
  //Cuando me llegan muchas props hago el destructuring dentro de la funcion, queda mas ordenado.

  /* ESTADOS LOCALES */
  const [valorPage, setValorPage] = useState({ start: 0, end: 9 });
  const [driversForCard, setDriversForCard] = useState([])
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  
    // Lógica de ordenación según el tipo de botón
    let sortedDrivers = [...driversForCards];
  
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
      //sortedDrivers = [...driversForCards];
      setActiveButton(null);
    }
  console.log("aca lo que hay en sortedDrivers",sortedDrivers);
    // Actualizar el estado con la lista ordenada
    setDriversForCard(sortedDrivers);
  
    // Resetear la paginación
    setValorPage(() => ({ start: 0, end: 9 }));
  };
  
  
  let driversForCardRecorte = driversForCard.slice(valorPage.start, valorPage.end);
  
  // Si no se ha presionado ningún botón, usar allDrivers por props
   if (!activeButton) {
    driversForCardRecorte = driversForCards.slice(valorPage.start, valorPage.end);
  } 

  const handlePrevClick = () => {
    if (valorPage.start > 0) {
      setValorPage((prevState) => ({
        start: prevState.start - 9,
        end: prevState.end - 9,
      }));
    }
  };

  const handleNextClick = () => {
      if (valorPage.end < driversForCards.length) {
        setValorPage((prevState) => ({
        start: prevState.start + 9,
        end: prevState.end + 9,
        }));
      }
  };
  console.log("estado del button", activeButton);
  console.log("aca en card lo que llega porprops,driversForCards ", driversForCards);
  console.log("aca en card lo que recorto ", driversForCardRecorte);
  //console.log("aca en card lo que llega a allDriversCopy", allDriversCopy);
  return (
    <div className={style.cards_container_principal}>
      <h2>Ordenar:</h2>
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
      </div> 
      <div>
          <button type="button" onClick={handlePrevClick}>
            Prev
          </button>
          <button type="button" onClick={handleNextClick}>
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


