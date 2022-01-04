const cantEmp = parseInt(prompt("ingrese cantidad de Empleados"));
let salarioAlto = 0;
let salarioBajo = 0;
let total = 0;
let i = 1;

while (i <= cantEmp) {
  const sueldo = parseFloat(prompt("ingrese el sueldo"));
  if (sueldo >= 100 && sueldo <= 300) {
    salarioBajo++;
  } else {
    salarioAlto++;
  }
  total = total + sueldo;
  i++;
}

alert(
  `Los trabajadores con salarios altos son: ${salarioAlto} y los trabajadores con Salarios bajos son: ${salarioBajo}, El importe total de la empresa en sueldos es de: $${total}`
);
