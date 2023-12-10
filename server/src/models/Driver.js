const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
      id: {
        type: DataTypes.UUID, // hhjl4k5-45kj-45kkk   es un id de este tipo
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      /* description: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      nationality: {
          type: DataTypes.STRING,
          allowNull: false,
      },   
      dob: {
          type: DataTypes.DATE,
          allowNull: false,
      }, */
      teams: {
        type: DataTypes.STRING,
        allowNull: false,
    },

      created: {
          type: DataTypes.BOOLEAN,
          defaultValue:true
      },
    },
    {timestamps: false}
  );
};

/* 
  ID (deben ser distintos a los que vienen de la API). *
Nombre. *
Apellido. *
Descripción. *
Imagen. *
Nacionalidad. *
Fecha de Nacimiento. *

*/