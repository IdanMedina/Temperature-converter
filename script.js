function celsius(valueTi, typein, typeout) {
  let cfCon = valueTi * 1.8;
  if (typeout == "Fahrenheit") {
    return console.log(cfCon + 32);
  }
  if (typeout == "Kelvin") {
    return console.log(valueTi + 273);
  } else if (typeout == "Celsius") {
    return console.log("Digite um tipo diferente do atual para ser convertido");
  }
}
function fahrenheit(valueTi, typein, typeout) {
  let fcCon = valueTi - 32;
  let fkCon = (fcCon * 5) / 9;
  if (typeout == "Celsius") {
    return console.log(fcCon / 1.8);
  }
  if (typeout == "Kelvin") {
    return console.log(fkCon + 273);
  } else if (typeout == "Fahrenheit") {
    return console.log("Digite um tipo diferente do atual para ser convertido");
  }
}
function kelvin(valueTi, typein, typeout) {
  let kcCon = valueTi - 273;
  let kfCon = kcCon * 1.8;
  if (typeout == "Fahrenheit") {
    return console.log(kfCon + 32);
  }
  if (typeout == "Celsius") {
    return console.log(kcCon);
  } else if (typeout == "Kelvin") {
    return console.log("Digite um tipo diferente do atual para ser convertido");
  }
}
function converter(valueTi, typein, typeout) {
  if (
    (typein == "Celsius" && typeout == "Fahrenheit") ||
    (typein == "Celsius" && typeout == "Kelvin")
  ) {
    return celsius(valueTi, typein, typeout);
  }
  if (
    (typein == "Fahrenheit" && typeout == "Celsius") ||
    (typein == "Fahrenheit" && typeout == "Kelvin")
  ) {
    return fahrenheit(valueTi, typein, typeout);
  }
  if (
    (typein == "Kelvin" && typeout == "Celsius") ||
    (typein == "Kelvin" && typeout == "Fahrenheit")
  ) {
    return kelvin(valueTi, typein, typeout);
  } else {
    return console.log("Digite corretamente");
  }
}
converter(20, "Kelvin", "Fahrenheit");
console.log(converter);
