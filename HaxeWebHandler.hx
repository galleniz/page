package;

import js.Lib;
import js.Browser;
// import js.html.
import js.html.*;
import js.Syntax;
import haxe.Timer;

class HaxeWebHandler 
{
  public static var ver:String = "0.0.1b";
  public var document = Browser.document;
  public var browser = Browser;
  public var lib = Lib;
  public static var bindAll:Bool = false;
  public static var instance:HaxeWebHandler;

  public function new() {
    getParams();

    if (!bindAll){
    trace("Starting...");
      update(0);

    document.addEventListener("DOMContentLoaded", function(event) {
      trace("File is ready");
      onReady();
      tryUpdate();
    });
    }
    bindAll = true;
  }
  public function open():Void {}
  function tryUpdate():Void
  {
    Timer.delay(tryUpdate,60);

    update(1 / 60);
    Browser.document.body.style.backgroundColor = color;
  }
  public function update(elapsed:Float):Void
    {
        for (child in childs)
            child.update(elapsed);
    }
  private var childs:Array<HaxeWebHandler> = [];
  public function addImg(src:String,width:Int,height:Int,?style:Dynamic)
    {
        style = checkStyle(style);
        document.writeln('<img class=img src="img/${src}" width="${width}" height="${width}" ${getStyle(style)}></img>');
    }
    function checkStyle(style:Dynamic)
    {
        if (style == null)
            style = {};
        return style;
    }
    public function check_error(e:String)
      {
        HaxeWebHandler.instance.color = "BLACK";
        HaxeWebHandler.instance.update(1);
        createText("ERROR: " + e,16,"Arial","WHITE",true);
      
      }
  public function addChild(clas:Class<HaxeWebHandler>)
    {
      if (clas == null)
       check_error("not founded page.\nClassToSearch =* " + params.classLoad+".hx*.\n Please check it in the server system.\nHaxeWebHandler.ver: " + HaxeWebHandler.ver + ".\n");
      
      try {
        if (clas == null)
          return;
        var e:HaxeWebHandler = cast Type.createInstance(clas,[]);
        
        e.onReady();
        e.open();
       
        childs.push(e);
      } catch(e) {
        check_error(e.message);
      }
    }
  private var params:Dynamic = null;
  public function getParams()
  {
    if (params == null)
        params = js.Syntax.code("Object.fromEntries(new URLSearchParams(window.location.search).entries())");
    if (params == null)
            params = {};
    return params;
  }
  public function setTitle(str:String){
    trace(str);
    Browser.document.title = str;
    }
  public function onReady():Void {}
  /**
    Used for the callBack methods.
  */
  public var members:Array<Element> = [];
  /**
    Add an element in the document.
    @param AnElement  any element by extended Element
  */
  public function add(AnElement:Element):Void
  {

    members.push(AnElement);
    Browser.document.body.appendChild(AnElement);
  }
  public var color:String = "";
  public function setColor(clr:Dynamic):Void
    {
    
        var color:String = "" + clr;

        if (clr is String)
            color = clr;
        color = color.toUpperCase();
        trace(color);
        if (HaxeWebHandler.instance != null)
         HaxeWebHandler.instance.color =  color;
        else
            this.color = color;
    }
  // public function code(str,arg)
    // Syntax.code(str,arg);
  function getStyle(style:Dynamic)
    {
        var toAdd = 'style="';
        // style.para,s
        var fields = Reflect.fields(style);
        for (i in fields)
            toAdd += '$i: ${Reflect.getProperty(style,i)};';
        toAdd += '"';
        return toAdd;
    }
  public function createText(text:String, size:Int=8, font:String = "Tahoma", color:String = "WHITE",center:Bool = false, ?style:Dynamic)
    {
        var splittedText = text.split("");
        var bold:Bool = false;
        var bannedWords:String = "*";
        var toAdd = '<${center ? "center" : "txt"} ${getStyle(style)}> <font color="$color" face="${font}" size="${size}">';
        for (i in 0...splittedText.length)
        {
            if (splittedText[i] == "*"){
              toAdd += (bold) ? '</b>' : '<b>';
              bold = !bold;
            }

            if (bannedWords.indexOf(splittedText[i]) == -1)
            {
                if (splittedText[i] == "\n")
                    toAdd += '</font></${center ? "center" : "txt"}><${center ? "center" : "txt"} ${getStyle(checkStyle(style))}> <font color="$color" face="${font}" size="${size} ">';
                else
                    toAdd += splittedText[i] + "";
            }
        }

        document.write(toAdd += '</font></${center ? "center" : "txt"}>');
    }

  public function randomNum(min:Float,max:Float):Float
    {
        var num = Math.random() * max;
        do {
            if (num <= min)
                num += 0.01;
            else
                num -= 0.01;
           
        } while(num < min && num > max);

        return num;
    }
  public function createButton(text:String,onclick)
    {
      var btn = Browser.document.createButtonElement();
      btn.textContent = text;
      btn.onclick = onclick;
      return btn;
    } 
  
}
// typedef Style = {?top:Float,?left:Float,?down:Float,?right:Float