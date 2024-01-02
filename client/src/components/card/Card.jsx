import style from './Card.module.css';

/* imagen */
import miImagen from '../../assets/imgPiloto.jpg';


function Card({driver}) {
  console.log("acadriverrrrrrrrrrr in carddddd", driver);
  //let lastname= "";
  const {name,image,Teams}=driver;
  
//!ENCONTRAR UNA IMAGEN ALTERNATIVA SIN DERECHOS DE AUTOR DE UN DRIVER

const imageAlternativa = miImagen

  return (
    
         
      <div className={style.container_principal_card}>
        {/* <img src={imageAlternativa} alt="" /> */}
        <div className={style.card_container}>
            <div className={style.img_container}>
            <img
            src={
              image ?
               (typeof image === "string" ?image
               : (image.url===""?imageAlternativa:image.url)) 
               : imageAlternativa}
            alt=""
            />
            </div>
            <div className={style.texto_container}>
              <div className={style.texto_container_name}>

              <h2>{(typeof name === "string")?name:(name.forename)}</h2>
              </div>
              {/* lastname!=="" && <p>Nombre: {lastname}</p> */}
              <div className={style.texto_container_teams}>
              {Teams?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
              </div>
            </div>
        </div>
        
      </div>
    
  );
}

export default Card;
/* 
        ID.
      Nombre.
      Apellido.
      Nacionalidad.
      Imagen.
      Descripción.
      Fecha de Nacimiento.
      Escuderías.
  */