// Za izračunavanje kontrolnog broja korišćeni su Odluka o obliku,
// sadržini i načinu korišćenja obrazaca platnih naloga za izvršenje
// platnih transakcija u dinarima - "Sl. glasnik RS", br. 55/15, 78/15,
// 82/17, 65/18, 78/18, 22/19, 125/20) i Pravilnik o uslovima i načinu
// vođenja računa za uplatu javnih prihoda i raspored sredstava sa tih
// računa ("Sl. glasnik RS", br. 16/16, 49/16, 107/16, 46/17, 114/17,
// 36/18, 44/18 - dr. zakon, 104/18, 14/19, 33/19, 68/19), kao i relevantni
// standard ISO 7064 97,10 (Data processing -- Check character systems).

const validatePozivNaBroj = input => {
  let inputString = String(input);
  let model = inputString.substr(0, 2);
  let control = inputString.substr(2, 1);
  let pozivNaBroj = inputString.substr(3);
  switch (model) {
    case "97":
      inputString = sanitize97(inputString);
      control = inputString.substr(2, 2);
      pozivNaBroj = inputString.substr(4);
      return control == mod97(pozivNaBroj);
    case "22":
      inputString = sanitize22(inputString);
      // municipality = inputString.substr(2,3);
      pozivNaBroj = inputString.substring(5, inputString.length - 1);
      control = inputString.substr(inputString.length - 1);
      return control == mod22(pozivNaBroj);
  }
  return true;
};

// Shodno Odluci o obliku, sadržini i načinu korišćenja obrazaca
// platnih naloga za izvršenje platnih transakcija u dinarima - "Sl.
// glasnik RS", br. 55/15, 78/15, 82/17, 65/18, 78/18, 22/19, 125/20) i
// Pravilniku o poreskom računovodstvu ("Sl. glasnik RS", br. 103/11).
const validateBankovniRacun = input => {
  const racun = input.slice(0, -2);
  const control = input.slice(-2);
  const actualControl = 98 - modulo(racun + "00", 97);
  return control == actualControl;
};

const modulo = (divident, divisor) => {
  var partLength = 10;
  while (divident.length > partLength) {
    var part = divident.substring(0, partLength);
    divident = (part % divisor) + divident.substring(partLength);
  }
  return divident % divisor;
};

// Allow 0-9, a-z, A-Z, and space and dash
function sanitize97(input) {
  let sanitized = "";
  // Ignore spaces and dashes
  [
    ...String(input)
      .toUpperCase()
      .replace(/[ -]/g, "")
  ].forEach((char, index) => {
    const charCode = char.charCodeAt(0);
    let value = "";
    if (charCode >= 65 && charCode <= 90) {
      // A - Z
      value = `${charCode - 55}`;
    } else if (charCode >= 48 && charCode <= 57) {
      // 0 - 9
      value = `${charCode - 48}`;
    } else {
      window.alert(`Pogresan karakter "${char}" na poziciji "${index}"`);
      return false;
    }
    sanitized += `${value}`;
  });
  return sanitized;
}

// Allow 0-9, and space and dash
function sanitize22(input) {
  let sanitized = "";
  // Ignore spaces and dashes
  [...String(input).replace(/[ -]/g, "")].forEach((char, index) => {
    const charCode = char.charCodeAt(0);
    // 0 - 9
    if (charCode >= 48 && charCode <= 57) {
      sanitized += `${charCode - 48}`;
    } else {
      window.alert(`Pogresan karakter "${char}" na poziciji "${index}"`);
      return false;
    }
  });
  return sanitized;
}
// Shodno Odluci o obliku, sadržini i načinu korišćenja obrazaca
// platnih naloga za izvršenje platnih transakcija u dinarima - "Sl.
// glasnik RS", br. 55/15, 78/15, 82/17, 65/18, 78/18, 22/19, 125/20)
// i Pravilnik o uslovima i načinu vođenja računa za uplatu javnih
// prihoda i raspored sredstava sa tih računa ("Sl. glasnik RS",
// br. 16/16, 49/16, 107/16, 46/17, 114/17, 36/18, 44/18 - dr. zakon,
// 104/18, 14/19, 33/19, 68/19), kao i relevantni standard ISO 7064
// 97,10 (Data processing -- Check character systems).
const mod97 = (input, base = 100) => {
  let controlNumber = 0;
  [...String(input)]
    .reverse()
    .map(char => parseInt(char))
    .forEach(char => {
      controlNumber = (controlNumber + base * char) % 97;
      base = (base * 10) % 97;
    });

  return 98 - controlNumber;
};
const mod22 = input => {
  let controlNumber = 0;
  let base = 0;
  [...String(input)]
    .map(char => parseInt(char))
    .forEach(char => {
      controlNumber += (7 - base) * char;
      base = ++base % 7;
    });

  controlNumber = 11 - (controlNumber % 11);
  if (controlNumber > 9) controlNumber = controlNumber - 10;

  return controlNumber;
};

module.exports = {
  validatePozivNaBroj,
  validateBankovniRacun
};
