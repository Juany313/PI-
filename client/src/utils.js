const validate = (driverData)=>{
        
    let errors = {};

    if (!driverData.name) {
      errors.name = 'Completar Campo!';
    }
    if (!driverData.lastName) {
      errors.lastName = 'Completar Campo!';
    }
    if (!driverData.description) {
      errors.description = 'Completar Campo!';
    }
    if (!driverData.nationality) {
      errors.nationality = 'Completar Campo!';
    }
    if (!driverData.dob) {
      errors.dob = 'Completar Campo!';
    }
    if (driverData.teams.length === 0) {
      errors.teams = 'Completar Campo!';
    }
    return errors;
  };

  export default validate;
        