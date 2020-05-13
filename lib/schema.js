const yup = require('yup');

module.exports = yup.object({
  k: yup.string()
    .oneOf(['PR','PT','PK','EK'])
    .required(),
  v: yup.string()
    .oneOf(['01'])
    .required(),
  c: yup.string()
    .oneOf(['1'])
    .required(),
  r: yup.string()
    .matches(/^[0-9]{18}$/, "Must contain exactly 18 numeric characters")
    .test('bank-account', "Value is not a valid bank account", value => {
        if (!value) {
            return false;
        }
        const account = parseInt(value.substr(0, 16));
        const control = parseInt(value.substr(16));
        return control === 98 - (account * 100) % 97;
    })
    .required(),
  o: yup.string()
    .matches(/^[0-9]{18}$/, "Must contain exactly 18 numeric characters")
    .test('bank-account', "Value is not a valid bank account", value => {
        if (!value) {
            return true;
        }
        const account = parseInt(value.substr(0, 16));
        const control = parseInt(value.substr(16));
        return control === 98 - (account * 100) % 97;
    }),
  n: yup.string()
    .min(1)
    .max(70)
    .required(),
  p: yup.string()
    .min(0)
    .max(70),
  i: yup.string()
    .min(5)
    .max(20)
    .required(),
  sf: yup.string()
    .matches(/^[0-9]+$/)
    .length(3),
  s: yup.string()
    .min(0)
    .max(35),
  m: yup.string()
    .matches(/^[0-9]+$/)
    .length(4),
  js: yup.string()
    .matches(/^[0-9]+$/)
    .length(5),
  ro: yup.string()
    .min(0)
    .max(35),
  rl: yup.string()
    .min(0)
    .max(140),
  rp: yup.string()
    .matches(/^[0-9]+$/)
    .length(19),
})
