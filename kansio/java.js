function laske() 
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    var value = parseInt(luku1,10) + luku2;
    document.write('Lukujen summa on ' + value);
}
function kerro()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    document.write('Lukujen määrä on ' + luku1 * luku2);
}
function jaa()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    document.write('Lukujen määrä on ' + luku1 / luku2);
}
function vertaile()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    if(luku1 > luku2)
    {
        document.write(luku1 + ' on isompi kuin ' + luku2);
    }
    else
    {
        document.write(luku2 + ' on isompi kuin ' + luku1);
    }
}

function lahetaVastaukset()
{
    var yhteensa = 2;
    var pisteet = 0;
    var huom = 0;

    var k1 = document.forms["kyselyLomake"] ["k1"].value;
    var k2 = document.forms["kyselyLomake"] ["k2"].value;

    for (i = 1; i <= yhteensa; i++)
    {
        if(eval('k'+i) == null || eval('k'+i) == '')
        {
            alert('Et vastannut kysymykseen numero: ' + i);
            huom = 1;
        }
        if(huom == 1) return false;
    }

    var vastaukset = ["b", "d"];

    for(i = 1 ; i <= yhteensa; i++)
    {
        if(eval('k'+i) == vastaukset[i-1])
        {
            pisteet++;
        }
    }

    var tulokset = document.getElementById('tulokset');
    alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli' + yhteensa);
    tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' +yhteensa + '</span> </h3>';
    return false;
}
