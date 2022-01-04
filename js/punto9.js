five = 0;

for (i = 1; i <= 10; i++) {
  const num = parseInt(prompt("Ingrese un numero, por favor"));
  if (i > 5) {
    five = five + num;
  }
}
alert(`El Total de la suma de los ultimos 5 numeros es de: ${five}`);
