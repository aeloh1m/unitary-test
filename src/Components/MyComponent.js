
/*
    Deberán establecer el test unitario que se compruebe que la funcion mayorDeEdad(age)
funciona correctamente. Los test deben devolver true o false según correspondan, 
si es mayor a 18 o tiene 18 devolver true, si tiene menos de 18 devolver false y 
si se ingresara algún numero negativo devolver null.

*/


import React from 'react'

export function mayorDeEdad(age) {

  if (age < 0) return null;

  if (age >= 18) return true;
  else { return false }

}

const MyComponent = ({ name, id, age }) => {
  return <h1>Prueba Testing</h1>
}

export default MyComponent