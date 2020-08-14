/*
soal1
Console log data diri

 Nama

 Asal daerah

 Tanggal lahir

 Umur

 Posisi pekerjaan */

let nama = ibnu //contoh singgle comment, jawaban soal nomor 3
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


    /* 
    soal nomor 3
    .Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1

    soal nomor 4
    . Berikan multiple comments pada fitur soal nomor 2
    
    jawaban dapat dilihat diatas
     */

    /*
    soal nomor 5.

    Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1. Lalu panggil dan tampilkan dengan
     menggunakan console log*/

     let nama = ibnu
     let asalDaerah = yogyakarta
     let tanggalLahir = "21 february 1995"
     let umur = 25
     let posisiPekerjaan = Programmer
     console.log(nama,asalDaerah,tanggalLahir,umur,posisiPekerjaan);


    /*
    soal nomor 6.
    
    Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.

        25 + 10

        100 * 2

        99 / 2

        99 % 2 */
    //nomor 6.1 
    let a = 25;
    let b = 10;
    let tambah = a+b;

    //nomor 6.2
    let a = 100;
    let b = 2;
    let kali = a*b;

    //nomer 6.3
    let a = 99;
    let b = 2;
    let bagi = a/b;

    //nomor 6.4
    let a = 99;
    let b = 2;
    let modulus = a%b;
