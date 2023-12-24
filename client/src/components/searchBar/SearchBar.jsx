
import React, { useState } from "react";

export default function SearchBar({ handleChange, handleSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    handleChange(e);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e); // Pasa el evento completo a handleSubmit
  };

  return (
    <div>
      <input type="search" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Buscar</button>
    </div>
  );
}
