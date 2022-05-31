const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//cara memberikan perintah ke program untuk menerima INPUT
rl.question('Masukan jumlah angka! ', function (angka) {

    /* memberikan perintah untuk melakukan looping 
    sesuai dengan jumlah angka yang diinput sebelumnya */
    for(x=1; x<=angka; x++){
    /* 
    - x=1; bagian memasukan nilai awal
    - x<=angka; bagian kondisi yang harus dipenuhi untuk menjalankan program
    - x++ adalah bagian increment atau sama dengan x=x+1;    
    */
        console.log(x);
    }
    
    rl.close();
});
rl.on('close', function () {
  process.exit(0);
});