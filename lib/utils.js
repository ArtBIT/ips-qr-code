const cdigit = require("cdigit");
const validatePozivNaBroj = input => {
    const inputString = String(input);
    const model = inputString.substr(0,2);
    let control = inputString.substr(2,1);
    let pozivNaBroj = inputString.substr(3);
    switch (model) {
        case '97':
            control = inputString.substr(2,2);
            pozivNaBroj = inputString.substr(4);
            return control == cdigit.mod97_10.compute(pozivNaBroj);
        case '11':
            return control == cdigit.mod11_2.validate(pozivNaBroj) || control == cdigit.mod11_10.validate(pozivNaBroj);
        case '27':
            return control == cdigit.mod27_26.compute(pozivNaBroj);
        case '37':
            return control == cdigit.mod37_2.validate(pozivNaBroj) || control == cdigit.mod37_36.validate(pozivNaBroj);
    }
    return true;
}
const izracunajKontrolniBrojZaBankovniRacun = input => {
    let ostatak = 100;
    let kontrolniBroj = 0;
    [...String(input)]
        .reverse()
        .map(cifra => parseInt(cifra))
        .filter(cifra => cifra)
        .forEach(cifra => {
            kontrolniBroj = (kontrolniBroj + (ostatak * cifra)) % 97;
            ostatak = (ostatak * 10) % 97;
        });
    return 98 - kontrolniBroj;
}

const validateBankovniRacun = input => {
    const racun = input.slice(0,-2);
    const control = input.slice(-2);
    return control === cdigit.mod97_10.compute(racun);
}

module.exports = {
    validatePozivNaBroj,
    validateBankovniRacun
};
