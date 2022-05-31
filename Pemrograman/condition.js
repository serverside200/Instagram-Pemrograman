const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//cara memberikan perintah ke program untuk menerima INPUT
rl.question('Masukan sebuah angka? ', function (angka) {

    //perintah untuk membuat kondisi, "if( 'kondisi yang diinginkan' )"
    if(angka%2 == 0){    
    //bagian jika data sesuai dengan kondisi 
        console.log(`Angka ${angka} adalah bilangan genap`);

    }else{ 
    //bagian jika data tidak sesuai dengan semua kondisi 
        console.log(`Angka ${angka} adalah bilangan ganjil`);
    }
    rl.close();
});
rl.on('close', function () {
  process.exit(0);
});
