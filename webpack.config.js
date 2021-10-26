const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

    library: 'IpsQrCode',
    libraryTarget: 'umd',
    auxiliaryComment: 'https://github.com/ArtBIT/ips-qr-code',
  },
};
