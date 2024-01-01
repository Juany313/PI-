import SearchBar from "../searchBar/SearchBar";

/* styles */
import style from './Nav.module.css';

/* se pueden hacer la mejora de deshabilitar el boton si hay errors, mirar a partir de 1:10 clase de Sabri */
export default function Nav({handleChange, handleSubmit}) {
  return (
    <div className={style.nav}>
      
      
      
      <div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      
    </div>
  );
}