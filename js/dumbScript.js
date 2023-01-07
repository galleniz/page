var sizeImg = "70px";

var addmainoffset = "0px";
var _swag = 0;

var toAdd = [
    {
        img: "https://haxe.org/img/haxe-logo.svg ",
        txt: "Haxe",
        link: "https://haxe.org/"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        txt: "Javascript",
        link: "",
    }
]
var texts = [
    ["Who the hell is Niz?", 32, true,0],
    [`Hola mi nombre es Niz, realmente me llamo en forma real Jesus, soy creador de juegos como: aaa.\nMis lenguajes familiarizados son:`,5,false,10],
   
]
function calcAge() {
    var date = new Date(Date.now())
    var age = date.getFullYear() - 2008;

    return age;
}
  
var textsAboutMe = [
    [`About me!`,32,true, 10],
    [`Tengo ${calcAge()} años.\nEstudio actualmente escuela normal de estado estudiantil de México, vivo en México, hablo inglés, español,y portugués, podría decirse que soy un suertudo en Matemáticas porque soy realmente bueno para esa materia xd.Mis especialidad es en hacer juegos horribles, tan solo ve mi Github, o mi itch.io, también tengo una página propia en este motor tonto de páginas que no uso xd.
    `,4,false, 10],
    [`
    Voy a contar más sobre mi, tengo muchas cosas que hago al día, literal soy de los chicos que lucen timidos y se la pasan callados (O al menos todo en su gran mayoria tiempo).Me gustan los gatos, odio estar en el foco principal, no duermo bien xd.\nPerecería un chico depresivo pero realmento no tengo depresión solo ando con humor para el orto, normalmente es porque recuerdo que tengo responsabilidades.\nSoy un desarrollador de videojuegos muy poco conocido ya que no hago juegos, literal me la paso haciendo tonterías como esta página de inicio sobre mi xd (Me costó aproximadamente un día entero hacer todo esto, si quieres puedes revisar el script llamado 'dumbScript.js' para que veas que no miento.)
    `,4,false, 10],
]
addSwagTexts(texts)

for (const iterator of toAdd)     
    addSwaglang(iterator.img,iterator.txt,iterator.link,true)

addSwagTexts(textsAboutMe)
    
function addSwagTexts(it){
    for (const iterator of it) {
        addMainOffset(iterator[3])
        addText(iterator[0],iterator[1],iterator[2])
    }
    
}
function addMainOffset(add)
{
    _swag += add;
    addmainoffset = `${_swag.toString()}px`
}
function addText(text,size,bold)
{
    //  <e style"margin-top: ${addmainoffset}">
console.log(text)
    var toAdd = `<center style="margin-top: ${addmainoffset};"> <font color="#ececec" face="arial" size="${size}" >`;

    if (bold)
        toAdd += "<b>"
    var loopNum = 0;
    var onCharIndex =0;
    for (var i of text) {
        if (i === "." &&  text[onCharIndex] != " ")
            i += " "
         if (loopNum >= 50 * (size * 0.75) || i === "\n"){
           
            if (i === " "|| i === "\n"){
            console.log("Oops a outline forced?")
            toAdd += `</font></center><center> <font color="#ececec" face="arial" size="${size} ">`
            loopNum = 0;
            }
            

        }

         toAdd += i
         loopNum += 1;
         onCharIndex+=1;
    }

    if (bold)
        toAdd += "</b>"

    toAdd += "</font></center>"

    console.log(toAdd);
    document.writeln(toAdd)
}
function addSwaglang(img,txt,link,center)
{
    console.log("Adding a swag language in the document");
    console.log(img);
    console.log(txt);
    console.log(link);
    document.writeln(`
    <center>
        <br></br>
        <a href="${link}" style="margin-right: ${sizeImg};">
        <img src="${img}" 
        style="margin-left: -55px; margin-top: -20px; position: absolute"
        width="50" 
        height="50"></img>

        <font color="WHITE" face="arial"><e style="position:absolute">${txt}</e></font>
        </a>
    </center>
    `)
}