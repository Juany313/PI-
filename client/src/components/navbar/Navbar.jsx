import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.searchBox}>
      <form >
        <input placeholder='Busqueda' type='search' />
        <button type='submit' >Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;