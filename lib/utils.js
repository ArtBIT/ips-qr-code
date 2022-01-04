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

// Shodno Odluci o obliku, sadržini i načinu korišćenja obrazaca
// platnih naloga za izvršenje platnih transakcija u dinarima - "Sl.
// glasnik RS", br. 55/15, 78/15, 82/17, 65/18, 78/18, 22/19, 125/20) i
// Pravilniku o poreskom računovodstvu ("Sl. glasnik RS", br. 103/11).
const validateBankovniRacun = input => {
    const racun = input.slice(0,-2);
    const control = input.slice(-2);
    const actualControl = 98 - modulo(racun + '00', 97);
    return control == actualControl;
}

const modulo = (divident, divisor) => {
    var partLength = 10;
    while (divident.length > partLength) {
        var part = divident.substring(0, partLength);
        divident = (part % divisor) +  divident.substring(partLength);
    }
    return divident % divisor;
}

module.exports = {
    validatePozivNaBroj,
    validateBankovniRacun
};
