import SearchBar from "../searchBar/SearchBar";

/* styles */
import style from './Nav.module.css';


export default function Nav({handleChange, handleSubmit}) {
  return (
    <div className={style.nav}>
      
      
      
      <div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      
    </div>
  );
}