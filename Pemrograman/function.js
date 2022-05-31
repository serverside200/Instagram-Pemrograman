const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function salam(){
  console.log("Hello World");
}

function luasLingkaran(jariJari){
  const pi = 3.14;
  luas = pi*jariJari*jariJari;

  return luas;
}

//cara memberikan perintah ke program untuk menerima INPUT
rl.question('Masukan jari-jari lingkaran! ', function (angka) {

  salam(); //panggil function salam
  
  var hasil = luasLingkaran(angka); //masukan function luasLingkaran ke variable
  
  //tampilkan variable hasil
  console.log(`Luas lingkaran dengan jari-jari ${angka} adalah ${hasil}`);    
  rl.close();
});

rl.on('close', function () {
  process.exit(0);
});