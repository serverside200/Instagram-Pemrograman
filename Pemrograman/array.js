const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Array1 = ['Merah', 'Hijau', 'Biru'];

const Array2 = [];
Array2[0] = 'Desktop';
Array2[1] = 'Apps';
Array2[2] = 'web';

//cara memberikan perintah ke program untuk menerima INPUT
rl.question('Masukan nomor urut array! ', function (urut) {

  //tampilkan variable hasil
  console.log(`Array pada urutan ke ${urut} adalah ${Array1[urut]} dan ${Array2[urut]} pada Array kedua`);    
  rl.close();
});

rl.on('close', function () {
  process.exit(0);
});