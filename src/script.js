(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HaxeWebHandler = function() {
	this.members = [];
	this.params = null;
	this.document = window.document;
	var _gthis = this;
	console.log("HaxeWebHandler.hx:17:","Starting...");
	this.document.addEventListener("DOMContentLoaded",function(event) {
		console.log("HaxeWebHandler.hx:20:","File is ready");
		_gthis.onReady();
	});
};
HaxeWebHandler.prototype = {
	getParams: function() {
		if(this.params == null) {
			this.params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
		}
		if(this.params == null) {
			this.params = { };
		}
		return this.params;
	}
	,setTitle: function(str) {
		console.log("HaxeWebHandler.hx:36:",str);
		window.document.title = str;
	}
	,onReady: function() {
	}
	,add: function(AnElement) {
		this.members.push(AnElement);
		window.document.body.appendChild(AnElement);
	}
	,createText: function(text,size,font,color) {
		if(color == null) {
			color = "WHITE";
		}
		if(font == null) {
			font = "Arial";
		}
		if(size == null) {
			size = 8;
		}
		var txt = window.document.createElement("font");
		txt.size = "" + size + "px";
		txt.face = font;
		txt.color = color;
		txt.textContent = text;
		return txt;
	}
	,createButton: function(text,onclick) {
		var btn = window.document.createElement("button");
		btn.textContent = text;
		btn.onclick = onclick;
		return btn;
	}
};
var Main = function() {
	HaxeWebHandler.call(this);
};
Main.main = function() {
	new Main();
};
Main.__super__ = HaxeWebHandler;
Main.prototype = $extend(HaxeWebHandler.prototype,{
	onReady: function() {
		HaxeWebHandler.prototype.onReady.call(this);
		console.log("Main.hx:10:","readkla");
		var button = this.createButton("A",function() {
			console.log("Main.hx:11:","hula mundo");
		});
		this.add(button);
		var txt = this.createText("Hola mundojjjjjjjjj");
		this.add(txt);
		this.setTitle("MrNiz's Page!");
		console.log("Main.hx:16:",this.getParams());
		console.log("Main.hx:17:",this.params.classLoad);
		if(this.params.classLoad == "aboutme") {
			new src_AboutMe().open();
		} else {
			console.log("Main.hx:20:","default class.");
		}
	}
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var src_AboutMe = function() {
	HaxeWebHandler.call(this);
};
src_AboutMe.__super__ = HaxeWebHandler;
src_AboutMe.prototype = $extend(HaxeWebHandler.prototype,{
	open: function() {
		var e = this.createText("ola");
		this.add(e);
	}
});
Main.main();
})({});
