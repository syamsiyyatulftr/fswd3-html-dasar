//JavaScript Fundamental

//1. Variabel 
var nama = "Syamsiyyatul";
let id = 4791422;
const asal = "Brebes";

//2. Tipe Data dibagi menjadi 2: Primitive dan Object
//        - Primitive
///   a. Number
    let n = 30;
    n=10;

    let inf = 50/0;
    console.log(inf);

///   b. Bigint
    const bigINT = 1234567890n;

///   c. String
    const name = "Syamsiyyatul";

///   d. Boolean
    let isGreater = 5 > 3;
    let isLess = 3 < 5;

///   e. Null
    let assignment = null;

///   f. Undefined
    let alamat;
    console.log('alamat');

///   g. Symbol
    let employee = Symbol('Lani');
    console.log(employee);
    console.log(employee.description);

//        - Object
let employeee = {
    nama: "Fithriyah",
    umur: 21,
    pekerjaan: "Mahasiswa",
    isBaby: false,
    warnafav: ["Black", "Army"],
};

console.log(`Nama Anda ${employeee.nama} Anda berumur ${employeee.umur} tahun`);
    
//3. Tipe Conversion
//  String
var angka = String(angka);  //value dari string "true"
alert(typeof angka);    //value

//  Numeric
let str = "789";
alert(typeof str);      //string

let num = Number(str);  //menjadi sebuah angka 

alert(typeof num);      //number

// Boolean
alert( Boolean("Hallo") );  //true
alert(Boolean(" ") );       //false

