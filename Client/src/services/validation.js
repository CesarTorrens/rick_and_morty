const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/

export const validate = (inputs) => {
    const errors = {};
    if (!inputs.email) {
        errors.name = "Se requiere un email";
      }
    if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un correo electrónico";
    }
    if (!inputs.password) {
      errors.password = "Se requiere una contraseña";
    }
    if(!regexPassword.test(inputs.password)) {
        errors.password = 'Su contraseña no cumple con los estandares'
    }
    return errors;
  };