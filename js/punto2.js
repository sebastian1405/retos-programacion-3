const cantAlturas = parseInt(
  prompt("Ingrese la cantidad de alturas que vas a ingresar")
);
let Promedio = 0;
let i = 1;

while (i <= cantAlturas) {
  const altura = parseFloat(
    prompt("Ingrese la altura de la persona, por favor")
  );
  Promedio = Promedio + altura;
  i++;
}

const total = Number((Promedio / cantAlturas).toFixed(3));
alert(`La altura Promedio es de: ${total} mts`);
