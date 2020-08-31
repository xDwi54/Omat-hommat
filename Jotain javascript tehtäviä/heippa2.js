var etuNimi = 'Daniel';
var sukuNimi = 'Ibrahim';
var ika = '16';
var puh = '0441531636';
var osote = 'palokorvenkadu';
var ker = 'keravalla';
var posti = '04200';

alert(' Hei nimeni on ' + etuNimi + ' ' + sukuNimi + ' Olen ' + ika + ' vuotta vanha');
alert(' Asun ' + ker + ' ' + osote + 'lla postinumeroni on ' + posti + ' ja puhelinnmeroni on ' + puh);   

var eka, toka, summa;
var eka = 9.41;
var toka = 60;
var sek
summa = eka * toka;
sek = summa * toka;
alert(summa + ' minuuttia ' + 'ja ' + sek + ' sekunttia ');

var vuosi, kuukausi, paiva, summa;
var vuosi = 16;
var kuukausi = 8;
var paiva = 1;
var vp = 365;
var kk = 31;
var kerro = 24;
var kerro2 = 60;
var summa2;
var summa3;
summa = vuosi * vp + kuukausi * kk + paiva;
summa2 = summa * kerro * kerro2;
summa3 = summa2 * kerro2;
alert(summa + ' päivää vanha ja ' + summa2 + ' minuuttia ja sekuntteina ' +  summa3);

function laskeMinuutit()
{
    var min, tun, laske;
    tun = document.getElementById('tunnit').value;
    min = document.getElementById('minuutit').value;
    tun = parseInt(tun);
    min = parseInt(min);
    laske = tun*60 + min;
    document.getElementById('tulo').innerHTML = "Tähän mennessä minuutteja kulunut tässä päivässä:" + laske;

}









