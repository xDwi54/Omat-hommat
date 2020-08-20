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
function kaanna()
{
  var lang = document.getElementById('kieli').value;
  if(lang == 'eng')
  {
    document.getElementById('jmj').innerHTML = "Hello world!";
  }
  else if(lang == 'swe')
  {
    document.getElementById('jmj').innerHTML = "Hej världen!";
  }
  else {
    document.getElementById('jmj').innerHTML = "Hola Mundo!";
  }
}
function ajoneuvo()
{
    var ika = document.getElementById('ika').value;
    if(ika < 15)
    {
      document.getElementById('vc').innerHTML = " Saat ajaa polkupyörällä";
    }
    else if(ika > 15 && ika < 18)
    {
      document.getElementById('vc').innerHTML = "Saat ajaa mopoa";
    }
    else {
      document.getElementById('vc').innerHTML = "Saat ajaa autoa";
    }
}
function pariton()
{
    document.getElementById('vhu').innerText = ((parseInt(document.getElementById('luku').value) % 2 == 0) ? 'Kyllä' : 'Ei');
}
function etsiSuurin()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.getElementById('fyt').innerHTML = "Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5;
    document.getElementById('mnjn').innerHTML = "Suurin niistä on: " + suurin;
  }
  function jarjesta()
  {
    var eluku1, eluku2, eluku3;
    eluku1 = parseInt(document.getElementById('eeka').value);
    eluku2 = parseInt(document.getElementById('etoka').value);
    eluku3 = parseInt(document.getElementById('ekolmas').value);
    document.write("Annoit luvut: " + eluku1 + " " + eluku2 + " " + eluku3 + "<br>");
    if(eluku1 < eluku2 && eluku1 < eluku3)
    {
      if(eluku2 < eluku3)
      {
        document.getElementById('fh').innerHTML = "Lukujen järjestys: " + eluku1 + ' ' + eluku2 + ' ' + eluku3;
      }
      else {
        document.getElementById('fhf').innerHTML = " + eluku1 + ' ' + eluku3 + ' ' + eluku2";
      }
    }
    else if(eluku2 < eluku1 && eluku2 < eluku3)
    {
      if(eluku1 < eluku3)
      {
        document.getElementById('fhd').innerHTML = " + eluku2 + ' ' + eluku1 + ' ' + eluku3";
      }
      else {
        document.getElementById('fhl').innerHTML = " + eluku2 + ' ' + eluku3 + ' ' + eluku1";
  
      }
    }
    else if(eluku3 < eluku1 && eluku3 < eluku2)
      {
        if(eluku1 < eluku2)
        {
            document.getElementById('fhk').innerHTML = " + eluku3 + ' ' + eluku1 + ' ' + eluku2";
        }
        else {
            document.getElementById('fhj').innerHTML = " + eluku3 + ' ' + eluku2 + ' ' + eluku1";
  
        }
      }
    }