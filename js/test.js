const BuscarParametrosDelUrl = new URLSearchParams(window.location.search);
const params = Object.fromEntries(BuscarParametrosDelUrl.entries());

console.log(params)
console.log(params.l)
switch(params.l){
   default:
        document.write(`
        <center>
  <font color="WHITE" face="arial" size="4" width="300">
  <repo>Hello my name is FHDMS;AJDHKJFDH<br>and welcome to my main page!<br/>
  </repo>
  </font>
</center>
<font face="arial" color="WHITE">
  <span style="position:absolute; margin-top: 420px; margin-left: 20px" title="Spanish"><a lang="es" href="index-es.html">Cambiar a Español!</a></span>

</font>
        `)
        break;
    case "esp","es","mx":
      break;
} 
if (params.l == "es")
console.log("spanish men");

function mueveReloj(){
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()

  horaImprimible = hora + " : " + minuto + " : " + segundo

  document.form_reloj.reloj.value = horaImprimible
setTimeout("mueveReloj()",1000)

}
