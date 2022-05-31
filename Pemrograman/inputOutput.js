const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//cara memberikan perintah ke program untuk menerima INPUT
rl.question('Masukan akun? ', function (akun) {
  rl.question('Masukan platform? ', function (platform) {
//cara memberikan perintah ke program untuk memberikan OUTPUT
console.log(`Akun saya ${akun}, bisa kalian temukan di platform ${platform}`);
    rl.close();
  });
});

rl.on('close', function () {
  process.exit(0);
});