const schema = require("./schema");
const { renameObjectKeys } = require("./utils");

function generateIpsDataString(options) {
  options = renameObjectKeys(options || {}, {
    kod: "k",
    verzija: "v",
    version: "v",
    characterEncodingType: "c",
    znakovniSkup: "c",
    racunPrimaoca: "r",
    nazivPrimaoca: "n",
    iznos: "i",
    nazivPlatioca: "p",
    sifraPlacanja: "sf",
    svrhaPlacanja: "s",
    merchantCodeCategory: "m",
    jednokratnaSifra: "js",
    pozivNaBroj: "ro",
    referencaPrimaoca: "rl",
    referencaPlacanja: "rp",
  });
  return schema.validate(options).then(function (values) {
    /* https://web.archive.org/web/20210812004310/https://nbs.rs/QRcode/info_g.html */
    return [
      "k",
      "v",
      "c",
      "r",
      "n",
      "i",
      "sf",
      "s",
      "m",
      "js",
      "ro",
      "rl",
      "rp",
    ]
      .map((opt) =>
        values[opt]
          ? `${opt.toUpperCase()}:${String(values[opt]).replace(/\|/g, "-")}`
          : undefined
      )
      .filter((i) => i)
      .join("|");
  });
}
module.exports = generateIpsDataString;
