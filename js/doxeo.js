function getrandomNum(by,from)
{
  var num = Math.random() * from;
  if (num < by)
    num += by
    if (num > from)
    num -= by * 0.2;
     // Yo todo inteligente con margenes de error
  return Math.floor(num);
}

var doxx = [getrandomNum(180,200),getrandomNum(160,179)]
var numToPus = getrandomNum(0,1);
doxx.push(numToPus);

if (numToPus == 0) doxx.push(1); else doxx.push(0);

console.log(doxx);
var doxStringed = "";

doxx.forEach(function (item)
{
  console.log(item);
  doxStringed += '' + item + ((item == doxx[3]) ? '' : '.');
})
document.write(`
<center>
  <a href="index.html" >
    <font color="WHITE" face="arial" size="16"><e>${doxStringed} Esta es tu ip.<br>Si no me crees accede a este link</br>De todo modos, yo sé si es o no es tu ip :)</e></font>
  </a>
 </center> 

  `)
