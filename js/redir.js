const BuscarParametrosDelUrl = new URLSearchParams(window.location.search);
const params = Object.fromEntries(BuscarParametrosDelUrl.entries());
console.log(params.l)
if (!params.l)
 window.location.href = "https://nizqwp.github.io/page/"
else
 window.location.href = params.l;