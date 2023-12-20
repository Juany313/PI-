import style from './Card.module.css';




function Card({driver}) {
  console.log("acadriverrrrrrrrrrr", driver);
  let lastname= "";
  const {name,image,teams}=driver;
  let arrayDeTeams = teams.split(',');
  
  return (
    
         
      <div className={style.container}>
        <img src={(typeof image === "string")?image:(image.url)} alt='' />
        <h2>{(typeof name === "string")?name:(name.forename)}</h2>
        {lastname!=="" && <p>Nombre: {lastname}</p>}
        <ul>
        {arrayDeTeams.map((item, index) => (
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