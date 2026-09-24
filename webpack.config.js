const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry: './lib/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),

      library: 'IpsQrCode',
      libraryTarget: 'umd',
      auxiliaryComment: 'https://github.com/ArtBIT/ips-qr-code',
    },
  },
  {
    // Browser build of the qrcode renderer used by the demo page
    mode: 'production',
    entry: 'qrcode',
    output: {
      filename: 'qrcode.js',
      path: path.resolve(__dirname, 'dist'),

      library: 'QRCode',
      libraryTarget: 'umd',
    },
  },
];
