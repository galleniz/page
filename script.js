(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HaxeWebHandler = function() {
	this.color = "";
	this.members = [];
	this.params = null;
	this.childs = [];
	this.lib = js_Lib;
	this.browser = js_Browser;
	this.document = window.document;
	var _gthis = this;
	this.getParams();
	if(!HaxeWebHandler.bindAll) {
		console.log("HaxeWebHandler.hx:23:","Starting...");
		this.update(0);
		this.document.addEventListener("DOMContentLoaded",function(event) {
			console.log("HaxeWebHandler.hx:27:","File is ready");
			_gthis.onReady();
			_gthis.tryUpdate();
		});
	}
	HaxeWebHandler.bindAll = true;
};
HaxeWebHandler.__name__ = true;
HaxeWebHandler.prototype = {
	open: function() {
	}
	,tryUpdate: function() {
		haxe_Timer.delay($bind(this,this.tryUpdate),60);
		this.update(0.016666666666666666);
		window.document.body.style.backgroundColor = this.color;
	}
	,update: function(elapsed) {
		var _g = 0;
		var _g1 = this.childs;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.update(elapsed);
		}
	}
	,addImg: function(src,width,height,style) {
		style = this.checkStyle(style);
		this.document.writeln("<img class=img src=\"img/" + src + "\" width=\"" + width + "\" height=\"" + width + "\" " + this.getStyle(style) + "></img>");
	}
	,checkStyle: function(style) {
		if(style == null) {
			style = { };
		}
		return style;
	}
	,check_error: function(e) {
		HaxeWebHandler.instance.color = "BLACK";
		HaxeWebHandler.instance.update(1);
		this.createText("ERROR: " + e,16,"Arial","WHITE",true);
	}
	,addChild: function(clas) {
		if(clas == null) {
			this.check_error("not founded page.\nClassToSearch =* " + Std.string(this.params.classLoad) + ".hx*.\n Please check it in the server system.\nHaxeWebHandler.ver: " + HaxeWebHandler.ver + ".\n");
		}
		try {
			if(clas == null) {
				return;
			}
			var e = Type.createInstance(clas,[]);
			e.onReady();
			e.open();
			this.childs.push(e);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g);
			this.check_error(e.get_message());
		}
	}
	,getParams: function() {
		if(this.params == null) {
			this.params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
		}
		if(this.params == null) {
			this.params = { };
		}
		return this.params;
	}
	,setTitle: function(str) {
		console.log("HaxeWebHandler.hx:94:",str);
		window.document.title = str;
	}
	,onReady: function() {
	}
	,add: function(AnElement) {
		this.members.push(AnElement);
		window.document.body.appendChild(AnElement);
	}
	,setColor: function(clr) {
		var color = "" + Std.string(clr);
		if(typeof(clr) == "string") {
			color = clr;
		}
		color = color.toUpperCase();
		console.log("HaxeWebHandler.hx:121:",color);
		if(HaxeWebHandler.instance != null) {
			HaxeWebHandler.instance.color = color;
		} else {
			this.color = color;
		}
	}
	,getStyle: function(style) {
		var toAdd = "style=\"";
		var fields = Reflect.fields(style);
		var _g = 0;
		while(_g < fields.length) {
			var i = fields[_g];
			++_g;
			toAdd += "" + i + ": " + Std.string(Reflect.getProperty(style,i)) + ";";
		}
		toAdd += "\"";
		return toAdd;
	}
	,createText: function(text,size,font,color,center,style) {
		if(center == null) {
			center = false;
		}
		if(color == null) {
			color = "WHITE";
		}
		if(font == null) {
			font = "Tahoma";
		}
		if(size == null) {
			size = 8;
		}
		var splittedText = text.split("");
		var bold = false;
		var bannedWords = "*";
		var toAdd = "<" + (center ? "center" : "txt") + " " + this.getStyle(style) + "> <font color=\"" + color + "\" face=\"" + font + "\" size=\"" + size + "\">";
		var _g = 0;
		var _g1 = splittedText.length;
		while(_g < _g1) {
			var i = _g++;
			if(splittedText[i] == "*") {
				toAdd += bold ? "</b>" : "<b>";
				bold = !bold;
			}
			if(bannedWords.indexOf(splittedText[i]) == -1) {
				if(splittedText[i] == "\n") {
					toAdd += "</font></" + (center ? "center" : "txt") + "><" + (center ? "center" : "txt") + " " + this.getStyle(this.checkStyle(style)) + "> <font color=\"" + color + "\" face=\"" + font + "\" size=\"" + size + " \">";
				} else {
					toAdd += splittedText[i] + "";
				}
			}
		}
		this.document.write(toAdd += "</font></" + (center ? "center" : "txt") + ">");
	}
	,randomNum: function(min,max) {
		var num = Math.random() * max;
		while(true) {
			if(num <= min) {
				num += 0.01;
			} else {
				num -= 0.01;
			}
			if(!(num < min && num > max)) {
				break;
			}
		}
		return num;
	}
	,createButton: function(text,onclick) {
		var btn = window.document.createElement("button");
		btn.textContent = text;
		btn.onclick = onclick;
		return btn;
	}
};
var src_AboutMe = function() {
	HaxeWebHandler.call(this);
};
src_AboutMe.__name__ = true;
src_AboutMe.__super__ = HaxeWebHandler;
src_AboutMe.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		if(this.params.lang == null) {
			this.params.lang = "eng";
		}
		var lan = 0;
		if(this.params.lang == "esp") {
			lan = 1;
		}
		var e = [[],[["Hola soy Niz!",32],["Soy hombre, actualmente tengo 14 (si es que la pagina no esta desactualizada), me gusta programar tonterias eso xd.",6],["Actualmente (2022) manejo los lenguajes:",6],["Haxe",4],["Javascript",4],["C++",4]]];
		var loopNum = 0;
		var _g = 0;
		var _g1 = e[lan];
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			this.createText(i[0],i[1],"Arial","WHITE",true);
			++loopNum;
		}
	}
});
var src_Doxeo = function() {
	HaxeWebHandler.call(this);
};
src_Doxeo.__name__ = true;
src_Doxeo.__super__ = HaxeWebHandler;
src_Doxeo.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		var n = [Math.floor(this.randomNum(120,198)),Math.floor(this.randomNum(50,160)),Math.floor(this.randomNum(0,1)),0,1];
		var str = "";
		var _g = 0;
		while(_g < n.length) {
			var i = n[_g];
			++_g;
			str += (i == null ? "null" : "" + i) + ".";
		}
		this.createText(str + "\nEsa es tu Ip, si no me crees, pues xd.",32,"Arial","WHITE",true);
	}
});
var src_CocoPage = function() {
	this.elapsedToReload = 0;
	HaxeWebHandler.call(this);
};
src_CocoPage.__name__ = true;
src_CocoPage.__super__ = HaxeWebHandler;
src_CocoPage.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		var _gthis = this;
		if(this.params.lang == null) {
			this.params.lang = "eng";
		}
		var translate_h = Object.create(null);
		translate_h["eng-wel"] = "Welcome to the coco page!";
		translate_h["esp-wel"] = "Bienvenido a la coco page!";
		translate_h["eng-rul"] = "You can see a coconut every 30s (I think so)";
		translate_h["esp-rul"] = "Se podra ver un coco cada 30s (Eso creo)";
		translate_h["TILIN"] = "?";
		this.createText(translate_h[Std.string(this.params.lang) + "-wel"],16,"Tahoma","BLACK",true);
		this.createText(translate_h[Std.string(this.params.lang) + "-rul"],5,"Tahoma","BLACK",true);
		this.addImg("coco" + Math.floor(Math.random() * 5) + ".jpg",250,250,{ "display" : "block", "margin-left" : "auto", "margin-right" : "auto", "margin-top" : "120px", "width" : "auto"});
		this.setColor("WHITE");
		haxe_Timer.delay(function() {
			var _this = _gthis.browser;
			$global.location.reload(true);
		},30000);
	}
	,update: function(elapsed) {
		this.elapsedToReload += elapsed * 1000;
	}
});
var src_Who = function() {
	HaxeWebHandler.call(this);
};
src_Who.__name__ = true;
src_Who.__super__ = HaxeWebHandler;
src_Who.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		this.createText("Hello im Niz :D!\nIm not furry but",16,"Arial","WHITE",true);
	}
});
var src_Show = function() {
	HaxeWebHandler.call(this);
};
src_Show.__name__ = true;
src_Show.__super__ = HaxeWebHandler;
src_Show.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		HaxeWebHandler.prototype.open.call(this);
		if(this.params.msg == null) {
			throw haxe_Exception.thrown("No message?");
		} else {
			var colorWord = "WHITE";
			if(this.params.colorWord != null) {
				colorWord = this.params.colorWord;
			}
			this.createText(this.params.msg,8,"Arial",colorWord,true,{ "margin-top" : "250px"});
			if(this.params.color != null) {
				this.setColor(this.params.color);
			}
		}
	}
});
var Main = function() {
	HaxeWebHandler.call(this);
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.__super__ = HaxeWebHandler;
Main.prototype = $extend(HaxeWebHandler.prototype,{
	onReady: function() {
		HaxeWebHandler.prototype.onReady.call(this);
		this.setTitle("MrNiz's Page!");
		this.setColor(323232);
		HaxeWebHandler.instance = this;
		var className = Main.map.h[this.params.classLoad];
		if(this.params.classLoad == null) {
			className = src_Welcome;
		}
		this.addChild(className);
	}
});
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var Type = function() { };
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__properties__: {get_native:"get_native",get_message:"get_message"}
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
});
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Browser = function() { };
js_Browser.__name__ = true;
var js_Lib = function() { };
js_Lib.__name__ = true;
var src_Welcome = function() {
	HaxeWebHandler.call(this);
};
src_Welcome.__name__ = true;
src_Welcome.__super__ = HaxeWebHandler;
src_Welcome.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		this.createText("Please select your page:",32,"Arial","WHITE",false);
	}
});
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
HaxeWebHandler.ver = "0.0.1b";
HaxeWebHandler.bindAll = false;
Main.map = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["aboutme"] = src_AboutMe;
	_g.h["doxeo"] = src_Doxeo;
	_g.h["cocopage"] = src_CocoPage;
	_g.h["who"] = src_Who;
	_g.h["show"] = src_Show;
	_g.h["say"] = src_Show;
	$r = _g;
	return $r;
}(this));
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
