package src;

class AboutMe extends HaxeWebHandler
{
    override public function open() {
        if (params.lang == null)
            params.lang = "eng";
        var lan = 0;
        if (params.lang == "esp")
            lan = 1;
        var e:Array<Array<Dynamic>> = [
            [

            ],
            [
                ["Hola soy Niz!",32],
                ["Soy hombre, actualmente tengo 14 (si es que la pagina no esta desactualizada), me gusta programar tonterias eso xd.",6],
                ["Actualmente (2022) manejo los lenguajes:",6],
                ["Haxe",4],
                ["Javascript",4],
                ["C++",4],
            ]
        ];
   
        var loopNum:Int = 0;

        for (i in e[lan])
            {
                createText(i[0],i[1],"Arial","WHITE",true);
                loopNum += 1;
            }
    }
}