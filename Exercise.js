/*
soal1
Console log data diri

 Nama

 Asal daerah

 Tanggal lahir

 Umur

 Posisi pekerjaan */

let nama = ibnu
console.log(nama);

let asalDaerah = yogyakarta
console.log(asalDaerah);

let tanggalLahir = "21 february 1995"
console.log(tanggalLahir);

let umur = 25
console.log(umur);

let posisiPekerjaan = Programmer
console.log(posisiPekerjaan);

/* 
soal2
Membuat interaksi kepada user

 Prompt data berikut:

 Nama user

 Asal Negara

 Confirm data user. Apakah data yang diisi sudah benar?

 Alert “Terima kasih sudah mengisi form” */

 let nama = prompt("Masukan nama anda");
 
 let negara = prompt("Masukan negara asal anda");
 
 let cek = confirm("Apakah data yang diisi sudah benar?");
    if (cek === true){
        alert("Terimakasih sudah mengisi form")
    }
    else{
        alert("data yang anda masukan salah")
    }




