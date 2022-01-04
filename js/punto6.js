const PrimeraList = [];
const SegundaList = [];
let i = 1;
let i1 = 1;

while (i <= 15) {
  const valor = parseInt(prompt("Ingrese los valores de la primera lista"));
  PrimeraList.push(valor);
  i++;
}

while (i1 <= 15) {
  const valor = parseInt(prompt("Ingrese los valores de la Segunda lista"));
  SegundaList.push(valor);
  i1++;
}

const Promedio1List = PrimeraList.reduce((a, b) => a + b);
const Promedio2List = SegundaList.reduce((a, b) => a + b);

if (Promedio1List === Promedio2List) {
  alert("La lista 1 y 2 son iguales");
} else if (Promedio1List > Promedio2List) {
  alert("La lista 1 es mayor, que la lista 2");
} else if (Promedio1List < Promedio2List) {
  alert("La lista 2 es mayor, que la lista 1");
}
