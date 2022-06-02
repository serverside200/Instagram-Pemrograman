//CONTOH INPUT dan OUTPUT

//Kita panggil fungsi input dan output agar dapat kita gunakan.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Bagian input dan output. Kita buat pertanyaan, input ke variable serta tampilkan data yang telah kita input.
readline.question(`Apa nama akun Instagram kamu? `, akun => { //Kita buat pertanyaan yang akan ditampilkan ke layar.
//Kita menggunakan variable dengan nama "akun" sebagai tempat untuk memasukan data yang nanti diinput.
  
  //Kita tampilkan data hasil input yaitu di variable "akun".
  console.log(`Jadi nama akun Instagram kamu adalah ${akun}! Terima kasih.`);

  //kita tutup fungsi dari input dan output.
  readline.close();
});
//hasilnya bisa kalian liat di terminal