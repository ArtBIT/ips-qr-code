const schema = require("./schema");

function generateIpsDataString(options) {
    options = options || {};
    return schema
      .validate(options)
      .then(function() {
          /* https://web.archive.org/web/20210812004310/https://nbs.rs/QRcode/info_g.html */
          return ["k", "v", "c", "r", "n", "i", "sf", "s", "m", "js", "ro", "rl", "rp"]
              .map(opt =>
                  options[opt] ? `${opt.toUpperCase()}:${String(options[opt]).replace(/\|/g,"-")}` : undefined
              )
              .filter(i => i)
              .join("|");
      });
}
module.exports = generateIpsDataString;
