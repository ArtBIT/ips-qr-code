const yup = require("yup");
const { validatePozivNaBroj, validateBankovniRacun } = require("./utils.js");

module.exports = yup.object({
  // kod*
  k: yup.string().oneOf(["PR", "PT", "PK", "EK"]).default("PR").required(),
  // verzija*
  v: yup.string().oneOf(["01"]).default("01").required(),
  // kodni raspored*
  c: yup.string().oneOf(["1"]).default("1").required(),
  // racun primaoca*
  r: yup
    .string()
    .matches(/^[0-9]{18}$/, "Must contain exactly 18 numeric characters")
    .test("bank-account", "Value is not a valid bank account", (value) => {
      if (!value) {
        return false;
      }
      return validateBankovniRacun(value);
    })
    .required(),
  // racun platioca
  o: yup
    .string()
    .matches(/^[0-9]{18}$/, "Must contain exactly 18 numeric characters")
    .test("bank-account", "Value is not a valid bank account", (value) => {
      if (!value) {
        return true;
      }
      return validateBankovniRacun(value);
    }),
  // naziv primaoca*
  n: yup
    .string()
    .min(1)
    .max(70)
    .matches(
      /* See https://web.archive.org/web/20220109065457/https://nbs.rs/QRcode/info.html */
      /^[a-zA-ZšđžčćŠĐŽČĆ0-9 (){}\[\]<\/\.,:;!@#$%^&?„”“"`’‘'_~=+-\s]+$/,
      "Only letters, numbers, and select special characers are allowed."
    )
    .test(
      "limit-newlines",
      "Must not contain more than 3 lines",
      (value) => String(value || "").split("\n").length <= 3
    )
    .required(),
  // naziv platioca
  p: yup.string().min(0).max(70),
  // iznos*
  i: yup
    .string()
    .min(5)
    .max(20)
    .matches(/^[A-Z]{3}[0-9]+,[0-9]{0,2}$/)
    .required(),
  // sifra placanja*
  sf: yup
    .string()
    .matches(/^[12][0-9]{2}$/)
    .length(3)
    .required(),
  // svrha placanja
  s: yup.string().min(0).max(35),
  // merchant code category
  m: yup
    .string()
    .matches(/^[0-9]+$/)
    .length(4)
    .when("k", (value, schema) =>
      value === "PR" ? schema : schema.required()
    ),
  // jednokratna sifra
  js: yup
    .string()
    .matches(/^[0-9]+$/)
    .length(5),
  // poziv na broj
  ro: yup
    .string()
    .min(0)
    .max(35)
    .test(
      "poziv-na-broj",
      "Model i poziv na broj moraju da prate sledeci format: MMKKBBB...B (MM-model, KK-kontrolni broj, BBB...B broj)",
      (value) => {
        return validatePozivNaBroj(value);
      }
    ),
  // referenca primaoca
  rl: yup.string().min(0).max(140),
  // referenca placanja
  rp: yup
    .string()
    .matches(/^[0-9]+$/)
    .length(19),
});
