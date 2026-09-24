const generateIpsDataString = require("./ips");

describe("IPS data string generator", () => {
  it("should not work without required arguments", async () => {
    await expect(generateIpsDataString()).rejects.toThrow("");
  });
  it("should work with required arguments", async () => {
    const args = {
      c: 1,
      v: "01",
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      sf: "123",
      s: "Testing",
    };
    const result =
      "K:PR|V:01|C:1|R:123456789012345611|N:JEST Ltd., Test|I:RSD1295,|SF:123|S:Testing";
    await expect(generateIpsDataString(args)).resolves.toBe(result);
  });
  it("should generate valid model and call number", async () => {
    const args = {
      c: 1,
      v: "01",
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      sf: "123",
      ro: "972012345",
      s: "Testing",
    };
    const result =
      "K:PR|V:01|C:1|R:123456789012345611|N:JEST Ltd., Test|I:RSD1295,|SF:123|S:Testing|RO:972012345";
    await expect(generateIpsDataString(args)).resolves.toBe(result);
  });
  it("should not matter whether you use short or long param names", () => {
    const argsShort = {
      c: 1,
      v: "01",
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      sf: "123",
      ro: "972012345",
      s: "Testing",
    };
    const argsLong = {
      characterEncodingType: 1,
      version: "01",
      kod: "PR",
      racunPrimaoca: "123456789012345611",
      iznos: "RSD1295,",
      nazivPrimaoca: "JEST Ltd., Test",
      sifraPlacanja: "123",
      pozivNaBroj: "972012345",
      svrhaPlacanja: "Testing",
    };
    Promise.all([
      generateIpsDataString(argsShort),
      generateIpsDataString(argsLong),
    ]).then(([a, b]) => expect(a).toBe(b));
  });
  it("should include payer name", async () => {
    const args = {
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      p: "Pera Peric",
      sf: "123",
    };
    const result =
      "K:PR|V:01|C:1|R:123456789012345611|N:JEST Ltd., Test|I:RSD1295,|P:Pera Peric|SF:123";
    await expect(generateIpsDataString(args)).resolves.toBe(result);
  });
  it("should not double prefix reference numbers without a model", async () => {
    const args = {
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      sf: "123",
    };
    await expect(
      generateIpsDataString({ ...args, ro: "0012345" })
    ).resolves.toMatch(/\|RO:0012345$/);
    await expect(
      generateIpsDataString({ ...args, ro: "12345" })
    ).resolves.toMatch(/\|RO:0012345$/);
  });
  it("should reject invalid characters in reference numbers", async () => {
    const args = {
      k: "PR",
      r: "123456789012345611",
      i: "RSD1295,",
      n: "JEST Ltd., Test",
      sf: "123",
    };
    await expect(
      generateIpsDataString({ ...args, ro: "9720*12345" })
    ).rejects.toThrow();
    await expect(
      generateIpsDataString({ ...args, ro: "22123x4567" })
    ).rejects.toThrow();
  });
});
