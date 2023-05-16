// Za izračunavanje kontrolnog broja korišćeni su Odluka o obliku,
// sadržini i načinu korišćenja obrazaca platnih naloga za izvršenje
// platnih transakcija u dinarima - "Sl. glasnik RS", br. 55/15, 78/15,
// 82/17, 65/18, 78/18, 22/19, 125/20) i Pravilnik o uslovima i načinu
// vođenja računa za uplatu javnih prihoda i raspored sredstava sa tih
// računa ("Sl. glasnik RS", br. 16/16, 49/16, 107/16, 46/17, 114/17,
// 36/18, 44/18 - dr. zakon, 104/18, 14/19, 33/19, 68/19), kao i relevantni
// standard ISO 7064 97,10 (Data processing -- Check character systems).

// Validacija poziva na broj
const validateReferenceNumber = (input) => {
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
    case "00":
      // no control number
      return true;
    default:
      console.warn(`Model ${model} is not supported.`);
  }
  return true;
};

// Shodno Odluci o obliku, sadržini i načinu korišćenja obrazaca
// platnih naloga za izvršenje platnih transakcija u dinarima - "Sl.
// glasnik RS", br. 55/15, 78/15, 82/17, 65/18, 78/18, 22/19, 125/20) i
// Pravilniku o poreskom računovodstvu ("Sl. glasnik RS", br. 103/11).
//
// Struktura broja tekućeg računa u Srbiji je definisana Odlukom
// guvernera Narodne banke Srbije, ima 18 cifara (3+13+2) i sačinjavaju je:
//  - fiksni broj banke - 3 cifre
//  - broj računa - 13 cifara
//  - kontrolni broj - 2 cifre
const validateBankAccount = (input) => {
  const controlNumber = input.slice(-2);
  const calculatedControlNumber = calculateBankAccountControlNumber(input);
  const isValid = controlNumber == calculatedControlNumber;
  if (!isValid) {
    console.log(input, controlNumber, calculatedControlNumber);
  }
  return isValid;
};

// Kontrolni broj se sastoji od dve cifre, koje se izračunavaju na po
// međunarodnom standardu ISO 7064, МОО111-97, na sledeći način:
// Od broja 98 se oduzme ostatak deljenja broja koji se sastoji od prvih 16
// cifara (broj banke i broj računa) pomnoženih sa 100 i broja 97
// (kontr.br. = 98 - mod(2520000000123456 * 100, 97)
const calculateBankAccountControlNumber = (input) =>
  98 - modulo(input.slice(0, -2) + "00", 97);

// U elektronskoj formi numerička oznaka računa se koristi isključivo
// kao niz od 18 cifara (npr. 200000000012345600), dok je u pisanim i
// štampanim dokumentima dopušteno pisanje numeričke oznake računa
// koristeći povlake između njegovih sastavnih delova, a dopušteno je i
// ispuštanje "vodećih nula" u broju računa (npr. 200-123456-00)
//
// Ova funkcija normalizuje broj računa tako što osigurava da broj računa
// ima 18 cifara, tako što se ne-numerički karakteri ignorišu a vodeće nule dodaju.
const normalizeBankAccount = (input) => {
  const numerals = input.replace(/[^0-9]/g, "");
  const bank = numerals.slice(0, 3);
  const control = numerals.slice(-2);
  const account = numerals.slice(3, -2);
  return `${bank}${account.padStart(13, "0")}${control}`;
};

// Modulo 97-10
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
  [...String(input).toUpperCase().replace(/[ -]/g, "")].forEach(
    (char, index) => {
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
    }
  );
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
    .map((char) => parseInt(char))
    .forEach((char) => {
      controlNumber = (controlNumber + base * char) % 97;
      base = (base * 10) % 97;
    });

  return 98 - controlNumber;
};

// Izračunavanje kontrolnog broja po modulu 22
//
// Kontrolni broj se sastoji od jedne cifre i izračunava se tako što
// se svaka cifra pomnoži sa svojim rednim mestom zdesna na levo, počevši
// od cifre na poslednjem mestu, a zatim se dobijeni proizvodi sabiraju.
//
// Primer:
//
// Za ulaz 2345671 kontrolni broj je 5, jer je:
// 1 * 1 + 7 * 2 + 6 * 3 + 5 * 4 + 4 * 5 + 3 * 6 + 2 * 7 = 105
// 105 % 11 = 6
// 11 - 6 = 5
// 10 % 10 = 0

const mod22 = (input) => {
  let controlNumber = 0;
  [...String(input)]
    .reverse()
    .map((char) => parseInt(char))
    .forEach((char, index) => (controlNumber += (index + 1) * char));

  controlNumber = 11 - (controlNumber % 11);
  // kontrolni broj mora biti jedna cifra
  return controlNumber % 10;
};

const renameObjectKeys = (obj, keyMap) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[keyMap?.[key] || key] = value;
  }
  return result;
};

module.exports = {
  validateReferenceNumber,
  validateBankAccount,
  normalizeBankAccount,
  calculateBankAccountControlNumber,
  renameObjectKeys,
};
