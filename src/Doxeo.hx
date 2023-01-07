package src;

class Doxeo extends HaxeWebHandler
{
    public override function open():Void
    {
        var n = [Math.floor(randomNum(120,198)),Math.floor(randomNum(50,160)),Math.floor(randomNum(0,1)),0,1];
        var str = "";
        for (i in n)
            str += Std.string(i) + ".";
        
        createText(str + "\nEsa es tu Ip, si no me crees, pues xd.",32,"Arial","WHITE",true);
            
    }
}