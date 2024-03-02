//! esto quizas es mejor hacerlo en redux
  //! MODIFICO LO QUE TENGA QUE MODIFICAR PARA QUE QUEDE LO MEJOR POSIBLE EL PROYECTO, QUE FUNCIONE COMO QUIERO
  //! QUE ME HAGA SENTIR ORGULLOSO DE LO QUE HICE
  //? HAGO UNA LISTA DE LO QUE QUIERO MEJORAR, Y LO ESTRUCTURO EN PASOS
  //! YA QUE ESTA ESTO ME SIRVE PARA MEJORAR MI MANERA DE ORGANIZARME Y SER MÁS AGIL

  /* 
    MAQUETACIÓN (puedo hacer una vista nueva para practicar eso y para practicar lo demas puedo hacer lo mismo 
      entonces practico en la misma app y me aseguro de que funcione sin poner en riesgo lo otro y probando cosas nuevas!!)
  */




      /* El problema puede ser debido a que estás mutando el estado directamente en tu reducer al ordenar 
      los conductores. En Redux, debes devolver un nuevo estado y no mutarlo directamente. Por lo tanto, 
      en lugar de usar state.allDrivers.sort(), debes crear una nueva copia del array de conductores y 
      luego ordenarlo. Aquí te muestro cómo puedes corregirlo:

javascript
Copy code
case GET_DRIVERS_BY_ORDER:
    switch (action.payload.order) {
        case "ascendente":
            return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => a.name.localeCompare(b.name)),
            };
        case "descendente":
            return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => b.name.localeCompare(a.name)),
            };
        case "fechaNacimiento":
            return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => new Date(a.dob) - new Date(b.dob)),
            };
        default:
            return state;
    }
Al hacer [...state.allDrivers], estás creando una nueva copia del array allDrivers, y luego puedes 
ordenarlo sin mutar el estado original. Esto debería solucionar el problema y permitir que los conductores 
se ordenen correctamente cuando se presionan los botones de ordenación.

 */