import style from './Card.module.css';




function Card({driver}) {
  console.log("acadriverrrrrrrrrrr in carddddd", driver);
  //let lastname= "";
  const {name,image,Teams}=driver;
  
//!ENCONTRAR UNA IMAGEN ALTERNATIVA SIN DERECHOS DE AUTOR DE UN DRIVER

  const imageAlternativa = "https://wallpapers.com/images/featured/universe-qs811igzbabl1m0o.jpg"
  //console.log("imageeee", image);
  return (
    
         
      <div className={style.container}>
        {/* <img src={imageAlternativa} alt="" /> */}
        <img
        src={image ? (typeof image === "string" ? image : image.url) : imageAlternativa}
        alt=""
      />
        <h2>{(typeof name === "string")?name:(name.forename)}</h2>
        {/* lastname!=="" && <p>Nombre: {lastname}</p> */}
        <ul>
        {Teams?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
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