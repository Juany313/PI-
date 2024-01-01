import style from './Card.module.css';




function Card({driver}) {
  console.log("acadriverrrrrrrrrrr in carddddd", driver);
  //let lastname= "";
  const {name,image,Teams}=driver;
  
//!ENCONTRAR UNA IMAGEN ALTERNATIVA SIN DERECHOS DE AUTOR DE UN DRIVER

  const imageAlternativa = "https://wallpapers.com/images/featured/universe-qs811igzbabl1m0o.jpg"
  //console.log("imageeee", image);
  return (
    
         
      <div className={style.container_principal_card}>
        {/* <img src={imageAlternativa} alt="" /> */}
        <div className={style.card_container}>
            <div className={style.img_container}>
              <img
                src={image ? (typeof image === "string" ? image : image.url) : imageAlternativa}
                alt=""
              />
            </div>
            <div className={style.texto_container}>
              <h2>{(typeof name === "string")?name:(name.forename)}</h2>
              {/* lastname!=="" && <p>Nombre: {lastname}</p> */}
              <ul>
              {Teams?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
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