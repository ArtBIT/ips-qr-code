const generateIpsDataString = require('./ips');

describe('IPS data string generator', () => {
    it('should not work without required arguments', async () => {
        await expect(generateIpsDataString()).rejects.toThrow('')
    });
    it('should work with required arguments', async () => {
        const args = {
            c: 1,
            v: '01',
            k: 'PR',
            r: '123456789012345611',
            i: 'RSD1295,',
            n: 'JEST Ltd., Test',
            rs: 'test-2020',
            sf: '123',
            s: 'Testing'
        };
        const result = 'K:PR|V:01|C:1|R:123456789012345611|I:RSD1295,|N:JEST Ltd., Test|RS:test-2020|SF:123|S:Testing';
        await expect(generateIpsDataString(args)).resolves.toBe(result);
    });
});
