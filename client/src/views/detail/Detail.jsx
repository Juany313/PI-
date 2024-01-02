/* style */
import style from './Detail.module.css'; 

/* hooks */
import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from 'react';

/* dependencias */
import axios from 'axios';

/* imagen */
import miImagen from '../../assets/imgPiloto.jpg';
 
function Detail() {

  const { id } = useParams();
  const [driver, setDriver] = useState({});


  const imageAlternativa = miImagen

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
      setDriver(data);
    });
    return setDriver({});
 }, [id]);
 console.log("ACA IDDDDDDDDDDD",id);
  console.log("este es el driver", driver);
    return (
      <div className={style.detail_container}>
        <div className={style.detail_container_butonn_home}>
          <Link  to={`/home`}>
          <button>HOME</button>
          </Link>
        </div>
        <div className={style.detail_container_card}>
          <div className={style.detail_img}>
            <img
            src={
              driver.image ?
               (typeof image === "string" ?driver.image
               : (driver.image.url===""?imageAlternativa:driver.image.url)) 
               : imageAlternativa}
            alt=""
            />
            {/* <img
            src={driver.image ? (typeof image === "string" ? driver.image : driver.image.url) : imageAlternativa}
            alt=""
            /> */}
          </div>

          <div className={style.detail_container_texto}>
                {driver.id && <p><span className={style.detail_etiqueta}>Id:</span> {driver.id}</p>}
                {driver.name && <p><span className={style.detail_etiqueta}>Nombre:</span> {driver.name}</p>}
                {driver.lastName && <p><span className={style.detail_etiqueta}>Apellido:</span> {driver.lastName}</p>}
                {driver.nationality && <p><span className={style.detail_etiqueta}>Nacionalidad:</span> {driver.nationality}</p>}
                {driver.dob && <p><span className={style.detail_etiqueta}>Fecha de Nacimiento:</span> {driver.dob}</p>}
                {driver.description && <p><span className={style.detail_etiqueta}>Descripción:</span></p>}
                {driver.description && <p>{driver.description}</p>}

                {driver.Teams && (
                  <div>
                    <p><span className={style.detail_etiqueta}>Escuderías:</span></p>
                    <p>
                      {driver.Teams.map((team, index) => (
                        <span className={style.detail_teams} key={index}>{team}</span>
                      ))}
                    </p>
                  </div>)
                }
          </div>

        </div>
        
        
          
      </div>
    )
  }
  
  export default Detail;
  
  