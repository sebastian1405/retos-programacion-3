const CantidadNum = parseInt(
  prompt("¿Cuantos Numeros enteros vas a ingresar?")
);
let NumPar = 0;
let NumImpar = 0;
let i = 1;

while (i <= CantidadNum) {
  const Entero = parseInt(prompt("ingrese un Numero Entero"));
  if (Entero % 2 === 0) {
    NumPar++;
  } else {
    NumImpar++;
  }
  i++;
}

alert(
  `La cantidad de Numeros Pares es de: ${NumPar} y de Numeros Impares es de: ${NumImpar}`
);
