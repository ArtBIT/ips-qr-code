const {validateBankovniRacun} = require('./utils');

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

