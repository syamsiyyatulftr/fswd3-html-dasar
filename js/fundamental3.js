// Lanjutan..

//5. Popup
//  Alert
alert("Welcome to this Page!");
alert("Tanggal : "+new Date());

//  Prompt
let response = prompt("Apakah Anda ingin tetap di halaman ini?");
alert("Jawabannya" +response);

//  Confirm
let respons = confirm("Masih ingin tetap melanjutkan permainan?");
alert("Jawabannya "+respons);

//6. Conditional
//  If
let respon = prompt("4 + 2 =");
if (respon == 6){
    alert("Benar!");
}

//  Else if
let angka = prompt("3 + 2 =");
if (response == 5) {
    alert("Benar");
} else if(angka < 5){
    alert("Terlalu kecil");
} else{
    alert("Terlalu tinggi");
}

//  Switch
let color = "black";
switch (color) {
    case "black":
        alert("It's Black");
        break;
    case "white" :
        alert("It's White");
        break;
    default:
        alert("I don't know what color it is");
        break;
}

//7. Loop
//  For
for (let a = 0; a < 4; a++){
    console.log(`Perulangan ke- ${a}`);
}

//  Do While
let i = 0;
do {
    console.log(`Perulangan ${i}`);
    i++;
} while (i < 4);

//  While
let x = 0;
while (i < 6) {
    console.log(`Perulangan yang ke`);
    x++;
}

//  Break
for (let r = 0; r < 4; r++) {
    if(r == 3){
        break;
    }
    console.log(`Perulangan ke ${r}`);
}

//  Continue
for (let k = 0; k < 6; k++) {
    if(k == 4){
        continue;
    }
    console.log(`Perulangan yang ke- ${k}`);
}

//8. Function
//  Basic
function pembukaan(){
    console.log("Hello");
}
pembukaan();

//   Expression
function salam() {
    console.log("Hello world");
}
salam();

//  Arrow
var pembuka = () => {
    console.log("Hello ");
}
var pembuka2 = () => console.log("Hello");

pembuka();
pembuka2();