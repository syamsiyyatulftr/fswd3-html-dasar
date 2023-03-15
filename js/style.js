var tanya = true;
while ( tanya ) {
    // menangkap pilihan player
    alert ('Apakah Anda ingin bermain?')
    var p = prompt('Silahkan pilih : batu, gunting, kertas');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random

    if( comp < 0.34 ) {
        comp = 'batu';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }

    var hasil = '';
    // menentukan rules
    if( p == comp) {
        hasil ='SERI!';
    } else if( p == 'batu' ) {
        // if( comp == 'gunting') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH';
    } else if( p == 'gunting' ) {
        hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'kertas'){
        hasil = ( comp == 'gunting' ) ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'memilih pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('Ingin bermain lagi?')
}

alert('Terimakasih sudah bermain bersama :)')