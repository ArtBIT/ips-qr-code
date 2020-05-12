#!/usr/bin/env node

const qrcode = require("qrcode");
const generateIpsDataString  = require('../lib/ips');
const options = require("../lib/args");

generateIpsDataString(options)
  .then(function(dataString) {
    if (options["to-text"]) {
      qrcode.toString(dataString, { type: "terminal" }, function(err, url) {
        console.log(url);
      });
    }
    if (options["to-file"]) {
      qrcode.toFile(options["to-file"], dataString, {
          width: options.width,
          height: options.height,
          scale: options.scale,
          margin: options.margin,
          "color.dark": options['fg-color'],
          "color.light": options['bg-color'],
      });
    }
    if (options["to-datauri"]) {
      qrcode.toDataURL(dataString, function(err, url) {
        console.log(url);
      });
    }
  })
  .catch(e => {
    console.error(`Arguments validation error`);
    console.error(`--${e.path} '${options[e.path]}'`, e.message);
  });
