import style from './Landing.module.css';

/* hooks */
import {Link, useLocation} from "react-router-dom";



function Landing() {
  return (
    
      <div className={style.container}>
        <h1>  ACA LANDING</h1>
        <Link  to={`/home`}>
        <button>HOME</button>
        </Link>
        <Link  to={`/form`}>
        <button>FORM</button>
        </Link>

      </div>
    
  );
}

export default Landing;
