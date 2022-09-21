const yargs = require("yargs");

module.exports = yargs
  .scriptName("ips-qr")
  .usage("Usage: -k <name>")
  .option("k", {
    alias: "kod",
    describe: `Identifikacioni kod koji opisuje sadržaj QR koda.
Moguće vrednosti su:
 PR – za QR kod na štampanom računu velikih izdavalaca računa
 PT – za QR kod na prodajnom mestu, prikazan od strane trgovca
 PK – za QR kod na prodajnom mestu, prikazan od strane kupca
 EK – za QR kod u aplikaciji e-commerce`,
    type: "string",
    default: "PR",
    choices: ["PR", "PT", "PK", "EK"],
  })
  .option("v", {
    alias: "verzija",
    describe: `Verzija prezentacije QR koda. Fiksna vrednost je 01`,
    type: "string",
    default: "01",
    hidden: true,
  })
  .option("c", {
    alias: "kodni-raspored",
    describe: `Znakovni skup se koristi u prezentaciji, fiksna vrednost 1 označava upotrebu UTF-8 kodnog rasporeda`,
    type: "number",
    default: 1,
    hidden: true,
  })
  .option("r", {
    alias: "racun-primaoca",
    describe: `Broj računa primaoca plaćanja označava broj tekućeg odnosno drugog platnog računa primaoca plaćanja u skladu s propisima;`,
    type: "string",
    demandOption: true,
  })
  .option("n", {
    alias: "naziv-primaoca",
    describe: `Naziv i sedište primaoca plaćanja označava poslovno ime ili skraćeno poslovno ime primaoca plaćanja, odnosno naziv pod kojim je evidentiran u registru nadležnog organa. Ako naziv primaoca plaćanja sadrži i njegovo sedište, onda nije potrebno navoditi to sedište;`,
    type: "string",
    demandOption: true,
  })
  .option("i", {
    alias: "iznos",
    describe: `Valuta i iznos novčanih sredstava predstavlja oznaku RSD i iznos, u kome se obavezno upisuje decimalna zapeta, iza koje se ne moraju pisati nevažeće decimalne nule (primer: RSD1025). Minimalni iznos naloga je RSD0,01, a maksimalni iznos naloga je RSD99999999999999,99. Pri unosu iznosa, hiljade se ne odvajaju tačkama. Nije dozvoljeno izostaviti cifru za celo mesto u iznosu. Na primer: RSD,01 nije ispravan iznos, ispravno je RSD0,01;`,
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "racun-platioca",
    describe: `Broj računa platioca označava broj tekućeg odnosno drugog platnog računa platioca u skladu s propisima;`,
    type: "string",
    demandOption: true,
  })
  .option("p", {
    alias: "naziv-platioca",
    describe: `Naziv i sedište platioca predstavlja ime i prezime i adresu platioca (ulica, broj i mesto)`,
    type: "string",
    demandOption: true,
  })
  .option("sf", {
    alias: "sifra-placanja",
    describe: `Šifra plaćanja označava numerički podatak od tri cifre, od kojih prva identifikuje način plaćanja, a druge dve osnovu;`,
    type: "number",
    demandOption: true,
  })
  .option("s", {
    alias: "svrha-placanja",
    describe: `Svrha plaćanja označava podatke o nameni i osnovu prenosa, odnosno uplate novčanih sredstava;`,
    type: "string",
    demandOption: true,
  })
  .option("m", {
    alias: "MCC",
    describe: `MCC je oznaka Merchant Code Category – kod kategorije trgovca u skladu sa ISO 18245. Spisak dozvoljenih kodova biće utvrđen tehničkom dokumentacijom sistema IPS NBS;`,
    type: "string",
  })
  .option("js", {
    alias: "jednokratna-sifra",
    describe: `Jednokratna šifra platioca predstavlja TOTR vrednost (jednokratnu šifru čije je važenje vremenski ograničeno, npr. pet minuta).Banka platioca stvara jednokratnu šifru, ali i izvršava autorizaciju transakcije plaćanja;`,
    type: "string",
  })
  .option("ro", {
    alias: "poziv-na-broj",
    describe: `Poziv na broj odobrenja primaoca plaćanja označava dopunske podatke za primaoca plaćanja u skladu s propisima;`,
    type: "string",
  })
  .option("rl", {
    alias: "referenca-primaoca",
    describe: `Referenca primaoca plaćanja označava dopunske podatke za primaoca plaćanja u slobodnoj formi;`,
    type: "string",
  })
  .option("rp", {
    alias: "referenca-placanja",
    describe: `Referenca koja identifikuje transakciju na prodajnom mestu predstavlja jedinstveni identifikator samog plaćanja, ukupne dužine 19`,
    type: "string",
  })
  .option("margin", {
    describe: `The size of the margin around the QR code`,
    default: 4,
    type: "number",
  })
  .option("bg-color", {
    describe: `The color of the QR code light pixels`,
    default: "#ffffffff",
    type: "string",
  })
  .option("fg-color", {
    describe: `The color of the QR code dark pixels`,
    default: "#000000ff",
    type: "string",
  })
  .option("scale", {
    describe: `The scale of the QR code pixels`,
    default: 4,
    type: "number",
  })
  .option("height", {
    describe: `Width of the QR image`,
    type: "number",
  })
  .option("width", {
    describe: `Width of the QR image`,
    type: "number",
  })
  .option("to-file", {
    describe: `The filename to output the QR image to`,
    type: "string",
  })
  .option("to-datauri", {
    describe: `Output QR code as a data URI`,
    type: "boolean",
  })
  .option("to-text", {
    describe: `Output terminal friendly QR code`,
    type: "boolean",
  }).argv;
