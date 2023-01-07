package src;


class Welcome extends HaxeWebHandler
{
    public override function open():Void
    {
        createText("Please select your page:", 32,"Arial","WHITE",false);
    }
}