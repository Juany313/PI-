// ListaTeams.js (Componente Hijo)
import React, { useState, useEffect } from 'react';
import './ListaTeams.css';

const ListaTeams = ({ opciones, onOpcionesSeleccionadasChange }) => {
  const [mostrarLista, setMostrarLista] = useState(false);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

 
  const toggleMostrarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  const handleCheckboxChange = (opcion) => {
    const nuevasOpcionesSeleccionadas = opcionesSeleccionadas.includes(opcion)
      ? opcionesSeleccionadas.filter((opt) => opt !== opcion)
      : [...opcionesSeleccionadas, opcion];

    setOpcionesSeleccionadas(nuevasOpcionesSeleccionadas);
    onOpcionesSeleccionadasChange(nuevasOpcionesSeleccionadas);
  };

  console.log("Opciones seleccionadas:", opcionesSeleccionadas);

  return (
    <div className="lista-teams-container">
      <button onClick={toggleMostrarLista}>{mostrarLista ? 'Ocultar Lista' : 'Mostrar Lista'}</button>
      {mostrarLista && (
        <ul className="lista-teams">
          {opciones?.map((opcion) => (
            <li key={opcion}>
              <input
                type="checkbox"
                id={opcion}
                value={opcion}
                checked={opcionesSeleccionadas.includes(opcion)}
                onChange={() => handleCheckboxChange(opcion)}
              />
              <label htmlFor={opcion} style={{ color: opcionesSeleccionadas.includes(opcion) ? 'yellow' : 'black' }}>
                {opcion}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTeams;
