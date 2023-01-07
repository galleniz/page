package;
class Main extends HaxeWebHandler {

  static function main() new Main();
  
  static var map:Map<String,Class<HaxeWebHandler>> = [
    "aboutme"=> (src.AboutMe.AboutMe),
    "doxeo"=> (src.Doxeo.Doxeo),
    "cocopage"=> (src.CocoPage.CocoPage),
    "who"=>(src.Who.Who),
    "show"=>(src.Show),
    "say"=>(src.Show)
  ];
  public override  function onReady() {
   super.onReady();
   
    setTitle("MrNiz's Page!");
    setColor(323232);
    HaxeWebHandler.instance = this;
    var className = map.get(params.classLoad);
    if (params.classLoad == null) className = src.Welcome;

    addChild(className);
  }

}

