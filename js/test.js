const BuscarParametrosDelUrl = new URLSearchParams(window.location.search);
const params = Object.fromEntries(BuscarParametrosDelUrl.entries());

console.log(params.test) //OutPut => "ola"
console.log(params.anothersex) //OutPut => "2323"
var time = new Date();
console.log((time.getHours() % 12) + ":" + time.getMinutes() + ":" + time.getSeconds());