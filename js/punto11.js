const num = parseInt(
  prompt(
    "Ingrese un numero entre 1 y 10, y se mostrara la tabla que desea saber"
  )
);
console.log(`Se mostrara la tabla del ${num}:`);

if (num <= 10 && num > 0) {
  for (i = 1; i <= 13; i++) {
    console.log(`${num} x ${i} =`);
    let resultados = i * num;
    console.log(resultados);
  }
} else {
  throw new Error("Lea bien la consigna");
}
