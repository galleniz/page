package src;

class Show extends HaxeWebHandler
{
    public override function open() {
        super.open();
        if (params.msg == null)
        {
            throw "No message?";
        } else
        {
            var colorWord = "WHITE";
            if (params.colorWord != null)
                colorWord = params.colorWord;
            createText(params.msg,8,"Arial",colorWord,true,{"margin-top":"250px"});
            if (params.color != null)
                setColor(params.color);
        }
        
    }
}