(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.6)").s().p("AweDmIAAnLMAg9AAAIAAHLg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-23,211.1,46);


(lib.table_lamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.047)").s().p("AmPO2IAAhkIjIAAIAAhkIjIAAIAAhkIhkAAIAAjIIhkAAIAAhkIhkAAIAAjIIhkAAIAAjHIhkAAIAAksIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAADIIBkAAIAABkIDIAAIAABkIBkAAIAABkIDHAAIAAhkIDIAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAjIIBkAAIAAjIIBkAAIAAhkIDIAAIAABkIDIAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAAHzIhkAAIAABkIhkAAIAADIIhkAAIAABkIhkAAIAABkIhkAAIAABkIjIAAIAABkIjIAAIAABkIksAAIAABkg");
	this.shape.setTransform(0,85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,153,0.098)").s().p("AjHBkIAAhkIDHAAIAAhjIDIAAIAABjIhkAAIAABkg");
	this.shape_1.setTransform(60.025,150);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Aj5AyIAAhjIHzAAIAABjg");
	this.shape_2.setTransform(0,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Aj5ImIAAhkIIlAAIAAgyIBkAAIAAhkIAAAAIAyAAIAAj6IBkAAIAAFeIgyAAIAAhkIAAAAIAABkIAABkIiWAAIAAAygAnBHCIAAgyIgyAAIAAAAIAAhkIgyAAIAAiWIBkAAIAACWIAyAAIAABkIAAAAIAAgyICWAAIAABkgAldAyIAAhjIK7AAIAABjgAHCgxIAAksIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAAGQgAolgxIAAmQIBkAAIAAGQgAgxnBIAAhkIDHAAIAABkgAldnBIAAhkIDIAAIAABkg");
	this.shape_3.setTransform(0,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlELuIAAhkIiWAAIAAiWIAyAAIAAAyIDIAAIAABkIJXAAIAABkgAF3KKIAAgyICWAAIAAhkIAAAAIAyAAIAAleIhkAAIhkAAIAAhkIBkAAIBkAAIAABkIBkAAIAAGQIgyAAIAAgyIAAAAIAABkIgyAAIAAAygAF3KKgAo+JYIAAgyIgyAAIAAgyIgyAAIAAhkIAyAAIAAj6IBkAAIAAhkIBkAAIBkAAIAABkIK7AAIAACWIgyAAIAAAyIgyAAIAAhkInzAAIAABkIgyAAIAAgyIAAAAIgyAAIAAiWIhkAAIAABkIhkAAIAACWIAyAAIAABkIAABkgAjgHCIAAhkIHzAAIAABkgAI/AyIAAmPIjIAAIAAhkIDIAAIAABkIBkAAIAAGPgAI/AygApwAyIAAmPIBkAAIAAGPgAh8j5IAAhkIAAhkIjIAAIAAhkIDIAAIAAhkIBkAAIAABkIDHAAIAAhkIjHAAIAAhkIDHAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIAABkgAgYldIDHAAIAAhkIjHAAgAmoldIhkAAIAAhkIDIAAIAABkg");
	this.shape_4.setTransform(-2.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Aj5JYIAAhkIiWAAIAAgyIAAAAIgyAAIAAiWIAAhkIBkAAIAACWIAyAAIAABkIAAAAIAAgyIAyAAIAABkIHzAAIAAhkIAyAAIAAgyIAyAAIAAiWIBkAAIAAD6IgyAAIAAhkIAAAAIAABkIAABkIhkAAIAAAygAFeBkIq7AAIhkAAIAAmPIBkAAIDIAAIAABkIGPAAIAAhkIBkAAIAABkIBkAAIAAErgAgxnzIAAhkIDHAAIAABkg");
	this.shape_5.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-75,260,255);


(lib.PIlls = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AnBEsIAAhkIBkAAIAABkgACWDIIAAhkIDIAAIAABkgAFeBkIAAhkIBkAAIAABkgAnBBkIAAjHIBkAAIAAhkIDIAAIAADHIhkAAIAABkgACWAAIAAjHIBkAAIAAhkIDIAAIAADIIhkAAIAABjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnBGQIAAhkIhkAAIAAmPIBkAAIAADHIDIAAIAAhkIBkAAIAAjHIBkAAIAAErIhkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkgACWEsIAAhkIDIAAIAABkgAFeDIIAAhkIjIAAIAABkIhkAAIAAmPIBkAAIAAhkIBkAAIAABkIhkAAIAADHIDIAAIAAhjIBkAAIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAAGPIhkAAIAAhkIhkAAIAABkIBkAAIAABkgAFeDIgAHCBkgAnBhjIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-40,110,80);


(lib.phone_graphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("HUZZAH", "9px 'Segoe UI Historic'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-21,-135.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhjAyIAAhjIDHAAIAABjg");
	this.shape.setTransform(5,160);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBD6IAAhkIBkAAIAABkgAldCWIAAhkIhkAAIAAjHIBkAAIAAhkIK7AAIAABkIBkAAIAADHIhkAAIAABkg");
	this.shape_1.setTransform(-30,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF99").s().p("AH0M5IAAhkIq7AAIAAhkIhkAAIAAjIIBkAAIAAhkIJXAAIAABkIBkAAIAAEsIBkAAIAABkgAH0l2IAAhkIvnAAIAAhkIhkAAIAAjIIBkAAIAAgyIPnAAIAAAyIBkAAIAADIIhkAAIAABkIBkAAIAABkg");
	this.shape_2.setTransform(15,-27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AKKVGIAAhkIBkAAIAABkgAHCVGIAAhkIBkAAIAABkgAD6VGIAAhkIBkAAIAABkgAAyVGIAAhkIBkAAIAABkgAiVVGIAAhkIBkAAIAABkgAldVGIAAhkIBkAAIAABkgAolVGIAAhkIBkAAIAABkgArtVGIAAhkIBkAAIAABkgAKKR+IAAhkIBkAAIAABkgAHCR+IAAhkIBkAAIAABkgAD6R+IAAhkIBkAAIAABkgAAyR+IAAhkIBkAAIAABkgAiVR+IAAhkIBkAAIAABkgAldR+IAAhkIBkAAIAABkgAolR+IAAhkIBkAAIAABkgArtR+IAAhkIBkAAIAABkgAolO2IAAhkIUTAAIAABkgArtO2IAAhkIBkAAIAABkgArtLuIAAsfIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIK7AAIAAhkIBkAAIAAjIIhkAAIAAhkIq7AAIAABkIhkAAIAAqKIGQAAIAAAyIhkAAIAADIIBkAAIAABkIPnAAIAABkIBkAAIAARLIhkAAIAAksIhkAAIAAhkIpXAAIAABkIhkAAIAADIIBkAAIAABkIK7AAIAABkIBkAAIAADIgAKKrtIAAhkIBkAAIAABkgAKKwZIAAgyIBkAAIAAAygArtyvIAAiWIXbAAIAACWg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("ACWbWIAAhkIBkAAIAAhkIhkAAIAAhkIJYAAIAAhkIBkAAMAAAgqLIhkAAIAAhkI3bAAIAABkIhkAAMAAAAqLIBkAAIAABkIK8AAIAABkIhkAAIAABkIBkAAIAABkIsgAAIAAhkIhkAAIAAhkIhkAAMAAAgwbIBkAAIAAhkIBkAAIAAhkIajAAIAABkIBkAAIAABkIBkAAMAAAAwbIhkAAIAABkIhkAAIAABkgAiV4NIErAAIAAhkIkrAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AtRc6IAAhkIhkAAIAAhkIBkAAIAABkIMgAAIAAhkIDHAAIAABkIK8AAIAABkgANSbWIAAhkIBkAAIAABkgAO2ZyIAAhkIBkAAIAABkgAO2ZygACWZyIAAhkIjHAAIAAhkIq8AAIAAhkIhkAAMAAAgqLIBkAAIAACWIXbAAIAAiWI3bAAIAAhkIXbAAIAABkIBkAAMAAAAqLIhkAAIAAhkIhkAAIAABkIBkAAIAABkIpYAAIAABkIBkAAIAABkgAHCVGIBkAAIAAhkIhkAAgAD6VGIBkAAIAAhkIhkAAgAAyVGIBkAAIAAhkIhkAAgAiVVGIBkAAIAAhkIhkAAgAldVGIBkAAIAAhkIhkAAgAolVGIBkAAIAAhkIhkAAgArtVGIBkAAIAAhkIhkAAgAKKR+IBkAAIAAhkIhkAAgAHCR+IBkAAIAAhkIhkAAgAD6R+IBkAAIAAhkIhkAAgAAyR+IBkAAIAAhkIhkAAgAiVR+IBkAAIAAhkIhkAAgAldR+IBkAAIAAhkIhkAAgAolR+IBkAAIAAhkIhkAAgArtR+IBkAAIAAhkIhkAAgAolO2IUTAAIAAhkI0TAAgArtO2IBkAAIAAhkIhkAAgArtnBIAADIIAABkIAABkIAAMfIXbAAIAAjIIAAhkIAAxLIAAhkIAAhkIAAjIIAAgyIhkAAIvnAAImQAAgAiVZyIAAhkIBkAAIAABkgAwZZyIAAhkIhkAAMAAAgwbIBkAAMAAAAwbIBkAAIAABkgAQaYOMAAAgwbIhkAAIAAhkIhkAAIAAhkI6jAAIAAhkIajAAIAABkIBkAAIAABkIBkAAIAABkIBkAAMAAAAwbgAQaYOgAgxYOgALuVGgAiV4NIAAhkIErAAIAABkgAwZ4NIAAhkIBkAAIAABkgAu15xIAAhkIBkAAIAABkgAu15xg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-185,230,370);


(lib.letter_piece03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AnBFeIAAhkIK7AAIAABkgAiVCWIAAhkIGPAAIAABkgAnBCWIAAhkIDIAAIAABkgAnBgxIAAhkIODAAIAABkgAnBj5IAAhkIGQAAIAABkg");
	this.shape.setTransform(15,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtRK8IAA13IajAAIAAH0IksAAIAAErIhkAAIAADIIjIAAIAAEsIpXAAIAABkgArtJYIEsAAIAAhkIJXAAIAAksIDIAAIAAjIIBkAAIAAkrIEsAAIAAksI3bAAg");
	this.shape_1.setTransform(29,-24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArtJYIAAyvIXbAAIAAEsIksAAIAAErIhkAAIAADIIjIAAIAAEsIpXAAIAABkgApNG4IK7AAIAAhkIq7AAgAkhDwIGPAAIAAhkImPAAgApNDwIDIAAIAAhkIjIAAgApNAoIODAAIAAhjIuDAAgApNifIGQAAIAAhkImQAAg");
	this.shape_2.setTransform(29,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-94,170,140);


(lib.letter_piece02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Aj5EsIAAhkIJXAAIAABkgAEYBkIgeAAIAAhkICCAAIBGAAIAABkgAnBAAIAAhjIEsAAIAABjgAldjHIAAhQIAAgUIDIAAIAAAUIAABQg");
	this.shape.setTransform(225,-80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Au1K8IAA13IJYAAIAAGQIDIAAIAAhkIBkAAIAAhkIErAAIAADIIDIAAIAAErIGQAAIAADIIBkAAIAAH0gAtRJYIajAAIAAksIhkAAIAAjIImQAAIAAkrIjIAAIAAjIIhkAAIAABQIiAAAIAABkIAdAAIAAAUImQAAIAAmQIgeAAIAAgUIjIAAIAAAUIiqAAg");
	this.shape_1.setTransform(257.95,-48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtRJYIAAyvICqAAIAABQIDIAAIAAhQIAeAAIAAGQIGQAAIAAgUICqAAIAAhkIhHAAIAAhQIBkAAIAADIIDIAAIAAErIGQAAIAADIIBkAAIAAEsgApDgTIJYAAIAAhkIpYAAgAsKk/IErAAIAAhkIkrAAg");
	this.shape_2.setTransform(257.95,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163,-118,190,140);


(lib.letter_piece01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ABkHCIAAhkIBkAAIAAAyIAAAygAAAD6IAAgyIAAgyIDIAAIAABkgAjHAyIAAgyIAAgxIGPAAIAABjgABkiVIAAhkIDIAAIAABkgAkriVIAAhkIErAAIAABkgAjHldIAAhkIGPAAIAABkg");
	this.shape.setTransform(-10,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADIKKIAAhkIhkAAIAAgyIhkAAIAAgyIhjAAIAAgyIDHAAIAAhkIjHAAIAAAyIjIAAIAAiWIGPAAIAAhkImPAAIAAAyIhkAAIAAiWIEsAAIAAhjIksAAIAAomIMfAAIAAUTgAAAAAIDIAAIAAhjIjIAAgAkrjHIGPAAIAAhkImPAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABkLuIAAhkIjHAAIAAhkIhkAAIAAhkIjIAAIAAjIIhkAAIAAvnIPnAAIAAXbgADIImIAABkIDIAAIAA0TIsfAAIAAImIAABjIAACWIBkAAIAAAyIAACWIDIAAIAAAyIAAAyIBjAAIAAAyIAABkIBkAAIAAgyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,150);


(lib.knock_door_sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("PLEASE KNOCK THE DOOR, IF I AM NOT HERE, CONTACT 00000000", "10px 'Segoe Script'", "#FFCC00");
	this.text.lineHeight = 18;
	this.text.lineWidth = 184;
	this.text.parent = this;
	this.text.setTransform(-126,8.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AwZKKIAA0TMAgzAAAIAAUTgAvTiaIAyAAIAAAyIAyAAIAAAtIHCAAIAAgtIBkAAIAAgyIAyAAIAAleIgyAAIAAgyIgyAAIAAgyIgyAAIAAAyIgyAAIAAAyIiWAAIAAgyIgyAAIAAgyIgyAAIAAAyIgyAAIAAAyIgyAAIAABkIhkAAIAAAyIgyAAgAnfliIgyAAIAAgyIBkAAIAAAygArZliIgyAAIAAgyIBkAAIAAAyg");
	this.shape.setTransform(-35,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AhKBkIAAhkIgyAAIAAhjIAyAAICVAAIAAAyIAABjIAyAAIAAAyg");
	this.shape_1.setTransform(-115.5,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("ABLDhIAAgyIAyAAIAAhkIgyAAIAAgyIiVAAIAAgxIAAgyIhkAAIAAAyIAyAAIAAAxIAyAAIAAAyIgyAAIAAgyIiWAAIAAgxIAyAAIAAgyIAyAAIAAhkIAyAAIAAgyIAyAAIAAAyIAyAAIAAAyICVAAIAAgyIAyAAIAAgyIAyAAIAAAyIAyAAIAAFdIhkAAIAAAygABLgYIAAAxIAyAAIAAgxIAyAAIAAgyIhkAAgAhKAZg");
	this.shape_2.setTransform(-95.5,-28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AhKBkIAAgyIgyAAIAAhjIAyAAIAAAxIAyAAIAAAyIAxAAIAAgyIAyAAIAAgxIAyAAIAABjIgyAAIAAAygAhKgxIAAgyICVAAIAAAyg");
	this.shape_3.setTransform(-95.5,-15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ax9SwIAA3bIEsAAIAAhkIBkAAIAABkIXbAAIAAhkIBkAAIAABkIEsAAIAAXbgAwZRMMAgzAAAIAA0TMggzAAAgAtvGGIAAgtIgyAAIAAgyIgyAAIAAjIIAyAAIAAgyIBkAAIAAAyIgyAAIAAAyIgyAAIAABkIAyAAIAABkIDIAAICWAAIBkAAIAAAtgAmtFZIAAgyIBkAAIAAAygAlJEnIAAldIgyAAIAAgyIAyAAIAAAyIAyAAIAAFdgAlJEngAp1EnIAAgyIgyAAIAAgyICWAAIAAAyIgyAAIAAAygAoRCRIAAgyIAyAAIAAAygArZCRIAAgyIAyAAIAAAygAs9AtIAAhjIAyAAIAAgyIAyAAIAAgyIAyAAIAAAyIgyAAIAAAyIgyAAIAABjgAs9AtgAp1gEIAAgyIgyAAIAAgyIAyAAIAAAyICWAAIAAAygAnfg2IAAgyIAyAAIAAAygAmthoIAAgyIAyAAIAAAygAKKmPIAAhkIBkAAIAABkgArtmPIAAhkIBkAAIAABkgAImnzIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAqJnzIAAhkIBkAAIAABkgAqJnzgAolpXIAAhkIBkAAIAABkgAFeq7IAAhkIBkAAIAABkgAnBq7IAAhkIBkAAIAABkgAnBq7gAD6sfIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAldsfIAAhkIBkAAIAABkgAj5uDIAAhkIBkAAIAABkgAj5uDgAAyvnIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAABkgAiVvnIAAhkIBkAAIAABkg");
	this.shape_4.setTransform(-35,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-160,230,240);


(lib.door_knot_shape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#643300").s().p("AhjDIIAAmPIDHAAIAAGPg");
	this.shape.setTransform(10,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkrH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAhkIBkAAIAABkIhkAAIAAJXIBkAAIAABkIJXAAIAABkgAEsGQIAAhkIBkAAIAApXIBkAAIAAJXIhkAAIAABkgAEsGQgAjHEsIAAhkIhkAAIAAmPIBkAAIAAGPIDHAAIDIAAIAABkgADIDIIAAmPIjIAAIjHAAIAAhkIGPAAIAABkIBkAAIAAGPgAjHjHgAEskrIAAhkIpXAAIAAhkIJXAAIAABkIBkAAIAABkg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AkrGQIAAhkIhkAAIAApXIBkAAIAAhkIJXAAIAABkIBkAAIAAJXIhkAAIAABkgAjHEsIGPAAIAAhkIBkAAIAAmPIhkAAIAAhkImPAAIAABkIhkAAIAAGPIBkAAgAjHDIIAAmPIDHAAIAAGPgAjHDIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.clock04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxD6IAAhkIBjAAIAABkgAAyCWIAAmPIBkAAIAAEsIAABjgAAyCWgAiUj5IgBAAIAAAAIBkAAIAAAAg");
	this.shape.setTransform(190,-130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmPGQIAAsfIMfAAIAAMfgABkEsIAAAAIAAhjIAAAAgADIDIIAAAAIAAhjIAAAAgABkDIIAAAAIAAhjIAAAAgAhjkrIAAGPIAABkIBjAAIAAhkIBkAAIAAAAIAAhjIAAAAIAAksIhkAAIhjAAIhkAAIAAAAIAABkIABAAIAAhkgADIBkIAAAAIAAhjIAAAAg");
	this.shape_1.setTransform(195,-125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPngAmPGQIMfAAIAAsfIsfAAgAhjBkIAAmPIAAAAIBjAAIAAGPg");
	this.shape_2.setTransform(195,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,-175,100,100);


(lib.clock03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiVD6IAAhkIBkAAIAAhkIBjAAIAABkIhjAAIAABkgAAyAyIAAkrIBkAAIAAErgAiUj4IgBAAIAAgBIBkAAIAAABg");
	this.shape.setTransform(190,-247.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmPGQIAAsfIMfAAIAAMfgABkEsIAAAAIAAhkIAAAAgADIDIIAAAAIAAhkIAAAAgABkDIIAAAAIAAhkIAAAAgAkrDIIBkAAIBkAAIAAhkIBjAAIAAhkIBkAAIAAkrIhkAAIhjAAIhkAAIAAABIAABjIABAAIAAhjIBjAAIAAEqIhkAAIAABkIhkAAgADIBkIAAAAIAAhkIAAAAgABkBkIAAAAIAAhkIAAAAg");
	this.shape_1.setTransform(195,-242.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPngAmPGQIMfAAIAAsfIsfAAgAkrDIIAAhkIBkAAIAABkgAjHBkIAAhkIBkAAIAABkgAjHBkgAhjAAIAAkqIAAgBIBjAAIAAErgAhjAAg");
	this.shape_2.setTransform(195,-242.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,-292.9,100,99.99999999999997);


(lib.clock02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAyEsIAAksIhjAAIAAhjIhkAAIAAhkIBkAAIAABkIBjAAIAABjIBkAAIAAEsgAgxkrIAAAAIBjAAIAAAAg");
	this.shape.setTransform(180,-125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmPGQIAAsfIMfAAIAAMfgAkrjHIAABkIBkAAIAABjIBkAAIAAEsIBjAAIBkAAIAAksIhkAAIAAhjIhjAAIAAhkIhkAAIAAhkIBkAAIBjAAIAAAAIhjAAIhkAAIhkAAgADIDIIAAAAIAAhjIAAAAgADIBkIAAAAIAAhjIAAAAg");
	this.shape_1.setTransform(195,-125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPngAmPGQIMfAAIAAsfIsfAAgAAAEsIAAksIBkAAIAAEsgAhjAAIAAhjIhkAAIAAhkIBkAAIAABkIBjAAIAABjgAkrjHIAAhkIBkAAIAAAAIAABkgAhjkrIAAAAIBjAAIAAAAg");
	this.shape_2.setTransform(195,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,-175,100,100);


(lib.clock01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxD6IAAhkIhkAAIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAAABIAABjIAAAAIErAAIAABkgAiVj5IAAAAIBkAAIAAAAg");
	this.shape.setTransform(190,-130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmPGQIAAsfIMfAAIAAMfgAkrhjIAABjIBkAAIAABkIBkAAIAABkIErAAIAAhkIAAhkIkrAAIAAhiIBjAAIAAgBIjHAAIAAhkIhkAAgAjHkrIBkAAIBjAAIAAAAIhjAAIhkAAgAhjBkIAAhjIAAAAIAABjg");
	this.shape_1.setTransform(195,-125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPngAmPGQIMfAAIAAsfIsfAAgAhjBkIAAhjIAAAAIAAgBIErAAIAABkgAjHAAIAAhjIhkAAIAAhkIBkAAIAABkIDHAAIAAABIhjAAIAABigAhjkrIAAAAIBjAAIAAAAg");
	this.shape_2.setTransform(195,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,-175,100,100);


(lib.city = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("EBc+APoIAAksImQAAIAAEsImQAAIAAksIAAhkIAAhkIGQAAIAAhkIH0AAIAABkIAAH0gEBSCAK8IDIAAIAAhkIjIAAgEBbaAJYIBkAAIAAhkIhkAAgEBYSAJYIBkAAIAAhkIhkAAgEAvqAPoIAAksIBkAAIAAq8IDIAAIAAhjIBkAAIAAksIBkAAIAAhkIEsAAIAAHzIBkAAIAAPogEA16AMgIDIAAIAAhkIjIAAgEAyyAMgIBkAAIAAhkIhkAAgEA3eAJYIDIAAIAAhkIjIAAgEAyyAJYIDIAAIAAhkIjIAAgEA3eAGQIBkAAIAAhkIhkAAgEAyyAGQIDIAAIAAhkIjIAAgEA0WADIIEsAAIAAhkIksAAgEA3eAAAIBkAAIAAhjIhkAAgEA3egDHIDIAAIAAhkIjIAAgEAhmAPoIAAjIIBkAAIAAhkIhkAAIAAhkIBkAAIAAjIIhkAAIAAjIIBkAAIAAhkIhkAAIAApXIAAhkIBkAAIAAhkIhkAAIAABkIjIAAIAAjIIBkAAIAAhkIhkAAIAAhkIGQAAIAAJYIBkAAIAAUTIBkAAIAABkgEAjKgBjIBkAAIAAhkIhkAAgEAhmgMfIBkAAIAAhkIhkAAgAtRPoIAAsgIBkAAIAAhkIBkAAIAAhkIJYAAIAABkIErAAIAAhkIBkAAIAAnzIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIhkAAIAAjIIBkAAIAAjIIGQAAIAAJYIBkAAIAABkIBkAAIAAUTgAAyMgIDIAAIAAhkIjIAAgAldMgIDIAAIAAhkIjIAAgAqJMgIDIAAIAAhkIjIAAgAKKK8IBkAAIAAhkIhkAAgAHCK8IBkAAIAAhkIhkAAgAAyJYIBkAAIAAksIhkAAgAiVJYIBkAAIAAhkIhkAAgAolJYIEsAAIAAksIksAAgAKKH0IBkAAIAAhkIhkAAgAHCH0IBkAAIAAhkIhkAAgAiVGQIBkAAIAAhkIhkAAgAKKEsIBkAAIAAhkIhkAAgAHCEsIBkAAIAAhkIhkAAgAKKBkIBkAAIAAhkIhkAAgAHCBkIBkAAIAAhkIhkAAgAKKhjIBkAAIAAhkIhkAAgAHChjIBkAAIAAhkIhkAAgAKKkrIBkAAIAAhkIhkAAgAHCkrIBkAAIAAhkIhkAAgALunzIBkAAIAAhkIhkAAgEhQdAPoIAAhkIhkAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIjIAAIAAhkIAAhkIAAn0IBkAAIAAhkIDIAAIAAq7IAAksIEsAAIAADIIBkAAIAABkIDIAAIAABkIBkAAIAAJXIAADIIBkAAIBkAAIAAJYgEhVJAMgIEsAAIAAhkIksAAgEhbZAMgIEsAAIAAhkIksAAgEhSBAJYIBkAAIAAhkIhkAAgEhYRAJYIEsAAIAAhkIksAAgEhbZAJYIBkAAIAAhkIhkAAgEhSBAGQIBkAAIAAhkIhkAAgEhVJAGQIBkAAIAAhkIhkAAgEhYRAGQIBkAAIAAhkIhkAAgEhTlABkIBkAAIAAhkIBkAAIAAkrIhkAAIAAhkIhkAAIAABkIBkAAIAAErIhkAAgEhYRABkIDIAAIAAhkIjIAAgEhYRgDHIDIAAIAAhkIjIAAgEhYRgGPIDIAAIAAhkIjIAAg");
	this.shape.setTransform(295,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633CC").s().p("A13O2IAA0TIhkAAIAApYIBkAAIAAJYIBkAAIAAUTgEAtUANSIAAhkIGQAAIAABkgEBBoALuIAAjIIBkAAIAABkIH0AAIAABkgASwLuIAAhkIhkAAIAAhkImQAAIAAhkIH0AAIAADIIBkAAIAABkgEA88AKKIAAhkIBkAAIAABkgEAlgAKKIAAhkIH0AAIAABkgEA+gAImIAAhkIDIAAIAABkgEA+gAImgEAiYAImIAAhkIn0AAIAAhkIH0AAIAABkIDIAAIAABkgAUUImIAAhkIGQAAIAABkgAakHCgEhJbAD6IAAjIIBkAAIAAhjIGQAAIAAhkIhkAAIAAhkIhkAAIAAn0ImQAAIAAhkIH0AAIAAJYIDIAAIAADIIGQAAIAABjIBkAAIAABkIksAAIAAhkIpYAAIAABkIhkAAIAABkgAq7AyIAAhjIBkAAIAAhkIBkAAIAAmQIHzAAIAABkIkrAAIAABkIhkAAIAAEsIhkAAIAABjgEg4PAAyIAApXIDIAAIAAksIBkAAIAAhkIBkAAIAADIIhkAAIAADIIhkAAIAABkIhkAAIAAHzgEg4PAAygEgj7gAxIAAjIIEsAAIAAksIBkAAIDIAAIAABkIjIAAIAADIIAABkIksAAIAABkg");
	this.shape_1.setTransform(680,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633FF").s().p("AQaO2IAA13IhkAAIAAhkIDIAAIAAXbgAImO2IAAsgIBkAAIAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkgAwZO2IAA8HIhkAAIAAhkIDIAAIAAdrg");
	this.shape_2.setTransform(5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("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");
	this.shape_3.setTransform(385,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663399").s().p("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");
	this.shape_4.setTransform(385,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-100,1550,200);


(lib.chicken_Huzzah = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AifAyIgoAAIAAhZIAAgKIAoAAIFnAAIAAAKIAABZg");
	this.shape.setTransform(-34,-16.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AnBEsIAAjIIBkAAIAAhkIBkAAIAAhjIGPAAIAAhkIBkAAIAABkIBkAAIAABjIBkAAIAAEsgAFehjIAAhkIhkAAIAAhkIDIAAIAABkIAABkgAFehjgAldhjIhkAAIAAhkIBkAAIAAhkIBkAAIAADIg");
	this.shape_1.setTransform(-5,39.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApXMbIAAmQIDIAAIAABkIhkAAIAADIIODAAIAAksIDIAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAEsgAEsGLIAAhkIBkAAIAABkgAmPGLIAAhkIBkAAIAABkgAmPGLgAq7GLIAAhkIBkAAIAABkgADIEnIAAhkIBkAAIAABkgAkrEnIAAjIIhkAAIAAhjIhkAAIAAhkIGQAAIAABkIjIAAIAABjIBkAAIAABkIErAAIAABkgAkrEngApXEnIAAhkIBkAAIAABkgAGQDDIAAhkIjIAAIAAhjIBkAAIAAhkIBkAAIAAmQIhkAAIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkIBkAAIAAGQIhkAAIAADHIBkAAIAABkgABkDDIAAhkIBkAAIAABkgABkDDgAnzDDIAAhkIBkAAIAABkgAnzDDgADIBfgAmPBfgAhjhoIAAhkIBjAAIAABkgApXhoIAAhkIA8AAIAABaIAoAAIAAAKgAiLjMIAAgKIloAAIAAkiIBkAAIAADIIBkAAIAAhkIBkAAIAABkIBkAAIAABkgAAAkwIAAhkIBkAAIAABkgAmPn4IAAhkIBkAAIAABkgAmPn4gAkrpcIAAhkIBkAAIAABkgAjHrAIAAhaIErAAIAABag");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AGQImIAAhkIAAhkIBkAAIAABkIBkAAIAABkgApXImIAAhkIBkAAIBkAAIAABkgAjHFeIAAhkIhkAAIAAhkIDIAAIAAhkIBjAAIAAhjIhjAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIBkAAIAAhkIErAAIAABkIDIAAIAABkIBkAAIAAGPIhkAAIAABkIhkAAIAABkIhkAAIAABkgAAAiVIBkAAIAAhkIhkAAg");
	this.shape_3.setTransform(0,-15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-79.5,140,159.1);


(lib.bear_flying_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADhAyIAAgyICWAAIAAAygAl2AyIAAgyICWAAIAAAygAjgAAIAAgTIAAgeIAyAAIAAAeIAAATgAjgAAg");
	this.shape.setTransform(-22.55,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AjHD6IAAhkIhkAAIAAkrIBkAAIAAgyIAAgyIAyAAIFdAAIAABkIBkAAIAAErIhkAAIAABkgAjHgxIBkAAIAADHIBjAAIAAjHIDIAAIAAhkImPAAg");
	this.shape_1.setTransform(-25.05,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AQaEsIhkAAIAAhkIEsAAIBkAAIAABkgAzhEsIAAhkIAAAAIBkAAIAABkgAx9DIIAAhkIBkAAIAABkgAx9DIgAO2AAIAAhjIBkAAIAABjgAx9AAIAAhjIBkAAIAABjgAR+hjIhkAAIAAhkIDIAAIAABkgAzhhjIAAhkIBkAAIAABkgA1FjHIAAAAIAAhkIBkAAIAABkg");
	this.shape_2.setTransform(-0.05,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A1FImIAAjIIAAAAIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIhkAAIAADIgAQaFeIAAhkIEsAAIAABkgAO2CWIAAjHIBkAAIAAhkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIBkAAIAABkIhkAAIjIAAIAABkIBkAAIAADHIBkAAIAABkgAx9AyIAAhjIhkAAIAAAAIAAhkIBkAAIAABkIBkAAIAABjgAx9iVIAAhkIhkAAIAAhkIhkAAIAAjIIBkAAIAABkIBkAAIAABkIBkAAIAADIg");
	this.shape_3.setTransform(-0.05,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("ACWAyIAAhjIDIAAIAABjgAldAyIAAhjIDIAAIAABjg");
	this.shape_4.setTransform(-10.05,-20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AnBKKIAAhkIjIAAIAAhkIBkAAIBkAAIAABkIGQAAIErAAIAABkgA2pKKIAAksIBkAAIAADIIDIAAIAABkgAD6ImIAAhkIDIAAIAABkgAx9ImIAAjIIBkAAIAADIgAQaHCIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAABkgAHCHCIAAhkIBkAAIAABkgAldHCIAAjIIhkAAIAAhkIGQAAIAABkIjIAAIAADIgArtHCIAAhkIhkAAIAAksIBkAAIAAEsIBkAAIAABkgAVGFeIAAhkIAAhkIBkAAIAADIgAImFeIAApXIBkAAIAAJXgAImFegAwZFeIAAjIIAAhkIAAhjIAAhkIAAjIIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAABkIBkAAIAAMfgA1FFeIAAjIIBkAAIAABkIAABkgANSD6IAAkrIhkAAIAAksIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABkIhkAAIAAhkIhkAAIAAjIIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAADIIBkAAIAADHIAABkgATiCWIAAhkIBkAAIAABkgAzhCWIAAjHIBkAAIAABjIAABkgAR+AyIAAjHIBkAAIAADHgArtAyIAAkrIBkAAIAAErgAgxAeIAAhFIDRAAIAABFgAmPAeIAAgeIgyAAIAAAeIhaAAIAAhFIDSAAIAABFgA1FgxIAAjIIBkAAIAABkIAABkgATiiVIAAhkIBkAAIAABkgAVGj5gAHCj5IAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAiVj5IAAhkIhkAAIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIIDHAAIAABkgAqJj5IAAhkIBkAAIAABkgA2pj5IAAksIBkAAIAADIIAABkgAAyldIAAjIIBkAAIAAhkIDIAAIAABkIjIAAIAADIgAAyldgAolldIAAjIIBkAAIAADIgAolldg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AAyImIAAhkIBkAAIAAksIhkAAIAAhkIldAAIAAgUIBGAAIAAhFIjSAAIAABFIBaAAIAAAUIiWAAIAAAyICWAAIAAAyIhkAAIAAEsIhkAAIAAhkIhkAAIAAksIBkAAIAAkrIBkAAIAAhkIBkAAIAAjIIDIAAIAADIIBkAAIAABkIDHAAIAABkIDIAAIAAhkIjIAAIAAhkIBkAAIAAjIIDIAAIAADIIBkAAIAABkIBkAAIAAJXIhkAAIAABkIjIAAIAABkgABkBkICWAAIAAgyIiWAAgAAyAeIDSAAIAAhFIjSAAgAldiVIDIAAIAAhkIjIAAg");
	this.shape_6.setTransform(-10.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-65,290,130);


(lib.bear_flying_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADhAyIAAgyICWAAIAAAygAl2AyIAAgyICWAAIAAAygAjgAAIAAgTIAAgeIAyAAIAAAeIAAATgAjgAAg");
	this.shape.setTransform(-27.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AjHD6IAAhkIhkAAIAAkrIBkAAIAAgyIAAgyIAyAAIFdAAIAABkIBkAAIAAErIhkAAIAABkgAjHgxIBkAAIAADHIBjAAIAAjHIDIAAIAAhkImPAAg");
	this.shape_1.setTransform(-30,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("A2pGQIAAhkIBkAAIAABkgAVGEsIAAhkIksAAIhkAAIAAhkIGQAAIAABkIBkAAIAABkgA1FEsIAAhkIBkAAIAABkgAzhDIIAAhkIBkAAIAABkgAx9BkIAAhkIBkAAIAABkgAx9BkgAO2hjIAAhkIBkAAIAABkgAx9hjIAAhkIhkAAIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkIBkAAIAABkgAQajHIAAhkIEsAAIAABkgAQajHg");
	this.shape_2.setTransform(-5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A4/JYIAAmQIDIAAIAABkIBkAAIAAhkIhkAAIAAkrIhkAAIAAhkIhkAAIAAksIDIAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAAhkIhkAAIAAhkIjIAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABjIhkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAADIIhkAAIAADIIksAAIAABkgA3bGQIBkAAIAAhkIhkAAgASwH0IAAhkIhkAAIAAhkIhkAAIAAhkIEsAAIAABkIBkAAIAAhkIhkAAIAAhkImQAAIAAjHIBkAAIAAhkIEsAAIAADHIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAABkgAMghjIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAADIIksAAIAAhkIksAAIAABkIhkAAIAABkg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("ACWAyIAAhjIDIAAIAABjgAldAyIAAhjIDIAAIAABjg");
	this.shape_4.setTransform(-15,-25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("A6jK8IAAhkIABAAIAAhkIgBAAIAAksIBkAAIAAGQIBkAAIAAhkIEsAAIAABkIjIAAIAABkgASwJYIAAhkIEsAAIAABkgAnzJYIAAhkIjIAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIGQAAIErAAIAABkgAXcH0IAAhkIBkAAIAABkgAPoH0IAAjIIBkAAIAABkIBkAAIAABkgADIH0IAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkgADIH0gAyvH0IAAjIIBkAAIAADIgAyvH0gAZAGQIAAjIIBkAAIAADIgAZAGQgAmPGQIAAjIIhkAAIAAhkIGQAAIAABkIjIAAIAADIgAOEEsIAAhkIhkAAIAAkrIBkAAIAADHIAABkIBkAAIAABkgAH0EsIAApXIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkIBkAAIAAJXgAuDEsIAAksIBkAAIAAEsgAxLEsIAAjIIAAhkIAAhjIAAhkIAAjIIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAK7gAXcDIIAAhkIhkAAIAAhkIhkAAIAAjHIEsAAIAABkIjIAAIAABjIBkAAIAABkIBkAAIAABkgA4/DIIAAhkIBkAAIAAjHIBkAAIAAErgAsfAAIAAkrIBkAAIAAErgAsfAAgAhjgTIAAhGIDRAAIAABGgAnBgTIAAgeIgyAAIAAAeIhaAAIAAhGIDSAAIAABGgAK8hjIAAjIIBkAAIAADIgA4/hjIAAhkIhkAAIAAksIBkAAIAAEsIBkAAIAABkgAZAjHIAAjIIBkAAIAADIgAMgkrIAAhkIBkAAIAABkgAMgkrgAjHkrIAAhkIhkAAIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIIDHAAIAABkgAq7krIAAhkIBkAAIAAjIIBkAAIAADIIhkAAIAABkgAXcmPIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAOEmPIAAhkIBkAAIAABkgAOEmPgAAAmPIAAjIIBkAAIAAhkIDIAAIAABkIjIAAIAADIgAAAmPgASwnzIAAhkIBkAAIAABkgAPonzIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAPonzgA4/nzIAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkgA4/nzg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AAyImIAAhkIBkAAIAAksIhkAAIAAhkIldAAIAAgUIBGAAIAAhFIjSAAIAABFIBaAAIAAAUIiWAAIAAAyICWAAIAAAyIhkAAIAAEsIhkAAIAAhkIhkAAIAAksIBkAAIAAkrIBkAAIAAhkIBkAAIAAjIIDIAAIAADIIBkAAIAABkIDHAAIAABkIDIAAIAAhkIjIAAIAAhkIBkAAIAAjIIDIAAIAADIIBkAAIAABkIBkAAIAAJXIhkAAIAABkIjIAAIAABkgABkBkICWAAIAAgyIiWAAgAAyAeIDSAAIAAhFIjSAAgAldiVIDIAAIAAhkIjIAAg");
	this.shape_6.setTransform(-15,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-70,340,140);


(lib.Achivement_board04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("Achivement Complished! \nYummy!!!\nPlease Click the return button back to the main menu.", "17px 'Leelawadee UI'", "#FFFF33");
	this.text.lineHeight = 25;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(42,-33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AuDK8IAAhkIhkAAIAAhkIhkAAIAAvnIBkAAIAAhkIBkAAIAAhkIcHAAIAABkIBkAAIAABkIBkAAIAAPnIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(130,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDMgIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIcHAAIAABkgAOEK8IAAhkIBkAAIAABkgAOEK8gAPoJYIAAhkIBkAAIAABkgAPoJYgARMH0IAAvnIhkAAIAAhkIBkAAIAABkIBkAAIAAPngARMH0gAyvH0IAAvnIBkAAIAAPngAxLnzIAAhkIBkAAIAABkgAxLnzgAOEpXIAAhkIBkAAIAABkgAvnpXIAAhkIBkAAIAABkgAvnpXgAuDq7IAAhkIcHAAIAABkgAuDq7g");
	this.shape_1.setTransform(130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-40,240,160);


(lib.Achivement_board03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("Achivement Complished! \nPlayer One!\nPlease Click the return button back to the main menu.", "17px 'Leelawadee UI'", "#FFFF33");
	this.text.lineHeight = 25;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(42,-33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AuDK8IAAhkIhkAAIAAhkIhkAAIAAvnIBkAAIAAhkIBkAAIAAhkIcHAAIAABkIBkAAIAABkIBkAAIAAPnIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(130,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDMgIAAhkIhkAAIAAhkIBkAAIAABkIcHAAIAABkgAOEK8IAAhkIBkAAIAABkgAPoJYIAAhkIBkAAIAABkgAxLJYIAAhkIBkAAIAABkgARMH0IAAvnIhkAAIAAhkIBkAAIAABkIBkAAIAAPngARMH0gAyvH0IAAvnIBkAAIAAPngAxLnzIAAhkIBkAAIAABkgAxLnzgAOEpXIAAhkIBkAAIAABkgAvnpXIAAhkIBkAAIAABkgAvnpXgAuDq7IAAhkIcHAAIAABkgAuDq7g");
	this.shape_1.setTransform(130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-40,240,160);


(lib.Achivement_board02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("Achivement Complished! \nThere are houses of gold in books!\nPlease Click the return button back to the main menu.", "17px 'Leelawadee UI'", "#FFFF33");
	this.text.lineHeight = 25;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(42,-33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AuDK8IAAhkIhkAAIAAhkIhkAAIAAvnIBkAAIAAhkIBkAAIAAhkIcHAAIAABkIBkAAIAABkIBkAAIAAPnIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(130,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDMgIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIcHAAIAABkgAOEK8IAAhkIBkAAIAABkgAOEK8gAPoJYIAAhkIBkAAIAABkgAPoJYgARMH0IAAvnIhkAAIAAhkIBkAAIAABkIBkAAIAAPngARMH0gAyvH0IAAvnIBkAAIAAPngAxLnzIAAhkIBkAAIAABkgAxLnzgAOEpXIAAhkIBkAAIAABkgAvnpXIAAhkIBkAAIAABkgAvnpXgAuDq7IAAhkIcHAAIAABkgAuDq7g");
	this.shape_1.setTransform(130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-40,240,160);


(lib.Achivement_board01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("Achivement Complished! \nSleeping beauty.\nPlease Click the return button back to the main menu.", "17px 'Leelawadee UI'", "#FFFF99");
	this.text.lineHeight = 25;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(42,-33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AuDK8IAAhkIhkAAIAAhkIhkAAIAAvnIBkAAIAAhkIBkAAIAAhkIcHAAIAABkIBkAAIAABkIBkAAIAAPnIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(130,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDMgIAAhkIhkAAIAAhkIBkAAIAABkIcHAAIAABkgAOEK8IAAhkIBkAAIAABkgAPoJYIAAhkIBkAAIAABkgAxLJYIAAhkIBkAAIAABkgARMH0IAAvnIhkAAIAAhkIBkAAIAABkIBkAAIAAPngARMH0gAyvH0IAAvnIBkAAIAAPngAxLnzIAAhkIBkAAIAABkgAxLnzgAOEpXIAAhkIBkAAIAABkgAvnpXIAAhkIBkAAIAABkgAvnpXgAuDq7IAAhkIcHAAIAABkgAuDq7g");
	this.shape_1.setTransform(130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-40,240,160);


(lib.Achivement_board = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("Achivement Complished! \nA broken mirror joined together.\nPlease Click the return button back to the main menu.", "17px 'Leelawadee UI'", "#FFFF33");
	this.text.lineHeight = 25;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(42,-33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AuDK8IAAhkIhkAAIAAhkIhkAAIAAvnIBkAAIAAhkIBkAAIAAhkIcHAAIAABkIBkAAIAABkIBkAAIAAPnIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(130,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDMgIAAhkIhkAAIAAhkIBkAAIAABkIcHAAIAABkgAOEK8IAAhkIBkAAIAABkgAPoJYIAAhkIBkAAIAABkgAxLJYIAAhkIBkAAIAABkgARMH0IAAvnIhkAAIAAhkIBkAAIAABkIBkAAIAAPngARMH0gAyvH0IAAvnIBkAAIAAPngAxLnzIAAhkIBkAAIAABkgAxLnzgAOEpXIAAhkIBkAAIAABkgAvnpXIAAhkIBkAAIAABkgAvnpXgAuDq7IAAhkIcHAAIAABkgAuDq7g");
	this.shape_1.setTransform(130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-40,240,160);


(lib.trash_can = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AD6FeIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAgxFeIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIhkAAIAAhjIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAABkIBkAAIAABkIBjAAIAABkgAnBAyIBkAAIAAhjIhkAAIAAhkIhkAAIAABkIBkAAgAj5FeIAAhkIBkAAIAABkgAHCD6IAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAABkIBkAAIAABkgAiVD6gAldD6gAAyCWIAAhkIBkAAIAABkgAj5CWgAImAyIAAhjIBkAAIAABjgAgxAyIAAhjIhkAAIAAhkIhkAAIAAhkIDIAAIAADIIBjAAIAABjgAHCgxIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAnBgxgAImj5IAAhkIBkAAIAABkgAqJj5IAAhkIBkAAIAABkg");
	this.shape.setTransform(85,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AFeD6IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgACWD6IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAiVD6IAAhkIBkAAIAABkgAnBD6IAAhkIjIAAIAAhkIBkAAIAAhjIBkAAIAADHIBkAAIAABkgAImCWIAAhkIBkAAIAABkgAD6CWgAj5CWIAAhkIBkAAIAABkgAiVAyIAAhjIBkAAIAABjgAiVAygAldAyIAAhjIBkAAIAABjgAj5gxIAAhkIBkAAIAAhkIDHAAIAABkIjHAAIAABkgAj5gxgAqJgxIAAhkIBkAAIAABkgAD6iVIAAhkIDIAAIAABkg");
	this.shape_1.setTransform(85,-35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnBK8IAAhkIjIAAIAAksIhkAAIAAmPIBkAAIAAhkIhkAAIAAksIBkAAIAAhkIDIAAIAAhkIODAAIAABkIDIAAIAABkIBkAAIAAEsIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAABjIBkAAIAAhjIBkAAIAAGPIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAEsIjIAAIAABkgAD6JYIBkAAIAAhkIhkAAgAgxH0IAABkIBjAAIAAhkIhjAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAABjIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkgAAyBkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAgAAyGQIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhjAAIAAjIIjIAAIAABkIBkAAIAABkIBkAAIAABkIBjAAgAFejHIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAhkgAj5jHIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAgAqJjHIDIAAIAABkIBkAAIAAhkIhkAAIAAjIIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAldkrIBkAAIAAhkIBkAAIAAhkIDHAAIAAhkIjHAAIAABkIhkAAIAABkIhkAAgAD6nzIDIAAIAAhkIjIAAgAj5H0IAAhkIBkAAIAABkgAnBH0IAAhkIBkAAIAABkgAldGQIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAAyEsgAImDIgAolDIIAAhkIBkAAIAABkgAolmPg");
	this.shape_2.setTransform(85,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_3.setTransform(-34.975,55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhjCWIAAhkIBjAAIAAhjIBkAAIAABjIhkAAIAABkgAhjgxIAAhkIBjAAIAABkg");
	this.shape_4.setTransform(-60,65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ax9MgIAAhkIhkAAIAAksIBkAAIAAhkIBkAAIDIAAIAABkIhkAAIhkAAIhkAAIAABkIBkAAIBkAAIAABkIhkAAIhkAAIAABkIBkAAIBkAAIBkAAIAABkgAtRK8IAAhkIAAhkIAAhkIBkAAIAABkIAADIgAtRK8gAAyJYIAAhkIjHAAIAAksIhkAAIAAmPIBkAAIAAhkIhkAAIAAjIIAAhkIBkAAIAAhkIDHAAIAAhkIOEAAIAABkIDIAAIAABkIBkAAIAAEsIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAAGPIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAABjIBkAAIAABkIBkAAIAABkIBkAAIAAEsIjIAAIAABkgALuH0IBkAAIAAhkIhkAAgAHCGQIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhjAAIAAhkIhkAAIAABkIBkAAIAABjIhkAAIAABkIBkAAIAABkIBjAAIAABkIhjAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkgAImAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAgAImEsIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAjHIjIAAIAABjIBkAAIAABkIBkAAIAABkIBkAAgANSkrIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAhkgAD6krIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAgAiVkrIDHAAIAABkIBkAAIAAhkIhkAAIAAjIIhjAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgACWmPIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIjIAAIAABkIhkAAIAABkIhkAAgALupXIDIAAIAAhkIjIAAgAD6GQIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAAyGQIAAhkIBkAAIAABkgAImDIgAAyDIIAAhkIBkAAIAABkgAQaBkgAgxBkIAAhkIBjAAIAABkg");
	this.shape_5.setTransform(35,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Au1K8IAAhkIBkAAIAABkgAx9K8IAAhkIBkAAIAABkgArtH0IAAhkIAAhkIhkAAIjIAAIAAhkIBkAAIAAjIIBkAAIAAhjIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAADIIAABkIhkAAIAABkIhkAAIAABjIhkAAIAADIIhkAAIAADIIhkAAIAABkgAu1H0IAAhkIBkAAIAABkgAx9H0IAAhkIBkAAIAABkgANSjHIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAKKjHIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAFejHIAAhkIBkAAIAABkgAAyjHIAAhkIjHAAIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBjAAIAADIIBkAAIAABkgAQakrIAAhkIBkAAIAABkgALukrgAD6krIAAhkIBkAAIAABkgAFemPIAAhkIBkAAIAABkgAFemPgACWmPIAAhkIBkAAIAABkgAD6nzIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkgAD6nzgALupXIAAhkIDIAAIAABkg");
	this.shape_6.setTransform(35,10);

	this.text = new cjs.Text("--FIND A NOTE--", "15px 'Segoe Script'", "#FFCC00");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(85,-131.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.6)").s().p("AumD6IAAnzIdNAAIAAHzg");
	this.shape_7.setTransform(87.5,-119.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ax9MgIAAhkIhkAAIAAksIBkAAIAABkIBkAAIBkAAIAABkIhkAAIhkAAIAABkIBkAAIBkAAIBkAAIAAhkIAAhkIAAhkIBkAAIAABkIAADIIhkAAIAABkgAAyJYIAAhkIjHAAIAAksIhkAAIAAmPIBkAAIAAhkIhjAAIAAhkIgBAAIAAAAIABAAIAAhkIgBAAIAAAAIAAhkIBkAAIAAhkIDHAAIAAhkIOEAAIAABkIDIAAIAABkIBkAAIAAEsIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAAGPIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAABjIBkAAIAABkIBkAAIAABkIBkAAIAAEsIjIAAIAABkgALuH0IBkAAIAAhkIhkAAgAHCGQIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhjAAIAAhkIhkAAIAABkIBkAAIAABjIhkAAIAABkIBkAAIAABkIBjAAIAABkIhjAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkgAImAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAgAImEsIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAjHIjIAAIAABjIBkAAIAABkIBkAAIAABkIBkAAgANSkrIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAhkgAD6krIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAgAAyjHIBkAAIAAhkIhkAAgAiVkrIDHAAIAAjIIhjAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgACWmPIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIjIAAIAABkIhkAAIAABkIhkAAgALupXIDIAAIAAhkIjIAAgAD6GQIAAhkIBkAAIAABkgAAyGQIAAhkIBkAAIAABkgAu1GQIhkAAIhkAAIAAhkIBkAAIABAAIDHAAIAABkgAx9GQgACWEsIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAImDIgAQaBkgAgxBkIAAhkIBjAAIAABkg");
	this.shape_8.setTransform(35,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("Au1K8IAAhkIBkAAIAABkgAx9K8IAAhkIBkAAIAABkgArtH0IAAhkIAAhkIAAAAIAADIgAu1H0IAAhkIBkAAIAABkgAx9H0IAAhkIBkAAIAABkgAwZEsIAAhkIABAAIAABkgAu1DIIAAjIIABAAIAADIgAtRAAIAAhjIAAAAIAABjgArthjIAAhkIBkAAIAAhkIDIAAIAAhkIDIAAIAAAAIjIAAIAABkIDIAAIAAAAImQAAIAABkIEsAAIAAAAImQAAIAABkgANSjHIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAKKjHIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAFejHIAAhkIBkAAIAABkgAAyjHIAAhkIBkAAIAABkgAQakrIAAhkIBkAAIAABkgALukrgAD6krIAAhkIBkAAIAABkgAiVkrIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBjAAIAADIgAFemPIAAhkIBkAAIAABkgAFemPgACWmPIAAhkIBkAAIAABkgAldnzIAAAAIBkAAIAAAAgAD6nzIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkgAD6nzgALupXIAAhkIDIAAIAABkg");
	this.shape_9.setTransform(35,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape},{t:this.shape_4},{t:this.shape_7},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-144.9,271,234.9);


(lib.streetlamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,51,0,0.098)").s().p("Aj5CWIAAhkIhkAAIAAhjIBkAAIAABjIHzAAIAABkgAD6AyIAAhjIBkAAIAABjgAD6AygAFegxIAAhkIBkAAIAABkgAnBgxIAAhkIBkAAIAABkg");
	this.shape.setTransform(-65,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,153,51,0.098)").s().p("AldLuIAAhkIn0AAIAAhkIksAAIAAhkIjIAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAAksIBkAAIAAhkIDIAAIAAhkIDIAAIAAhkIEsAAIAAhkIOEAAIAAEsIhkAAIAABkIhkAAIAABkIhkAAIAADIIAABjIBkAAIAABkIBkAAIAABkIHzAAIAAhkIBkAAIAAhkIBkAAIAAhjIAAjIIhkAAIAAhkIhkAAIAAhkIhkAAIAAksIOEAAIAABkIJYAAIAADIIBkAAIAABkIBkAAIAAEsIhkAAIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkIjIAAIAABkIjIAAIAABkIhkAAIAABkIyvAAIAABkg");
	this.shape_1.setTransform(-65,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,204,0.098)").s().p("A7VUUIAAjIIBkAAIAAhkIBkAAIAAjIIDIAAIAAksIBkAAIAAjIIBkAAIAAhkIBkAAIAAjIIBkAAIAAjHIBkAAIAAhkIBkAAIAAksIBkAAIAAhkIBkAAIAAhkIBkAAIAAksIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAMAAAAiXIuEAAIAABkIksAAIAABkIjIAAIAABkIjIAAIAABkgAR+PoIAAhkIuEAAMAAAgiXIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAAEsIBkAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAAErIBkAAIAADIIBkAAIAABkIBkAAIAADIIBkAAIAADIIBkAAIAADIIBkAAIAABkg");
	this.shape_2.setTransform(-75,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A293A").s().p("AiVc6IAAhkIhkAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIBjAAIAAhkIBkAAIAAhkIBkAAIAABkIAABkIhkAAIAABkgAgxHCIAA13IBjAAIAAV3gAD6zhIAAhkIhkAAIAAhkIhkAAIAAhkIhjAAIAABkIhkAAIAABkIhkAAIAABkIjIAAIAAjIIBkAAIAAhkIBkAAIAAhkIHzAAIAABkIBkAAIAABkIBkAAIAADIgAiV7VIAAhkIErAAIAABkg");
	this.shape_3.setTransform(-65,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AiVAyIAAhjIErAAIAABjg");
	this.shape_4.setTransform(-65,-85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#334048").s().p("Aj5bWIAAhkIhkAAIAAjIIBkAAIAABkIBkAAIAABkIErAAIAAhkIBkAAIAAhkIBkAAIAADIIhkAAIAABkgAgxWqIAAywIBjAAIAASwgAj52pIAAhkIBkAAIAAhkIBkAAIAAhkIBjAAIAABkIBkAAIAABkIBkAAIAABkg");
	this.shape_5.setTransform(-65,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj5fQIAAhkIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkIHzAAIAABkgAD6dsIAAhkIBkAAIAABkgAD6dsgAFecIIAAjIIBkAAIAADIgAFecIgAgxakIAAhkIBjAAIAABkgAD6ZAIAAhkIhkAAIAABkIhkAAIAAywIAA13IhjAAIAAV3IAASwIhkAAIAAhkIhkAAIAAhkIBkAAIAAksMAAAgiXIErAAMAAAAiXIAAEsIBkAAIAABkIBkAAIAABkgAldZAIAAhkIBkAAIAABkgAj5XcgACWxLIAAhkIkrAAIAABkIhkAAIAAhkIjIAAIAAhkIDIAAIHzAAIDIAAIAABkIjIAAIAABkgACWxLgAHC0TIAAjIIBkAAIAADIgAHC0TgAol0TIAAjIIBkAAIAADIgAFe3bIAAhkIBkAAIAABkgAnB3bIAAhkIBkAAIAABkgAnB3bgAD64/IAAhkInzAAIAAjIIBkAAIAAhkIErAAIAABkIkrAAIAABkIErAAIAAhkIBkAAIAADIIBkAAIAABkgAld4/IAAhkIBkAAIAABkgAld4/g");
	this.shape_6.setTransform(-65,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AHCDIIAAhkIhkAAIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkIBkAAIAABkgAolDIIAAhkIBkAAIAABkgAnBBkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAnBBkgAFehjIAAhkIBkAAIAABkgAnBhjIAAhkIBkAAIAABkg");
	this.shape_7.setTransform(-65,-60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AiVAyIAAhjIErAAIAABjg");
	this.shape_8.setTransform(-65,-85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj5fQIAAhkIHzAAIAABkgAD6dsIAAhkIBkAAIAABkgAlddsIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAFecIIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIAADIgAFecIgAgxakIAAhkIBjAAIAABkgAAyZAIAAywIAA13IhjAAIAAV3IAASwIhkAAIAAhkIhkAAIAAhkIBkAAMAAAgnDIErAAMAAAAnDIBkAAIAABkIhkAAIAABkgAldZAIAAhkIBkAAIAABkgAldZAgAj5XcgACWxLIAAhkIkrAAIAABkIhkAAIAAhkIjIAAIAAhkIDIAAIHzAAIDIAAIAABkIjIAAIAABkgACWxLgAHC0TIAAjIIBkAAIAADIgAol0TIAAjIIBkAAIAADIgAFe3bIAAhkIBkAAIAABkgAnB3bIAAhkIBkAAIAABkgAnB3bgAD64/IAAhkInzAAIAAjIIBkAAIAABkIErAAIAAhkIBkAAIAADIIBkAAIAABkgAld4/IAAhkIBkAAIAABkgAld4/gAiV9rIAAhkIErAAIAABkgAiV9rg");
	this.shape_9.setTransform(-65,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_5},{t:this.shape_8},{t:this.shape_7}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-170,370,460);


(lib.start_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clicksound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AwZGQIAAq7IBkAAIAABkIAAErIDIAAIAABkIjIAAIAABkIAABkgAKKEsIAAmPIBkAAIAAGPgACWEsIAAmPIBkAAIAAGPgAj5EsIAAmPIBkAAIAAGPgAolEsIAAmPIBkAAIAAGPgANSkrIhkAAI6jAAIAAhkIfPAAIAABkgAu1krg");
	this.shape.setTransform(-65,-60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ACWAyIAAhjIBkAAIAABjgAj5AyIAAhjIBkAAIAABjg");
	this.shape_1.setTransform(-45,-65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AwZGQIAAhkIAAhkIEsAAIAAkrIjIAAIAAhkIDIAAIAAhkIksAAIAAhkIajAAIAAABIBkAAIAAgBIDIAAIBkAAIAAK7IhkAAIAABkgAImEsIBkAAIAAAAIhkAAgAImjHIAAGPIBkAAIAAAAIBkAAIAAmPIBkAAIAAhkIksAAgAFeBkIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAkrIksAAIAABkIhkAAIhjAAIAAhkIhkAAIAABkIhkAAIhkAAIAAhkIksAAIAABkIAAGPIBkAAIBkAAIAAmPIBkAAIAAGPIBkAAIBkAAIAAjIIBkAAIAADIIBjAAIBkAAIBkAAIAAhkg");
	this.shape_2.setTransform(-55,-50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AvnImIAAhkIfPAAIAABkgAPoHCIAAhkIBkAAIAABkgAPoHCgAxLHCIAAhkIBkAAIAABkgAJYFeIAAAAIBkAAIAAAAgARMFeIAAq7IhkAAIAAhkI/PAAIAAhkIfPAAIAABkIBkAAIAABkIBkAAIAAK7gARMFegAyvFeIAAq7IBkAAIAAK7gAK8D6IAAAAIAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAGQD6IAAhkIhkAAIAABkIhkAAIAAmPIAAhkIEsAAIAAErIhkAAIAABkIBkAAIAABkgAEsgxIBkAAIAAhkIhkAAgAAAD6IAAjIIhjAAIAADIIhkAAIAAmPIBkAAIAABkIBjAAIAAhkIBkAAIAAGPgAnzD6IAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAvnD6IAAhkIDIAAIAAhkIjIAAIAAkrIEsAAIAABkIjIAAIAABkIDIAAIAAErgAhjiVIAAhkIBjAAIAABkgAK8lcIAAgBIBkAAIAAABgAxLldIAAhkIBkAAIAABkgAvnnBg");
	this.shape_3.setTransform(-60,-55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3333").s().p("ACWAyIAAhjIBkAAIAABjgAj5AyIAAhjIBkAAIAABjg");
	this.shape_4.setTransform(-45,-65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AwZGQIAAq7IBkAAIAAhkIfPAAIAABkIjIAAIhkAAI6jAAIAABkIAAErIDIAAIAABkIjIAAIAABkIAABkgAKKEsIAAmPIBkAAIAAGPgACWEsIAAmPIBkAAIAAGPgAj5EsIAAmPIBkAAIAAGPgAolEsIAAmPIBkAAIAAGPg");
	this.shape_5.setTransform(-65,-60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AvnImIAAhkIhkAAIAAhkIBkAAIAABkIfPAAIAABkgAPoHCIAAhkIBkAAIAABkgAPoHCgAJYFeIAAAAIBkAAIAAAAgARMFeIAAq7IhkAAIAAhkI/PAAIAAhkIfPAAIAABkIBkAAIAABkIBkAAIAAK7gARMFegAyvFeIAAq7IBkAAIAAK7gAK8D6IAAAAIAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAGQD6IAAhkIhkAAIAABkIhkAAIAAmPIAAhkIEsAAIAAErIhkAAIAABkIBkAAIAABkgAEsgxIBkAAIAAhkIhkAAgAAAD6IAAjIIhjAAIAADIIhkAAIAAmPIBkAAIAABkIBjAAIAAhkIBkAAIAAGPgAnzD6IAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAvnD6IAAhkIDIAAIAAhkIjIAAIAAkrIEsAAIAABkIjIAAIAABkIDIAAIAAErgAhjiVIAAhkIBjAAIAABkgAK8lcIAAgBIBkAAIAAABgAxLldIAAhkIBkAAIAABkgAvnnBg");
	this.shape_6.setTransform(-60,-55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AxLJYIAAhkIfPAAIAABkgAOEH0IAAhkIBkAAIAABkgAyvH0IAAhkIBkAAIAABkgAPoGQIAAhkIBkAAIAABkgAxLGQIAAhkIAAhkIEsAAIAAkrIjIAAIAAhkIDIAAIAAhkIksAAIAAhkIajAAIAAABIBkAAIAAgBIDIAAIBkAAIAAK7IhkAAIAABkgAH0EsIBkAAIAAAAIhkAAgAH0jHIAAGPIBkAAIAAAAIBkAAIAAmPIBkAAIAAhkIksAAgAEsBkIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAkrIksAAIAABkIhkAAIhjAAIAAhkIhkAAIAABkIhkAAIhkAAIAAhkIksAAIAABkIAAGPIBkAAIBkAAIAAmPIBkAAIAAGPIBkAAIBkAAIAAjIIBkAAIAADIIBjAAIBkAAIBkAAIAAhkgAxLGQgARMEsIAAq7IhkAAIAAhkIBkAAIAABkIBkAAIAAK7gAPomPgAOEnzIAAhkIBkAAIAABkg");
	this.shape_7.setTransform(-50,-50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AvnImIAAhkIfPAAIAABkgAPoHCIAAhkIBkAAIAABkgAPoHCgAxLHCIAAhkIBkAAIAABkgAJYFeIAAAAIBkAAIAAAAgARMFeIAAq7IBkAAIAAK7gARMFegAyvFeIAAq7IBkAAIAAK7gAK8D6IAAAAIAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAGQD6IAAhkIhkAAIAABkIhkAAIAAmPIAAhkIEsAAIAAErIhkAAIAABkIBkAAIAABkgAEsgxIBkAAIAAhkIhkAAgAAAD6IAAjIIhjAAIAADIIhkAAIAAmPIBkAAIAABkIBjAAIAAhkIBkAAIAAGPgAnzD6IAAmPIhkAAIAAhkIEsAAIAABkIhkAAIAAGPgAvnD6IAAhkIDIAAIAAhkIjIAAIAAkrIEsAAIAABkIjIAAIAABkIDIAAIAAErgAhjiVIAAhkIBjAAIAABkgAK8lcIAAgBIBkAAIAAABgAPoldIAAhkI/PAAIAAhkIfPAAIAABkIBkAAIAABkgAxLldIAAhkIBkAAIAABkgAvnnBg");
	this.shape_8.setTransform(-60,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-110,250,120);


(lib.Sleep = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AH0HCIAAhkIEsAAIAABkgABkHCIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAABkgAq7HCIAAhkIhkAAIAAhkIBkAAIAABkIJYAAIAABkgAK8D6IAAhkIhkAAIhkAAIAAhkIDIAAIAABkIBkAAIAABkgABkD6IAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAq7D6IAAhkIBkAAIAABkgApXCWIAAhkIBkAAIAABkgApXCWgAEsAyIAAhjIBkAAIAABjgAnzAyIAAhjIBkAAIAABjgAnzAygADIgxIjIAAIAAhkIABAAIErAAIAABkgAmPgxIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAmPgxgAjHj5IAAhkIhkAAIn0AAIAAhkIJYAAIAABkIBkAAIAABkg");
	this.shape.setTransform(-60,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AH0HCIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkgABkHCIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIkrAAIAAhjIhjAAIAABjIgBAAIAAhkIGPAAIAABkIBkAAIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIDIAAIAABkgAq7HCIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAAhkIBkAAIAABkIhkAAIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIH0AAIAABkgAK8D6IAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkgAkriVIAAhkIBkAAIAABkgAjHj5IAAhkIBkAAIAABkgAsfldIAAhkIJYAAIAABkg");
	this.shape_1.setTransform(-60,-45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AH0HCIAAhkIEsAAIAABkgABkHCIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAABkgAq7HCIAAhkIhkAAIAAhkIBkAAIAABkIJYAAIAABkgAK8D6IAAhkIhkAAIhkAAIAAhkIDIAAIAABkIBkAAIAABkgABkD6IAAhkIBkAAIAABkgAq7D6IAAhkIBkAAIAABkgADICWIAAhkIBkAAIAABkgADICWgApXCWIAAhkIBkAAIAABkgApXCWgAEsAyIAAhjIBkAAIAABjgAEsAygAnzAyIAAhjIBkAAIAABjgAnzAygADIgxIjIAAIAAhkIABAAIErAAIAABkgAmPgxIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAmPgxgAjHj5IAAhkIhkAAIn0AAIAAhkIJYAAIAABkIBkAAIAABkg");
	this.shape_2.setTransform(-60,-35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AH0HCIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkgABkHCIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIDIAAIAABkgAq7HCIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIH0AAIAABkgAK8D6IAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkgABkD6IAAhkIBkAAIAABkgABkD6gADICWIAAhkIBkAAIAABkgADICWgAEsAyIAAhjIkrAAIAAhjIhjAAIAABjIgBAAIAAhkIGPAAIAABkIBkAAIAABjgAEsAygAmPgxIAAhkIBkAAIAABkgAkriVIAAhkIBkAAIAABkgAjHj5IAAhkIpYAAIAAhkIJYAAIAABkIBkAAIAABkg");
	this.shape_3.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-90,160,100);


(lib.send_message = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("苹果手机发出短信到达提示音综艺节目_系统提示_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.text = new cjs.Text("SEND MESSAGE", "17px 'Verdana'");
	this.text.lineHeight = 23;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(-103,-68);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AnzCWIAAhkIPnAAIAABkgAH0AyIAAhjIBkAAIAAhkIBkAAIAABkIhkAAIAABjgApXAyIAAhjIhkAAIAAhkIBkAAIAABkIBkAAIAABjg");
	this.shape.setTransform(-50,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF99").s().p("AJYFeIAAhkIBkAAIAABkgAnzFeIAAhkIhkAAIAAhkIhkAAIAAkrIBkAAIAAhkIBkAAIAAhkIPnAAIAABkIBkAAIAABkIBkAAIAAErIhkAAIAABkIhkAAIAABkg");
	this.shape_1.setTransform(-50,-45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AJYCWIAAhkIBkAAIAABkgAnzCWIAAhkIhkAAIAAhjIBkAAIAABjIPnAAIAABkgAH0AyIAAhjIBkAAIAABjgAJYgxIAAhkIBkAAIAABkgAq7gxIAAhkIBkAAIAABkg");
	this.shape_2.setTransform(-50,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF99").s().p("AJYFeIAAhkIhkAAIAABkIvnAAIAAhkIhkAAIAAhkIhkAAIAAkrIBkAAIAAhkIBkAAIAAhkIPnAAIAABkIBkAAIAABkIBkAAIAAErIhkAAIAABkIBkAAIAABkg");
	this.shape_3.setTransform(-50,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#006633"}}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-80,140,80);


(lib.return_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADIFeIAAhkIhkAAIAAhkIhkAAIAAhkIEsAAIAAEsgAhjFeIAAhkIhkAAIAAhkIBkAAIAABkIDHAAIAABkgAkrCWIAAhkIBkAAIAABkgADIgxIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAkrgxIAAksIBkAAIAABkIBkAAIAABkIBjAAIAABkgAhjj5IAAhkIDHAAIAABkgAhjj5g");
	this.shape.setTransform(0,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CE3B").s().p("ADIFeIAAhkIhkAAIAAhkIhkAAIAAhkIEsAAIAAEsgAhjFeIAAhkIDHAAIAABkgAjHD6IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgADIgxIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAkrgxIAAksIBkAAIAABkIBkAAIAABkIBjAAIAABkgAhjj5IAAhkIDHAAIAABkgAhjj5g");
	this.shape_1.setTransform(0,-35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CE3B").s().p("AjvF/IAAr9IHfAAIAAL9g");
	this.shape_2.setTransform(3.1,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-70,60,80.6);


(lib.phone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("iphone锁屏声音_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.text = new cjs.Text("HUZZAH", "9px 'Segoe UI Historic'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-21,-135.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhjAyIAAhjIDHAAIAABjg");
	this.shape.setTransform(5,160);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBD6IAAhkIBkAAIAABkgAldCWIAAhkIhkAAIAAjHIBkAAIAAhkIK7AAIAABkIBkAAIAADHIhkAAIAABkg");
	this.shape_1.setTransform(-30,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF99").s().p("AH0M5IAAhkIq7AAIAAhkIhkAAIAAjIIBkAAIAAhkIJXAAIAABkIBkAAIAAEsIBkAAIAABkgAH0l2IAAhkIvnAAIAAhkIhkAAIAAjIIBkAAIAAgyIPnAAIAAAyIBkAAIAADIIhkAAIAABkIBkAAIAABkg");
	this.shape_2.setTransform(15,-27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AKKVGIAAhkIBkAAIAABkgAHCVGIAAhkIBkAAIAABkgAD6VGIAAhkIBkAAIAABkgAAyVGIAAhkIBkAAIAABkgAiVVGIAAhkIBkAAIAABkgAldVGIAAhkIBkAAIAABkgAolVGIAAhkIBkAAIAABkgArtVGIAAhkIBkAAIAABkgAKKR+IAAhkIBkAAIAABkgAHCR+IAAhkIBkAAIAABkgAD6R+IAAhkIBkAAIAABkgAAyR+IAAhkIBkAAIAABkgAiVR+IAAhkIBkAAIAABkgAldR+IAAhkIBkAAIAABkgAolR+IAAhkIBkAAIAABkgArtR+IAAhkIBkAAIAABkgAolO2IAAhkIUTAAIAABkgArtO2IAAhkIBkAAIAABkgArtLuIAAsfIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIK7AAIAAhkIBkAAIAAjIIhkAAIAAhkIq7AAIAABkIhkAAIAAqKIGQAAIAAAyIhkAAIAADIIBkAAIAABkIPnAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAARLIhkAAIAAksIhkAAIAAhkIpXAAIAABkIhkAAIAADIIBkAAIAABkIK7AAIAABkIBkAAIAADIgAKKwZIAAgyIBkAAIAAAygArtyvIAAiWIXbAAIAACWg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("ACWbWIAAhkIBkAAIAAhkIhkAAIAAhkIJYAAIAAhkIBkAAMAAAgqLIhkAAIAAhkI3bAAIAABkIhkAAMAAAAqLIBkAAIAABkIK8AAIAABkIhkAAIAABkIBkAAIAABkIsgAAIAAhkIhkAAIAAhkIhkAAMAAAgwbIBkAAIAAhkIBkAAIAAhkIajAAIAABkIBkAAIAABkIBkAAMAAAAwbIhkAAIAABkIhkAAIAABkgAiV4NIErAAIAAhkIkrAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AtRc6IAAhkIhkAAIAAhkIBkAAIAABkIMgAAIAAhkIhkAAIAAhkIBkAAIAAhkIq8AAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAMAAAgqLIBkAAIAAhkIXbAAIAABkIBkAAMAAAAqLIhkAAIAAhkIhkAAIAABkIBkAAIAABkIpYAAIAABkIBkAAIAABkIhkAAIAAhkIjHAAIAABkIDHAAIAABkIK8AAIAAhkIBkAAIAAhkIBkAAMAAAgwbIBkAAMAAAAwbIhkAAIAABkIhkAAIAABkIhkAAIAABkgAHCVGIBkAAIAAhkIhkAAgAD6VGIBkAAIAAhkIhkAAgAAyVGIBkAAIAAhkIhkAAgAiVVGIBkAAIAAhkIhkAAgAldVGIBkAAIAAhkIhkAAgAolVGIBkAAIAAhkIhkAAgAKKR+IBkAAIAAhkIhkAAgAHCR+IBkAAIAAhkIhkAAgAD6R+IBkAAIAAhkIhkAAgAAyR+IBkAAIAAhkIhkAAgAiVR+IBkAAIAAhkIhkAAgAldR+IBkAAIAAhkIhkAAgAolR+IBkAAIAAhkIhkAAgArtR+IBkAAIAAhkIhkAAgAolO2IUTAAIAAhkI0TAAgArtO2IBkAAIAAhkIhkAAgArtnBIAADIIAABkIAABkIAAMfIXbAAIAAjIIAAhkIAAxLIAAhkIAAhkIAAjIIAAgyIhkAAIvnAAImQAAgArtyvIXbAAIAAiWI3bAAgACWZygAwZZyIAAhkIhkAAMAAAgwbIBkAAMAAAAwbIBkAAIAABkgALuVGgAO24NIAAhkIhkAAIAAhkI6jAAIAAhkIajAAIAABkIBkAAIAABkIBkAAIAABkgAiV4NIAAhkIErAAIAABkgAwZ4NIAAhkIBkAAIAABkgAu15xIAAhkIBkAAIAABkgAu15xg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-185,230,370);


(lib.Next_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.text = new cjs.Text("NEXT", "15px 'Segoe Script'", "#FFCC00");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-65,-55.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336666").s().p("Aj5EsIAAhkIhkAAIAAmPIBkAAIAAhkIHzAAIAABkIBkAAIAAGPIhkAAIAABkgAj5BkIErAAIAABkIBkAAIAAhkIBkAAIAAjHIhkAAIAAhkIhkAAIAABkIkrAAg");
	this.shape.setTransform(-55,-50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AikGQIAAhkIhkAAIAAhkIBkAAIAABkIHzAAIAABkgAFPEsIAAhkIBkAAIAABkgAGzDIIAAmPIhkAAIAAhkIBkAAIAABkIBkAAIAAGPgAGzDIgACHDIIAAhkIkrAAIAAjHIErAAIAAhkIBkAAIAABkIBkAAIAADHIhkAAIAABkgAlsDIIAAmPIBkAAIAAGPgAoWBGIAAgKIAKAAIAAAKgAkIjHIAAhkIBkAAIAAhkIHzAAIAABkInzAAIAABkgAkIjHg");
	this.shape_1.setTransform(-63.5,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339900").s().p("Aj5EsIAAhkIhkAAIAAmPIBkAAIAAhkIHzAAIAABkIBkAAIAAGPIhkAAIAABkgAj5BkIErAAIAABkIBkAAIAAhkIBkAAIAAjHIhkAAIAAhkIhkAAIAABkIkrAAg");
	this.shape_2.setTransform(-55,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.text}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-90,107,80);


(lib.lamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clicksound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgxD6IAAnzIBjAAIAAHzg");
	this.shape.setTransform(-20,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AldH0IAAsfIBkAAIAABkIHzAAIAAjIImPAAIAAhkIHzAAIAAGQImPAAIAAHzIDHAAIAABkgAj5GQIBkAAIAAnzIhkAAgAj5krIAAhkIBkAAIAABkgAj5krg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Aj5BkIAAhkIBkAAIAAhjIGPAAIAADHg");
	this.shape_2.setTransform(0,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.2)").s().p("AD6CWIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAldCWIAAhkIAyAAIAyAAIAABkgAj5AyIAAhjIAyAAIAyAAIAABjgAiVgxIAAhkIErAAIAABkgAiVgxg");
	this.shape_3.setTransform(5,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,153,0.2)").s().p("AqJD6IAAhkIBkAAIAAhkIBkAAIAAhjIAyAAIAyAAIBkAAIAAhkIBkAAIAAhkIErAAIAABkIBkAAIAABkIBkAAIBkAAIAABjIBkAAIAABkIBkAAIAABkg");
	this.shape_4.setTransform(5,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("AgxBkIAAjHIBjAAIAABjIgyAAIAABkg");
	this.shape_5.setTransform(-20,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AldFeIAAnzIBkAAIAAhkIBkAAIAABkIhkAAIAABkIHzAAIAAjIImPAAIAAhkIHzAAIAAGPIiWAAIkrAAIAABkIgyAAIAAhkIhkAAIAADIIgyAAIAABkg");
	this.shape_6.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-50,130,100);


(lib.gate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3300").s().p("AD7FeIgBAAIjIAAIAAq7IEsAAIAABkIBkAAIAAJXgACWAyIBkAAIAAhjIhkAAgAnBFeIAApXIBkAAIAAhkIEsAAIAAK7gAj5AyIBkAAIAAhjIhkAAg");
	this.shape.setTransform(5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACXHCIAAhkIDHAAIAApXIhkAAIAAhkIkrAAIAAK7IDHAAIAABkIsfAAIAAq7IBkAAIAAJXIGQAAIAAq7IksAAIAAhkIPnAAIAAAAIksAAIAABkIBkAAIAABkIBkAAIAAK7gAAyAyIAAhjIBkAAIAABjgAldAyIAAhjIBkAAIAABjgAolj5IAAhkIBkAAIAABkgAImldIAAAAIBkAAIAAAAg");
	this.shape_1.setTransform(15,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACXHCIAAhkIDHAAIAApXIhkAAIAAhkIhkAAIAAAAIAABkIAAAAIAABkIAAAAIAAHzIhkAAIAAnzIAAAAIAAhkIAAAAIAAhkIAAAAIAAhkIkrAAIAABkIAAAAIAABkIAAAAIAABkIAAAAIAAHzIhkAAIAABkIksAAIAAq7IBkAAIAAhkIBkAAIAAhkIPnAAIAAAAIksAAIAABkIBkAAIAABkIBkAAIAAK7gAolFeIDIAAIAAq7IhkAAIAABkIhkAAgAiViVIAAAAIBkAAIAAAAgAiVj5IAAAAIBkAAIAAAAgAImldIAAAAIBkAAIAAAAg");
	this.shape_2.setTransform(15,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D3300").s().p("AD7FeIAAnzIgBAAIAAAAIABAAIAAhkIgBAAIAAAAIABAAIAAhkIgBAAIAAAAIBkAAIAABkIBkAAIAAJXgAnBFeIAApXIBkAAIAAhkIBkAAIAAK7gAAyiVIAAAAIBkAAIAAAAgAiViVIAAAAIBkAAIAAAAgAAyj5IAAAAIBkAAIAAAAgAiVj5IAAAAIBkAAIAAAAgAAyldIAAAAIBkAAIAAAAgAiVldIAAAAIBkAAIAAAAg");
	this.shape_3.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-40,130,90);


(lib.eat_it = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACWEsIAAhkIkrAAIAAhkIErAAIAABkIDIAAIBkAAIAAAAIAABkgAnBEsIAAhkIBkAAIDIAAIAABkgAHCAAIAAhjIhkAAIAAhkIksAAIAAhkIEsAAIAABkIBkAAIAABkIBkAAIAABjgAolAAIAAhjIBkAAIAABjgAiVhjIAAhkIDHAAIAABkgAnBhjIAAhkIBkAAIAABkgAnBhjgAldjHIAAhkIDIAAIAABkg");
	this.shape.setTransform(-15,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("ACWBkIAAhkIDIAAIAABkgAldBkIAAhkIDIAAIAABkgAiVAAIAAhjIErAAIAABjgAiVAAg");
	this.shape_1.setTransform(-15,-20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACWGQIAAhkIEsAAIAABkgAnBGQIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAABkgAHDEsIAAhkIgBAAIAAAAIBkAAIAABkgAiVEsIAAhkIErAAIAABkgAImDIIAAhkIhkAAIAABkIhkAAIAAhkIjIAAIAAhkIDIAAIAABkIDIAAIAAhkIAAhjIhkAAIAAhkIhkAAIAAhkIksAAIAABkIjHAAIAAhkIjIAAIAAhkIDIAAIAABkIDHAAIAAhkIEsAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAErgAImDIgAnBDIIAAhkIBkAAIAABkgAqJDIIAAkrIBkAAIAAhkIBkAAIAABkIhkAAIAABjIAADIgAldBkIAAhkIDIAAIAABkgAldBkgAiVAAIAAhjIDHAAIBkAAIAABjgAiVAAgAnBjHIAAhkIBkAAIAABkgAldkrg");
	this.shape_2.setTransform(-15,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCCC").s().p("AAyCWIAAhkIBkAAIAAhjIkrAAIAABjIBkAAIAABkIjIAAIAAhkIjIAAIAAhjIBkAAIAAhkIK7AAIAABkIBkAAIAABjIjIAAIAABkg");
	this.shape_3.setTransform(-15,-55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AEsCWIjIAAIkrAAIjIAAIhkAAIhkAAIAAhkIAAAAISvAAIAABkgAJYAyIAAhjImQAAIAAhkIDIAAIDIAAIAABkIBkAAIAAAAIAABjgAq7AyIAAhjIBkAAIAAhkIBkAAIDIAAIAABkIksAAIAABjg");
	this.shape_4.setTransform(-10,-35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3333").s().p("AhjAAIAAAAIDHAAIAAAAg");
	this.shape_5.setTransform(10,-19.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AolFeIAAhkIABAAIAABkgAqJD6IAAhkIBkAAIAAAAIhjAAIAABkgAj5CWIAAhkIErAAIAAAAIAABkgArtCWIAAhkIBkAAIAAAAIhjAAIAABkgAD6AyIAAAAIEsAAIAAAAgAolAyIAAAAIBkAAIAAAAgArtgxIAAAAIBkAAIAAAAgAqJgxIAAhkIEsAAIDIAAIAAhkIhkAAIAAhkIErAAIAABkIhjAAIAABkIDHAAIGQAAIAABkgAqJgxgAKKiVIAAAAIBkAAIAAAAg");
	this.shape_6.setTransform(-5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-70,150,80);


(lib.calender = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("翻页1PageTurn1_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgTDcIAAgoIAnAAIAAAogAizDcIAAgoIAoAAIAAAogAC0AUIAAgnIAoAAIAAAngAgTizIAAgoIAnAAIAAAogAjbizIAAgoIAoAAIAAAog");
	this.shape.setTransform(-86,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ApXAyIAAhjISvAAIAABjg");
	this.shape_1.setTransform(-60,-75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Aq7ImIAAhkIRLAAIAABkgAGQHCIAAksIBkAAIAAEsgAH0CWIAAmPIBkAAIAAGPgAJYj5IAAksIBkAAIAAEsg");
	this.shape_2.setTransform(-70,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApXHCIAAksIBkAAIAADIIMfAAIAAhkIBkAAIAADIgAGQD6IAAmPIhkAAIAAhkIBkAAIAABkIBkAAIAAGPgAGQD6gABkD6IAAhkIBkAAIAABkgAhjD6IAAhkIBjAAIAABkgAhPDmIAoAAIAAgoIgoAAgAkrD6IAAhkIBkAAIAAAoIgoAAIAAAoIAoAAIAAAUgADICWIAAhkIBkAAIAABkgADICWgAAACWIAAhkIhjAAIAABkIhkAAIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAAhjIBjAAIAABjIBkAAIAAhjIBkAAIAABjIhkAAIAABkgAB4AeIAoAAIAAgnIgoAAgAAACWgAjHCWgAmPCWIAAhkIhkAAIAAkrIBkAAIAAErIBkAAIAABkgAkrAygAH0iVIAAjIIsfAAIAABkIhkAAIAAjIIPnAAIAAEsgAH0iVgABkiVIAAhkIBkAAIAABkgAhjiVIAAhkIBjAAIAABkgAhPipIAoAAIAAgoIgoAAgAkriVIAAhkIBkAAIAABkgAkXipIAoAAIAAgoIgoAAg");
	this.shape_3.setTransform(-80,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aq7LuIAAhkIhkAAIAAhkIBkAAIAABkIRLAAIAABkgAGQKKIAAhkIxLAAIAAhkIhkAAIAAksIBkAAIAAmPIBkAAIAAErIBkAAIAABkIBkAAIAAhkIBkAAIAAhjIhkAAIAABjIhkAAIAAkrIhkAAIAAjIIBkAAIAAhkIhkAAIAAhkIBkAAIAABkISvAAIAABkIBkAAIAAEsIhkAAIAAksIhkAAIAAEsIBkAAIAAGPIhkAAIAAmPIhkAAIAAksIvnAAIAADIIBkAAIAAhkIMfAAIAADIIBkAAIAAGPIBkAAIAAEsIhkAAIAAksIhkAAIAAmPIhkAAIAAhkIhkAAIAABkIBkAAIAAGPIhkAAIAABkIsfAAIAAjIIhkAAIAAEsIPnAAIAAjIIBkAAIAAEsIBkAAIAABkgAAACWIAABkIBkAAIAAhkIBkAAIAAhkIhkAAIAAhjIhkAAIAABjIhjAAIAAhjIhkAAIAABjIBkAAIAABkIhkAAIAAhkIhkAAIAABkIhkAAIAABkIBkAAIAAgUIAAgoIAAgoIBkAAIAABkIBkAAIAAhkgAAAiVIBkAAIAAhkIhkAAgAjHiVIBkAAIAAhkIhkAAgAmPiVIBkAAIAAhkIhkAAgAGQKKgAJYD6gAGQD6gAAACWIAAhkIBkAAIAABkgABkAygAK8olIAAhkIyvAAIAAhkIUTAAIAADIgAK8olg");
	this.shape_4.setTransform(-70,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ABQAUIAAgnIAoAAIAAAngAh3AUIAAgnIAoAAIAAAng");
	this.shape_5.setTransform(-104,-54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AldH0IAAksIBkAAIAADIIMfAAIAAhkIBkAAIAADIgAKKEsIAAksIBkAAIAAEsgAFeEsIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAAhkIhjAAIAABkIBjAAIAABkIhjAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBjAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkgAHCDIgAD6DIgAAyDIgAtRhjIAAhkIEsAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAABkIhkAAIAABkISvAAIAABkgAhtk/IAoAAIAAgoIgoAAgAKKkrIAAhkIBkAAIAABkgAHCkrIAAhkIBkAAIAABkgAD6krIAAhkIBkAAIAABkgAAykrIAAhkIBkAAIAABkgABak/IAoAAIAAgoIgoAAg");
	this.shape_6.setTransform(-105,-20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("Aq7H0IAAhkIRLAAIAABkgAGQGQIAAksIBkAAIAAEsgAH0BkIAAmPIBkAAIAAGPgAJYkrIAAjIIBkAAIAADIgAJYkrg");
	this.shape_7.setTransform(-70,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AnBLuIAAhkIhkAAIAAhkIBkAAIAABkIRLAAIAABkgAKKKKIAAhkIxLAAIAAhkIhkAAIAAksIBkAAIAAEsIPnAAIAAjIIhkAAIAABkIsfAAIAAjIIhkAAIAAjHIn0AAIAAhkIhkAAIAAhkIBkAAIAAhkIEsAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAABkISvAAIAAhkIyvAAIAAhkIUTAAIAADIIhkAAIAABkIBkAAIAAEsIhkAAIAAjIIhkAAIAADIIhkAAIAAhkIyvAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAABkIjIAAIAABkIksAAIAABkIajAAIAAGPIBkAAIAAEsIhkAAIAAksIhkAAIAAkrIhkAAIAAErIBkAAIAAEsIBkAAIAABkgAD6CWIAABkIBkAAIAAhkIBkAAIAAhkIhkAAIAAhjIhkAAIAABjIBkAAIAABkIhkAAIAAhkIhkAAIAAhjIhkAAIAABjIBkAAIAABkIhkAAIAAhkIhjAAIAABkIBjAAIAABkIBkAAIAAhkgAldAyIBkAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhjIhkAAIAABjIhkAAIAAhjIhkAAgAImldIBkAAIAAhkIhkAAgAFeldIBkAAIAAhkIhkAAgACWldIBkAAIAAhkIhkAAgAgxldIBjAAIAAhkIhjAAgAKKKKgANSD6IAAmPIBkAAIAAGPgAKKD6gALuiVg");
	this.shape_8.setTransform(-95,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-90,210,150);


(lib.bear_reading = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("AgnBkIAAjHIBPAAIAADHg");
	this.shape.setTransform(85.025,-51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("ACWDIIAAkrIBkAAIAAErgAj5DIIAAhkIBkAAIAAjHIhkAAIAAhkIErAAIAAGPg");
	this.shape_1.setTransform(56,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgxJYIAAhkIhkAAIAAhkIBkAAIAABkIBjAAIAABkgAFeH0IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAnBhjIAAmQIBkAAIAADIIAADIgAFenzIAAhkIBkAAIAABkg");
	this.shape_2.setTransform(36,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669999").s().p("AEsImIAAhkIBkAAIAABkgAAAImIAAhkIBkAAIAABkgABkHCIAAhkIhkAAIAAhkIhjAAIAAjIIErAAIAABkIBkAAIAABkIhkAAIAABkIAABkgAhjHCIAAhkIBjAAIAABkgAAAFegAjHFeIAAhkIBkAAIAABkgAmPD6IAAjIIDIAAIAADIgAmPldIAAjIIDIAAIAADIgADInBIAAhkIBkAAIAABkg");
	this.shape_3.setTransform(41,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AAyDIIAAjIIBkAAIAAhjIBkAAIAADHIhkAAIAABkgAj5BkIAAjHIBkAAIAABjIBkAAIAABkgAiVhjIAAhkIErAAIAABkg");
	this.shape_4.setTransform(46,-51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("ACWAyIAAhjIBkAAIAABjgAj5AyIAAhjIBkAAIAABjg");
	this.shape_5.setTransform(26,-96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AD6O2IAAhkIBkAAIBkAAIAABkgAgxO2IAAhkIBjAAIBkAAIAABkgAldD6IAAhkIBkAAIAAhkIDIAAIAABkIhkAAIAABkgAldldIAAhkIhkAAIAAmQIBkAAIBkAAIDIAAIAAhkIBjAAIAABkIBkAAIBkAAIAADIIkrAAIhkAAIAABkIAADIg");
	this.shape_6.setTransform(36,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996633").s().p("AlTO2IAAhkIksAAIAAhkIV3AAIAADIgAjvKKIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkImQAAIAApYIDIAAIAADIIBkAAIAAjIIEsAAIAADIIksAAIAABkIEsAAIAABkIDHAAIAABkIBkAAIAABkgAL4D6IAAhkIhkAAIAAhkIBkAAIAAhjIBQAAIAAErgAm3gxIAAhkIhkAAIAAq8IhkAAIAAK8IBkAAIAABkIksAAIAAsgIBkAAIAAhkIDIAAIAABkIBkAAIAAhkIDIAAIAADIIBkAAIAADIIhkAAIAAGQIBkAAIAABkg");
	this.shape_7.setTransform(5.025,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ApNUFIAAjIIEsAAIAABkIRLAAIAAjII13AAIAABkIhkAAIAAjIIhkAAIAAq8IhkAAIAAsfIBkAAIAAhkIBkAAIAAhkIH0AAIAAhkIBkAAIAAGQIhkAAIAAjIIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAMfIEsAAIAAhkIhkAAIAAq7IBkAAIAAK7IBkAAIAABkIhkAAIAABkIjIAAIAAJYIGQAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIGPAAIAAhkIhkAAIAAhkIjHAAIAAhkIksAAIAAhkIEsAAIAAjIIksAAIAAhkIEsAAIAAhkIBjAAIAABkIDIAAIAAhkIBkAAIAAhjIjIAAIAABjIhkAAIAAjHIDIAAIAAjIIjIAAIhjAAIAAjIIBjAAIAABkIDIAAIDIAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAAhkIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIAADIIBkAAIAAo6IBQAAIAAKeIhQAAIAADIIBQAAIAAJXIhQAAIAAkrIhkAAIAAErIBkAAIAABkIhkAAIAABkIBkAAIAABkIBQAAIAABkIhQAAIhkAAIAAhkIAAhkIhkAAIAAhkIksAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABkIAABkIBkAAIAABkIAABkIDIAAIAAhkIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIAABkIhkAAIAABkIDIAAIAAhkIAAhkIBQAAIAAJYgAE2C5IEsAAIAAmPIBkAAIAAhkIhkAAIAAhkIBkAAIAAjIIhkAAIAABkIhkAAIAADIIBkAAIAABkIksAAIAABkIBkAAIAADHIhkAAgALGk6IBkAAIAAhkIhkAAgAE2JJIAAhkIBkAAIAABkgAnpHlIAAjIIBkAAIAADIgAmFEdgAMqC5gAi9BVIAAmPIBkAAIAAGPgAhZk6gABuuSIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAABkgAhZuSIAAhkIBjAAIAABkgAGav2IhkAAIAAhkIDIAAIAABkgAAKv2g");
	this.shape_8.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-128.4,178.1,256.9);


(lib.bear_playing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3333CC").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape.setTransform(-55.5,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("ABuCMIAAgUIgUAAIAAgUIAUAAIAAgUIAUAAIAAAUIAUAAIAAAUIgUAAIAAAUgAC+B4IAAgUIAoAAIAAAUgAhFBQIAAhQIAUAAIAAgTIAUAAIAAATIgUAAIAAAUIAUAAIAAgUIAUAAIAAA8IgUAAIAAgUIgUAAIAAAUIAUAAIAAAUgAipBQIAAg8IgUAAIAAgUIAUAAIAAAUIAUAAIAAA8gAgdA8gAiVAUIAAgUIAUAAIAAAUgAhFg7IAAgUIgUAAIAAAUIgUAAIAAg8IAUAAIAAAUIAUAAIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAA8gAi9hPIAAgUIgUAAIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAgUIAUAAIAAAUIgUAAIAAAUIAUAAIAAAUgAjlhPIAAgUIAUAAIAAAUgAjRhjg");
	this.shape_1.setTransform(-20.5,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AGQFeIAAhkIjIAAIAAhkIpXAAIAABkIhkAAIAABkIhkAAIAAksIBkAAIAAhjIBkAAIAAjIIDIAAIAAhkIGPAAIAABkIAADIIDIAAIBkAAIAABjIBkAAIAAEsgAkrAyIDIAAIAAjHIjIAAgADwAKIAUAAIAAAUIAUAAIAAgUIAUAAIAAgTIgUAAIAAgUIgUAAIAAAUIgUAAgAFUAKIAoAAIAAgTIgoAAgABQgdIAoAAIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAg8IgUAAIAAgUIgUAAIAAAUIAUAAIAAAUIgUAAIAAgUIgUAAgAgnhZIAUAAIAAA8IATAAIAAg8IgTAAIAAgUIgUAAgAAAhZIAUAAIAAgUIgUAAgABQi9IAAAUIAUAAIAAg8IgUAAIAAgUIgUAAIAAAUIAUAAIAAAUIgUAAIAAgUIgUAAIAAA8IAUAAIAAgUgAgnjRIAAAUIAUAAIAAgUIgUAAIAAgUIAUAAIAAgUIgUAAIAAAUIgUAAIAAgUIgUAAIAAAUIAUAAIAAAUIgUAAIAAAUIAUAAIAAgUg");
	this.shape_2.setTransform(-35.5,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AAyD6IAAjIIhjAAIAAhjIBjAAIAABjIBkAAIAABkIBkAAIAABkgAiVgxIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkg");
	this.shape_3.setTransform(69.5,-36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("A0YMqIAAhGIhGAAIAAhGIhGAAIAAmkIBGAAIAAFeIBGAAIAACMIBGAAIAABGgATdKyIAAhkIhkAAIAABkIhkAAIAAjIIEsAAIAADIgAAtJOIAAhkIjHAAIAAhkIn0AAIAABkIjIAAIAAhkIBkAAIAAhkIJYAAIAABkIDHAAIAABkIDIAAIAABkgAweJOIAAmQIBkAAIAAEsIBkAAIAABkgAVBHqIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAOxHqIAAksIBkAAIAAEsgAD1HqIAAksIBkAAIAAEsgAtWHqgA1eD6IAAkXIBGAAIAAhGIBGAAIAAhGICMAAIAABGIhGAAIAABGIiMAAIAAEXgAQVC+IAAjHIksAAIAAhkIhkAAIAAjIIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAADIIDIAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAjIIBkAAIAADIIBkAAIAABkIBkAAIAADIIhkAAIAABkIDIAAIAADHgAOxjRIBkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAgAQVC+gACRC+IAAhkIhkAAIAAjHIBkAAIAADHIBkAAIAABkgAu6C+IAAhkIBkAAIAABkgAtWBaIAAjHIBkAAIAADHgAtWBagAiahtIAAhkImQAAIAAhkIBaAAIAAhGIhGAAIAAhGIBGAAIAABGIBGAAIAABGIDwAAIAABkIDHAAIAABkgAryhtIAAhkIDIAAIAABkgAryhtgAxGipIAAhGIBGAAIAABGgAoqjRgAwAjvIAAiMIBGAAIAACMgAwAjvgAOxk1gAu6l7IAAhGIBGAAIAABGgAt0nBIAAhGIFeAAIAABGgALpphIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkgAG9phIAAhkIBkAAIAABkgAG9phg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("ApXGQIAAjIIDIAAIAADIgAH0BkIAAhkIBkAAIAABkgAGQAAIAAhjIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABjg");
	this.shape_5.setTransform(44.5,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.5,-81,289,162);


(lib.bear_eating = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkrEsIAAhkIJXAAIAABkgAnzBkIAAkrIhkAAIAAhkIBkAAIAABkIBkAAIAADHIMfAAIAAjHIBkAAIAAErgAH0jHIAAhkIBkAAIAABkg");
	this.shape.setTransform(-15,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPEsIAAjIIhkAAIAAhkIhkAAIAAkrISvAAIAAErIhkAAIAABkIhkAAIAADIg");
	this.shape_1.setTransform(-15,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0033").s().p("AAABkIAAhkIhjAAIAAhjIDHAAIAADHg");
	this.shape_2.setTransform(15,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AGQCWIAAhkIBkAAIAABkgADICWIAAhkIBkAAIAABkgAkrCWIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAnzCWIAAhkIBkAAIAABkgABkAyIAAhjIBkAAIAABjgAjHAyIAAhjIBkAAIAABjgAmPAygAhjgxIAAhkIBjAAIAABkgAhjgxg");
	this.shape_3.setTransform(-15,-25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AnBPoIAAhkIJXAAIAABkgACWOEIAAhkIpXAAIAABkIhkAAIAAhkIhkAAIAAhkIPnAAIAABkIhkAAIAABkgAFeK8IAAksIBkAAIAAEsgAFeK8gArtK8IAAksIBkAAIAAEsgAHCGQIAAhkIAAksIyvAAIAAEsIAABkIhkAAIAAnzIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIK7AAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAAHzgAD6hjIBkAAIAAhkIhkAAgAAyhjIBkAAIAAhkIBkAAIAAjIIjIAAIAABkIBkAAIAABkIhkAAIAAhkIhjAAIAABkIjIAAIAABkIDIAAIAAhkIBjAAgAAyjHgAqJjHIAAhkIBkAAIAABkgAolkrIAAhkIBkAAIAABkgAFemPIAAhkIBkAAIAABkgAHCnzIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAD6nzIAAhkIBkAAIAABkgAImpXIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkgAFepXgAKKq7gAKKuDIAAhkIBkAAIAABkgAKKuDg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AAACWIAAhkIDIAAIAABkgAjHAyIAAhjIAAhkIBkAAIAABkIAABjg");
	this.shape_5.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-100,170,200);


(lib.shoes_walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkrEsIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAEshjIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkg");
	this.shape.setTransform(50,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldD6IAAhkIBkAAIAABkgAD6iVIAAhkIBkAAIAABkg");
	this.shape_1.setTransform(45,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AnzD6IAAhkIGQAAIAABkgABkiVIAAhkIGQAAIAABkg");
	this.shape_2.setTransform(10,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqJGQIAAhkIGQAAIAAhkImQAAIAAhkIGQAAIAAhkIDIAAIAABkIhkAAIAABkIAABkIBkAAIBjAAIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAADIgArtEsIAAhkIBkAAIAABkgAqJDIgAgxAAIAAhjIhkAAIAAhkIBkAAIAABkIGPAAIAAhkImPAAIAAhkIGPAAIAAhkIDIAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAADHgAImjHIAAhkIBkAAIAABkg");
	this.shape_3.setTransform(25,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AC0AyIAAhjIGQAAIAABjgApDAyIAAhjIGQAAIAABjg");
	this.shape_4.setTransform(18,5.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFKAyIAAhjIBkAAIAABjgAmtAyIAAhjIBkAAIAABjg");
	this.shape_5.setTransform(53,5.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AF8BkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAl7BkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAAAAIgoAAIAABkg");
	this.shape_6.setTransform(58,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AipDIIAAAAIDHAAIAAAAgAAeDIIAAgBIr3AAIAAhkIhkAAIAAhjIBkAAIAAhkIGQAAIAAhjIDIAAIAABjIhkAAIAABkIAABjIBkAAIA8AAIAAhjIAoAAIAAAAIhkAAIAAhkIBkAAIAABkIA7AAIAAhjIGQAAIAAhkIDIAAIAABkIBkAAIAABjIhkAAIAAhjIhkAAIAABjIAABkIBkAAIBkAAIAAhkIBkAAIAADIgAAeBkIGQAAIAAhkImQAAgArZBjIGQAAIAAhjImQAAg");
	this.shape_7.setTransform(33,0.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AhKD7IAAhkIGPAAIAABkgAlEiWIAAhkIGPAAIAABkg");
	this.shape_8.setTransform(2.5,-15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABLD7IAAhkIBkAAIAABkgAiuiWIAAhkIBkAAIAABkg");
	this.shape_9.setTransform(37.5,-15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AB9EtIAAhkIhkAAIAAhlIBkAAIAABlIBkAAIAABkgAh8hkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAAABIgoAAIAABjg");
	this.shape_10.setTransform(42.5,-20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Aj+GQIAAAAIAeAAIAAAAgAjgGQIAAgBIgeAAIAAjHIAeAAIAAhkIGPAAIAAhkIhaAAIAAAAICqAAIAAAAIB4AAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAADIgAjgEsIGPAAIAAhkImPAAgAnaAAIAAhkIhkAAIAAhkIBkAAIAABkIGQAAIAAhkImQAAIAAhkIGQAAIAAhkIDHAAIAABkIBkAAIAABkIAeAAIAADIgAAZjIIAABkIBkAAIA8AAIAAhjIAoAAIAAgBIhkAAIAAhkIhkAAg");
	this.shape_11.setTransform(17.5,-19.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AqJGQIAAhkIGQAAIAAhkImQAAIAAhkIGQAAIAAhkIDIAAIAABkIhkAAIAABkIAABkIBkAAIBjAAIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAADIgArtEsIAAhkIBkAAIAABkgAqJDIgAgxAAIAAhjIhkAAIAAhkIBkAAIAABkIGPAAIAAhkImPAAIAAhkIGPAAIAAhkIDIAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAADHg");
	this.shape_12.setTransform(25,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},10).to({state:[{t:this.shape_12},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-60,166,80.1);


(lib.person2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// person_head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AqJIhIAAkiIhkAAIAApXIBkAAIAAhkIBkAAIAAhkIH0AAIAABkIDHAAIAAHzIEsAAIAAEsIDIAAIAAhkIBkAAIAADIIhkAAIAABag");
	this.shape.setTransform(68,-94.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({y:-84.975},0).wait(5).to({y:-94.975},0).wait(5).to({y:-84.975},0).wait(5).to({y:-94.975},0).wait(5).to({y:-84.975},0).wait(5).to({y:-94.975},0).wait(1));

	// person_body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAyV4IAAn0IhjAAIAAH0ImQAAIAAhkIhkAAIAAjIIDIAAIAAhkIksAAIAApYIBkAAIAAmQIhkAAIAAhjIhkAAIAAjIIjIAAIAAhkIhkAAIAAksIhkAAIAAq8IBkAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAAGQIBkAAIAABkIDIAAIAAgKIUTAAIAAAKIksAAIAADIIBkAAIAADIIBkAAIAADHIBkAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAADIIksAAIAABkIBkAAIAADIIhkAAIAABkgAKKGQIDIAAIAAhkIjIAAgAHCGQIBkAAIAAksIhkAAg");
	this.shape_1.setTransform(45,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAyV4IAAn0IhjAAIAAH0ImQAAIAAhkIhkAAIAAjIIDIAAIAAhkIpYAAIAAjIIBkAAIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAmQIhkAAIAAhjIhkAAIAAhkIksAAIAAhkIhkAAIAAxMIBkAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAAABIhkAAIAABjIBkAAIAAABIhkAAIAABjIBkAAIAADIIBkAAIAABkIDIAAIAAgKIUTAAIAAAKIksAAIAADIIBkAAIAADIIBkAAIAADHIBkAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkImQAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAADIIhkAAIAABkgAKKGQIDIAAIAAhkIjIAAgAHCGQIBkAAIAAksIhkAAg");
	this.shape_2.setTransform(45,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_1}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-149.5,230,299.5);


(lib.person01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// person_body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADIZAIAAhkIhkAAIAAhkIhkAAIAAksIhjAAIAAEsIhkAAIAADIIq8AAIAAjIIEsAAIAApYIhkAAIAAhkIhkAAIAAmQIhkAAIAAjIIhkAAIAAmPIDIAAIAAhkIRLAAIAAhkIDIAAIAAhkIBkAAIAAksIhkAAIAAksIBkAAIAAksIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAOEIhkAAIAAGQIhkAAIAADHIhkAAIAAGQIhkAAIAADIIhkAAIAAK8IDIAAIAADIg");
	this.shape.setTransform(10,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ADIZAIAAhkIhkAAIAAhkIhkAAIAAksIhjAAIAAEsIhkAAIAADIIq8AAIAAjIIEsAAIAApYIhkAAIAAhkIhkAAIAAjIIhkAAIAAmQIhkAAIAAnzIDIAAIAAhkIDIAAIAABkIODAAIAAhkIBkAAIAAhkIBkAAIAApYIBkAAIAAksIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAOEIhkAAIAAGQIhkAAIAADHIhkAAIAAGQIhkAAIAADIIhkAAIAAK8IDIAAIAADIg");
	this.shape_1.setTransform(10,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(3));

	// person_head
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AnBH0IAAjIIhkAAIAAmPIBkAAIAAksIhkAAIAAhkIDIAAIAABkIK7AAIAABkIBkAAIAAErIBkAAIAAEsIhkAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({y:10},0).wait(3).to({y:0},0).wait(4).to({y:10},0).wait(3).to({y:0},0).wait(3).to({y:10},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-70,200,320);


(lib.people_sit_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AEsdsIAAsgIDIAAIAAhkIBkAAIAAjIIhkAAIAABkIjIAAIAABkImPAAIAAhkIhkAAIAABkIBkAAIAABkIDHAAIAAEsIhkAAIAAEsIhjAAIAABkIksAAIAAjIIhkAAIAAsgIhkAAIAAsgIGQAAIAAhjImQAAIAAhkIhkAAIAAhkIhkAAIAAksIBkAAIAAksIBkAAIAAhkIBkAAIAAhkIhkAAIAAn0IBkAAIAAhkIEsAAIAAjIIHzAAIAABkIBkAAIAABkIBkAAIAAK8IjIAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAAGQIhkAAIAAHzIBkAAIAAJYIBkAAIAAH0IhkAAIAAH0IhkAAIAABkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AFedsIAAsgIDIAAIAAhkIBkAAIAAjIIhkAAIAABkIjIAAIAABkImPAAIAAhkIhkAAIAABkIBkAAIAABkIDHAAIAAEsIhkAAIAAEsIhjAAIAABkIksAAIAAjIIhkAAIAAsgIhkAAIAAsgIGQAAIAAhjIq8AAIAAn0IBkAAIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIhkAAIAAn0IBkAAIAAhkIEsAAIAAjIIHzAAIAABkIBkAAIAABkIBkAAIAAH0IBkAAIAAhkIBkAAIAABkIhkAAIAAEsIBkAAIAAJYIhkAAIAAHzIBkAAIAAJYIBkAAIAAH0IhkAAIAAH0IhkAAIAABkg");
	this.shape_1.setTransform(-5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAFeAg0IAAsgIDIAAIAAhkIBkAAIAAjIIhkAAIAABkIjIAAIAABkImPAAIAAhkIhkAAIAABkIBkAAIAABkIDHAAIAAEsIhkAAIAAEsIhjAAIAABkIksAAIAAjIIhkAAIAAsgIhkAAIAAsgIGQAAIAAhkIq8AAIAAnzIBkAAIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIhkAAIAAn0IBkAAIAAhkIDIAAIAAhkIGPAAIAABkIABAAIAAjIIgBAAIAAmQIEsAAIAAEsIBkAAIAABkIBkAAIAAJYIBkAAIAAPoIhkAAIAAHzIBkAAIAAJYIBkAAIAAH0IhkAAIAAH0IhkAAIAABkg");
	this.shape_2.setTransform(-5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-230,170,420);


(lib.people_sit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ADIbWIAAhkIhkAAIAAq8IDJAAIAAhkIBjAAIAAhkIhkAAIAABkIpXAAIAAjIIAAAAIAAEsIDIAAIAAK8IhkAAIAABkIjIAAIAAhkIhkAAIAAhkIhkAAIAAuEIhkAAIAAhkIhkAAIAAvnIjIAAIAAhkIhkAAIAAhkIhkAAIAAksIBkAAIAAhkIDIAAIAAhkIEsAAIAABkIBkAAIAAjIIBkAAIAAksIBkAAIAAhkIBkAAIAAhkIHzAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAABkIDIAAIAABkIDIAAIAABkIBkAAIAADIIhkAAIAABkIhkAAIAABkIhkAAIAARLIhkAAIAAEsIhkAAIAAMgIjIAAIAABkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ADIbvIAAhkIhkAAIAAq8IDJAAIAAhkIBjAAIAAhkIhkAAIAABkIpXAAIAAjIIAAAAIAAEsIDIAAIAAK8IhkAAIAABkIjIAAIAAhkIhkAAIAAhkIhkAAIAAuEIhkAAIAAhkIhkAAIAAvnIjIAAIAAhkIhkAAIAAhkIhkAAIAAleIBkAAIAAhkIBkAAIAAhkIH0AAIAAmQIBkAAIAAhkIBkAAIAAhkIK7AAIAABkIBkAAIAADIIBkAAIAADIIEsAAIAABkIBkAAIAACWIBkAAIAABkIBkAAIAADIIhkAAIAABkIhkAAIAABkIhkAAIAARLIhkAAIAAEsIhkAAIAAMgIjIAAIAABkg");
	this.shape_1.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-180,240,355);


(lib.pac_maneating = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Aj5ImIAAhkIhkAAIAAhkIjIAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAhjIjIAAIAAhkIjIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIHzAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAHzIhkAAIAABkIhkAAIAABkIhkAAIAABkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj5KKIAAhkIjIAAIAAhkIhkAAIAAhkIhkAAIAAjIIEsAAIAAjHIDIAAIAABjIhkAAIAABkIhkAAIAABkIjIAAIAABkIDIAAIAABkIBkAAIAABkIHzAAIAABkgAD6ImIAAhkIBkAAIAABkgAFeHCIAAhkIBkAAIAABkgAHCFeIAAhkIBkAAIAABkgAImD6IAAnzIBkAAIAAHzgAImD6gAqJgxIAAjIIBkAAIAABkIDIAAIAABkgAHCj5IAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAolj5IAAhkIBkAAIAABkgAolj5gAnBldIAAhkIBkAAIAABkgAnBldgAldnBIAAhkIBkAAIAABkgAj5olIAAhkIHzAAIAABkgAj5olg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Ah8I/IAAgyIAAAAIjIAAIAAhkIjIAAIAAhkIBkAAIAAhkIDIAAIAAjIIBkAAIAAhjIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIjIAAIAAhkIDIAAIAAhkIEsAAIAADIIAAAAIAAiWIHBAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAHzIhkAAIAABkIhkAAIAABkIhkAAIAABkgAgYINIAAAAIAAuDIAAAAg");
	this.shape_2.setTransform(-7.5,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah8K8IAAhkIAAAAIAAgyIHBAAIAAAyIAyAAIAABkgAlEJYIAAhkIDIAAIAABkgAFFImIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAFFImgAoMH0IAAhkIhkAAIAAjIIDIAAIAABkIhkAAIAABkIDIAAIAABkgAINFeIAAhkIBkAAIAABkgAJxD6IAAnzIBkAAIAAHzgAJxD6gAmoDIIAAhkIBkAAIAAhkIBkAAIAADIgAjgAAIAAhjIBkAAIAABjgAjgAAgAlEhjIAAhkIhkAAIAAhkIksAAIAAjIIBkAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkgAINj5IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAFFnBIAAhkInBAAIAAgyIAAAAIksAAIAAhkIK7AAIAAAyIAyAAIAABkIBkAAIAABkgApwnzIAAhkIDIAAIAABkgApwnzgAmopXg");
	this.shape_3.setTransform(-7.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aj5KKIAAhkIHzAAIAABkgAD6ImIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAnzIBkAAIAAHzIhkAAIAABkIhkAAIAABkIhkAAIAABkgAnBImIAAhkIhkAAIAAhkIhkAAIAAjIIEsAAIAABkIjIAAIAABkIDIAAIAABkIBkAAIAABkgAldCWIAAjHIksAAIAAjIIBkAAIAABkIDIAAIAABkIDIAAIAABjIhkAAIAABkgAldCWgAHCj5IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAolj5IAAhkIBkAAIAABkgAnBldIAAhkIBkAAIAABkgAD6nBIAAhkInzAAIAAhkIHzAAIAABkIBkAAIAABkgAldnBIAAhkIBkAAIAABkgAldnBg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah8K8IAAhkIAAAAIAAgyIHBAAIAAAyIAyAAIAABkgAlEJYIAAhkIjIAAIAAhkIDIAAIAABkIDIAAIAABkgAFFImIAAhkIBkAAIAABkgAGpHCIAAhkIBkAAIAABkgApwGQIAAjIIDIAAIAABkIhkAAIAABkgAINFeIAAhkIBkAAIAABkgAINFegAJxD6IAAnzIBkAAIAAHzgAJxD6gAmoDIIAAhkIBkAAIAAhkIBkAAIAADIgAjgAAIAAhjIBkAAIAABjgAjgAAgAlEhjIAAhkIhkAAIAAhkIksAAIAAjIIBkAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkgAINj5IAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgApwnzIAAhkIDIAAIAABkgApwnzgAh8olIAAgyIAAAAIksAAIAAhkIK7AAIAAAyIAyAAIAABkgAmopXg");
	this.shape_5.setTransform(-7.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_4},{t:this.shape}]},5).to({state:[{t:this.shape_5},{t:this.shape_2}]},5).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-70,145,140);


(lib.noisessymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(25,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjHDIIAAkrIBkAAIAAErgAAABkIAAhkIBkAAIAABkgAhjhjIAAhkIErAAIAABkgAhjhjg");
	this.shape_1.setTransform(20,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AldFeIAAnzIBkAAIAAHzgAiVD6IAAkrIBkAAIAAErgAAyCWIAAhkIBkAAIAABkgAgxgxIAAhkIErAAIAABkgAgxgxgAj5iVIAAhkIBkAAIAABkgAj5iVgAiVj5IAAhkIHzAAIAABkgAiVj5g");
	this.shape_2.setTransform(15,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Aj5HCIAAnzIBkAAIAAHzgAnBHCIAAq7IBkAAIAAK7gAgxFeIAAksIBjAAIAAEsgACWD6IAAhkIBkAAIAABkgAAyAyIAAhjIEsAAIAABjgAAyAygAiVgxIAAhkIBkAAIAABkgAgxiVIAAhkIHzAAIAABkgAgxiVgAldj5IAAhkIBkAAIAABkgAj5ldIAAhkIK7AAIAABkgAj5ldg");
	this.shape_3.setTransform(5,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AldFeIAAnzIBkAAIAAHzgAiVD6IAAkrIBkAAIAAErgAAyCWIAAhkIBkAAIAABkgAgxgxIAAhkIErAAIAABkgAgxgxgAj5iVIAAhkIBkAAIAABkgAiVj5IAAhkIHzAAIAABkgAiVj5g");
	this.shape_4.setTransform(15,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("Aj5HCIAAnzIBkAAIAAHzgAnBHCIAAq7IBkAAIAAK7gAgxFeIAAksIBjAAIAAEsgACWD6IAAhkIBkAAIAABkgAAyAyIAAhjIEsAAIAABjgAAyAygAiVgxIAAhkIBkAAIAABkgAiVgxgAgxiVIAAhkIHzAAIAABkgAgxiVgAldj5IAAhkIBkAAIAABkgAldj5gAj5ldIAAhkIK7AAIAABkgAj5ldg");
	this.shape_5.setTransform(5,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-50,90,90);


(lib.moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjHEsIAAhkIDHAAIAABkgADIDIIAAmPIkrAAIAAhkIGPAAIAAHzgAkrDIIAAhkIBkAAIAABkgAjHBkIAAhkIBkAAIAABkg");
	this.shape.setTransform(-5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AgxFeIAAhkIjIAAIAAhkIhkAAIAAmPIBkAAIAAhkIHzAAIAABkIBkAAIAAHzIhkAAIAAnzImPAAIAABkIErAAIAAGPIBkAAIAABkgAj5CWIBkAAIAAhkIhkAAgAD6D6g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,204,0.2)").s().p("Aj5HCIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIErAAIAABkgAD6FeIAAhkIBkAAIAABkgAFeD6IAAnzIhkAAIAAhkIBkAAIAABkIBkAAIAAHzgAFeD6gAnBD6IAAnzIBkAAIAAGPIAABkgAldj5IAAhkIBkAAIAABkgAldj5gAj5ldIAAhkIHzAAIAABkg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AgxFeIAAhkIjIAAIAAhkIhkAAIAAmPIBkAAIAAhkIHzAAIAABkImPAAIAABkIErAAIAAGPIBkAAIAABkgAj5CWIBkAAIAAhkIhkAAgAD6D6IAAnzIBkAAIAAHzg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,204,0.2)").s().p("AkrJYIAAhkIJXAAIAABkgAEsH0IAAhkIBkAAIAABkgAEsH0gAmPH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAJXIBkAAIAABkIBkAAIAABkgAj5HCIAAhkIDIAAIErAAIAABkgAGQGQIAAhkIBkAAIAABkgAD6FeIAAhkIBkAAIAABkgAD6FegAldFeIAAhkIBkAAIAABkgAH0EsIAApXIhkAAIAAhkIBkAAIAABkIBkAAIAAJXgAH0EsgAFeD6IAAnzIBkAAIAAHzgAFeD6gAnBD6IAAnzIBkAAIAAGPIAABkgAD6j5IAAhkInzAAIAAgyIiWAAIAAhkIBkAAIAAhkIJXAAIAABkIBkAAIAABkIhkAAIAAhkInzAAIAAAyIHBAAIAABkIBkAAIAABkgAldj5IAAhkIBkAAIAABkgAldj5gAnzkrIAAhkIBkAAIAABkgAnzkrgAmPmPg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AjHEsIAAhkIhkAAIAAhkIBkAAIAABkIDHAAIAABkgADIDIIAAmPIkrAAIAAhkIGPAAIAAHzgAjHBkIAAhkIBkAAIAABkg");
	this.shape_5.setTransform(-5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC66").s().p("AgxFeIAAhkIjIAAIAAhkIhkAAIAAmPIBkAAIAAhkIHzAAIAABkIBkAAIAAHzIhkAAIAAnzImPAAIAABkIErAAIAAGPIBkAAIAABkgAj5CWIBkAAIAAhkIhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,204,0.2)").s().p("Aj5HCIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIErAAIAABkgAD6FeIAAhkIBkAAIAABkgAD6FegAFeD6IAAnzIhkAAIAAhkInzAAIAAhkIHzAAIAABkIBkAAIAABkIBkAAIAAHzgAFeD6gAnBD6IAAnzIBkAAIAAGPIAABkgAldj5IAAhkIBkAAIAABkgAj5ldg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,204,0.2)").s().p("AkrJYIAAhkIJXAAIAABkgAEsH0IAAhkIBkAAIAABkgAEsH0gAmPH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAJXIBkAAIAABkIBkAAIAABkgAj5HCIAAhkIDIAAIErAAIAABkgAGQGQIAAhkIBkAAIAABkgAGQGQgAD6FeIAAhkIBkAAIAAnzIhkAAIAAhkIBkAAIAABkIBkAAIAAHzIhkAAIAABkgAldFeIAAhkIhkAAIAAnzIBkAAIAAGPIAABkIBkAAIAABkgAH0EsIAApXIhkAAIAAhkIhkAAIAAhkInzAAIAAAyIHBAAIAABkInzAAIAAgyIiWAAIAAhkIBkAAIAAhkIJXAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAJXgAH0EsgAldj5IAAhkIBkAAIAABkgAnzkrIAAhkIBkAAIAABkgAnzkrgAj5ldg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,204,0.2)").s().p("Aj5HCIAAhkIDIAAIErAAIAABkgAD6FeIAAhkIBkAAIAABkgAldFeIAAhkIBkAAIAABkgAFeD6IAAnzIhkAAIAAhkIBkAAIAABkIBkAAIAAHzgAFeD6gAnBD6IAAnzIBkAAIAAGPIAABkgAldj5IAAhkIBkAAIAABkgAldj5gAj5ldIAAhkIHzAAIAABkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},5).to({state:[{t:this.shape_8},{t:this.shape_1},{t:this.shape_5}]},5).to({state:[{t:this.shape_9},{t:this.shape_1},{t:this.shape_5}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.kitty_tail_open_mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA8F1").s().p("AwZO2IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAwZLuIAAhkIBkAAIAABkgAwZLugAO2qJIAAhkIBkAAIAABkgAQartIAAhkIBkAAIAABkgAQartgANSrtIAAhkIBkAAIAABkgAO2tRIAAhkIBkAAIAABkgAO2tRg");
	this.shape.setTransform(-55,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("ACWAyIgyAAIAAgyIAAgxIBkAAIAABjgAiVAyIgyAAIAAhjIBkAAIAAAxIAAAyg");
	this.shape_1.setTransform(-60,-25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("AiVBkIAAgyIAyAAIAAgyIAyAAIAAhjIBjAAIAABjIAyAAIAAAyIAyAAIAAAyg");
	this.shape_2.setTransform(-60,-25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("ABkAyIAAhjIBkAAIAABjgAjHAyIAAhjIBkAAIAABjg");
	this.shape_3.setTransform(-55,-40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Au1NSIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjHIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABkIBkAAIAAhkIAAAAIAABkIGPAAIAAjIIBkAAIAAhkIBkAAIAAhkIEsAAIAAhkIDIAAIAABkIBkAAIAADIIksAAIAABkIjIAAIAABkIBkAAIAADHIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArtImIAAAAIAAhkIAAAAgAsfjHIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAnBldIBkAAIAAhkIhkAAgAx9D6IAAjIIABAAIAADIgAwZAyIAAhjIABAAIAABjg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFA8F1").s().p("AmPXcIAAhkIBkAAIAABkgAkrV4IAAhkIBkAAIAABkgAkrV4gAnzV4IAAhkIBkAAIAABkgAmPUUIAAhkIBkAAIAABkgAmPUUgAEsvnIAAhkIBkAAIAABkgAGQxLIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAGQxLgADIxLIAAhkIBkAAIAABkgABkyvIAAhkIBkAAIAABkgADI0TIAAhkIBkAAIAABkgADI0TgAAA0TIAAhkIBkAAIAABkgABk13IAAhkIBkAAIAABkgABk13g");
	this.shape_5.setTransform(-130,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AucNSIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjHIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABkIBkAAIAAhkIAAAAIAABkIGPAAIAAiWIgyAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIDIAAIAABkIBkAAIAADIIgyAAIAAAAIiWAAIAABkIjIAAIAABkIhkAAIAADIIAyAAIAAAyIBkAAIAADHIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUImIAAAAIAAhkIAAAAgAsGjHIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAmoldIBkAAIAAhkIhkAAgAxkD6IAAjIIABAAIAADIgAwAAyIAAhjIABAAIAABjg");
	this.shape_6.setTransform(-2.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA8F1").s().p("AOEXcIAAhkIBkAAIAABkgAPoV4IAAhkIBkAAIAABkgAMgV4IAAhkIBkAAIAABkgAOEUUIAAhkIBkAAIAABkgAOEUUgAvnGQIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkgAuDEsIAAhkIBkAAIAABkgAH0yvIAAhkIBkAAIAABkgAJY0TIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAGQ0TIAAhkIBkAAIAABkg");
	this.shape_7.setTransform(-60,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIgyAAIAAhjIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIDIAAIAAABIhkAAIAABjIhkAAIAABkIH0AAIAAABIn0AAIAABjIH0AAIAAABIpYAAIAAgBIhkAAIAABkIKKAAIAAAAIqKAAIAABkIBkAAIAABkIBkAAIAADHIAyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAsGhKIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAmojgIBkAAIAAhkIhkAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAM5qhIAAgBIDIAAIAAABgAM5tqIAAAAIBkAAIAAAAgAINvOIAAAAIEsAAIAAAAg");
	this.shape_8.setTransform(-2.5,-12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAjHIhkAAIAAjIIjHAAIAABkIgBAAIAAjIIBkAAIAAjIIhkAAIAAhkIBkAAIAAhkIGQAAIAAAAIjIAAIAABkIGQAAIAAABImQAAIAABjIEsAAIAAABIjIAAIAABjIJYAAIAAABIpYAAIAABjIJYAAIAAABIn0AAIAABjIHCAAIAAAAInCAAIAADIIBkAAIAADHIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAINAZIAAAAIAAhjIAAAAgAsGhKIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IDHAAIAAhjIjHAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAM5qhIAAgBIDIAAIAAABgAM5tqIAAAAIBkAAIAAAAgAINvOIAAAAIEsAAIAAAAg");
	this.shape_9.setTransform(-2.5,-12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFA8F1").s().p("AZAGQIAAhkIBkAAIAABkgAakEsIAAhkIBkAAIAABkgAakEsgAXcEsIAAhkIBkAAIAABkgAZADIIAAhkIBkAAIAABkgAZADIgA13DIIAAhkIBkAAIAABkgA0TBkIAAhkIBkAAIAABkgA0TBkgA3bBkIAAhkIjIAAIAAhjIDIAAIAABjIBkAAIAAhjIBkAAIAABjIhkAAIAABkgA3bhjIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgA8HhjIAAjIIBkAAIAADIg");
	this.shape_10.setTransform(-30,-30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAjHIBkAAIAAjIImPAAIAABkIgBAAIAAjIIH0AAIAAhjImQAAIAAgBIGQAAIAAhjImQAAIAAgBIEsAAIAAhjImPAAIAABjIgBAAIAAhkIGQAAIAAhkIksAAIAAAAIK8AAIAAAAIhkAAIAABkIBkAAIAABkIBkAAIAAABIhkAAIAABjIDIAAIAAABIjIAAIAABjIDIAAIAAABIjIAAIAABjICWAAIAAAAIj6AAIAABkIhkAAIAAErIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAINAZIAAAAIAAhjIAAAAgAsGhKIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IHzAAIAAhjInzAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAGpvOIAAAAIGQAAIAAAAg");
	this.shape_11.setTransform(-2.5,-12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFA8F1").s().p("AgxCWIAAhkIhkAAIAAhjIBkAAIAAhkIBjAAIAABkIhjAAIAABjIBjAAIAABkgAAyAyIAAhjIBkAAIAABjg");
	this.shape_12.setTransform(55,115);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAhjIBkAAIAABjIAAAAIAAjHIBkAAIAAhkIBkAAIAABkIAAAAIAAjIIpXAAIAABkIgBAAIAAjIIH0AAIAAhjImQAAIAAgBIOEAAIAAABIjIAAIAABjIDIAAIAAABIjIAAIAABjICWAAIAAAAIiWAAIAAEsIjIAAIAABjIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAsGhKIAyAAIAAAyIEsAAIAAgyIAyAAIAAhkIhkAAIAAAyIgyAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIgyAAIAAgyIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IHzAAIAAhjInzAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgADhqhIAAgBIMgAAIAAABgAB9qiIAAhkIMgAAIAAABIsfAAIAABjgADhtqIAAAAIK8AAIAAAAgAGpvOIAAAAIGQAAIAAAAg");
	this.shape_13.setTransform(-2.5,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},4).to({state:[{t:this.shape_8},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_7}]},5).to({state:[{t:this.shape_9},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},5).to({state:[{t:this.shape_11},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10}]},5).to({state:[{t:this.shape_13},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_12}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-160,360,300);


(lib.kitty_tail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AiVBkIAAhkIBkAAIAAhjIBjAAIAABjIBkAAIAABkg");
	this.shape.setTransform(-60,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ABkAyIAAhjIBkAAIAABjgAjHAyIAAhjIBkAAIAABjg");
	this.shape_1.setTransform(-55,-40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Au1NSIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjHIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABkIBkAAIAAhkIAAAAIAABkIGPAAIAAjIIBkAAIAAhkIBkAAIAAhkIEsAAIAAhkIDIAAIAABkIBkAAIAADIIksAAIAABkIjIAAIAABkIBkAAIAADHIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArtImIAAAAIAAhkIAAAAgArtiVIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAnBldIBkAAIAAhkIhkAAgAx9D6IAAjIIABAAIAADIgAwZAyIAAhjIABAAIAABjg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AucNSIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjHIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABkIBkAAIAAhkIAAAAIAABkIGPAAIAAiWIgyAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIDIAAIAABkIBkAAIAADIIgyAAIAAAAIiWAAIAABkIjIAAIAABkIhkAAIAADIIAyAAIAAAyIBkAAIAADHIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUImIAAAAIAAhkIAAAAgArUiVIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAmoldIBkAAIAAhkIhkAAgAxkD6IAAjIIABAAIAADIgAwAAyIAAhjIABAAIAABjg");
	this.shape_3.setTransform(-2.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIgyAAIAAhjIhkAAIAAjIIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIDIAAIAAABIhkAAIAABjIhkAAIAABkIH0AAIAAABIn0AAIAABjIH0AAIAAABIpYAAIAAgBIhkAAIAABkIKKAAIAAAAIqKAAIAABkIBkAAIAABkIBkAAIAADHIAyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgArUgYIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAmojgIBkAAIAAhkIhkAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAM5qhIAAgBIDIAAIAAABgAM5tqIAAAAIBkAAIAAAAgAINvOIAAAAIEsAAIAAAAg");
	this.shape_4.setTransform(-2.5,-12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAjHIhkAAIAAjIIjHAAIAABkIgBAAIAAjIIBkAAIAAjIIhkAAIAAhkIBkAAIAAhkIGQAAIAAAAIjIAAIAABkIGQAAIAAABImQAAIAABjIEsAAIAAABIjIAAIAABjIJYAAIAAABIpYAAIAABjIJYAAIAAABIn0AAIAABjIHCAAIAAAAInCAAIAADIIBkAAIAADHIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAINAZIAAAAIAAhjIAAAAgArUgYIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IDHAAIAAhjIjHAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAM5qhIAAgBIDIAAIAAABgAM5tqIAAAAIBkAAIAAAAgAINvOIAAAAIEsAAIAAAAg");
	this.shape_5.setTransform(-2.5,-12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAjHIBkAAIAAjIImPAAIAABkIgBAAIAAjIIH0AAIAAhjImQAAIAAgBIGQAAIAAhjImQAAIAAgBIEsAAIAAhjImPAAIAABjIgBAAIAAhkIGQAAIAAhkIksAAIAAAAIK8AAIAAAAIhkAAIAABkIBkAAIAABkIBkAAIAAABIhkAAIAABjIDIAAIAAABIjIAAIAABjIDIAAIAAABIjIAAIAABjICWAAIAAAAIj6AAIAABkIhkAAIAAErIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgAINAZIAAAAIAAhjIAAAAgArUgYIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IHzAAIAAhjInzAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgAGpvOIAAAAIGQAAIAAAAg");
	this.shape_6.setTransform(-2.5,-12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AucPPIAAhkIhkAAIAAksIABAAIAAhkIgBAAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAjHIhkAAIAAjIIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIEsAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAGQIhkAAIAABjIBkAAIAAhjIAAAAIAABjIGPAAIAAgyIAyAAIAAhjIBkAAIAABjIAAAAIAAjHIBkAAIAAhkIBkAAIAABkIAAAAIAAjIIpXAAIAABkIgBAAIAAjIIH0AAIAAhjImQAAIAAgBIOEAAIAAABIjIAAIAABjIDIAAIAAABIjIAAIAABjICWAAIAAAAIiWAAIAAEsIjIAAIAABjIgyAAIAAAyIBkAAIAADIIBkAAIAAEsIhkAAIAADIIjIAAIAABkIjIAAIAABkgArUKjIAAAAIAAhkIAAAAgArUgYIEsAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAgAmojgIBkAAIAAhkIhkAAgAB+l2IHzAAIAAhjInzAAgAxkF3IAAjIIABAAIAADIgAwACvIAAhkIABAAIAABkgADhqhIAAgBIMgAAIAAABgAB9qiIAAhkIMgAAIAAABIsfAAIAABjgADhtqIAAAAIK8AAIAAAAgAGpvOIAAAAIGQAAIAAAAg");
	this.shape_7.setTransform(-2.5,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_4},{t:this.shape},{t:this.shape_1}]},5).to({state:[{t:this.shape_5},{t:this.shape},{t:this.shape_1}]},5).to({state:[{t:this.shape_6},{t:this.shape},{t:this.shape_1}]},5).to({state:[{t:this.shape_7},{t:this.shape},{t:this.shape_1}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-110,230,195);


(lib.cars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheel
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiVD6IAAhkIhkAAIAAkrIBkAAIAAhkIErAAIAABkIBkAAIAAErIhkAAIAABkg");
	this.shape.setTransform(-275,145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiVFeIAAhkIErAAIAABkgACWD6IAAhkIBkAAIAABkgAj5D6IAAhkIBkAAIAABkgAD6CWIAAkrIBkAAIAAErgAldCWIAAkrIBkAAIAAErgACWiVIAAhkIkrAAIAABkIhkAAIAAhkIBkAAIAAhkIErAAIAABkIBkAAIAABkgAj5iVg");
	this.shape_1.setTransform(-275,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiVFeIAAhkIErAAIAABkgACWD6IAAhkIBkAAIAABkgAj5D6IAAhkIhkAAIAAkrIBkAAIAAErIBkAAIAABkgAD6CWIAAkrIhkAAIAAhkIkrAAIAAhkIErAAIAABkIBkAAIAABkIBkAAIAAErgAD6CWgAj5iVIAAhkIBkAAIAABkgAj5iVgAiVj5g");
	this.shape_2.setTransform(-155,145);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiVD6IAAhkIhkAAIAAkrIBkAAIAAhkIErAAIAABkIBkAAIAAErIhkAAIAABkg");
	this.shape_3.setTransform(-155,145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AHuC4IhhAaIhNkhIBggaIgahhIEihNIAaBgIBhgaIBNEhIhhAaIAaBhIkhBNgArBC4IhhAaIhNkhIBhgaIgahhIEhhNIAaBgIBhgaIBNEhIhgAaIAaBhIkiBNg");
	this.shape_4.setTransform(-215.025,145.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AIIEYIhhAaIgahgIhhAZIhNkhIBhgZIgahhIBggaIgahgIEihOIAaBhIkiBNIAaBhIhgAaIBNEhIBhgaIAaBgIEhhNIAaBgIkhBOgAqnEYIhhAaIgahgIBhgaIAaBgIEihNIAaBgIkiBOgAvQg1IBhgaIgahhIBhgaIgahgIEhhOIAaBhIkhBNIAaBhIhhAaIBNEhIhgAagAMPBqIBhgaIhNkhIhhAaIgahgIBhgaIAaBgIBggaIBOEhIhhAaIAaBhIhhAagAmFDLIgahhIBggaIhNkhIBhgaIBNEhIhhAaIAaBhIhgAagAoHkXIBhgaIAaBgIhhAagAKokXgAoHkXg");
	this.shape_5.setTransform(-215.025,145.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhpC4IhhAaIhNkhIBggaIgahhIEhhNIAaBgIBhgaIBNEhIhhAaIAaBhIkgBNg");
	this.shape_6.setTransform(-155.025,145.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhPEYIEghNIAbBgIkhBOgAjKDSIBhgaIAaBgIhhAagAl4g2IBhgZIBNEhIhhAZgAC3BqIBigaIhOkhIBggaIBOEhIhgAaIAaBhIhiAagAkxiwIBggaIgZhgIEghOIAaBhIBhgaIAaBgIhhAaIgahgIkhBNIAaBhIhgAag");
	this.shape_7.setTransform(-155.05,145.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag1DNIhYAyIiVkCIBXg0IgyhWIECiVIAyBWIBXgyICVEDIhWAyIAyBXIkCCWg");
	this.shape_8.setTransform(-275.025,145.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEEkIEDiWIAyBXIkECVgAiND/IBXgyIAyBXIhXAygAl5AuIBWgxICWECIhWAygAgEEkgAiND/gAD/COIgyhXIBWgyIAyBXIhWAygACNj+IBXgyICWEEIhXAxgAlVhaIBXgyIgyhXIEEiWIAxBXIkDCWIAyBWIhXAzgAAFkiIBWgyIAyBWIhWAzgACNj+g");
	this.shape_9.setTransform(-274.975,145.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEEkIEDiWIgyhXIBWgyIAyBXIhWAyIAyBXIkECVgAiND/IBXgyIAyBXIhXAygAl5AuIBWgxICWECIhWAygAgEEkgAiND/gACNj+IhWAzIgyhXIBWgyIAyBWIBXgyICWEEIhXAxgAlVhaIBXgyIAyBWIhXAzgAkwjjIEEiWIAxBXIkDCWgAAFkig");
	this.shape_10.setTransform(-274.975,145.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag2DNIhXAyIiWkDIBXgyIgyhXIECiVIAzBWIBWgyICWEDIhXAyIAyBXIkCCWg");
	this.shape_11.setTransform(-155.05,145.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDEjIhXAyIgzhWIhWAyIiXkEIBYgxIgyhXIBXgyIgzhWIEEiWIAxBWIkCCWIAxBXIhWAyICVEDIBXgyIAzBWIECiWIAyBXIkECWgAD/CNIgyhWIBXgyIAyBWIhXAygACOj/IBXgxICVEDIhWAygAAFkjIBXgyIAyBWIhXAzgACOj/g");
	this.shape_12.setTransform(-155.1,145.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhGEcIBGhHIBIBGIhIBHgAlgCOIBGhHIDUDVIhGBFgABIEbIDTjUIBHBIIjUDSgAhGEcgADUAAIBGhFIjTjUIBHhIIDUDUIhIBIIBHBFIhGBHgAlhAAIBIhGIhHhGIDTjUIBHBHIjTDTIBGBGIhHBHgAhGkZIBGhHIBHBHIhHBHgABHkZg");
	this.shape_13.setTransform(-275,145.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AkaBHIBHhHIhGhGIDTjUIBGBHIBHhHIDTDVIhGBFIBHBHIjTDTIhIhGIhGBHg");
	this.shape_14.setTransform(-275,145.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AkaBGIBHhGIhHhFIDUjVIBGBHIBHhHIDUDVIhHBGIBGBGIjTDUIhHhHIhGBHg");
	this.shape_15.setTransform(-155.075,145.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhGEbIBGhHIBHBHIDUjUIBHBHIjUDTIhHhGIhGBHgAlhCOIBIhIIDTDVIhHBHgADVABIBGhGIBHBFIhHBHgAkZBGIhHhGIBHhFIBGBFIhGBGgABHkaIBHhGIDUDTIhHBIgAkZhFIhHhHIDUjUIBGBGIjTDVgAhGkaIBGhHIBHBHIhHBHgABHkag");
	this.shape_16.setTransform(-155.125,145.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Aj+CNIAyhXIhWgyICVkCIBXAyIAyhXIECCXIgyBWIBXAyIiVECIhXgxIgzBXg");
	this.shape_17.setTransform(-274.975,145.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkxDlIAzhXIECCXIgwBVgAAEElIAzhXIBXAxIgzBXgACOD/ICVkCIhWgyIAxhWIBXAxIgyBXIBXAxIiWEDgACOD/gAlVBcIAzhXIBWAyIgyBXgAl5grICWkEIBWAyIiVECgAgEkiIgyBXIhXgyIAyhXIBXAyIAxhXIEECWIgzBYgAiNj9g");
	this.shape_18.setTransform(-275,145.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Aj+CNIAyhWIhWgyICVkDIBXAzIAyhYIEDCXIgyBXIBWAyIiVECIhXgyIgyBXg");
	this.shape_19.setTransform(-155.1,145.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AkxDkIAyhYIhWgxIAyhWIBXAyIgzBVIEDCYIgxBWgAAEEkIAzhXIBWAyIgxBXgACND/ICVkDIhWgxIAyhYIBXAzIgzBWIBZAyIiYEDgACND/gAl5gsICVkDIBXAxIiWEDgAgFkkIAyhVIEECVIgzBXgAiNj+IAyhXIBWAxIgxBZgAiNj+gAgFkkg");
	this.shape_20.setTransform(-155.05,145.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AFrEsIAahiIEiBPIgbBhgAtDEsIAbhiIhhgZIAahhIBgAZIgZBhIEhBPIgaBggAKnEZIAahhIBhAaIgaBhgAoHEZIAbhhIBhAaIgbBhgAoHEZgAMiDSIBNkgIhggaIAZhhIkihPIAahfIEiBNIgaBhIBhAZIgaBiIBiAaIhPEggAmLDSIBMkhIhhgZIAahhIkhhOIAahhIEiBOIgbBhIBhAZIgaBhIBiAbIhPEfgAMiDSgAmLDSgAEkCxIAbhgIhhgaIBNkgIBhAYIhNEiIBhAaIgbBfgAtvBQIhhgZIBOkgIBgAYIAZhgIBiAaIgaBhIhhgbIhNEhgAGMjRIAahgIBgAZIgaBigAGMjRgAIGkYg");
	this.shape_21.setTransform(-215,145.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AGFDKIAbhfIhggaIBMkiIBhAbIAahiIEiBPIgaBhIBhAaIhOEgIhhgaIgZBhgAsoDKIAZhhIhggZIBOkhIBhAbIAahhIEhBOIgaBhIBhAZIhNEhIhhgaIgbBhg");
	this.shape_22.setTransform(-215.05,145.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AGzD7IhjAAIABhkIhTAAIgThGIAAjkIBlgBIgBhlIBkAAIAABmIhjgBIABErIBjAAIgBBkIEsAAIAABkIksABgAr6D5IhlAAIAAhkIhkAAIABkqIBkgBIgBErIBkAAIABBkIErABIABhlIBkAAIgBBkIhkABIAABiIksACgALfD7IAAhkIBlAAIAAkqIhkAAIgBhlIBlAAIAABlIBeAAIAHAaIgCEQIhjAAIAABkIhlAAgAlqCVIAAkrIBlABIgCEpIhjABgADRA1IAShCIAABHgAO9g4IAHACIgHAagAteiWIgBhkIBlAAIAABlgAnPiWIABhjIksgBIAAhlIEsABIAABlIBkgBIAABkgALfj4IksgBIAAhiIEtgBIgBBkgAr6j6g");
	this.shape_23.setTransform(-213.675,145.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AHBD6IABhjIhjgBIgBkqIBjABIAAhmIEsABIABBlIBkAAIAAEqIhlAAIAABkgArsD4IgBhjIhkAAIABkrIBkABIAAhlIEsABIgBBjIBlAAIAAErIhkAAIgBBkg");
	this.shape_24.setTransform(-215.075,145.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_8},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// car_body
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,153,0,0.2)").s().p("AkrHCIAAksIhkAAIAAhkIBkAAIAAhjIhkAAIAAhkIBkAAIAAhkIhkAAIAAjIIBkAAIAABkIBkAAIAABkIErAAIAABkIEsAAIAABkIAADHIjIAAIAABkIkrAAIAABkIhkAAIAABkg");
	this.shape_25.setTransform(-420,95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,204,153,0.2)").s().p("ApXO2IAAn0IhkAAIAAuDIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBjAAIAABkIBkAAIAABkIDIAAIAABkIBkAAIAABkIDIAAIAABkIksAAIAAhkIksAAIAAhkIhjAAIAAhkIhkAAIAADIIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABjIBkAAIAAEsIBjAAIAAhkIBkAAIAAhkIEsAAIAAhkIDIAAIBkAAIAABkIhkAAIAABkIjIAAIAABkIhkAAIAABkIjIAAIAABkIhkAAIAABkIhjAAIAABkIhkAAIAABkIhkAAIAABkgAJYiVIAAhkIBkAAIAABkg");
	this.shape_26.setTransform(-440,105);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006699").s().p("AGQCWIAAjHIhkAAIAAhkIBkAAIAABkIBkAAIAADHgAmPAyIAAhjIhkAAIAAhkIBkAAIAABkIBkAAIAABjg");
	this.shape_27.setTransform(-200,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AH0BkIAAhkIhkAAIksAAIAAhjIH0AAIAADHgApXBkIAAhkIBkAAIAABkgAkrAAIhkAAIhkAAIAAhjIEsAAIAABjgAnzAAg");
	this.shape_28.setTransform(-210,10);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AiVAyIAAhjIErAAIAABjg");
	this.shape_29.setTransform(-85,115);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003366").s().p("ABkDIIAAmPIEsAAIAABkIBkAAIAADHIBkAAIAABkgApXDIIAAkrIBkAAIAAhkIBkAAIAABkIBkAAIAABjIBkAAIAADIgAkrhjIAAhkIBkAAIAABkgAkrhjg");
	this.shape_30.setTransform(-210,30);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AiVAyIAAhjIErAAIAABjg");
	this.shape_31.setTransform(-85,95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("AiVBkIAAjHIErAAIAADHg");
	this.shape_32.setTransform(-355,100);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AMgMgIAAhkIhkAAIAAhkIksAAIAABkIhkAAIAABkIq7AAIAAhkIhkAAIAAhkIksAAIAABkIhkAAIAABkIn0AAIAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIDIAAIAAhkIEsAAIAAnzIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkISvAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAHzIBkAAIAABkIDIAAIAABkIBkAAIAABkIksAAIAABkIhkAAIAAEsIBkAAIAABkgAAAAAIBkAAIAABkIH0AAIAAhkIBkAAIAAnzIhkAAIAAhkIn0AAIAABkIhkAAgAq7AAIBkAAIAABkIGQAAIAAhkIBkAAIAAnzIhkAAIAAhkIksAAIAABkIhkAAIAABkIhkAAg");
	this.shape_33.setTransform(-210,50);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AOEOEIAAhkIEsAAIAAhkIEsAAIAAhkIksAAIAABkIhkAAIAAksIBkAAIAABkIEsAAIAAhkIksAAIAAhkIEsAAIAAhkIhkAAIAAhkIjIAAIAAhkIhkAAIAAnzIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIyvAAIAAhkISvAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAHzIDIAAIAABkIBkAAIAABkIBkAAIAAK8gAkrOEIAAhkIhkAAIAAhkIksAAIAAhkIEsAAIAABkIBkAAIAABkIK7AAIAABkgA13OEIAAjIIhkAAIAAhkIhkAAIAAjIIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAAjIIksAAIAADIIEsAAIAABkIhkAAIAABkIH0AAIAABkgAMgMgIAAhkIBkAAIAABkgAGQMgIAAhkIBkAAIAABkgAsfMgIAAhkIBkAAIAABkgAH0K8IAAhkIEsAAIAABkgAH0K8gAq7K8gAyvJYgA0TDIIAAhkIBkAAIAABkgA0TDIgADIBkIAAhkIH0AAIAABkgAnzBkIAAhkIhkAAIAAmPIBkAAIAABkIAAErIGQAAIAABkgAyvBkIAAhkIDIAAIAABkgAyvBkgAK8AAIAAhjIAAjIIAAjIIn0AAIAAhkIH0AAIAABkIBkAAIAAHzgABkAAIAAnzIBkAAIAABkIAAGPgAhjAAIAAjHIAAhkIAAhkIAAhkIksAAIAAhkIEsAAIAABkIBjAAIAAHzgAvnAAIAAhjIDIAAIAAmQIBkAAIAAHzgAvnAAgAnzmPIAAhkIBkAAIAABkgADInzgAq7nzIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAq7nzgAnzq7IAAhkIBkAAIAABkg");
	this.shape_34.setTransform(-220,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-510,-40,450,240);


(lib.bear_outside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("ACWBkIAAhkIhkAAIAAhjIDIAAIAABjIBkAAIAABkgAldBkIAAhkIhkAAIAAhjIDIAAIAABjIAABkgAFeAAIAAhjIBkAAIAABjgAFeAAg");
	this.shape.setTransform(-85,390);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AFeLuIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAADIgAiVLuIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBjAAIAABkIBkAAIAABkgAolLuIAAhkIBkAAIBkAAIAABkgAHCHCIAAyvIBkAAIAASvg");
	this.shape_1.setTransform(-85,325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AGQK8IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAJYH0IAAhkIBkAAIAABkgAJYH0gAK8GQIAAq7IBkAAIAAK7gAK8GQgAsfjHIAAhkIBkAAIAABkgAH0krIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkgAq7krIAAhkIDIAAIAAhkIBkAAIAAjIIBkAAIAADIIhkAAIAABkIhkAAIAABkgAEsnzIAAhkIjIAAIAAhkIEsAAIAADIg");
	this.shape_2.setTransform(-70,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333366").s().p("AiVO2IAAksIhkAAIAAuDIhkAAIAAODIBkAAIAAEsImQAAIAA0TIhkAAIAAhkIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAH0IBkAAIAAq8IErAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkIDIAAIAAK7IhkAAIAABkIksAAIAAhkIBkAAIAAhkIhkAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIDIAAIAAH0IjIAAIAABkgAImKKIBkAAIAAhkIhkAAgAHCAyIBkAAIAAnzIhkAAgAqJldIBkAAIAAhkIhkAAgACWCWgAtRCWIAAnzIBkAAIAAHzg");
	this.shape_3.setTransform(-75,145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Agxc6IAAxMIhkAAIAARMIksAAIAAywIODAAIAASwgAD67VIAAhkIBkAAIBkAAIAABkgAj57VIhkAAIAAhkIBkAAIBkAAIAABkg");
	this.shape_4.setTransform(-85,185);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AhjGQIAAjIIBjAAIAAhkIkrAAIAAhkIErAAIAABkIBkAAIAAEsgAmPGQIAAksIBkAAIAABkIBkAAIAADIgAkrBkgAEskrIAAhkIBkAAIAABkgAjHkrIAAhkIBkAAIAABkg");
	this.shape_5.setTransform(-70,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AEsAyIhkAAIAAhjIDIAAIAABjgAkrAyIhkAAIAAhjIBkAAIBkAAIAABjg");
	this.shape_6.setTransform(-80,-15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("ABkHCIAAksIhkAAIAAhkIkrAAIAAhjIAAhkIhkAAIAAhkIBkAAIAAjIIDIAAIAABkIhkAAIAABkIBkAAIErAAIAAjIIDIAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIBkAAIAAHzIhkAAIAABkgABkgxIAABjIAABkIDIAAIAAhkIhkAAIAAhjIBkAAIAAhkIjIAAgAnzHCIAAhkIhkAAIAAjIIBkAAIBkAAIAAEsgAnzAyIAAhjIBkAAIAABjg");
	this.shape_7.setTransform(-70,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgNRAkuIAAjIIDIAAIAABkIDIAAIBkAAIAAhkIBkAAIAABkIErAAIDIAAIDIAAIAABkgEAHCAjKIAAjIIhkAAIhkAAIhkAAIjHAAIhkAAIAAhkIhkAAIAAxMIBkAAIAARMIHzAAIBkAAIAABkIBkAAIAADIgEgD5AhmIAAhkIBkAAIAABkgEgKJAhmIAAhkIBkAAIAABkgEgCVAgCgEgFdAgCIjIAAIAAhkIEsAAIAABkgEgIlAgCgAHCeeIAAywIhkAAIuDAAIAASwIhkAAIAA0UIhkAAIAAq7IhkAAIAAhkIhkAAIAAn0IBkAAIAAjIIBkAAIAABkIAABkIBkAAIAAUTIGQAAIAAksIhkAAIAAuDIBkAAIAAODIBkAAIAAEsIMfAAIAAhkIDIAAIAABkIjIAAIAABkIhkAAIAASwgAtRiVIBkAAIAAn0IhkAAgANSImIAAn0IBkAAIAAH0gAImFeIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAImCWIAAhkIBkAAIAABkgAFeCWIAAhkIhkAAIAAhjIhkAAIAAhkIDIAAIAABkIAABjIBkAAIAABkgAKKAyIAAhjIBkAAIAAhkIBkAAIAAq8IBkAAIAAK8IhkAAIAADHgAKKAygAFeiVIAAhkIBkAAIAABkgAAyiVIAAhkIBkAAIAABkgAHCj5IAAn0IBkAAIAAH0gAj5olIAAn0IAAjIIhkAAIAADIIhkAAIAABkIjIAAIAAhkIBkAAIAAhkIBkAAIAAjIIBkAAIDIAAIAAjIIhkAAIAAhkIErAAIAABkIhjAAIAADIIDHAAIGQAAIAAEsIDIAAIAABkIBkAAIAABkIhkAAIAAhkIjIAAIAAhkIhkAAIAAjIIksAAIkrAAIAAK8gAqJqJIAAhkIBkAAIAABkgArttRIAAhkIBkAAIAABkgArttRgAqJu1gAIm1FIAAhkIBkAAIAABkgAol1FIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAKK2pIAAn0IBkAAIAAH0gAKK2pgAol5xIAAksIBkAAIAABkIAABkIAABkgACW7VIAAhkIBkAAIAABkgAld7VIAAhkIBkAAIAABkgAIm+dIAAhkIhkAAIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABkgAnB+dIAAhkIBkAAIAABkgEgAxggBIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAADIgEgFdggBIAAjIIBkAAIAADIgEgFdggBg");
	this.shape_8.setTransform(-75,175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003399").s().p("AGQK8IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAJYH0IAAhkIBkAAIAABkgAJYH0gAK8GQIAAq7IBkAAIAAK7gAsfjHIAAhkIBkAAIAABkgAH0krIAAhkIhkAAIAAhkIEsAAIAADIgAq7krIAAhkIDIAAIAABkgAq7krgAnzmPIAAhkIBkAAIAAjIIBkAAIAADIIhkAAIAABkgAnzmPgAEsnzIAAhkIjIAAIAAhkIEsAAIAADIg");
	this.shape_9.setTransform(-70,120);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333366").s().p("AiVO2IAAksIhkAAIAAuDIhkAAIAAODIBkAAIAAEsImQAAIAA0TIhkAAIAAhkIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAH0IBkAAIAAq8IErAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkIDIAAIAAK7IhkAAIAABkIksAAIAAhkIBkAAIAAhkIhkAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIDIAAIAAH0IjIAAIAABkgAImKKIBkAAIAAhkIhkAAgAHCAyIBkAAIAAnzIhkAAgAqJldIBkAAIAAhkIhkAAgAj5KKgAtRCWIAAnzIBkAAIAAHzgArtldg");
	this.shape_10.setTransform(-75,145);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EgNRAkuIAAjIIDIAAIAAhkIBkAAIAABkIhkAAIAABkIDIAAIBkAAIAAhkIBkAAIAABkIErAAIDIAAIDIAAIAABkgEAHCAjKIAAjIIBkAAIAADIgEgD5AhmIAAhkIBkAAIAABkgEAFeAgCIhkAAIhkAAIjHAAIhkAAIAAhkIHzAAIBkAAIAABkgEgFdAgCIjIAAIAAhkIEsAAIAABkgAHCeeIAAywIhkAAIuDAAIAASwIhkAAIAA0UIGQAAIAAksIBkAAIAAEsIMfAAIAABkIhkAAIAASwgAj5eeIAAxMIBkAAIAARMgAKKKKIAAhkIDIAAIAABkgArtKKIAAq7IhkAAIAAhkIhkAAIAAn0IBkAAIAAH0IBkAAIAAn0IBkAAIAAUTgANSImIAAn0IjIAAIAAhjIBkAAIAAhkIBkAAIAADHIBkAAIAAH0gAImFeIAAhkIBkAAIAABkgAldFeIAAuDIBkAAIAAODgAHCD6IAAhkIBkAAIAABkgAImCWIAAhkIBkAAIAABkgAFeCWIAAhkIhkAAIAAhjIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIAABjIBkAAIAABkgAKKAygANSiVIAAq8IhkAAIAAjIIksAAIAAjIIksAAIkrAAIAAK8IhkAAIAAn0IAAjIIhkAAIAADIIhkAAIAABkIjIAAIAABkIhkAAIAABkIAABkIhkAAIAAksIBkAAIAAhkIDIAAIAAhkIBkAAIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIDIAAIAAjIIhkAAIAAhkIErAAIAABkIhjAAIAADIIDHAAIGQAAIAAhkIBkAAIAABkIhkAAIAADIIDIAAIAABkIBkAAIAABkIBkAAIAAMggAFeiVIAAhkIBkAAIAABkgAHCj5IAAn0IBkAAIAAH0gAj5olgAqJqJIAAhkIBkAAIAABkgAtRqJgAKK2pIAAn0IBkAAIAAH0gAqJ2pIAAjIIBkAAIAADIgAol5xIAAksIBkAAIAABkIAABkIAABkgACW7VIAAhkIBkAAIAABkgAld7VIAAhkIBkAAIAABkgAIm+dIAAhkIhkAAIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABkgAnB+dIAAhkIBkAAIAAjIIBkAAIAAhkIDIAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAADIIkrAAIAAhkIAAhkIjIAAIAADIIhkAAIAABkg");
	this.shape_11.setTransform(-75,175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.098)").s().p("ABkEsIkrAAIAAhkIhkAAIAAjIIDIAAIAAhjIBjAAIAAhkIBkAAIAAhkIBkAAIAADIIBkAAIAAErIhkAAIAABkg");
	this.shape_12.setTransform(-110,60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003399").s().p("AGQK8IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAJYH0IAAhkIBkAAIAABkgAJYH0gAK8GQIAAq7IBkAAIAAK7gAK8GQgAsfjHIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAH0krIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkgAEsnzIAAhkIjIAAIAAhkIEsAAIAADIg");
	this.shape_13.setTransform(-70,120);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333366").s().p("AiVO2IAAksIhkAAIAAuDIBkAAIAAksIAAhkIBkAAIAAksIDHAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkIDIAAIAAK7IhkAAIAABkIksAAIAAhkIBkAAIAAhkIhkAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIDIAAIAAH0IjIAAIAABkgAImKKIBkAAIAAhkIhkAAgAHCAyIBkAAIAAnzIhkAAgAqJO2IAA0TIhkAAIAAhkIBkAAIAAhkIBkAAIEsAAIAAEsIhkAAIAAODIBkAAIAAEsgAqJldIBkAAIAAhkIhkAAgACWCWgAtRCWIAAnzIBkAAIAAHzg");
	this.shape_14.setTransform(-75,145);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC66").s().p("AhjGQIAAjIIBjAAIAAhkIkrAAIAAhkIErAAIAABkIBkAAIAAEsgAmPGQIAAksIBkAAIAABkIBkAAIAABkIhkAAIAABkgAkrBkgAEskrIAAhkIBkAAIAABkgAjHkrIAAhkIBkAAIAABkg");
	this.shape_15.setTransform(-70,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("EgNRAkuIAAjIIDIAAIAABkIDIAAIBkAAIAAhkIBkAAIAABkIErAAIDIAAIDIAAIAABkgEAHCAjKIAAjIIhkAAIhkAAIhkAAIjHAAIhkAAIAAhkIhkAAIAAxMIBkAAIAARMIHzAAIBkAAIAABkIBkAAIAADIgEgD5AhmIAAhkIBkAAIAABkgEgKJAhmIAAhkIBkAAIAABkgEgCVAgCgEgFdAgCIjIAAIAAhkIhkAAIAA0UIhkAAIAAq7IhkAAIAAhkIhkAAIAAn0IBkAAIAAH0IBkAAIAAn0IhkAAIAAjIIBkAAIAABkIAABkIBkAAIAAUTIGQAAIAAksIhkAAIAAuDIBkAAIAAksIBkAAIAAEsIhkAAIAAODIBkAAIAAEsIMfAAIAAhkIDIAAIAABkIjIAAIAABkIhkAAIAASwIhkAAIAAywIhkAAIuDAAIAASwIEsAAIAABkgEgIlAgCgANSImIAAn0IBkAAIAAH0gAImFeIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAImCWIAAhkIBkAAIAABkgAFeCWIAAhkIhkAAIAAhjIhkAAIAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIAABjIBkAAIAABkgAKKAyIAAhjIBkAAIAAhkIBkAAIAAq8IBkAAIAAK8IhkAAIAADHgAKKAygAAyiVIAAhkIBkAAIAABkgAHCj5IAAn0IBkAAIAAH0gAqJqJIAAhkIBkAAIAABkgALutRIAAhkIjIAAIAAhkIhkAAIAAjIIksAAIjHAAIhkAAIAAjIIAAhkIhkAAIAAhkIErAAIAABkIhjAAIAADIIDHAAIGQAAIAAEsIDIAAIAABkIBkAAIAABkgArttRIAAhkIBkAAIAABkgAnBzhIAAhkIBkAAIAABkgAIm1FIAAhkIBkAAIAABkgAol1FIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAKK2pIAAn0IBkAAIAAH0gAKK2pgAol5xIAAksIBkAAIAABkIAABkIAABkgACW7VIAAhkIBkAAIAABkgAld7VIAAhkIBkAAIAABkgAIm+dIAAhkIhkAAIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABkgAnB+dIAAhkIBkAAIAABkgEgAxggBIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAADIgEgFdggBIAAjIIBkAAIAADIgEgFdggBg");
	this.shape_16.setTransform(-75,175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.098)").s().p("AkrGQIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIBkAAIAABkIBjAAIAABkIjHAAIAABkgAEsEsIhkAAIAAhkIBkAAIAAhkIDIAAIAADIgAkrhjIjIAAIAAjIIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIDIAAIAAEsg");
	this.shape_17.setTransform(-120,80);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003399").s().p("AFeK8IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAImH0IAAhkIBkAAIAABkgAImH0gAKKGQIAAq7IBkAAIAAK7gAHCkrIAAhkIhkAAIAAhkIEsAAIAADIgAqJkrIhkAAIAAhkIDIAAIAAhkIBkAAIAAjIIBkAAIAADIIhkAAIAABkIhkAAIAABkgAD6nzIAAhkIjIAAIAAhkIEsAAIAADIg");
	this.shape_18.setTransform(-65,120);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333366").s().p("AiVO2IAAksIhkAAIAAuDIBkAAIAAhkIDHAAIAAjIIjHAAIAAmQIErAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAABkIDIAAIAAK7IhkAAIAABkIksAAIAAhkIBkAAIAAhkIhkAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIDIAAIAAH0IjIAAIAABkgAImKKIBkAAIAAhkIhkAAgAHCAyIBkAAIAAnzIhkAAgAqJO2IAAyvIAAhkIDIAAIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAEsIAABkIAABkIhkAAIAAODIBkAAIAAEsgAj5KKgAtRCWIAAnzIBkAAIAABkIAAGPg");
	this.shape_19.setTransform(-75,145);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("EgNRAkuIAAjIIDIAAIAAhkIBkAAIAABkIhkAAIAABkIDIAAIBkAAIAAhkIBkAAIAABkIErAAIDIAAIDIAAIAABkgEAHCAjKIAAjIIBkAAIAADIgEgD5AhmIAAhkIBkAAIAABkgEAFeAgCIhkAAIhkAAIjHAAIhkAAIAAhkIhkAAIAAxMIBkAAIAARMIHzAAIBkAAIAABkgEgCVAgCgEgFdAgCIjIAAIAAhkIEsAAIAABkgAHCeeIAAywIhkAAIuDAAIAASwIhkAAIAA0UIGQAAIAAksIBkAAIAAEsIMfAAIAABkIhkAAIAASwgAKKKKIAAhkIDIAAIAABkgArtKKIAAq7IhkAAIAAhkIBkAAIAAmQIBkAAIAASvgANSImIAAn0IjIAAIAAhjIBkAAIAAhkIBkAAIAADHIBkAAIAAH0gAImFeIAAhkIBkAAIAABkgAldFeIAAuDIBkAAIAAODgAHCD6IAAhkIBkAAIAABkgAImCWIAAhkIBkAAIAABkgAFeCWIAAhkIhkAAIAAhjIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIAABjIBkAAIAABkgAKKAygANSiVIAAq8IhkAAIAAjIIksAAIAAjIIksAAIkrAAIAAGQIAABkIhkAAIAAksIAAjIIhkAAIAADIIhkAAIAABkIjIAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIBkAAIBkAAIAAhkIBkAAIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIDIAAIAAjIIhkAAIAAhkIErAAIAABkIhjAAIAADIIDHAAIGQAAIAAhkIBkAAIAABkIhkAAIAADIIDIAAIAABkIBkAAIAABkIBkAAIAAMggAFeiVIAAhkIBkAAIAABkgAu1iVIAAn0IBkAAIAAH0gAHCj5IAAn0IBkAAIAAH0gAj5olIAAhkIBkAAIAABkgAj5olgAKK2pIAAn0IBkAAIAAH0gAqJ2pIAAjIIBkAAIAADIgAol5xIAAksIBkAAIAABkIAABkIAABkgACW7VIAAhkIBkAAIAABkgAld7VIAAhkIBkAAIAABkgAIm+dIAAhkIhkAAIAAhkIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAABkgAnB+dIAAhkIBkAAIAAjIIBkAAIAAhkIDIAAIAABkIBjAAIAABkIBkAAIAAhkIBkAAIAADIIkrAAIAAhkIAAhkIjIAAIAADIIhkAAIAABkg");
	this.shape_20.setTransform(-75,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_16},{t:this.shape_7},{t:this.shape_6},{t:this.shape_15},{t:this.shape_4},{t:this.shape_14},{t:this.shape_13},{t:this.shape_1},{t:this.shape},{t:this.shape_12}]},7).to({state:[{t:this.shape_20},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_1},{t:this.shape},{t:this.shape_17}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-60,190,470);


(lib.bear_on_the_subway = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// person_head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AEsAyIhkAAIAAhjIBkAAIBkAAIAABjgAmPAyIAAhjIBkAAIBkAAIAABjg");
	this.shape.setTransform(20,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AEsAyIhkAAIAAhjIDIAAIAABjgAkrAyIhkAAIAAhjIDIAAIAABjg");
	this.shape_1.setTransform(20,-55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhjDIIAAhkIBjAAIAAjHIhjAAIAAhkIDHAAIAAGPg");
	this.shape_2.setTransform(30,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AiVDIIAAhkIhkAAIAAhkIAAhjIBkAAIAABjIBkAAIAABkIBjAAIAAhkIBkAAIBkAAIAABkIhkAAIAABkgAiVhjIAAhkIErAAIAABkg");
	this.shape_3.setTransform(25,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AD6GQIAAhkIBkAAIAABkgAj5GQIAAhkIhkAAIAAhkIhkAAIAAjIIhkAAIAAhjIBkAAIAAjIIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAAAAIDHAAIBkAAIAAhkIBkAAIAABkIDIAAIAAHzIhkAAIAABkIhkAAIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhjIjIAAIAABjIkrAAIAABkIhkAAIAAhkIAAhjIjIAAIAABjIBkAAIAABkIhkAAIAABkIDIAAIAABkIBkAAIAABkgAFeEsg");
	this.shape_4.setTransform(15.025,-50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("ACWAyIAAhjIBkAAIAABjgAj5AyIAAhjIBkAAIAABjg");
	this.shape_5.setTransform(15,-85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AFeHOIAAhkIBkAAIAABkgAnBHOIAAiBIhBAAIAAgLIBBAAIAAg8IBkAAIAABkIBkAAIAABkgAHCFqIAAhkIBkAAIAAnzIBkAAIAAJXgAAyFqIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAolEGIAAjIIAAAAIBkAAIAADIgAD6CiIAAhkIBkAAIAABkgAj5CiIAAhkIBkAAIAABkgAqJA+IAAhjIBkAAIAABjgAolglIAAAAIAAjIIBkAAIAADIgAolglgAFejtIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIDIAAIAABkgAgwjtIAAhkIDGAAIAABkgAiVjtIAAhkIhkAAIhkAAIAAhkIEsAAIAADIgAnBjtIAAhkIBkAAIAABkgAldlRgAlhm1IAAgYIAEAAIAAAYg");
	this.shape_6.setTransform(15,-56.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ADIAyIAAhjIBkAAIBkAAIAABjgAmPAyIAAhjIBkAAIBkAAIAABjg");
	this.shape_7.setTransform(20,-45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AAADIIhjAAIAAjIIBjAAIAABkIBkAAIAAhkIBkAAIAADIgAjHAAIAAhjIBkAAIAABjgAhjhjIAAhkIErAAIAABkgAhjhjg");
	this.shape_8.setTransform(20,-40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AjHBkIAAhkIBkAAIAABkgABkAAIAAhjIBkAAIAABjg");
	this.shape_9.setTransform(0,-100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996600").s().p("AAyHCIAAhkIDIAAIAAjIIDIAAIAABkIhkAAIAABkIAABkgAnBFeIAAjIIhkAAIAAmPIBkAAIAAjIIBkAAIAABkIBkAAIDIAAIAAhkIBjAAIDIAAIAABkIAABkIAAAAIBkAAIBkAAIAABkIjIAAIAABkIkrAAIAABjIhkAAIAAhjIAAhkIjIAAIAABkIBkAAIAABjIhkAAIAABkIDIAAIBkAAIAADIgAHCCWIAAhkIhkAAIAAhjIBkAAIBkAAIAADHg");
	this.shape_10.setTransform(15,-55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AFeH0IAAhkIBkAAIAAhkIBkAAIAAjIIBkAAIAAEsIivAAIAAAdIgZAAIAABHgAolH0IAAhkIhkAAIAAnzIBkAAIAAGPIBkAAIAADIgAAyGQIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAD6DIIAAhkIBkAAIAABkgAj5DIIAAhkIBkAAIAABkgAHCBkIAAhkIAAhjIBkAAIAADHgAD6hjIAAhkIAAAAIAAhkIBkAAIAADIgAolhjIAAjIIBkAAIAADIgAj5jHIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIBkAAIAAhkIBkAAIAAhkIBjAAIAABkIhjAAIAABkIAABkgAAykrIAAhkIDIAAIAABkgAnBkrg");
	this.shape_11.setTransform(15,-70);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996600").s().p("AD6GQIAAhkIBkAAIAABkgAj5GQIAAhkIhkAAIAAhkIhkAAIAAjIIhkAAIAAhjIBkAAIAAjIIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAAAAIDHAAIBkAAIAAhkIBkAAIAABkIDIAAIAAHzIhkAAIAAhkIhkAAIAAhkIBkAAIAAhjIjIAAIAABjIkrAAIAABkIhkAAIAAhkIAAhjIjIAAIAABjIBkAAIAABkIhkAAIAABkIDIAAIAABkIBkAAIAABkgAFeEsIAAhkIBkAAIAABkgAFeEsgAHCDIg");
	this.shape_12.setTransform(15.025,-50);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AFeHOIAAhkIBkAAIAABkgAnBHOIAAiBIhBAAIAAgLIBBAAIAAg8IBkAAIAABkIBkAAIAABkgAHCFqIAAhkIBkAAIAAnzIjIAAIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIDIAAIAABkIBkAAIAAJXgAHCFqgAAyFqIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAolEGIAAjIIAAAAIBkAAIAADIgAD6CiIAAhkIBkAAIAABkgAj5CiIAAhkIBkAAIAABkgAqJA+IAAhjIBkAAIAABjgAolglIAAAAIAAjIIBkAAIAADIgAolglgAgwjtIAAhkIDGAAIAABkgAiVjtIAAhkIhkAAIhkAAIAAhkIgEAAIAAgYIAEAAIAAAYIEsAAIAADIgAnBjtIAAhkIBkAAIAABkgAldlRg");
	this.shape_13.setTransform(15,-56.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AAADIIhjAAIAAjIIhkAAIAAhjIBkAAIAAhkIErAAIAABkIkrAAIAABjIBjAAIAABkIBkAAIAAhkIBkAAIAADIg");
	this.shape_14.setTransform(20,-40);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996600").s().p("AAyHCIAAhkIDIAAIAAjIIDIAAIAAhkIhkAAIAAhjIBkAAIBkAAIAADHIhkAAIAABkIhkAAIAABkIAABkgAnBFeIAAjIIhkAAIAAmPIBkAAIAAjIIBkAAIAABkIBkAAIDIAAIAAhkIBjAAIDIAAIAABkIAABkIAAAAIBkAAIBkAAIAABkIjIAAIAABkIkrAAIAABjIhkAAIAAhjIAAhkIjIAAIAABkIBkAAIAABjIhkAAIAABkIDIAAIBkAAIAADIg");
	this.shape_15.setTransform(15,-55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFeH0IAAhkIBkAAIAAhkIBkAAIAAjIIBkAAIAAEsIivAAIAAAdIgZAAIAABHgAolH0IAAhkIhkAAIAAnzIBkAAIAAGPIBkAAIAADIgAAyGQIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAD6DIIAAhkIBkAAIAABkgAj5DIIAAhkIBkAAIAABkgAHCBkIAAhkIAAhjIBkAAIAADHgAD6hjIAAhkIAAAAIAAhkIjIAAIAAhkIhjAAIAAhkIBjAAIAABkIDIAAIAABkIBkAAIAADIgAolhjIAAjIIBkAAIAADIgAolhjgAj5jHIAAhkIBkAAIAAhkIBkAAIAABkIAABkgAldkrIhkAAIAAhkIDIAAIAABkg");
	this.shape_16.setTransform(15,-70);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AFeHOIAAhkIBkAAIAABkgAnBHOIAAiBIhBAAIAAgLIBBAAIAAg8IBkAAIAABkIBkAAIAABkgAHCFqIAAhkIBkAAIAAnzIBkAAIAAJXgAAyFqIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAolEGIAAjIIAAAAIBkAAIAADIgAD6CiIAAhkIBkAAIAABkgAj5CiIAAhkIBkAAIAABkgAqJA+IAAhjIBkAAIAABjgAolglIAAAAIAAjIIBkAAIAADIgAolglgAFejtIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIDIAAIAABkgAgwjtIAAhkIDGAAIAABkgAiVjtIAAhkIhkAAIhkAAIAAhkIgEAAIAAgYIAEAAIAAAYIEsAAIAADIgAnBjtIAAhkIBkAAIAABkgAldlRg");
	this.shape_17.setTransform(15,-56.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AFeH0IAAhkIBkAAIAAhkIBkAAIAAjIIhkAAIAAhkIAAhjIBkAAIAADHIBkAAIAAEsIivAAIAAAdIgZAAIAABHgAolH0IAAhkIhkAAIAAnzIBkAAIAAGPIBkAAIAADIgAAyGQIAAhkIhjAAIAAhkIErAAIAABkIhkAAIAABkgAD6DIIAAhkIBkAAIAABkgAj5DIIAAhkIBkAAIAABkgAD6hjIAAhkIAAAAIAAhkIBkAAIAADIgAolhjIAAjIIBkAAIAADIgAj5jHIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIBkAAIAAhkIBkAAIAAhkIBjAAIAABkIhjAAIAABkIAABkgAAykrIAAhkIDIAAIAABkgAnBkrg");
	this.shape_18.setTransform(15,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-55}},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{y:-65}}]},4).to({state:[{t:this.shape_13},{t:this.shape_5},{t:this.shape_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-55}},{t:this.shape}]},5).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_9},{t:this.shape_14},{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{y:-65}}]},5).to({state:[{t:this.shape_17},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-55}},{t:this.shape}]},5).to({state:[{t:this.shape_18},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{y:-65}}]},5).to({state:[{t:this.shape_13},{t:this.shape_5},{t:this.shape_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-55}},{t:this.shape}]},5).wait(1));

	// bear_body
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333300").s().p("AD6CWIAAjHIBkAAIAAhkIBkAAIAABkIBkAAIAABjIBkAAIAABkgAqJCWIAAhkIEsAAIAAhjIBkAAIAAhkIBkAAIAAErg");
	this.shape_19.setTransform(25,195);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006666").s().p("AD6FeIAAhkIhkAAIAAkrIhkAAIAAhkIhjAAIAAhkIhkAAIAAHzIhkAAIAABkIjIAAIAAq7IODAAIAABkIhkAAIAAErIBkAAIAADIIhkAAIAABkg");
	this.shape_20.setTransform(25,145);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AqJImIAAmQIDIAAIAAhkIDIAAIAADIIGPAAIAApXImPAAIAABkIksAAIAAErIjIAAIAAjHIAAgoIAAksIAAg8IBkAAIDIAAIAABkIJXAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIDIAAIAADHIjIAAIAAhjIhkAAIAAhkIhkAAIAAhkIhkAAIAADIIBkAAIAAHzIhkAAIAABkg");
	this.shape_21.setTransform(35,45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_22.setTransform(-5,-55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996600").s().p("AH0BkIAAjHIDIAAIAADHgAq7BkIAAjHIEsAAIAABjIhjAAIgBAAIAABkg");
	this.shape_23.setTransform(60,40);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAyS/IAAhkIGQAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAADIgAtRS/IAAhkIH0AAIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAAGQgAgxRbIAAmQIBjAAIAABkIBkAAIAABkIhkAAIAADIgAu1RbIAAhkIBkAAIAABkgAtRP3IAAhkIDIAAIAAhkIDIAAIAABkIhkAAIAABkgAtRP3gAD6OTIAAhkIhkAAIAAhkIBkAAIAAjIIhkAAIAAksIBkAAIAAEsIBkAAIAAGQgACWMvgArtMvIAAsgIODAAIAAhjIBkAAIAABjIBkAAIAADIIhkAAIAAhkIuDAAIAAK8gAiVLLIAAksIBkAAIAAEsgAldLLIAAn0IBkAAIAABkIBkAAIAABkIhkAAIAAEsgAldLLgAD6DXgAtRAPIAAnzIhkAAIAAjIIBkAAIAADIIDIAAIAAksIEsAAIAAhkIGPAAIAAJYImPAAIAAjIIABAAIAAhkIBjAAIABAAIAAhkIgBAAIksAAIAADIIAABkIjIAAIAAGPgAD6hUIAAn0IhkAAIAAjIIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAAGQgAHCmAIAAhkIDIAAIDIAAIAABkgANTnkIAAjIIBjAAIAADIgAKKqsIjIAAIAAhkIGQAAIAABkgAu1rUIAAksIBkAAIAAEsgAFesQIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgACWvYIAAhkIBkAAIAABkgAolvYIAAhkIAAgoIjIAAIAAhaIHPAAIAAAeIAlAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAAA8IBkAAIAAg8IBjAAIAABkgAnBw8IBkAAIAAhgIhkAAgAAyw8IAAhkIhjAAIAAgeIBjAAIAAAeIAnAAIAAgeIBMAAIAAAiIgPAAIAABggAtRw8IAAgoIBkAAIAAAog");
	this.shape_24.setTransform(45,98.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-120,190,340);


(lib.bear_eating_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AmPFeIAAhkIJXAAIAAhkIjIAAIAAjHIBkAAIAAjIIkrAAIAADIIBkAAIAADHIjIAAIAAhkIksAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIGPAAIBkAAIAABkIDIAAIAADIIBkAAIAABjIBkAAIAABkIhkAAIAAhkIksAAIAABkIEsAAIAABkIjIAAIAABkgApXD6IAAhkIDIAAIAABkg");
	this.shape.setTransform(10,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AEsBkIhkAAIAAjHIBkAAIAABjIBkAAIAAhjIBkAAIAADHgAnzBkIAAjHIBkAAIAABjIBkAAIAAhjIBkAAIAADHg");
	this.shape_1.setTransform(0,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("ADIAyIAAhjIDIAAIAABjgAmPAyIAAhjIDIAAIAABjg");
	this.shape_2.setTransform(0,-40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnzO2IAAhkIhkAAIAAhkIksAAIAAhkIjIAAIAAhkIhkAAIAAksIBkAAIAAjIIDIAAIAAhjIBkAAIAAksIBkAAIAAhkIjIAAIAAhkIhkAAIAAksIBkAAIAAhkIGQAAIAABkIBkAAIAABkIODAAIAAjIIGQAAIAAGQIjIAAIAAhkIBkAAIAAjIIjIAAIAAEsIBkAAIAADIIBkAAIAAEsIEsAAIAABjIBkAAIAAH0IhkAAIAABkIksAAIAABkIhkAAIAABkIhkAAIAABkgAxLHCIBkAAIAABkIBkAAIAABkIGQAAIAABkIBkAAIAABkIODAAIAAhkIBkAAIAAhkIBkAAIAAhkIEsAAIAAhkIBkAAIAAksIhkAAIAAhkIksAAIAAkrIhkAAIAAjIIhkAAIAAhkIhkAAIAAhkIsfAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIhkAAIAAhkIjIAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAADIIBkAAIAABjIksAAIAABkIhkAAIAADIIhkAAgAkrImIAAhkIjIAAIAAhkIEsAAIAABkIDHAAIAAjIIhjAAIAAjIIErAAIAADIIhkAAIAADIIDIAAIAABkgAEsHCIAAhkIEsAAIAABkgAEsiVIAAhkIBkAAIAABkgAmPiVIAAhkIBkAAIAABkg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AmPNSIAAhkIhkAAIAAhkImQAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAjIIBkAAIAAhkIEsAAIAAhjIhkAAIAAjIIBkAAIAAjIIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAABkIhkAAIAADIIBkAAIAAhkIBkAAIAAhkIMfAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAAErIEsAAIAABkIBkAAIAAEsIhkAAIAABkIksAAIAABkIhkAAIAABkIhkAAIAABkgAnzFeIAABkIAABkIDIAAIAABkIK7AAIAAhkIDIAAIAAhkIBkAAIAAhkIhkAAIAAhkIhkAAIAAjIIjIAAIAAhjIDIAAIAAjIIhkAAIhkAAIhkAAIAADIImPAAIAAjIIhkAAIhkAAIhkAAIAADIIEsAAIAABjIhkAAIAABkIhkAAIAABkIhkAAgADIldIDIAAIAAhkIjIAAgAmPldIDIAAIAAhkIjIAAgAJYolIAAksIDIAAIAADIIhkAAIAABkg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("AkrBkIAAhkIhkAAIhkAAIAAhjIDIAAIAABjIJXAAIAAgxIAAgyIDIAAIAABjIhkAAIAABkg");
	this.shape_5.setTransform(0,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AGQEsIAAgyIBkAAIAAAygApXEsIAAgyIBkAAIAAAygAH0DIIAAhkIksAAIAAAyIAAAyIjIAAIAAjIIBkAAIAAjHIkrAAIAADHIBkAAIAADIIjIAAIAAhkIksAAIAAhkIBkAAIAAhjIBkAAIAAhkIBkAAIAAhkIGPAAIBkAAIAABkIDIAAIAADHIBkAAIAABkIBkAAIAABkg");
	this.shape_6.setTransform(10,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ApXPPIAAjIIBkAAIAABkIPnAAIAAhkIDIAAIAABkIhkAAIAABkgAK8MHIAAhkIBkAAIAAhkIBkAAIAAmQIBkAAIAAGQIhkAAIAADIgAK8MHgAuDLVIAAgyIABAAIAAgyIBjAAIAAAyIDIAAIAAAygAkrKjIAAhkIK7AAIAAhkIBkAAIAAAyIAAAyIhkAAIAABkgAmPI/IAAgyIAAgyIBkAAIAABkgAuCI/IAAn0IBjAAIAAH0gAH0HbIAAhkIjIAAIAAgyIEsAAIAABkIAAAygAkrHbIAAhkIjIAAIAAgyIEsAAIAABkIDHAAIAAjIIhjAAIAAjIIErAAIAADIIhkAAIAADIIDIAAIAAAygAkrHbgAMgCvIAAiWIhkAAIAAkrIhkAAIAAjIIhkAAIAAhkIhkAAIAAhkIsfAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIhkAAIAAhkIjIAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAADIIBkAAIAABjIhkAAIAAAyIhjAAIAAjHIgBAAIAAj6IBkAAIAAhkIjIAAIAAhkIhkAAIAAksIBkAAIAAhkIGQAAIAABkIBkAAIAABkIODAAIAAjIIGQAAIAAGQIjIAAIAAhkIBkAAIAAjIIjIAAIAAEsIBkAAIAADIIBkAAIAAEsIBkAAIAAAyIBkAAIAAAxIhkAAIAACWgAEsiuIAAhkIBkAAIAABkgAmPiuIAAhkIBkAAIAABkg");
	this.shape_7.setTransform(0,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AnzNrIAAhkIhkAAIAAgyIAAgyIjIAAIAAgyIhjAAIAAgyIBjAAIAAn0IABAAIBjAAIAAgyIBkAAIAAhjIhkAAIAAjIIBkAAIAAjIIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAABkIhkAAIAADIIBkAAIAAhkIBkAAIAAhkIMfAAIAABkIBkAAIAABkIBkAAIAADIIBkAAIAAErIBkAAIAACWIBkAAIAAGQIhkAAIAABkIhkAAIAABkIjIAAIAABkgAnzFFIAAAyIAABkIAAAyIBkAAIAAAyIBkAAIAABkIK7AAIAAhkIBkAAIAAgyIBkAAIAAgyIAAgyIBkAAIAAhkIhkAAIAAhkIhkAAIAAjIIjIAAIAAhjIDIAAIAAjIIhkAAIhkAAIhkAAIAADIImPAAIAAjIIhkAAIhkAAIhkAAIAADIIEsAAIAABjIhkAAIAABkIhkAAIAABkIhkAAgADIl2IDIAAIAAhkIjIAAgAmPl2IDIAAIAAhkIjIAAgAJYo+IAAksIDIAAIAADIIhkAAIAABkg");
	this.shape_8.setTransform(0,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF99").s().p("AmPFeIAAhkIjIAAIAAhkIDIAAIAABkIJXAAIAAhkIEsAAIAABkIjIAAIAABkgAH0CWIAAhkIBkAAIAABkgAH0CWgAAACWIAAjHIBkAAIAAjIIkrAAIAADIIBkAAIAADHIjIAAIAAhkIksAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIGPAAIBkAAIAABkIDIAAIAADIIBkAAIAABjIksAAIAABkg");
	this.shape_9.setTransform(10,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AnzO2IAAhkIhkAAIAAhkIksAAIAAhkIGQAAIAABkIBkAAIAABkIODAAIAAhkIBkAAIAAhkIBkAAIAAhkIEsAAIAAhkIBkAAIAAksIhkAAIAAhkIksAAIAAkrIhkAAIAAjIIhkAAIAAhkIhkAAIAAhkIsfAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIhkAAIAAhkIjIAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAADIIBkAAIAABjIksAAIAABkIhkAAIAADIIhkAAIAABkIBkAAIAABkIBkAAIAABkIjIAAIAAhkIhkAAIAAksIBkAAIAAjIIDIAAIAAhjIBkAAIAAksIBkAAIAAhkIjIAAIAAhkIhkAAIAAksIBkAAIAAhkIGQAAIAABkIBkAAIAABkIODAAIAAjIIGQAAIAAGQIjIAAIAAhkIBkAAIAAjIIjIAAIAAEsIBkAAIAADIIBkAAIAAEsIEsAAIAABjIBkAAIAAH0IhkAAIAABkIksAAIAABkIhkAAIAABkIhkAAIAABkgAkrImIAAhkIjIAAIAAhkIEsAAIAABkIDHAAIAAjIIhjAAIAAjIIErAAIAADIIhkAAIAADIIDIAAIAABkgAEsHCIAAhkIEsAAIAABkgAEsHCgAEsiVIAAhkIBkAAIAABkgAmPiVIAAhkIBkAAIAABkg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AkrBkIAAhkIJXAAIAAgxIAAgyIDIAAIAABjIhkAAIAABkgAmPAAIhkAAIAAhjIDIAAIAABjg");
	this.shape_11.setTransform(0,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ApXPPIAAjIIBkAAIAABkIPnAAIAAhkIDIAAIAABkIhkAAIAABkgAK8MHIAAhkIBkAAIAAhkIBkAAIAADIgAK8MHgAuDLVIAAgyIABAAIAAgyIBjAAIAAAyIDIAAIAAAygAkrKjIAAhkIhkAAIAAgyIAAgyIBkAAIAAhkIjIAAIAAgyIEsAAIAABkIDHAAIAAjIIhjAAIAAjIIErAAIAADIIhkAAIAADIIDIAAIAAAyIpXAAIAABkIK7AAIAAhkIBkAAIAAAyIAAAyIhkAAIAABkgAOEI/IAAmQIhkAAIAAiWIhkAAIAAkrIhkAAIAAjIIhkAAIAAhkIhkAAIAAhkIsfAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIhkAAIAAhkIjIAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAADIIBkAAIAABjIhkAAIAAAyIhjAAIAAjHIgBAAIAAj6IBkAAIAAhkIjIAAIAAhkIhkAAIAAksIBkAAIAAhkIGQAAIAABkIBkAAIAABkIODAAIAAjIIGQAAIAAGQIjIAAIAAhkIBkAAIAAjIIjIAAIAAEsIBkAAIAADIIBkAAIAAEsIBkAAIAAAyIBkAAIAAAxIhkAAIAACWIBkAAIAAGQgAOEI/gAuCI/IAAn0IBjAAIAAH0gAH0HbIAAhkIjIAAIAAgyIEsAAIAABkIAAAygAEsiuIAAhkIBkAAIAABkgAmPiuIAAhkIBkAAIAABkg");
	this.shape_12.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6},{t:this.shape_5}]},4).to({state:[{t:this.shape_4},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},5).to({state:[{t:this.shape_8},{t:this.shape_12},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6},{t:this.shape_11}]},5).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6},{t:this.shape_5}]},5).to({state:[{t:this.shape_4},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-95,240,195);


(lib.bear_chicken_bar_talking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABkBkIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkgAkrBkIAAhkIErAAIAABkg");
	this.shape.setTransform(160,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AolJYIAAhkIjIAAIAAq7IBkAAIAAmQIEsAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIDHAAIAAJXIhkAAIAABkIjHAAIAABkgAFeBkIAAjHIBkAAIAADHgAHChjIAAhkIBkAAIAABkgAHChjgAKKnzIAAhkIBkAAIAABkg");
	this.shape_1.setTransform(195,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkrCWIAAhkIhkAAIAAhjIBkAAIAABjIDIAAIHzAAIAABkgAGQAyIAAhjIBkAAIAABjgAnzgxIAAhkIBkAAIAABkg");
	this.shape_2.setTransform(210,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AnBK8IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIAAksIBkAAIAABkIK7AAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAEsIhjAAIgBAAIAABjIAAH0IhkAAIAABkIhkAAIAABkgAldpXIAAhkIDIAAIAABkgAolpXIAAhkIBkAAIAABkg");
	this.shape_3.setTransform(215,60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003366").s().p("ABkBkIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkgAjHBkIAAhkIBkAAIAABkgAkrAAIAAhjIBkAAIAABjg");
	this.shape_4.setTransform(20,240);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhjK8IAAhkIBjAAIAAhkIBkAAIAABkIAABkgAnzK8IAAhkIAAhkIBkAAIAABkIBkAAIAABkgAhjH0IAAjIIBjAAIAABkIAABkgAmPH0IAAhkIBkAAIAABkgABkDIIAAkrIBkAAIAABjIAADIgADIhjIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAGQkrIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAAEsg");
	this.shape_5.setTransform(40,190);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AmPH0IAAjIIhkAAIAAmPIhkAAIAAjIIBkAAIAABkIBkAAIAABkIDIAAIAAJXgAAAGQIAAnzIDIAAIAAhkIBkAAIAAhkIAAhkIBkAAIBkAAIAAEsIhkAAIAABjIhkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAEsgAH0mPIAAhkIBkAAIAABkg");
	this.shape_6.setTransform(30,170);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003399").s().p("AK8EsIAAhkIBkAAIAABkgAJYDIIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAABjIksAAIAABkIjHAAIAAhkIksAAIAAhjIBkAAIAAiWIAAgyIDIAAIAABkIBkAAIAABkIBjAAIAAhkIEsAAIAAhkIBkAAIAADIIBkAAIAABjIBkAAIAABkIBkAAIAABkgAsfDIIAAhkIBkAAIAABkgAq7BkIAAhkIBkAAIAABkg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333366").s().p("AjHK8IAAhkIksAAIAAgyIAAiWIhkAAIAAsfIhkAAIAABkIhkAAIAAgyIAAiWIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIDIAAIAABkIGPAAIAAhkIDIAAIAAhkIBkAAIBkAAIAABkIBkAAIAAhkIDIAAIAADIIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAAyIAAAyIhkAAIAAhkIhkAAIAABkIBkAAIAAErIBkAAIAAAyIAAEsIAAAyIjIAAIAADIIjIAAIAABkgAK8nzgAsfpXIAAhkIBkAAIAABkg");
	this.shape_8.setTransform(0,70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AiVAyIAAhjIErAAIAABjg");
	this.shape_9.setTransform(155,-65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("ANSMgIAAjIIhkAAIAAjIIBkAAIAABkIBkAAIAAEsgAtRMgIAAjIIhkAAIAAjIIBkAAIAABkIDIAAIAAhkIDIAAIAAEsIhkAAIAABkgAgxEsIAAhkIksAAIAAmPIAAhkIAAmQIBkAAIAAhkIK7AAIAABkIBkAAIAADIIBkAAIAAK7IjIAAIAABkgAj5mPIBkAAIAAhkIhkAAg");
	this.shape_10.setTransform(205,-40);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AAAAyIhjAAIAAhjIDHAAIAABjg");
	this.shape_11.setTransform(40,-105);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFCC").s().p("AhjDIIhkAAIAAkrIBkAAIAAhkIBjAAIAABkIAABjIhjAAIAABkIBjAAIAABkgAAABkIAAjHIBkAAIAAAAIBkAAIAADHg");
	this.shape_12.setTransform(60,-60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AD6AyIAAhjIBkAAIAABjgAldAyIAAhjIBkAAIAABjg");
	this.shape_13.setTransform(5,-135);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s().p("AhjJYIAAhkIhkAAIjIAAIAAgyIAAgyIhkAAIAAgyIAAgyIhkAAIAAgyIAAnzIAAgyIBkAAIAAgyIAAgyIBkAAIAAjIIBkAAIAABkIBkAAIGPAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAErIhkAAIAABkIhkAAIAAEsIBkAAIAABkIhkAAIhkAAIksAAIAABkgAEsjHIBkAAIAABkIBkAAIAAhkIAAhkIjIAAgAJYGQIAAhkIAAhkIAAhkIAAAAIAADIIAABkg");
	this.shape_14.setTransform(0.025,-80);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(110,60);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333366").s().p("AjHMgIAAhkIksAAIAAgyIAAiWIhkAAIAAsfIhkAAIAABkIhkAAIAAgyIAAj6IBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIDIAAIAABkIGPAAIAAhkIDIAAIAAhkIDIAAIDIAAIAABkIBkAAIAAD6IAAAyIhkAAIAAhkIhkAAIAABkIBkAAIAAErIBkAAIAAAyIAAEsIAAAyIjIAAIAADIIjIAAIAABkgAH0q7IAAhkIBkAAIAABkgApXq7IhkAAIAAhkIDIAAIAABkg");
	this.shape_16.setTransform(0,60);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006600").s().p("AnBK8IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIAAksIBkAAIAABkIK7AAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAEsIhjAAIgBAAIAABjIAAH0IhkAAIAABkIhkAAIAABkgAldpXIAAhkIDIAAIAABkg");
	this.shape_17.setTransform(215,60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("ANSMgIAAjIIhkAAIAAjIIBkAAIAABkIBkAAIAAEsgAtRMgIAAjIIDIAAIAAhkIAAAAIBkAAIAAhkIAAAAIBkAAIAAEsIhkAAIAABkgAu1JYIAAjIIBkAAIAADIgAgxEsIAAhkIksAAIAAmPIAAhkIAAmQIBkAAIAAhkIK7AAIAABkIBkAAIAADIIBkAAIAAK7IjIAAIAABkgAj5mPIBkAAIAAhkIhkAAg");
	this.shape_18.setTransform(205,-40);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AldBkIAAhkIhkAAIAAhjIBkAAIAABjIDIAAIHzAAIAABkgAFeAAIAAhjIBkAAIAABjg");
	this.shape_19.setTransform(215,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003399").s().p("AK8DIIAAhkIjIAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkgAjHDIIAAhkIksAAIAAhkIBkAAIAAjHIDIAAIAABkIBkAAIAABjIBjAAIAAhjIEsAAIAAhkIBkAAIAADHIhkAAIAABkIksAAIAABkgAsfDIIAAhkIBkAAIAABkgAq7BkIAAhkIBkAAIAABkg");
	this.shape_20.setTransform(0,-10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996600").s().p("AhjJYIAAhkIhkAAIjIAAIAAhkIhkAAIAAgyIAAgyIhkAAIAAgyIAAnzIAAgyIBkAAIAAgyIAAgyIBkAAIAAjIIBkAAIAABkIBkAAIGPAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIjIAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAAErIhkAAIAABkIhkAAIAAEsIBkAAIAABkIhkAAIhkAAIksAAIAABkgAJYGQIAAhkIAAhkIAAhkIAAAAIAADIIAABkg");
	this.shape_21.setTransform(0.025,-80);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("EABkAg0IAAjIIBkAAIAABkIEsAAIAAhkIksAAIAAhkIhkAAIAAhkIDIAAIAABkIGQAAIAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIhkAAIAABkIhkAAIAABkIBkAAIAABkgApXdsIAAhkIAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIBkAAIAABkIhkAAIAABkIBkAAIAADIgA0TdsIAAjIIBkAAIAABkIAABkgAAAakIAAuEIBkAAIAAjIIBkAAIAAGQIhkAAIAAK8gAxLakIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIDIAAIAABkgAnzXcIAAjIIBkAAIAADIgASwV4IAAhkIBkAAIAAjIIBkAAIAADIIhkAAIAABkgA13V4IAAksIhkAAIAAleIhkAAIAAgyIEsAAIAABkIJYAAIAABkIn0AAIhkAAIAAhkIhkAAIAADIIBkAAIAAGQgAmPUUIAAhkIBkAAIAABkgAkrSwIAAhkIAAhkIBkAAIAAksIAAhkIhkAAIhkAAIAABkIhkAAIAAjIIDIAAIBkAAIAABkIBkAAIAAGQIhkAAIAADIgAV4RMIAAhkIAAhkIBkAAIAADIgAXcOEIAAjIIhkAAIAAhkIBkAAIAAhkIBkAAIAAn0IABAAIAAhjIBjAAIAAMfIhkAAIAAhkIhkAAIAABkIBkAAIAADIgAXcOEgAK8MgIhkAAIAAhkIhkAAIAAhkIksAAIAAhkIBkAAIAApXIjIAAIAAhkIEsAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAABkIBkAAIAABkIMgAAIAABkgAq7MgIAAhkIDIAAIAABkgAZAK8gAV4K8gAnzK8gA6jKKIAAiWIhkAAIAAqJIhkAAIAAgyIBkAAIAAhkIBkAAIAAMfIBkAAIAACWgAkrHCIAAksIBkAAIAAEsgAmPBkIAAkrIhkAAIAAhkIBkAAIAABkIBkAAIAAErgAakhjIAAksIBkAAIAADIIBkAAIAAksIBkAAIAAEsIhkAAIAABkgAAAjHIAAjIIhjAAIAAjIIBjAAIAADIIBkAAIAAjIIBkAAIAABkIBkAAIAABkIjIAAIAADIgAkrj5IAAj6IAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAAHCgA/Pj5IAAnCIBkAAIAABkIAABkIAAD6gAH0krIAAksIhkAAIAAhkIAAAAIAAhkIBkAAIAAhkIAAAAIAAjIIjIAAIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAAGQIEsAAIAABkIjIAAIhkAAIAABkIAAEsgAZAmPIAAksIhkAAIhkAAIAAhkIDIAAIAAq8IhkAAIAAjIIBkAAIAADIIBkAAIAAMgIBkAAIAABkIhkAAIAADIgA13mPIAAhkIjIAAIAAhkIEsAAIAABkIDIAAIAAhkIEsAAIAABkIjIAAIAABkgAcInzIAAhkIBkAAIAABkgAEsnzIAAhkIBkAAIAABkgAOEpXIAAhkIH0AAIAABkgAAApXIAAhkIBkAAIAABkgAAApXgAsfpXIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIAABkgAsfpXgA6jpXIAAhkIBkAAIAABkgAyvq7IAAhkIBkAAIAABkgA4/q7IAAhkIjIAAIAAhkIDIAAIAAhkIBkAAIAABkIAADIgA9rq7IAAhkIBkAAIAABkgAxLsfIAAhkIEsAAIAABkgAxLsfgA0TsfIAAhkIBkAAIAABkgA8HsfgA6jwZIAAgyIBkAAIAAAygAkrxLIAAjIIhkAAIAAhkIAAAAIAABkIhkAAIAAAAIAAhkIAAksIBkAAIAADIIDIAAIAAGQgAkrxLgApXxLIAAhkIBkAAIAABkgA8Hx9IAAn0IBkAAIAAH0gAEs0TIAAhkIDIAAIAAksIBkAAIAAGQgAEs0TgAK813IAAhkIBkAAIAABkgAq73bIAAhkIBkAAIAABkgAV46jIAAhkIq8AAIAAhkIK8AAIAABkIBkAAIAABkgAJY6jIAAhkIBkAAIAABkgApX6jIAAhkIhkAAIAAhkIAAhkIBkAAIAADIIBkAAIAABkgA6j6jIAAgyIBkAAIAAAygAK88HgA4/8HIAAjIIBkAAIAADIgA0T9rIAAhkIGQAAIAABkgAsf/PIhkAAIAAhkIDIAAIAABkgAuD/PgA13/PIhkAAIAAhkIDIAAIAABkg");
	this.shape_22.setTransform(110,60);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCCFF").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_23.setTransform(55,-51);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("ABkBkIAAhkIBkAAIAABkgAkrBkIAAhkIErAAIAABkgADIAAIAAhjIBkAAIAABjgADIAAg");
	this.shape_24.setTransform(160,250);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkrCWIAAhkIhkAAIAAhjIhkAAIAAhkIBkAAIAABkIBkAAIAABjIDIAAIHzAAIAABkgAGQAyIAAhjIBkAAIAABjgAGQAyg");
	this.shape_25.setTransform(210,-5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006600").s().p("AnBK8IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAABkIK7AAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAEsIhjAAIgBAAIAABjIAAH0IhkAAIAABkIhkAAIAABkgAldpXIAAhkIDIAAIAABkg");
	this.shape_26.setTransform(215,60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003366").s().p("ABkBkIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkgAjHBkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkg");
	this.shape_27.setTransform(20,240);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhjK8IAAhkIBjAAIAAhkIBkAAIAABkIAABkgAnzK8IAAhkIAAhkIBkAAIAABkIBkAAIAABkgAhjH0IAAjIIBjAAIAABkIAABkgAmPH0IAAhkIBkAAIAABkgABkDIIAAkrIBkAAIAABjIAADIgADIhjIAAhkIBkAAIAABkgAEsjHIAAhkIBkAAIAABkgAGQkrIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAAEsg");
	this.shape_28.setTransform(40,190);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AmPH0IAAjIIhkAAIAAmPIhkAAIAAjIIBkAAIAABkIBkAAIAABkIDIAAIAAJXgAAAGQIAAnzIDIAAIAAhkIBkAAIAAhkIAAhkIBkAAIBkAAIAAEsIhkAAIAABjIBkAAIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAAEsgAGQBkgAH0mPIAAhkIBkAAIAABkg");
	this.shape_29.setTransform(30,170);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003399").s().p("AK8FeIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAsfD6IAAhkIBkAAIAABkgAH0CWIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAjHCWIAAhkIksAAIAAhjIBkAAIAAhkIhkAAIAAjIIDIAAIAABkIJXAAIAABkIBkAAIAABkIhkAAIAABjIksAAIAABkgAq7CWIAAhkIBkAAIAABkgAq7CWg");
	this.shape_30.setTransform(0,-5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333366").s().p("AjHK8IAAhkIksAAIAAgyIAAiWIhkAAIAAsfIhkAAIAABkIhkAAIAAgyIAAiWIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIDIAAIAABkIGPAAIAAhkIDIAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAAAyIAAAyIhkAAIAAErIBkAAIAAAyIAAEsIAAAyIjIAAIAADIIjIAAIAABkgAK8nzIAAhkIhkAAIAAhkIDIAAIAADIgAJYpXgAsfpXIAAhkIBkAAIAABkg");
	this.shape_31.setTransform(0,70);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFCC").s().p("AAACWIAAjHIBkAAIAAAAIBkAAIAADHgAjHCWIAAjHIBkAAIAAhkIBjAAIAABkIAABjIhjAAIAABkg");
	this.shape_32.setTransform(60,-71);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#996600").s().p("AkrISIAAhkIjIAAIAAhkIhkAAIAAgKIAAnzIAAgyIBkAAIAAgyIAAgyIBkAAIAAjIIBkAAIAABkIBkAAIGPAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIjIAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAAErIhkAAIAABkIhkAAIAADIIAABkIBkAAIAAA8gAJYHWIAAhkIAAhkIAAhkIAAAAIAADIIAABkg");
	this.shape_33.setTransform(0.025,-93);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("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");
	this.shape_34.setTransform(110,57);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AldBkIAAhkIDIAAIHzAAIAAhjIBkAAIAABjIhkAAIAABkgAnBAAIAAhjIBkAAIAABjg");
	this.shape_35.setTransform(215,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#996600").s().p("AhjJYIAAhkIhkAAIjIAAIAAhkIhkAAIAAgyIAAgyIhkAAIAAgyIAAnzIAAgyIBkAAIAAgyIAAgyIBkAAIAAjIIBkAAIAABkIBkAAIGPAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAErIhkAAIAABkIhkAAIAAEsIBkAAIAABkIhkAAIhkAAIksAAIAABkgAEsjHIBkAAIAABkIBkAAIAAhkIAAhkIjIAAgAJYGQIAAhkIAAhkIAAhkIAAAAIAADIIAABkg");
	this.shape_36.setTransform(0.025,-80);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("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");
	this.shape_37.setTransform(110,60);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003399").s().p("AK8FeIAAhkIBkAAIAABkgAJYD6IAAhkIBkAAIAABkgAsfD6IAAhkIBkAAIAABkgAH0CWIAAhkIhkAAIAAhjIhkAAIAABjIksAAIAABkIjHAAIAAhkIksAAIAAhjIBkAAIAAhkIhkAAIAAjIIDIAAIAABkIJXAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAABkgAq7CWIAAhkIBkAAIAABkgAq7CWg");
	this.shape_38.setTransform(0,-5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333366").s().p("AjHK8IAAhkIksAAIAAgyIAAiWIhkAAIAAsfIhkAAIAABkIhkAAIAAgyIAAiWIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIDIAAIAABkIGPAAIAAhkIDIAAIAAhkIBkAAIBkAAIAABkIBkAAIAAhkIDIAAIAADIIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAAyIAAAyIhkAAIAAhkIhkAAIAABkIBkAAIAAErIBkAAIAAAyIAAEsIAAAyIjIAAIAADIIjIAAIAABkgAK8nzg");
	this.shape_39.setTransform(0,70);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("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");
	this.shape_40.setTransform(110,57);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003399").s().p("AK8FeIAAhkIBkAAIAABkgAJYD6IAAhkIhkAAIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkIBkAAIAABkgAsfD6IAAhkIBkAAIAABkgAjHCWIAAhkIksAAIAAhjIBkAAIAAhkIhkAAIAAjIIDIAAIAABkIJXAAIAABkIBkAAIAABkIhkAAIAABjIksAAIAABkgAq7CWIAAhkIBkAAIAABkgAq7CWg");
	this.shape_41.setTransform(0,-5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333366").s().p("AjHK8IAAhkIksAAIAAgyIAAiWIhkAAIAAsfIhkAAIAABkIhkAAIAAgyIAAiWIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIDIAAIAABkIGPAAIAAhkIDIAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAAAyIAAAyIhkAAIAAErIBkAAIAAAyIAAEsIAAAyIjIAAIAADIIjIAAIAABkgAK8nzIAAhkIhkAAIAAhkIDIAAIAADIgAK8nzgAsfpXIAAhkIBkAAIAABkg");
	this.shape_42.setTransform(0,70);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AjHCWIAAhkIBkAAIAABkgAhjAyIAAhjIErAAIAABjgAjHgxIAAhkIBkAAIAABkg");
	this.shape_43.setTransform(150,-65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("EABkAg0IAAjIIBkAAIAABkIEsAAIAAhkIksAAIAAhkIhkAAIAAhkIhkAAIAAuEIBkAAIAAjIIBkAAIAAGQIhkAAIAAK8IDIAAIAABkIGQAAIAAhkIDIAAIAABkIhkAAIhkAAIAABkIhkAAIAABkIBkAAIAABkgApXdsIAAhkIAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIBkAAIAABkIhkAAIAABkIBkAAIAADIgA0TdsIAAjIIBkAAIAABkIAABkgAOEakIAAhkIBkAAIAABkgAxLakIhkAAIAAhkIDIAAIAABkgAyvakgA0TZAIAAjIIhkAAIAAksIhkAAIAAleIhkAAIAAgyIEsAAIAABkIhkAAIAADIIBkAAIAAGQIBkAAIAADIgAnzXcIAAjIIBkAAIAADIgASwV4IAAhkIBkAAIAABkgAUUUUIAAjIIBkAAIAAhkIAAhkIBkAAIAADIIhkAAIAADIgAUUUUgAmPUUIAAhkIBkAAIAABkgAkrSwIAAhkIAAhkIBkAAIAAksIAAhkIBkAAIAAGQIhkAAIAADIgAXcOEIAAjIIhkAAIAABkIq8AAIhkAAIAAhkIMgAAIAAhkIBkAAIAABkIBkAAIAADIgAyvOEIhkAAIAAhkIJYAAIAABkgAq7MgIAAhkIDIAAIAABkgAq7MggAZAK8IAAhkIhkAAIAAhkIBkAAIAAn0IABAAIAAhjIBjAAIAAksIBkAAIAADIIBkAAIAAksIBkAAIAAEsIhkAAIAABkIjIAAIAAMfgAH0K8IAAhkIksAAIAAhkIBkAAIAApXIjIAAIAAhkIhkAAIAAjIIhjAAIAAjIIBjAAIAADIIBkAAIAADIIEsAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAABkIBkAAIAABkgAnzK8IAAjIIDIAAIBkAAIAABkIhkAAIhkAAIAABkgAnzK8gA6jKKIAAiWIBkAAIAACWgADIJYgA8HH0IAAqJIhkAAIAAgyIBkAAIAAhkIBkAAIAAMfgAkrHCIAAksIBkAAIAAEsgAmPBkIAAkrIhkAAIAAhkIBkAAIAABkIBkAAIAAErgAkrj5IAAj6IAAhkIhkAAIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAAHCgA/Pj5IAAnCIBkAAIAABkIAABkIAAD6gAH0krIAAksIhkAAIAAhkIAAAAIAAhkIBkAAIAAhkIAAAAIAAjIIjIAAIAAhkIEsAAIAAGQIEsAAIAABkIjIAAIhkAAIAABkIAAEsgAZAmPIAAksIhkAAIhkAAIAAhkIDIAAIAAq8IhkAAIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIAADIIBkAAIAAMgIBkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAADIgABkmPIAAjIIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgABkmPgA13mPIAAhkIjIAAIAAhkIEsAAIAABkIDIAAIAAhkIEsAAIAABkIjIAAIAABkgAEsnzIAAhkIBkAAIAABkgAOEpXIAAhkIH0AAIAABkgAsfpXIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIAABkgAsfpXgA6jpXIAAhkIBkAAIAAhkIjIAAIAAhkIDIAAIAAhkIBkAAIAABkIAADIIhkAAIAABkgAyvq7IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgA9rq7IAAhkIBkAAIAABkgAxLsfIAAhkIEsAAIAABkgAxLsfgA8HsfgADIvnIAAhkIBkAAIAABkgA6jwZIAAgyIBkAAIAAAygAkrxLIAAjIIhkAAIAAhkIAAAAIAABkIhkAAIAAAAIAAhkIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAADIIDIAAIAAGQgApXxLIAAhkIBkAAIAABkgA8Hx9IAAn0IBkAAIAAH0gAEs0TIAAAAIAAhkIhkAAIAAhkIDIAAIAABkIBkAAIAAksIBkAAIAAGQgAK813IAAhkIBkAAIAABkgAq73bIAAhkIBkAAIAABkgAJY6jIAAhkIBkAAIAABkgA6j6jIAAgyIBkAAIAAAygAK88HIAAhkIK8AAIAABkgAq78HIAAhkIAAhkIBkAAIAADIgA4/8HIAAjIIBkAAIAADIgA0T9rIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIGQAAIAABkgAsf/PIhkAAIAAhkIDIAAIAABkgAuD/Pg");
	this.shape_44.setTransform(110,60);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003399").s().p("AK8EsIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAsfDIIAAhkIBkAAIAABkgAH0BkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAjHBkIAAhkIksAAIAAhjIBkAAIAAiWIAAgyIDIAAIAABkIBkAAIAABkIBjAAIAAhkIEsAAIAAhkIBkAAIAADIIhkAAIAABjIksAAIAABkgAq7BkIAAhkIBkAAIAABkgAq7Bkg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("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");
	this.shape_46.setTransform(110,60);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("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");
	this.shape_47.setTransform(110,60);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003399").s().p("AK8EsIAAhkIBkAAIAABkgAJYDIIAAhkIBkAAIAABkgAsfDIIAAhkIBkAAIAABkgAH0BkIAAhkIhkAAIAAhjIhkAAIAABjIksAAIAABkIjHAAIAAhkIksAAIAAhjIBkAAIAAiWIAAgyIDIAAIAABkIBkAAIAABkIBjAAIAAhkIEsAAIAAhkIBkAAIAADIIBkAAIAABjIBkAAIAABkgAq7BkIAAhkIBkAAIAABkgAq7Bkg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("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");
	this.shape_49.setTransform(110,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:-135}},{t:this.shape_12},{t:this.shape_11,p:{y:-105}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_5},{t:this.shape_6},{t:this.shape},{t:this.shape_4}]},4).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_13,p:{y:-141}},{t:this.shape_32},{t:this.shape_11,p:{y:-111}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23}]},5).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_9},{t:this.shape_35},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_28},{t:this.shape_29},{t:this.shape_24},{t:this.shape_27}]},5).to({state:[{t:this.shape_40},{t:this.shape_33},{t:this.shape_13,p:{y:-141}},{t:this.shape_32},{t:this.shape_11,p:{y:-111}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_39},{t:this.shape_38},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_23}]},5).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_5},{t:this.shape_6},{t:this.shape},{t:this.shape_4}]},5).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_13,p:{y:-141}},{t:this.shape_32},{t:this.shape_11,p:{y:-111}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_42},{t:this.shape_41},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23}]},5).to({state:[{t:this.shape_44},{t:this.shape_36},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_43},{t:this.shape_35},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_28},{t:this.shape_29},{t:this.shape_24},{t:this.shape_27}]},5).to({state:[{t:this.shape_46},{t:this.shape_14},{t:this.shape_13,p:{y:-135}},{t:this.shape_12},{t:this.shape_11,p:{y:-105}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_45},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_1},{t:this.shape_24}]},5).to({state:[{t:this.shape_47},{t:this.shape_21},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_43},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_5},{t:this.shape_6},{t:this.shape},{t:this.shape_4}]},5).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:-135}},{t:this.shape_12},{t:this.shape_11,p:{y:-105}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_39},{t:this.shape_48},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_49},{t:this.shape_36},{t:this.shape_13,p:{y:-135}},{t:this.shape_11,p:{y:-105}},{t:this.shape_12},{t:this.shape_20},{t:this.shape_43},{t:this.shape_35},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16},{t:this.shape_28},{t:this.shape_29},{t:this.shape_24},{t:this.shape_27}]},5).to({state:[{t:this.shape_46},{t:this.shape_14},{t:this.shape_13,p:{y:-135}},{t:this.shape_12},{t:this.shape_11,p:{y:-105}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_45},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_1},{t:this.shape_24}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-156,400,426);


(lib.bartender = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AvOR+IAAhkIhkAAIAAksIBkAAIAAhkIBkAAIAAhkIBkAAIAAmQIBkAAIAAhkIDIAAIAAhjIBkAAIAAjIIhkAAIAAn0IBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIHzAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAAJYIhkAAIAABkIhkAAIAABkIBkAAIAABjIBkAAIAAD6IAyAAIAAAyIAyAAIAAAyIAyAAIAABkIBkAAIAAEsIBkAAIAADIIhkAAIAABkIksAAIAAhkIBkAAIAAhkIq8AAIAAgyItRAAIAADIIhkAAIAABkg");
	this.shape.setTransform(12.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvOR+IAAhkIhkAAIAAksIBkAAIAAhkIBkAAIAAhkIBkAAIAAgyICWAAIAAksIBkAAIAAiWIAyAAIAAhjIBkAAIAAjIIhkAAIAAn0IBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIHzAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAAJYIhkAAIAABkIhkAAIAABkIBkAAIAABjIBkAAIAACWIAyAAIAABkIDIAAIAADIIBkAAIAAGQIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIksAAIAABkImQAAIAAgyItRAAIAADIIhkAAIAABkg");
	this.shape_1.setTransform(12.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AF3R+IAAksIksAAIAAgyItRAAIAADIIhkAAIAABkIhkAAIAAhkIhkAAIAAksIBkAAIAAhkIBkAAIAAgyIgyAAIAAmQIBkAAIAAhkIDIAAIAAhjIBkAAIAAjIIhkAAIAApYIBkAAIAAhkIBkAAIAAjIIODAAIAADIIBkAAIAALuIgyAAIAABkIBkAAIAABjIBkAAIAACWIAyAAIAABkIDIAAIAADIIBkAAIAAGQIhkAAIAABkIksAAIAADIgApwHCIAAAAIAAhkIAAAAgAoMCWIAAAAIAAhkIAAAAg");
	this.shape_2.setTransform(12.5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AtRQaIAAhkIhkAAIAAhkIhkAAIAAn0IBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIBkAAIAAjHIhkAAIAApYIBkAAIAAhkIBkAAIAAjIIODAAIAADIIBkAAIAALuIgyAAIAABjIBkAAIAABkIBkAAIAACWICWAAIAABkIBkAAIAABkIBkAAIAAEsIhkAAIAADIIuEAAIAAgyIjHAAIAAAyIhkAAIAABkgAtRNSIABAAIAAjIIgBAAgAqJImIAAAAIAAhkIAAAAgAolD6IAAAAIAAhkIAAAAg");
	this.shape_3.setTransform(15,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AtRQaIAAhkIhkAAIAAhkIhkAAIAApYIBkAAIAAhkIBkAAIAAhkIEsAAIAAjHIhkAAIAApYIBkAAIAAhkIBkAAIAAjIIODAAIAADIIBkAAIAALuIgyAAIAAAyID6AAIAABjIBkAAIAABkIBkAAIAAEsIBkAAIAAEsIhkAAIAADIIuEAAIAAgyIjHAAIAAAyIhkAAIAABkgAtRNSIABAAIAAjIIgBAAgAqJImIAAAAIAAhkIAAAAgAolD6IAAAAIAAhkIAAAAg");
	this.shape_4.setTransform(15,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-115,215,235);


(lib.bar_sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AtRJYIAAhkIjIAAIAAjIIhkAAIAApXIBkAAIAAjIIBkAAIAADIIhkAAIAAJXIBkAAIAABkIBkAAIAABkIajAAIAABkgANSH0IAAhkIBkAAIAAhkIBkAAIAADIgAQaEsIAApXIhkAAIAAhkIhkAAIAAhkIDIAAIAADIIBkAAIAAJXgAQaEsgAtRnzIAAhkIajAAIAABkg");
	this.shape.setTransform(-35,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330066").s().p("AtRH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIajAAIAABkIBkAAIAABkIBkAAIAAJXIhkAAIAABkIhkAAIAABkgAImAAIAAEsIBkAAIAAksIhkAAIAAhjIjIAAIAAjIIDIAAIAADIIBkAAIAAjIIhkAAIAAhkIksAAIhkAAIAABkIhkAAIAAhkIjHAAIhkAAIAABkIhkAAIhkAAIAAhkIjIAAIhkAAIAABkIhkAAIAAJXIBkAAIEsAAIAAhkIjIAAIAAjIIDIAAIAADIIBkAAIAABkIBkAAIBkAAIAAksIDHAAIAAEsIBkAAIBkAAIBkAAIAAksgAiVhjIAAjIIDHAAIAADIgAqJhjIAAjIIDIAAIAADIg");
	this.shape_1.setTransform(-35,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AHCFeIAApXIAAhkIBkAAIAAK7gAgxFeIAAhkIAAjIIAAhjIAAjIIBjAAIAAJXgAolFeIAApXIBkAAIAAhkIBkAAIAABkIhkAAIAAJXgAAyj5IAAhkIBkAAIAABkg");
	this.shape_2.setTransform(-65,-35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0099").s().p("AJYFeIAAksIjIAAIAAEsIhkAAIAAq7IEsAAIAABkIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABjIBkAAIAAEsgABkFeIAAksIjHAAIAAEsIhkAAIAApXIBkAAIAADIIDHAAIAAjIIjHAAIAAhkIDHAAIAABkIBkAAIAAJXgAq7FeIAApXIBkAAIAADIIDIAAIAABjIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABkgAmPgxIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgAmPgxg");
	this.shape_3.setTransform(-40,-35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AtRK8IAAhkIjIAAIAAhkIhkAAIAAjIIhkAAIAAq7IBkAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAADIIDIAAIAABkIajAAIAAhkIDIAAIAABkIjIAAIAABkgAQaH0IAAjIIBkAAIAADIgAR+EsIAApXIBkAAIAAJXgAR+EsgAQakrIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgAu1nzIhkAAIAAhkIDIAAIAABkgAtRpXIAAhkIajAAIAABkgAtRpXg");
	this.shape_4.setTransform(-35,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0099").s().p("AJYFeIAAksIjIAAIAAEsIhkAAIAAq7IEsAAIAABkIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABjIBkAAIAAEsgABkFeIAAksIjHAAIAAEsIhkAAIAApXIBkAAIAAhkIDHAAIAABkIBkAAIAAJXgAhjgxIDHAAIAAjIIjHAAgAq7FeIAApXIBkAAIAADIIDIAAIAABjIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABkgAmPgxIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgAmPgxg");
	this.shape_5.setTransform(-40,-35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330066").s().p("AtRH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIajAAIAABkIBkAAIAABkIBkAAIAAJXIhkAAIAABkIhkAAIAABkgAImAAIAAEsIBkAAIAAksIhkAAIAAhjIBkAAIAAjIIhkAAIAAhkIksAAIhkAAIAABkIhkAAIAAhkIjHAAIhkAAIAABkIhkAAIhkAAIAAhkIjIAAIhkAAIAABkIhkAAIAAJXIBkAAIEsAAIAAhkIBkAAIAABkIBkAAIBkAAIAAksIDHAAIAAEsIBkAAIBkAAIBkAAIAAksgAqJDIIAAjIIDIAAIAADIgAFehjIAAjIIDIAAIAADIgAiVhjIAAjIIDHAAIAADIgAqJhjIAAjIIDIAAIAADIg");
	this.shape_6.setTransform(-35,-30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AtRJYIAAhkIjIAAIAAjIIhkAAIAApXIBkAAIAAjIIBkAAIAADIIhkAAIAAJXIBkAAIAABkIBkAAIAABkIajAAIAABkgANSH0IAAhkIBkAAIAAhkIBkAAIAADIgAQaEsIAApXIhkAAIAAhkIhkAAIAAhkI6jAAIAAhkIajAAIAABkIDIAAIAADIIBkAAIAAJXgAQaEsgACWEsIAApXIAAhkIBkAAIAAK7gAldEsIAAhkIAAjIIAAhjIAAjIIBkAAIAAJXgAtREsIAApXIBkAAIAAJXgAj5krIAAhkIBkAAIAABkgArtkrIAAhkIBkAAIAABkg");
	this.shape_7.setTransform(-35,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AtRK8IAAhkIjIAAIAAhkIhkAAIAAjIIhkAAIAAq7IBkAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAADIIDIAAIAABkIajAAIAAhkIDIAAIAABkIjIAAIAABkgAQaH0IAAjIIBkAAIAADIgAR+EsIAApXIhkAAIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAAJXgAR+EsgAu1nzIhkAAIAAhkIDIAAIAABkgAtRpXIAAhkIajAAIAABkgAtRpXg");
	this.shape_8.setTransform(-35,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AtRJYIAAhkIjIAAIAAjIIBkAAIAABkIBkAAIAABkIajAAIAABkgANSH0IAAhkIBkAAIAAhkIBkAAIAADIgANSH0gAQaEsIAApXIhkAAIAAhkIhkAAIAAhkI6jAAIAAhkIajAAIAABkIDIAAIAADIIBkAAIAAJXgAQaEsgAx9EsIAApXIBkAAIAAJXgAwZkrIAAjIIBkAAIAADIg");
	this.shape_9.setTransform(-35,-30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330066").s().p("AtRH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIajAAIAABkIBkAAIAABkIBkAAIAAJXIhkAAIAABkIhkAAIAABkgAImEsIBkAAIAAksIhkAAgAAyAAIAAEsIBkAAIBkAAIBkAAIAAksIDIAAIAAhjIBkAAIAAjIIhkAAIAAhkIksAAIhkAAIAABkIhkAAIAAhkIjHAAIhkAAIAABkIhkAAIhkAAIAAhkIjIAAIhkAAIAABkIhkAAIAAJXIBkAAIEsAAIAAhkIBkAAIAABkIBkAAIBkAAIAAksgAqJDIIAAjIIDIAAIAADIgAFehjIAAjIIDIAAIAADIgAiVhjIAAjIIDHAAIAADIgAqJhjIAAjIIDIAAIAADIgAImkrgAnBkrg");
	this.shape_10.setTransform(-35,-30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("AHCFeIAApXIAAhkIBkAAIAAK7gAgxFeIAAhkIAAjIIAAhjIAAjIIBjAAIAAJXgAolFeIAApXIBkAAIAAJXgAAyj5IAAhkIBkAAIAABkgAAyj5gAnBj5IAAhkIBkAAIAABkg");
	this.shape_11.setTransform(-65,-35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0099").s().p("AJYFeIAAksIBkAAIAAEsgAEsFeIAAq7IEsAAIAABkIjIAAIAADIIDIAAIAABjIjIAAIAAEsgABkFeIAAksIjHAAIAAEsIhkAAIAApXIBkAAIAADIIDHAAIAAjIIjHAAIAAhkIDHAAIAABkIBkAAIAAJXgAq7FeIAApXIBkAAIAAhkIDIAAIAABkIjIAAIAADIIDIAAIAAjIIBkAAIAADIIhkAAIAABjIjIAAIAADIIDIAAIAAjIIBkAAIAADIIhkAAIAABkgAJYgxIAAjIIBkAAIAADIgAJYgxgAhjj5g");
	this.shape_12.setTransform(-40,-35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AtRK8IAAhkIjIAAIAAhkIhkAAIAAjIIhkAAIAAq7IBkAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAADIIDIAAIAABkIajAAIAABkgANSJYIAAhkIDIAAIAABkgAQaH0IAAjIIBkAAIAADIgAR+EsIAApXIhkAAIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIIBkAAIAAJXgAR+EsgAu1nzIhkAAIAAhkIDIAAIAABkgAwZnzgAtRpXIAAhkIajAAIAABkgAtRpXg");
	this.shape_13.setTransform(-35,-30);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0099").s().p("AJYFeIAAksIBkAAIAAEsgAEsFeIAAq7IEsAAIAABkIjIAAIAADIIDIAAIAABjIjIAAIAAEsgABkFeIAAksIjHAAIAAEsIhkAAIAApXIBkAAIAADIIDHAAIAAjIIjHAAIAAhkIDHAAIAABkIBkAAIAAJXgAq7FeIAApXIBkAAIAAhkIDIAAIAABkIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABjIBkAAIAADIIhkAAIAAjIIjIAAIAADIIDIAAIAABkgAmPD6gAJYgxIAAjIIBkAAIAADIgAJYgxgAmPgxgAhjj5g");
	this.shape_14.setTransform(-40,-35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330066").s().p("AtRH0IAAhkIhkAAIAAhkIhkAAIAApXIBkAAIAAjIIBkAAIajAAIAABkIBkAAIAABkIBkAAIAAJXIhkAAIAABkIhkAAIAABkgAImEsIBkAAIAAksIhkAAgAAyAAIAAEsIBkAAIBkAAIBkAAIAAksIDIAAIAAhjIBkAAIAAjIIhkAAIAAhkIksAAIhkAAIAABkIhkAAIAAhkIjHAAIhkAAIAABkIhkAAIhkAAIAAhkIjIAAIhkAAIAABkIhkAAIAAJXIBkAAIEsAAIAAhkIBkAAIAABkIBkAAIBkAAIAAksgAqJDIIAAjIIDIAAIAADIgAFehjIAAjIIDIAAIAADIgAiVhjIAAjIIDHAAIAADIgAqJhjIAAjIIDIAAIAADIgAImkrg");
	this.shape_15.setTransform(-35,-30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AtRJYIAAhkIajAAIAABkgANSH0IAAhkIBkAAIAAhkIBkAAIAADIgANSH0gAwZH0IAAjIIhkAAIAApXIBkAAIAAJXIBkAAIAABkIBkAAIAABkgAQaEsIAApXIhkAAIAAhkIhkAAIAAhkIDIAAIAADIIBkAAIAAJXgAQaEsgACWEsIAApXIAAhkIBkAAIAAK7gAldEsIAAhkIAAjIIAAhjIAAjIIBkAAIAAJXgAtREsIAApXIBkAAIAAJXgAj5krIAAhkIBkAAIAABkgAj5krgArtkrIAAhkIBkAAIAABkgArtkrgAwZkrIAAjIIBkAAIAADIgAtRnzIAAhkIajAAIAABkg");
	this.shape_16.setTransform(-35,-30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AtRK8IAAhkIjIAAIAAhkIhkAAIAAjIIhkAAIAAq7IBkAAIAAhkIBkAAIAADIIhkAAIAAJXIBkAAIAADIIDIAAIAABkIajAAIAABkgANSJYIAAhkIDIAAIAABkgAQaH0IAAjIIBkAAIAADIgAR+EsIAApXIBkAAIAAJXgAR+EsgAQakrIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgAu1nzIhkAAIAAhkIDIAAIAABkgAwZnzgAtRpXIAAhkIajAAIAABkg");
	this.shape_17.setTransform(-35,-30);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AtRJYIAAhkIjIAAIAAjIIhkAAIAApXIBkAAIAAJXIBkAAIAABkIBkAAIAABkIajAAIAABkgANSH0IAAhkIBkAAIAAhkIBkAAIAADIgANSH0gAQaEsIAApXIhkAAIAAhkIhkAAIAAhkIDIAAIAADIIBkAAIAAJXgAQaEsgAwZkrIAAjIIBkAAIAADIgAtRnzIAAhkIajAAIAABkg");
	this.shape_18.setTransform(-35,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_18},{t:this.shape_10},{t:this.shape_12},{t:this.shape_11}]},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-100,250,140);


(lib.door_knob = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.door_knot_shape("synched",0);
	this.instance.setTransform(-10,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:44.9994,x:-9.95},9).to({rotation:0,x:-9.9,y:-30.05},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-88.3,116.6,116.6);


(lib.window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("综合环境音效包汽车驶过大街上车辆很多马路公路环境音_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333366").s().p("ABkK8IAAn0IGQAAIAAH0gAnzK8IAAn0IEsAAIAAH0gABkhjIAApYIGQAAIAAJYgAnzhjIAApYIEsAAIAAJYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsfPoIAA6jIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIPnAAIAABkIvnAAIAABkIhkAAIAABkIBkAAIAAJYIEsAAIAApYIksAAIAAhkIPnAAIAAhkIBkAAIAABkIhkAAIAABkImQAAIAAJYIGQAAIAApYIBkAAIAAhkIBkAAIAABkIBkAAIAAajgAq7OEIV3AAIAA4/IhkAAIAAXbIyvAAIAA3bIhkAAgABkK8IGQAAIAAn0ImQAAgAhjK8IBjAAIAAn0IhjAAgAnzK8IEsAAIAAn0IksAAgAnzBkIPnAAIAAhkIvnAAgAhjhjIBjAAIAApYIhjAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Aq7OEIAA4/IBkAAIAAXbISvAAIAA3bIBkAAIAAY/gAhjK8IAAn0IBjAAIAAH0gAnzBkIAAhkIPnAAIAABkgAhjhjIAApYIBjAAIAAJYgAH0q7IAAhkIvnAAIAAhkIPnAAIAABkIBkAAIAABkgApXq7IAAhkIBkAAIAABkgApXq7gAnzsfg");

	this.text = new cjs.Text("MY APPARTMENT BUIDLING IS NEXT TO THE ROAD, I ALWAYS HEAR THE TRAFFIC NOISES, SOMETIME I CAN'T EVEN GET SLEEP...", "9px 'Segoe Script'", "#FFFF00");
	this.text.lineHeight = 16;
	this.text.lineWidth = 241;
	this.text.parent = this;
	this.text.setTransform(-338,-2.05);

	this.instance = new lib.text_background("synched",0);
	this.instance.setTransform(-228.45,30.15,1.1611,1.7391,0,0,0,0,0.1);

	this.instance_1 = new lib.noisessymbol();
	this.instance_1.setTransform(-125.5,-105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333366").s().p("ABlK8IAAhkIGPAAIAABkgAnzK8IAAhkIGQAAIAAAAIDHAAIAABkgABkEsIAAksIGQAAIAADIIAABkgAnzEsIAAksIEsAAIAABkIAADIgABkkrIAAmQIGQAAIAAGQgAnzkrIAAmQIEsAAIAAGQg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AsfPoIAA6jIBkAAIAAY/IV3AAIAA4/IBkAAIAAajgApXMgIAA3bIBkAAIAAhkIhkAAIAABkIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIPnAAIAABkIvnAAIAABkIPnAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAAXbgAnzK8IJXAAIABAAIGPAAIAAhkImPAAIgBAAIjHAAIAAhkIJXAAIAAhkIn0AAIAAksIABAAIAAhkIgBAAIhjAAIAAGQImQAAIAABkIGQAAIAABkImQAAgABkEsIGQAAIAAhkIAAAAIAAjIIAAAAImQAAgAnzEsIEsAAIAAjIIAAAAIAAhkIAAAAIksAAgAnzhjIGQAAIAAAAIErAAIABAAIErAAIAAhkIkrAAIgBAAIkrAAIAAAAImQAAgABkkrIGQAAIAAmQImQAAgAhjkrIBjAAIAAmQIhjAAgAnzkrIEsAAIAAmQIksAAgAJYq7IAAhkIBkAAIAABkgAq7q7g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Aq7OEIAA4/IBkAAIAAhkIBkAAIAABkIhkAAIAAXbISvAAIAA3bIhkAAIAAhkIBkAAIAABkIBkAAIAAY/gAhjH0IAAAAImQAAIAAhkIGQAAIAAmQIBjAAIAABkIAAEsIH0AAIAABkgADJhjIAAhkIErAAIAABkgAhjhjIAAhkIErAAIAABkgAnzhjIAAhkIGQAAIAABkgAhjkrIAAmQIBjAAIAAGQgAnzsfIAAhkIPnAAIAABkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.instance},{t:this.text}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.9,-100,430.9,200);


(lib.walking_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjAyIAAhjIDHAAIAABjg");
	this.shape.setTransform(30,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAABkIAAhkIEsAAIAABkgAkrAAIAAhjIDIAAIAABjg");
	this.shape_1.setTransform(-20,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjHD6IAAhkIErAAIAAhkIkrAAIAABkIksAAIAAhkIDIAAIAAhjIjIAAIAABjIhkAAIAAjHIGQAAIAABkIDHAAIAAhkIBkAAIAABkIBkAAIAAhkIDIAAIAABkIBkAAIAABjIhkAAIAAhjIjIAAIAABjIAABkIDIAAIBkAAIAAhkIBkAAIAADIgAjHiVIAAhkIDHAAIAABkgAjHiVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AD6CWIAAhkIjIAAIAAhjIDIAAIAABjIBkAAIAABkgAldgxIAAhkIDIAAIAABkg");
	this.shape_3.setTransform(15,0);

	this.instance = new lib.shoes_walking();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,160,85);


(lib.sleeping_pills_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.PIlls("synched",0);

	this.text = new cjs.Text("Sleeping pills", "28px 'Leelawadee UI'", "#FFFF99");
	this.text.lineHeight = 39;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(-65,-153.3);

	this.instance_1 = new lib.text_background("synched",0);
	this.instance_1.setTransform(19,-126.95,1.1895,2.6522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1},{t:this.text}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-187.9,251.1,227.9);


(lib.laptop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhjK8IAAhkIjIAAIAAhkIBkAAIAAhkIBkAAIAABkIBjAAIAAmQIBkAAIAAGQIhkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAEsgAAAjHIAAhkIjHAAIAAhkIhkAAIAAksIDIAAIAABkIErAAIAABkIBkAAIAAEsg");
	this.shape.setTransform(-10,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABkImIAAhkIhkAAIAAhkIEsAAIAAmPIhkAAIAAhkIhkAAIAAhkIkrAAIAAhkIjIAAIAABkIhkAAIAAErIBkAAIAABkIBkAAIAABkIDIAAIAABkIjIAAIAAhkIjIAAIAAhkIhkAAIAAq7IEsAAIAABkIGPAAIAABkIEsAAIAABkIDIAAIAAK7IhkAAIAABkg");
	this.shape_1.setTransform(0,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjHO2IAAhkIjIAAIAAhkIDIAAIAABkIGPAAIAABkgADINSIAAksIhkAAIAABkIhkAAIAAmQIhjAAIAAGQIhkAAIAAhkIhkAAIAAhkIBkAAIAAksIjIAAIAAhkIjIAAIAAhjIhkAAIAAsgIBkAAIAAK8IBkAAIAABkIDIAAIAABjIDIAAIAAhjIjIAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIErAAIAAksIBkAAIAAGPIksAAIAABkIBkAAIAABkIGQAAIAAhkIBkAAIAAq7IjIAAIAAhkIksAAIAAhkImPAAIAAhkIksAAIAAhkIGQAAIAABkIGPAAIAABkIEsAAIAABkIDIAAIAAODIhkAAIAABkIn0AAIAABkIBkAAIAABkIBkAAIAAEsgAhjLuIAAhkIBjAAIAABkgAnzLuIAAjIIDIAAIAABkIhkAAIAABkgAAAKKgAkrImgAnzj5IAAksIBkAAIAAEsgABkldIAAhkIBkAAIAABkgAjHnBIAAhkIErAAIAABkgAmPolIAAhkIDIAAIAABkgAmPolg");

	this.text = new cjs.Text("I'M AN PROGRAMMER IN A BIG GAME COMPANY, THE WORK IS SO BUSY BUT THE SALARY IS HIGH, I CAN USE THEM TO PAY MY RENT", "10px 'Segoe Script'", "#FFCC00");
	this.text.lineHeight = 18;
	this.text.lineWidth = 237;
	this.text.parent = this;
	this.text.setTransform(147,-612.55,1.8249,1.8249);

	this.instance = new lib.text_background("synched",0);
	this.instance.setTransform(356.2,-548.85,2.4386,3.38,0,0,0,0.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhjK8IAAhkIjIAAIAAhkIBkAAIAAhkIBkAAIAABkIBjAAIAAmQIBkAAIAAGQIBkAAIAAhkIBkAAIAAEsgAAAJYIBkAAIAAhkIhkAAgAAAjHIAAhkIjHAAIAAhkIhkAAIAAksIDIAAIAABkIErAAIAABkIBkAAIAAEsg");
	this.shape_3.setTransform(-10,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("ABkImIAAhkIhkAAIAAhkIEsAAIAAmPIhkAAIAAhkIhkAAIAAhkIkrAAIAAhkIjIAAIAABkIhkAAIAAErIBkAAIAABkIBkAAIAABkIjIAAIAAhkIhkAAIAAq7IEsAAIAABkIGPAAIAABkIEsAAIAABkIDIAAIAAK7IhkAAIAABkgAkrFeIAAhkIDIAAIAABkg");
	this.shape_4.setTransform(0,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjHO2IAAhkIjIAAIAAhkIDIAAIAABkIGPAAIAABkgADINSIAAksIhkAAIAABkIhkAAIAAmQIhjAAIAAGQIhkAAIAAhkIhkAAIAAhkIBkAAIAAksIjIAAIAAhkIjIAAIAAhjIhkAAIAAsgIBkAAIAAK8IBkAAIAABkIDIAAIAAhkIDIAAIAABkIErAAIAAksIhkAAIAAhkIBkAAIAABkIBkAAIAAGPIksAAIAABkIBkAAIAABkIGQAAIAAhkIBkAAIAAq7IjIAAIAAhkIksAAIAAhkImPAAIAAhkIksAAIAAhkIGQAAIAABkIGPAAIAABkIEsAAIAABkIDIAAIAAODIhkAAIAABkIn0AAIAABkIBkAAIAABkIBkAAIAAEsgAkrAyIDIAAIAAhjIjIAAgADINSgAhjLuIAAhkIBjAAIAABkgAnzLuIAAjIIDIAAIAABkIhkAAIAABkgAAAKKgAkrImgAmPiVIAAhkIhkAAIAAksIBkAAIAAEsIBkAAIAABkgAjHnBIAAhkIjIAAIAAhkIDIAAIAABkIErAAIAABkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.text}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-626.2,683.4,721.2);


(lib.kitty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.kitty_tail();
	this.instance.setTransform(-15,45);

	this.instance_1 = new lib.kitty_tail_open_mouth();
	this.instance_1.setTransform(-35.8,23.95,1,1,0,0,0,-27.5,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.3,-88.5,285,225);


(lib.flower_pot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99CC").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(-15,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape_1.setTransform(0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("AAACWIAAhkIDIAAIAABkgAjHCWIAAhkIBkAAIAABkgAhjgxIAAhkIBjAAIAABkg");
	this.shape_2.setTransform(0,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjHGQIAAmQIBkAAIAAhjIhkAAIAABjIhkAAIAAkrIBkAAIAABkIBkAAIBjAAIAAhkIDIAAIAABkIBkAAIAAErIhkAAIAAEsgAhjEsIDHAAIAAjIIjHAAgAAAAAIDIAAIAAhjIjIAAgAhjkrIhkAAIAAhkIDHAAIAABkgAjHkrg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF99CC").s().p("AhjBkIAAhkIBjAAIAAhjIBkAAIAABjIAABkg");
	this.shape_4.setTransform(-20,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AAyBkIAAhkIDIAAIAABkgAj5BkIAAhkIDIAAIAABkgAgxAAIAAhjIBjAAIAABjg");
	this.shape_5.setTransform(-5,-20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhjHCIAAmQIjIAAIAAhjIAAAAIAAhkIhkAAIAAAAIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIAABkIDHAAIAAhkIBkAAIAAhkIhkAAIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAABkIDIAAIAABkIBkAAIAAErIhkAAIAAEsgAAAFeIDIAAIAAjIIjIAAgABkgxIDIAAIAAhkIjIAAg");
	this.shape_6.setTransform(-10,-5);

	this.text = new cjs.Text("MY FAVOURITE FLOWER_ JOEY, WAS GIVEN FROM BEST FRIEND HUZZAH... I HAVEN'T SEEN HER FOR A LONG TIME BECAUSE OF  MY BUSY WORK, SHE GOT MAD AT ME...", "10px 'Segoe Script'", "#FFCC00");
	this.text.lineHeight = 18;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(-223.35,-633.05,1.6877,1.6877);

	this.instance = new lib.text_background("synched",0);
	this.instance.setTransform(-15.25,-575.3,2.1786,4.1239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.instance},{t:this.text}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.1,-670.1,459.79999999999995,710.1);


(lib.drawers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("打开抽屉OpeningDrawer_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("ArtK8IAAsfIPnAAIAAMfgAFeJYIAAmQIBkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAIAAkrIBkAAIAAhkIhkAAIAABkIxLAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAAEsIHzAAIAAhkIjHAAIAAjIIJXAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAAEsIhkAAIAABkIBkAAIAAGPIhkAAIAABkIhkAAIAABkIhkAAIAABkgAImAAIBkAAIAAhjIhkAAgAHCkrIBkAAIAAhkIhkAAg");
	this.shape.setTransform(5,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aq7MgIAAhkIPnAAIAAsfIvnAAIAAMfIhkAAIAAuDIhkAAIAAhkIDIAAIAABkIRLAAIAAhkIBkAAIAABkIhkAAIAAErIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAAGQIBkAAIAABkIhkAAIAABkgAH0JYIAAhkIBkAAIAABkgAJYH0IAAhkIBkAAIAABkgAK8GQIAAhkIBkAAIAABkgAMgEsIAAmPIhkAAIAAhkIBkAAIAAksIhkAAIAAhkIBkAAIAAhkIpXAAIAAhkIK7AAIAARLgAMgEsgAJYAAIAAhjIBkAAIAABjgAH0krIAAhkIBkAAIAABkgAq7krIAAhkIBkAAIAABkgAJYmPIAAhkIBkAAIAABkgApXmPIAAhkIBkAAIAABkgApXmPgAK8nzgAnznzIAAhkIBkAAIAABkgAnznzgAmPpXIAAhkIBkAAIAABkgAkrq7IAAhkIDIAAIAABkgAkrq7g");
	this.shape_1.setTransform(0,25);

	this.text = new cjs.Text("A BOTTLE OF SLEEPING PILLS IN THE DRAWER", "9px 'Segoe Script'", "#FFCC33");
	this.text.lineHeight = 16;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(211.85,-513.35,1.4737,1.4737);

	this.instance = new lib.text_background("synched",0);
	this.instance.setTransform(355.5,-482.4,1.4737,1.4737);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009999").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_2.setTransform(92,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_3.setTransform(92,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhPBQIAAgoIAoAAIBPAAIAoAAIAAAogAgngnIAAgoIBPAAIAAAog");
	this.shape_4.setTransform(92,-12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AuDMgIAAhkIPnAAIAAsfIvnAAIAAMfIhkAAIAAuDIhkAAIAAhkIDIAAIAABkIRLAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAACWIDIAAIAAhQIAoAAIAAh4IAoAAIAAAoIBQAAIAAgoIhQAAIAAgoIBQAAIAAAoIAoAAIAABkIBkAAIAABkIhkAAIAAgoIAAgoIgoAAIAAgoIhQAAIAAAoIgoAAIAAAoIAAAoICgAAIAADIIBkAAIAAhkIBkAAIAAjIIhkAAIAAhkIBkAAIAAhkIBkAAIAAGQIhkAAIAABkIhkAAIAABjIhkAAIAABkIhkAAIAACWIhkAAIAAiWIksAAIAAAAIhkAAIAAHCIBkAAIAABkIhkAAIAABkgADIAyIEsAAIAAAAIDIAAIAAjHIn0AAgAEsJYIAAhkIBkAAIAABkgAGQH0IAAhkIBkAAIAABkgAGQH0gAH0GQIAAhkIBkAAIAABkgAH0GQgAuDkrIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAABkgAuDkrgAH0nzIAAhkIBkAAIAAhkIpXAAIAAhkIK7AAIAACWIEsAAIAABkImQAAIAAAygApXpXIAAhkIBkAAIAABkgAnzq7IAAhkIDIAAIAABkgAnzq7g");
	this.shape_5.setTransform(20,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("Au1K8IAAsfIPnAAIAAMfgACWJYIAAnCIBkAAIAABkIAAAAIAAhkIEsAAIAACWIhkAAIAABkIhkAAIAABkIhkAAIAABkgAHCAyIAAhjIAAAAIAABjIksAAIAAjHIH0AAIAADHgALugxIAAjIIBkAAIAAhkIhkAAIAAhkIgoAAIAAgoIhQAAIAAAoIgoAAIAAB4IgoAAIAABQIjIAAIAAiWIBkAAIAAhkIhkAAIAABkIhkAAIAABkIhkAAIAABkIxLAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAAEsIHzAAIAAhkIjGAAIAAjIIJWAAIAABkIhkAAIAABkIBkAAIAAgyIGQAAIAABkIhkAAIAABkIBkAAIAADIIhkAAIAABkg");
	this.shape_6.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.text}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-516.3,601.1,621.3);


(lib.Door = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("门把手DoorHandle_爱给网_aigei_com");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ADIDIIAAhkIhkAAIAAhkIjHAAIAAhjIhkAAIhkAAIAAhkIDIAAIGPAAIAAGPg");
	this.shape.setTransform(490,280);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("ABkEsIAAhkIhkAAIAAhkIhjAAIAAhkIhkAAIAAhjIBkAAIAABjIDHAAIAABkIBkAAIAABkIBkAAIAAmPImPAAIAAhkIHzAAIAAJXgAhjEsIAAhkIBjAAIAABkgAAADIgAmPBkIAAjHIBkAAIAABjIBkAAIAABkgAjHAAg");
	this.shape_1.setTransform(490,280);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669999").s().p("ACWEsIAAhkIhkAAIAABkIkrAAIAAjIIDIAAIAAhkIBjAAIAABkIBkAAIAABkIBkAAIAABkgAiVAAIAAhjIBkAAIAABjgAj5hjIAAjIIErAAIAABkIjHAAIAABkg");
	this.shape_2.setTransform(475,280);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#503300").s().p("AxLbWMAAAgx/IBkAAMAAAAwbIfPAAMAAAgwbIhkAAIAAhkIhkAAIAAhkI4/AAIAAhkIY/AAIAABkIBkAAIAABkIBkAAIAABkIBkAAMAAAAx/gAJYKKIAAjIIDIAAIAADIgAvn2pIAAhkIBkAAIAABkgAuD4NIAAhkIBkAAIAABkg");
	this.shape_3.setTransform(490,345);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AvnZyMAAAgwbIBkAAIAAhkIBkAAIAAhkIY/AAIAABkIBkAAIAABkIBkAAMAAAAwbgAH0KKIBkAAIAABkIDIAAIAAhkIBkAAIAAjIIhkAAIAAhkIjIAAIAABkIhkAAgAuDAyIcHAAIAAyvIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAARMI4/AAIAAxMIBkAAIAAhkIhkAAIAABkIhkAAgAnzj5IPnAAIAAsgIvnAAgAq7zhIBkAAIAAhkIhkAAgApX1FISvAAIAAhkIyvAAgAMgx9g");
	this.shape_4.setTransform(490,345);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ayvc6MAAAgzjIBkAAMAAAAx/MAiXAAAMAAAgx/IhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAMAAAAzjgAJYLuIAAhkIhkAAIAAjIIBkAAIAADIIDIAAIAABkgAMgKKIAAjIIjIAAIAAhkIDIAAIAABkIBkAAIAADIgAuDAyIAAyvIBkAAIAARMIY/AAIAAxMIBkAAIAASvgAnzj5IAAsgIPnAAIAAMggAmPrtIAADIIAADIIEsAAIBjAAIBkAAIEsAAIAApYInzAAIksAAgAK8x9IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAsfx9IAAhkIBkAAIAABkgAsfx9gAq7zhIAAhkIBkAAIAABkgApX1FIAAhkISvAAIAABkgAxL2pIAAhkIBkAAIAABkgAvn4NIAAhkIBkAAIAABkgAMg5xIAAhkI4/AAIAAhkIY/AAIAABkIBkAAIAABkgAuD5xIAAhkIBkAAIAABkg");
	this.shape_5.setTransform(490,345);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#503300").s().p("AxLbWMAAAgx/IBkAAMAAAAwbIfPAAMAAAgwbIBkAAMAAAAx/gAI0JKIBkisICtBkIhkCsgAOE2pIAAhkIhkAAIAAhkI4/AAIAAhkIY/AAIAABkIBkAAIAABkIBkAAIAABkgAvn2pIAAhkIBkAAIAABkgAvn2pgAuD4NIAAhkIBkAAIAABkg");
	this.shape_6.setTransform(490,345);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AvnZyMAAAgwbIBkAAIAAhkIBkAAIAAhkIY/AAIAABkIBkAAIAABkIBkAAMAAAAwbgAH0HxIgXAnIAXAOIAABkIAbAAIgOAYIBXAxIAAAbIAuAAIApAYIAOgYIBjAAIAAgbIAXAOIAyhXIAbAAIAAguIAYgpIgYgNIAAhkIgaAAIANgXIhXgyIAAgbIguAAIgpgXIgNAXIhkAAIAAAbIgXgOIgyBXIgbAAgAuDAyIcHAAIAAyvIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAARMI4/AAIAAxMIBkAAIAAhkIhkAAIAABkIhkAAgAnzj5IPnAAIAAsgIvnAAgAq7zhIBkAAIAAhkIhkAAgApX1FISvAAIAAhkIyvAAgAMgx9g");
	this.shape_7.setTransform(490,345);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ayvc6MAAAgzjIBkAAMAAAAx/MAiXAAAMAAAgx/IhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAMAAAAzjgAKGLuIgugbIhXgxIAOgYIAlhAIhAgkIgXgOIAXgnIAbgvIAyhXIAXAOIBAAlIAkhAIANgXIApAXIAuAbIBXAyIgNAXIglBAIA/AkIAYANIgYApIgbAuIgyBXIgXgOIg/glIBkisIithkIhkCsICtBkIgkBAIgOAYgALhKugAuDAyIAAyvIBkAAIAARMIY/AAIAAxMIBkAAIAASvgAnzj5IAAsgIPnAAIAAMggAmPrtIAADIIAADIIEsAAIBjAAIBkAAIEsAAIAApYInzAAIksAAgAK8x9IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAsfx9IAAhkIBkAAIAABkgAsfx9gAq7zhIAAhkIBkAAIAABkgApX1FIAAhkISvAAIAABkgAxL2pIAAhkIBkAAIAABkgAvn4NIAAhkIBkAAIAABkgAMg5xIAAhkI4/AAIAAhkIY/AAIAABkIBkAAIAABkgAuD5xIAAhkIBkAAIAABkg");
	this.shape_8.setTransform(490,345);

	this.instance = new lib.text_background("synched",0);
	this.instance.setTransform(71.05,-186,1.9158,2.9001,0,0,0,-0.1,0);

	this.text = new cjs.Text("I CAN'T GO BEFORE I FINISHED MY WORK", "10px 'Segoe Script'", "#FFCC00");
	this.text.lineHeight = 18;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(-86.9,-207.55,1.7355,1.7355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape},{t:this.shape_2},{t:this.text},{t:this.instance}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,-252.7,740.8,782.7);


(lib.PACMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.pac_maneating();
	this.instance.setTransform(480,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-210},29).wait(1));

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/jMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_17 = new cjs.Graphics().p("A/jMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_18 = new cjs.Graphics().p("A/jMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_19 = new cjs.Graphics().p("A/uMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_20 = new cjs.Graphics().p("EghnAMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_21 = new cjs.Graphics().p("EgjgAMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_22 = new cjs.Graphics().p("EglZAMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_23 = new cjs.Graphics().p("EgnSAMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_24 = new cjs.Graphics().p("EgpLAMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_25 = new cjs.Graphics().p("EgrDAMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_26 = new cjs.Graphics().p("Egs8AMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_27 = new cjs.Graphics().p("Egu1AMqIAA5TMA/GAAAIAAZTg");
	var mask_graphics_28 = new cjs.Graphics().p("EgwuAMqIAA5TMA/HAAAIAAZTg");
	var mask_graphics_29 = new cjs.Graphics().p("EgynAMqIAA5TMA/HAAAIAAZTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-75.975,y:18.05}).wait(17).to({graphics:mask_graphics_17,x:-155.975,y:18.05}).wait(1).to({graphics:mask_graphics_18,x:-180.1417,y:18.05}).wait(1).to({graphics:mask_graphics_19,x:-203.1417,y:18.05}).wait(1).to({graphics:mask_graphics_20,x:-215.225,y:18.05}).wait(1).to({graphics:mask_graphics_21,x:-227.3083,y:18.05}).wait(1).to({graphics:mask_graphics_22,x:-239.3917,y:18.05}).wait(1).to({graphics:mask_graphics_23,x:-251.475,y:18.05}).wait(1).to({graphics:mask_graphics_24,x:-263.5583,y:18.05}).wait(1).to({graphics:mask_graphics_25,x:-275.6417,y:18.05}).wait(1).to({graphics:mask_graphics_26,x:-287.725,y:18.05}).wait(1).to({graphics:mask_graphics_27,x:-299.8083,y:18.05}).wait(1).to({graphics:mask_graphics_28,x:-311.8917,y:18.05}).wait(1).to({graphics:mask_graphics_29,x:-323.975,y:18.05}).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AkrFeIAAjIIhkAAIAAjHIBkAAIAAjIIBkAAIAAhkIErAAIAABkIBkAAIAAGPIhkAAIAADIgA3bFeIAAhkIhkAAIAAmPIBkAAIAAhkIGQAAIAABkIBkAAIAAGPIhkAAIAABkgASwD6IAAhkIhkAAIAAhkIhkAAIAAkrIBkAAIAAhkIEsAAIAABkIDIAAIAAErIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(-73.95,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkrHCIAAhkIGPAAIAAjIIBkAAIAAEsgA3bHCIAAhkIhkAAIAAhkIBkAAIAABkIGQAAIAABkgASwFeIAAhkIjIAAIAAjIIBkAAIAABkIBkAAIAABkIDIAAIAAhkIBkAAIAAhkIBkAAIAAkrIjIAAIAAhkIksAAIAAhkIEsAAIAABkIDIAAIAABkIBkAAIAAErIhkAAIAADIIjIAAIAABkgAmPFeIAAjIIhkAAIAAjHIBkAAIAADHIBkAAIAADIgAxLFeIAAhkIBkAAIAABkgAvnD6IAAmPIhkAAIAAhkImQAAIAAhkIGQAAIAABkIBkAAIAABkIBkAAIAAGPgA6jD6IAAmPIBkAAIAAGPgADICWIAAmPIhkAAIAAhkIkrAAIAAhkIErAAIAABkIBkAAIAABkIBkAAIAAGPgAOEAyIAAkrIBkAAIAAErgAmPgxIAAksIDIAAIAABkIhkAAIAADIgA4/iVIAAhkIBkAAIAABkgA4/iVgAPoj5IAAhkIBkAAIAABkgAPoj5gARMldgAjHldg");
	this.shape_1.setTransform(-73.95,20);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-65,820,130);


(lib.on_the_subway = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bear
	this.instance = new lib.bear_on_the_subway();
	this.instance.setTransform(-135,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// handle_rod
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EgCVAj8MAAAgtTIBkAAMAAAAtTgAiVq7IAAksIBkAAIAAEsgAiVxLIAAuEIBkAAIAAOEgEBLyggzIAAhkIhkAAIAABkIxMAAIAAhkIhkAAIAABkIxMAAIAAhkIhkAAIAABkIxMAAIAAhkIhkAAIAABkIxMAAIAAhkIhjAAIAABkI0UAAIAAhkIhkAAIAABkIywAAIAAhkIhkAAIAABkI0UAAIAAhkIhkAAIAABkIsgAAIAAhkIhkAAIAAhkMCdzAAAIAABkIhkAAIAABkg");
	this.shape.setTransform(-5,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(-5,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	// people
	this.instance_1 = new lib.person2();
	this.instance_1.setTransform(-470,139.7,1,1,0,0,0,45,0.2);

	this.instance_2 = new lib.person2();
	this.instance_2.setTransform(85,139.7,1,1,0,0,0,45,0.2);

	this.instance_3 = new lib.person01();
	this.instance_3.setTransform(130,45);

	this.instance_4 = new lib.person2();
	this.instance_4.setTransform(-255,139.7,1,1,0,0,0,45,0.2);

	this.instance_5 = new lib.person01();
	this.instance_5.setTransform(-100,45);

	this.instance_6 = new lib.person01();
	this.instance_6.setTransform(-220,45);

	this.instance_7 = new lib.person2();
	this.instance_7.setTransform(-309.95,124.7,1,1,0,0,0,45,0.2);

	this.instance_8 = new lib.person01();
	this.instance_8.setTransform(47.95,36);

	this.instance_9 = new lib.person2();
	this.instance_9.setTransform(225,139.7,1,1,0,0,0,45,0.2);

	this.instance_10 = new lib.person01();
	this.instance_10.setTransform(-360,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// window_frame
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EBAEARMIAAhkIBkAAIAABkgEhBnARMIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAA4/IBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAAY/IBkAAIAABkIBkAAIAABkIBkAAIAABkgEBBoAPoIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgEBBoAPogEBEwAMgIAA4/IhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAY/g");
	this.shape_2.setTransform(-50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(50));

	// city_fly_through
	this.instance_11 = new lib.city("synched",0);
	this.instance_11.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-850},49).wait(1));

	// window
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333399").s().p("EhBnAPoIAAhkIhkAAIAAhkIhkAAIAA4/IBkAAIAAhkIBkAAIAAhkMCDPAAAIAABkIBkAAIAABkIBkAAIAAY/IhkAAIAABkIhkAAIAABkg");
	this.shape_3.setTransform(-50,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EhBnARMIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAA4/IBkAAIAAhkIBkAAIAAhkIBkAAIAAhkMCDPAAAIAABkMiDPAAAIAABkIhkAAIAABkIhkAAIAAY/IBkAAIAABkIBkAAIAABkMCDPAAAIAABkgEBBoAPoIAAhkIBkAAIAABkgEBBoAPogEBDMAOEIAAhkIBkAAIAABkgEBDMAOEgEBEwAMgIAA4/IhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAY/gEBEwAMgg");
	this.shape_4.setTransform(-50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1240,-180,2400,485);


(lib.lying_on_bed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bear
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AjHDIIAAhkIBkAAIAABkgABkhjIAAhkIBkAAIAABkg");
	this.shape.setTransform(-50,-40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Aj5D6IAAhkIBkAAIAABkgAiVCWIAAhkIBkAAIAABkgAiVCWgAAygxIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAiVgxIAAhkIBkAAIAABkg");
	this.shape_1.setTransform(-25,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AKKKKIAAjIIBkAAIAADIgAzhCWIAAhkIDIAAIAABkgAQagxIAAhkIBkAAIAABkgAR+iVIAAhkIBkAAIAABkgAnBnBIAAjIIBkAAIAADIg");
	this.shape_2.setTransform(55,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Aj5D6IAAjIIBkAAIAABkIAABkgACWiVIAAhkIBkAAIAABkg");
	this.shape_3.setTransform(-75,-65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgxD6IAAhkIhkAAIAAjHIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBjAAIAABkIBkAAIAABjIBkAAIAABkIhkAAIAABkg");
	this.shape_4.setTransform(15,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AiVD6IhkAAIAAhkIBkAAIAAhkIBkAAIAABkIAABkgACWgxIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIAABkg");
	this.shape_5.setTransform(-35,-25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#669999").s().p("AK8K8IAAhkIAAjIIhkAAIAADIImQAAIAAhkIjIAAIAAhkIhjAAIAABkImQAAIAAhkIhkAAIAAhkIEsAAIAAhkIBkAAIAAhkIDHAAIAAjHIBkAAIAAjIIBkAAIAAhkIBkAAIAADIIBkAAIAABkIBkAAIAAjIIBkAAIAAhkIDIAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIhkAAIAABjIjIAAIAAhjIjIAAIAABjIhkAAIAABkIhkAAIAADIIBkAAIAABkIBkAAIAAEsgAAAGQIBkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAgADIDIIBkAAIAAjIIhkAAgAEsAAIBkAAIAAhjIhkAAgAPohjIBkAAIAAhkIhkAAgA0TDIIAAhkIDIAAIAABkgAvnBkIAAhkIhkAAIjIAAIAAhjIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAADIIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABjIhkAAIAABkg");
	this.shape_6.setTransform(60,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("AMgOEIAAksIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAADIgAXcMgIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAyvK8IAAjIIEsAAIAAhkIDIAAIAADIIjIAAIAABkgAkrEsIAAksIBkAAIAAjHIhkAAIAAhkIDIAAIAABkIBjAAIAADHIhjAAIAADIIhkAAIAABkgA3bAAIAAhjIhkAAIAAksIhkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIEsAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAAhkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAABjgA8HnzIAAjIIBkAAIAADIg");
	this.shape_7.setTransform(70,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AJYRMIAAhkIn0AAIAAhkIq7AAIAAhkIhkAAIAAhkIBkAAIAABkIGQAAIAAhkIBkAAIAABkIDHAAIAABkIGQAAIBkAAIAABkIBkAAIAAksIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIDIAAIAAEsIDIAAIAABkIjIAAIAABkgAXcOEIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkgAPoOEIAAjIIBkAAIAADIgAyvMgIAAhkIEsAAIAABkgAUUK8IAAhkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIDIAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAhjK8IAAhkIBjAAIAABkgAuDK8IAAhkIDIAAIAABkgAuDK8gA0TK8IAAhkIhkAAIAAhkIDIAAIAAhkIAAhkIBkAAIAABkIDIAAIAABkIksAAIAADIgAZAJYIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAAAJYIAAhkIBkAAIAABkgAAAJYgAq7JYIAAjIIBkAAIAABkIDIAAIAABkgABkH0IAAjIIBkAAIAADIgAmPH0IAAhkIBkAAIAABkgAmPH0gA3bH0IAAksIBkAAIAABkIAABkIAABkgAJYGQIAAhkIBkAAIAABkgAkrGQIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAEsIBkAAIAAhkIBkAAIAADIgAkrGQgAuDGQIAAhkIBkAAIAAhkIBkAAIAADIgARMEsIAAhkIBkAAIAABkgAK8EsIAAhkIDIAAIAABkgADIEsIAAhkIBkAAIAABkgASwDIIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgASwDIgAEsDIIAAhkIhkAAIAAjHIhkAAIAABjIhkAAIAAjHIhjAAIAAhkIjIAAIAABkIhkAAIAAjIIhkAAIhkAAIhkAAIAAhkIAAjIIhkAAIAAhkIhkAAIAAhkIksAAIAAhkIhkAAIAAhkIDIAAIAABkIDIAAIAABkIDIAAIAADIIBkAAIAADIIDIAAIAABkIGPAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAAhjIBkAAIAAhkIDIAAIAABkIjIAAIAABjIhkAAIAADIgAhjDIIAAjIIBjAAIAADIgAuDDIIAAhkIBkAAIAABkgA13DIIAAhkIhkAAIAAhkIEsAAIBkAAIAABkIjIAAIAABkgApXBkIAAhkIhkAAIAAhjIBkAAIAABjIBkAAIAABkgAsfBkIAAhkIBkAAIAABkgAPoAAIhkAAIAAhjIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIDIAAIAABjgAkrAAIAAjHIBkAAIAADHgAxLAAIAAhjIBkAAIAABjgAxLAAgA4/AAIAAhjIBkAAIAABjgAvnhjIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkgAvnhjgA6jhjIAAksIBkAAIAAEsgA0TjHIAAhkIBkAAIAABkgAsfkrIAAhkIBkAAIAABkgA8HmPIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAABkgAvnnzIAAhkIBkAAIAABkgA4/pXIAAhkIhkAAIhkAAIAAhkIDIAAIAABkIBkAAIAABkgA3bq7IAAhkIBkAAIAABkgA3bq7gA13sfIAAjIIBkAAIAABkIAABkg");
	this.shape_8.setTransform(70,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996600").s().p("AMgOEIAAksIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAADIgAXcK8IAAhkIksAAIAAjIIH0AAIAABkIBkAAIAABkIhkAAIAABkgAyvK8IAAjIIDIAAIAAhkIBkAAIAABjIAAAAIAAhjIAAAAIAAhkIBkAAIAABkIAAAAIBkAAIAABkIhkAAIAABkIhkAAIAABkgASwEsIAAAAIBkAAIAAAAgAmPDIIAAhkIBkAAIAAAAIAAAAIAAhkIAAAAIAAkrIDIAAIAAGPIhkAAIAABkgAkrDIIAAAAIAAhkIAAAAgAjHAAIAAAAIAAhjIAAAAgA3bAAIAAhjIhkAAIAAksIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIEsAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAAhkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAABjgA0TkrgAvnpXg");
	this.shape_9.setTransform(70,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#669999").s().p("AK8K8IAAhkIAAjIIhkAAIAADIImQAAIAAhkIjIAAIAAhkIBkAAIAAhkIhkAAIAABkIhjAAIAABkImQAAIAAhkIhkAAIAAjIIBkAAIAABkIDIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBjAAIAAhjIBkAAIAAmQIBkAAIAABkIBkAAIAADIIBkAAIAABkIhkAAIAABjIhkAAIAADIIBkAAIAAjIIDIAAIAAjHIBkAAIAAAAIH0AAIAAAAIjIAAIAABkIBkAAIAAAAIhkAAIAADHIAADIIjIAAIAAjIIhkAAIAAhkIhkAAIAABkIBkAAIAADIIBkAAIAABkIBkAAIAAEsgABkEsIBkAAIAAhkIhkAAgAK8EsgARMDIIAAhkIhkAAIAAjHIBkAAIBkAAIAAAAIBkAAIAAAAIhkAAIAAErgA0TDIIAAhkIDIAAIAABkgAvnBkIAAhkIhkAAIjIAAIAAhjIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIBkAAIAAjIIBkAAIAAGQIjIAAIAAhkIhkAAIAABkIhkAAIAABkIhkAAIAADHIhkAAIAABkgAJYkrIAAAAIGQAAIAAAAgAMgmPIAAgBIBkAAIAAABg");
	this.shape_10.setTransform(60,40);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AKKKKIAAjIIBkAAIAADIgAO2CWIAAjHIBkAAIAADHgAzhCWIAAhkIDIAAIAABkgAR+iVIAAAAIBkAAIAAAAgAnBnBIAAjIIBkAAIAADIg");
	this.shape_11.setTransform(55,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AJYRMIAAhkIBkAAIAAksIhkAAIAAhkIhkAAIAAjIIhkAAIAAhkIjIAAIAAhkIBkAAIAAhkIhkAAIAAjHIhkAAIAAhkIBkAAIAABkIBkAAIAABjIDIAAIAABkIAAAAIhkAAIAADIIBkAAIAABkIBkAAIAADIIDIAAIAAjIIBkAAIBkAAIAABkIBkAAIAAksIhkAAIAAhkIBkAAIAABkIAAAAIBkAAIAABkIAAAAIBkAAIGQAAIAABkIBkAAIAABkIhkAAIAAhkIn0AAIAADIIEsAAIAABkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIjIAAIAAhkImQAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAAEsIDIAAIAABkIjIAAIAABkgABkPoIAAhkIq7AAIAAhkIGQAAIAAhkIBkAAIAABkIDHAAIAABkIGQAAIBkAAIAABkgAPoOEIAAjIIBkAAIAADIgAPoOEgAq7MgIAAhkIjIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAADIIBkAAIAABkgAyvMgIAAhkIEsAAIAABkgARMK8gAhjK8IAAhkIBjAAIAABkgAhjK8gAuDK8gA0TK8IAAhkIhkAAIAAhkIDIAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIjIAAIAADIgAcIJYIAAhkIBkAAIAABkgAAAJYIAAhkIBkAAIAABkgApXJYIAAhkIDIAAIAABkgABkH0IAAjIIBkAAIAADIgAmPH0IAAhkIBkAAIAABkgA3bH0IAAksIBkAAIAABkIAABkIAABkgAkrGQIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhjIBkAAIAABjIDIAAIAABkIBkAAIAAAAIhkAAIAABkIDIAAIAAhkIBkAAIAAmPIjIAAIAAErIhkAAIAAmPIGPAAIAABkIBkAAIAABkIhkAAIAAGPIhjAAIAABkIhkAAIAABkgAkrGQgAsfGQIAAAAIAAAAIAAhkIAAAAIhkAAIAAjIIBkAAIAABkIBkAAIAADIgAvnGQIAAhkIBkAAIAABkgADIEsgAuDEsgA13DIIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAAksIhkAAIAAhkIhkAAIAAjIIBkAAIAAhkIDIAAIAABkIhkAAIhkAAIAADIIBkAAIAABkIBkAAIAAEsIBkAAIAABjIEsAAIBkAAIAAhjIBkAAIAABjIhkAAIAABkIjIAAIAABkgAsfBkIAAhkIBkAAIAABkgAOEAAIAAAAIDIAAIAAAAgAmPAAgAq7AAgAMghjIAAgBIBkAAIAAABgAH0hjIAAgBIDIAAIAAABgAvnhjIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAABkgA0TjHIAAhkIBkAAIAABkgAnzmPIhkAAIhkAAIAAhkIAAjIIBkAAIAADIIDIAAIAABkgAvnnzIAAhkIBkAAIAABkgA4/pXIAAhkIBkAAIAABkgAsfq7IAAhkIhkAAIAAhkIksAAIAAhkIhkAAIAAhkIDIAAIAABkIDIAAIAABkIDIAAIAADIgA3bq7IAAhkIBkAAIAABkgA13sfIAAjIIBkAAIAABkIAABkgA0Tvng");
	this.shape_12.setTransform(70,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("Aj5D6IAAhkIBkAAIAABkgAiVCWIAAhkIBkAAIAABkgAiVCWgAAygxIAAhkIBkAAIAABkgAiVgxIAAhkIBkAAIAABkgACWiVIAAhkIBkAAIAABkgACWiVg");
	this.shape_13.setTransform(-25,-15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#669999").s().p("AK8K8IAAhkIAAjIIhkAAIAADIImQAAIAAhkIjIAAIAAhkIBkAAIAAhkIhkAAIAABkIhjAAIAABkImQAAIAAhkIhkAAIAAhkIEsAAIAAhkIBkAAIAAhkIDHAAIAAjHIBkAAIAAjIIBkAAIAAhkIBkAAIAADIIBkAAIAABkIBkAAIAAjIIBkAAIAAhkIDIAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIhkAAIAABjIjIAAIAAhjIjIAAIAABjIhkAAIAABkIhkAAIAADIIBkAAIAABkIBkAAIAAEsgABkEsIBkAAIAAhkIhkAAgADIDIIBkAAIAAjIIBkAAIAAhjIhkAAIAABjIhkAAgAPohjIBkAAIAAhkIhkAAgA0TDIIAAhkIDIAAIAABkgAvnBkIAAhkIhkAAIjIAAIAAhjIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAADIIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIhkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABjIhkAAIAABkg");
	this.shape_14.setTransform(60,40);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996600").s().p("AMgOEIAAksIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAADIgAXcMgIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAyvK8IAAjIIEsAAIAAhkIDIAAIAADIIjIAAIAABkgAkrEsIAAksIBkAAIAAjHIhkAAIAAhkIDIAAIAABkIBjAAIAADHIhjAAIAADIIhkAAIAABkgA3bAAIAAhjIhkAAIAAksIhkAAIAAhkIhkAAIAAjIIBkAAIAADIIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIEsAAIAABkIBkAAIAABkIBkAAIAADIIhkAAIAAhkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIhkAAIAAhkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAABjgA0TkrgAvnpXg");
	this.shape_15.setTransform(70,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AJYRMIAAhkIn0AAIAAhkIq7AAIAAhkIhkAAIAAhkIBkAAIAABkIGQAAIAAhkIBkAAIAABkIDHAAIAABkIGQAAIBkAAIAABkIBkAAIAAksIhkAAIAAhkIDIAAIAAEsIDIAAIAAjIIBkAAIAADIIhkAAIAABkIjIAAIAABkgAXcOEIAAhkIEsAAIAABkgAcIMgIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAV4MgIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgAyvMgIAAhkIEsAAIAABkgARMK8IAAhkIhkAAIAAhkIBkAAIAAhkIhkAAIAABkIhkAAIAABkIhkAAIAAjIIBkAAIAAhkIjIAAIAAhkIDIAAIAABkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkgAhjK8IAAhkIBjAAIAABkgAhjK8gAuDK8IAAhkIDIAAIAAjIIBkAAIAABkIDIAAIAABkIksAAIAABkgAuDK8gA0TK8IAAhkIhkAAIAAhkIDIAAIAADIgAH0JYIAAjIIBkAAIAADIgAAAJYIAAhkIBkAAIAABkgABkH0IAAjIIBkAAIAAhkIBkAAIAABkIhkAAIAADIgAmPH0IAAhkIBkAAIAABkgAyvH0IAAhkIAAhkIBkAAIAABkIDIAAIAAhkIBkAAIAAhkIBkAAIAADIIjIAAIAABkgA3bH0IAAksIBkAAIAABkIAABkIAABkgAJYGQIAAhkIBkAAIAABkgAkrGQIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAAjHIBkAAIAADHIhkAAIAAEsIBkAAIAAhkIBkAAIAADIgAkrGQgAUUEsIAAhkIhkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkgAK8EsgAEsDIIAAhkIhkAAIAAjHIhkAAIAABjIhkAAIAAjHIhjAAIAAhkIjIAAIAABkIhkAAIAAjIIhkAAIhkAAIhkAAIAAhkIAAjIIBkAAIAADIIDIAAIAABkIGPAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAAhjIBkAAIAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIjIAAIAABjIhkAAIAADIgAhjDIIAAjIIBjAAIAADIgAhjDIgAuDDIIAAhkIBkAAIAABkgA13DIIAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAAksIhkAAIAAhkIhkAAIAAjIIBkAAIAAhkIDIAAIAABkIhkAAIhkAAIAADIIBkAAIAABkIBkAAIAAEsIBkAAIAABjIEsAAIBkAAIAAhjIBkAAIAABjIhkAAIAABkIjIAAIAABkgApXBkIAAhkIBkAAIAABkgAsfBkIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAABkgAsfBkgAPoAAIhkAAIAAhjIhkAAIAAhkIBkAAIAABkIDIAAIAABjgAAAAAgAvnhjIAAhkIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkgA0TjHIAAhkIBkAAIAABkgAsfkrIAAhkIBkAAIAABkgAsfkrgAvnnzIAAhkIBkAAIAABkgA4/pXIAAhkIBkAAIAABkgAsfq7IAAhkIhkAAIAAhkIksAAIAAhkIhkAAIAAhkIDIAAIAABkIDIAAIAABkIDIAAIAADIgA3bq7IAAhkIBkAAIAABkgA13sfIAAjIIBkAAIAABkIAABkgA0Tvng");
	this.shape_16.setTransform(70,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape},{t:this.shape_5}]},19).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_13},{t:this.shape}]},20).wait(1));

	// lamp
	this.instance = new lib.lamp();
	this.instance.setTransform(-195,110);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.lamp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// windows
	this.instance_1 = new lib.window();
	this.instance_1.setTransform(170,-180);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.window(), 3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AldGQIAAhkIBkAAIAABkgAD6krIAAhkIBkAAIAABkg");
	this.shape_17.setTransform(195,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_1}]}).wait(40));

	// drawers
	this.instance_2 = new lib.drawers();
	this.instance_2.setTransform(-220,175);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.drawers(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// background
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9900").s().p("AkrD6IAAhkIGPAAIAABkgABkCWIAAhkImPAAIAAhjIBkAAIAAhkIBkAAIAAhkIGPAAIAADIIhkAAIAADHgABkCWg");
	this.shape_18.setTransform(-130,55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999966").s().p("Egn1AH0IAAjIIBkAAIAAhkIBkAAIAAhkIEsAAIAABkIGQAAIAAhkIBkAAIAAhkIBkAAIAAjHIBkAAIAAjIIJYAAIAAhkIcHAAIAADIIBkAAIAAhkIDIAAIAAhkISwAAIAAEsIhkAAIAADHIhkAAIAAEsIhkAAIAADIg");
	this.shape_19.setTransform(45,70);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("EgqLATiIAA9rIBkAAIAAjIIBkAAIAAEsIhkAAIAAODMBK/AAAIAAOEgEgonAQaIAAAAIAAn0IAAAAgEAj8AO2IAAn0IBkAAIAAksIBkAAIAAkrIBkAAIAAksIBkAAIAAGQIAAAAIAADHIhkAAIAAEsIhkAAIAADIIhkAAIAAEsgEgnDgCVIAAksIBkAAIAAksIBkAAIAAhkIDIAAIAAjIIDIAAIAABkIBkAAIAAEsIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkgEgnDgNRIAAjIIDIAAIAAhkIDIAAIAABkIhkAAIAABkIjIAAIAABkgEgnDgNRgEggzgR9IAAhkIBkAAIAABkg");
	this.shape_20.setTransform(40.025,95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Egq9AVGIAA6jIABAAIAAhkIgBAAIAAksIBkAAIAAjIIBkAAIAAjIIDIAAIAAhkIDIAAIAAhkIEsAAIAADIIBkAAIAABkIBkAAIAAEsIOEAAIAAhkMA2rAAAIAABkIBkAAIAAPnIhkAAIAAEsIhkAAIAADIIhkAAIAAGQIhkAAIAADIgEgpZATiMBMjAAAIAAuEMhK/AAAIAAuDIBkAAIAAksIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIjIAAIAABkIjIAAIAADIIhkAAIAADIIhkAAgEAkuAO2IBkAAIAAksIBkAAIAAjIIBkAAIAAksIBkAAIAAjHIAAAAIAAmQIhkAAIAAEsIhkAAIAAErIhkAAIAAEsIhkAAgEgmRAD6MBK/AAAIAAjIIBkAAIAAkrIBkAAIAAjIIBkAAIAAksIywAAIAABkIjIAAIAABkIhkAAIAAjII8HAAIAABkIpYAAIAADIIhkAAIAAjIImQAAIAAksIhkAAIAAhkIjIAAIAADIIjIAAIAABkIhkAAIAAEsIhkAAIAAEsIDIAAIAABkIhkAAIAABjIhkAAgEggBgR9IBkAAIAAhkIhkAAgEgn1AQaIAAn0IAAAAIAAH0gA+dgxIAAhkIGQAAIAABkgA4NiVIAAhkIBkAAIAABkgEgjJgCVIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIGQAAIAABkImQAAIAABkgEgjJgCVgA2pj5IAAjIIBkAAIAADIgA2pj5gEgshgFdIAAhkIABAAIAABkgA1FnBgA+dnBIAAhkIBkAAIAABkgA85olIAAhkIBkAAIAABkg");
	this.shape_21.setTransform(35,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-341.3,630,621.3);


(lib.cars_run_through = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.cars();
	this.instance.setTransform(298,-8.5,1,1,0,0,0,-285,80);

	this.instance_1 = new lib.cars();
	this.instance_1.setTransform(-31,17.5,1,1,0,0,0,-285,80);

	this.instance_2 = new lib.cars();
	this.instance_2.setTransform(-298,-17.5,1,1,0,0,0,-285,80);

	this.instance_3 = new lib.cars();
	this.instance_3.setTransform(-388,-17.5,1,1,0,0,0,-285,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-298,y:-17.5}},{t:this.instance_1,p:{x:-31,y:17.5}},{t:this.instance,p:{x:298,y:-8.5}}]}).to({state:[{t:this.instance_2,p:{x:-308,y:-17.5}},{t:this.instance_1,p:{x:-41,y:17.5}},{t:this.instance,p:{x:288,y:-8.5}}]},1).to({state:[{t:this.instance_2,p:{x:-318,y:-17.5}},{t:this.instance_1,p:{x:-51,y:17.5}},{t:this.instance,p:{x:278,y:-8.5}}]},1).to({state:[{t:this.instance_2,p:{x:-338,y:-17.5}},{t:this.instance_1,p:{x:-71,y:17.5}},{t:this.instance,p:{x:258,y:-8.5}}]},1).to({state:[{t:this.instance_2,p:{x:-348,y:-17.5}},{t:this.instance_1,p:{x:-81,y:17.5}},{t:this.instance,p:{x:248,y:-8.5}}]},1).to({state:[{t:this.instance_2,p:{x:-368,y:-17.5}},{t:this.instance_1,p:{x:-101,y:17.5}},{t:this.instance,p:{x:228,y:-8.5}}]},1).to({state:[{t:this.instance_3,p:{x:-388}},{t:this.instance_2,p:{x:-121,y:17.5}},{t:this.instance_1,p:{x:208,y:-8.5}},{t:this.instance,p:{x:548,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-408}},{t:this.instance_2,p:{x:-141,y:17.5}},{t:this.instance_1,p:{x:188,y:-8.5}},{t:this.instance,p:{x:528,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-428}},{t:this.instance_2,p:{x:-161,y:17.5}},{t:this.instance_1,p:{x:168,y:-8.5}},{t:this.instance,p:{x:508,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-448}},{t:this.instance_2,p:{x:-181,y:17.5}},{t:this.instance_1,p:{x:148,y:-8.5}},{t:this.instance,p:{x:488,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-468}},{t:this.instance_2,p:{x:-201,y:17.5}},{t:this.instance_1,p:{x:128,y:-8.5}},{t:this.instance,p:{x:468,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-478}},{t:this.instance_2,p:{x:-211,y:17.5}},{t:this.instance_1,p:{x:118,y:-8.5}},{t:this.instance,p:{x:458,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-488}},{t:this.instance_2,p:{x:-221,y:17.5}},{t:this.instance_1,p:{x:108,y:-8.5}},{t:this.instance,p:{x:448,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-498}},{t:this.instance_2,p:{x:-231,y:17.5}},{t:this.instance_1,p:{x:98,y:-8.5}},{t:this.instance,p:{x:438,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-508}},{t:this.instance_2,p:{x:-241,y:17.5}},{t:this.instance_1,p:{x:88,y:-8.5}},{t:this.instance,p:{x:428,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-518}},{t:this.instance_2,p:{x:-251,y:17.5}},{t:this.instance_1,p:{x:78,y:-8.5}},{t:this.instance,p:{x:418,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-528}},{t:this.instance_2,p:{x:-261,y:17.5}},{t:this.instance_1,p:{x:68,y:-8.5}},{t:this.instance,p:{x:408,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-538}},{t:this.instance_2,p:{x:-271,y:17.5}},{t:this.instance_1,p:{x:58,y:-8.5}},{t:this.instance,p:{x:398,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-548}},{t:this.instance_2,p:{x:-281,y:17.5}},{t:this.instance_1,p:{x:48,y:-8.5}},{t:this.instance,p:{x:388,y:5.05}}]},1).to({state:[{t:this.instance_3,p:{x:-568}},{t:this.instance_2,p:{x:-301,y:17.5}},{t:this.instance_1,p:{x:28,y:-8.5}},{t:this.instance,p:{x:368,y:5.05}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-793,-137.5,1566,275);


(lib.bear_sleep_fly = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.bear_flying_1("synched",0);
	this.instance.setTransform(-10,209,1,1,18.4808);

	this.instance_1 = new lib.bear_flying_2("synched",0);
	this.instance_1.setTransform(37,147.05,1,1,25.2399);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:25.2399,x:37,y:147.05},9).to({_off:false,rotation:23.7077,x:191.95,y:10},10).to({_off:true,rotation:29.9992,x:361.05,y:-142.85},10).to({_off:false,rotation:-29.9992,x:270,y:-364},10).to({_off:true,rotation:-74.9998,x:-29.95,y:-404},10).to({_off:false,rotation:-142.2909,x:15,y:-85.95},10).to({_off:true,regX:-0.1,regY:0.1,rotation:-150.0008,x:374.05,y:98},10).to({_off:false,regX:0,regY:0,rotation:-52.6975,x:421,y:369},10).to({_off:true,rotation:0,x:171.05,y:515.9},10).to({_off:false,rotation:14.9992,x:-152.95,y:387.95},10).to({_off:true,x:-54.95,y:249.95},10).to({_off:false,rotation:18.4808,x:-10,y:209},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,rotation:23.7077,x:191.95,y:10},10).to({_off:false,rotation:29.9992,x:361.05,y:-142.85},10).to({_off:true,rotation:-29.9992,x:270,y:-364},10).to({_off:false,rotation:-74.9998,x:-29.95,y:-404},10).to({_off:true,rotation:-142.2909,x:15,y:-85.95},10).to({_off:false,regX:-0.1,regY:0.1,rotation:-150.0008,x:374.05,y:98},10).to({_off:true,regX:0,regY:0,rotation:-52.6975,x:421,y:369},10).to({_off:false,rotation:0,x:171.05,y:515.9},10).to({_off:true,rotation:14.9992,x:-152.95,y:387.95},10).to({_off:false,x:-54.95,y:249.95},10).to({_off:true,rotation:18.4808,x:-10,y:209},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.2,-573.6,894.9000000000001,1160.1);


(lib.bar_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// main_character
	this.instance = new lib.bear_chicken_bar_talking();
	this.instance.setTransform(-310,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// crowds
	this.instance_1 = new lib.people_sit_2();
	this.instance_1.setTransform(320,30);

	this.instance_2 = new lib.people_sit_1();
	this.instance_2.setTransform(140,45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhjBkIAAjHIBjAAIAABjIBkAAIAABkg");
	this.shape.setTransform(100,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bar_behind
	this.instance_3 = new lib.bartender();
	this.instance_3.setTransform(17.5,-105,1,1,0,0,0,12.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// table_surface
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg/RAEsIAAhkMB8/AAAIAABkgEg/RgDHIAAhkMB+jAAAIAABkg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shelf
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8FFFF").s().p("AO2BkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkgAImBkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkgACWBkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkgAj5BkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkgAqJBkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkgAwZBkIAAhkIhkAAIAAhjIEsAAIAABjIhkAAIAABkg");
	this.shape_2.setTransform(175,-230);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AO2AyIAAhjIDIAAIAABjgAKKAyIAAhjIDIAAIAABjgAFeAyIAAhjIDIAAIAABjgAAyAyIAAhjIDIAAIAABjgAj5AyIAAhjIDIAAIAABjgAolAyIAAhjIDIAAIAABjgAtRAyIAAhjIDIAAIAABjgAx9AyIAAhjIDIAAIAABjg");
	this.shape_3.setTransform(-135,-45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333300").s().p("ARMAyIAAhjIBkAAIAABjgAOEAyIAAhjIBkAAIAABjgAJYAyIAAhjIBkAAIAABjgAEsAyIAAhjIBkAAIAABjgAAAAyIAAhjIBkAAIAABjgAkrAyIAAhjIBkAAIAABjgApXAyIAAhjIBkAAIAABjgAuDAyIAAhjIBkAAIAABjgAyvAyIAAhjIBkAAIAABjg");
	this.shape_4.setTransform(180,-35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336633").s().p("ARMAyIAAhjIBkAAIAABjgAOEAyIAAhjIBkAAIAABjgAJYAyIAAhjIBkAAIAABjgAEsAyIAAhjIBkAAIAABjgAAAAyIAAhjIBkAAIAABjgAkrAyIAAhjIBkAAIAABjgApXAyIAAhjIBkAAIAABjgAuDAyIAAhjIBkAAIAABjgAyvAyIAAhjIBkAAIAABjg");
	this.shape_5.setTransform(180,-45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996633").s().p("ARMAyIAAhjIBkAAIAABjgAOEAyIAAhjIBkAAIAABjgAJYAyIAAhjIBkAAIAABjgAEsAyIAAhjIBkAAIAABjgAAAAyIAAhjIBkAAIAABjgAkrAyIAAhjIBkAAIAABjgApXAyIAAhjIBkAAIAABjgAuDAyIAAhjIBkAAIAABjgAyvAyIAAhjIBkAAIAABjg");
	this.shape_6.setTransform(180,-65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("ARMAyIAAhjIBkAAIAABjgAMgAyIAAhjIBkAAIAABjgAH0AyIAAhjIBkAAIAABjgADIAyIAAhjIBkAAIAABjgAhjAyIAAhjIBjAAIAABjgAkrAyIAAhjIBkAAIAABjgApXAyIAAhjIBkAAIAABjgAvnAyIAAhjIBkAAIAABjgAyvAyIAAhjIBkAAIAABjg");
	this.shape_7.setTransform(-140,-125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("ARMAyIAAhjIBkAAIAABjgAMgAyIAAhjIBkAAIAABjgAH0AyIAAhjIBkAAIAABjgADIAyIAAhjIBkAAIAABjgAhjAyIAAhjIBjAAIAABjgAkrAyIAAhjIBkAAIAABjgApXAyIAAhjIBkAAIAABjgAvnAyIAAhjIBkAAIAABjgAyvAyIAAhjIBkAAIAABjg");
	this.shape_8.setTransform(-140,-135);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("ARMBkIAAjHIBkAAIAADHgAMgBkIAAjHIBkAAIAADHgAH0BkIAAjHIBkAAIAADHgADIBkIAAjHIBkAAIAADHgAhjBkIAAjHIBjAAIAADHgAkrBkIAAjHIBkAAIAADHgApXBkIAAjHIBkAAIAADHgAvnBkIAAjHIBkAAIAADHgAyvBkIAAjHIBkAAIAADHg");
	this.shape_9.setTransform(-140,-110);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCC00").s().p("AR+AyIAAhjIBkAAIAABjgAO2AyIAAhjIBkAAIAABjgALuAyIAAhjIBkAAIAABjgAImAyIAAhjIBkAAIAABjgAFeAyIAAhjIBkAAIAABjgACWAyIAAhjIBkAAIAABjgAgxAyIAAhjIBjAAIAABjgAj5AyIAAhjIBkAAIAABjgAnBAyIAAhjIBkAAIAABjgAqJAyIAAhjIBkAAIAABjgAtRAyIAAhjIBkAAIAABjgAwZAyIAAhjIBkAAIAABjgAzhAyIAAhjIBkAAIAABjg");
	this.shape_10.setTransform(185,-115);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#669933").s().p("ANSCWIAAhkIBkAAIAABkgAHCCWIAAhkIBkAAIAABkgAAyCWIAAhkIBkAAIAABkgAiVCWIAAhkIBkAAIAABkgAolCWIAAhkIBkAAIAABkgAu1CWIAAhkIBkAAIAABkgANSgxIAAhkIBkAAIAABkgAHCgxIAAhkIBkAAIAABkgAAygxIAAhkIBkAAIAABkgAiVgxIAAhkIBkAAIAABkgAolgxIAAhkIBkAAIAABkgAu1gxIAAhkIBkAAIAABkg");
	this.shape_11.setTransform(195,-115);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666600").s().p("AR+CWIAAhkIBkAAIAABkgALuCWIAAhkIBkAAIAABkgAFeCWIAAhkIBkAAIAABkgAj5CWIAAhkIBkAAIAABkgAqJCWIAAhkIBkAAIAABkgAwZCWIAAhkIBkAAIAABkgAzhCWIAAhkIBkAAIAABkgAR+gxIAAhkIBkAAIAABkgALugxIAAhkIBkAAIAABkgAFegxIAAhkIBkAAIAABkgAj5gxIAAhkIBkAAIAABkgAqJgxIAAhkIBkAAIAABkgAwZgxIAAhkIBkAAIAABkgAzhgxIAAhkIBkAAIAABkg");
	this.shape_12.setTransform(185,-115);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AmPSwIAAhkIBkAAIAAhkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIhkAAIAABkIBkAAIAABkIjIAAIAAmQMAqMAAAIAAGQgAq7SwIAAhkIBkAAIAABkgAvnSwIAAhkIBkAAIAABkgA0TSwIAAhkIBkAAIAABkgA4/SwIAAhkIBkAAIAABkgA9rSwIAAhkIBkAAIAABkgEgiXASwIAAhkIBkAAIAABkgEgnDASwIAAhkIBkAAIAABkgEArwAPoIAAhkIAAhkIBkAAIAADIgEAooAPoIAAhkIAAhkIBkAAIAABkIAABkgEAj8APoIAAhkIAAhkIDIAAIAABkIAABkgAfQPoIAAhkIAAhkIDIAAIAABkIAABkgAakPoIAAhkIAAhkIDIAAIAABkIAABkgAV4PoIAAhkIAAhkIDIAAIAABkIAABkgARMPoIAAhkIAAhkIDIAAIAABkIAABkgAMgPoIAAhkIAAhkIDIAAIAABkIAABkgAH0PoIAAhkIAAhkIDIAAIAABkIAABkgAEsPoIAAjIIBkAAIAABkIAABkgAkrH0IAAmQIhkAAIAAjHIhkAAIAADHIjIAAIAAjHIhkAAIAADHIjIAAIAAjHIhkAAIAADHIjIAAIAAjHIhkAAIAADHIjIAAIAAjHIhkAAIAADHIhkAAIAAjHIhkAAIAADHIjIAAIAAjHIhkAAIAADHIhkAAIAAGQIhkAAIAAmQIhkAAIAAjHIhkAAIAADHIhkAAIAAjHIhkAAIAADHIhkAAIAAkrMAqMAAAIAAK7gAEsBkIAAkrMAooAAAIAAErgEAqMgHzIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAhkIhkAAIAAhkIBkAAIAAhkIAAhkIksAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAAq8MAooAAAIAAK8gAkruDIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIjIAAIAAjIIhkAAIAADIIhkAAIAAksMAqMAAAIAAEsg");
	this.shape_13.setTransform(20,-150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("AR+BkIAAjHIBkAAIAADHgANSBkIAAjHIBkAAIAADHgAImBkIAAjHIBkAAIAADHgAD6BkIAAjHIBkAAIAADHgAgxBkIAAjHIBjAAIAADHgAldBkIAAjHIBkAAIAADHgAqJBkIAAjHIBkAAIAADHgAu1BkIAAjHIBkAAIAADHgAzhBkIAAjHIBkAAIAADHg");
	this.shape_14.setTransform(-135,-220);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AR+DIIAAhkIBkAAIAABkgANSDIIAAhkIBkAAIAABkgAImDIIAAhkIBkAAIAABkgAD6DIIAAhkIBkAAIAABkgAgxDIIAAhkIBjAAIAABkgAldDIIAAhkIBkAAIAABkgAqJDIIAAhkIBkAAIAABkgAu1DIIAAhkIBkAAIAABkgAzhDIIAAhkIBkAAIAABkgAR+hjIAAhkIBkAAIAABkgANShjIAAhkIBkAAIAABkgAImhjIAAhkIBkAAIAABkgAD6hjIAAhkIBkAAIAABkgAgxhjIAAhkIBjAAIAABkgAldhjIAAhkIBkAAIAABkgAqJhjIAAhkIBkAAIAABkgAu1hjIAAhkIBkAAIAABkgAzhhjIAAhkIBkAAIAABkg");
	this.shape_15.setTransform(-135,-220);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Egx/AV4MAAAgrvMBj/AAAMAAAArvgEAu4AMgIAAH0IBkAAMAAAgonMgu4AAAMAAAAonIBkAAIAAn0gEAqMARMIAABkIAABkIBkAAIAAhkIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAjIIhkAAIhkAAIhkAAIhkAAIjIAAIhkAAIjIAAIhkAAIjIAAIhkAAIjIAAIhkAAIjIAAIhkAAIjIAAIhkAAIjIAAIhkAAIhkAAIAADIIBkAAIAAhkIBkAAIAABkIhkAAIAABkIAABkIBkAAIAAhkIAAhkIDIAAIAABkIAABkIBkAAIAAhkIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIAABkIBkAAIAAhkIAAhkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIAABkIBkAAIAAhkIAAhkIDIAAIAABkIAABkIBkAAIAAhkIAAhkIDIAAIAABkIAABkIBkAAIAAhkIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIAABkIBkAAIAAhkIAAhkIDIAAIAABkIAABkIBkAAIAAhkIAAhkgAhjMgIAAH0IBjAAMAAAgonMgwbAAAMAAAAonIBkAAIAAn0gAmPUUIDIAAIAAmQMgqMAAAIAAGQIDIAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAAhkIDIAAIAABkIjIAAIAABkIhkAAIAAhkIjIAAIAABkIDIAAIAABkIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkIDIAAIAABkIBkAAIAAhkIhkAAIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAAhkIDIAAIAABkIjIAAIAABkIDIAAIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkIhkAAIAABkIBkAAIAAhkIDIAAIAAhkIBkAAIAAhkIDIAAIAABkIjIAAIAABkIhkAAIAABkIBkAAIAAhkIDIAAgA3bSwIDIAAIAABkIBkAAIAAhkIhkAAIAAhkIjIAAgA9rUUIBkAAIAAhkIhkAAgAmPSwIAAhkIBkAAIAABkgAmPSwgEgiXASwgEAnEARMIAAhkIBkAAIAABkgEAiYARMIAAhkIBkAAIAABkgAZARMIAAhkIBkAAIAABkgAPoRM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");
	this.shape_16.setTransform(20,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// chairs
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("EAsiABkIAAAAIAAjHIAAAAIDIAAIAABjIAAAAIDIAAIAAhjIDIAAIAADHgANTBkIgBAAIAAjHIABAAIDHAAIAABjIABAAIDHAAIAAhjIDIAAIAADHgAtlBkIpEAAIAAjHIDIAAIAABjIC0AAIAUAAIAAhjIC0AAIAUAAIAADHgEgs1ABkIpEAAIAAjHIDIAAIAABjIC0AAIAUAAIAAhjIC0AAIAUAAIAADHg");
	this.shape_17.setTransform(25,240);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003333").s().p("EAsiABkIAAjHIAAAAIJYAAIAADHgANSBkIAAjHIABAAIJXAAIAADHgA2pBkIAAjHIJEAAIAUAAIAADHgEg15ABkIAAjHIJEAAIAUAAIAADHg");
	this.shape_18.setTransform(25,110);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("EAssANSIAAhkIJYAAIAAAAIAABkgANcNSIAAhkIJYAAIAAAAIAABkgA2zNSIAAhkIhkAAIAAjIIBkAAIAADIIAUAAIJEAAIAABkgEg2DANSIAAhkIhkAAIAAjIIBkAAIAADIIAUAAIJEAAIAABkgEA2EALuIAAjIIAAAAIjIAAIAABkIjIAAIAAhkIAAAAIjIAAIAAhkIDIAAIAAsfIjIAAIAAhkIhkAAIAAksIBkAAIAADIIJYAAIAAAAIAAjIIBkAAIAAEsIhkAAIAABkIjIAAIAAMfIDIAAIAABkIBkAAIAADIgEArIALuIAAjIIBkAAIAADIgAW0LuIAAjIIAAAAIjIAAIAABkIjIAAIAAhkIAAAAIjIAAIAAhkIDIAAIAAsfIjIAAIAAhkIhkAAIAAksIBkAAIAADIIJYAAIAAAAIAAjIIAAAAIpYAAIAAhkIJYAAIAABkIBkAAIAAEsIhkAAIAABkIjIAAIAAMfIDIAAIAABkIBkAAIAADIgAL4LuIAAjIIBkAAIAADIgAtHLuIAAjIIBQAAIAADIgEgsXALuIAAjIIBQAAIAADIgAzXKKIAAhkIjIAAIgUAAIAAhkIDIAAIAAsfIjIAAIAAhkIhkAAIAAksIBkAAIAADIIAUAAIJYAAIAAjIIBQAAIAAEsIhkAAIAABkIjIAAIAAMfIDIAAIAABkIi0AAIgUAAIAABkgEgynAKKIAAhkIjIAAIgUAAIAAhkIDIAAIAAsfIjIAAIAAhkIhkAAIAAksIBkAAIAADIIAUAAIJYAAIAAjIIBQAAIAAEsIhkAAIAABkIjIAAIAAMfIDIAAIAABkIi0AAIgUAAIAABkgA2zImgEg2DAImgEA2EgLtIpYAAIAAhkIJYAAIAABkgA2frtIgUAAIAAhkIJYAAIAABkgEg1vgLtIgUAAIAAhkIJYAAIAABkgEg2DgLtg");
	this.shape_19.setTransform(24.025,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// table_front
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#473300").s().p("EhA1AO2IAA9rMCBrAAAIAAcHIhkAAMh+jAAAIAABkg");
	this.shape_20.setTransform(-5,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996633").s().p("EhA1ADIIAAmPMCBrAAAIAAGPg");
	this.shape_21.setTransform(-5,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Eg/RAAyIAAhjMB+jAAAIAABjg");
	this.shape_22.setTransform(-5,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_animation, new cjs.Rectangle(-420,-300,830,560), null);


(lib.animation01_Working = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// laptop
	this.instance = new lib.laptop();
	this.instance.setTransform(400,-125);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.laptop(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// pot
	this.instance_1 = new lib.flower_pot();
	this.instance_1.setTransform(790,-80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.flower_pot(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhjDIIAAhkIBjAAIAABkgAAAhjIAAhkIBkAAIAABkg");
	this.shape.setTransform(790,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(50));

	// calender
	this.instance_2 = new lib.calender();
	this.instance_2.setTransform(1005.1,-168.05,0.634,0.634);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.calender(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// clock
	this.instance_3 = new lib.clock01("synched",0);
	this.instance_3.setTransform(275,-252);

	this.instance_4 = new lib.clock02("synched",0);
	this.instance_4.setTransform(275,-252);

	this.instance_5 = new lib.clock03("synched",0);
	this.instance_5.setTransform(275,-132.5);

	this.instance_6 = new lib.clock04("synched",0);
	this.instance_6.setTransform(275,-252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_6}]},15).wait(6));

	// computer
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AFeGQIAAhkIDIAAIAABkgAolGQIAAsfIMfAAIAABkIBkAAIAABkIhkAAIAADHIhkAAIAADHIAAABIpXAAIAADIg");
	this.shape_1.setTransform(445,-120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AhjAyIAAhjIDHAAIAABjg");
	this.shape_2.setTransform(630,-225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AmPDIIAAmPIEsAAIAABkIErAAIAABjIDIAAIAADIg");
	this.shape_3.setTransform(430,-190);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AAAAzIAAgBIDIAAIAAABgAjHAzIAAgBIBkAAIAAABgAhjgxIAAgBIBjAAIAAABg");
	this.shape_4.setTransform(790,-95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF99CC").s().p("AgxAAIAAAAIBjAAIAAAAg");
	this.shape_5.setTransform(775,-100.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("ABkAyIAAhjIDIAAIAABjgAkrAyIAAhjIDIAAIAABjg");
	this.shape_6.setTransform(610,-245);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("EgK7AgCIAAhkIDIAAIAAjIIhkAAIhkAAIAAhkIXbAAMAj8AAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkgEgY/AgCIAAhkIAAAAIAABkI14AAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIRMAAIAAABIAABjIAAAAIDIAAIAABkIBkAAIAABkIDIAAIAABkgEgwbAc6MAAAgwbIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIDIAAIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIDIAAMAAAAzjIjHAAIAAAAIDHAAIAAEsIsgAAIAABkIhkAAIAABkIhkAAIAABkgEggzAR+IABAAIAAhjIgBAAg");
	this.shape_7.setTransform(580,-235);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("EgxNAR+IAA4/MBcLAAAIAAY/gEAsiAO2IAA3bIBkAAIAAhkIBkAAIAAhkIBkAAIAAXbIhkAAIAABkIhkAAIAABkgAwZqJIAAhkIksAAIAAhkIhkAAIAAhkIjIAAIAAhjIAAAAIAAgBIhkAAIAAhjIAAAAIAAgBIAAAAIGQAAIAABkIBkAAIBkAAIAABkIDIAAIAABkIDIAAIAABkIhkAAIAABkgAsprZIAAgKIAKAAIAAAKg");
	this.shape_8.setTransform(585,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("EgyxAvqMAAAhRPIBkAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAMAAAAwbIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIMgAAIAAksIAAAAMAAAgzjIjIAAIAABkIhkAAIAABkIhkAAIAADIIhkAAIAABkIjIAAIAABkIjIAAIAAhkIBkAAIAAhkIDIAAIAAhkIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIDIAAIAAfQIdsAAIAABkI9sAAIAAGQIAAGQIMgAAIPoAAIAABkIvoAAIsgAAIAAMfIBkAAIAAjIIJYAAIAAgBIBkAAIAAABIhkAAIAABkIhkAAImQAAIAAhkIAAAAIAABkIAAABIAABjIAAAAIBkAAIAAABIAABjIAAAAIDIAAIAABkIjIAAIAAhjIAAAAIAAgBIxMAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIV4AAIAAAAIH0AAIAAhkIjIAAIAAhkIhkAAIAAhkIBkAAIAABkIEsAAIAABkIDIAAIAAhkIBkAAIBkAAIAAhkIBkAAIAADIIjIAAIAABkMA2rAAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkMgj8AAAIAAhkIfQAAIAAsfI8IAAIAAhkIcIAAIAAsgI8IAAIAAhkIdsAAIAAcHIGQAAIAAdsIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkgEgxNAuGMBcLAAAIAA5AMhcLAAAgEAsiAq+IBkAAIAAhkIBkAAIAAhkIBkAAIAA3cIhkAAIAABkIhkAAIAABkIhkAAgAspQuIAKAAIAAgKIgKAAgAu1O2IAAhkIjIAAIAAhkIhkAAIAAhkIDIAAIAABkIDIAAIAABkIBkAAIAABkgAeeKLIAAgBIBkAAIAAABgAbWKLIAAgBIBkAAIAAABgAbWHCIAAAAIBkAAIAAAAgAc6FfIAAgBIDIAAIAAABgEguFgjJg");
	this.shape_9.setTransform(585,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(50));

	// bear_arm
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAyFeIq7AAIAAhkIH0AAIAAhkIErAAIAAhkIBkAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAEsIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkg");
	this.shape_10.setTransform(615,-115);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323232").s().p("AjHBkIAAhkIDHAAIAAhjIDIAAIAABjIhkAAIAABkg");
	this.shape_11.setTransform(530,-120);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996600").s().p("ACWD6IAAjIIDIAAIAADIgAldgxIAAgBIABAAIAAhjIBjAAIAAhkIBkAAIAADIg");
	this.shape_12.setTransform(505,-95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AqJH0IAAksIBkAAIAAhkIjIAAIAABkImQAAIAAkrIBlAAIAAhjIgBAAIAAgBIH0AAIAAhkIDIAAIAAhkIBkAAIAADIIjIAAIAABkIjIAAIAABjIEsAAIAAhjIBkAAIAADHIHzAAIAABkInzAAIAABkIAABkIK7AAIAAhkIEsAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAADHIhkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAABkgAolGQIDIAAIAAjIIjIAAgAwZBkIDIAAIAAjHIhkAAIAABjIhjAAIAABjIgBAAgAD6BkIAAhkIDIAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABjIhkAAIAABkgAD6Bkg");
	this.shape_13.setTransform(575,-110);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s().p("ACWD6IAAjIIDIAAIAADIgAldgxIAAhkIBkAAIAAhkIBkAAIAADIg");
	this.shape_14.setTransform(505,-105);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAyFeIq7AAIAAhkIH0AAIAAhkIErAAIAAhkIBkAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAEsIAABjIhkAAIAABkIhkAAIAABkIhkAAIAABkgAqJj5IAAhkIBkAAIAABkg");
	this.shape_15.setTransform(615,-125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AqJH0IAAksIBkAAIAAhkIjIAAIAABkImQAAIAAkrIBkAAIAAhkIH0AAIAAhkIDIAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIAABkIjIAAIAABkIjIAAIAABjIEsAAIAAhjIBkAAIAADHIHzAAIAAhkIDIAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABjIhkAAIAABkIksAAIAABkInzAAIAABkIAABkIK7AAIAAhkIEsAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAADHIhkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAABkgAolGQIDIAAIAAjIIjIAAgAwZBkIDIAAIAAjHIhkAAIAABjIhkAAg");
	this.shape_16.setTransform(575,-120);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AqJH0IAAksIBkAAIAAhkIjIAAIAABkImQAAIAAkrIBkAAIAAhkIH0AAIAAhkIDIAAIAAhkIBkAAIAADIIjIAAIAABkIjIAAIAABjIEsAAIAAhjIBkAAIAADHIHzAAIAAhkIDIAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABjIhkAAIAABkIksAAIAABkInzAAIAABkIAABkIK7AAIAAhkIEsAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAADHIhkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAABkgAolGQIDIAAIAAjIIjIAAgAwZBkIDIAAIAAjHIhkAAIAABjIhkAAg");
	this.shape_17.setTransform(575,-110);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AqJH0IAAksIBkAAIAAhkIjIAAIAABkImQAAIAAkrIBkAAIAAhkIH0AAIAAhkIDIAAIAAhkIBkAAIAADIIjIAAIAABkIjIAAIAABjIEsAAIAAhjIBkAAIAADHIHzAAIAABkInzAAIAABkIAABkIK7AAIAAhkIEsAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhjIBkAAIAADHIhkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAABkgAolGQIDIAAIAAjIIjIAAgAwZBkIDIAAIAAjHIhkAAIAABjIhkAAgAD6BkIAAhkIDIAAIAAhjIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIDIAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABjIhkAAIAABkgAD6Bkg");
	this.shape_18.setTransform(575,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_18},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_18},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_18},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_18},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_18},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:-105}},{t:this.shape_11,p:{y:-130}}]},2).to({state:[{t:this.shape_17},{t:this.shape_14,p:{y:-95}},{t:this.shape_11,p:{y:-120}},{t:this.shape_10}]},2).wait(6));

	// bear_head
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("ADIAyIAAhjIBkAAIAABjgAkrAyIAAhjIBkAAIAABjg");
	this.shape_19.setTransform(630,-265);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E9DDCC").s().p("AgxD6IAAhkIhkAAIAAhkIhkAAIAAjHIBkAAIAAhkIBkAAIBjAAIBkAAIAABkIkrAAIAABkIBkAAIAABjIBjAAIAAhjIBkAAIAAhkIBkAAIAAErIhkAAIAABkg");
	this.shape_20.setTransform(585,-205);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996600").s().p("Aj5HCIAAhkIBkAAIAAksIhkAAIAAhjIAAhkIhkAAIAABkIhkAAIAAjIIBkAAIAAjIIBkAAIAABkIBkAAIGPAAIBkAAIAAhkIBkAAIAADIIBkAAIAADIIBkAAIAABjIhkAAIAABkIhkAAIAADIIjIAAIAABkgAgxgxIBjAAIAAhkIhjAAgAqJAyIAAhjIBkAAIAABjg");
	this.shape_21.setTransform(625,-225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AnBImIAAhkIDIAAIHzAAIAAhkIDIAAIAABkIhkAAIAABkgAolHCIAAhkIjIAAIAAmPIBkAAIAABjIAADIIBkAAIAABkIBkAAIAABkgAHCFeIAAjIIBkAAIAAhkIBkAAIAAhjIBkAAIAABjIhkAAIAADIIhkAAIAABkgAHCFegAnBD6IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAImgxIAAjIIBkAAIAADIgAgxgxIAAhkIBjAAIAABkgAldgxIAAhkIBkAAIAABkgAolgxIhkAAIAAhkIBkAAIAAhkIBkAAIAAjIIBkAAIAAhkIDIAAIAABkIhkAAIhkAAIAADIIhkAAIAADIgAHCj5IAAjIIhkAAIhkAAIAABkImPAAIAAhkIGPAAIAAhkIDIAAIAABkIBkAAIAADIg");
	this.shape_22.setTransform(625,-225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(50));

	// bear_body
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#323232").s().p("Aj5KKIAAhkIpYAAIAAmQIBkAAIAAnzIBkAAIAAjIIBkAAIAAAAIBkAAIAABkIDIAAIAABkIhkAAIAAGPIBkAAIAABkIBkAAIAAhkIBkAAIAAmPIhkAAIAAhkIDHAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAErIhkAAIAADIIhkAAIAABkIhkAAIAABkg");
	this.shape_23.setTransform(635,-105);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC99").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_24.setTransform(625,-175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#993333").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_25.setTransform(615,-155);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("Aj5BkIAAhkIDIAAIAABkgAgxAAIAAhjIGPAAIAABjgAgxAAgAldAAIAAhjIBkAAIAABjg");
	this.shape_26.setTransform(545,110);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006699").s().p("AgxFeIAAmPIBjAAIAAGPgAAyj5IAAhkIBkAAIBkAAIAABkgAj5j5IAAhkIDIAAIAABkg");
	this.shape_27.setTransform(615,-135);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009999").s().p("AnBKKIAAvnIDIAAIAAhkIErAAIAAhkIMgAAIAABkIhkAAIAABkIksAAIAABkImQAAIAABkIjHAAIAAMfgAtRKKIAAvnIDIAAIAAhkIBkAAIAARLgAolnBIAAhkIBkAAIAAhkIGQAAIAABkIksAAIAABkgAolnBg");
	this.shape_28.setTransform(605,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Au1YOIAAhkIksAAIAAjIIDIAAIAAhkIBkAAIAAxMIDIAAIAAhjIBkAAIAAq8IBkAAIAAn0IBkAAIAAhjIhkAAIAAgBIDIAAIAADIIhkAAIAAH0IhkAAIAAGQIJXAAIAABkIMgAAIAAhkIBkAAIAAhkIBkAAIAAjIIBkAAIAAksIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIAAhkIBkAAIAABkIDIAAIAAABIhkAAIAABjIDIAAIAAABIhkAAIAABjIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAH0IhkAAIAADIIhkAAIAABkIhkAAIAAErIhkAAIAABkIksAAIAABkImQAAIAABkIjHAAIAAOEIjIAAIAAhkImQAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIDIAAIAAhkIGQAAIAABkIksAAIAABkgAnBR+IEsAAIAAsgIDHAAIAAhkIGQAAIAAhkIEsAAIAAhkIBkAAIAAhjIsgAAIAABjIkrAAIAABkIjIAAgAtRR+IEsAAIAAxMIDIAAIAAhjIEsAAIAAhkImQAAIAABkIhkAAIAABjIhkAAIAABkIjIAAgAj5VGgAtRVGgAAyqJIAAhkIhjAAIAAmQIBjAAIAAGQIBkAAIAAmQIhkAAIAAhkIjHAAIAAhkIDHAAIAAhkIBkAAIAABkIDIAAIAAhkIBkAAIAABkIhkAAIAABkIjIAAIAAhkIhkAAIAABkIBkAAIAABkIBkAAIAAGQIhkAAIAABkgAj51FIAAhjIAAAAIAABjIhkAAIAAhjIhkAAIAAgBIBkAAIAAhkIBkAAIAABkIBkAAIAABkgAld1Fg");
	this.shape_29.setTransform(605,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(50));

	// background
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgxAAIAAAAIBjAAIAAAAg");
	this.shape_30.setTransform(805,-40.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("ABkDIIAAkrIjHAAIAAhkIErAAIAAGPgAjHAAIAAhjIBkAAIAABjg");
	this.shape_31.setTransform(800,-220);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#66CCCC").s().p("ABkDIIAAjIIhkAAIAAhjIhjAAIhkAAIAAhkIDHAAIAABkIDIAAIAAErg");
	this.shape_32.setTransform(790,-220);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("AAAGQI4/AAIAAhkImQAAIAAhkIBkAAIAAgBIABAAIAAjGIgBAAIAAgBIABAAIAAhiIgBAAIAAgBIABAAIAAhkIgBAAIAAAAIABAAIAAhjIgBAAIAAgBIABAAIAAhjIgBAAIAAgBIPoAAIRLAAIK8AAIBkAAIPoAAIAAMfgAV3EsIABAAIAAhkIgBAAgAV3DHIABAAIAAhjIgBAAgAUUDHIAAAAIAAhjIAAAAgAUUBkIAAAAIAAhjIAAAAg");
	this.shape_33.setTransform(660,-120);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6699CC").s().p("ATiH0IAAhkIq8AAIxLAAIvnAAIAAhjIgBAAIAAgBIABAAIAAhkIgBAAIAAAAIjIAAIAAhkIksAAIAAhkIAAAAIAAAAIksAAIAAmPIJYAAIAAhkIGQAAIAABkIOEAAIPnAAIcIAAIAAMfIvoAAIAABkgAWqjHIBkAAIAABkIBkAAIBkAAIAADHIBkAAIBkAAIAAmPIksAAIjIAAg");
	this.shape_34.setTransform(625,-210);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AolQaIAAhkIBkAAIAABkgAqJNSIAAhkIY/AAIAABkgAx9LuIAAhkIBkAAIAABkgAAygxIAAhkIRMAAIAABkgACWu1IAAhkIPoAAIAABkg");
	this.shape_35.setTransform(565,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260,-751.2,753.4,901.2);


// stage content:
(lib.Assignment2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bear_eating:140,bear_playing:130,bear_reading:120,Decision02:110,sleeping_bear:100,bar_scene:90,sleeping_pills:79,bar_outside:69,Decision_phone:55,lying_on_the_bed:46,on_the_subway:36,whole_letter:25,letter_puzzle:15,working:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,36,69,90,100,130];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.start_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('working');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.return_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧编号并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop(0);
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.trash_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('letter_puzzle');
		});
		
		let root = this;
		this.letter01.on("pressmove",moveLetter01);
		function moveLetter01(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
		}
		this.letter01.on("pressup",dropLetter01);
		function dropLetter01(){
			if(root.letter01.x > 446 && root.letter01.x < 536 && root.letter01.y>65 && root.letter01.y <209){
				root.letter01.alpha = 0.5;
			}
		}
		
		this.letter02.on("pressmove",moveLetter02);
		function moveLetter02(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
		}
		this.letter02.on("pressup",dropLetter02);
		function dropLetter02(){
			if(root.letter02.x > 287 && root.letter02.x < 462 && root.letter02.y>275 && root.letter02.y <410){
				root.letter02.alpha = 0.5;
			}
		}
		this.letter03.on("pressmove",moveLetter03);
		function moveLetter03(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
		}
		this.letter03.on("pressup",dropLetter03);
		function dropLetter03(){
			if(root.letter03.x > 287 && root.letter03.x < 462 && root.letter03.y>65 && root.letter03.y <192){
				root.letter03.alpha = 0.5;
			}
		}
		
		
		//this.next_btn.addEventListener("click",playNext);
		//function playNext (){
			//if(root.letter01.alpha = 0.5 && root.letter03.alpha = 0.5){
				//this.gotoAndStop("on_the_subway");
			//}
		//}
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.next_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('whole_letter');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.next_btn01.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('on_the_subway');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.next_btn02.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('lying_on_the_bed');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.phone_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('Decision_phone');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.send_message_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('bar_outside');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.sleep_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('sleeping_pills');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.door_to_bar.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('bar_scene');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.mouth_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('sleeping_bear');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.bear_read_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('bear_reading');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.bear_play_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('bear_playing');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.bear_eat_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('bear_eating');
		});
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.shoe_btn.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并停止播放影片。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndStop('Decision02');
		});
	}
	this.frame_4 = function() {
		playSound("airconditioning");
	}
	this.frame_36 = function() {
		playSound("subway_background");
	}
	this.frame_69 = function() {
		playSound("car_passing_through");
	}
	this.frame_90 = function() {
		playSound("crowds_in_restaurant");
	}
	this.frame_100 = function() {
		playSound("sleeping_music_box");
	}
	this.frame_130 = function() {
		playSound("PacMan");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(32).call(this.frame_36).wait(33).call(this.frame_69).wait(21).call(this.frame_90).wait(10).call(this.frame_100).wait(30).call(this.frame_130).wait(20));

	// return_btn_ly
	this.return_btn = new lib.return_button();
	this.return_btn.name = "return_btn";
	this.return_btn.setTransform(44.05,64.05,0.6667,0.6667);
	new cjs.ButtonHelper(this.return_btn, 0, 1, 2, false, new lib.return_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.return_btn).wait(150));

	// animation14
	this.instance = new lib.Achivement_board04("synched",0);
	this.instance.setTransform(670,520,1,1,0,0,0,130,40);

	this.instance_1 = new lib.bear_eating_animation();
	this.instance_1.setTransform(340,335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},140).wait(10));

	// animation13
	this.instance_2 = new lib.Achivement_board03("synched",0);
	this.instance_2.setTransform(688,520,1,1,0,0,0,130,40);

	this.instance_3 = new lib.PACMan();
	this.instance_3.setTransform(245,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},130).to({state:[]},10).wait(10));

	// animation12
	this.instance_4 = new lib.Achivement_board02("synched",0);
	this.instance_4.setTransform(680,505,1,1,0,0,0,130,40);

	this.instance_5 = new lib.table_lamp("synched",0);
	this.instance_5.setTransform(185,145);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AgxBkIAAjHIBjAAIAADHg");
	this.shape.setTransform(355,470);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AhjCWIAAjHIDHAAIAADHgABkgxIAAhkIBkAAIAABkgABkgxgAjHgxIAAhkIBkAAIAABkg");
	this.shape_1.setTransform(430,425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("ADIEsIAAjIIBkAAIAAhkIhkAAIAAhjIhkAAIAABjIjHAAIAAhjIhkAAIAABjIhkAAIAABkIBkAAIAADIIjIAAIAApXIMfAAIAAJXg");
	this.shape_2.setTransform(430,410);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AuDVGIAA9rIV3AAIAAdrgAq7R+IBkAAIAABkIMfAAIAAhkIBkAAIAApYIhkAAIAAhkIsfAAIAABkIhkAAgAkrFeIHzAAIAAhkInzAAgAq7FeIEsAAIAAhkIksAAgAq7CWIODAAIAAhkIuDAAgAq7gxIODAAIAAhkIuDAAgAhjj5IHzAAIAAhkInzAAgApXj5IGQAAIAAhkImQAAgEglfAVGIAA9rIUUAAIAABkIBkAAIAAcHgEgiXAR+IK8AAIAAhkIq8AAgA3bO2IDIAAIAAhkIjIAAgEgj7AO2IK8AAIAAhkIq8AAgEggzALuIGQAAIAAhkImQAAgA8HImIH0AAIAAhkIn0AAgEgj7AImIGQAAIAAhkImQAAgEgiXAFeIOEAAIAAhkIuEAAgA8HCWIH0AAIAAhkIn0AAgEgj7ACWIGQAAIAAhkImQAAgA8HgxIJYAAIAAhkIpYAAgEgj7gAxIGQAAIAAhkImQAAgA/Pj5IJYAAIAAhkIpYAAgEgj7gD5IDIAAIAAhkIjIAAgAV4u1IAAhkIhkAAIAAhkIBkAAIAABkIBkAAIEsAAIBkAAIAABkgAdswZIAAhkIBkAAIAABkgEAiYgR9IAAhkIBkAAIAAhkIBkAAIAADIg");
	this.shape_3.setTransform(450,325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AiVDIIAAhkIhkAAIAAjHIBkAAIAABjIBkAAIAABkIBjAAIAAhkIBkAAIAAhjIkrAAIAAhkIErAAIAABkIBkAAIAADHIhkAAIAABkgAiVhjg");
	this.shape_4.setTransform(615,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#350000").s().p("Aj5CWIAAhkIhkAAIAAhjIBkAAIAAhkIHzAAIAABkIBkAAIAABjIhkAAIAABkg");
	this.shape_5.setTransform(615,145);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxEsIAAhkIBjAAIAABkgAnBEsIAAhkIhkAAIAAnzIBkAAIAABkIHzAAIAAhkIBkAAIAAHzIhkAAIAAjIIAAhjIhjAAIksAAIhkAAIAABjIAADIIBkAAIAABkgAHCAAIAAhjIjIAAIAAhkIDIAAIAABkIBkAAIAABjg");
	this.shape_6.setTransform(635,190);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("ACWAyIAAhjIUUAAIAABjgA2pAyIAAhjIUUAAIAABjg");
	this.shape_7.setTransform(355,475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Asfc6IAAhkIUTAAIAABkgAvnc6IAAhkIhkAAIAAhkI0UAAIAAhkIhkAAIAA9rIBkAAIAAdrIV4AAIAADIIBkAAIAABkgEglfAc6IAAhkIUUAAIAABkgAH0bWIAAhkI0TAAIAABkIhkAAIAAjIIhkAAIAA8HIhkAAIAAhkI0UAAIAAhkIUUAAIAABkIDIAAIAAdrIV3AAIAABkIBkAAIAABkgEgnDAbWIAAhkIBkAAIAABkgEglfAZygAH0YOIAA9rI13AAIAAhkIV3AAIAABkIBkAAIAAdrgApXWqIAAhkIDIAAIAAjIIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIDIAAIAAhkIBjAAIAABkIBkAAIAABkIhkAAIAAhkIhjAAIAABkIBjAAIAADIIDIAAIAABkgAkrVGIDIAAIAAjIIjIAAgADIVGIAApYIsfAAIAAJYIhkAAIAApYIBkAAIAAhkIMfAAIAABkIBkAAIAAJYgADIVGgEgiXAVGIAAhkIK8AAIAABkgAAAR+gAnzR+IAAhkIBkAAIAABkgA3bR+IAAhkIDIAAIAABkgEgj7AR+IAAhkIK8AAIAABkgAmPQagEggzAO2IAAhkIGQAAIAABkgA8HLuIAAhkIH0AAIAABkgEgj7ALuIAAhkIGQAAIAABkgAkrImIAAhkIHzAAIAABkgAq7ImIAAhkIEsAAIAABkgEgiXAImIAAhkIOEAAIAABkgAq7FeIAAhkIODAAIAABkgA8HFeIAAhkIH0AAIAABkgEgj7AFeIAAhkIGQAAIAABkgAq7CWIAAhkIODAAIAABkgA8HCWIAAhkIJYAAIAABkgEgj7ACWIAAhkIGQAAIAABkgAhjgxIAAhkIHzAAIAABkgApXgxIAAhkIGQAAIAABkgA/PgxIAAhkIJYAAIAABkgEgj7gAxIAAhkIDIAAIAABkgAuDldgAV4qJIAAhkIhkAAIAAhkIBkAAIAABkIH0AAIAABkgAdsrtIAAhkIBkAAIAABkgAfQtRIAAhkIAAn0IhkAAIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAADIIDIAAIAABkIjIAAIAABkIDIAAIAABkIAABkIhkAAIAAhkIhkAAIAABkIBkAAIAABkIDIAAIAABkgASwtRIAAsgIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAAH0IAABkgEAlggO1IAAjIIAAhkIBkAAIAAEsgEAlggO1gAZAu1IAAhkIhkAAIAAhkIEsAAIAABkIhkAAIAABkgAcIx9IAAhkIBkAAIAABkgAV4x9IAAhkIBkAAIAABkgEAj8gThIAAhkIBkAAIAABkgAV41FIAAhkIH0AAIAABkgAV47VIAAhkIH0AAIAABkg");
	this.shape_8.setTransform(450,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4}]},120).to({state:[]},10).wait(20));

	// animation11
	this.bear_eat_btn = new lib.bear_eating();
	this.bear_eat_btn.name = "bear_eat_btn";
	this.bear_eat_btn.setTransform(695,360);
	new cjs.ButtonHelper(this.bear_eat_btn, 0, 1, 2, false, new lib.bear_eating(), 3);

	this.bear_play_btn = new lib.bear_playing();
	this.bear_play_btn.name = "bear_play_btn";
	this.bear_play_btn.setTransform(445.5,521);
	new cjs.ButtonHelper(this.bear_play_btn, 0, 1, 2, false, new lib.bear_playing(), 3);

	this.bear_read_btn = new lib.bear_reading();
	this.bear_read_btn.name = "bear_read_btn";
	this.bear_read_btn.setTransform(189,281.5);
	new cjs.ButtonHelper(this.bear_read_btn, 0, 1, 2, false, new lib.bear_reading(), 3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF66CC").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_9.setTransform(35,225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AkrH0IAAjIIBkAAIAADIgADIGQIAAhkIBkAAIAABkgAkrDIIAAmPIJXAAIAAGPgAhjBkIBjAAIAAhkIhjAAgAAAkrIAAhkIhjAAIAABkIjIAAIAAjIIJXAAIAADIg");
	this.shape_10.setTransform(60,360);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6633").s().p("ArtUUIAAmQIBkAAIAAGQgAKKRMIAAksIBkAAIAAEsgAFeEsIAAmPIBkAAIAAGPgAj5EsIAAmPIBkAAIAAGPgAD6sfIAAn0IBkAAIAAH0g");
	this.shape_11.setTransform(375,250);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AnBUUIAAmQIDIAAIAAGQgAKKEsIAApXIBkAAIAAJXgAtREsIAAmPIDIAAIAAGPgALusfIAAn0IBkAAIAAH0gAgxsfIAAksIBjAAIAAEsg");
	this.shape_12.setTransform(385,250);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006633").s().p("Aq7UUIAAmQIBkAAIAAGQgAEsSwIAAjIIBkAAIAADIgANIPoIiMAAIAAmQIDIAAIAAEsIAABGIAAAegAGQEsIAAnzIBkAAIAAHzgAAAEsIAAsfIBkAAIAAMfgAkrsfIAAn0IBkAAIAAH0gAuDsfIAAksIBkAAIAAEsg");
	this.shape_13.setTransform(390,250);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990066").s().p("AkrUUIAAmQIDIAAIAAGQgAK8EsIAAmPIBkAAIAAGPgAq7EsIAAmPIBkAAIAAGPgADIsfIAAn0IBkAAIAAH0gAsfsfIAAn0IBkAAIAAH0g");
	this.shape_14.setTransform(400,250);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663366").s().p("AAyR+IAAn0IBkAAIAAH0gAj5CWIAAsfIBkAAIAAMfgAHCu1IAAjIIBkAAIAADIgAolu1IAAjIIBkAAIAADIg");
	this.shape_15.setTransform(395,265);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("ACWImIAAjIIDIAAIAADIgAldImIAAjIIDIAAIAADIgACWAyIAApXIDIAAIAABkIhkAAIAABkIBkAAIAAGPgADIiVIAyAAIAAgyIgyAAgAldAyIAApXIDIAAIAACWIgyAAIAAAyIAyAAIAAGPgAj5gxIAyAAIAAgyIgyAAgAkrkrIAyAAIAAgyIgyAAg");
	this.shape_16.setTransform(625,165);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Egx/ARMIAAhkIBkAAIAAhkIDIAAIAABkIBkAAIAABkgEAnEAJYIAAhkIksAAIAAhkIhkAAIAA0TIBkAAIAAhkIEsAAIAAhkIEsAAIAABkIEsAAIAABkIBkAAIAAUTIhkAAIAABkIksAAIAABkgEAqMAGQIEsAAIAAhkIBkAAIAAksImQAAgEAiYAEsIBkAAIAABkIEsAAIAAmQImQAAgEAqMgBjIEsAAIAAhkIBkAAIAApYIhkAAIAAhkIksAAgEAiYgDHIBkAAIAABkIEsAAIAAsgIksAAIAABkIhkAAg");
	this.shape_17.setTransform(360,190);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EAjKAEsIAAhkIBkAAIAABkgEgktgDHIAAhkIEsAAIAABkg");
	this.shape_18.setTransform(425,100);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("ASwakIAAjIIksAAIAABkIuEAAIAAjIIXcAAIAABkIjIAAIAADIgAakJYIAAjIIksAAIAABkIjIAAIAABkIhkAAIAAksIK8AAIAAEsgAAAJYIAAksIJYAAIAAEsgAV4krIAAjIIBkAAIAADIgAGQkrIAAjIIBkAAIAADIgAMgmPIAAhkIBkAAIAABkgAAAmPIAAhkIBkAAIAABkgApXxLIAAhkIH0AAIAABkgAyvxLIAAjIIDIAAIAAmQIBkAAIAAGQIDIAAIAADIgA8HxLIAAhkIH0AAIAABkg");
	this.shape_19.setTransform(300,170);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003333").s().p("AiVXcIiMAAIsgAAIAAn0IAAhkIAAhkIBkAAIAAJYIPnAAIAAAUIAABQgAQaOEIgoAAIAAmQI/PAAIAAhkIfPAAIAA6jIhkAAIAAhkI8HAAIAABkIhkAAIAAUTIhkAAIAAhjIgUAAIAAjIIAUAAIAAxMIBkAAIAAhkIfPAAIAABkIBkAAMAAAAj7gAt5pXIAAhkIcHAAIAABkg");
	this.shape_20.setTransform(389.025,250);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996633").s().p("Ag7CWIAAkrIAUAAIAABkIBjAAIAABjIhjAAIAABkg");
	this.shape_21.setTransform(284.025,315);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AjgCvIAAgyIAyAAIAAAygADhBLIAAgyIAyAAIAAAygAkShKIAAgyIAyAAIAAAygAiuh8IAAgyIAyAAIAAAyg");
	this.shape_22.setTransform(622.5,142.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006600").s().p("AAAD6IAAhkIBkAAIAABkgABkCWIAAhkIBkAAIAABkgAjHgxIAAhkIBkAAIAAhkIBjAAIAADIg");
	this.shape_23.setTransform(50,245);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996600").s().p("AgxCWIAAkrIBjAAIAABkIAABjIAABkg");
	this.shape_24.setTransform(285,275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Eg+QAupIAAhkIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIqAAAIAABkIhkAAIAAhkIgUAAIAApYIAUAAIAAH0IMgAAIAABGIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKICgAAIAAhQIAUAAIAAgKIAUAAIAAgKIgoAAIvoAAIAApYIhkAAIAAhkIBkAAIAAhkIhkAAIAAhkIgUAAIAApXIAUAAIAABkIBkAAIAA0UIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIcHAAIAABkIBkAAIAAakI/PAAIAAhkIABAAIAAhkIgBAAIAAhkIhkAAIAAEsIBkAAIAABjIfPAAIAAGQIhkAAIAAksIjIAAIAAGQIAABGIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIA8AAIAAgeIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIA8AAMAAAgj7IhkAAIAAhkIBkAAIAABkIBkAAMAAAAirIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgJIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAKAAIAABkIgKAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAJIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgTAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKIgUAAIAAAKgAAPMvIAABGIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIgoAAIAAn0IhkAAgAkcMvIDIAAIAAmQIjIAAgApIMvIDIAAIAAmQIjIAAgAsQMvIBkAAIAAmQIhkAAgAvYMvIBkAAIAAmQIhkAAgADXLLIAABGIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIgoAAIAAjIIhkAAgAGfJnIAABGIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIAUAAIAAgKIgoAAIAAksIhkAAgADXDXIAADIIBkAAIAAjIIDIAAIAAhkI3bAAIAADIIOEAAIAAhkgALLi4IBkAAIAAmQIhkAAgAIDi4IBkAAIAApYIhkAAgAE7i4IBkAAIAAn0IhkAAgABzi4IBkAAIAAmQIhkAAgAhUi4IBjAAIAAsgIhjAAgAkci4IBkAAIAAsgIhkAAgAnki4IBkAAIAAmQIhkAAgAqsi4IBkAAIAAmQIhkAAgAvYi4IDIAAIAAmQIjIAAgALLt0IAADIIBkAAIAAksIq8AAIAAEsIBkAAIAAhkIDIAAIAAhkgAvYqsIJYAAIAAksIpYAAgAvYw8IcHAAIAAhkI8HAAgAJn0EIBkAAIAAn0IhkAAgAGf0EIBkAAIAAjIIhkAAgADX0EIBkAAIAAn0IhkAAgAAP0EIBkAAIAAn0IhkAAgAi40EIBkAAIAAksIhkAAgAmA0EIBkAAIAAn0IhkAAgApI0EIBkAAIAAjIIhkAAgAsQ0EIBkAAIAAn0IhkAAgAvY0EIBkAAIAAksIhkAAgAGf4wIBkAAIAAjIIhkAAgApI4wIBkAAIAAjIIhkAAgAi46UIBkAAIAAhkIhkAAgEg5kAS/IAAhkIBkAAIAABkgEgzUARbIAAjIIjIAAIAADIIhkAAIAAjIIhkAAIAADIIhkAAIAAvoIBkAAIAADIIDIAAIAAhkIBkAAIAABkIEsAAIAAjIIpYAAIAAjHIBkAAIAABjIGQAAIAAhjIBkAAIAADHIBkAAIAAPogEgxwAP3IBkAAIAAhkIhkAAgEg5kAMvIJYAAIAAmQIpYAAgEg2cALLIAAhkIBkAAIAABkgAy0GfIAAhkIAUAAIAABkgAw8hUgEgzUgBUIAAhkIjIAAIAAhkIhkAAIAAhkIBkAAIAAhkIksAAIAAksIBkAAIAAhkIDIAAIAABkIhkAAIhkAAIAABkIAABkIDIAAIAAjIIBkAAIAAEsIAABkIBkAAIBkAAIAABkIhkAAIAABkIBkAAIAABkgEg2cgEcIBkAAIAAhkIhkAAgEg4AgBUIAAhkIBkAAIAABkgEg4AgBUgEg2cgC4gAffmAIAAhkIjIAAIAAhkIhkAAIAAhkIhkAAIAA0UIBkAAIAAUUIBkAAIAABkIEsAAIAABkIEsAAIAAhkIEsAAIAABkIjIAAIAABkgEAqbgJIIAAhkIBkAAIAABkgEAr/gKsIAA0UIhkAAIAAhkIBkAAIAABkIBkAAIAAUUgEAkLgKsIAAmQIGQAAIAAEsIhkAAIAAjIIjIAAIAADIIDIAAIAABkgAd7qsIAAhkIDIAAIAAjIIjIAAIAADIIhkAAIAAksIGQAAIAAGQgAy0sQIAAqdIhQAAIAAmvIBkAAIAARMgEAkLgSgIAAsgIEsAAIAABkIjIAAIAAJYIDIAAIAAmQIAAhkIAAhkIBkAAIAAJYIhkAAIAABkgAd7ygIAAhkIhkAAIAApYIBkAAIAAJYIDIAAIAAmQIAAgyIAAiWIjIAAIAAhkIEsAAIAAMggAd79cgAyg9cIAAhkIBkAAIAABkgAyg9cgAaz/AIAAhkIBkAAIAABkgAaz/AgAw8/AIAAhkIfPAAIAABkgAw8/AgEAlvggkIAAhkIksAAIAABkIksAAIAAhkIDIAAIAAhkIH0AAIAABkIDIAAIAABkgEAcXggkgEggkggkIAAhkIhkAAIAAhkIq8AAIAAjIIBkAAIAABkIH0AAIAAhkIn0AAIAAhkIJYAAIAAhkIBkAAIAAksIBkAAIAAGQIjIAAIAADIIH0AAIAAjIIJYAAIAABkIn0AAIAABkIH0AAIAAhkIBkAAIAADIIq8AAIAABkIhkAAIAAhkIksAAIAABkIEsAAIAABkgEgdcgoYIAAmQIBkAAIAAEsIBkAAIAABkg");
	this.shape_25.setTransform(398.5,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.bear_read_btn},{t:this.bear_play_btn},{t:this.bear_eat_btn}]},110).to({state:[]},10).wait(30));

	// animation10
	this.instance_6 = new lib.Achivement_board01("synched",0);
	this.instance_6.setTransform(670,508.95,1,1,0,0,0,130,40);

	this.instance_7 = new lib.bear_sleep_fly();
	this.instance_7.setTransform(220,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},100).to({state:[]},10).wait(40));

	// animation09
	this.instance_8 = new lib.Achivement_board("synched",0);
	this.instance_8.setTransform(687,515.95,1,1,0,0,0,130,40);

	this.instance_9 = new lib.bar_animation();
	this.instance_9.setTransform(405,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8}]},90).to({state:[]},10).wait(50));

	// animation08
	this.instance_10 = new lib.sleeping_pills_btn();
	this.instance_10.setTransform(575,520);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.sleeping_pills_btn(), 3);

	this.mouth_btn = new lib.eat_it();
	this.mouth_btn.name = "mouth_btn";
	this.mouth_btn.setTransform(221.05,205.05);
	new cjs.ButtonHelper(this.mouth_btn, 0, 1, 2, false, new lib.eat_it(), 3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AqJAyIAAhjIUTAAIAABjg");
	this.shape_26.setTransform(365,365);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AqJQaIAA3bIUTAAIAAXbgAldu1IAAhkIK7AAIAABkg");
	this.shape_27.setTransform(365,425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ArtR+IAA9rIBkAAIAAhkIBkAAIAAhkIBkAAIAAjIIODAAIAADIIBkAAIAABkIBkAAIAABkIBkAAIAAdrgAqJQaIUTAAIAA3bI0TAAgAqJolIUTAAIAAhkI0TAAgAldu1IK7AAIAAhkIq7AAg");
	this.shape_28.setTransform(365,425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.mouth_btn},{t:this.instance_10}]},79).to({state:[]},11).wait(60));

	// animation07
	this.instance_11 = new lib.bar_sign();
	this.instance_11.setTransform(338,297.65,0.1769,0.1769,0,0,0,-34.5,-29.7);

	this.instance_12 = new lib.kitty();
	this.instance_12.setTransform(162.6,380.05,0.2509,0.2509);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.kitty(), 3);

	this.instance_13 = new lib.gate();
	this.instance_13.setTransform(540,360);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.gate(), 3);

	this.door_to_bar = new lib.gate();
	this.door_to_bar.name = "door_to_bar";
	this.door_to_bar.setTransform(240,360);
	new cjs.ButtonHelper(this.door_to_bar, 0, 1, 2, false, new lib.gate(), 3);

	this.instance_14 = new lib.bear_outside();
	this.instance_14.setTransform(777.55,370.75,0.3436,0.3436,0,0,0,-74.5,175.1);

	this.instance_15 = new lib.streetlamp();
	this.instance_15.setTransform(733.05,286.6,0.7083,0.7083);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.streetlamp(), 3);

	this.instance_16 = new lib.streetlamp();
	this.instance_16.setTransform(425,286.6,0.7083,0.7083);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.streetlamp(), 3);

	this.instance_17 = new lib.streetlamp();
	this.instance_17.setTransform(145,279.95,0.7083,0.7083);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.streetlamp(), 3);

	this.instance_18 = new lib.moon();
	this.instance_18.setTransform(635,65);

	this.instance_19 = new lib.cars_run_through();
	this.instance_19.setTransform(316,576.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,204,0.2)").s().p("AWqD6IhkAAIAAhkIhkAAIAAhkIBkAAIAABkIXcAAIAABkgA5xD6IAAhkIhkAAIAAhkIhkAAIAAhjIhkAAIAAhkIuEAAIAAhkIOEAAIAABkIBkAAIAABkIBkAAIAABjIBkAAIAABkIXcAAIAAhkIBkAAIAAhjIBjAAIAAhkIBkAAIAAhkIOEAAIAABkIBkAAIAABkIhkAAIAAhkIuEAAIAABkIhkAAIAABjIhjAAIAABkIhkAAIAABkgAR+AyIAAhjIBkAAIAABjg");
	this.shape_29.setTransform(485,215);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#04262B").s().p("EA16AO2IAAgUIAAhQIDIAAIAABQIAAAUgEApaAO2IAAgUIAAhQIBkAAIAABQIAAAUgEAkuAO2IAAgUIAAhQIDIAAIAABQIAAAUgAHCO2IAAgUIAAhQIDIAAIAABQIAAAUgAqJO2IAAgUIAAhQIDIAAIAABQIAAAUgEgshAO2IAAgUIAAhQIDIAAIAABQIAAAUgEg5BAO2IAAgUIAAhQIDIAAIAABQIAAAUgEAvqALuIAAhkIDIAAIAABkgAj5LuIAAhkIDIAAIAABkgEgktALuIAAhkIDIAAIAABkgEgyxALuIAAhkIDIAAIAABkgEApaAImIAAhkIDIAAIAABkgAgxImIAAhkIDHAAIAABkgEg5BAImIAAhkIDIAAIAABkgAj5FeIAAhkIDIAAIAABkgEgpZAFeIAAhkIDIAAIAABkgEgyxAFeIAAhkIDIAAIAABkgEAxOACWIAAhkIDIAAIAABkgEAsiACWIAAhkIDIAAIAABkgAnBCWIAAhkIDIAAIAABkgEAmSgAxIAAhkIDIAAIAABkgEguFgAxIAAhkIDIAAIAABkgEg3dgAxIAAhkIDIAAIAABkgEAyygD5IAAhkIDIAAIAABkgEApagD5IAAhkIDIAAIAABkgAgxj5IAAhkIDHAAIAABkgEg0VgD5IAAhkIBkAAIAABkgEAjKgHBIAAhkIDIAAIAABkgEAgCgHBIAAjIIBkAAIAABkIAABkgAHCnBIAAhkIEsAAIAABkgEgvpgHBIAAhkIBkAAIAABkgAtRolIAAhkIhkAAIhkAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkgAeeqJIAAhkIBkAAIAABkgAO2qJIAAhkIBkAAIAABkgEggBgKJIAAhkIBkAAIAABkgAc6tRIq8AAIhkAAIAAhkIOEAAIAABkgAx9tRIq8AAIhkAAIAAhkIOEAAIAABkg");
	this.shape_30.setTransform(395,305);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#263333").s().p("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");
	this.shape_31.setTransform(395,310);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("Eg+fAR+IAAn0MB8/AAAIAAH0gAMgImIAAgUIBkAAIAAz/IBkAAIAAksIBkAAIAAhkIK8AAIAABkIBkAAIAAEsIBkAAIAAJYIAAAAIAAK7gEggzAImIAA0TIBkAAIAAksIBkAAIAAhkIK8AAIAABkIBkAAIAAEsIBkAAIAAUTgAxLiVIABAAIAAhkIgBAAgAyvj5IABAAIAAhkIgBAAg");
	this.shape_32.setTransform(400,345);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Eg/RAVGIAAhkMB8/AAAIAABkgEA9uALuMh8/AAAIAAhkIBkAAIBkAAIBkAAIDIAAIBkAAIBkAAIBkAAIDIAAIBkAAIDIAAIBkAAIDIAAIBkAAIBkAAIAAhkIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABQIhkAAIAA1jIBkAAIAAhkIBkAAIAABkIDIAAIAAhkIjIAAIAAhkIXcAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIhkAAIAABkIksAAIAABkIEsAAIAAhkIBkAAIAABkIBkAAIAAjIIBkAAIAAhkIBkAAIAABkIhkAAIAAEsIhkAAIAAUTIRMAAIAA0TIhkAAIAAksIBkAAIAADIIBkAAIAAhkIBkAAIAABkIDIAAIAAhkIjIAAIAAhkIhkAAIAAhkIBkAAIAABkIXbAAIAAhkIBkAAIAABkIhkAAIAABkIksAAIAABkIEsAAIAAhkIBkAAIAABkIBkAAIAAjIIBkAAIAAhkIBkAAIAAhkIK8AAIAABkIBkAAIAABkIhkAAIAAhkIq8AAIAABkIhkAAIAAEsIhkAAIAAT/IhkAAIAAhQIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIjIAAIAABQIhjAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABkIBkAAIBkAAIDIAAIBkAAIBkAAIBkAAIDIAAIBjAAIDIAAIBkAAIDIAAIBkAAIBkAAISwAAIAAq7IAAAAIAApYIhkAAIAAksIBkAAIAADIIAAAAIBkAAIAAAAIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAAAAIVuAAIAAAyIAKAAIAAAyIksAAIAABkIAAAAIEsAAIAAAAIAAhkIBkAAIAABkIBkAAIAAVjIhkAAIAAhQIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABQIhkAAIAAhQIjIAAIAABQIhkAAIAAhQIhkAAIAABkIBkAAIBkAAIDIAAI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");
	this.shape_33.setTransform(405,335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.door_to_bar},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},69).to({state:[]},10).wait(71));

	// animation06
	this.instance_20 = new lib.phone_graphic("synched",0);
	this.instance_20.setTransform(392.85,294.2,1.4056,1.4056,0,0,0,0.1,0.1);

	this.sleep_btn = new lib.Sleep();
	this.sleep_btn.name = "sleep_btn";
	this.sleep_btn.setTransform(170.05,494);
	new cjs.ButtonHelper(this.sleep_btn, 0, 1, 2, false, new lib.Sleep(), 3);

	this.send_message_btn = new lib.send_message();
	this.send_message_btn.name = "send_message_btn";
	this.send_message_btn.setTransform(727,226.95);
	new cjs.ButtonHelper(this.send_message_btn, 0, 1, 2, false, new lib.send_message(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.send_message_btn},{t:this.sleep_btn},{t:this.instance_20}]},55).to({state:[]},14).wait(81));

	// animation05
	this.shoe_btn = new lib.walking_btn();
	this.shoe_btn.name = "shoe_btn";
	this.shoe_btn.setTransform(397,568);
	new cjs.ButtonHelper(this.shoe_btn, 0, 1, 2, false, new lib.walking_btn(), 3);

	this.phone_btn = new lib.phone();
	this.phone_btn.name = "phone_btn";
	this.phone_btn.setTransform(677,241.05);
	new cjs.ButtonHelper(this.phone_btn, 0, 1, 2, false, new lib.phone(), 3);

	this.instance_21 = new lib.lying_on_bed();
	this.instance_21.setTransform(425.85,323.9,1,1,0,0,0,140,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.phone_btn},{t:this.shoe_btn}]},46).to({state:[]},9).wait(95));

	// animation04
	this.next_btn02 = new lib.Next_button();
	this.next_btn02.name = "next_btn02";
	this.next_btn02.setTransform(134.55,154.05);
	new cjs.ButtonHelper(this.next_btn02, 0, 1, 2, false, new lib.Next_button(), 3);

	this.instance_22 = new lib.on_the_subway();
	this.instance_22.setTransform(845,360.95,1,1,0,0,0,315,53);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("Aj5FeIAAhkIBkAAIAABkgACWj5IAAhkIBkAAIAABkg");
	this.shape_34.setTransform(455,475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.instance_22},{t:this.next_btn02}]},36).to({state:[]},10).wait(104));

	// animation03
	this.instance_23 = new lib.chicken_Huzzah("synched",0);
	this.instance_23.setTransform(644.95,477.45,0.7864,0.7864);

	this.text = new cjs.Text("Hi, bear,\n    sorry for I lose my temper when you said you don't want to go that trip, and sorry for being so mean to you.\n    just because we haven't meet each other so long time, sometime you are so busy and forget  our date, I always try not to blame you on this and understand you, but when you miss that date, i'm really disapointing of what you do, but after I think we have being friends since highschool, we both need to give each other a oppotunity, so If you can forgive what I said, pleace come to see me in our secret bar tonight, hope to see you there...\n\nyour friend,\nHuzzah", "15px 'Segoe Script'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 380;
	this.text.parent = this;
	this.text.setTransform(301,66.05);

	this.next_btn01 = new lib.Next_button();
	this.next_btn01.name = "next_btn01";
	this.next_btn01.setTransform(104,180.05);
	new cjs.ButtonHelper(this.next_btn01, 0, 1, 2, false, new lib.Next_button(), 3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EggBAlgMAAAhK/MBADAAAMAAABK/gA2p3bIAKAAIAAgKIgKAAgA3H7LIAKAAIAAgKIgKAAg");
	this.shape_35.setTransform(495,290);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("EgVKAnEMAAAhOHMBDLAAAMAAABOHgEgTmAlgMBADAAAMAAAhK/MhADAAAgEguAgIlIAAgKIEsAAIAAAKgAqO3bIAAgKIAKAAIAAAKgAqs7LIAAgKIAKAAIAAAKg");
	this.shape_36.setTransform(415.5,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.next_btn01},{t:this.text},{t:this.instance_23}]},25).to({state:[]},11).wait(114));

	// animation02
	this.next_btn = new lib.Next_button();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(104.55,180);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.Next_button(), 3);

	this.letter03 = new lib.letter_piece03("synched",0);
	this.letter03.name = "letter03";
	this.letter03.setTransform(114.05,410,1,1,0,0,0,29,-24);

	this.letter02 = new lib.letter_piece02("synched",0);
	this.letter02.name = "letter02";
	this.letter02.setTransform(-138.9,378);

	this.letter01 = new lib.letter_piece01("synched",0);
	this.letter01.name = "letter01";
	this.letter01.setTransform(203.05,201);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AWqBkIAAhkIBkAAIAAhjIOEAAIAABjIBkAAIAABkgEgn1ABkIAAhkIBkAAIAAhjIOEAAIAABjIBkAAIAABkg");
	this.shape_37.setTransform(375,590);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#996600").s().p("AYOEsIAAmPIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAGPgEgmRAEsIAAmPIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAjIIBkAAIAADIIBkAAIAAGPg");
	this.shape_38.setTransform(375,540);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AJYWqIAAmQIhkAAIAAjIImQAAIAAksIEsAAIAAhkIksAAIAABkIjHAAIAAjIIAAhkImQAAIAABkIBlAAIAABkIhlAAIAABkIjIAAIAAmQIn0AAIAAq7IGQAAIGQAAIAAhkIDIAAIAAhkIBkAAIAAhkIhkAAIAAhkIDHAAIAAjIIBkAAIAAksIDIAAIAAH0IBkAAIAABkIjIAAIAABkIDIAAIDIAAIAABkImQAAIAABkIH0AAIDIAAIAABkIEsAAIAAdrgAJYO2IDIAAIAAhkIjIAAgAJYLuIDIAAIAAhkIjIAAgAH0ImIJYAAIAAhkIpYAAgAEsFeIJYAAIAAhkIpYAAgAjHCWIODAAIAAhkIuDAAgApXCWIEsAAIAAhkIksAAgABkgxIJYAAIAAhkIpYAAgAmPgxIEsAAIAAhkIksAAgAvngxIGQAAIAAhkImQAAgAAAj5IOEAAIAAhkIuEAAgAsfj5IJYAAIAAhkIpYAAgAjHolIErAAIAAhkIkrAAgAAArtIBkAAIAAhkIhkAAg");
	this.shape_39.setTransform(410,255);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("EAn2AqMIAAhkIhkAAIAAhkIuEAAIAAhkIhkAAIAAmQIBkAAIAAGQIOEAAIAAmQIBkAAIAAGQIhkAAIAABkIBkAAIAABkIBkAAIAABkgEAVGAqMIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgEgWpAqMIAAhkIhkAAIAAhkIuEAAIAAhkIhkAAIAAmQIBkAAIAAjIIBkAAIAADIIhkAAIAAGQIOEAAIAABkIBkAAIAABkIBkAAIAABkgEgpZAqMIAAhkIBkAAIAABkgEgn1AooIAAhkIBkAAIAABkgEgmRAnEgEgYNAlgIAAmQIBkAAIAAGQgEgYNAlggEAkuAfQIAAjIIBkAAIAADIgEAhmAfQIAAjIIhkAAIAADIIhkAAIAAjIIhkAAIAADIIhkAAIAAjIIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAADIgAYOfQIAAjIIBkAAIAADIgA5xfQIAAjIIhkAAIAADIIhkAAIAAjIIhkAAIAADIIhkAAIAAjIIhkAAIAADIIhkAAIAAjIIhkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAADIgANTMgIAAhkIgBAAIAAksIhkAAIAAjIImQAAIAAkrIjIAAIAAjIIhkAAIAABkIhjAAIAABkImQAAIAAmQImQAAIAABkIhkAAIAAxMIBkAAIAABkIEsAAIAAhkIJXAAIAAksIDIAAIAAjIIBkAAIAAksIGQAAIAAH0IBkAAIAADIIDIAAIAABkIBkAAIAABkIDIAAIAABkIDIAAIAAhkIBkAAMAAAAiXgAD6mPIAADIIDIAAIAAErIGQAAIAADIIBkAAIAAGQIJYAAIAA9rIksAAIAAhkIjIAAIAAhkIhkAAIAAhkIjIAAIAAhkIAAhkIhkAAIAAn0IjIAAIAAEsIhkAAIAADIIjIAAIAABkIAABkIAABkIjHAAImQAAIAABkImQAAIAAK8IH0AAIAAGQIDIAAIAAhkIBlAAIAAhkgAKKMgIAAhkIBkAAIAABkgAHCMgIAAhkIBkAAIAABkgAD6MgIAAhkIBkAAIAABkgAAzMgIAAhkIBjAAIAABkgAiUMgIAAhkIBjAAIAABkgAldMgIAAhkIBkAAIAABkgAolMgIAAhkIBkAAIAABkgArsMgIAAhkIBjAAIAABkgAu1MgIAAhkIBkAAIAABkgAu1JYIAAhkIBkAAIAABkgAu1GQIAAhkIBkAAIAABkgAu1DIIAAhkIBkAAIAABkgAu1AAIAAhjIBkAAIAABjgAu1jHIAAhkIBkAAIAABkgAYO3bIAAhkIBkAAIAABkgAu14/IAAhkIBkAAIAABkgAYO6jIAAhkIBkAAIAABkgAu18HIAAhkIBkAAIAABkgAYO9rIAAhkIBkAAIAABkgAu1/PIAAhkIBkAAIAABkgEAYOggzIAAhkIBkAAIAABkgEgO1giXIAAhkIBkAAIAABkgEAYOgj7IAAhkIBkAAIAABkgEgO1glfIAAhkIBkAAIAABkgEAYOgnDIAAhkIhkAAIAAhkIBkAAIAABkIBkAAIAABkgEATigonIAAhkIBkAAIAABkgEAQbgonIAAhkIBjAAIAABkgEANTgonIAAhkIBjAAIAABkgEAKKgonIAAhkIBkAAIAABkgEAHCgonIAAhkIBkAAIAABkgEAD6gonIAAhkIBkAAIAABkgEAAzgonIAAhkIBjAAIAABkgEgCUgonIAAhkIBjAAIAABkgEgFdgonIAAhkIBkAAIAABkgEgIlgonIAAhkIBkAAIAABkgEgLsgonIAAhkIBjAAIAABkgEgO1gonIAAhkIBkAAIAABkg");
	this.shape_40.setTransform(375,330);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AImOEIAAhkIDIAAIAABkgAImK8IAAhkIDIAAIAABkgAHCH0IAAhkIJYAAIAABkgAAyH0IAAhkIEsAAIAABkgAD6EsIAAhkIJYAAIAABkgAnAEsIhlAAIAAhkIGQAAIAABkgAj5BkIAAhkIODAAIAABkgAqJBkIAAhkIEsAAIAABkgAAyhjIAAhkIJYAAIAABkgAnBhjIAAhkIEsAAIAABkgAwZhjIAAhkIGQAAIAABkgAgxkrIAAhkIODAAIAABkgAtRkrIAAhkIJYAAIAABkgACWpXIAAhkIGQAAIBkAAIAABkgAj5pXIAAhkIErAAIAABkgAtRpXIAAhkIGQAAIAABkgACWsfIAAhkIDIAAIAABkgAgxsfIAAhkIBjAAIAABkgAj5sfIAAhkIBkAAIAABkg");
	this.shape_41.setTransform(415,260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.letter01},{t:this.letter02},{t:this.letter03},{t:this.next_btn}]},15).to({state:[]},10).wait(125));

	// animation01
	this.trash_btn = new lib.trash_can();
	this.trash_btn.name = "trash_btn";
	this.trash_btn.setTransform(448.55,539.05,0.5467,0.5467);
	new cjs.ButtonHelper(this.trash_btn, 0, 1, 2, false, new lib.trash_can(), 3);

	this.instance_24 = new lib.Door();
	this.instance_24.setTransform(348.6,160.7,0.6417,0.6417);
	new cjs.ButtonHelper(this.instance_24, 0, 1, 2, false, new lib.Door(), 3);

	this.instance_25 = new lib.animation01_Working();
	this.instance_25.setTransform(293.05,370.9,0.6191,0.6191,0,0,0,585,-154.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_42.setTransform(515,535);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.instance_25},{t:this.instance_24},{t:this.trash_btn}]},4).to({state:[]},11).wait(135));

	// start_btn_ly
	this.start_btn = new lib.start_button();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(381,189.9,1,1,0,0,0,-70,-64);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.start_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).to({_off:true},1).wait(149));

	// start_interface
	this.instance_26 = new lib.knock_door_sign("synched",0);
	this.instance_26.setTransform(386,365,1,1,0,0,0,-35,-40);

	this.instance_27 = new lib.door_knob();
	this.instance_27.setTransform(616,468.95,1,1,0,0,0,-10,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26}]}).to({state:[]},1).wait(149));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(193,298.6,1497,415.4);
// library properties:
lib.properties = {
	id: '979187D2C6D10F44B2DD532936B16428',
	width: 800,
	height: 600,
	fps: 24,
	color: "#663333",
	opacity: 1.00,
	manifest: [
		{src:"sounds/airconditioning.mp3?1637845028027", id:"airconditioning"},
		{src:"sounds/car_passing_through.mp3?1637845028027", id:"car_passing_through"},
		{src:"sounds/clicksound.mp3?1637845028027", id:"clicksound"},
		{src:"sounds/crowds_in_restaurant.mp3?1637845028027", id:"crowds_in_restaurant"},
		{src:"sounds/iphone锁屏声音_爱给网_aigei_com.mp3?1637845028027", id:"iphone锁屏声音_爱给网_aigei_com"},
		{src:"sounds/PacMan.mp3?1637845028027", id:"PacMan"},
		{src:"sounds/打开抽屉OpeningDrawer_爱给网_aigei_com.mp3?1637845028027", id:"打开抽屉OpeningDrawer_爱给网_aigei_com"},
		{src:"sounds/sleeping_music_box.mp3?1637845028027", id:"sleeping_music_box"},
		{src:"sounds/subway_background.mp3?1637845028027", id:"subway_background"},
		{src:"sounds/综合环境音效包汽车驶过大街上车辆很多马路公路环境音_爱给网_aigei_com.mp3?1637845028027", id:"综合环境音效包汽车驶过大街上车辆很多马路公路环境音_爱给网_aigei_com"},
		{src:"sounds/翻页1PageTurn1_爱给网_aigei_com.mp3?1637845028027", id:"翻页1PageTurn1_爱给网_aigei_com"},
		{src:"sounds/苹果手机发出短信到达提示音综艺节目_系统提示_爱给网_aigei_com.mp3?1637845028027", id:"苹果手机发出短信到达提示音综艺节目_系统提示_爱给网_aigei_com"},
		{src:"sounds/门把手DoorHandle_爱给网_aigei_com.mp3?1637845028027", id:"门把手DoorHandle_爱给网_aigei_com"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['979187D2C6D10F44B2DD532936B16428'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
