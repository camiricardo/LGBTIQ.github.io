function mostrarSeleccionado()
  {
    var cout=0;
    if (document.getElementById('R2').checked)
    {
        cout++;
    } 
    else {alert ('El punto 1 es incorrecto');}
    if (document.getElementById('R6').checked)
    {
        cout++;
    }
    else {alert ('El punto 2 es incorrecto');}
    if (document.getElementById('R18').checked)
    {
        cout++;
    }
    else {alert ('El punto 3 es incorrecto');}
    if (document.getElementById('R19').checked && document.getElementById('R20').checked && document.getElementById('R21').checked && document.getElementById('R22').checked && document.getElementById('R23').checked && document.getElementById('R24').checked)
    {
        cout++;
    } 
    else {alert ('El punto 4 es incorrecto');}
    if (document.getElementById('R26').checked && document.getElementById('R28').checked && document.getElementById('R29').checked)
    {
        cout++;
    }
    else {alert ('El punto 5 es incorrecto');}
    if (document.getElementById('R33').checked)
    {
        cout++;
    }
    else {alert ('El punto 6 es incorrecto');}
    if (document.getElementById('R35').checked && document.getElementById('R37').checked)
    {
        cout++;
    }
    else {alert ('El punto 7 es incorrecto');}
    if (document.getElementById('R38').checked && document.getElementById('R39').checked && document.getElementById('R40').checked && document.getElementById('R41').checked)
    {
        cout++;
    }
    else {alert ('El punto 8 es incorrecto');}
    if (x=cout*100/8)
    {alert ('Tenes '+ x + '% de respuestas correctas')}
if(cout>0)
{
    alert('Tenes    '+ cout + '   respuestas correctas');}
  }