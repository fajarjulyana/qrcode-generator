const QRCode = require('qrcode');
const fs = require('fs');

QRCode.toFile('./qrcode.png', 'https://example.com', { errorCorrectionLevel: 'H' }, function (err) {
  if (err) throw err;
  console.log('QR code has been generated!');
});
