import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event)=>{
    setId(event.target.value);
  }
  const handleAddClick = () => {
    props.onSearch(id); // Pasa el valor de id a la función onSearch
    setId(""); // Limpia el estado id después de pasar el valor
  };
  return (
     <div>
         <input type='search' value={id} onChange={handleChange}/>
        <button onClick={handleAddClick}>Buscar</button> 
     </div>
  );
}