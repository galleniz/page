const params = Object.fromEntries((new URLSearchParams(window.location.search)).entries());
if (params.isalt != null && params.isalt === "true")
    document.write(`<img class=img src="../img/alt/`+ Math.floor(Math.random() * 2)  +".jpg\">");
else
    document.write("<img class=img src=\"../img/coco"+ Math.floor(Math.random() * 5)  +".jpg\">");
console.log("Cocos-random-img-engine v2")
