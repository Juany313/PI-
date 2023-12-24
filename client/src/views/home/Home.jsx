/* style */
import style from './Home.module.css'; 

/* components */
import Navbar from "../../components/navbar/Nav"
import Cards from "../../components/cards/Cards"

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import {getDrivers, getDriversByName} from "../../redux/actions"
 




function Home() {

  const dispatch = useDispatch();
  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);
  const [searchString, setSearchString] = useState("");

  function handleChange(e){
    setSearchString(e.target.value)
  }

  function handleSubmit(){
    dispatch(getDriversByName(searchString))

  }

  useEffect(()=>{
    dispatch(getDrivers());
  }, [dispatch]);
  
  return (
    <div className={style.home}>
        <p className={style.title}>Home</p>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Cards allDrivers={allDrivers} />
    </div>
  )
  }
  
  export default Home;


  //! HAY QUE CORREGIR LO DEL USEeFFECT PARA QUE RENDERICE A LOS DRIVERS(MIRAR CLASE 5)