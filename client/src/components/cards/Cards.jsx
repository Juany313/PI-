import style from './Cards.module.css';

import Card from "../card/Card"

import {Link} from "react-router-dom";

function Cards({allDrivers}) {
  //Cuando me llega una sola props hago el destructuring directo.
  //Cuando me llegan muchas props hago el destructuring dentro de la funcion, queda mas ordenado.

  

  const driverList = allDrivers;

  return (
    <div className={style.list}>
      {driverList?.map((driver)=>{
        return (
          <Link  to={`/detail/${driver.id}`}>
            <Card key={driver.id} driver={driver}/>
          </Link>
        )
      })}
    </div>
  );
}

export default Cards;


