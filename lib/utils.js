const cdigit = require("cdigit");
const validatePozivNaBroj = input => {
    const inputString = String(input);
    const model = inputString.substr(0,2);
    let control = inputString.substr(2,1);
    switch (model) {
        case '97':
            control = inputString.substr(2,2);
            return control == cdigit.mod97_10.compute(inputString.substr(4));
        case '11':
            return control == cdigit.mod11_2.validate(pozivNaBroj) || control == cdigit.mod11_10.validate(pozivNaBroj);
        case '27':
            return control == cdigit.mod27_26.compute(inputString.substr(3));
        case '37':
            return control == cdigit.mod37_2.validate(pozivNaBroj) || control == cdigit.mod37_36.validate(pozivNaBroj);
    }
    return true;
}

module.exports = {
    validatePozivNaBroj
};
