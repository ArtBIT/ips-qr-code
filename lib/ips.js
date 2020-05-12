const schema = require("./schema");

function generateIpsDataString(options) {
    options = options || {};
    return schema
      .validate(options)
      .then(function() {
          return ["k", "v", "c", "r", "i", "n", "rs", "sf", "s"]
              .map(opt =>
                  options[opt] ? `${opt.toUpperCase()}:${options[opt]}` : undefined
              )
              .filter(i => i)
              .join("|");
      });
}
module.exports = generateIpsDataString;
