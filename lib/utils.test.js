const {validateBankovniRacun, validatePozivNaBroj} = require('./utils');

describe('Validacija bankovnog racuna', () => {
    it('should validate these bank accounts as correct', () => {
        const racuni = [
            '115038169338697697',
            '190000000001513090',
            '170003004062800050',
            '165000701166855593',
            '165000700598007532',
            '160000000018203969',
        ];
        racuni.forEach(racun => expect(validateBankovniRacun(racun)).toBe(true));
    });
    it('should validate these bank accounts as incorrect', () => {
        const racuni = [
            '123456789012345678',
        ];
        racuni.forEach(racun => expect(validateBankovniRacun(racun)).toBe(false));
    });
});

describe('Validacija kontrolnog broja', () => {
    it('should validate these control numbers as valid', () => {
        const inputs = [
            '97 20-12345',
            '97 28-12345a',
            '9728-12345a',
            '972812345A',
            '9747-21750940-2204',
            '45-21730800-2204',
            '22-223-23456715',
        ];
        inputs.forEach(input => expect(validatePozivNaBroj(input)).toBe(true));
    });
    it('should validate these control numbers as incorrect', () => {
        const inputs = [
            '97 20-123456',
            '9728-12345b',
            '22-223-23456718',
        ];
        inputs.forEach(input => expect(validatePozivNaBroj(input)).toBe(false));
    });
});

