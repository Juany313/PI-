import style from './Landing.module.css';
import miImagen from '../../assets/fondoLanding.jpg';
/* hooks */
import {Link} from "react-router-dom";



function Landing() {
  return (
    
      <div className={style.container}>
        <h1 className={style.title}>  ARE YOU READY?</h1>
        <Link  to={`/home`}>
        <button className={style.but}>HOME</button>
        </Link>
      </div>
    
  );
}

export default Landing;
