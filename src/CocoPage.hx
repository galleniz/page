package src;
import haxe.Timer;
class CocoPage extends HaxeWebHandler
{
    override public function open() 
    {
        if (params.lang == null)
            params.lang = "eng";
        var translate:Map<String,String> = [
            "eng-wel"=> "Welcome to the coco page!",
            "esp-wel"=> "Bienvenido a la coco page!",
            "eng-rul"=> "You can see a coconut every 30s (I think so)",
            "esp-rul"=> "Se podra ver un coco cada 30s (Eso creo)",
            "TILIN"=>"?"
        ];
        // #if debug #end
        createText(
            translate.get(params.lang + "-wel")
            ,16,"Tahoma","BLACK",true);
        createText(
            translate.get(params.lang + "-rul")
            ,5,"Tahoma","BLACK",true);

        addImg("coco" + Math.floor(Math.random() * 5) + ".jpg",250,250, 
        {
            "display": "block",
            "margin-left": "auto",
            "margin-right": "auto",
            "margin-top": "120px",
            "width": "auto",
        });
        setColor("WHITE");
        Timer.delay(function ()
            {
                browser.location.reload(true);
            },1000 * 30);
    }
    public var elapsedToReload:Float = 0;
    override function update(elapsed:Float):Void
    {
        elapsedToReload += elapsed * 1000;
       
    }
}