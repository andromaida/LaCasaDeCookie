(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"LaCasaDeCookie_atlas_", frames: [[1283,0,32,32],[0,0,1281,721],[0,723,1280,720],[1282,723,64,64]]}
];


// symbols:



(lib.ComboBox = function() {
	this.spriteSheet = ss["LaCasaDeCookie_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.game_background_final1 = function() {
	this.spriteSheet = ss["LaCasaDeCookie_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.startpage = function() {
	this.spriteSheet = ss["LaCasaDeCookie_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.zoomin3 = function() {
	this.spriteSheet = ss["LaCasaDeCookie_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.clock_caliperscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56770").s().p("AgogiIBRAAIgpBFg");
	this.shape.setTransform(53.5,18.5,1,1,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C03D").s().p("AiHCMQgTgFgJgRIgWglQgKgRAGgSQAFgTAQgJIEZiYQAUgMAVAKQASAJALAVQAMAVgDAUQgCAXgTALIkPClQgMAHgMAAIgLgBg");
	this.shape_1.setTransform(32.1,36.7,1,1,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD9327").s().p("AiMCtQgYgKgQgbQgagrgMgWQgPgbADgaQADgZARgHICyhMQBpgtBFglQAUgLAWAMQAUALAOAXQANAYAAAXQgBAZgTAMQhDAphcBEQhmBPg0AmQgHAFgKAAQgKAAgLgFg");
	this.shape_2.setTransform(30.2,39.6,1,1,-12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#898989").s().p("AjyDzQhlhlABiOQgBiNBlhlQBlhkCNgBQCOABBlBkQBkBlAACNQAACOhkBlQhlBliOAAQiNAAhlhlgAjrjrQhiBiAACJQAACKBiBiQBiBiCJAAQCKAABihiQBihiAAiKQAAiJhihiQhihiiKAAQiJAAhiBig");
	this.shape_3.setTransform(34.4,34.4,1,1,-12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("AjuDvQhkhjAAiMQAAiLBkhkQBjhjCLAAQCNAABjBjQBjBkAACLQAACMhjBjQhkBkiMAAQiLAAhjhkg");
	this.shape_4.setTransform(34.4,34.4,1,1,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock_caliperscopy, new cjs.Rectangle(0,0,68.9,68.9), null);


(lib.success_counter_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.outputTXT = new cjs.Text("מספר ההצלחות", "bold 14px 'Segoe UI'", "#333333");
	this.outputTXT.name = "outputTXT";
	this.outputTXT.textAlign = "center";
	this.outputTXT.lineHeight = 21;
	this.outputTXT.lineWidth = 121;
	this.outputTXT.parent = this;
	this.outputTXT.setTransform(0,-6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACDEDF").s("#FEFEFE").ss(1,1,1).rr(-63.85,-16.25,127.7,32.5,8.7);
	this.shape.setTransform(0,0,1.053,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.outputTXT}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.success_counter_btn, new cjs.Rectangle(-68.2,-17.2,136.4,34.5), null);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smoke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3C3C").s().p("AhSLvQgjgfgLgoQgUhGA9gyQBhhPgUh1QgIgugbgoQhgiRh3h9QgZgagUgfQhQh6AkiGQAJgfAcgMQBsgvBxAuQBDAbA2gpQAvgkAAg8QAAhAgpgwQhrh9h2h1QgugtAOg8QAOg8A5gcIgTAyQAyBPBeAkQAiAOAjASQD1CIA/EHQALAvgCAwQgFBlhOA3QghAWgnACQg/AHg3AVQgMAFgHAMQhKB2BkBlQBCBEAoBUQBCCLiEBdQhhBFg+BiQgEAHgCAJQBpB+gwCYQgFARgKAQQAYiWh2hqg");
	this.shape.setTransform(-2.5,-21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3C3C").s().p("AgcMuQgRgYgWgXIgSgTQgagYgMgdQgEgJgCgJQgShGA7gzIACgCQAbgXARgaQAfgvAAg4QAAgVgEgWQgJgugbgoIgZglIgqg6QhFhdhNhTQgMgMgLgPQgLgOgKgQIgLgUQg4hmAZhuIAFgTQAJgeAcgMQAWgKAWgFQAggJAggBQAegBAeAHQAZAFAaAKQA8AYAxgiIAIgGQAugjgBg8QAAg/gpgvQhKhXhQhTIhGhHQgZgZgGgeQgGgYAHgaQANg7A5gcIgRAtIgCAFQAsBHBRAkIATAIQAXAJAVALIAZANQDUB1BLDUQANAiAIAlIACAMQAJApgDAqIAAADQgFBUg5A0IgVAPQggAWgnACIgbAEQgvAHgqARQgNAEgHAMQgaApgFAnQgDAVAEAWQAKAwAsAtQBABEAoBUQAWAuAAApIAAAKQgDBAg4AzQgLAKgNAKQhAAxg0A8QgXAcgUAgQgFAHgBAJQAZAgAPAjIAGALQArBegiBrIgDALQgFAMgHALQARhsg3hVg");
	this.shape_1.setTransform(-2.3,-21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B3C3C").s().p("AggMtQgQgZgWgXIgSgTQgagYgKgeQgEgJgCgJQgQhGA6g0IACgCQAagYAQgaQAdgvgBg4QAAgVgEgWQgKgugbgoIgZglIgqg6QhFhdhLhTQgMgNgLgPQgKgPgJgPIgLgUQg0hlAbhqIAFgTQAKgdAcgMQAVgJAWgGQAggJAfgCQAegBAeAGQAZAEAYAJQA7AXAvgiIAIgFQAsgkgBg7QgBg+gpgvQhJhWhPhSIhGhHQgYgZgGgeQgFgYAGgaQANg7A5gbIgRAtIgCAFQAtBHBQAkIAUAJQAWAIAVALIAaANQDTB2BMDVQAMAiAIAlIADAMQAIApgDAqIAAADQgFBTg6AzQgJAIgLAIQggAVgnACIgbAEQguAHgqAQQgMAFgHALQgaApgGAmQgDAUAEAWQAJAwAqAtQBABDAnBUQAWAuAAAoIAAAKQgCA/g1A0QgLALgMAKQg+Ayg1A9QgYAcgUAgQgFAHgCAIQAZAhAOAjIAFALQAsBfgiBsIgDAKQgFANgHALQARhtg5hVg");
	this.shape_2.setTransform(-2.1,-21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3C3C").s().p("AgjMsQgRgZgVgYIgSgTQgZgZgKgeIgEgSQgOhGA4g1IACgCQAZgYAPgbQAcgvgDg5QAAgUgFgXQgKgugagnIgaglIgrg6QhFhdhIhUQgMgNgKgPQgKgPgJgPIgKgUQgxhkAehmIAFgTQAKgcAcgMQAVgJAWgGQAggJAfgDQAdgBAdAFQAZAEAYAIQA5AWAugiIAHgGQArgjgCg6QgCg+gogvQhJhWhPhRIhEhHQgYgYgGgeQgFgYAGgZQAOg7A4gbIgRAuIgCAFQAtBGBQAkIAUAJQAXAIAVALIAaANQDTB2BLDWQAMAjAIAlIADAMQAHApgDAqIAAADQgFBSg5AyQgJAIgLAIQggAVgmACIgbAEQguAHgqAQQgMAEgHAMQgaAngGAmQgDAUAEAVQAIAwApAtQA+BDAnBSQAVAuABAoIAAAKQAAA/g0A1QgJAKgNALQg7Azg3A+QgXAcgVAgQgFAHgCAIQAXAhANAjIAFALQAtBggiBtIgDAKQgFAMgHAMQARhug6hVg");
	this.shape_3.setTransform(-1.9,-21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3C3C").s().p("AgmMqQgRgZgVgYIgSgUQgYgZgIgdQgDgJgCgKQgLhGA2g2IACgCQAYgZAOgbQAagwgDg4QgBgVgFgWQgKgugbgnIgaglIgqg6QhFhdhHhVQgLgNgKgPQgKgPgIgPIgJgUQguhjAghjIAFgRQALgcAcgMQAVgJAWgGQAggJAfgDQAcgDAdAFQAXADAYAIQA4AUArgiIAHgFQAqgjgDg6QgCg9gogvQhIhVhPhQIhEhHQgXgZgGgdQgEgYAGgZQAOg6A3gbIgQAuIgCAFQAsBHBRAjIAUAJQAXAJAVAKIAaAOQDTB2BLDXQAMAiAIAlIACAMQAIAqgEAqIAAADQgGBRg4AyIgUAPQggAVglACIgbADQgtAIgqAQQgMAEgHALQgaAngGAkQgEAUAEAWQAHAvApAsQA7BDAnBSQAWAtABAnIAAAKQABBAgxA1QgJALgMALQg6A1g4A+QgYAcgVAgQgFAHgCAIQAVAhANAjIAEAMQAvBggiBuIgDAKQgFAMgHAMQARhug8hXg");
	this.shape_4.setTransform(-1.7,-21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B3C3C").s().p("AgpMpQgSgZgVgZIgRgUQgYgagHgdQgCgJgBgKQgKhGA0g3IACgCQAYgZANgcQAZgwgFg5QgBgUgFgWQgLgugbgnIgaglIgqg6QhFhehFhVQgLgNgJgPQgKgPgHgPIgJgTQgqhiAhhgIAGgRQALgbAcgMQAWgJAWgGQAfgKAfgDQAcgDAbAEQAXADAXAHQA3ASAqghIAGgGQAogjgDg5QgDg8gnguQhIhVhOhQIhDhGQgXgZgGgdQgEgXAGgaQAOg5A3gbIgQAuIgCAFQAtBHBRAkIAUAIQAWAJAVALQAOAGAMAHQDUB3BKDXQANAjAHAlIACAMQAIAqgEAqIAAADQgHBQg3AxIgUAPQggAVglACIgaADQgtAHgqAQQgMAEgHALQgZAngHAjQgEAUADAVQAHAvAoAsQA6BDAmBRQAVAsACAnIAAAKQADBAgvA2QgJALgMALQg3A2g5A+QgZAcgVAgQgFAIgDAIQAVAhALAkIAEALQAwBhgiBuIgDALQgFAMgHAMQARhvg9hXg");
	this.shape_5.setTransform(-1.5,-21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B3C3C").s().p("AgsMnQgSgZgVgZIgRgUQgXgbgFgdIgEgTQgHhGAzg5IABgCQAXgZANgcQAWgwgFg5QgBgVgGgWQgLgtgbgnIgbglIgqg6QhFhehDhWQgKgNgJgPQgJgPgHgQIgJgSQgmhhAjhcIAHgRQALgaAcgLQAWgKAVgGQAggKAegEQAbgDAbADQAXACAWAHQA1ARApgiIAGgGQAmgigDg5QgEg7gnguQhIhUhNhPIhDhHQgWgYgFgdQgEgXAGgZQAOg5A3gbIgRAuIgBAFQAsBHBSAkIAUAIIAsAUIAZANQDVB4BJDYQANAjAHAlIACAMQAHApgEAqIAAADQgHBPg3AxQgJAIgLAHQgfAVglACIgaADQgtAHgpAQQgMAEgHALQgaAlgHAjQgEAVADATQAHAvAmArQA4BDAnBQQAUAsACAnIABAKQAFA/guA3QgIAMgLALQg2A3g6A/QgZAcgWAgQgFAHgCAJQASAhALAkIADALQAyBigiBvIgEAKQgEANgIAMQAShwg/hYg");
	this.shape_6.setTransform(-1.4,-21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3B3C3C").s().p("AguMmQgTgZgUgaIgRgUQgXgbgEgeIgDgTQgGhGAyg6IABgCQAXgaALgcQAVgxgGg5QgCgUgFgWQgMgtgcgnIgaglIgqg6IiGi1QgKgNgJgPQgJgQgGgPIgIgSQgihgAkhZIAHgQQAMgZAcgLQAWgJAVgHQAggKAdgFQAbgEAbADQAWABAVAHQA0APAmghIAGgGQAlgjgEg3QgEg7gnguQhHhThNhPQgigjgggjQgWgYgFgdQgEgXAHgZQAOg5A2gaIgRAuIgBAFQAtBHBSAkIAUAJQAWAIAWALQANAGAMAIQDVB3BJDZQAMAjAIAmIACAMQAHApgFAqIAAADQgHBOg3AxIgUAOQgfAVgkACIgaADQgsAHgpAPQgMAEgHALQgaAlgHAiQgEAUADAUQAFAuAlArQA3BCAmBQQAVArACAnIABAJQAGBAgsA4QgHALgLAMIhvB4QgaAcgWAgQgFAHgCAJQARAhAKAkIAEAMQAyBigjBwIgDAKQgFANgHAMQARhxg/hYg");
	this.shape_7.setTransform(-1.2,-21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3C3C").s().p("AgxMlIgngzIgRgWQgVgbgEgeIgCgTQgEhGAwg7IACgCQAVgaAKgdQAUgxgIg5QgCgUgFgWQgNgtgbgnIgbglIgqg6QhFheg/hYQgKgNgIgQQgIgPgHgPIgGgSQgfhfAmhVIAHgQQANgYAcgLQAWgJAVgHQAggLAdgFQAagEAaACQAVABAVAFQAyAPAlgiIAGgGQAjgigEg3QgFg6gngtQhHhThMhOQgigjgfgjQgWgZgEgcQgEgXAGgZQAPg4A2gaIgRAuIgBAFQAtBHBSAkIAUAJIAsATIAZAOQDVB4BJDaQAMAjAHAlIACAMQAHAqgFAqIAAADQgIBNg2AwIgTAPQgfAUglACIgZADQgsAHgoAPQgMAEgHAKQgaAkgIAiQgEAUADATQAFAuAkArQA1BCAmBPQAUAqADAmIABAKQAHBAgpA4QgIAMgKALQgyA7g8A/QgaAdgXAgQgFAHgCAJQAQAhAJAkIADAMQAzBjgiBxIgEAKQgEANgHAMQARhyhBhYg");
	this.shape_8.setTransform(-1.1,-21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B3C3C").s().p("Ag0MjIgngzIgQgWQgVgcgDgeIgBgSQgChHAug8IACgCQAUgbAKgdQASgxgJg5QgCgVgGgWQgNgsgbgnIgbglIgrg6QhFhfg8hYQgKgNgIgQIgOgeIgGgSQgbhdAphTIAHgOQANgYAcgLIArgQQAfgLAdgGQAagEAZABQAVAAAUAFQAxANAjgiIAFgFQAigigFg3QgFg5gmgtQhHhShMhOQgigigegkQgVgYgFgcQgDgXAGgZQAPg3A1gaIgRAuIgBAFQAtBIBSAjIAVAJQAWAJAWALIAaANQDUB5BJDaQAMAkAHAlIACAMQAGAqgFAqIAAADQgIBMg2AvIgTAPQgfAUgkACIgZADQgrAHgoAPQgMAEgHAKQgaAjgIAhQgEATACATQAEAuAjAqQAzBCAmBOQAUAqADAmIABAKQAJBAgnA5QgHAMgKALQgvA8g+BAQgaAcgXAhQgGAHgCAIQAOAiAIAlIAEALQA0BkgjBxIgDALQgFANgGAMQARhzhDhZg");
	this.shape_9.setTransform(-0.9,-21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3B3C3C").s().p("Ag2MiIgog0IgPgWQgVgdgBgeIgBgSQAAhHAtg9IABgCQAUgcAJgdQAQgygKg5QgCgUgGgWQgOgsgbgnIgbglIgrg6QhFhfg6hZQgJgNgIgQQgIgPgFgPIgGgSQgXhcAqhPIAIgOQANgXAcgLIArgQQAggLAcgHQAZgFAZABQAUAAAUAEQAvAMAhgiIAFgGQAggigFg2QgGg4gmgtQhGhRhMhNQghgjgegjQgVgYgEgcQgDgXAGgYQAPg3A1gaIgRAuIgBAFQAuBIBSAkIAUAIQAXAJAVALIAaAOQDVB4BJDcQAMAjAGAmIACAMQAGAqgFAqIgBADQgIBLg2AvQgIAHgKAHQgfAUgjACIgZADQgrAHgoAOQgLAEgHAKQgaAigJAhQgFATACATQAEAtAiAqQAxBBAmBOQAUAqADAlIACAJQAKBAglA6QgGANgKALQguA9g/BBQgbAcgXAgQgFAIgDAIQAOAiAHAlIADAMQA1BkgjByIgDALQgFANgGAMQARh0hEhZg");
	this.shape_10.setTransform(-0.8,-21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B3C3C").s().p("Ag4MhIgog1IgQgXQgTgdAAgeIgBgSQADhHAqg+IACgCQATgcAIgdQAOgzgKg5QgDgVgHgVQgNgsgcgnIgbglIgrg6QhFhfg4hZQgJgOgHgQQgIgPgFgPIgFgSQgUhbAthLIAIgOQAOgWAcgLIArgQQAfgLAcgIQAZgFAXAAQAUgBATAEQAuAKAggiIAEgFQAfgigGg1QgHg4glgtQhGhQhLhNQgigigdgjQgUgYgEgdQgDgWAHgYQAOg2A1gaIgRAuIgBAFQAuBIBSAkIAVAIQAWAJAWALIAaAOQDVB5BIDcQAMAkAGAmIACAMQAGAqgGAqIAAADQgJBKg1AuIgTAOQgeATgjADIgZADQgqAGgoAPQgLAEgHAJQgaAigJAgQgFASACATQADAtAhAqQAwBBAlBNQATApAEAkIACAKQAMBAgjA7QgGAMgJAMQgsA/hABAQgcAdgXAgQgFAIgDAIQAMAiAGAlIADAMQA3BlgjBzIgEAKQgFAOgGAMQARh1hFhZg");
	this.shape_11.setTransform(-0.7,-21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3B3C3C").s().p("Ag6MfQgVgagTgbIgQgXQgTgdACgfIAAgSQAEhHApg/IACgCQASgdAGgdQANgzgLg6QgDgUgHgVQgOgtgcgmIgbglIgrg6QhFhfg2haQgJgPgHgPQgHgQgEgOQgDgKgBgIQgRhZAuhJIAIgNQAPgVAcgLIArgQQAfgMAbgIQAZgFAXgBQAUgBASADQAsAJAegiIAFgGQAcgigGg0QgHg4glgrQhGhQhLhNQghghgcgkQgUgXgEgdQgDgWAHgYQAPg1A0gaIgRAvIAAAFQAtBHBTAkIAUAJQAXAJAVALIAaANQDWB6BIDdQALAkAHAlIABAMQAGArgGAqIgBADQgIBJg1AtIgTAOQgeATgjADIgYADQgqAGgnAOQgMAEgHAKQgZAhgKAfQgFASACASQACAtAgApQAuBBAlBMQATApAEAkIACAKQAOBAghA7QgGANgIAMQgqBAhCBBQgcAdgXAgQgGAHgDAJQALAiAFAlIADAMQA4BlgjB1IgEAKQgFAOgGAMQARh2hGhag");
	this.shape_12.setTransform(-0.6,-21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3B3C3C").s().p("Ag9MeQgVgagTgcIgPgXQgSgeACgfIABgSQAGhHAohAIABgCQASgeAFgdQAMg0gNg5QgDgVgHgVQgPgsgcgmIgbglIgrg6QhFhgg0haQgJgPgGgPQgHgQgEgOIgDgSQgNhYAwhFIAIgNQAPgUAdgLIArgQIA5gVQAYgGAXgBQATgCARADQArAHAcgiIAFgFQAbgigHg0QgIg3glgrQhFhPhKhMQghgigcgjQgTgYgEgcQgCgWAGgXQAPg2A0gZIgRAvIAAAFQAtBHBTAkIAUAJQAXAJAWALIAaAOQDWB6BHDdQAMAkAGAmIACAMQAFArgHAqIAAADQgJBIg1AtIgSANQgeATgiADIgZADQgpAGgnAOQgLAEgHAJQgaAggKAfQgFARABATQACAsAfApQAsBAAlBMQATAoAEAkIACAJQAQBBgfA8QgFANgJAMQgnBBhEBCQgcAcgXAhQgGAHgDAJQAJAiAEAmIADAMQA5BlgjB1IgEALQgFAOgGAMQARh3hIhag");
	this.shape_13.setTransform(-0.5,-21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3B3C3C").s().p("Ag+McQgWgagTgcIgOgYQgSgeAEgfIABgSQAIhHAmhCIABgCQARgdAFgeQAJg0gNg6QgEgUgHgVQgPgsgdgmIgbglIgrg6QhFhggyhbQgIgPgGgPQgHgQgDgPQgCgJgBgIQgJhXAyhBIAJgMQAPgUAdgKIAqgRIA6gWQAXgGAWgCQASgCARACQApAGAbgiIAEgGQAagigIgzQgIg2glgrQhFhOhJhMQghghgbgjQgTgYgDgcQgDgWAHgXQAPg1A0gZIgRAvIgBAFQAuBIBTAjIAUAJQAXAJAWALIAaAOQDWB6BHDfQAMAkAFAmIACAMQAFArgHApIAAADQgKBHg0AtIgSANQgdATgiADIgZADQgpAGgmAOQgLADgHAJQgaAggKAeQgGARABATQACArAdAoQAqBBAlBLQATAnAFAjIACAKQARBAgdA9QgFAOgHAMQgmBDhFBCQgcAcgYAhQgGAHgDAJQAIAiADAmIACAMQA7BmgkB2IgDALQgFANgHANQASh4hJhbg");
	this.shape_14.setTransform(-0.5,-21.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3B3C3C").s().p("AhAMbQgWgagSgdIgPgYQgRgfAFgfIACgSQAKhHAkhDIABgCQAQgeAEgeQAIg1gPg5QgEgUgHgVQgQgsgcgmIgbglIgrg5QhFhhgwhcQgIgPgGgPQgGgQgDgPIgCgRQgGhWA0g+IAJgLQAQgTAcgKIArgRIA5gXQAXgGAVgDQASgDAQABQAoAFAZgiIAEgFQAYgigIgyQgJg2glgqQhEhPhJhKQghgigagjQgTgXgDgcQgCgWAHgXQAPg0AzgZIgRAvIAAAFQAtBIBUAjIAUAJQAXAJAWALIAaAPQDWB6BHDfQALAkAGAnIACAMQAFArgIApIAAADQgKBGg0AsIgSAOQgdASgiADIgXADQgpAGgmANQgLAEgHAJQgaAegLAeQgFAQABATQAAAqAcApQApBAAkBKQATAnAGAjIACAKQASBAgbA+QgEANgHANQgkBEhGBCQgdAdgYAhQgGAHgDAJQAGAiADAmIABANQA8BmgjB3IgEALQgEANgHANQARh5hKhbg");
	this.shape_15.setTransform(-0.4,-21.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3B3C3C").s().p("AhBMaQgWgbgTgdQgIgMgGgMQgRggAGgfIADgSQAMhHAjhEIABgCQAPgeADgfQAHg1gQg6QgFgUgHgVQgQgrgdgmIgbglIgrg5QhFhhguhdQgIgPgFgPQgGgQgCgPIgCgRQgChUA2g7IAJgLQARgSAcgKIArgRIA4gYQAXgHAUgDQARgDAQAAQAmADAXghIAEgGQAWghgIgyQgKg1gkgqQhEhOhJhKQghghgZgjQgSgXgDgcQgCgWAHgWQAPg0AzgZIgRAvIAAAFQAuBIBTAkIAVAIQAXAJAVAMIAbAOQDWB7BGDgQAMAkAFAnIACAMQAFArgIApIgBADQgKBFgzAsIgSANQgdASghADIgYADQgoAGgmANQgLADgHAJQgZAegMAdQgFAQAAATQAAApAbApQAnBAAkBJQATAmAGAjIACAJQAUBBgZA+QgDAOgIANQghBFhHBDQgeAdgYAgQgGAIgEAIQAGAjABAmIABANQA+BngkB4IgEAKQgEAOgHANQASh6hMhbg");
	this.shape_16.setTransform(-0.4,-21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B3C3C").s().p("AhDMYQgXgagSgdIgOgaQgQgfAIggIADgSQAOhHAhhFIABgCQAPgfABgfQAFg1gRg6QgEgUgIgVQgRgrgcgmIgcglQgWgcgVgdQhFhigshdQgHgPgFgPQgGgRgBgOQgCgJABgIQABhTA4g3IAJgLQARgRAdgKIArgRIA3gYQAWgIAUgEQARgEAPAAQAkACAWgiIADgFQAVgigJgxQgKg0gkgqQhEhNhIhJQggghgZgjQgSgYgCgbQgCgWAHgWQAPgzAzgZIgRAvIgBAFQAuBIBUAkIAVAJQAXAJAVALIAbAOQDWB8BGDgQAMAlAFAmIACAMQAEAsgIApIgBADQgKBEgzArIgSANQgcASghADIgYACQgoAGglANQgLAEgHAIQgZAdgMAcQgGAQAAATQAAApAaAoQAlBAAkBJQASAlAGAiIADAKQAVBBgWA/QgEAOgGANQggBHhIBDQgeAcgZAhQgGAIgEAIQAEAjABAnIABAMQA+BogjB4IgEALQgEAOgIANQASh6hNhdg");
	this.shape_17.setTransform(-0.4,-21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3B3C3C").s().p("AhEMXQgXgbgSgdIgOgaQgPggAIggIAEgSQAQhHAfhGIACgCQANggABgfQAEg2gSg6QgFgUgIgUQgRgrgdgmIgcgkIgrg6QhFhhgqhfQgHgPgFgPQgFgRgBgOIAAgRQAFhSA5g0IAKgKQASgPAcgLIArgRQAfgNAYgMQAWgIATgFQAQgFAOAAQAjAAAUghIADgGQAUghgKgwQgLg0gkgqQhDhMhHhJQghghgYgiQgRgYgCgbQgCgWAHgWQAPgzAzgYIgSAvIAAAFQAvBIBUAkIAUAJQAXAJAWALIAaAPQDXB7BGDiQALAkAFAnIACAMQAEAsgJApIAAADQgLBDgzAqQgIAHgJAGQgcASghADIgXACQgoAGglANQgKADgIAIQgZAdgMAbQgGAQAAASQgBApAYAoQAkA/AkBIQASAmAGAhIADAKQAXBBgUA/QgDAOgHAOQgdBIhKBDQgeAdgZAhQgGAIgEAIQADAjgBAnIABANQBABogkB5IgEALQgEAOgIANQASh7hOhdg");
	this.shape_18.setTransform(-0.4,-21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3B3C3C").s().p("AhFMVQgXgagSgeIgNgaQgPghAKggIAEgSQAShHAehHIABgCQANggAAggQABg2gTg6QgFgUgIgVQgSgqgdgmIgcgkIgrg6QhFhhgohgIgLgfQgEgQgBgOQgBgJABgIQAJhQA7gxIALgJQASgPAcgLQAWgIAVgJQAegOAYgMQAWgJASgFQAQgFANgBQAigBASgiIADgGQASghgLgvQgLgzgkgpQhChMhHhIQghghgXgjQgRgXgCgbQgBgWAHgWQAPgyAygYIgRAvIAAAFQAuBJBVAjIAUAJQAXAJAWAMIAaAOQDXB8BGDiQALAlAFAnIABAMQAEAsgJApIAAADQgLBCgzAqIgRAMQgcASggADIgXACQgnAGglANQgKADgIAIQgZAbgMAbQgHAQAAASQgCAoAYAnQAiBAAjBHQASAlAHAhIADAJQAYBBgSBBQgCAOgGAOQgcBJhLBEQgeAdgaAhQgGAHgEAJQABAjgCAnIABANQBBBpgkB6IgDALQgFAOgHANQASh8hQheg");
	this.shape_19.setTransform(-0.4,-21.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B3C3C").s().p("AhGMUQgYgbgRgeQgIgOgFgNQgPghALgfIAFgTQAVhHAbhIIABgCQANghgBggQAAg2gUg7QgGgTgJgVQgRgqgegmIgcgkQgWgdgVgdQhFhhgmhhQgGgPgEgQQgEgQAAgOQgBgJABgIQAMhPA+gtIALgJQASgOAdgLQAVgIAVgJQAfgOAXgNQAVgJASgGQAPgGANgBQAggDAQghIADgGQAQghgLgvQgMgygjgpQhChLhHhIQgggggXgjQgQgXgCgbQgBgWAHgVQAPgyAygYIgRAvIAAAFQAuBJBVAjIAVAJQAXAJAWAMIAaAOQDXB9BFDjQALAlAFAnIACAMQADAsgJApIgBADQgLBBgyApQgIAHgJAFQgcASggADIgXACQgmAGglAMQgKADgHAIQgaAbgMAaQgHAPAAASQgDAoAXAnIBDCGQASAkAHAgIADAKQAaBBgQBBQgCAPgGAOQgZBLhMBEQgfAdgaAhQgGAHgEAJQgBAjgCAnIAAANQBDBqglB7IgDAKQgFAPgHANQASh9hRheg");
	this.shape_20.setTransform(-0.4,-21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3B3C3C").s().p("AhHMTQgYgbgSgfQgHgOgFgNQgOgiAMgfIAFgSQAXhIAahJIABgCQALgigBggQgCg3gVg6QgGgUgJgUQgSgqgdgmIgdgkQgWgdgVgdQhFhigkhhQgFgPgEgQQgEgQAAgOQAAgJABgIQAQhOBAgqIALgIQATgNAcgLIArgRQAegOAXgOIAlgQQAPgGAMgDQAfgDAPgiIACgGQAPgggMgvQgNgxgigpQhChKhGhHQggghgXgiQgPgXgCgbQgBgWAHgVQAQgxAxgYIgRAvIAAAFQAvBJBUAkIAVAIQAXAKAWALQAOAHANAIQDXB8BFDkQALAlAEAnIACAMQADAtgKApIAAADQgMBAgxAoIgRANQgcARggADIgWACQgmAGgkAMQgLADgHAHQgZAbgNAZQgHAPgBARQgDAoAWAnIBBCEQARAkAIAgIAEAKQAbBBgOBCQgCAPgFAOQgXBMhOBEQgfAdgaAhQgGAIgFAJQgBAjgEAoIAAANQBEBqglB7IgDALQgFAPgHANQASh+hSheg");
	this.shape_21.setTransform(-0.4,-21.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3B3C3C").s().p("AhIMRQgZgbgRgfQgHgOgFgNQgNgiANggIAGgSIAxiTIABgCQALghgDghQgDg3gXg7QgGgTgJgVQgTgqgdglIgcgkQgXgcgVgeQhFhighhiQgGgPgDgQQgEgRABgOQAAgIACgIQAThNBCgmIALgIQATgMAdgKQAVgIAVgKQAfgPAWgOIAlgRQAOgHALgDQAdgFAOghIABgGQAOghgMgtQgNgxgjgoQhChKhFhHQgggggWgjQgPgXgBgaQgBgWAHgVQAQgwAxgYIgSAwIABAFQAuBIBVAkIAVAJQAXAJAWALIAbAPQDXB9BFDlQALAlAEAnIABAMQAEAtgLAoIAAADQgMA/gxApIgRAMQgbARggADIgWACQgmAGgjALQgLADgHAIQgZAZgOAZQgHAOgBASQgDAnAUAmQAdA/AiBFQARAjAJAgIAEAJQAcBCgMBCQgBAPgFAPQgVBNhPBFQggAdgaAhQgGAIgFAIQgDAkgFAoQAAAGABAHQBEBrgkB8IgEALQgFAPgHANQATh/hUhfg");
	this.shape_22.setTransform(-0.5,-21.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3B3C3C").s().p("AhJMQQgZgbgRggQgHgOgEgOQgNgiAPggIAGgSQAbhIAWhMIABgCQAKgigEghQgFg3gXg7QgGgUgKgUQgTgqgdglIgdgkQgWgcgVgeQhFhigghjQgFgPgDgQQgDgRABgOQAAgIADgIQAWhLBEgkIALgHQAUgLAdgKQAVgIAVgKQAfgPAWgPIAjgSQANgHALgEQAcgGALgiIACgGQAMgggNgtQgNgwgjgoQhBhJhFhGQgggggVgjQgPgXgBgaQAAgWAHgUQAQgwAwgYIgRAwIAAAFQAvBIBVAkIAVAJQAXAJAWAMIAbAOQDYB+BEDlQALAmAEAnIABAMQADAtgLAoIAAADQgNA+gwAoIgRAMQgbARgfADIgWACQglAFgkAMQgKADgHAHQgZAZgOAYQgHAOgCARQgEAnATAmQAbA+AjBFQARAiAIAfIAEAKQAfBBgKBEQgBAPgEAPQgUBPhQBFQggAdgbAhQgGAIgFAIIgKBMQgBAGABAHQBGBsglB9IgDALQgFAPgHANQATiAhWhfg");
	this.shape_23.setTransform(-0.5,-21.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3B3C3C").s().p("AhJMPQgagcgQggQgIgOgEgOQgMgjAQggIAHgSQAchIAVhNIABgCQAJgjgEggQgHg5gYg6IgQgoQgUgqgeglIgcgkQgXgcgVgeQhFhigdhjQgFgQgDgQQgDgRACgOQABgIACgHQAbhLBFggIAMgGQAUgLAdgKQAVgIAVgKQAegPAWgQIAigTQANgIALgEQAZgIAKgiIABgFQAKghgNgsQgNgvgjgoQhBhIhFhGQgfgggUgiQgPgXAAgbQgBgUAHgVQAQgwAxgXIgSAwIABAFQAvBJBVAjIAVAJQAYAJAVAMIAbAPQDYB+BDDmQALAlAEAoIACAMQACAtgKAoIgCADQgMA9gwAnQgIAHgJAFQgaAQgfADIgWADQglAFgjAMQgKADgHAGQgZAYgOAYQgIANgBARQgGAnATAmQAZA9AiBEQARAiAJAfIAEAKQAgBBgIBEQAAAQgEAPQgRBQhSBGQggAdgbAhQgHAIgFAIIgMBMIgBAOQBIBsglB+IgDALQgFAOgIAOQATiBhWhfg");
	this.shape_24.setTransform(-0.6,-21.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3B3C3C").s().p("AhLMNQgZgcgRggQgHgOgEgOQgLgkARggIAHgSQAfhIAThOIABgCQAIgjgFghQgJg5gZg7QgHgTgKgUQgUgqgeglIgcgkQgXgcgVgeQhFhjgbhjQgFgQgCgQQgDgRACgOQABgIADgHQAehKBHgcIANgGQAVgKAcgKQAWgIAVgKQAegPAVgRIAhgUQAMgIAKgFQAXgKAJghIABgGQAJgggOgsQgOgugjgoQhAhHhEhFQgfgggUgjQgOgWAAgbQAAgUAHgVQAQgvAwgXIgSAwIABAFQAvBJBWAjIAVAJQAXAKAWALIAaAPQDZB+BDDnQALAmAEAnIABAMQACAugLAoIgBADQgNA8gwAnIgQALQgaAQgfADIgVADQglAFgjALQgJADgIAHQgZAXgOAXQgIANgCAQQgGAnASAlQAXA+AiBDQARAhAJAfIAEAJQAiBCgGBEQAAARgDAPQgQBRhSBGQghAdgdAiQgFAIgFAIIgPBNIgBANQBJBtglB+IgDALQgFAPgIAOQATiChYhgg");
	this.shape_25.setTransform(-0.6,-21.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3B3C3C").s().p("AhLMMQgbgcgQggQgHgQgEgOQgKgjASghIAIgSQAhhIARhPIABgCQAIgkgHghQgKg5gag7QgIgUgKgUQgUgpgeglIgdgkQgXgcgVgeQhFhjgZhkQgEgQgCgQQgCgSACgNQACgIADgHQAhhJBJgZIANgFQAVgJAdgKQAWgHAUgLQAegQAVgRIAggVIAVgOQAWgLAHgiIABgFQAHghgOgqQgPgugjgnQg/hHhEhFQgfgfgTgjQgOgXABgaQgBgUAHgVQARguAvgXIgRAwIAAAFQAvBJBXAjIAVAKQAXAJAWALIAaAPQDZB/BDDoQALAmADAnIABAMQADAugMAoIgBADQgNA7gwAmIgQALQgaAQgeADIgVADQglAFgiALQgJADgIAGQgZAWgPAXQgIAMgCARQgGAmAQAlQAWA9AiBDQAQAhAKAdIAEAKQAjBCgEBFQABAQgDAQQgNBThUBGQgiAdgcAiQgGAHgFAJIgRBNIgBANQBKBuglB/IgEALQgFAPgHAOQATiDhZhgg");
	this.shape_26.setTransform(-0.6,-21.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3B3C3C").s().p("AhLMKQgbgcgQggQgHgQgEgOQgKgkAUghIAIgSQAjhIAQhQIABgCQAGgkgHgiQgMg6gbg7QgIgTgKgUQgVgpgeglIgdgkQgXgcgVgeQhFhjgXhlQgEgQgCgQQgBgSADgNQABgIAEgHQAlhHBLgWIANgFIAygSQAWgHAVgLQAegQAUgSQASgLANgLIAUgQQAUgMAGghIAAgGQAFgggOgqQgQgtgignQg/hHhEhDQgfgggSgiQgNgXABgaQgBgUAIgUQAQguAvgXIgRAwIAAAFQAwBJBWAkIAVAJQAYAJAVAMIAbAPQDZB/BCDoQALAmADAoIABAMQADAugMAoIgCADQgNA6gvAlIgQAMQgaAPgeADIgUADQglAFghAKQgKADgHAGQgZAWgQAWQgIAMgCAQQgHAmAPAkQAUA+AhBBQAQAhALAdIAFAKQAkBBgCBGQABARgCAQQgMBUhVBHQgiAdgdAhIgLARIgTBNIgBAOQBLBuglCAIgEALQgFAPgHAOQATiEhahhg");
	this.shape_27.setTransform(-0.7,-21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3B3C3C").s().p("AhNMJQgbgcgPghQgHgQgEgOQgJglAUghIAJgSQAlhIAOhRIABgCQAGglgIgiQgNg6gdg7QgIgUgKgTQgWgpgeglIgdgkQgXgcgVgeQhFhjgVhmQgEgQgBgQQgBgSADgNQACgJAEgGQAphGBNgSIANgFIAzgRQAVgHAVgLQAegQAUgTQARgMAMgLIATgRQATgNAEgiIAAgFQAEgggPgqQgQgtgigmQg/hGhDhDQgfgfgSgjQgMgWABgaQAAgUAHgUQAQgtAvgXIgRAwIABAFQAvBJBWAkIAWAJQAXAJAWAMIAbAPQDZCABCDpQAKAmAEAoIABAMQACAugNAoIgBADQgOA5guAlIgQALQgaAPgdADIgVADQgkAEghALQgKADgHAGQgZAVgQAVQgIALgCAQQgIAnAOAjQASA9AhBBQAQAgALAdIAFAJQAmBCAABHQABARgCAQQgJBVhWBHQgjAegdAhQgHAIgEAJQgLAkgLApQgBAHAAAHQBMBuglCCIgEALQgFAPgHAOQATiFhchhg");
	this.shape_28.setTransform(-0.7,-21.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3B3C3C").s().p("AhNMIQgbgdgQghQgHgQgDgPQgJglAWghIAKgSQAnhIAMhSIABgCQAFgmgJgiQgPg6geg8IgTgnQgWgogeglIgdgkQgXgcgVgeQhFhkgThmQgDgQgBgRQgBgRAEgNQACgJAEgGQAshFBPgPIAOgDIAzgRQAWgHAVgLQAdgRAUgTQAQgMAMgMIASgSQARgPACghIAAgGQACgggPgpQgRgsgiglQg+hGhDhCQgegfgRgjQgMgWABgaQAAgUAHgUQARgsAugXIgRAwIABAFQAvBKBXAjIAVAJQAYAKAVALIAbAPQDZCABCDqQALAnADAnIABAMQABAvgMAoIgCADQgOA4guAkIgPALQgaAPgdADIgUADQgkAEghALQgJACgHAGQgZAUgRAVQgIALgDAQQgIAmANAjQAQA8AhBBQAQAfALAcIAFAKQAnBCADBHQACASgCAQQgHBXhYBHQgiAdgeAiQgHAIgFAIQgMAlgMAqQgBAGAAAHQBNBvglCCIgEAMQgFAPgHAOQAUiGhehhg");
	this.shape_29.setTransform(-0.8,-21.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3B3C3C").s().p("AhOMGQgbgcgQgiQgHgQgCgPQgJgmAXghIAKgSQAphIALhUIABgCQAEglgKgjQgQg7gfg7IgTgnQgXgogeglIgegkQgXgcgUgeQhFhkgShnQgCgQgBgRQgBgRAFgOQACgIAFgGQAwhDBQgMIAOgDQAYgGAcgJQAWgIAUgLQAegRATgUQAQgMALgNIARgTQAPgQABgiIgBgGQABgfgPgoQgSgsgiglQg+hFhChCQgegfgRgiQgLgWABgaQABgUAHgTQARgtAugWIgSAwIABAFQAwBKBXAjIAVAJQAYAKAWAMIAaAPQDaCABBDrQALAmACAoIABAMQACAugNAoIgCADQgOA3guAkIgPALQgZAPgdADIgUADQgjAEghAKQgJADgHAFQgaAUgQAUQgJALgDAPQgJAmAMAiQAPA9AhA/IAbA7IAFAKQApBCAEBIQADARgCARQgFBYhZBIQgjAdgeAiQgHAIgFAIQgNAlgNAqQgCAGAAAIQBPBvgmCDIgDALQgFAQgIAOQAUiHhfhig");
	this.shape_30.setTransform(-0.9,-21.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3B3C3C").s().p("AhOMFQgdgdgPgiQgGgQgDgPQgIgmAZgiIAKgSQArhIAJhVIABgCQAEgmgMgjQgSg7gfg8QgJgTgLgTQgXgpgfgkIgdgkQgYgbgUgfQhFhkgPhoQgDgQAAgRQAAgSAFgNQACgIAGgGQAzhCBSgIIAOgDQAYgFAdgJQAWgHAUgMQAegRATgUQAPgOALgNIAOgUQAPgSgBghIgBgGQgBgggQgnQgSgrgiglQg9hEhChBQgegfgQgjQgLgWACgZQAAgUAIgTQAQgsAugWIgSAxIACAFQAvBJBYAjIAVAKQAYAJAWAMIAaAPQDaCBBBDrQALAnACAoIABAMQABAugNAoIgCADQgPA2gtAkIgPAKQgZAPgcADIgUACQgjAFggAKQgJACgIAGQgZASgQATQgKALgDAPQgJAmAKAiQAOA8AgA/QAPAeAMAcIAGAJQAqBCAHBJQACASAAARQgEBZhaBJQgjAdgfAiIgMAQQgPAlgNAqQgCAHAAAHQBQBwgmCEIgDALQgGAQgHAOQAUiHhghjg");
	this.shape_31.setTransform(-0.9,-21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B3C3C").s().p("AhPMDQgdgcgPgjQgGgQgDgPQgHgnAagiIALgSQAthIAIhWIAAgCQADgngMgjQgUg7ggg8IgVgnQgXgogfgkIgegkQgXgbgVgfQhFhkgNhpQgCgQAAgRQAAgSAGgNQADgIAFgGQA3hBBUgFIAPgCQAYgEAdgJQAWgHAUgMQAegRASgVQAPgOAKgOIANgVQANgTgCgiIgCgGQgCgfgQgnQgUgqghglQg9hDhBhBQgegegPgjQgLgWACgZQABgUAHgTQARgrAugWIgSAxIABAFQAwBJBYAkIAVAJQAYAJAWAMIAaAPQDaCBBBDtQALAnACAoIABAMQABAugOAoIgCADQgPA1gtAjIgPAKQgYAPgcADIgUACQgiAFggAJQgJADgIAFQgZASgRASQgJALgEAPQgKAlAKAhQALA8AhA/IAbA5IAFAJQAsBCAJBKQADASAAARQgBBahcBJQgkAegeAhIgNARQgQAlgPAqQgCAHAAAHQBSBxgmCFIgEALQgFAQgIAOQAViIhihkg");
	this.shape_32.setTransform(-1,-21.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B3C3C").s().p("AhPMCQgdgdgPgjQgGgQgDgQQgGgnAagiIAMgRQAvhJAGhXIABgCQACgngNgkQgVg8gig8QgKgTgLgTQgYgogfgkIgegkQgXgbgVgeQhFhmgLhpQgCgQABgRQAAgSAGgNQAEgIAFgGQA7hABWgBIAPgCQAZgDAcgJQAWgHAVgMQAdgSASgVQAOgOAJgPIAMgXQAMgUgEghIgCgGQgDgfgRgmQgUgqghgkQg9hDhAhAQgegfgPgiQgKgWACgZQABgUAIgSQARgrAtgWIgSAxIABAFQAwBJBYAkIAWAJQAXAJAWAMIAbAQQDaCBBADtQALAnACApIABAMQABAugPAoIgBADQgQA0gsAiIgPALQgYAOgcADIgTACQgiAFggAJQgJACgHAFQgZARgSASQgJAKgEAPQgLAkAJAiQAKA8AfA9IAcA4IAGAKQAtBCALBKQAEASgBASQACBchdBJQglAdgeAiIgOARQgRAlgPArQgDAGAAAIQBTBxgmCFIgEAMQgFAQgIAOQAViJhjhkg");
	this.shape_33.setTransform(-1.1,-21.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3B3C3C").s().p("AhQMBQgdgdgPgkQgGgRgCgPQgGgoAcgiIAMgRQAxhJAEhYIABgCQABgogOgkQgXg8gjg8IgVgmQgZgogegkIgegkQgYgbgUgeQhFhmgJhqQgCgQABgRQABgSAGgNQAEgIAGgGQA+g+BYABQAIABAHgBQAagDAcgJQAWgHAUgMQAegSARgWQAOgPAIgPIALgYQALgWgGghIgCgGQgFgfgSglQgUgpghgkQg8hChAhAQgegegOgjQgKgVADgZQABgUAHgSQASgqAsgWIgSAxIACAFQAwBKBYAjIAWAJQAWAKAXAMIAbAPQDaCCBADuQALAnACAoIAAAMQABAvgPAoIgBADQgQAzgsAiIgPAKQgYAOgbADIgTACQgiAEgfAKQgJACgHAFQgZAQgSARQgKAKgEAOQgLAkAHAiQAIA7AgA9IAcA3IAGAJQAuBDANBLQAEASABASQADBdheBKQglAdgfAiIgOARQgSAlgRArQgCAHgBAHQBUBygmCGIgDAMQgFAPgIAPQAUiKhkhkg");
	this.shape_34.setTransform(-1.1,-21.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3B3C3C").s().p("AhRL/QgdgdgPgkQgGgRgCgPQgFgpAdgiIANgRQAzhJAChZIABgCQABgpgPgkQgZg9gkg8IgWgmQgZgngfgkIgegkQgYgbgUgeQhFhmgHhrQgBgQABgRQABgSAHgNQAEgIAGgGQBCg9BaAFIAQAAQAagCAcgJQAWgHAUgMQAegSARgXQAMgPAIgQIAKgZQAJgXgHghIgDgGQgGgfgSglQgWgogggkQg8hBg/g/QgegfgNgiQgJgWACgYQACgUAHgSQARgqAtgVIgSAxIABAFQAxBKBYAjIAWAJQAWAKAXAMIAbAQQDbCCA/DuQALAnABApIABAMQAAAvgPAoIgBADQgRAygrAhIgPAKQgXAOgbADIgTACQghAEgfAJQgJACgHAFQgZAPgTARQgKAJgEAPQgMAjAGAhQAHA7AfA9IAcA2IAGAJQAxBDAPBLQAEATABASQAFBehfBKQglAeggAiIgOARQgTAlgSArQgDAHAAAIQBVBygmCHIgEALQgFAQgIAPQAViLhmhlg");
	this.shape_35.setTransform(-1.2,-21.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B3C3C").s().p("AhRL+QgegdgOgkQgGgSgCgQQgFgoAfgiIANgSQA1hJABhaIABgCQAAgpgRglQgag9glg8IgWgmQgagngfglIgegjQgYgbgUgeQhFhmgFhsQgBgQABgRQACgTAIgMQAEgIAHgGQBFg8BcAJIAPAAQAbgBAdgJQAVgGAVgNQAdgTAQgXQAMgQAIgQQAGgOADgMQAHgZgJghIgCgGQgJgfgSgkQgWgngggjQg8hBg/g/QgdgegNgiQgJgWADgYQACgUAHgSQASgpAsgVIgSAxIACAFQAwBKBYAjIAWAKQAXAJAXAMIAbAQQDaCCBADwQAKAnACApIAAAMQAAAvgPAoIgCADQgQAxgrAhIgPAJQgXAOgbADIgTACQggAEgfAJQgJACgHAEQgZAPgTAQQgKAJgEAOQgNAjAFAhQAFA7AfA7IAcA1IAHAJQAxBDASBNQAFATABASQAHBghhBKQglAeggAiIgOAQQgVAmgTArQgDAHAAAIQBWBzgmCIIgEALQgFAQgJAPQAWiMhnhlg");
	this.shape_36.setTransform(-1.3,-21.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B3C3C").s().p("AhRL9QgfgegNgkQgHgSgBgQQgEgpAfgiIAOgSQA4hJgBhbIAAgCQgBgqgRgkQgbg+gmg9IgYglQgZgnggglIgegjQgYgbgUgeQhFhngDhrQgBgRACgRQACgTAIgMQAFgIAHgGQBIg7BeAMIAQABQAbAAAdgJQAWgGAUgNQAdgTAPgYQANgQAGgRQAGgPACgMQAGgagLghIgCgGQgKgfgUgjQgWgngggjQg7hAg+g/QgegdgMgjQgIgVADgZQACgTAIgRQARgpAsgVIgSAxIACAFQAwBKBZAjIAVAKQAXAJAXAMIAbAQQDbCDA/DwQAKAoACApIAAAMQAAAvgQAoIgBADQgRAwgrAgIgOAJQgXANgbAEIgSACQggAEgfAIQgIACgIAFQgYAOgTAPQgLAIgEAOQgOAjAEAhQADA6AfA7QAOAbAOAZIAHAJQAzBDATBNQAGATABATQAKBhhjBLQglAdggAjIgPAQQgWAmgUAsQgDAGAAAIQBYB0gnCIIgDAMQgGAQgJAPQAWiNhohlg");
	this.shape_37.setTransform(-1.4,-21.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3B3C3C").s().p("AhSL7QgfgdgNglQgGgSgCgQQgDgqAhgiIAOgSQA5hJgChdIAAgCQgBgqgSgkQgeg/gng8IgXglQgbgngfglIgegjQgZgbgUgdQhFhoAAhsQgBgRACgRQACgTAJgNQAFgHAHgGQBNg5BfAPIARABQAbABAdgIQAWgHAUgNQAdgTAPgZQALgQAGgSQAFgPACgNQAFgcgNghIgDgGQgLgfgUgiQgXgmgggjQg6g/g+g+QgdgegMgiQgIgVAEgZQACgTAHgRQASgoArgVIgSAxIACAFQAxBKBZAkIAVAJQAXAKAXAMIAbAQQDcCDA+DxQAKAnACApIAAAMQAAAwgRAnIgBADQgSAvgqAgIgOAJQgXANgaAEIgSACQggAEgeAIQgIACgIAEQgYANgUAPQgLAIgEAOQgOAiACAgQACA6AfA7QANAaAPAZIAHAJQA1BDAVBOQAGATACATQALBihkBLQgmAeggAiIgPARQgXAmgVAsQgDAHgBAIQBZB0gmCJIgEAMQgFAQgJAPQAWiOhqhmg");
	this.shape_38.setTransform(-1.4,-21.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3C3C").s().p("AhSL6QgfgegOglQgGgSgBgRQgDgqAigiIAPgSQA8hJgEheIAAgCQgCgqgTglQgfg/gog9IgZglQgagmggglIgegjQgZgbgUgdQhFhoAChtQAAgRACgRQACgTAKgNQAFgHAHgGQBQg4BiATIARACQAcABAcgIQAWgHAUgNQAdgTAOgaQAMgRAFgSQAFgQABgNQADgdgPghIgDgGQgNgfgUgiQgYglgfgjQg6g/g+g9QgdgdgLgiQgHgVAEgZQACgTAIgRQARgnArgVIgSAxIACAFQAxBLBZAjIAWAJQAXAKAXAMIAbAQQDbCDA/DyQAKAoABApIAAAMQAAAwgRAnIgCADQgRAugqAgIgOAIQgXANgZAEIgSACQggAEgdAHQgJACgHAEQgZANgUAOQgLAHgFAOQgOAiABAhQAAA5AeA5QAOAaAPAYIAHAJQA2BEAYBOQAGAUACATQAOBkhlBLQgnAeggAiIgPARQgZAmgWAsQgDAHgBAIQBbB1gnCKIgEALQgFARgJAPQAWiPhrhmg");
	this.shape_39.setTransform(-1.5,-21.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3B3C3C").s().p("AhSL4QgggdgNgmQgGgSgBgRQgCgrAjgiIAQgSQA9hJgGhfIABgCQgEgrgUglQggg/gpg9IgZglQgbgngggkIgegjQgZgagUgeQhFhoAEhuQAAgRACgSQADgSAKgNQAFgHAJgGQBTg3BkAWIAQADQAdACAdgIQAVgHAVgNQAcgUAOgaQALgRAFgTQAEgQAAgPQACgegQghIgEgGQgPgegUgiQgYgkgggiQg5g/g9g8QgdgdgKgjQgHgVAEgYQACgTAIgQQASgnAqgVIgSAyIACAFQAxBKBZAjIAWAJQAXAKAXAMIAcAQQDbCEA+DzQAKAoABApIAAAMQgBAwgQAnIgCADQgSAtgqAfIgNAJQgXAMgZAEIgSACQgfADgdAIQgIACgIAEQgYALgVAOQgLAHgFANQgPAiAAAgQgCA5AeA5QANAZAQAYIAHAJQA4BDAaBQQAGAUADASQAPBmhmBMQgmAegiAiIgPARQgaAmgXAsQgDAHgBAIQBcB2gnCLIgEALQgFARgJAPQAWiQhshng");
	this.shape_40.setTransform(-1.6,-21.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B3C3C").s().p("AhSL3QghgegMgmQgGgSgBgRQgBgrAkgjIAQgSQA/hJgHhgIAAgCQgEgrgVgmQgihAgqg8IgZglQgcgngggkIgegjQgZgagUgeQhFhpAGhuQAAgRADgSQADgTAKgMQAGgHAJgGQBXg1BlAZIARADQAdADAdgIQAWgGAUgOQAcgUAOgbQALgRAEgUQADgRAAgPQAAgfgSgiIgEgFQgQgfgVggQgZgkgfgiQg5g+g9g8QgdgdgJgiQgGgVAEgYQACgTAIgQQASgnAqgUIgSAyIACAFQAxBKBaAjIAWAKQAXAJAXANIAbAQQDcCEA+DzQAJAoABAqIAAAMQgBAwgRAnIgCADQgSAsgpAeIgOAJQgWAMgZAEIgRACQgfADgdAIIgPAFQgZALgVANQgLAGgFAOQgQAhgBAgQgEA5AeA4QANAYAQAYIAIAJQA5BDAbBQQAIAUADATQARBnhnBNQgnAdgiAjIgPARQgcAmgXAtQgEAHgBAIQBdB2gnCLIgEAMQgFARgJAPQAWiRhthng");
	this.shape_41.setTransform(-1.7,-21.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B3C3C").s().p("AhSL2QghgegMgnQgGgTAAgRQgBgrAlgjIARgSQBBhJgJhhIAAgCQgEgsgWgmQgkhAgrg9IgaglQgcgmgggkIgfgiQgZgbgUgeQhFhpAIhvQABgRADgSQAEgTAKgMQAGgHAJgGQBbg0BnAdIASADQAdAFAdgJQAWgGAUgOQAcgUANgcQAKgSAEgUQADgSgBgPQgCghgTghIgEgGQgSgegWggQgZgjgfgiQg5g9g8g7QgcgdgJgiQgGgVAEgYQADgTAIgQQASgmAqgUIgTAyIADAFQAxBKBaAjIAWAKQAXAKAXAMIAbAQQDcCFA+D0QAJAoABApIAAAMQgBAxgSAnIgCADQgSArgpAeIgNAIQgWAMgZAEIgRACQgeADgdAHIgPAFQgZAKgVANQgMAGgFANQgRAhgCAgQgFA4AeA3QAMAZARAWIAHAJQA7BEAeBRQAIAUADATQATBphoBMQgoAegiAjIgPAQQgdAngZAtQgDAHgBAIQBeB3goCMIgDAMQgGARgJAPQAXiShvhng");
	this.shape_42.setTransform(-1.9,-21.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B3C3C").s().p("AhSL0QghgegNgnQgGgTABgRQgBgsAngjIARgSQBDhJgKhiIAAgCQgGgtgWgmQgmhAgsg9IgaglQgdgmgggkIgfgiQgZgbgUgeQhFhpAKhwQABgRAEgSQAEgTALgMQAGgHAJgFQBfg0BpAgQAJADAJABQAeAGAdgJQAVgGAUgOQAcgVANgcQAKgSACgVQADgSgCgQQgDgjgVghIgEgGQgUgegWgfQgagigfghQg4g9g7g7QgdgcgIgiQgFgVAEgYQADgSAIgQQASgmAqgUIgTAyIADAFQAxBKBaAkIAWAJQAXAKAYAMIAbAQQDcCFA9D1QAKApAAApIAAAMQgBAxgSAnIgCADQgTAqgpAdIgNAIQgVAMgZAEIgRACQgdADgdAHIgPAEQgZAKgVAMQgMAGgGAMQgRAhgDAfQgHA4AeA3QAMAYARAWIAIAJQA8BEAgBRQAIAVAEATQAVBqhqBNQgoAegiAiIgPARQgfAngaAtQgDAHgCAIQBgB4goCNIgDAMQgFARgKAPQAXiThwhog");
	this.shape_43.setTransform(-2,-21.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3C3C").s().p("AhSLzQghgegNgoQgFgTAAgRQAAgtAogjQAKgIAIgKQBFhJgMhjIAAgCQgGgtgYgnQgnhBgtg9IgbgkQgdgmghgkIgfgiQgYgagUgfQhFhpALhxQACgRAEgSQAEgTAMgMQAGgIAKgEQBigzBrAkIASAFQAfAGAdgJQAVgGATgOQAdgVANgcQAJgTACgWQABgTgCgQQgEgkgXghIgFgGQgVgegXgfQgagigeggQg4g8g7g6QgdgdgHgiQgFgVAFgXQADgSAIgQQASglApgUIgSAyIADAFQAxBLBaAjIAWAJQAXAKAYAMIAbARQDcCFA9D2QAKAoAAAqIAAAMQgCAxgSAnIgCADQgUApgnAcIgNAIQgWAMgYAEIgRABQgdAEgcAGIgPAFQgZAJgVAKQgMAGgHANQgRAggEAfQgJA4AdA2QAMAXARAWIAIAJQA+BDAiBTQAJAVAEATQAXBrhrBOQgoAegjAiIgPARQghAngaAtQgEAHgBAJQBhB3goCPIgDALQgGASgJAPQAXiThyhpg");
	this.shape_44.setTransform(-2.1,-21.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3B3C3C").s().p("AhSLyQgigfgMgnQgGgUABgSQABgtApgjIASgRQBIhKgPhkIABgCQgHgugZgnQgphBgug9IgcglQgdglgggkIgggiQgYgagVgfQhFhqAOhxQACgRAFgSQAEgTAMgMQAHgIAKgEQBlgxBuAmIASAGQAfAHAdgJQAVgGAUgOQAcgVANgdQAIgUABgWQABgTgCgRQgGgmgZghIgFgGIgug7QgbgigeggQg3g7g7g6QgcgcgHgiQgEgVAFgXQADgSAIgQQATgkAogUIgSAyIADAFQAxBLBaAjIAXAJQAXAKAXANIAcAQQDcCGA8D2QAKApAAAqIAAAMQgCAxgTAnIgCADQgUAognAcIgNAHQgVAMgXAEIgRABQgdAEgbAGIgQAEQgYAIgWAKQgMAGgHAMQgSAggFAfQgLA3AdA1QAMAXASAVIAIAJQA/BEAkBTQAJAVAFAUQAZBthsBNQgpAegjAjIgQARQgiAngbAuQgEAHgBAIQBiB4goCPIgDAMQgGARgJAQQAXiUhzhpg");
	this.shape_45.setTransform(-2.2,-21.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B3C3C").s().p("AhSLwQgigegMgoQgFgUAAgSQACgtAqgkIATgRQBIhKgOhmIAAgCQgIgugagnQgqhBgvg+IgcgkQgeglghgkIgfgiQgZgagUgfQhFhqAQhyQACgRAFgSQAFgUAMgMQAHgHALgEQBpgwBvAqIASAGQAgAIAdgIQAUgGAUgPQAdgVAMgeQAIgUABgXQAAgUgDgSQgIgmgaghIgFgGIgwg7Ig6hBQg3g6g6g5QgcgcgGgiQgEgVAFgXQAEgSAIgQQASgkApgTIgTAyIADAFQAyBLBaAjIAXAKQAXAKAXAMIAcAQQDcCHA8D3QAKApAAApIAAAMQgDAygTAmIgCADQgUAngnAcIgMAIQgVALgYAEIgQABQgcADgcAHIgPADQgYAIgXAJQgMAFgHAMQgTAggGAeQgMA3AcA1QAMAWASAVIAIAJQBBBEAmBUQAKAVAFAUQAbBuhtBOQgpAegkAjIgQARQgjAngcAuQgEAHgCAIQBkB5goCQIgEAMQgFARgKAQQAYiVh1hqg");
	this.shape_46.setTransform(-2.4,-21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-121.9,72.2,201.5);


(lib.magnify_question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{empty_cookie:0,candy_cookie:1,"empty_cookie":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.zoomin3();
	this.instance.parent = this;
	this.instance.setTransform(-249,14,0.352,0.352);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0)").s().p("ArFHaIAAtWQANhZCAgEIT+AAIAAOzg");
	this.shape.setTransform(-203,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17A6FF").s().p("AgUAeQgGgBgEgFQgEgFABgHQAAgHAGgEIAkgbQAFgEAHABQAGABAEAFQAEAFgBAHQAAAHgGAEIgkAbQgEADgFAAIgDAAg");
	this.shape_1.setTransform(-39.6,33.5,1.667,1.672);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F02943").s().p("AAQAhQgHAAgFgFIgfghQgFgEABgHQAAgHAFgEQAEgFAHAAQAHAAAEAFIAgAhQAEAFAAAGQAAAHgFAEQgEAFgGAAIgBAAg");
	this.shape_2.setTransform(-64,-11.8,1.667,1.672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCE00").s().p("AAEAkQgGgCgCgHIgTgpQgDgGADgGQACgHAGgCQAGgDAHACQAFADADAGIASAqQADAGgCAGQgDAGgGADIgHABIgFgBg");
	this.shape_3.setTransform(9.5,-36.5,1.667,1.672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A5FF").s().p("AAEAkQgFgCgDgGIgTgqQgDgGACgGQADgGAGgDQAFgDAHADQAFACADAGIATApQADAGgCAGQgCAHgHACQgDACgEAAIgFgBg");
	this.shape_4.setTransform(41.8,-36.3,1.667,1.672);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4A497").s().p("AgRAfQgIAAgDgFQgFgFAAgHQABgHAFgEIAigeQAFgEAGABQAIAAADAFQAFAFAAAHQgBAGgFAFIgiAdQgFAEgFAAIgBAAg");
	this.shape_5.setTransform(25.9,-36,1.667,1.672);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1609A").s().p("AAHAkQgGgCgDgGIgWgoQgEgFACgHQACgGAGgEQAFgDAHACQAGACADAGIAWAnQAEAGgCAGQgCAHgGADQgDACgFAAIgEAAg");
	this.shape_6.setTransform(-57.6,32.2,1.667,1.672);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE628A").s().p("AgXAfQgGgEAAgHQgBgHAEgFIAbgjQAEgGAHAAQAHgBAFAEQAFAEABAGQABAHgEAFIgbAkQgFAFgGABIgBAAQgGAAgFgDg");
	this.shape_7.setTransform(29.4,30.6,1.667,1.672);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA0049").s().p("AAGAkQgGgCgDgGIgVgoQgDgGACgGQACgHAFgDQAGgDAHACQAFACADAGIAWAoQADAGgCAGQgCAHgGADQgDACgEAAIgFgBg");
	this.shape_8.setTransform(-7.4,31.3,1.667,1.672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD600").s().p("AAEAkQgFgCgDgGIgTgqQgDgGACgGQADgGAGgDQAFgDAHADQAFACADAGIATApQADAGgCAHQgCAGgHADIgGABIgGgBg");
	this.shape_9.setTransform(-25,31.8,1.667,1.672);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB228D").s().p("AgIAjQgFgEgBgHIgDgtQAAgHAEgFQAFgFAGAAQAGgBAFAFQAFAEAAAHIAEAtQAAAHgEAFQgFAFgGAAIgCAAQgFAAgEgEg");
	this.shape_10.setTransform(-33.6,-35.2,1.667,1.672);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#299BCD").s().p("AgVAdQgHgBgEgGQgDgFABgHQABgGAGgEIAlgZQAGgEAGABQAHACAEAFQADAFgBAHQgBAGgGADIglAaQgEADgFAAIgDAAg");
	this.shape_11.setTransform(55.9,18.4,1.667,1.672);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96B89C").s().p("AgUAhQgGgDgBgHQgBgGADgGIAZgmQADgGAHgBQAGgBAFADQAGAEABAGQACAHgEAFIgZAmQgDAGgGABIgEABQgFAAgDgDg");
	this.shape_12.setTransform(58.1,30.3,1.667,1.672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCD507").s().p("AgdAVQgGgDgCgHQgCgGAEgFQADgFAGgDIAsgNQAGgCAGADQAGADACAHQACAGgEAFQgDAFgGACIgsAOIgFABQgDAAgEgCg");
	this.shape_13.setTransform(55.9,8.6,1.667,1.672);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#734747").s().p("AggAQQgFgFgBgGQgBgGAEgFQAEgFAHgBIAtgGQAHAAAFAEQAFAEABAGQABAGgEAFQgFAGgGAAIgtAGIgDAAQgFAAgEgDg");
	this.shape_14.setTransform(-18.2,-36.2,1.667,1.672);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1374F").s().p("AgBAlQgGgEgCgGIgLgsQgCgHADgGQAEgFAGgCQAHgCAEAEQAGADACAHIAMAsQABAGgDAGQgDAFgHACIgFABQgEAAgCgCg");
	this.shape_15.setTransform(58.3,-5.8,1.667,1.672);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#85B636").s().p("AghAMQgFgFAAgGQgBgGAFgEQAFgFAGAAIAugBQAHgBAEAFQAFAFAAAGQAAAGgEAFQgFAEgHABIgtABQgHAAgEgFg");
	this.shape_16.setTransform(12.3,31.7,1.667,1.672);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B52273").s().p("AAFAcIggggQgFgFABgHQAAgGAEgFQAFgFAHAAQAHAAAEAFIAgAhQAEAEAAAHQAAAHgFAEQgEAFgHAAQgHAAgEgFg");
	this.shape_17.setTransform(61.2,-22.4,1.667,1.672);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1AC0DC").s().p("AgVAdQgHgBgEgGQgDgFABgHQABgGAGgEIAlgZQAGgEAGABQAHABAEAGQAEAFgCAHQgBAHgGACIglAaQgFADgFAAIgCAAg");
	this.shape_18.setTransform(-48.4,-35.9,1.667,1.672);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F17B16").s().p("AgbAcQgEgEAAgHQAAgHAEgFIAgggQAFgEAGgBQAHAAAEAFQAGAEAAAIQgBAGgEAEIggAhQgFAFgGgBIgBABQgGAAgFgFg");
	this.shape_19.setTransform(56.3,-36.5,1.667,1.672);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#449CA5").s().p("AgTAhQgGgDgCgHQgBgGADgGIAYgmQADgGAGgBQAHgCAGADQAFAEACAGQABAHgDAFIgYAnQgDAGgGABIgEABQgEAAgEgDg");
	this.shape_20.setTransform(-67.3,24,1.667,1.672);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDC70F").s().p("AgVAdQgGgBgEgFQgEgGABgGQABgHAGgEIAlgaQAFgDAHABQAGABAEAFQAEAFgBAHQgBAGgGAEIglAaQgEADgFAAIgDAAg");
	this.shape_21.setTransform(-68.2,4.6,1.667,1.672);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E91F43").s().p("AggAQQgFgEgBgHQgBgGAEgFQAEgFAHgBIAtgGQAHAAAFAEQAFAEABAGQABAGgEAFQgFAFgGABIgtAGIgDAAQgFAAgEgDg");
	this.shape_22.setTransform(44,30.9,1.667,1.672);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#31BCA8").s().p("AAIAjQgHgBgCgGIgYgnQgDgGACgGQACgHAFgDQAGgEAGADQAHABACAFIAXAoQAEAGgCAGQgBAHgHADQgDACgEAAIgEgBg");
	this.shape_23.setTransform(-2.4,-36,1.667,1.672);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7CC4D").s().p("AgMAlQgHgCgCgGQgDgGACgHIAQgrQACgGAFgDQAGgCAGACQAHACACAGQADAGgCAGIgQArQgCAGgFADQgDACgEAAIgFgBg");
	this.shape_24.setTransform(-64.1,-29.2,1.667,1.672);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape_25.setTransform(-3.7,-2.9,1.667,1.672);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_26.setTransform(0.2,46.5,1.667,1.672);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B5F37").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_27.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B37042").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_28.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9B5F37").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAKAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJAAAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgIgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQAAgDgBgFQABgJAHgGQAHgGAJAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_29.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#977F65").s().p("AHOE9QgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgBgIQgCAJgGAGQgHAGgJAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgGAGQgIAGgIAAQgJAAgIgGQgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQACAJAHAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGABgJQAAAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAHgGAJAAQAJAAAIAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgIAHgJAAQgKAAgGgGg");
	this.shape_30.setTransform(0.8,0.9,1.652,1.652);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B37042").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_31.setTransform(-0.8,-0.8,1.652,1.652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_25,p:{scaleX:1.667,scaleY:1.672,x:-3.7,y:-2.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_25,p:{scaleX:1.667,scaleY:1.672,x:-3.7,y:-2.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_26,p:{scaleX:1.652,scaleY:1.652,x:-0.6,y:45.3}},{t:this.shape_25,p:{scaleX:1.652,scaleY:1.652,x:-4.4,y:-3.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-47.4,142,94.8);


(lib.magnify_cookie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"empty_cookie":0,"candy_cookie":1,"empty_cookie":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.zoomin3();
	this.instance.parent = this;
	this.instance.setTransform(-67,14,0.352,0.352);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtCIcIAAw3IaFAAIAAQ3g");
	this.shape.setTransform(-0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17A6FF").s().p("AgUAeQgGgBgEgFQgEgFABgHQAAgHAGgEIAkgbQAFgEAHABQAGABAEAFQAEAFgBAHQAAAHgGAEIgkAbQgEADgFAAIgDAAg");
	this.shape_1.setTransform(-39.6,33.5,1.667,1.672);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F02943").s().p("AAQAhQgHAAgFgFIgfghQgFgEABgHQAAgHAFgEQAEgFAHAAQAHAAAEAFIAgAhQAEAFAAAGQAAAHgFAEQgEAFgGAAIgBAAg");
	this.shape_2.setTransform(-64,-11.8,1.667,1.672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCE00").s().p("AAEAkQgGgCgCgHIgTgpQgDgGADgGQACgHAGgCQAGgDAHACQAFADADAGIASAqQADAGgCAGQgDAGgGADIgHABIgFgBg");
	this.shape_3.setTransform(9.5,-36.5,1.667,1.672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A5FF").s().p("AAEAkQgFgCgDgGIgTgqQgDgGACgGQADgGAGgDQAFgDAHADQAFACADAGIATApQADAGgCAGQgCAHgHACQgDACgEAAIgFgBg");
	this.shape_4.setTransform(41.8,-36.3,1.667,1.672);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4A497").s().p("AgRAfQgIAAgDgFQgFgFAAgHQABgHAFgEIAigeQAFgEAGABQAIAAADAFQAFAFAAAHQgBAGgFAFIgiAdQgFAEgFAAIgBAAg");
	this.shape_5.setTransform(25.9,-36,1.667,1.672);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1609A").s().p("AAHAkQgGgCgDgGIgWgoQgEgFACgHQACgGAGgEQAFgDAHACQAGACADAGIAWAnQAEAGgCAGQgCAHgGADQgDACgFAAIgEAAg");
	this.shape_6.setTransform(-57.6,32.2,1.667,1.672);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE628A").s().p("AgXAfQgGgEAAgHQgBgHAEgFIAbgjQAEgGAHAAQAHgBAFAEQAFAEABAGQABAHgEAFIgbAkQgFAFgGABIgBAAQgGAAgFgDg");
	this.shape_7.setTransform(29.4,30.6,1.667,1.672);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA0049").s().p("AAGAkQgGgCgDgGIgVgoQgDgGACgGQACgHAFgDQAGgDAHACQAFACADAGIAWAoQADAGgCAGQgCAHgGADQgDACgEAAIgFgBg");
	this.shape_8.setTransform(-7.4,31.3,1.667,1.672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD600").s().p("AAEAkQgFgCgDgGIgTgqQgDgGACgGQADgGAGgDQAFgDAHADQAFACADAGIATApQADAGgCAHQgCAGgHADIgGABIgGgBg");
	this.shape_9.setTransform(-25,31.8,1.667,1.672);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB228D").s().p("AgIAjQgFgEgBgHIgDgtQAAgHAEgFQAFgFAGAAQAGgBAFAFQAFAEAAAHIAEAtQAAAHgEAFQgFAFgGAAIgCAAQgFAAgEgEg");
	this.shape_10.setTransform(-33.6,-35.2,1.667,1.672);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#299BCD").s().p("AgVAdQgHgBgEgGQgDgFABgHQABgGAGgEIAlgZQAGgEAGABQAHACAEAFQADAFgBAHQgBAGgGADIglAaQgEADgFAAIgDAAg");
	this.shape_11.setTransform(55.9,18.4,1.667,1.672);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96B89C").s().p("AgUAhQgGgDgBgHQgBgGADgGIAZgmQADgGAHgBQAGgBAFADQAGAEABAGQACAHgEAFIgZAmQgDAGgGABIgEABQgFAAgDgDg");
	this.shape_12.setTransform(58.1,30.3,1.667,1.672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCD507").s().p("AgdAVQgGgDgCgHQgCgGAEgFQADgFAGgDIAsgNQAGgCAGADQAGADACAHQACAGgEAFQgDAFgGACIgsAOIgFABQgDAAgEgCg");
	this.shape_13.setTransform(55.9,8.6,1.667,1.672);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#734747").s().p("AggAQQgFgFgBgGQgBgGAEgFQAEgFAHgBIAtgGQAHAAAFAEQAFAEABAGQABAGgEAFQgFAGgGAAIgtAGIgDAAQgFAAgEgDg");
	this.shape_14.setTransform(-18.2,-36.2,1.667,1.672);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1374F").s().p("AgBAlQgGgEgCgGIgLgsQgCgHADgGQAEgFAGgCQAHgCAEAEQAGADACAHIAMAsQABAGgDAGQgDAFgHACIgFABQgEAAgCgCg");
	this.shape_15.setTransform(58.3,-5.8,1.667,1.672);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#85B636").s().p("AghAMQgFgFAAgGQgBgGAFgEQAFgFAGAAIAugBQAHgBAEAFQAFAFAAAGQAAAGgEAFQgFAEgHABIgtABQgHAAgEgFg");
	this.shape_16.setTransform(12.3,31.7,1.667,1.672);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B52273").s().p("AAFAcIggggQgFgFABgHQAAgGAEgFQAFgFAHAAQAHAAAEAFIAgAhQAEAEAAAHQAAAHgFAEQgEAFgHAAQgHAAgEgFg");
	this.shape_17.setTransform(61.2,-22.4,1.667,1.672);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1AC0DC").s().p("AgVAdQgHgBgEgGQgDgFABgHQABgGAGgEIAlgZQAGgEAGABQAHABAEAGQAEAFgCAHQgBAHgGACIglAaQgFADgFAAIgCAAg");
	this.shape_18.setTransform(-48.4,-35.9,1.667,1.672);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F17B16").s().p("AgbAcQgEgEAAgHQAAgHAEgFIAgggQAFgEAGgBQAHAAAEAFQAGAEAAAIQgBAGgEAEIggAhQgFAFgGgBIgBABQgGAAgFgFg");
	this.shape_19.setTransform(56.3,-36.5,1.667,1.672);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#449CA5").s().p("AgTAhQgGgDgCgHQgBgGADgGIAYgmQADgGAGgBQAHgCAGADQAFAEACAGQABAHgDAFIgYAnQgDAGgGABIgEABQgEAAgEgDg");
	this.shape_20.setTransform(-67.3,24,1.667,1.672);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDC70F").s().p("AgVAdQgGgBgEgFQgEgGABgGQABgHAGgEIAlgaQAFgDAHABQAGABAEAFQAEAFgBAHQgBAGgGAEIglAaQgEADgFAAIgDAAg");
	this.shape_21.setTransform(-68.2,4.6,1.667,1.672);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E91F43").s().p("AggAQQgFgEgBgHQgBgGAEgFQAEgFAHgBIAtgGQAHAAAFAEQAFAEABAGQABAGgEAFQgFAFgGABIgtAGIgDAAQgFAAgEgDg");
	this.shape_22.setTransform(44,30.9,1.667,1.672);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#31BCA8").s().p("AAIAjQgHgBgCgGIgYgnQgDgGACgGQACgHAFgDQAGgEAGADQAHABACAFIAXAoQAEAGgCAGQgBAHgHADQgDACgEAAIgEgBg");
	this.shape_23.setTransform(-2.4,-36,1.667,1.672);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7CC4D").s().p("AgMAlQgHgCgCgGQgDgGACgHIAQgrQACgGAFgDQAGgCAGACQAHACACAGQADAGgCAGIgQArQgCAGgFADQgDACgEAAIgFgBg");
	this.shape_24.setTransform(-64.1,-29.2,1.667,1.672);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape_25.setTransform(-3.7,-2.9,1.667,1.672);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_26.setTransform(0.2,46.5,1.667,1.672);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B5F37").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_27.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B37042").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_28.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9B5F37").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAKAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJAAAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgIgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQAAgDgBgFQABgJAHgGQAHgGAJAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_29.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#977F65").s().p("AHOE9QgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgBgIQgCAJgGAGQgHAGgJAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgGAGQgIAGgIAAQgJAAgIgGQgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQACAJAHAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGABgJQAAAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAHgGAJAAQAJAAAIAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgIAHgJAAQgKAAgGgGg");
	this.shape_30.setTransform(0.8,0.9,1.652,1.652);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B37042").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_31.setTransform(-0.8,-0.8,1.652,1.652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_25,p:{scaleX:1.667,scaleY:1.672,x:-3.7,y:-2.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_25,p:{scaleX:1.667,scaleY:1.672,x:-3.7,y:-2.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_26,p:{scaleX:1.652,scaleY:1.652,x:-0.6,y:45.3}},{t:this.shape_25,p:{scaleX:1.652,scaleY:1.652,x:-4.4,y:-3.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-53.8,167,108);


(lib.progress_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// House
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B27042").s().p("AAUAiIgvggQgHgFgCgJQgCgJAFgHQAGgIAIgBQAJgCAIAGIAnAbIAAAsIgEAAQgHAAgGgEg");
	this.shape.setTransform(-81.6,28.8,0.869,0.869);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B27042").s().p("AgNAAQAAg9Abg1IAADlQgbg1AAg+g");
	this.shape_1.setTransform(-79.5,7.4,0.869,0.869);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B27042").s().p("Ag5ALIB3h9IAABjIh7CBg");
	this.shape_2.setTransform(-83.7,-19.1,0.869,0.869);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B27042").s().p("AhOHTIAisjIB6iCIAADOQgcA1AAA+QAAA+AcA1IAAB7IgogbQgHgGgKACQgIABgFAIQgGAHACAJQACAJAHAGIAxAgQAHAGAJgCIAAFJg");
	this.shape_3.setTransform(-85.1,20.1,0.869,0.869);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#977F65").s().p("AAUAiIgvggQgHgFgCgJQgCgJAFgHQAGgIAIgBQAJgCAIAGIAnAbIAAAsIgEAAQgHAAgGgEg");
	this.shape_4.setTransform(-79.6,30.8,0.869,0.869);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#977F65").s().p("AgNAAQAAg9Abg1IAADlQgbg1AAg+g");
	this.shape_5.setTransform(-77.5,9.4,0.869,0.869);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#977F65").s().p("Ag5ALIB3h9IAABjIh7CBg");
	this.shape_6.setTransform(-81.7,-17.1,0.869,0.869);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#977F65").s().p("AhDGWIAcq6IBrhxIAACzQgZAuAAA2QAAA2AZAuIAABrIgjgYQgHgFgHACQgIABgFAHQgEAGABAIQACAIAHAEIApAdQAHAEAIgBIAAEeg");
	this.shape_7.setTransform(-83.1,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B27042").s().p("AghAgQgJgDgEgJQgEgHAEgJQADgIAIgEIA1gXQAIgDAJADQAIADAEAJQADAIgDAJQgDAHgJADIg0AYQgEACgEAAQgFAAgDgCg");
	this.shape_8.setTransform(47.5,50.8,0.88,0.88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B27042").s().p("AATAfIg1gVQgIgDgEgIQgEgIADgJQAEgIAIgEQAJgDAIADIA1AVQAJAEAEAHQADAIgDAJQgEAIgIAEQgEACgEAAQgFAAgEgCg");
	this.shape_9.setTransform(-44.4,55.3,0.88,0.88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B27042").s().p("AAYAjIgvghQgIgEgBgJQgCgJAFgIQAFgHAJgCQAJgBAHAFIAhAWIAAAxQgFAAgFgDg");
	this.shape_10.setTransform(-80.9,28.8,0.88,0.88);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B27042").s().p("AgiAgQgIgEgEgHQgEgJAEgIQADgHAIgEIA1gYQAIgEAJAEQAIAEAEAHQADAIgDAJQgDAIgJADIg0AYQgEACgEAAQgFAAgEgCg");
	this.shape_11.setTransform(80.7,54,0.88,0.88);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B27042").s().p("AgZAcQgKgCgFgHQgGgHACgJQABgJAIgFIAWgQIA6AAQAAALgIAGIguAhQgGAFgHAAIgDAAg");
	this.shape_12.setTransform(-73.3,49.9,0.88,0.88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B27042").s().p("AgIATIgCgaQAAgKAKgBQADAAADADQADADAAAEIACAbg");
	this.shape_13.setTransform(34.4,59.4,0.88,0.88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B27042").s().p("AgBAmQgDAAgDgDQgDgDAAgEIADg4QAAgEADgCQADgEADABQAEAAADADQACADAAAEIgCA4QgBADgDADQgDADgCAAIgBAAg");
	this.shape_14.setTransform(-34.2,51.2,0.88,0.88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B27042").s().p("AgEAkQgDgEgBgEIgCg3QAAgEACgDQADgDAEAAQADAAADACQADADABAFIACA3QAAAEgCADQgDADgEAAIgBAAQgCAAgDgCg");
	this.shape_15.setTransform(34,51.2,0.88,0.88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B27042").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAKABgBAKIgBAag");
	this.shape_16.setTransform(-34.6,59.4,0.88,0.88);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B27042").s().p("AAyBNIiUhbIDFg+IAACZg");
	this.shape_17.setTransform(-6.6,54.3,0.88,0.88);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B27042").s().p("AiCBNIAFiZIEAAAIAACZg");
	this.shape_18.setTransform(-13.8,54.3,0.88,0.88);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B27042").s().p("AiCBNIAAiZIEAAAIAFCZg");
	this.shape_19.setTransform(13.6,54.3,0.88,0.88);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B27042").s().p("AgcBNIAGiZIAzAAIgGCZg");
	this.shape_20.setTransform(-27.4,54.3,0.88,0.88);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B27042").s().p("AgXBNIgEiZIAxAAIAGCZg");
	this.shape_21.setTransform(27.2,54.3,0.88,0.88);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B27042").s().p("AgKAAQAAg0AVgwIAADJQgVgwAAg1g");
	this.shape_22.setTransform(-78.8,7.1,0.88,0.88);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B27042").s().p("Ag1AHIBvh1IAABjIh0B6g");
	this.shape_23.setTransform(-83,-19.5,0.88,0.88);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B27042").s().p("AEtHPIABgaQAAgKgKgBQgEAAgDACQgDAEAAAEIgBAbIp2AAIAgsjIB1h7IAADWQgVAvAAA1QAAA1AVAwIAACFIghgXQgHgFgJABQgJACgGAIQgFAHACAJQACAJAHAFIAwAhQAGADAEAAIAACvIAmAAIgWAQQgHAFgCAJQgBAJAFAHQAGAIAJABQAJABAHgFIAvgiQAJgHAAgKIHEAAIgGCagACQFvQgJAEgDAIQgDAIADAJQAEAJAIADIA3AVQAIADAJgDQAIgEADgIQAEgJgEgIQgEgIgIgEIg2gWIgIgBQgFAAgEACgAEiE8QgDACAAAEIgCA5QgBAEADADQADADAEAAQAEABADgEQADgDAAgDIADg5QAAgEgDgDQgDgDgEAAIgBAAQgDAAgDADg");
	this.shape_24.setTransform(-60.2,20.3,0.88,0.88);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B27042").s().p("AkYBNIgBgbQAAgEgDgEQgEgCgDAAQgKABAAAKIACAaIgsAAIgHiZIK2AAIAGCZgAD8gjIg1AYQgJAEgDAHQgDAJADAIQAEAIAJAEQAIADAIgDIA2gYQAIgEAEgHQADgJgDgIQgEgIgJgEQgEgBgEAAQgEAAgFABgAkphJQgDAAgEAEQgCADAAADIACA5QABAEADACQADADAEAAQAEAAADgDQACgCAAgEIgCg5QgBgEgDgDQgCgDgDAAIgCAAgAh8hGIg2AXQgIAEgDAJQgEAJAEAHQAEAJAJADQAHADAJgDIA1gYQAJgDADgIQADgJgDgIQgEgJgIgDQgFgCgEAAQgEAAgEACg");
	this.shape_25.setTransform(60.1,54.3,0.88,0.88);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#977F65").s().p("AghAgQgJgDgEgJQgEgHAEgJQADgIAIgEIA1gXQAIgDAJADQAIADAEAJQADAIgDAJQgDAHgJADIg0AYQgEACgEAAQgFAAgDgCg");
	this.shape_26.setTransform(50.3,54.1,0.88,0.88);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#977F65").s().p("AATAfIg1gVQgIgDgEgIQgEgIADgJQAEgIAIgEQAJgDAIADIA1AVQAJAEAEAHQADAIgDAJQgEAIgIAEQgEACgEAAQgFAAgEgCg");
	this.shape_27.setTransform(-41.6,58.6,0.88,0.88);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#977F65").s().p("AAYAjIgvghQgIgEgBgJQgCgJAFgIQAFgHAJgCQAJgBAHAFIAhAWIAAAxQgFAAgFgDg");
	this.shape_28.setTransform(-78,32,0.88,0.88);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#977F65").s().p("AgiAgQgIgEgEgHQgEgJAEgIQADgHAIgEIA1gYQAIgEAJAEQAIAEAEAHQADAIgDAJQgDAIgJADIg0AYQgEACgEAAQgFAAgEgCg");
	this.shape_29.setTransform(83.6,57.2,0.88,0.88);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#977F65").s().p("AgZAcQgKgCgFgHQgGgHACgJQABgJAIgFIAWgQIA6AAQAAALgIAGIguAhQgGAFgHAAIgDAAg");
	this.shape_30.setTransform(-70.5,53.2,0.88,0.88);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#977F65").s().p("AgIATIgCgaQAAgKAKgBQADAAADADQADADAAAEIACAbg");
	this.shape_31.setTransform(37.3,62.7,0.88,0.88);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#977F65").s().p("AgBAmQgDAAgDgDQgDgDAAgEIADg4QAAgEADgCQADgEADABQAEAAADADQACADAAAEIgCA4QgBADgDADQgDADgCAAIgBAAg");
	this.shape_32.setTransform(-31.3,54.4,0.88,0.88);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#977F65").s().p("AgEAkQgDgEgBgEIgCg3QAAgEACgDQADgDAEAAQADAAADACQADADABAFIACA3QAAAEgCADQgDADgEAAIgBAAQgCAAgDgCg");
	this.shape_33.setTransform(36.9,54.4,0.88,0.88);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#977F65").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAKABgBAKIgBAag");
	this.shape_34.setTransform(-31.7,62.7,0.88,0.88);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#977F65").s().p("AAyBNIiUhbIDFg+IAACZg");
	this.shape_35.setTransform(-3.8,57.5,0.88,0.88);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#977F65").s().p("AiCBNIAFiZIEAAAIAACZg");
	this.shape_36.setTransform(-10.9,57.5,0.88,0.88);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#977F65").s().p("AiCBNIAAiZIEAAAIAFCZg");
	this.shape_37.setTransform(16.5,57.5,0.88,0.88);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#977F65").s().p("AgcBNIAGiZIAzAAIgGCZg");
	this.shape_38.setTransform(-24.5,57.5,0.88,0.88);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#977F65").s().p("AgXBNIgEiZIAxAAIAGCZg");
	this.shape_39.setTransform(30.1,57.5,0.88,0.88);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#977F65").s().p("AgKAAQAAg0AVgwIAADJQgVgwAAg1g");
	this.shape_40.setTransform(-76,10.4,0.88,0.88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#977F65").s().p("Ag1AHIBvh1IAABjIh0B6g");
	this.shape_41.setTransform(-80.2,-16.2,0.88,0.88);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#977F65").s().p("AEtHPIABgaQAAgKgKgBQgEAAgDACQgDAEAAAEIgBAbIp2AAIAgsjIB1h7IAADWQgVAvAAA1QAAA1AVAwIAACFIghgXQgHgFgJABQgJACgGAIQgFAHACAJQACAJAHAFIAwAhQAGADAEAAIAACvIAmAAIgWAQQgHAFgCAJQgBAJAFAHQAGAIAJABQAJABAHgFIAvgiQAJgHAAgKIHEAAIgGCagACQFvQgJAEgDAIQgDAIADAJQAEAJAIADIA3AVQAIADAJgDQAIgEADgIQAEgJgEgIQgEgIgIgEIg2gWIgIgBQgFAAgEACgAEiE8QgDACAAAEIgCA5QgBAEADADQADADAEAAQAEABADgEQADgDAAgDIADg5QAAgEgDgDQgDgDgEAAIgBAAQgDAAgDADg");
	this.shape_42.setTransform(-57.4,23.6,0.88,0.88);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#977F65").s().p("AkYBNIgBgbQAAgEgDgEQgEgCgDAAQgKABAAAKIACAaIgsAAIgHiZIK2AAIAGCZgAD8gjIg1AYQgJAEgDAHQgDAJADAIQAEAIAJAEQAIADAIgDIA2gYQAIgEAEgHQADgJgDgIQgEgIgJgEQgEgBgEAAQgEAAgFABgAkphJQgDAAgEAEQgCADAAADIACA5QABAEADACQADADAEAAQAEAAADgDQACgCAAgEIgCg5QgBgEgDgDQgCgDgDAAIgCAAgAh8hGIg2AXQgIAEgDAJQgEAJAEAHQAEAJAJADQAHADAJgDIA1gYQAJgDADgIQADgJgDgIQgEgJgIgDQgFgCgEAAQgEAAgEACg");
	this.shape_43.setTransform(62.9,57.5,0.88,0.88);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B27042").s().p("AghAgQgJgEgEgIQgDgJADgIQADgHAJgEIA0gXIAEgCIAJAAQAMADAEAKQAEAIgEAJQgDAHgIAEIg1AXQgEADgFAAQgEAAgDgCg");
	this.shape_44.setTransform(48,51.2,0.884,0.884);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B27042").s().p("AATAfIg1gVQgJgEgDgHQgEgIADgJQAEgIAIgEQAIgEAJAEIA1AVQAJADAEAIQADAIgDAJQgEAIgIAEQgEACgFAAIgIgCg");
	this.shape_45.setTransform(-44.4,55.7,0.884,0.884);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B27042").s().p("AAWAjIgvghQgHgEgCgJQgCgJAFgIQAGgHAIgCQAJgCAIAFIAjAZIAAAvQgHAAgGgDg");
	this.shape_46.setTransform(-80.9,29,0.884,0.884);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B27042").s().p("AgiAgQgIgDgEgJQgDgIADgIQADgIAJgEIA0gXQAJgDAIADQAIADAEAIQAEAJgEAIQgEAIgHADIg1AYQgFACgEAAQgEAAgEgCg");
	this.shape_47.setTransform(81.4,54.3,0.884,0.884);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B27042").s().p("AgZAZQgJgBgGgHQgFgIABgJQACgIAHgFIAPgLIBBAAQgCAHgGAEIguAiQgGAEgHAAIgDAAg");
	this.shape_48.setTransform(-73.4,50.5,0.884,0.884);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B27042").s().p("AgKAYIgCgiQAAgFADgEQAEgEAFAAQAEAAAEADQAEAEAAAFIABAjg");
	this.shape_49.setTransform(34.9,59.4,0.884,0.884);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B27042").s().p("AgLAnQgGgDgBgEIgFg/QgBgHAMgDIATAAQAMADAAAGIAFA/QABAEgGAEQgGADgJAAIgDAAQgGAAgGgDg");
	this.shape_50.setTransform(34.5,51.9,0.884,0.884);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B27042").s().p("AgBAmQgDAAgDgDQgDgDAAgEIADg4QAAgGAFgDIAHAAQAGADAAAHIgCA3QgBAEgDADQgDADgCAAIgBAAg");
	this.shape_51.setTransform(-34.1,51.5,0.884,0.884);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B27042").s().p("AgKATIACgcQAAgDADgEQADgCADAAQAKABgBAJIgBAbg");
	this.shape_52.setTransform(-34.5,59.8,0.884,0.884);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B27042").s().p("AgYBLIAAiVIAxAAIAACVg");
	this.shape_53.setTransform(0.3,54.9,0.884,0.884);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B27042").s().p("AiDBLIAGiVIEAAAIAACVg");
	this.shape_54.setTransform(-13.6,54.9,0.884,0.884);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B27042").s().p("AiDBLIAAiVIECAAIAFCVg");
	this.shape_55.setTransform(14.1,54.9,0.884,0.884);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B27042").s().p("AgcBLIAGiVIAzAAIgFCVg");
	this.shape_56.setTransform(-27.3,54.9,0.884,0.884);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B27042").s().p("AgXBLIgEiVIAxAAIAGCVg");
	this.shape_57.setTransform(27.6,54.9,0.884,0.884);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B27042").s().p("AgLAAQAAg4AXgyIAADVQgXgyAAg5g");
	this.shape_58.setTransform(-78.8,7.3,0.884,0.884);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B27042").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_59.setTransform(76.7,7.3,0.884,0.884);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B27042").s().p("AgSAZIAGAAIAAgxIgGAAIAAhrQAlA9AABGQAABHglA9g");
	this.shape_60.setTransform(78.1,7.3,0.884,0.884);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B27042").s().p("AhFgXIAAhkICGCQIAFBng");
	this.shape_61.setTransform(82.6,-18.9,0.884,0.884);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B27042").s().p("Ag3AJIBzh4IAABjIh3B8g");
	this.shape_62.setTransform(-83.1,-19.6,0.884,0.884);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B27042").s().p("AEsHRIACgcQAAgDgDgEQgDgDgEAAQgEAAgDADQgDADAAADIgBAdIp2AAIAgsjIB4h+IAADRQgYAzAAA4QAAA5AYAyIAACAIgkgYQgIgFgJABQgIACgGAIQgFAHACAJQACAJAHAGIAwAgQAGAEAHAAIAACzIAcAAIgPALQgHAGgCAIQgBAJAFAIQAGAHAJABQAJACAHgFIAvgjQAGgEACgIIGMAAQgGADAAAGIgCA4QgBAEADADQADADAEAAQAJAAABgJIADg4QAAgIgGgCIAxAAIgGCWgACQFxQgJADgDAJQgEAIAEAJQAEAHAIAEIA3AVQAIAEAJgEQAIgEADgIQAEgJgEgIQgEgJgIgCIg3gWQgEgCgEAAQgEAAgEADg");
	this.shape_63.setTransform(-60.3,20.4,0.884,0.884);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B27042").s().p("AkYHTIgBgdQAAgEgDgCQgDgDgEAAQgEAAgDADQgDADAAAEIACAcIgsAAIgGiWIAwAAQgFACAAAHIADA4QABAKAJAAQAEgBADgDQADgDgBgEIgCg4QAAgGgFgCICrAAIgEABIg1AXQgJAEgDAJQgDAIADAIQAEAJAJADQAIAEAIgEIA2gYQAIgDADgJQAEgIgEgJQgEgKgMgCIEiAAIAAlLQAng9AAhHQAAhHgng9IAAi8ICMCVIAfMQgAD9FiIg2AXQgIAEgDAIQgEAJAEAIQAEAIAIAEQAIADAJgEIA1gXQAIgEAEgIQADgJgDgIQgEgIgIgEIgIgBQgFAAgEACg");
	this.shape_64.setTransform(60.6,20.2,0.884,0.884);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#977F65").s().p("AghAgQgJgEgEgIQgDgJADgIQADgHAJgEIA0gXIAEgCIAJAAQAMADAEAKQAEAIgEAJQgDAHgIAEIg1AXQgEADgFAAQgEAAgDgCg");
	this.shape_65.setTransform(50.9,53.9,0.884,0.884);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#977F65").s().p("AATAfIg1gVQgJgEgDgHQgEgIADgJQAEgIAIgEQAIgEAJAEIA1AVQAJADAEAIQADAIgDAJQgEAIgIAEQgEACgFAAIgIgCg");
	this.shape_66.setTransform(-41.4,58.4,0.884,0.884);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#977F65").s().p("AAWAjIgvghQgHgEgCgJQgCgJAFgIQAGgHAIgCQAJgCAIAFIAjAZIAAAvQgHAAgGgDg");
	this.shape_67.setTransform(-77.9,31.7,0.884,0.884);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#977F65").s().p("AgiAgQgIgDgEgJQgDgIADgIQADgIAJgEIA0gXQAJgDAIADQAIADAEAIQAEAJgEAIQgEAIgHADIg1AYQgFACgEAAQgEAAgEgCg");
	this.shape_68.setTransform(84.3,57,0.884,0.884);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#977F65").s().p("AgZAZQgJgBgGgHQgFgIABgJQACgIAHgFIAPgLIBBAAQgCAHgGAEIguAiQgGAEgHAAIgDAAg");
	this.shape_69.setTransform(-70.5,53.2,0.884,0.884);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#977F65").s().p("AgKAYIgCgiQAAgFADgEQAEgEAFAAQAEAAAEADQAEAEAAAFIABAjg");
	this.shape_70.setTransform(37.9,62.1,0.884,0.884);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#977F65").s().p("AgLAnQgGgDgBgEIgFg/QgBgHAMgDIATAAQAMADAAAGIAFA/QABAEgGAEQgGADgJAAIgDAAQgGAAgGgDg");
	this.shape_71.setTransform(37.4,54.6,0.884,0.884);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#977F65").s().p("AgBAmQgDAAgDgDQgDgDAAgEIADg4QAAgGAFgDIAHAAQAGADAAAHIgCA3QgBAEgDADQgDADgCAAIgBAAg");
	this.shape_72.setTransform(-31.2,54.2,0.884,0.884);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#977F65").s().p("AgKATIACgcQAAgDADgEQADgCADAAQAKABgBAJIgBAbg");
	this.shape_73.setTransform(-31.6,62.5,0.884,0.884);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#977F65").s().p("AgYBLIAAiVIAxAAIAACVg");
	this.shape_74.setTransform(3.2,57.6,0.884,0.884);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#977F65").s().p("AiDBLIAGiVIEAAAIAACVg");
	this.shape_75.setTransform(-10.6,57.6,0.884,0.884);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#977F65").s().p("AiDBLIAAiVIECAAIAFCVg");
	this.shape_76.setTransform(17.1,57.6,0.884,0.884);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#977F65").s().p("AgcBLIAGiVIAzAAIgFCVg");
	this.shape_77.setTransform(-24.3,57.6,0.884,0.884);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#977F65").s().p("AgXBLIgEiVIAxAAIAGCVg");
	this.shape_78.setTransform(30.6,57.6,0.884,0.884);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#977F65").s().p("AgLAAQAAg4AXgyIAADVQgXgyAAg5g");
	this.shape_79.setTransform(-75.9,10,0.884,0.884);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#977F65").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_80.setTransform(79.7,10,0.884,0.884);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#977F65").s().p("AgSAZIAGAAIAAgxIgGAAIAAhrQAlA9AABGQAABHglA9g");
	this.shape_81.setTransform(81.1,10,0.884,0.884);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#977F65").s().p("AhFgXIAAhkICGCQIAFBng");
	this.shape_82.setTransform(85.6,-16.2,0.884,0.884);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#977F65").s().p("Ag3AJIBzh4IAABjIh3B8g");
	this.shape_83.setTransform(-80.1,-16.9,0.884,0.884);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#977F65").s().p("AEsHRIACgcQAAgDgDgEQgDgDgEAAQgEAAgDADQgDADAAADIgBAdIp2AAIAgsjIB4h+IAADRQgYAzAAA4QAAA5AYAyIAACAIgkgYQgIgFgJABQgIACgGAIQgFAHACAJQACAJAHAGIAwAgQAGAEAHAAIAACzIAcAAIgPALQgHAGgCAIQgBAJAFAIQAGAHAJABQAJACAHgFIAvgjQAGgEACgIIGMAAQgGADAAAGIgCA4QgBAEADADQADADAEAAQAJAAABgJIADg4QAAgIgGgCIAxAAIgGCWgACQFxQgJADgDAJQgEAIAEAJQAEAHAIAEIA3AVQAIAEAJgEQAIgEADgIQAEgJgEgIQgEgJgIgCIg3gWQgEgCgEAAQgEAAgEADg");
	this.shape_84.setTransform(-57.3,23.1,0.884,0.884);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#977F65").s().p("AkYHTIgBgdQAAgEgDgCQgDgDgEAAQgEAAgDADQgDADAAAEIACAcIgsAAIgGiWIAwAAQgFACAAAHIADA4QABAKAJAAQAEgBADgDQADgDgBgEIgCg4QAAgGgFgCICrAAIgEABIg1AXQgJAEgDAJQgDAIADAIQAEAJAJADQAIAEAIgEIA2gYQAIgDADgJQAEgIgEgJQgEgKgMgCIEiAAIAAlLQAng9AAhHQAAhHgng9IAAi8ICMCVIAfMQgAD9FiIg2AXQgIAEgDAIQgEAJAEAIQAEAIAIAEQAIADAJgEIA1gXQAIgEAEgIQADgJgDgIQgEgIgIgEIgIgBQgFAAgEACg");
	this.shape_85.setTransform(63.5,22.9,0.884,0.884);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B27042").s().p("AwJPtIArwQIPevJIPgPJIAqQQg");
	this.shape_86.setTransform(0,-29.3,0.892,0.892);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#977F65").s().p("AwJPtIArwQIPevJIPgPJIAqQQg");
	this.shape_87.setTransform(3.8,-26.1,0.892,0.892);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E0C03D").s().p("AiBAlICjiqIBgBkIimCng");
	this.shape_88.setTransform(-15.9,-106.7,0.878,0.878,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E0C03D").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_89.setTransform(-35.5,-85.9,0.878,0.878,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E0C03D").s().p("AiBAkICjipIBgBlIimClg");
	this.shape_90.setTransform(-53.3,-67,0.878,0.878,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E0C03D").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_91.setTransform(-70.6,-48.4,0.878,0.878,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E0C03D").s().p("AiBAlICjiqIBgBkIimCng");
	this.shape_92.setTransform(-88.6,-29.6,0.878,0.878,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E0C03D").s().p("AiBghIBghkICjCpIhdBhg");
	this.shape_93.setTransform(20.8,-106.6,0.878,0.878,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E0C03D").s().p("AiBggIBghlICjCpIhdBig");
	this.shape_94.setTransform(40.3,-85.9,0.878,0.878,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E0C03D").s().p("AiBggIBghlICjCpIhdBhg");
	this.shape_95.setTransform(58.9,-67,0.878,0.878,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E0C03D").s().p("AiBggIBghlICjCpIhdBig");
	this.shape_96.setTransform(76.4,-48.4,0.878,0.878,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E0C03D").s().p("AiBghIBghkICjCpIhdBig");
	this.shape_97.setTransform(94.2,-29.5,0.878,0.878,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#ACDEDF").s().p("ASKLeQgxgCgigjIwux0IxBR0QgiAkgwABQgxABgjgiQgkghgBgxQgBgxAigkISXzOQAjgmAyABQAzAAAiAlISFTPQAhAkgBAxQgCAwgkAiQgiAgguAAIgEAAg");
	this.shape_98.setTransform(3,-71.9,0.878,0.878,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B27042").s().p("AwVPqIAqwQIPfvJIPfPJIBDQXg");
	this.shape_99.setTransform(1,-27.3,0.878,0.878);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#977F65").s().p("AwVPqIAqwQIPfvKIPfPKIBDQXg");
	this.shape_100.setTransform(5.2,-23.7,0.878,0.878);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#977F65").s().p("ASKLeQgxgCgigjIwux0IxBR0QgiAkgwABQgxABgjgiQgkghgBgxQgBgxAigkISXzOQAjgmAyABQAzAAAiAlISFTPQAhAkgBAxQgCAwgkAiQgiAgguAAIgEAAg");
	this.shape_101.setTransform(2.7,-68.2,0.878,0.878);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B27042").s().p("AtbghINntUINmNUIAlORI8tAGg");
	this.shape_102.setTransform(0.2,-27.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape_103.setTransform(64.2,-135.6,0.878,0.878,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_104.setTransform(64.2,-139.8,0.878,0.878,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B5764E").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_105.setTransform(64.2,-122.8,0.878,0.878,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B5764E").s().p("AiLFIIAAqPIEXAAIAAKPg");
	this.shape_106.setTransform(64.2,-86,0.878,0.878,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#977F65").s().p("AkSCJIAAjfQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAADfg");
	this.shape_107.setTransform(67.4,-137.7,0.878,0.878,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#977F65").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_108.setTransform(67.4,-120.7,0.878,0.878,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#977F65").s().p("AiMFIIAAqPIEZAAIAAKPg");
	this.shape_109.setTransform(67.4,-83.9,0.878,0.878,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E0C03D").s().p("AiXAdIAAg5IEvAAIAAA5g");
	this.shape_110.setTransform(72.7,-138.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_111.setTransform(8.5,11.1,0.878,0.878,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_112.setTransform(-5.4,11.1,0.878,0.878,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_113.setTransform(1.4,8.6,0.878,0.878,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_114.setTransform(1.3,9.2,0.878,0.878,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_115.setTransform(1.4,7.4,0.878,0.878,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape_116.setTransform(-33.1,58.9,0.878,0.878,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_117.setTransform(1.3,1.8,0.878,0.878,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_118.setTransform(35.8,58.9,0.878,0.878,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_119.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_120.setTransform(-56.2,5.9,0.878,0.878,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_121.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_122.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_123.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_124.setTransform(-56.2,5.9,0.878,0.878,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_125.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_126.setTransform(-56.2,6.7,0.878,0.878,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_101,p:{skewY:0,x:2.7,y:-68.2}},{t:this.shape_100,p:{skewY:0,x:5.2,y:-23.7}},{t:this.shape_99,p:{skewY:0,x:1,y:-27.3}},{t:this.shape_98,p:{x:3}},{t:this.shape_97,p:{x:94.2}},{t:this.shape_96,p:{x:76.4}},{t:this.shape_95,p:{x:58.9}},{t:this.shape_94,p:{x:40.3}},{t:this.shape_93,p:{x:20.8}},{t:this.shape_92,p:{x:-88.6}},{t:this.shape_91,p:{x:-70.6}},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-35.5}},{t:this.shape_88,p:{x:-15.9}}]},1).to({state:[{t:this.shape_110},{t:this.shape_109,p:{x:67.4}},{t:this.shape_108,p:{x:67.4}},{t:this.shape_107,p:{x:67.4}},{t:this.shape_101,p:{skewY:180,x:7.6,y:-67}},{t:this.shape_100,p:{skewY:180,x:5.1,y:-22.5}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_98,p:{x:3}},{t:this.shape_97,p:{x:94.2}},{t:this.shape_96,p:{x:76.4}},{t:this.shape_95,p:{x:58.9}},{t:this.shape_94,p:{x:40.3}},{t:this.shape_93,p:{x:20.8}},{t:this.shape_92,p:{x:-88.6}},{t:this.shape_91,p:{x:-70.6}},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-35.5}},{t:this.shape_88,p:{x:-15.9}}]},1).to({state:[{t:this.shape_110},{t:this.shape_109,p:{x:67.3}},{t:this.shape_108,p:{x:67.3}},{t:this.shape_107,p:{x:67.3}},{t:this.shape_101,p:{skewY:180,x:7.6,y:-67}},{t:this.shape_100,p:{skewY:180,x:5.1,y:-23.8}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_99,p:{skewY:180,x:0.2,y:-27.4}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_98,p:{x:3}},{t:this.shape_97,p:{x:94.2}},{t:this.shape_96,p:{x:76.4}},{t:this.shape_95,p:{x:58.9}},{t:this.shape_94,p:{x:40.3}},{t:this.shape_93,p:{x:20.8}},{t:this.shape_92,p:{x:-88.6}},{t:this.shape_91,p:{x:-70.6}},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-35.5}},{t:this.shape_88,p:{x:-15.9}}]},1).to({state:[{t:this.shape_110},{t:this.shape_109,p:{x:67.3}},{t:this.shape_108,p:{x:67.3}},{t:this.shape_107,p:{x:67.3}},{t:this.shape_101,p:{skewY:180,x:7.6,y:-66.8}},{t:this.shape_100,p:{skewY:180,x:5.1,y:-23.8}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_99,p:{skewY:180,x:0.2,y:-27.4}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_98,p:{x:3}},{t:this.shape_97,p:{x:94.2}},{t:this.shape_96,p:{x:76.4}},{t:this.shape_95,p:{x:58.9}},{t:this.shape_94,p:{x:40.3}},{t:this.shape_93,p:{x:20.8}},{t:this.shape_92,p:{x:-88.6}},{t:this.shape_91,p:{x:-70.6}},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-35.5}},{t:this.shape_88,p:{x:-15.9}}]},1).to({state:[{t:this.shape_110},{t:this.shape_109,p:{x:68}},{t:this.shape_108,p:{x:68}},{t:this.shape_107,p:{x:68}},{t:this.shape_101,p:{skewY:180,x:7.6,y:-66.8}},{t:this.shape_100,p:{skewY:180,x:5.1,y:-23.8}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_99,p:{skewY:180,x:0.2,y:-27.4}},{t:this.shape_122,p:{x:-56.2}},{t:this.shape_121,p:{x:-56.2}},{t:this.shape_120,p:{x:-56.2}},{t:this.shape_119,p:{x:-56.2}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_98,p:{x:3}},{t:this.shape_97,p:{x:94.2}},{t:this.shape_96,p:{x:76.4}},{t:this.shape_95,p:{x:58.9}},{t:this.shape_94,p:{x:40.3}},{t:this.shape_93,p:{x:20.8}},{t:this.shape_92,p:{x:-88.6}},{t:this.shape_91,p:{x:-70.6}},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-35.5}},{t:this.shape_88,p:{x:-15.9}}]},1).to({state:[{t:this.shape_110},{t:this.shape_109,p:{x:67.3}},{t:this.shape_108,p:{x:67.3}},{t:this.shape_107,p:{x:67.3}},{t:this.shape_101,p:{skewY:180,x:6.9,y:-67.1}},{t:this.shape_100,p:{skewY:180,x:4.4,y:-23}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_99,p:{skewY:180,x:0.2,y:-27.4}},{t:this.shape_98,p:{x:2.2}},{t:this.shape_97,p:{x:93.4}},{t:this.shape_96,p:{x:75.6}},{t:this.shape_95,p:{x:58.1}},{t:this.shape_94,p:{x:39.5}},{t:this.shape_93,p:{x:20}},{t:this.shape_92,p:{x:-89.4}},{t:this.shape_91,p:{x:-71.4}},{t:this.shape_90,p:{x:-54.1}},{t:this.shape_89,p:{x:-36.3}},{t:this.shape_88,p:{x:-16.7}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122,p:{x:59.2}},{t:this.shape_121,p:{x:59.3}},{t:this.shape_120,p:{x:59.2}},{t:this.shape_119,p:{x:59.3}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).wait(1));

	// gray
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#666666").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_127.setTransform(8.2,10.7,0.858,0.858,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#666666").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_128.setTransform(-5.4,10.7,0.858,0.858,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#666666").s().p("AxFJoQgggdgCgrQgBgrAdgfIP4w5QAeghAuAAQArgBAfAhIQIQ5QAeAfgBArQgBArggAeQgeAdgrgBQgrgBgegfIu8vpIusPpQgeAfgrABIgEABQgoAAgdgdg");
	this.shape_129.setTransform(2.7,-72.5,0.976,0.976);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#666666").s().p("AtbghINntUINmNUIAlORI8tAGg");
	this.shape_130.setTransform(0.3,-27.1,0.976,0.976);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#666666").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_131.setTransform(64.9,-132.5,0.858,1.989,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#666666").s().p("AiLFIIAAqPIEXAAIAAKPg");
	this.shape_132.setTransform(64.9,-86.3,0.858,0.858,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E0C03D").s().p("AiUAdIAAg5IEpAAIAAA5g");
	this.shape_133.setTransform(71.1,-135.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-150.6,220.2,210.1);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAbAAASATQATASAAAaQAAAagTAUQgSASgbAAQgaAAgSgSg");
	this.shape.setTransform(41.4,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAaAAATATQATASAAAaQAAAagTAUQgTASgaAAQgaAAgSgSg");
	this.shape_1.setTransform(6.4,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,47.8,12.8), null);


(lib.snowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8F8").s().p("Ag3A3QgXgWAAghQAAggAXgXQAXgXAgAAQAhAAAWAXQAYAXAAAgQAAAhgYAWQgWAYghAAQggAAgXgYg");
	this.shape.setTransform(7.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowcopy, new cjs.Rectangle(0,0,15.8,15.8), null);


(lib.rolling_pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0)").s().p("EgrPAHaIAAuzMBWfAAAIAAOzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rolling_pin, new cjs.Rectangle(-276.8,-47.4,553.6,94.8), null);


(lib.cutting_board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0)").s().p("EgrcAaiMAAAg1EMBW5AAAMAAAA1Eg");
	this.shape.setTransform(278.1,169.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cutting_board, new cjs.Rectangle(0,0,556.3,339.7), null);


(lib.current_game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.outputTXT = new cjs.Text("גוף האדם", "bold 14px 'Segoe UI'", "#333333");
	this.outputTXT.name = "outputTXT";
	this.outputTXT.textAlign = "center";
	this.outputTXT.lineHeight = 21;
	this.outputTXT.lineWidth = 95;
	this.outputTXT.parent = this;
	this.outputTXT.setTransform(-11.2,-6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E66D76").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(56.5,2.3,1.438,1.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E66D76").s().p("AgHAIQgDgDgBgFQABgEADgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(41.8,2.5,1.438,1.438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1C249").s().p("AAEASQgPgGgEgKIAAgFQACgDAEgEQAHgHAJgBQAFgBACAFQAFAOgGAPQgDAEgDAAIgDgBg");
	this.shape_2.setTransform(51.7,11.7,1.438,1.438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1C249").s().p("AgIATQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgHgPAGgOQABgFAGABQAPADAGAMIAAAFQgDAKgQAHIgCAAIgDAAg");
	this.shape_3.setTransform(45.3,11.7,1.438,1.438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1C249").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEgBQAFABADADQADADAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_4.setTransform(48.4,11.6,1.438,1.438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbACIgGgMQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABIARAFQAUADAXgIQAAgBAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQgCAHgFAFQgKANgSAAQgRAAgKgNgAAAAJQASAAAJgOQgbAHgZgHQAIAOARAAg");
	this.shape_5.setTransform(49,4.6,1.438,1.438);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAHIgDgEIgFgDIgFAAIgCAAIgCAAIgBAAQgEABgBgDQgBgEAEgBIAFAAIADAAQACAAAEACIAGAEIAEAFQAAABAAABQABAAgBABQAAAAAAABQAAAAgBAAIgBAAIgCgBg");
	this.shape_6.setTransform(54,-6,1.438,1.438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAHQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAEgFIAGgEQADgCADAAIAEAAIAEAAQAEAAAAAEQgBADgEAAIgBAAIgBAAIgBAAIgDAAIgFAAIgEADIgEAEIgCABIgBgBg");
	this.shape_7.setTransform(44,-6,1.438,1.438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#48332E").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgEAEABQAFgBADAEQADADAAAEQAAAEgDAEQgDAEgFgBQgEABgDgEg");
	this.shape_8.setTransform(53.6,-1.6,1.438,1.438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#48332E").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgEAEABQAFgBADAEQADADAAAEQAAAEgDAEQgDAEgFgBQgEABgDgEg");
	this.shape_9.setTransform(44.5,-1.6,1.438,1.438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5764E").s().p("Ag/BAQgagbAAglQAAgkAagaQAbgbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAQgkAAgbgag");
	this.shape_10.setTransform(49,-0.2,1.438,1.438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A96A44").s().p("Ag/A/QgagaAAglQAAgkAagaQAbgaAkgBQAlABAaAaQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgbgbg");
	this.shape_11.setTransform(49,-0.3,1.438,1.438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FEFEFE").ss(1,1,1).p("AomiiIRNAAQBXAAAABXIAACXQAABXhXAAIxNAAQhXAAAAhXIAAiXQAAhXBXAAg");
	this.shape_12.setTransform(0,0,1.053,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ACDEDF").s().p("AomCjQhXgBAAhXIAAiWQAAhWBXAAIRNAAQBXAAAABWIAACWQAABXhXABg");
	this.shape_13.setTransform(0,0,1.053,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.outputTXT}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.current_game, new cjs.Rectangle(-68.2,-17.2,136.4,34.5), null);


(lib.talking_bubble_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmUEnQhHAAgzgzQgygzAAhHIAAjzQAAhHAygzQAzgzBHAAIMpAAQBHAAAzAzQAyAzAABHIAADzQAABHgyAzQgzAzhHAAg");
	this.shape.setTransform(143.1,73.1,2.479,2.479);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.talking_bubble_mc, new cjs.Rectangle(0,0,286.2,146.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAbAAASATQATASAAAaQAAAagTAUQgSASgbAAQgaAAgSgSg");
	this.shape.setTransform(41.4,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAaAAATATQATASAAAaQAAAagTAUQgTASgaAAQgaAAgSgSg");
	this.shape_1.setTransform(6.4,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,47.8,12.8), null);


(lib.cookie_man_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"1":0,"1":3,"2":6,"2":9,"1":12,"1":15,"2":18,"2":21,"1":24,"1":27,"2":30,"2":33,"1":36,"1":39,"2":42,"2":45});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAdIgMgCQgTgEgRgKIgLgIQgJgGgDgEIAAgFIAAgBIAAgBQABgEACgDIABgBIACgBIACABIAFAFQAJAGAMADQAtALAbggIACgBQABAAAFACQAEADAFAEIADADQAEAKgBADIgBAJQgUAXgiAAIgDAAg");
	this.shape.setTransform(0.5,37.8,1.777,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ABKioIhLAcIArBVIhUAaIA0BWIhTAbIApBV");
	this.shape_1.setTransform(-29.4,95.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5764E").s().p("AAXDsIAGACIhsgQIhNgqQhziLgHhaQgFg+A3hHQAtg8BagDQAugBAzALICFBmQBQAWAnBKQAnBIgbBPQgZBLhJAkQgrAVgsAAQgeAAgegKg");
	this.shape_2.setTransform(-32.3,91.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A96A44").s().p("AgnD6IirhVQgMgrAXg5QAOglAqhFQAuhLAPgiQAbg9gFgvIACAPICEB7QBQAXAmBKQAnBJgbBOQgZBNhCAhQgpAVgwAAQgeAAghgJg");
	this.shape_3.setTransform(-24.4,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AhJioIBMAcIgrBVIBUAaIg1BWIBTAbIgoBV");
	this.shape_4.setTransform(38.2,94);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5764E").s().p("AidDoQhHgkgahMQgahPAmhIQAnhKBQgWIBehzQBdgYBIAiQAoATAZAgQAZAjAUAtQAaA6gJAaIgbBuIg/BdIi2A4QggALgeAAQgsAAgqgVg");
	this.shape_5.setTransform(41.5,88.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A96A44").s().p("AifDqQhIgkgZhLQgbhPAnhIQAmhKBQgXIEriCQATAcANANQAOAXAxB5IgdB0Ig/BdIi8BqQgfALgeAAQgsAAgqgWg");
	this.shape_6.setTransform(41.2,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA38D").s().p("AAQDGQAEgEAEgGQADgHAAgGIgFiFIgEg1IgIiSIgBgHIgBgGQgFgMgKgHQgDgDgHgDIgNgCIAAAAIANAAIAMAFQAMAIAEANIADAGIAGBlIABA1IADA1IAHB/IgBAHQgCAPgMAHg");
	this.shape_7.setTransform(-9.6,100.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA38D").s().p("AAADLQgJgCgHgIQgIgIgBgLIABAAQACAKAHAHQAHAIAJABQAJACAJgDQAIgEAGgIQAGgIAAgLIAAlKQgCgJgFgIQgFgIgIgFQgJgFgJAAQgJgBgIAEQgIAEgHAIQgFAHgDAKIACBnIAAAAIgGhTIAAgVQACgKAHgKQAHgJAJgEQAJgFAKAAQALABAJAFQAIAFAIAKQAGAKAAALIAAEMQACAVgCAVIAAAVQAAALgGAJQgHAJgJAEQgHADgFAAIgJgCg");
	this.shape_8.setTransform(-3.2,101.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA38D").s().p("AAAgSIABAkg");
	this.shape_9.setTransform(-6.8,99.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA38D").s().p("AgGBZIAAgHIAKjCIgBA6IgHCPQACAOAJAKQgMgJgBgPg");
	this.shape_10.setTransform(19.2,108.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA38D").s().p("AgPgYQADgKAFgFQAJgOARgCQgPAFgIANIgGAOIgIBPg");
	this.shape_11.setTransform(21.7,85.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA38D").s().p("AgJDNQgGAAgEgCQgGgDgEgDQgEgDgDgFQgHgJAAgMIAAlHIACgLQADgLAHgJQAJgIAKgDQAIgEAMACQAWAEAKAWQAEAKAAAMIgFA/IAAAAIACg/QAAgLgFgJQgJgTgUgDQgJgCgJADQgIADgHAIQgHAHgDAJIgCAKIAAFHQABALAFAHQACAEAEADIAIAFIAFACIAEAAIAJAAIAJgEIAHgGIAGgIIADgKIADgqIABAAIgCArQAAAFgDAFQgCAGgDADQgEAFgEADQgFADgFABIgHABIgDAAg");
	this.shape_12.setTransform(15.1,101.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA38D").s().p("AgBDMIgHgBQgHgBgHgEQgLgHgHgOIgDgPIgClFIABgEQADgPALgKQAMgLAPAAIAJAAIAEAAQAHACAGAEQANAHAGAPIADAOIABE7IgBALIAAADQgDAQgMAKQgKAJgQABgAgai8QgKAJgCAOIgBADIgCE9IAAAHQAAAIADAGQAGAOAMAGQAEADAIACIADAAIAJAAQANAAALgKQAKgKACgOIABgDIAAhvQAAg3ACg6IgChkIgDgNQgFgNgMgHQgGgEgGAAIgDgBIgJAAQgNABgKAJg");
	this.shape_13.setTransform(5.9,101.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5DA696").s().p("AhbAGQgxgEgpgKQAmADA1ACIBaACQAXABAWgBIAugBQAygBApgCQgkAHg3AFIgtACg");
	this.shape_14.setTransform(5.5,75.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5DA696").s().p("Ag1AEQgkgEgRgEQARACAlABIBqABIA2gCQgVAEghADg");
	this.shape_15.setTransform(6.3,124.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6F4F2").s().p("AAPD4QgGgFgBgHIgznLIAAgBQgBgKAGgIQAHgIAJgBQAKgBAIAGQAHAHABAKIAAAAIAnHNIAAABQABAHgFAFQgFAGgHABIgCAAQgFAAgFgEg");
	this.shape_16.setTransform(-7.7,90.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6F4F2").s().p("AACAnQgGAAgEgFQgFgEgBgHIgFgpQgBgHAFgGQAEgGAHgBQAHAAAFAEQAGAFABAHIAFApQABAHgFAGQgFAGgHABg");
	this.shape_17.setTransform(-4.1,122.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#835246").s().p("AhGD3IgngEIgOgDIhDnnQAHAKA2AGQA3AHBKAAQBLAAA4gHQA2gHAGgJIhCHmIgBAAQgTADgUACQgnAEgnAAIgVAAQgcAAgcgBg");
	this.shape_18.setTransform(6,100.5,0.94,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4F3F2").s().p("AAUCIIgFgaIAAgBIgvj0IANAAIA0EPg");
	this.shape_19.setTransform(7.6,102.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4F3F2").s().p("AAUCIIgFgaIAAgBIgvj0IANABIA0EOg");
	this.shape_20.setTransform(3,79.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4F3F2").s().p("AAUCHIgFgaIAAgBIgvjzIANAAIA0EPg");
	this.shape_21.setTransform(-2.3,52.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F27590").s().p("AgZALIgGgcQAaAQAggEIAEAXIgPAAQgVAAgUgHg");
	this.shape_22.setTransform(9.2,109.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F27590").s().p("AgZALIgGgcQAbAPAfgDIAEAWIgPABQgUAAgVgHg");
	this.shape_23.setTransform(7.4,100.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F27590").s().p("AgYALIgHgcQAbAPAfgDIAEAWIgQABQgUAAgTgHg");
	this.shape_24.setTransform(5.9,93.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F27590").s().p("AgYALIgGgcQAaAPAfgDIAEAWIgQABQgUAAgTgHg");
	this.shape_25.setTransform(4.1,84.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F27590").s().p("AgYALIgHgcQAbAPAfgDIAEAWIgPABQgUAAgUgHg");
	this.shape_26.setTransform(2.8,77.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F27590").s().p("AgZALIgFgcQAaAPAfgDIAEAWIgQABQgTAAgVgHg");
	this.shape_27.setTransform(1.2,69.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7DEC6").s().p("AAcCOQgOgCgOgDIg3kXIA5ANIA2EQg");
	this.shape_28.setTransform(7.8,102.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7DEC6").s().p("AAkCPIgIgBQgQgCgMgDIg3kXIA5ANIA2EQg");
	this.shape_29.setTransform(3.2,79.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F27590").s().p("AgYALIgGgdIA4AOIAFAWIgOABQgUAAgVgIg");
	this.shape_30.setTransform(-4.3,41.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F27590").s().p("AgYALIgGgcQAaAPAegCIAFAWIgOAAQgUAAgVgHg");
	this.shape_31.setTransform(-0.3,62.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F27590").s().p("AgYALIgGgcQAaAQAegDIAFAWIgOAAQgUAAgVgHg");
	this.shape_32.setTransform(-1.7,54.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F27590").s().p("AgYAKIgGgcIA4ANIAFAWIgQACQgTAAgUgJg");
	this.shape_33.setTransform(-3.2,47.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7DEC6").s().p("AAcCNQgPgBgNgEIg2kWIA4ANIA1EQg");
	this.shape_34.setTransform(-2.3,52);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#835246").s().p("AgbAGQgSgCAAgEQAAgCAOgDQAOgCARAAIAXABQAXACAAAEQAAAEgSADIgcABQgRAAgKgCg");
	this.shape_35.setTransform(2.9,77.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A56253").s().p("AiAASQg3gGgHgKIgBgCIABgBQAEgKA4gGQA3gHBLAAQBNAAA4AHQA3AHAEAKIAAAAIgBACQgFAJg3AHQg4AHhLAAQhKAAg2gHg");
	this.shape_36.setTransform(5.9,75.5,0.94,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5DA696").s().p("AAAFsQgcAAgogEIghgEIAhADQAdACAngBQAlgBAegCIAugHIAAAAQASgEACgGIBYqYIgJAFIgOAEIgcAGQgTADgmADQgzADg/gBQgzAAg/gFIgigEIAiADQAyAEBAgBQA/gBAygFQAggCAZgEIAcgGIANgEQADgBACgCIACgCIABgBIgBgBIgCgBIgFgDIgUgGIACgHIAGACIAOAEIAHAEIAEADIAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAAABIhaKlIAAABIgCADIgBABIgFADIgaAGIgiAEIgrABIgYAAgAiFFZIhbqjIAAgBIABgEIAAAAIAAAAIBdKlIAAABIAAAFgAislfQAZgEAggCQAygFBAgBQBBgBAxAEIAaACIgCAHIgZgDQgygEg/gBQg5gBg5AEQgmADgTADIgVADIAVgEg");
	this.shape_37.setTransform(5.6,93.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6F4F2").s().p("AhWAHQgsgDgrgFIBXADIDZgEQAegEANgDQgRAGgZADIgsAGQgmAEgxAAg");
	this.shape_38.setTransform(8.4,63.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#74BCAD").s().p("AhuASQgdgCgcgEIgcgFIgOgFIgDgBIAFgCIAOgFIAdgFIA4gGQA0gEA9ABQBAABAzAFQAgACAZAEIAbAGIAJACIgLADIgcAGQgZAEggACQgyAFg/ABIgbAAQgwAAgngDg");
	this.shape_39.setTransform(5.1,61);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#99CDC1").s().p("AhwAZQgdgCgcgEIgcgGIgOgEIgDgCIgDgCIgBAAIgCgIIADgCQADgCADgBIAOgEIAcgGQATgDAmgDQA5gDA4AAQBAABAyAFQAaACAfAFQAMABAQAEIANAEIAFADIACACIABAAIgBABIgCABQgCACgDABIgCABIgLAEIgcAFQgZAEggADQgyAEhAABIgaABQgwAAgngDg");
	this.shape_40.setTransform(5.3,60.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AFDAD0").s().p("AAAFsQgcAAgogEIghgEIAhADQAdACAngBQAlgBAegCIAxgIIAIgCIADgCIAAAAIAAgBIgDgBIgIgDIgxgHQgmgEgdAAQgigBgiACQgTABgOADIgRADIgIACIgEACIAAABIAAAGIgDgDIhbqjIAAgBIABgEIAAAAIAAAAIACAIIAHAEIAOAFIAcAFQAcAEAdACQAyAEBAgBQA/gBAygFQAggCAZgEIAcgGIANgEQADgBACgCIACgCIABgBIgBgBIgCgBIgFgDIgNgEQgQgEgMgCQgfgFgagCQgygEg/gBQg5gBg5AEQgmADgTADIgVADIAVgEQAZgEAggCQAygFBAgBQBBgBAxAEQAcACAdAEIAcAGIAOAEIAHAEIAEADIAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAAABIhaKlIAAABIgCADIgBABIgFADIgaAGIgiAEIgrABIgYAAg");
	this.shape_41.setTransform(5.6,93.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#74BCAD").s().p("AhCAPIghgEIgRgDIgIgDIgEgCIAAgFIAAAAIAEgCIAIgDIARgDQAOgCATgBQAigCAhAAQAeABAmADIAxAIIAIACIADABIAAAAIAAAAIgDACIgIADIgxAHQgeADgmABIgYAAIgrgBg");
	this.shape_42.setTransform(5.4,128.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B5764E").s().p("AAFDXQgJgag+hUQg7hPgOguQgsiYFIg5IhoHLg");
	this.shape_43.setTransform(-39.3,86.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E66D76").s().p("AgtAtQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAaQAAAagTATQgTATgaAAQgaAAgTgTg");
	this.shape_44.setTransform(32,31.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E66D76").s().p("AgtAtQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAaQAAAagTATQgTATgaAAQgaAAgTgTg");
	this.shape_45.setTransform(-30.4,31.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E1C249").s().p("AAYBnQgkgOgbgTQgmgbgLgfIAAghQAJgRAUgTQAogmA2gJQANgCALAGQALAGAFAMQAeBRglBVQgFANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape_46.setTransform(13,67.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1C249").s().p("AgxBnQgNgGgGgNQgVgxACgxQABgkAMggQAFgMALgGQAKgGANACQA3AJAoAmQAUATAJARIAAAhQgUA2hcAlQgGADgHAAQgHAAgGgDg");
	this.shape_47.setTransform(-11.8,67.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E1C249").s().p("AgsAtQgTgTAAgaQAAgaATgSQASgTAaAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgaAAgSgTg");
	this.shape_48.setTransform(0.4,66.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AixB2IAMhfIBsAcIAIhmIBwAlIAIhnIBrAY");
	this.shape_49.setTransform(46.2,173.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ACyB2IgLhfIhtAcIgHhmIhwAlIgJhnIhrAY");
	this.shape_50.setTransform(-43.7,173.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_51.setTransform(1.2,127.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_52.setTransform(1.2,82.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgZASgUQAUgSAZAAQAaAAAUASQASAUAAAZQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_53.setTransform(1.2,105);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AA5AoIgBgCQgLgPgJgHQgNgJgOgEQgNgDgQAAIgPAAIgOACQgJADgJgFQgIgDgDgKQgDgJAEgJQAEgIAKgDIAGgCIAMAAIAKAAIAUACQATAEATAIQASAJAPAPQALAJAMAXQACAFgCAFQgBAFgFADIgGABQgGAAgEgFg");
	this.shape_54.setTransform(20.2,-1.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhKAqQgEgCgBgFQgBgFACgEQAMgXALgJQAPgPATgJQARgIAUgEIAfgCIALAAIACABQAJABAGAHQAGAIgBAKQAAAJgIAHQgHAFgKgBIgTgDIgPAAQgQAAgNADQgOAEgNAJQgHAGgNAQIgBACQgDAEgFABIgDAAQgEAAgDgDg");
	this.shape_55.setTransform(-18.1,-1.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B5764E").s().p("AgIgaIgMiUIApFdQgThLgKh+g");
	this.shape_56.setTransform(42.8,88.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B5764E").s().p("AGFKhQhRgWgvhFIi1kXIgDgEQgKgPgQgKQgYgQgdAAQgcAAgbAWQgOAMgHALIi2EXQgvBFhRAWQhQAWhMglQhZgqgdheQgdheAxhWIDll3QAPgXAMgeQAYg9gPglQgOglgfgHIgcAAIDHnAQAQgEAPAAIG5AAQAPAAAQAEICGAkQAFAlAOCsQALB/ATBLQgoABgRAsQgPAlAYA9QAMAeAPAXIABAAIDkF3QAxBWgdBeQgdBehZAqQgvAXgxAAQgeAAgegIg");
	this.shape_57.setTransform(1.4,128.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B5764E").s().p("AleFgQiSiSAAjOQAAjNCSiSQCRiRDNAAQDOAACSCRQCRCSAADNQAADOiRCSQiSCRjOAAQjNAAiRiRg");
	this.shape_58.setTransform(2.3,17.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A96A44").s().p("AGFKhQhRgWgvhFIi1kXIAAAAIgDgEQgegpgxAAQgcAAgbAWQgOAMgIALIAAAAIi1EXQgvBFhRAWQhQAWhMglQhZgqgdheQgdheAxhWIDll3QAPgXAMgeQAYg9gPglQgOglgZgUIgVgOIDJmpIHZAAICbAqIgOHGQgPAlAYA9QAMAeAPAXIDlF3QAxBWgdBeQgdBehZAqQgvAXgxAAQgeAAgegIg");
	this.shape_59.setTransform(2.4,132.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A96A44").s().p("AleFgQiSiSAAjOQAAjNCSiRQCRiSDNAAQDOAACSCSQCRCRAADNQAADOiRCSQiSCRjOAAQjNAAiRiRg");
	this.shape_60.setTransform(1.7,22.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCA38D").s().p("AgBDMIgHgBQgHgBgGgEQgMgHgGgOIgEgPIgClFIABgEQADgPAMgKQAMgLAOAAIAJAAIAEAAQAHACAHAEQAMAHAGAPIADAOIAAFGIAAADQgDAQgLAKQgLAJgPABgAgai8QgJAJgDAOIAAADIgDE9IABAHQAAAIACAGQAGAOAMAGQAFADAHACIAEAAIAJAAQAMAAALgKQAKgKADgOIAAgDIABhvQgBg3ACg6IgBhkIgDgNQgGgNgLgHQgHgEgGAAIgDgBIgIAAQgOABgKAJg");
	this.shape_61.setTransform(5.9,101.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#835246").s().p("AgND0Ig4gCIgngEIgNgCIhFnfQAHAKA2AGQA2AHBLAAQBLAAA4gHQA2gHAGgJIhBHdIgBABQgTADgTABQgnAEgnABIgWAAg");
	this.shape_62.setTransform(5.8,100.9,0.94,1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A56253").s().p("AiAATQg3gHgGgKIgBgCIAAAAQAEgKA3gHQA4gHBLAAQBNAAA4AHQA3AHADAKIAAAAIAAACQgGAJg2AHQg4AHhLAAQhKAAg2gGg");
	this.shape_63.setTransform(5.7,76.5,0.943,1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#835246").s().p("AgNDtIg4gCIgngEIgNgCIhFnRQAGAJA3AHQA2AGBLAAQBLAAA3gHQA3gHAGgIIhBHQIgBAAIgmAFIhOAEIgWAAg");
	this.shape_64.setTransform(5.8,101.6,0.89,1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#835246").s().p("AgNDlIg4gCIgngEIgOgCIhEnBQAGAIA2AHQA2AFBMABQBKgBA3gFQA3gHAHgIIhCG/IgBABIgmAEIhOAFIgVAAg");
	this.shape_65.setTransform(5.8,102.4,0.935,1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#835246").s().p("AgODaIg4gBIgngEIgOgCIhDmsQAFAHA3AHQA2AFBLAAQBKAAA4gGQA3gHAHgGIhCGqIgCABIglAEIhOAEIgWAAg");
	this.shape_66.setTransform(5.9,103.5,0.919,1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#835246").s().p("AgODQIg4gBIgngEIgOgCIhDmYQAFAGA2AHQA3AFBLAAQBKgBA4gFQA2gGAIgGIhCGXIgCAAIglAEIhOAEIgWAAg");
	this.shape_67.setTransform(5.9,104.5,0.914,1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#835246").s().p("AgKDGIg4gCIgngDIgOgDIhHmDQAFAGA2AGQA3AFBMAAQBJAAA4gFQA2gGAIgGIg+GDIgCAAIglAEIhOAEIgWAAg");
	this.shape_68.setTransform(5.5,105.5,0.877,1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#835246").s().p("AgOC7Ig4gCIgngDIgOgCIhDluQAEAGA3AFQA3AFBLABQBKgBA4gFQA2gGAIgFIhCFtIgCABIglADIhOAEIgWAAg");
	this.shape_69.setTransform(6,106.6,0.902,1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#835246").s().p("AgOCwIg4gCIgngEIgOgBIhDlXQAEAFA3AFQA2AEBMABQBKgBA4gEQA2gGAIgEIhDFWIgBABIgmACIhOAFIgVAAg");
	this.shape_70.setTransform(6,107.8,0.893,1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#835246").s().p("AgWCmIg4gCIgngDIgOgBIg7lFQAEAFA3AEQA1AFBMABQBKgBA4gFQA3gFAIgEIhLFFIgBAAIgmACIhNAEIgWAAg");
	this.shape_71.setTransform(6.7,108.7,0.868,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#835246").s().p("AgfCcIg4gBIgmgEIgPgBIgykxQADAEA3AFQA2AEBMAAQBJAAA5gEQA2gFAJgEIhTExIgBAAIgmACIhNAEIgXAAg");
	this.shape_72.setTransform(7.5,109.7,0.885,1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#835246").s().p("AgfCNIg4gBIgngEIgOAAIgykUQADAEA3AEQA2ADBMABQBJgBA5gDQA2gFAJgDIhTEUIgCAAIglABIhNAEIgXAAg");
	this.shape_73.setTransform(7.6,111.2,0.878,1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#835246").s().p("AgaB+QgegCgaABIgogEIgOgBIgoj1QACACA0AFQAyACBHACIB5gCIA5gGIhBDyIgCAAQgUAAgRACQgpABgjADIgXAAg");
	this.shape_74.setTransform(7.1,112.7,0.878,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#835246").s().p("AgRBxQgegDgaABQgdgEgLABIgOgBIgkjbQACABAwAFIBxADIBvgCIA1gFIgsDZIgBAAQgVgBgQADQgpAAgkAEIgWAAg");
	this.shape_75.setTransform(6.2,114,0.878,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#835246").s().p("AgRBkQgegDgaACQgdgEgLAAIgOgBIgkjBIAyAFIBxADIBvgBIA1gFIgsC/IgBAAQgVAAgQACQgpAAgkAEIgWAAg");
	this.shape_76.setTransform(6.1,115.3,0.878,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#835246").s().p("AgRBZQgegDgaACQgdgEgLABIgOgBIgkisIAyAEIBxADIBvgBIA1gFIgsCrIgBAAQgVgBgQADQgpgBgkAEIgWAAg");
	this.shape_77.setTransform(6.1,116.4,0.878,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{y:77.2,x:2.9,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.943,y:76.5,x:5.7,scaleY:1}},{t:this.shape_35,p:{y:78.2,x:2.9,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_62},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:77.8,x:5.7,scaleY:1}},{t:this.shape_35,p:{y:79.6,x:2.9,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_64},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:79.3,x:5.8,scaleY:1}},{t:this.shape_35,p:{y:81,x:3.1,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_65},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:81.3,x:5.8,scaleY:1}},{t:this.shape_35,p:{y:83,x:3.1,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_66},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:83.3,x:5.8,scaleY:1}},{t:this.shape_35,p:{y:85,x:4.1,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_67},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:85.4,x:5.6,scaleY:1}},{t:this.shape_35,p:{y:87.1,x:3.9,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_68},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:87.4,x:5.6,scaleY:1}},{t:this.shape_35,p:{y:89.1,x:3.9,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_69},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:89.7,x:5.6,scaleY:1}},{t:this.shape_35,p:{y:91.4,x:5.3,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_70},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:1,y:91.2,x:6.5,scaleY:1}},{t:this.shape_35,p:{y:92.9,x:6.2,scaleX:1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_71},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.893,y:93.3,x:7.6,scaleY:1}},{t:this.shape_35,p:{y:95,x:6.8,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_72},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.893,y:96.2,x:7.6,scaleY:1}},{t:this.shape_35,p:{y:97.9,x:6.8,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_73},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.893,y:99,x:7.6,scaleY:1}},{t:this.shape_35,p:{y:100.7,x:6.8,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_74},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.734,y:102.4,x:7.1,scaleY:0.72}},{t:this.shape_35,p:{y:103.2,x:6.4,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_75},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.777,x:0.5}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.734,y:104.8,x:7.1,scaleY:0.72}},{t:this.shape_35,p:{y:105.6,x:6.4,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_76},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_63,p:{scaleX:0.734,y:106.8,x:6.6,scaleY:0.72}},{t:this.shape_35,p:{y:107.6,x:5.9,scaleX:0.893}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_77},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_61},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.914,x:0.6}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-32,135.8,232.9);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.start_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1 copy
	this.text = new cjs.Text("התחלת משחק", "bold 16px 'Segoe UI'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(0,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape.setTransform(-4.4,-3.5,1.652,1.652);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_1.setTransform(-0.6,45.3,1.652,1.652);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B5F37").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAKAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJAAAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgIgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQAAgDgBgFQABgJAHgGQAHgGAJAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_2.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#977F65").s().p("AHOE9QgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgBgIQgCAJgGAGQgHAGgJAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgGAGQgIAGgIAAQgJAAgIgGQgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQACAJAHAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGABgJQAAAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAHgGAJAAQAJAAAIAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgIAHgJAAQgKAAgGgGg");
	this.shape_3.setTransform(0.8,0.9,1.652,1.652);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B37042").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_4.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(151,127,101,0.6)").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape_5.setTransform(-4.4,-3.5,1.652,1.652);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(151,127,101,0.6)").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_6.setTransform(-0.6,45.3,1.652,1.652);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(151,127,101,0.6)").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAKAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJAAAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgIgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQAAgDgBgFQABgJAHgGQAHgGAJAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_7.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(151,127,101,0.6)").s().p("AHOE9QgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgBgIQgCAJgGAGQgHAGgJAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgGAGQgIAGgIAAQgJAAgIgGQgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQACAJAHAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGABgJQAAAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAHgGAJAAQAJAAAIAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgIAHgJAAQgKAAgGgGg");
	this.shape_8.setTransform(0.8,0.9,1.652,1.652);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(151,127,101,0.6)").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_9.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.498)").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_10.setTransform(-0.8,-0.8,1.652,1.652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_10}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-54.1,167.3,108.3);


(lib.final_cookie_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2,"hit":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1 copy
	this.outputTXT = new cjs.Text("לשחק שוב", "bold 16px 'Segoe UI'", "#333333");
	this.outputTXT.name = "outputTXT";
	this.outputTXT.textAlign = "center";
	this.outputTXT.lineHeight = 25;
	this.outputTXT.lineWidth = 130;
	this.outputTXT.parent = this;
	this.outputTXT.setTransform(-2.5,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.outputTXT).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17A6FF").s().p("AgOAXQgGgBgCgEQgEgEABgFQABgFAEgDIAagUQAFgDAEAAQAFABAEAEQADAEgBAFQAAAFgEADIgbAUQgEADgEAAIgBAAg");
	this.shape.setTransform(-32.1,30.4,1.366,1.37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F02943").s().p("AALAXQgFAAgDgEIgWgWQgDgDAAgFQAAgEAEgEQADgDAFAAQAEAAAEAEIAVAWQAEAEAAAEQAAAFgEADQgDADgEAAIgBAAg");
	this.shape_1.setTransform(-54.9,-17.2,1.366,1.37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCE00").s().p("AADAbQgEgCgCgFIgOgeQgCgFACgEQACgFAEgCQAFgCAEACQAEACACAEIAOAfQACAEgCAFQgCAEgEACIgFACIgEgBg");
	this.shape_2.setTransform(14.4,-26.7,1.366,1.37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A5FF").s().p("AADAbQgDgCgDgFIgOgeQgCgEACgFQABgEAFgDQAEgCAFACQADACACAEIAPAeQACAFgCAEQgBAFgFACIgFACIgEgBg");
	this.shape_3.setTransform(-45.2,-29.2,1.366,1.37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4A497").s().p("AgRARQgEgCgCgEQgCgEACgEQABgDAEgCIAbgNQAEgCAFABQAEACACAEQACAEgCAEQgBADgEACIgbANIgFABIgEAAg");
	this.shape_4.setTransform(51.5,17.8,1.366,1.37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4A497").s().p("AgTARQgDgEABgEQAAgEADgDIAXgUQADgDAEABQAFAAADADQADAEgBAEQAAAEgDADIgXAUQgDADgEAAQgEAAgEgEg");
	this.shape_5.setTransform(21.5,-32.8,1.366,1.37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1609A").s().p("AAEAWQgEgBgBgEIgOgYQgCgDABgEQACgEADgCQAEgCAEABQADABACAEIAOAYQACADgBAEQgCAEgDACIgFACIgDgBg");
	this.shape_6.setTransform(-55.4,24.9,1.366,1.37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE628A").s().p("AgRAXQgEgDAAgFQgBgFADgEIAUgaQADgEAFAAQAFgBADADQAJAHgGAKIgUAZQgDAEgFABIgCAAQgDAAgEgCg");
	this.shape_7.setTransform(24.8,28.4,1.366,1.37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA0049").s().p("AAEAZQgEgCgBgEIgPgbQgCgEABgFQABgEAEgCQAEgCAFABQADACACAEIAPAbQADAEgCAEQgBAFgEACQgDABgDAAIgDAAg");
	this.shape_8.setTransform(-22.6,-29.7,1.366,1.37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA0049").s().p("AAEAZQgEgCgBgEIgPgbQgCgEABgFQABgEAEgCQAEgCAFABQADACACAEIAPAbQADAEgCAEQgBAFgEACQgDABgDAAIgDAAg");
	this.shape_9.setTransform(-24,27.8,1.366,1.37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD600").s().p("AgCASIgMgaQgCgDABgEQACgEAEgCQADgCAEABQADACACAEIAMAZQACAEgBAEQgCAEgEACIgFABQgFAAgCgGg");
	this.shape_10.setTransform(34,25.9,1.366,1.37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD600").s().p("AADAXQgDgCgCgDIgMgaQgCgDABgEQACgEAEgCQADgCAEABQADACACAEIAMAZQACAEgBAEQgCAEgEACIgEAAIgDAAg");
	this.shape_11.setTransform(-57.5,6.7,1.366,1.37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB228D").s().p("AgGAaQgDgDAAgFIgDgiQgBgEAEgEQADgEAFAAQAEgBAEAEQAEADAAAFIACAhQAAAFgDAEQgDAEgFAAIgBAAQgDAAgEgDg");
	this.shape_12.setTransform(-13.3,-28.3,1.366,1.37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#299BCD").s().p("AgNATQgFgCgCgDQgDgDABgEQABgFAEgCIAYgQQADgCAEABQAEAAADADQACAEAAAEQgBAEgEACIgYARQgCACgDAAIgCAAg");
	this.shape_13.setTransform(52.6,-21.2,1.366,1.37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#299BCD").s().p("AgNASQgFAAgCgEQgDgEABgEQABgEAEgCIAYgQQADgCAEAAQAEABADAEQACADAAAFQgBAEgEABIgYARQgCACgDAAIgCgBg");
	this.shape_14.setTransform(-56.6,-3.4,1.366,1.37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#299BCD").s().p("AgNATQgFgCgCgDQgDgDABgFQABgEAEgCIAYgQQADgDAEABQAEABADAEQACADAAAFQgBAEgEABIgYARQgCACgDAAIgCAAg");
	this.shape_15.setTransform(43.1,24,1.366,1.37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#96B89C").s().p("AgOAYQgEgDgBgEQgBgGACgDIASgbQACgFAFAAQAEgBAEACQAEADABAEQABAFgCAEIgSAbQgCAEgEABIgDAAQgDAAgDgBg");
	this.shape_16.setTransform(-14.4,28.3,1.366,1.37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#96B89C").s().p("AgOAYQgEgDgBgEQgBgGACgDIASgbQACgFAFAAQAEgBAEACQAEADABAEQABAFgCAEIgSAbQgCAEgEABIgDAAQgDAAgDgBg");
	this.shape_17.setTransform(48.4,28.3,1.366,1.37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCD507").s().p("AgTAOQgEgCgBgEQgBgFACgDQACgEAEgBIAdgJQAEgBAEACQAEACABAEQACAFgCADQgDAEgEABIgdAJIgDAAIgFgBg");
	this.shape_18.setTransform(39.9,-31.1,1.366,1.37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#734747").s().p("AgZAMQgEgDgBgFQAAgEADgEQADgEAFgBIAjgFQAFAAAFADQAEADAAAFQABAEgDAFQgDAEgGAAIgjAFIgCAAQgEAAgDgDg");
	this.shape_19.setTransform(4.2,-31.4,1.366,1.37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1374F").s().p("AgBAcQgEgDgBgFIgJghQgBgFACgEQACgFAGAAQAEgCAEADQAEACABAFIAJAhQACAFgDAEQgDAEgFACIgDAAQgDAAgCgBg");
	this.shape_20.setTransform(29.5,-31.7,1.366,1.37);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1374F").s().p("AgBAbQgEgCgCgFIgIghQgBgFACgEQACgEAFgCQAGgBACACQAFADABAFIAJAhQACAFgDAEQgDAFgFAAIgDABQgDAAgCgCg");
	this.shape_21.setTransform(52.7,9.4,1.366,1.37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#85B636").s().p("AgRAGQgCgCAAgEQAAgHAIAAIAXgBQADAAADADQADACAAADQgBAHgHABIgYABQgEAAgCgDg");
	this.shape_22.setTransform(-57.3,-12.3,1.366,1.37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQgBgCADgDQADgCADAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_23.setTransform(-47.7,27.4,1.366,1.37);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQAAgHAIAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_24.setTransform(50.6,-13.7,1.366,1.37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQAAgHAIAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_25.setTransform(13.7,28.8,1.366,1.37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B52273").s().p("AADARIgSgTQgHgHAHgHQAHgHAGAHIATATQADADAAAEQAAAEgDADQgEADgDAAQgEAAgDgDg");
	this.shape_26.setTransform(52.1,2,1.366,1.37);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1AC0DC").s().p("AgOAUQgFgBgDgEQgCgDABgFQAAgFAFgCIAZgRQAEgDAEABQAFABACAEQADADgBAFQgBAFgDABIgaASQgDACgDAAIgCAAg");
	this.shape_27.setTransform(-32.8,-30.3,1.366,1.37);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F17B16").s().p("AgRATQgGgHAHgIIAUgUQAHgIAHAGQAGAHgHAHIgUAVQgEAEgEAAQgDAAgDgCg");
	this.shape_28.setTransform(-5.6,29,1.366,1.37);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F17B16").s().p("AgRATQgGgHAHgIIAUgUQAHgIAHAHQAGAHgHAGIgUAWQgEADgEAAQgDAAgDgCg");
	this.shape_29.setTransform(50.4,-31.3,1.366,1.37);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#449CA5").s().p("AgMAVQgDgCgBgEQgBgEACgEIAPgYQABgDAEgCQAEgBAEADQAEACABAEQABAEgDADIgPAZQgBAEgEAAIgDABIgFgCg");
	this.shape_30.setTransform(-57.1,15.3,1.366,1.37);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgDQgDgEABgEQABgFADgDIAZgRQAEgDAFABQAEABADADQACAFAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_31.setTransform(4.3,29,1.366,1.37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgEQgDgDABgFQABgEADgCIAZgSQAEgCAFAAQAEABADAEQACADAAAFQgBAEgEACIgZASQgDACgEAAIgBAAg");
	this.shape_32.setTransform(-53,-27.1,1.366,1.37);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgDQgDgEABgEQABgFADgDIAZgRQAEgDAFABQAEABADADQACAFAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_33.setTransform(52.1,-6.6,1.366,1.37);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgEQgDgDABgFQABgEADgDIAZgRQAEgCAFAAQAEABADAEQACAEAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_34.setTransform(-44.8,31.8,1.366,1.37);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E91F43").s().p("AgVAKQgEgCgBgFQAAgDADgDQACgEAFgBIAegEQAFAAADADQAEACAAAFQABADgDAEQgDAEgEAAIgeAEIgBAAQgEAAgDgDg");
	this.shape_35.setTransform(34.1,32.1,1.366,1.37);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#31BCA8").s().p("AAGAcQgFgBgCgFIgSgeQgCgFABgFQABgFAFgDQAEgCAFABQAFACACAEIASAeQACAFgBAFQgBAFgFACQgDACgDAAIgDAAg");
	this.shape_36.setTransform(-6.2,-29.3,1.366,1.37);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7CC4D").s().p("AgHAVQgIgEADgIIAJgYQABgDACgCQAEgBADABQAEABACADQABAEgBADIgJAYQgCAHgFAAIgEgBg");
	this.shape_37.setTransform(-39,-30.6,1.366,1.37);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape_38.setTransform(-1.9,-0.6,1.366,1.37);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_39.setTransform(1.2,39.9,1.366,1.37);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9B5F37").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_40.setTransform(1,1.7,1.366,1.37);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B37042").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_41.setTransform(1,1.7,1.366,1.37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.498)").s().p("AL6ILQgLgLgCgOQgCAPgLAKQgMAKgPAAQgPAAgKgKQgMgKgCgPQgCAPgLAKQgLAKgPAAQgPAAgMgKQgLgLgCgOQgBAPgMAKQgMAKgOAAQgPAAgLgKQgMgKgBgPQgDAPgKAKQgMAKgPAAQgPAAgLgKQgMgLgCgOQgBAPgMAKQgLAKgPAAQgPAAgLgKQgLgKgCgPQgCAPgLAKQgMAKgPAAQgOAAgMgKQgMgLgBgOQgCAPgLAKQgMAKgPAAQgPAAgLgKQgLgKgCgPQgCAPgLAKQgLAKgPAAQgPAAgMgKQgLgLgCgOQgCAPgLAKQgMAKgPAAQgOAAgLgKQgMgKgBgPQgDAPgLAKQgLAKgPAAQgOAAgLgKQgMgLgCgOQgBAPgMAKQgLAKgPAAQgPAAgLgKQgMgKgBgPQgDAPgKAKQgMAKgPAAQgPAAgLgKQgMgLgBgOQgCAPgMAKQgLAKgPAAQgPAAgLgKQgLgKgCgPQgCAPgLAKQgMAKgPAAQgOAAgMgKQgMgLgBgOQgCAPgLAKQgMAKgPAAQgPAAgKgKQgMgKgCgPQgCAPgLAKQgLAKgPAAQgPAAgMgKQgLgLgCgOQgCAPgLAKQgMAKgPAAQgOAAgLgKQgMgKgBgPQgDAPgLAKQgLAKgPAAQgPAAgLgKQgMgKgCgPQgBAPgMAKQgLAKgPAAQgPAAgLgKQgLgKgCgPQgDAPgKAKQgMAKgPAAQgQAAgMgMQgLgMAAgQQAAgRALgLQAMgMAQAAIAAgDQgQAAgMgLQgLgMAAgQQAAgQALgMQAMgMAQAAIAAgDQgQAAgMgLQgLgMAAgQQAAgQALgMQAMgMAQAAIAAgCQgQAAgMgLQgLgMAAgQQAAgRALgNQAMgLAQAAIAAgCQgQAAgMgLQgLgMAAgRQAAgRALgMQAMgLAQAAIAAgCQgQAAgMgMQgLgMAAgQQAAgQALgMQAMgLAQAAIAAgDQgQAAgMgMQgLgLAAgRQAAgPALgNQAMgLAQAAIAAgCQgQAAgMgMQgLgMAAgRQAAgQALgLQAMgMAQAAIAAgCQgQABgMgMQgLgMAAgRQAAgRALgLQAMgMAQABIAAgDQgQAAgMgMQgLgLAAgRQAAgRALgLQAMgMAQAAIAAgCQgQAAgMgLQgLgMAAgQQAAgRALgMQAMgMAQAAIAAgCQgQABgMgMQgLgNAAgQQAAgQALgMQAMgMAQAAIAAgCQgQAAgMgMQgLgMAAgQIAAgDQAAgQALgMQAMgLAQAAQAPAAAMAKQAKAKADAOQACgOALgKQALgKAPAAQAPAAALAKQAMAKABAOQACgOAMgKQAKgKAQAAQAPAAALAKQALAKADAOQABgOAMgKQALgKAOAAQAQAAALAKQALAKACAOQACgOALgKQAMgKAPAAQAPAAALAKQALAKACAOQACgOAMgKQAKgKAPAAQAQAAALAKQALAKACAOQABgOAMgKQAMgKAOAAQAPAAAMAKQALAKACAOQACgOALgKQALgKAPAAQAQAAAKAKQAMAKACAOQABgOAMgKQALgKAPAAQAPAAAMAKQAKAKADAOQABgOAMgKQALgKAPAAQAPAAALAKQAMAKABAOQACgOAMgKQALgKAOAAQAPAAALAKQALAKADAOQABgOAMgKQALgKAOAAQAQAAALAKQALAKACAOQACgOALgKQAMgKAPAAQAPAAALAKQALAKACAOQACgOALgKQALgKAPAAQAQAAALAKQALAKACAOQABgOAMgKQAMgKAOAAQAPAAAMAKQALAKACAOQACgOALgKQALgKAPAAQAQAAAKAKQAMAKABAOQACgOAMgKQALgKAPAAQAPAAAMAKQAKAKADAOQABgOAMgKQALgKAPAAQAPAAALAKQAMAKABAOQACgOALgKQAMgKAPAAQAPAAALAKQALAKACAOQACgOAMgKQAKgKAPAAQAQAAALAKQALAKACAOQACgOALgKQAMgKAPAAQAQAAAMALQALAMAAAQIAAADQAAAQgKAKQgKAMgPACIAAADQAPABAKAMQAKALAAAPQAAAPgKAMQgKALgPABIAAAEQAPABAKAMQAKALAAAQQAAAOgKAMQgKAMgPABIAAACQAPACAKAMQAKALAAAPQAAAQgKALQgKALgPACIAAADQAPABAKALQAKAMAAAPQAAAQgKALQgKALgPABIAAAEQAPABAKAMQAKALAAAOQAAARgKAKQgKALgPACIAAAEQAPABAKAMQAKALAAAOQAAAPgKALQgKAMgPACIAAADQAPABAKALQAKAMAAAPQAAAPgKALQgKAMgPACIAAACQAPACAKALQAKAMAAAPQAAAPgKALQgKAMgPACIAAACQAPACAKAMQAKAKAAARQAAAOgKALQgKAMgPABIAAADQAPACAKAMQAKAKAAAQQAAAPgKAMQgKALgPABIAAADQAPACAKAMQAKAKAAAQQAAAPgKAMQgKALgPABIAAADQAPABAKAMQAKAMAAAPQAAAQgLAMQgMAMgQAAQgPAAgMgKg");
	this.shape_42.setTransform(1.1,1.7,0.827,0.827);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#17A6FF").s().p("AgOAXQgGgBgCgEQgEgEABgFQABgFAEgDIAagUQAFgDAEAAQAFABAEAEQADAEgBAFQAAAFgEADIgbAUQgEADgEAAIgBAAg");
	this.shape_43.setTransform(-32.1,30.4,1.366,1.37);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F02943").s().p("AALAXQgFAAgDgEIgWgWQgDgDAAgFQAAgEAEgEQADgDAFAAQAEAAAEAEIAVAWQAEAEAAAEQAAAFgEADQgDADgEAAIgBAAg");
	this.shape_44.setTransform(-54.9,-17.2,1.366,1.37);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCE00").s().p("AADAbQgEgCgCgFIgOgeQgCgFACgEQACgFAEgCQAFgCAEACQAEACACAEIAOAfQACAEgCAFQgCAEgEACIgFACIgEgBg");
	this.shape_45.setTransform(14.4,-26.7,1.366,1.37);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14A5FF").s().p("AADAbQgDgCgDgFIgOgeQgCgEACgFQABgEAFgDQAEgCAFACQADACACAEIAPAeQACAFgCAEQgBAFgFACIgFACIgEgBg");
	this.shape_46.setTransform(-45.2,-29.2,1.366,1.37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B4A497").s().p("AgRARQgEgCgCgEQgCgEACgEQABgDAEgCIAbgNQAEgCAFABQAEACACAEQACAEgCAEQgBADgEACIgbANIgFABIgEAAg");
	this.shape_47.setTransform(51.5,17.8,1.366,1.37);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B4A497").s().p("AgTARQgDgEABgEQAAgEADgDIAXgUQADgDAEABQAFAAADADQADAEgBAEQAAAEgDADIgXAUQgDADgEAAQgEAAgEgEg");
	this.shape_48.setTransform(21.5,-32.8,1.366,1.37);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F1609A").s().p("AAEAWQgEgBgBgEIgOgYQgCgDABgEQACgEADgCQAEgCAEABQADABACAEIAOAYQACADgBAEQgCAEgDACIgFACIgDgBg");
	this.shape_49.setTransform(-55.4,24.9,1.366,1.37);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EE628A").s().p("AgRAXQgEgDAAgFQgBgFADgEIAUgaQADgEAFAAQAFgBADADQAJAHgGAKIgUAZQgDAEgFABIgCAAQgDAAgEgCg");
	this.shape_50.setTransform(24.8,28.4,1.366,1.37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA0049").s().p("AAEAZQgEgCgBgEIgPgbQgCgEABgFQABgEAEgCQAEgCAFABQADACACAEIAPAbQADAEgCAEQgBAFgEACQgDABgDAAIgDAAg");
	this.shape_51.setTransform(-22.6,-29.7,1.366,1.37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA0049").s().p("AAEAZQgEgCgBgEIgPgbQgCgEABgFQABgEAEgCQAEgCAFABQADACACAEIAPAbQADAEgCAEQgBAFgEACQgDABgDAAIgDAAg");
	this.shape_52.setTransform(-24,27.8,1.366,1.37);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD600").s().p("AgCASIgMgaQgCgDABgEQACgEAEgCQADgCAEABQADACACAEIAMAZQACAEgBAEQgCAEgEACIgFABQgFAAgCgGg");
	this.shape_53.setTransform(34,25.9,1.366,1.37);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFD600").s().p("AADAXQgDgCgCgDIgMgaQgCgDABgEQACgEAEgCQADgCAEABQADACACAEIAMAZQACAEgBAEQgCAEgEACIgEAAIgDAAg");
	this.shape_54.setTransform(-57.5,6.7,1.366,1.37);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB228D").s().p("AgGAaQgDgDAAgFIgDgiQgBgEAEgEQADgEAFAAQAEgBAEAEQAEADAAAFIACAhQAAAFgDAEQgDAEgFAAIgBAAQgDAAgEgDg");
	this.shape_55.setTransform(-13.3,-28.3,1.366,1.37);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#299BCD").s().p("AgNATQgFgCgCgDQgDgDABgEQABgFAEgCIAYgQQADgCAEABQAEAAADADQACAEAAAEQgBAEgEACIgYARQgCACgDAAIgCAAg");
	this.shape_56.setTransform(52.6,-21.2,1.366,1.37);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#299BCD").s().p("AgNASQgFAAgCgEQgDgEABgEQABgEAEgCIAYgQQADgCAEAAQAEABADAEQACADAAAFQgBAEgEABIgYARQgCACgDAAIgCgBg");
	this.shape_57.setTransform(-56.6,-3.4,1.366,1.37);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#299BCD").s().p("AgNATQgFgCgCgDQgDgDABgFQABgEAEgCIAYgQQADgDAEABQAEABADAEQACADAAAFQgBAEgEABIgYARQgCACgDAAIgCAAg");
	this.shape_58.setTransform(43.1,24,1.366,1.37);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#96B89C").s().p("AgOAYQgEgDgBgEQgBgGACgDIASgbQACgFAFAAQAEgBAEACQAEADABAEQABAFgCAEIgSAbQgCAEgEABIgDAAQgDAAgDgBg");
	this.shape_59.setTransform(-14.4,28.3,1.366,1.37);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#96B89C").s().p("AgOAYQgEgDgBgEQgBgGACgDIASgbQACgFAFAAQAEgBAEACQAEADABAEQABAFgCAEIgSAbQgCAEgEABIgDAAQgDAAgDgBg");
	this.shape_60.setTransform(48.4,28.3,1.366,1.37);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FCD507").s().p("AgTAOQgEgCgBgEQgBgFACgDQACgEAEgBIAdgJQAEgBAEACQAEACABAEQACAFgCADQgDAEgEABIgdAJIgDAAIgFgBg");
	this.shape_61.setTransform(39.9,-31.1,1.366,1.37);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#734747").s().p("AgZAMQgEgDgBgFQAAgEADgEQADgEAFgBIAjgFQAFAAAFADQAEADAAAFQABAEgDAFQgDAEgGAAIgjAFIgCAAQgEAAgDgDg");
	this.shape_62.setTransform(4.2,-31.4,1.366,1.37);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F1374F").s().p("AgBAcQgEgDgBgFIgJghQgBgFACgEQACgFAGAAQAEgCAEADQAEACABAFIAJAhQACAFgDAEQgDAEgFACIgDAAQgDAAgCgBg");
	this.shape_63.setTransform(29.5,-31.7,1.366,1.37);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F1374F").s().p("AgBAbQgEgCgCgFIgIghQgBgFACgEQACgEAFgCQAGgBACACQAFADABAFIAJAhQACAFgDAEQgDAFgFAAIgDABQgDAAgCgCg");
	this.shape_64.setTransform(52.7,9.4,1.366,1.37);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#85B636").s().p("AgRAGQgCgCAAgEQAAgHAIAAIAXgBQADAAADADQADACAAADQgBAHgHABIgYABQgEAAgCgDg");
	this.shape_65.setTransform(-57.3,-12.3,1.366,1.37);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQgBgCADgDQADgCADAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_66.setTransform(-47.7,27.4,1.366,1.37);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQAAgHAIAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_67.setTransform(50.6,-13.7,1.366,1.37);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#85B636").s().p("AgRAGQgDgCABgEQAAgHAIAAIAXgBQADAAADADQACACAAADQAAAHgIABIgXABQgDAAgDgDg");
	this.shape_68.setTransform(13.7,28.8,1.366,1.37);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B52273").s().p("AADARIgSgTQgHgHAHgHQAHgHAGAHIATATQADADAAAEQAAAEgDADQgEADgDAAQgEAAgDgDg");
	this.shape_69.setTransform(52.1,2,1.366,1.37);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1AC0DC").s().p("AgOAUQgFgBgDgEQgCgDABgFQAAgFAFgCIAZgRQAEgDAEABQAFABACAEQADADgBAFQgBAFgDABIgaASQgDACgDAAIgCAAg");
	this.shape_70.setTransform(-32.8,-30.3,1.366,1.37);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F17B16").s().p("AgRATQgGgHAHgIIAUgUQAHgIAHAGQAGAHgHAHIgUAVQgEAEgEAAQgDAAgDgCg");
	this.shape_71.setTransform(-5.6,29,1.366,1.37);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F17B16").s().p("AgRATQgGgHAHgIIAUgUQAHgIAHAHQAGAHgHAGIgUAWQgEADgEAAQgDAAgDgCg");
	this.shape_72.setTransform(50.4,-31.3,1.366,1.37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#449CA5").s().p("AgMAVQgDgCgBgEQgBgEACgEIAPgYQABgDAEgCQAEgBAEADQAEACABAEQABAEgDADIgPAZQgBAEgEAAIgDABIgFgCg");
	this.shape_73.setTransform(-57.1,15.3,1.366,1.37);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgDQgDgEABgEQABgFADgDIAZgRQAEgDAFABQAEABADADQACAFAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_74.setTransform(4.3,29,1.366,1.37);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgEQgDgDABgFQABgEADgCIAZgSQAEgCAFAAQAEABADAEQACADAAAFQgBAEgEACIgZASQgDACgEAAIgBAAg");
	this.shape_75.setTransform(-53,-27.1,1.366,1.37);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgDQgDgEABgEQABgFADgDIAZgRQAEgDAFABQAEABADADQACAFAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_76.setTransform(52.1,-6.6,1.366,1.37);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FDC70F").s().p("AgOAUQgFgBgCgEQgDgDABgFQABgEADgDIAZgRQAEgCAFAAQAEABADAEQACAEAAADQgBAFgEACIgZASQgDACgEAAIgBAAg");
	this.shape_77.setTransform(-44.8,31.8,1.366,1.37);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E91F43").s().p("AgVAKQgEgCgBgFQAAgDADgDQACgEAFgBIAegEQAFAAADADQAEACAAAFQABADgDAEQgDAEgEAAIgeAEIgBAAQgEAAgDgDg");
	this.shape_78.setTransform(34.1,32.1,1.366,1.37);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#31BCA8").s().p("AAGAcQgFgBgCgFIgSgeQgCgFABgFQABgFAFgDQAEgCAFABQAFACACAEIASAeQACAFgBAFQgBAFgFACQgDACgDAAIgDAAg");
	this.shape_79.setTransform(-6.2,-29.3,1.366,1.37);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E7CC4D").s().p("AgHAVQgIgEADgIIAJgYQABgDACgCQAEgBADABQAEABACADQABAEgBADIgJAYQgCAHgFAAIgEgBg");
	this.shape_80.setTransform(-39,-30.6,1.366,1.37);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AmKDnQgeghgFg9QgEgnAHhrQAFhhAHgiQAJgyAagbQAXgYAegFQAVgEAxAFQCTANBxgQQA9gIBpgCQB8gDArgDQApgEAYATQAbAVACA3QABAQgIByQgHBoAHBeQADAvgPAUQgTAZggAIQgbAHg2gCIiAgGQhhgEhbACQi+ANg2ABIgGAAQhLAAghgjg");
	this.shape_81.setTransform(-1.9,-0.6,1.366,1.37);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_82.setTransform(1.2,39.9,1.366,1.37);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9B5F37").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_83.setTransform(1,1.7,1.366,1.37);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B37042").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_84.setTransform(1,1.7,1.366,1.37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_40,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_39,p:{scaleY:1.37,x:1.2,y:39.9}},{t:this.shape_38,p:{scaleY:1.37,x:-1.9,y:-0.6}},{t:this.shape_37,p:{scaleY:1.37,x:-39,y:-30.6}},{t:this.shape_36,p:{scaleY:1.37,x:-6.2,y:-29.3}},{t:this.shape_35,p:{scaleY:1.37,x:34.1,y:32.1}},{t:this.shape_34,p:{scaleY:1.37,x:-44.8,y:31.8}},{t:this.shape_33,p:{scaleY:1.37,x:52.1,y:-6.6}},{t:this.shape_32,p:{scaleY:1.37,x:-53,y:-27.1}},{t:this.shape_31,p:{scaleY:1.37,x:4.3,y:29}},{t:this.shape_30,p:{scaleY:1.37,x:-57.1,y:15.3}},{t:this.shape_29,p:{scaleY:1.37,x:50.4,y:-31.3}},{t:this.shape_28,p:{scaleY:1.37,x:-5.6,y:29}},{t:this.shape_27,p:{scaleY:1.37,x:-32.8,y:-30.3}},{t:this.shape_26,p:{scaleY:1.37,x:52.1,y:2}},{t:this.shape_25,p:{scaleY:1.37,x:13.7,y:28.8}},{t:this.shape_24,p:{scaleY:1.37,x:50.6,y:-13.7}},{t:this.shape_23,p:{scaleY:1.37,x:-47.7,y:27.4}},{t:this.shape_22,p:{scaleY:1.37,x:-57.3,y:-12.3}},{t:this.shape_21,p:{scaleY:1.37,x:52.7,y:9.4}},{t:this.shape_20,p:{scaleY:1.37,x:29.5,y:-31.7}},{t:this.shape_19,p:{scaleY:1.37,x:4.2,y:-31.4}},{t:this.shape_18,p:{scaleY:1.37,x:39.9,y:-31.1}},{t:this.shape_17,p:{scaleY:1.37,x:48.4,y:28.3}},{t:this.shape_16,p:{scaleY:1.37,x:-14.4,y:28.3}},{t:this.shape_15,p:{scaleY:1.37,x:43.1,y:24}},{t:this.shape_14,p:{scaleY:1.37,x:-56.6,y:-3.4}},{t:this.shape_13,p:{scaleY:1.37,x:52.6,y:-21.2}},{t:this.shape_12,p:{scaleY:1.37,x:-13.3,y:-28.3}},{t:this.shape_11,p:{scaleY:1.37,x:-57.5,y:6.7}},{t:this.shape_10,p:{scaleY:1.37,x:34,y:25.9}},{t:this.shape_9,p:{scaleY:1.37,x:-24,y:27.8}},{t:this.shape_8,p:{scaleY:1.37,x:-22.6,y:-29.7}},{t:this.shape_7,p:{scaleY:1.37,x:24.8,y:28.4}},{t:this.shape_6,p:{scaleY:1.37,x:-55.4,y:24.9}},{t:this.shape_5,p:{scaleY:1.37,x:21.5,y:-32.8}},{t:this.shape_4,p:{scaleY:1.37,x:51.5,y:17.8}},{t:this.shape_3,p:{scaleY:1.37,x:-45.2,y:-29.2}},{t:this.shape_2,p:{scaleY:1.37,x:14.4,y:-26.7}},{t:this.shape_1,p:{scaleY:1.37,x:-54.9,y:-17.2}},{t:this.shape,p:{scaleY:1.37,x:-32.1,y:30.4}}]}).to({state:[{t:this.shape_41,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_40,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_39,p:{scaleY:1.37,x:1.2,y:39.9}},{t:this.shape_38,p:{scaleY:1.37,x:-1.9,y:-0.6}},{t:this.shape_37,p:{scaleY:1.37,x:-39,y:-30.6}},{t:this.shape_36,p:{scaleY:1.37,x:-6.2,y:-29.3}},{t:this.shape_35,p:{scaleY:1.37,x:34.1,y:32.1}},{t:this.shape_34,p:{scaleY:1.37,x:-44.8,y:31.8}},{t:this.shape_33,p:{scaleY:1.37,x:52.1,y:-6.6}},{t:this.shape_32,p:{scaleY:1.37,x:-53,y:-27.1}},{t:this.shape_31,p:{scaleY:1.37,x:4.3,y:29}},{t:this.shape_30,p:{scaleY:1.37,x:-57.1,y:15.3}},{t:this.shape_29,p:{scaleY:1.37,x:50.4,y:-31.3}},{t:this.shape_28,p:{scaleY:1.37,x:-5.6,y:29}},{t:this.shape_27,p:{scaleY:1.37,x:-32.8,y:-30.3}},{t:this.shape_26,p:{scaleY:1.37,x:52.1,y:2}},{t:this.shape_25,p:{scaleY:1.37,x:13.7,y:28.8}},{t:this.shape_24,p:{scaleY:1.37,x:50.6,y:-13.7}},{t:this.shape_23,p:{scaleY:1.37,x:-47.7,y:27.4}},{t:this.shape_22,p:{scaleY:1.37,x:-57.3,y:-12.3}},{t:this.shape_21,p:{scaleY:1.37,x:52.7,y:9.4}},{t:this.shape_20,p:{scaleY:1.37,x:29.5,y:-31.7}},{t:this.shape_19,p:{scaleY:1.37,x:4.2,y:-31.4}},{t:this.shape_18,p:{scaleY:1.37,x:39.9,y:-31.1}},{t:this.shape_17,p:{scaleY:1.37,x:48.4,y:28.3}},{t:this.shape_16,p:{scaleY:1.37,x:-14.4,y:28.3}},{t:this.shape_15,p:{scaleY:1.37,x:43.1,y:24}},{t:this.shape_14,p:{scaleY:1.37,x:-56.6,y:-3.4}},{t:this.shape_13,p:{scaleY:1.37,x:52.6,y:-21.2}},{t:this.shape_12,p:{scaleY:1.37,x:-13.3,y:-28.3}},{t:this.shape_11,p:{scaleY:1.37,x:-57.5,y:6.7}},{t:this.shape_10,p:{scaleY:1.37,x:34,y:25.9}},{t:this.shape_9,p:{scaleY:1.37,x:-24,y:27.8}},{t:this.shape_8,p:{scaleY:1.37,x:-22.6,y:-29.7}},{t:this.shape_7,p:{scaleY:1.37,x:24.8,y:28.4}},{t:this.shape_6,p:{scaleY:1.37,x:-55.4,y:24.9}},{t:this.shape_5,p:{scaleY:1.37,x:21.5,y:-32.8}},{t:this.shape_4,p:{scaleY:1.37,x:51.5,y:17.8}},{t:this.shape_3,p:{scaleY:1.37,x:-45.2,y:-29.2}},{t:this.shape_2,p:{scaleY:1.37,x:14.4,y:-26.7}},{t:this.shape_1,p:{scaleY:1.37,x:-54.9,y:-17.2}},{t:this.shape,p:{scaleY:1.37,x:-32.1,y:30.4}}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_41,p:{scaleY:1.371,x:1.3,y:2.1}},{t:this.shape_40,p:{scaleY:1.371,x:1.3,y:2.1}},{t:this.shape_39,p:{scaleY:1.371,x:1.5,y:40.4}},{t:this.shape_38,p:{scaleY:1.371,x:-1.7,y:-0.2}},{t:this.shape_37,p:{scaleY:1.371,x:-38.8,y:-30.1}},{t:this.shape_36,p:{scaleY:1.371,x:-5.9,y:-28.9}},{t:this.shape_35,p:{scaleY:1.371,x:34.3,y:32.6}},{t:this.shape_34,p:{scaleY:1.371,x:-44.6,y:32.2}},{t:this.shape_33,p:{scaleY:1.371,x:52.4,y:-6.2}},{t:this.shape_32,p:{scaleY:1.371,x:-52.8,y:-26.7}},{t:this.shape_31,p:{scaleY:1.371,x:4.6,y:29.5}},{t:this.shape_30,p:{scaleY:1.371,x:-56.9,y:15.8}},{t:this.shape_29,p:{scaleY:1.371,x:50.6,y:-30.9}},{t:this.shape_28,p:{scaleY:1.371,x:-5.4,y:29.4}},{t:this.shape_27,p:{scaleY:1.371,x:-32.6,y:-29.9}},{t:this.shape_26,p:{scaleY:1.371,x:52.3,y:2.5}},{t:this.shape_25,p:{scaleY:1.371,x:14,y:29.2}},{t:this.shape_24,p:{scaleY:1.371,x:50.8,y:-13.3}},{t:this.shape_23,p:{scaleY:1.371,x:-47.5,y:27.9}},{t:this.shape_22,p:{scaleY:1.371,x:-57.1,y:-11.9}},{t:this.shape_21,p:{scaleY:1.371,x:53,y:9.9}},{t:this.shape_20,p:{scaleY:1.371,x:29.7,y:-31.3}},{t:this.shape_19,p:{scaleY:1.371,x:4.4,y:-31}},{t:this.shape_18,p:{scaleY:1.371,x:40.2,y:-30.6}},{t:this.shape_17,p:{scaleY:1.371,x:48.6,y:28.7}},{t:this.shape_16,p:{scaleY:1.371,x:-14.2,y:28.7}},{t:this.shape_15,p:{scaleY:1.371,x:43.3,y:24.5}},{t:this.shape_14,p:{scaleY:1.371,x:-56.4,y:-2.9}},{t:this.shape_13,p:{scaleY:1.371,x:52.8,y:-20.8}},{t:this.shape_12,p:{scaleY:1.371,x:-13.1,y:-27.9}},{t:this.shape_11,p:{scaleY:1.371,x:-57.3,y:7.1}},{t:this.shape_10,p:{scaleY:1.371,x:34.2,y:26.3}},{t:this.shape_9,p:{scaleY:1.371,x:-23.8,y:28.3}},{t:this.shape_8,p:{scaleY:1.371,x:-22.4,y:-29.3}},{t:this.shape_7,p:{scaleY:1.371,x:25,y:28.8}},{t:this.shape_6,p:{scaleY:1.371,x:-55.2,y:25.3}},{t:this.shape_5,p:{scaleY:1.371,x:21.7,y:-32.4}},{t:this.shape_4,p:{scaleY:1.371,x:51.8,y:18.3}},{t:this.shape_3,p:{scaleY:1.371,x:-45,y:-28.8}},{t:this.shape_2,p:{scaleY:1.371,x:14.6,y:-26.2}},{t:this.shape_1,p:{scaleY:1.371,x:-54.6,y:-16.8}},{t:this.shape,p:{scaleY:1.371,x:-31.9,y:30.9}},{t:this.shape_42}]},1).to({state:[{t:this.shape_41,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_40,p:{scaleY:1.37,x:1,y:1.7}},{t:this.shape_39,p:{scaleY:1.37,x:1.2,y:39.9}},{t:this.shape_38,p:{scaleY:1.37,x:-1.9,y:-0.6}},{t:this.shape_37,p:{scaleY:1.37,x:-39,y:-30.6}},{t:this.shape_36,p:{scaleY:1.37,x:-6.2,y:-29.3}},{t:this.shape_35,p:{scaleY:1.37,x:34.1,y:32.1}},{t:this.shape_34,p:{scaleY:1.37,x:-44.8,y:31.8}},{t:this.shape_33,p:{scaleY:1.37,x:52.1,y:-6.6}},{t:this.shape_32,p:{scaleY:1.37,x:-53,y:-27.1}},{t:this.shape_31,p:{scaleY:1.37,x:4.3,y:29}},{t:this.shape_30,p:{scaleY:1.37,x:-57.1,y:15.3}},{t:this.shape_29,p:{scaleY:1.37,x:50.4,y:-31.3}},{t:this.shape_28,p:{scaleY:1.37,x:-5.6,y:29}},{t:this.shape_27,p:{scaleY:1.37,x:-32.8,y:-30.3}},{t:this.shape_26,p:{scaleY:1.37,x:52.1,y:2}},{t:this.shape_25,p:{scaleY:1.37,x:13.7,y:28.8}},{t:this.shape_24,p:{scaleY:1.37,x:50.6,y:-13.7}},{t:this.shape_23,p:{scaleY:1.37,x:-47.7,y:27.4}},{t:this.shape_22,p:{scaleY:1.37,x:-57.3,y:-12.3}},{t:this.shape_21,p:{scaleY:1.37,x:52.7,y:9.4}},{t:this.shape_20,p:{scaleY:1.37,x:29.5,y:-31.7}},{t:this.shape_19,p:{scaleY:1.37,x:4.2,y:-31.4}},{t:this.shape_18,p:{scaleY:1.37,x:39.9,y:-31.1}},{t:this.shape_17,p:{scaleY:1.37,x:48.4,y:28.3}},{t:this.shape_16,p:{scaleY:1.37,x:-14.4,y:28.3}},{t:this.shape_15,p:{scaleY:1.37,x:43.1,y:24}},{t:this.shape_14,p:{scaleY:1.37,x:-56.6,y:-3.4}},{t:this.shape_13,p:{scaleY:1.37,x:52.6,y:-21.2}},{t:this.shape_12,p:{scaleY:1.37,x:-13.3,y:-28.3}},{t:this.shape_11,p:{scaleY:1.37,x:-57.5,y:6.7}},{t:this.shape_10,p:{scaleY:1.37,x:34,y:25.9}},{t:this.shape_9,p:{scaleY:1.37,x:-24,y:27.8}},{t:this.shape_8,p:{scaleY:1.37,x:-22.6,y:-29.7}},{t:this.shape_7,p:{scaleY:1.37,x:24.8,y:28.4}},{t:this.shape_6,p:{scaleY:1.37,x:-55.4,y:24.9}},{t:this.shape_5,p:{scaleY:1.37,x:21.5,y:-32.8}},{t:this.shape_4,p:{scaleY:1.37,x:51.5,y:17.8}},{t:this.shape_3,p:{scaleY:1.37,x:-45.2,y:-29.2}},{t:this.shape_2,p:{scaleY:1.37,x:14.4,y:-26.7}},{t:this.shape_1,p:{scaleY:1.37,x:-54.9,y:-17.2}},{t:this.shape,p:{scaleY:1.37,x:-32.1,y:30.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-42.5,139.2,88.7);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"empty_cookie":0,"candy_cookie":1,"empty_cookie":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqLF9Qgxg2gKhlQgFhAAKixQAJihALg4QAQhTArgsQAlgnAygJQAjgGBRAHQDyAWC7gaQBmgOCsgDQDNgEBHgGQBEgHAoAhQAtAiADBaQABAbgMC8QgMCtALCbQAGBOgaAgQgfAqg0ANQgtALhagCIjTgLQiggHiXAFQk5AUhaACIgKAAQh8AAg2g6g");
	this.shape.setTransform(-4.4,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C4621").s().p("AAXAeQgHAPgQAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAPgSAAQgRAAgHgQQgGAQgSAAQgRAAgGgQQgHAQgRAAQgSAAgGgQQgHAQgRAAQgSAAgGgRQgGARgSAAQgSAAgGgRQgGARgSAAQgSAAgFgSQgGASgTgBQgSAAgFgSQgFASgUAAQgTAAgEgTQgDAOgOAEQgPAEgKgLIgEgGQAEAHAIAEQAOAGALgJQAGgFACgGIABgHIAAADQADAOANAEQANAFAKgJQAGgEACgHIABgIIAAAFQACAIAGAGQAHAGAJAAQAIAAAHgGQAHgGABgIIABgIIABAKQACAHAFAFQAHAFAIAAQAJAAAHgFQAFgFACgIIABgKIACAJQABAIAGAGQAHAFAIAAQAJAAAGgFQAHgGABgIIABgLIACAMQACAIAFAFQAKAIANgEQAMgFACgNIACgMIABANQACAIAGAEQAGAGAJAAQAIAAAGgGQAGgFACgIIACgNIABANQACAIAGAFQAGAGAJAAQAIAAAGgGQAGgFABgIIACgNIACAMQABAJAHAFQAGAGAIAAQAIAAAHgGQAGgFABgJIACgNIACAOQACAIAFAFQAKAJANgFQAMgFACgNIACgNIACAOQABAIAGAFQAGAGAJAAQAHAAAGgGQAGgFABgIIADgPIACAOQABAJAGAFQAGAGAIAAQAJAAAGgGQAGgFABgJIACgOIACAPQACAIAGAFQAKAJAMgFQAMgFACgNIACgNIACAOQACAIAFAFQAHAGAIAAQAIAAAHgGQAFgFACgIIACgOIACANQACAOAMAEQAMAFAKgJQAGgFACgIIACgNIABAMQACAOANAEQAMAFAKgJQAGgFACgIIABgNIACAMQABAJAHAFQAGAGAIAAQAJAAAGgGQAHgFABgIIABgMIACANQACAHAFAFQAKAJANgEQAMgFACgNIACgLIABAMQACAIAGAFQAKAIANgEQAMgFACgNIACgJIABAKQACAIAFAFQAKAJANgFQANgFACgNIABgIIABAIQACAOAOAEQAOAFAKgKQAKgLgFgNQgDgJgIgDIgIgDIAAgDIAFgBQAGgCAEgFQAGgGAAgJQAAgJgFgHQAJALgFANQgFAOgOACIAAABQAHABAFADQAFAEACAJQACAIgBAEQgEASgTABQgTABgGgSQgFASgSAAQgSAAgGgRQgGAQgSABQgSAAgGgRQgGARgSAAQgRAAgHgQQgGAQgSAAQgRAAgHgQQgGAQgRAAQgSAAgGgQQgHAQgRAAQgRABgHgQQgHAPgRAAQgRAAgHgPQgHAPgRAAQgRAAgHgPQgGAQgRAAQgRAAgHgQg");
	this.shape_1.setTransform(-0.6,45.3,1.652,1.652);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B5F37").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAKAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJAAAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgIgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQABgJgHgHQgGgHgJgBIAAgCQAJgBAGgHQAHgGgBgKQABgJgHgHQgGgHgJgBIAAgBQAJgBAGgHQAHgHgBgJQABgKgHgGQgGgHgJgBIAAgCQAJgBAGgHQAHgHgBgJQAAgDgBgFQABgJAHgGQAHgGAJAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_2.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#977F65").s().p("AHOE9QgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgBgIQgCAJgGAGQgHAGgJAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgIAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgGAGQgIAGgIAAQgJAAgIgGQgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIABgKQAAgIAEgGQAGgHAIgCIAHABQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQACAJAHAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGABgJQAAAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAJAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAGAGQAHAGAJAAQAJAAAIgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAHgHQAIgHgBgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAHgGAJAAQAJAAAIAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgIAHgJAAQgKAAgGgGg");
	this.shape_3.setTransform(0.8,0.9,1.652,1.652);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B37042").s().p("AHOE9QgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgHAGgKAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgGAGgKAAQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgJAIgIQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgCQgJAAgHgHQgIgHABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgIABgKQgBgKAIgHQAHgHAJAAIAAgBQgJAAgHgHQgIgHABgKIAAgCQgBgKAIgHQAHgHAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGACAJQAAgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAJAAAHAHQAIAHgBAKIAAACQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAJQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQAAAKgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAGQgGAHgJABIAAACQAJABAGAHQAFAHAAAJQAAAJgFAHQgGAHgJABIAAACQAJABAGAHQAFAGAAAKQAAAJgFAHQgGAHgJABIAAABQAJABAGAHQAFAHAAAJQABAKgIAIQgHAHgJAAQgKAAgGgGg");
	this.shape_4.setTransform(-0.8,-0.8,1.652,1.652);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#17A6FF").s().p("AAGASQgEAAgCgDIgNgTQgCgCAAgEQABgDACgCQAHgFAFAGIAOATQAEAHgGAFQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_5.setTransform(-30.5,35.2,1.667,1.672);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F02943").s().p("AACAQIgRgSQgCgDAAgEQAAgDACgDQADgCAEgBQAEABACACIARASQAGAHgGAGQgDADgDgBQgEAAgDgCg");
	this.shape_6.setTransform(-59.7,-36.5,1.667,1.672);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCE00").s().p("AgBAMIgJgSQgDgGAHgDQACgCADABQACACABACIAJATQADAHgHACIgDABQgEAAgBgFg");
	this.shape_7.setTransform(2.3,-40.1,1.667,1.672);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A5FF").s().p("AgBAKIgHgPQgCgFAFgDQAFgCACAFIAHAPQADAFgGADIgDABQgDAAgBgEg");
	this.shape_8.setTransform(-54.8,-41,1.667,1.672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4A497").s().p("AgMAGQgCgFAFgCIAOgHQAFgCADAFQADAFgGABIgOAIIgDABQgDAAgCgEg");
	this.shape_9.setTransform(61.9,28.1,1.667,1.672);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B4A497").s().p("AAAAQQgCgBgBgDIgGgTQgBgHAGgCQAGgCACAHIAGATQABAHgHACIgBABIgDgCg");
	this.shape_10.setTransform(-18.1,34.3,1.667,1.672);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B4A497").s().p("AgMAMQgFgFAFgGIAPgMQAFgFAFAFQAFAFgGAGIgOAMQgDACgCAAQgDAAgCgCg");
	this.shape_11.setTransform(11.9,-40.3,1.667,1.672);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1609A").s().p("AAEATQgEgBAAgDIgMgVQgFgHAIgEQADgCADABQADABABADIAMAUQACADgBAEQgBADgDACIgEABIgCAAg");
	this.shape_12.setTransform(-70.6,23.9,1.667,1.672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE628A").s().p("AgJAMQgFgEAEgFIAKgNQAEgFAFADQAGAFgFAEIgKAOQgCADgDAAIgEgCg");
	this.shape_13.setTransform(-2.5,33.9,1.667,1.672);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA0049").s().p("AAAAMIgJgQQgEgGAGgDQAGgEACAGIAJARQAEAFgGAEIgEABQgEAAAAgEg");
	this.shape_14.setTransform(-32.3,-39,1.667,1.672);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA0049").s().p("AgLAJQgEgFAFgEIANgJQAFgEAEAFQAEAFgGADIgNAKQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgDg");
	this.shape_15.setTransform(-72.2,12,1.667,1.672);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA0049").s().p("AgMAMQgFgGAGgEIAOgNQAFgFAFAFQAEAGgEAFIgPAMQgCACgDAAQgDAAgCgCg");
	this.shape_16.setTransform(-37.6,36.9,1.667,1.672);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD600").s().p("AACAPQgCgBgBgCIgIgRQgEgGAHgDQAGgDACAGIAIARQADAGgGADIgDABIgCgBg");
	this.shape_17.setTransform(59.6,-33.9,1.667,1.672);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFD600").s().p("AACAPQgCgBgBgCIgIgRQgEgGAHgDQAGgDACAGIAIARQADAGgGADIgDABIgCgBg");
	this.shape_18.setTransform(-71.6,-5.6,1.667,1.672);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB228D").s().p("AgGALIgBgUQAAgDACgCQACgCADAAQACgBACACQACACAAADIACAUQAAAHgHAAIgBAAQgFAAgBgGg");
	this.shape_19.setTransform(-45.3,36.4,1.667,1.672);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB228D").s().p("AgGALIgBgUQAAgDACgCQACgCADAAQACgBACACQACACAAADIACAUQAAAHgHAAIgBAAQgFAAgBgGg");
	this.shape_20.setTransform(-5.3,-40.5,1.667,1.672);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#299BCD").s().p("AgLAPQgDgBgCgCQgFgIAHgEIAUgNQACgCAEABQADAAACADQADADgBAEQgBADgDABIgTAOIgEABIgDAAg");
	this.shape_21.setTransform(62.8,-26.6,1.667,1.672);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#299BCD").s().p("AgNAJQgEgHAFgCIAPgLQAHgEADAHQAFAGgGADIgPALQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgDAAgEgFg");
	this.shape_22.setTransform(-70.6,-12.4,1.667,1.672);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#299BCD").s().p("AgNATQgEgBgDgEQgFgIAIgGIAYgQQADgCAEABQAFAAACAEQACAEgBAEQAAAEgEABIgYARQgDACgDAAIgBAAg");
	this.shape_23.setTransform(57.7,33.9,0.978,0.981);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#96B89C").s().p("AALAJIgWgCQgIgBABgHQAAgDADgCQACgDADABIAXACQADAAACADQACACAAADQgBAHgGAAIgCAAg");
	this.shape_24.setTransform(31.8,-39.7,1.667,1.672);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#96B89C").s().p("AgKASQgDgCgBgEQgBgDACgDIANgUQAEgHAHAFQADACABADQABAEgCACIgNAUQgBADgEABIgCAAIgEgBg");
	this.shape_25.setTransform(28.9,35.8,1.429,1.433);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#96B89C").s().p("AgKASQgDgCgBgEQgBgEACgDIANgTQACgDADAAQADgBADACQADACABADQABADgCADIgNAUQgBACgEACIgCAAIgEgBg");
	this.shape_26.setTransform(49.2,-41.6,1.667,1.672);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCD507").s().p("AgOAKQgDgBgBgDQgCgHAIgCIAVgHQAHgCADAHQABAHgHACIgVAHIgCAAIgEgBg");
	this.shape_27.setTransform(-14.4,-40,1.667,1.672);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#734747").s().p("AgOACQAAgGAGAAIAQgCQAGAAABAFQAAAFgGABIgQACIgBAAQgFAAgBgFg");
	this.shape_28.setTransform(-54.3,37.2,1.667,1.672);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#734747").s().p("AgNACQAAgGAFAAIAQgCQAFAAABAFQAAAFgFABIgPACIgCAAQgFAAAAgFg");
	this.shape_29.setTransform(43.2,33.8,1.667,1.672);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1374F").s().p("AAAATQgDgCgBgEIgGgVQgBgEACgDQABgDAEAAQAHgCACAHIAGAWQACAJgIABIgDABIgCgBg");
	this.shape_30.setTransform(18.8,-40.3,1.667,1.672);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1374F").s().p("AgEAOIgGgWQgCgIAIgDQAHgCACAIIAGAWQACAIgIADIgDAAQgEAAgCgGg");
	this.shape_31.setTransform(12.1,34.7,1.667,1.672,-30);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1374F").s().p("AgBAVQgDgCgBgEIgHgZQAAgEACgDQACgDADgBQAEgBACACQADACABAEIAHAZQABADgCAEQgCADgEABIgCAAIgEgBg");
	this.shape_32.setTransform(62.2,10.1,1.667,1.672);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#85B636").s().p("AgQAAQgBgFAIgBIATAAQADgBACADQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAGgHABIgTAAIgBAAQgGAAAAgHg");
	this.shape_33.setTransform(-65.2,-32.9,1.667,1.672);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#85B636").s().p("AgNAJQgEgGAGgDIAPgLQADgBADAAQACABACACQAEAHgGACIgQALIgEACQgDAAgCgEg");
	this.shape_34.setTransform(26.6,-43.3,1.667,1.672);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#85B636").s().p("AgNAJQgDgGAFgDIAQgLQACgBACAAQAEABABACQAEAHgGACIgPALIgFACQgDAAgCgEg");
	this.shape_35.setTransform(49.8,35.7,1.667,1.672);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#85B636").s().p("AgNAJQgDgGAFgDIAQgLQACgBACAAQAEABABACQAEAHgGACIgPALIgFACQgDAAgCgEg");
	this.shape_36.setTransform(-66.7,30.3,1.667,1.672);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#85B636").s().p("AgUAAQAAgGAJgBIAXgBQAIAAABAIQAAAHgJABIgXABQgIAAgBgJg");
	this.shape_37.setTransform(61.4,-17.6,1.667,1.672,-120);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#85B636").s().p("AgHALIABgVQgBgIAIAAQADAAACACQACACAAAEIAAAVQgBAIgHAAQgHAAAAgIg");
	this.shape_38.setTransform(-70.7,4.8,1.667,1.672);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B52273").s().p("AACAMIgNgNQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQAFgFAFAFIANANQAEAGgEAEQgCADgDAAQgCAAgDgDg");
	this.shape_39.setTransform(61.7,0.2,1.667,1.672);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B52273").s().p("AACANIgNgPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQAFgFAFAFIANAOQAEAEgEAGQgDACgCAAQgDAAgCgCg");
	this.shape_40.setTransform(39.4,-41.6,1.667,1.672);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1AC0DC").s().p("AgLAJQgEgFAFgEIAOgJQAFgEAEAFQADAFgFADIgOAKIgEACQgDAAgBgDg");
	this.shape_41.setTransform(22.3,35.5,1.667,1.672);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1AC0DC").s().p("AgLAIQgEgFAFgDIAOgJQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQADAFgFADIgOAKIgEABQgDAAgBgDg");
	this.shape_42.setTransform(-41.1,-39.7,1.667,1.672);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F17B16").s().p("AgJAFQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgGAGAAIASACQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAGgHAAg");
	this.shape_43.setTransform(-9.1,36.6,1.667,1.672);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F17B16").s().p("AACALIgMgNQgEgFAEgEQAFgEAEAFIAMANQAEAFgEAEQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgDAAgDgDg");
	this.shape_44.setTransform(62.2,19.2,1.667,1.672);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F17B16").s().p("AADALIgNgNQgFgFAFgEQAEgEAFAFIAMANQAEAFgEAEQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgDAAgCgDg");
	this.shape_45.setTransform(-69.7,-19.5,1.667,1.672);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F17B16").s().p("AgLAMQgEgFAFgEIAMgNQAFgFAEAEQAFAFgFAEIgNANQgCADgCAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_46.setTransform(58.6,-41.2,1.667,1.672);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#449CA5").s().p("AAEAJIgNgIQgFgDADgEQADgGAFAEIANAIQAFADgDAEQgCADgCAAIgEgBg");
	this.shape_47.setTransform(-68.2,16.5,1.667,1.672);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDC70F").s().p("AgHAMIgBgWQgBgIAJgBQAHAAABAIIABAWQAAAIgIABQgHAAgBgIg");
	this.shape_48.setTransform(3.8,35.2,1.25,1.254);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDC70F").s().p("AgJAOQgDgBgCgCQgFgGAHgFIARgMQACgCAEABQADAAACADQACACgBAEQgBADgCABIgRANQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_49.setTransform(-66.9,-26.5,1.667,1.672);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FDC70F").s().p("AgNAKQgFgFAGgFIAQgLQAFgEAFAGQAEAGgFADIgQAMQgDACgCAAQgDAAgCgEg");
	this.shape_50.setTransform(61.7,-8.3,1.667,1.672);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDC70F").s().p("AgKAHQgDgEAFgDIALgIQAFgDADAEQACAFgEACIgLAJIgDABQgDAAgCgDg");
	this.shape_51.setTransform(-24.3,37,1.667,1.672);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E91F43").s().p("AgQAIQgDgCAAgEQgBgCADgDQACgCADgBIAWgDQAEAAADACQACACABADQABAHgIABIgXADIgBABQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_52.setTransform(37.5,37.6,1.667,1.672);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#31BCA8").s().p("AAAALIgJgPQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAGgDACAFIAIAOQACADgBACQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAIgDABQgDAAgBgDg");
	this.shape_53.setTransform(-23.8,-39.2,1.667,1.672);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E7CC4D").s().p("AACAKIgMgLQgEgEAEgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIAMALQAFAEgEAEQgCADgCAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_54.setTransform(-63.4,36,1.667,1.672);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E7CC4D").s().p("AgEAOQgGgDADgFIAFgPQACgGAFACQAGADgDAFIgFAPQgCAFgCAAIgDgBg");
	this.shape_55.setTransform(-48.4,-37.6,1.667,1.672);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AqRGCQgyg3gJhnQgGhAALi0QAJijALg4QAQhUArgtQAmgnAygJQAkgGBRAHQD1AWC9gaQBmgOCugEQDPgEBIgGQBEgGApAgQAtAjADBbQABAcgMC+QgMCvALCdQAGBPgaAgQggAqg0AOQgtALhbgCIjWgLQiggHiZAEQk9AVhaACIgKABQh9AAg3g7g");
	this.shape_56.setTransform(-3.7,-2.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9B5F37").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_57.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B37042").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_58.setTransform(-0.1,-0.1,1.667,1.672);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CC00").s().p("AlkLtQgsgXgegoImXohQgUghAAgkQgBglASggQATggAggTQAggTAlAAQAnAAAhAVIADABIACACIFzEjINrvQQAtgqA6AAQApAAAlAXQAlAWAUAnQATAlgCAoQgDApgZAjIuaTEQgeAogsAWQgsAWgzAAQgyAAgtgWg");
	this.shape_59.setTransform(91.6,-8.8,0.403,0.403);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EE3338").s().p("An4LTQhVAAg7g7IgDgDQg8g7gDhUQgChUA5g+IFUlxIlalrQg6g9ABhUQAAhUA7g8IADgDQA7g8BUgCQBUgCA+A5IFyFUIFqlaQA9g6BUABQBUAAA8A7IADADQA8A7ACBUQACBUg5A+IlTFxIFaFrQA5A9gBBUQAABUg7A8IgDADQg7A8hUACQhUACg+g5IlxlUIlqFaQg8A5hSAAIgDAAg");
	this.shape_60.setTransform(85.1,-3.1,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{scaleX:1.652,scaleY:1.652,x:-0.6,y:45.3}},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_1,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_1,p:{scaleX:1.667,scaleY:1.672,x:0.2,y:46.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_59}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{scaleX:1.652,scaleY:1.652,x:-0.6,y:45.3}},{t:this.shape},{t:this.shape_60}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-54.1,167.3,108.3);


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{regular_pause:0,down_pause:1,regular_play:2,down_play:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// flash0.ai copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C03D").s().p("AglCcQgQgQAAgWIAAjqQAAgXAQgPQAQgRAVABQAWgBAQARQAQAPAAAXIAADqQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape.setTransform(5.8,0.5,0.616,0.635);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C03D").s().p("AgWBjQgKgKAAgOIAAiVQAAgOAKgKQAJgKANAAQAOAAAJAKQAKAKAAAOIAACVQAAAOgKAKQgJAKgOAAQgNAAgJgKg");
	this.shape_1.setTransform(-6.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AGVkmIspAAQhHAAgzAzQgyAzAABHIAADzQAAAmAOAhQANAcAXAXQAzAzBHAAIMpAAQBHAAAzgzQAXgXANgcQAOghAAgmIAAjzQAAhHgygzQgzgzhHAAg");
	this.shape_2.setTransform(-1.1,0.8,0.502,0.635);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACDEDF").s().p("AmUEnQhHAAgzgzQgXgXgNgcQgOghAAgmIAAjzQAAhHAygzQAzgzBHAAIMpAAQBHAAAzAzQAyAzAABHIAADzQAAAmgOAhQgNAcgXAXQgzAzhHAAg");
	this.shape_3.setTransform(-1.1,0.8,0.502,0.635);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#977F65").s().p("AmUEnQhHAAgzgzQgXgXgNgcQgOghAAgmIAAjzQAAhHAygzQAzgzBHAAIMpAAQBHAAAzAzQAyAzAABHIAADzQAAAmgOAhQgNAcgXAXQgzAzhHAAg");
	this.shape_4.setTransform(2.7,4.7,0.502,0.635);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(151,127,101,0.659)").s().p("AmUEnQhHAAgzgzQgXgXgNgcQgOghAAgmIAAjzQAAhHAygzQAzgzBHAAIMpAAQBHAAAzAzQAyAzAABHIAADzQAAAmgOAhQgNAcgXAXQgzAzhHAAg");
	this.shape_5.setTransform(-1.1,0.8,0.502,0.635);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(151,127,101,0.008)").s().p("AmUEnQhHAAgzgzQgXgXgNgcQgOghAAgmIAAjzQAAhHAygzQAzgzBHAAIMpAAQBHAAAzAzQAyAzAABHIAADzQAAAmgOAhQgNAcgXAXQgzAzhHAAg");
	this.shape_6.setTransform(2.7,4.7,0.502,0.635);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0C03D").s().p("AkUFdQgxgdAAg4IAAoOQAAg5AxgdQAwgcAxAcIHIEJQAxAbAAA4QAAA4gxAdInIEIQgYAOgYAAQgZAAgYgOg");
	this.shape_7.setTransform(0,0.8,0.299,0.299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhYBiIAAjDICxAAIAADDg");
	this.shape_8.setTransform(0.9,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:2.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_4,p:{x:2.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-18.9,62.8,42.4);


(lib.continue_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{regular:0,"out":0,"over":1,"down":2,"hit":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// text
	this.outputTXT = new cjs.Text("לשאלה הבאה", "bold 16px 'Segoe UI'", "#333333");
	this.outputTXT.name = "outputTXT";
	this.outputTXT.textAlign = "center";
	this.outputTXT.lineHeight = 25;
	this.outputTXT.lineWidth = 108;
	this.outputTXT.parent = this;
	this.outputTXT.setTransform(0,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.outputTXT).wait(4));

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C03D").s("#FFFFFF").ss(5.9,1,1).rr(-63,-32.55,126,65.1,19.5);
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977F65").s("#FFFFFF").ss(0.1,1,1).rr(-63,-32.55,126,65.1,19.5);
	this.shape_1.setTransform(5.2,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(151,127,101,0.608)").s().p("AmyFFQjDAAAAjCIAAkFQAAjCDDAAINlAAQDDAAAADCIAAEFQAADCjDAAg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,-35.6,135.1,74.8);


(lib.check_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2,"hit":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// text
	this.text = new cjs.Text("בדיקה", "bold 16px 'Segoe UI'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 93;
	this.text.parent = this;
	this.text.setTransform(0.9,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5.9,1,1).p("AmylEINlAAQDDAAAADCIAAEFQAADCjDAAItlAAQjDAAAAjCIAAkFQAAjCDDAAg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5764E").s().p("AmyFFQjDAAAAjCIAAkFQAAjCDDAAINlAAQDDAAAADCIAAEFQAADCjDAAg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#977F65").s("#FFFFFF").ss(0.1,1,1).rr(-63,-32.55,126,65.1,19.5);
	this.shape_2.setTransform(5.2,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(151,127,101,0.608)").s().p("AmyFFQjDAAAAjCIAAkFQAAjCDDAAINlAAQDDAAAADCIAAEFQAADCjDAAg");
	this.shape_3.setTransform(0,-0.2);

	this.text_1 = new cjs.Text("בדיקה", "bold 14px 'Segoe UI'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 93;
	this.text_1.parent = this;
	this.text_1.setTransform(0.9,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:0}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.shape_3,p:{x:-0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,-35.6,131.8,70.9);


(lib.start_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:65});

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// TEXT
	this.text = new cjs.Text("אוי לא!\n\n\n", "bold 28px 'Segoe UI'", "#333333");
	this.text.textAlign = "right";
	this.text.lineHeight = 39;
	this.text.lineWidth = 672;
	this.text.parent = this;
	this.text.setTransform(339.4,-309.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACDEDF").s("#FEFEFE").ss(1,1,1).rr(-63.85,-16.25,127.7,32.5,8.7);
	this.shape.setTransform(0,73.5,1.799,1.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"אוי לא!\n\n\n"}}]}).to({state:[{t:this.text,p:{text:"אוי לא!\n\nמישהו אכל את הבית שלי...\n\n\n"}}]},21).to({state:[{t:this.text,p:{text:"אוי לא!\n\nמישהו אכל את הבית שלי...\n\nעזרו לי לבנות את ביתי מחדש באמצעות אפיית \nחלקי הבית.\n\n"}}]},21).to({state:[{t:this.text,p:{text:"אוי לא!\n\nמישהו אכל את הבית שלי...\n\nעזרו לי לבנות את ביתי מחדש באמצעות אפיית \nחלקי הבית.\n\nבחרו נושא כדי להתחיל:\n\n"}},{t:this.shape}]},23).wait(1));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F8F8").s().rr(-383.4,-305.35,766.8,610.7,41.1);
	this.shape_1.setTransform(0,0,1,1.207);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.4,-368.5,766.8,737.1);


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8F8").s().p("Ag3A3QgXgWAAghQAAggAXgXQAXgXAgAAQAhAAAWAXQAYAXAAAgQAAAhgYAWQgWAYghAAQggAAgXgYg");
	this.shape.setTransform(7.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(0,0,15.8,15.8), null);


(lib.house_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape.setTransform(-39,78.9,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_1.setTransform(0.2,13.8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_2.setTransform(39.4,78.9,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_3.setTransform(8.4,24.5,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_4.setTransform(-7.5,24.5,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_5.setTransform(0.2,21.6,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_6.setTransform(0.2,22.3,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_7.setTransform(0.2,20.3,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_8.setTransform(66.2,19.5,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_9.setTransform(66.1,18.5,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_10.setTransform(66.2,19.5,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_11.setTransform(66.1,19.5,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_12.setTransform(-65.2,19.5,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_13.setTransform(-65.3,18.5,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_14.setTransform(-65.2,19.5,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_15.setTransform(-65.3,19.5,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape_16.setTransform(-38.8,79.2,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_17.setTransform(0.4,14.1,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_18.setTransform(39.6,79.2,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_19.setTransform(8.6,24.8,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_20.setTransform(-7.3,24.8,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_21.setTransform(0.4,21.9,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_22.setTransform(0.4,22.6,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_23.setTransform(0.4,20.6,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_24.setTransform(66.4,19.8,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_25.setTransform(66.3,18.8,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_26.setTransform(66.4,19.8,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_27.setTransform(66.3,19.8,1,1,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_28.setTransform(-65,19.8,1,1,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_29.setTransform(-65.1,18.8,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_30.setTransform(-65,19.8,1,1,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_31.setTransform(-65.1,19.8,1,1,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ACDEDF").s().p("AiBAlICjiqIBgBkIimCng");
	this.shape_32.setTransform(-20.2,-109.2,1,1,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ACDEDF").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_33.setTransform(-42.4,-85.7,1,1,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ACDEDF").s().p("AiBAlICjipIBgBkIimClg");
	this.shape_34.setTransform(-62.7,-64.1,1,1,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ACDEDF").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_35.setTransform(-82.5,-42.9,1,1,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ACDEDF").s().p("AiBAlICjipIBgBkIimClg");
	this.shape_36.setTransform(-103,-21.5,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ACDEDF").s().p("AiBghIBghkICjCpIhdBhg");
	this.shape_37.setTransform(21.6,-109.2,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ACDEDF").s().p("AiBggIBghlICjCpIhdBig");
	this.shape_38.setTransform(43.8,-85.7,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBgg");
	this.shape_39.setTransform(65,-63.8,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBhg");
	this.shape_40.setTransform(84.8,-42.9,1,1,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBgg");
	this.shape_41.setTransform(105.3,-21.5,1,1,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0C03D").s().p("ASKLeQgxgCgigjIwux0IxBR0QgiAkgwABQgxABgjgiQgkghgBgxQgBgxAigkISXzOQAjgmAyABQAzAAAiAlISFTPQAhAkgBAxQgCAwgkAiQgiAgguAAIgEAAg");
	this.shape_42.setTransform(1.3,-69.7,1,1,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B5764E").s().p("AwJPtIAqwQIPfvJIPfPJIAqQQg");
	this.shape_43.setTransform(0.4,-19.4,1,1,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape_44.setTransform(71.8,-142.2,1,1,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_45.setTransform(71.8,-146.9,1,1,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B27042").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_46.setTransform(71.8,-127.6,1,1,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B27042").s().p("AiLFIIAAqPIEYAAIAAKPg");
	this.shape_47.setTransform(71.9,-85.7,1,1,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape_48.setTransform(71.6,-142.5,1,1,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_49.setTransform(71.6,-147.2,1,1,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B27042").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_50.setTransform(71.6,-127.9,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B27042").s().p("AiLFIIAAqPIEYAAIAAKPg");
	this.shape_51.setTransform(71.7,-86,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E0C03D").s().p("AirAjIAAgDIgCAAIAAhCIFZAAIAAADIACAAIAABCg");
	this.shape_52.setTransform(81.5,-145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_full, new cjs.Rectangle(-127,-161,256.8,242.1), null);


(lib.house_fullcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape.setTransform(-39,78.9,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_1.setTransform(0.2,13.8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_2.setTransform(39.4,78.9,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_3.setTransform(8.4,24.5,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_4.setTransform(-7.5,24.5,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_5.setTransform(0.2,21.6,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_6.setTransform(0.2,22.3,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_7.setTransform(0.2,20.3,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_8.setTransform(66.2,19.5,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_9.setTransform(66.1,18.5,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_10.setTransform(66.2,19.5,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_11.setTransform(66.1,19.5,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_12.setTransform(-65.2,19.5,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_13.setTransform(-65.3,18.5,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_14.setTransform(-65.2,19.5,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_15.setTransform(-65.3,19.5,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape_16.setTransform(-38.8,79.2,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_17.setTransform(0.4,14.1,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_18.setTransform(39.6,79.2,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_19.setTransform(8.6,24.8,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_20.setTransform(-7.3,24.8,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_21.setTransform(0.4,21.9,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_22.setTransform(0.4,22.6,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_23.setTransform(0.4,20.6,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_24.setTransform(66.4,19.8,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_25.setTransform(66.3,18.8,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_26.setTransform(66.4,19.8,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_27.setTransform(66.3,19.8,1,1,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_28.setTransform(-65,19.8,1,1,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_29.setTransform(-65.1,18.8,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_30.setTransform(-65,19.8,1,1,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_31.setTransform(-65.1,19.8,1,1,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ACDEDF").s().p("AiBAlICjiqIBgBkIimCng");
	this.shape_32.setTransform(-20.2,-109.2,1,1,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ACDEDF").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_33.setTransform(-42.4,-85.7,1,1,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ACDEDF").s().p("AiBAlICjipIBgBkIimClg");
	this.shape_34.setTransform(-62.7,-64.1,1,1,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ACDEDF").s().p("AiBAkICjipIBgBlIimCmg");
	this.shape_35.setTransform(-82.5,-42.9,1,1,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ACDEDF").s().p("AiBAlICjipIBgBkIimClg");
	this.shape_36.setTransform(-103,-21.5,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ACDEDF").s().p("AiBghIBghkICjCpIhdBhg");
	this.shape_37.setTransform(21.6,-109.2,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ACDEDF").s().p("AiBggIBghlICjCpIhdBig");
	this.shape_38.setTransform(43.8,-85.7,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBgg");
	this.shape_39.setTransform(65,-63.8,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBhg");
	this.shape_40.setTransform(84.8,-42.9,1,1,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ACDEDF").s().p("AiBggIBghkICjCpIhdBgg");
	this.shape_41.setTransform(105.3,-21.5,1,1,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0C03D").s().p("ASKLeQgxgCgigjIwux0IxBR0QgiAkgwABQgxABgjgiQgkghgBgxQgBgxAigkISXzOQAjgmAyABQAzAAAiAlISFTPQAhAkgBAxQgCAwgkAiQgiAgguAAIgEAAg");
	this.shape_42.setTransform(1.3,-69.7,1,1,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B5764E").s().p("AwJPtIAqwQIPfvJIPfPJIAqQQg");
	this.shape_43.setTransform(0.4,-19.4,1,1,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape_44.setTransform(71.8,-142.2,1,1,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_45.setTransform(71.8,-146.9,1,1,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B27042").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_46.setTransform(71.8,-127.6,1,1,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B27042").s().p("AiLFIIAAqPIEYAAIAAKPg");
	this.shape_47.setTransform(71.9,-85.7,1,1,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape_48.setTransform(71.6,-142.5,1,1,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_49.setTransform(71.6,-147.2,1,1,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B27042").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_50.setTransform(71.6,-127.9,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B27042").s().p("AiLFIIAAqPIEYAAIAAKPg");
	this.shape_51.setTransform(71.7,-86,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E0C03D").s().p("AirAjIAAgDIgCAAIAAhCIFZAAIAAADIACAAIAABCg");
	this.shape_52.setTransform(81.5,-145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_fullcopy, new cjs.Rectangle(-127,-161,256.8,242.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_background_final1();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2,1.003,1.006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-2,-2,1285,725), null);


(lib.house_eaten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape.setTransform(195.3,154.4,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_1.setTransform(195.2,153.4,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_2.setTransform(195.3,154.4,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_3.setTransform(195.2,154.4,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4EFE6").s().p("AjVAZIAAgxIGrAAIAAAxg");
	this.shape_4.setTransform(63.9,154.4,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4EFE6").s().p("AgYDXIAAmtIAxAAIAAGtg");
	this.shape_5.setTransform(63.8,153.4,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#634937").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape_6.setTransform(63.9,154.4,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4EFE6").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_7.setTransform(63.8,154.4,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAJgMAKAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgKAAgJgMg");
	this.shape_8.setTransform(137.7,159.7,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0C03D").s().p("AgTAdQgIgMAAgRQAAgQAIgMQAIgMALAAQALAAAJAMQAIAMAAAQQAAARgIAMQgJAMgLAAQgLAAgIgMg");
	this.shape_9.setTransform(121.8,159.7,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACDEDF").s().p("AgXJQIAAyfIAvAAIAASfg");
	this.shape_10.setTransform(129.5,156.8,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#634937").s().p("AkeJJIAgu0QADhdBKhAQBLhABmAAQAyAAAvARQAtAQAjAeQAjAfAVAnQAVAqACAuIAfO0g");
	this.shape_11.setTransform(129.5,157.5,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ACDEDF").s().p("AlSJdIAlu1QAFhtBYhLQBYhMB4AAQB5AABYBMQBZBLAEBtIAlO1g");
	this.shape_12.setTransform(129.5,155.5,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4EFE6").s().p("AgIATIgBgbQAAgEACgDQADgDAEAAQADAAADADQADADAAAEIACAbg");
	this.shape_13.setTransform(90.1,213.8,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4EFE6").s().p("AmLJQQgDgDABgEIACg5QAAgEADgCQADgDAEAAQAEAAADADQACADAAAEIgCA5QgBAJgJAAQgEAAgDgDgAF7JJIgDg4QABgEACgDQADgDAEAAQAEgBADADQADADAAAEIACA5QABAEgDADQgDADgEAAQgJAAgBgKgAmAHiQgEAAgCgDQgDgDAAgEIADg5QABgJAJAAQAKABAAAJIgDA5QgBAEgDADQgCACgDAAIgCAAgAF2HYIgDg4QAAgKAKgBQAEAAADADQADADAAAEIADA4QAAAEgCADQgEADgDABQgKAAgBgKgAl7FxQgEAAgDgDQgCgDAAgEIACg5QABgEADgDQADgDAEABQAEAAADADQADADgBAEIgDA4QAAAEgCADQgDADgDAAIgCAAgAF1FuQgEgDAAgEIgCg5QgBgEADgDQADgDAEAAQAEAAADADQADADAAAEIADA4QAAAEgDADQgCADgFAAIgBAAQgDAAgCgCgAl/D1IADg4QABgKAJAAQAEABADADQACADAAAEIgCA4QAAAEgEADQgDADgDAAQgKgBAAgKgAFwD9QgDgDAAgEIgDg5QgBgEAEgDQACgDAEAAQAEAAADADQADACABAEIACA5QAAAJgJABQgFAAgCgCgAlxCOQgDAAgEgDQgCgDAAgEIACg4QACgKAIAAQAFABACADQADADAAAEIgDA4QAAAEgCADQgDACgDAAIgCAAgAFnCFIgCg5QgBgEADgDQADgDAEAAQAKAAAAAJIADA5QAAAJgKABQgKAAAAgJgAlyAaQgDgDAAgEIADg4QAAgDACgDQAEgDAEAAQAEAAADADQADADgBAEIgCA4QAAAEgEADQgDACgDAAQgFAAgCgDgAFmAaQgDgDAAgEIgDg3QgBgEAEgDQADgDADAAQAEgBADADQADADAAAEIADA4QAAAEgDADQgDADgDAAIgCAAQgDAAgCgDgAluhWQgCgDAAgEIACg5QABgEADgDQACgCAFAAQAJABAAAJIgDA5QAAAEgDADQgCACgFAAQgDAAgEgDgAFghWQgDgDAAgEIgCg4QAAgEACgDQADgDAFgBQADAAAEADQADADAAAEIACA4QAAAKgKABQgDAAgEgDgAlhjEQgFAAgCgDQgDgDAAgEIADg5QAAgEACgDQAEgCADAAQAEAAAEADQACADAAAEIgCA5QgBAEgDACQgDADgDAAIAAAAgAFcjHQgDgDgBgEIgCg4QAAgKAJgBQAFAAACADQADADAAAEIADA4QABAEgEADQgDADgDAAIgBAAQgEAAgCgCgAldk1QgEgBgCgDQgEgDABgEQABgbAKgfQABgEADgBQAEgCAEABQAEABACAEQACADgBAEQgJAcgCAaQAAAEgDACQgDADgDAAIgBAAgAFXk4QgDgDAAgEQgCgagIgbQgCgEACgDQABgEAEgBQAKgDADAJQAJAeACAcQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAk/miQgEgCgBgDQAAgEABgEQAPgYAUgXQAIgHAHAHQAHAHgHAHQgSAUgPAXQgDAEgDABIgCAAQgDAAgCgCgAE5mhQgEgBgDgDQgNgXgTgVQgDgDAAgEQABgEACgCQADgDAEAAQAEAAADADQAVAXAOAYQADADgBAEQgBAEgEACIgFACIgCgBgAj2n3QgFgIAHgGQAWgQAbgOQAEgCAEABQAEABACAEQACADgCAEQgBAEgEACQgcAQgTANQgCADgDAAQgEAAgEgFgADpn1QgYgSgWgLQgEgCgCgEQgBgEACgEQACgDAEgBQAEgCAEACQAaAOAWARQAEADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgACHooQgagKgbgFQgEAAgCgEQgCgDAAgEQACgEADgDQAEgCADABQAYAFAgAKQAEACACADQABAEgBAEQgBAEgEABIgEABIgEAAgAiPopQgDgBgBgEQgCgEACgEQABgDAEgCQAcgJAdgGQAEAAADACQADACABAEQABAEgCADQgDAEgEAAQggAHgVAIIgDAAIgFgBgAgbo+QgJAAgBgJQgBgEADgDQADgDAEAAIAcgBIAcABQAFAAACADQADADAAAEQgBAJgKAAg");
	this.shape_14.setTransform(129.3,148.7,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4EFE6").s().p("AgKATIACgbQAAgEADgDQADgDADAAQAEAAADADQACADABAEIgCAbg");
	this.shape_15.setTransform(168.5,213.8,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FEFEFE").ss(1,1,1).p("AGdpWQAvARAmAnQBIBHAABlQAAAmgKAjQgRA3gtAtQgaAageARQACAGADAHQAGAQADASQAEAVAAAYQAABdhDBDQhCBDheAAQgQAAgQgCAC4CgQgTgEgSgHQAAABAAACQAABehDBCQhCBDhdAAQgQAAgQgCAh+F3QgBBchCBBQhDBDheAAQgQAAgPgCQgJgBgIgBQhAgOgxgxQglglgQgtQgBgBAAgB");
	this.shape_16.setTransform(76.9,64.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5764E").s().p("AwIONIAfsUIAbgdIAAABIBdhgIgCgCIAHgHQAQACAQAAQBeAABChDQBDhBABhcIAPACQAQACAPAAQBeAABDhDQBDhDAAhdIAAgDQASAHATAEIARACQAQACAQAAQBeAABChCQBDhDAAheQAAgYgEgWQgDgRgGgRIgGgMQAegRAagbQAtgsAQg3IBNBQIAAAAIBcBhIBGhGIAFAFIhGBGICJCOIgFAEIBdBhIAEgEIB7CBIgCACIBdBhIACgCIA5A8IgFAFIBdBhIAEgFIBmBpIgBAAIA9BBIAiNKg");
	this.shape_17.setTransform(125.9,125.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0C03D").s().p("Ay8LUQgSgIgPgOQgkgigCgwQgBgxAhgkICnixIABACIhSBWICmCnIgaAcIg1A4QgRASgVAJQgUAJgZABIgEAAQgZAAgWgKgASLLeQgwgBgigkIhLhOICnimIhghkIijCpIhlhqICiiiIhghkIifClIg5g8IClilIhghjIiiCnIh7iBICjiiIhfhkIigCmIiIiOIBGhFIBhhiINhOKQAiAkgBAxQgBAxgkAhQgiAhgvAAIgDAAgAuVH5IARACIgHAIgAAtmDQAKgjAAgmQAAhlhHhHQgmgngvgRIAHgIQAiglAzAAQAygBAjAmIDWDgIAAABIgFgGIikCqg");
	this.shape_18.setTransform(128.4,73.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ACDEDF").s().p("APLIEIg9hAIABgBICjipIBfBkIimCmIAAABgAvqIeIiminIBShWQAQAtAlAlQAxAxA/AOIAKAKIACABIhdBhgALID9IAFgFICfilIBfBkIiiCiIgEAFgAI1BdIACgCICiinIBfBjIikClIgCACgAFbiCIAFgEICfimIBgBkIijCjIgEAEgAB2l6IAAAAICkiqIAFAGIBaBeIhhBhIhGBGg");
	this.shape_19.setTransform(128.7,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_eaten, new cjs.Rectangle(0,0,256.8,216.3), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAbAAASATQATASAAAaQAAAagTAUQgSASgbAAQgaAAgSgSg");
	this.shape_2.setTransform(41.4,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#48332E").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAaAAATATQATASAAAaQAAAagTAUQgTASgaAAQgaAAgSgSg");
	this.shape_3.setTransform(6.4,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,47.8,12.8), null);


(lib.light_blue_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACDEDF").s().p("EhHIAzkQj+AAizi/Qizi/AAkNMAAAhSxQAAkOCzi/QCzi+D+AAMCORAAAQD+AACzC+QCzC/AAEOMAAABSxQAAENizC/QizC/j+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_blue_bg, new cjs.Rectangle(-516.5,-330,1033,660), null);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer_1
	this.instance = new lib.clock_caliperscopy();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,1,1,-48.9,0,0,34.4,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:34.3,regY:34.4,rotation:-60,x:0,y:0.1},0).wait(1).to({regY:34.5,rotation:-72,x:0.1,y:0.2},0).wait(1).to({regY:34.4,rotation:-83.2,x:0},0).wait(1).to({regY:34.5,rotation:-94.9,x:0.1},0).wait(1).to({rotation:-107.1,y:0.1},0).wait(1).to({regX:34.2,rotation:-119.6,x:0.2,y:0.2},0).wait(1).to({rotation:-131.5},0).wait(1).to({regX:34.1,rotation:-144,x:0.3},0).wait(1).to({rotation:-156,x:0.4,y:0.1},0).wait(1).to({regY:34.4,rotation:-168.4},0).wait(1).to({regX:34,rotation:-179.9,x:0.5,y:0},0).wait(1).to({regY:34.3,rotation:-192.2,y:0.1},0).wait(1).to({rotation:-203.2,y:0},0).wait(1).to({regY:34.2,rotation:-216.2},0).wait(1).to({regY:34.1,rotation:-228.4,y:-0.1},0).wait(1).to({rotation:-241.1,y:-0.2},0).wait(1).to({rotation:-253.3,y:-0.3},0).wait(1).to({regY:34,rotation:-265.8,y:-0.4},0).wait(1).to({rotation:-277.3,x:0.4,y:-0.5},0).wait(1).to({regY:33.9,rotation:-289.7},0).wait(1).to({regX:34.1,rotation:-302.2,x:0.3},0).wait(1).to({regX:34.2,rotation:-314.9},0).wait(1).to({regX:34.3,rotation:-326.9,x:0.2},0).wait(1).to({rotation:-339.1,x:0.1},0).wait(1).to({regX:34.4,regY:34,rotation:-350.5,x:0,y:-0.4},0).wait(1).to({rotation:-363},0).wait(1).to({rotation:-373.8,x:-0.1},0).wait(1).to({regX:34.5,regY:34.1,rotation:-385.7,y:-0.3},0).wait(1).to({regX:34.4,rotation:-398.5,x:-0.2,y:-0.2},0).wait(1));

	// timer_body
	this.text = new cjs.Text("", "10px 'Gisha-Bold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.parent = this;
	this.text.setTransform(6.7,34.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#977F65").s().p("AgHAcQgIAAgEgDIACgIQAPAGAGgGQAFgEgCgIQgDgFgHABIgGABIgKgCIAEgcIAfAAIAAAJIgVAAIgCAMQAUgEAGANQADAIgDAHQgEAHgJADIgIACIgFgBg");
	this.shape.setTransform(39.6,-22.4,1.852,1.748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977F65").s().p("AgIAbQgIgEgDgLQgCgJACgKQACgOAJgFQAIgFAJAFQAIAEACALQADAKgCAKQgCAOgJAEQgEACgFAAQgDAAgFgCgAgGgOQgCAFAAAJQAAAKACAFQADAFADAAQAIAAAAgUQAAgTgIAAQgEAAgCAFg");
	this.shape_1.setTransform(46.3,25.9,1.713,1.701);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#977F65").s().p("AgQAcIAAgIIALAAIAAgmIgMAEIAAgJIAQgEIAIAAIAAAvIALAAIAAAIg");
	this.shape_2.setTransform(38,25.9,1.713,1.701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#977F65").s().p("AgHAcQgHgBgFgCIACgIQAIADAIgBQAIgBAAgJQAAgJgIAAQgFAAgDACIgKgCIAEgcIAfAAIAAAJIgVAAIgCAMQAUgFAGAOQADAHgDAHQgDAIgJADQgFACgFAAIgEgBg");
	this.shape_3.setTransform(4.7,45.3,1.724,1.754);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#977F65").s().p("AgQAcIAAgIIAMAAIAAgmIgNAEIAAgIIAPgFIAIAAIAAAvIAMAAIAAAIg");
	this.shape_4.setTransform(-3.7,45.2,1.724,1.754);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#977F65").s().p("AgIAbQgIgEgDgLQgCgJACgKQACgOAJgFQAIgFAJAFQAMAGAAAUQAAAVgMAGQgEACgFAAQgDAAgFgCgAgGgOQgCAFAAAJQAAAKACAFQADAFADAAQAIAAAAgUQAAgKgCgEQgCgFgEAAQgDAAgDAFg");
	this.shape_5.setTransform(-37.6,25.9,1.657,1.704);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#977F65").s().p("AgTAdIABgNQACgGAHgGQAGgEAFgDQAHgFgDgGQgCgFgJACIgLADIgDgIIAIgDQARgHAKALQAJAKgKAKIgJAHIgJAGIgCAEIgBAEIAaAAIAAAJg");
	this.shape_6.setTransform(-45.8,25.8,1.657,1.704);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#977F65").s().p("AgTAZIACgIQAJAEAHgCQAIgBAAgJQAAgJgIAAQgEAAgEACIgKgCIAEgcIAfAAIAAAJIgVAAIgDAMQAVgEAGANQADAIgDAHQgEAHgJADQgGACgEAAQgIAAgHgEg");
	this.shape_7.setTransform(-39.2,-23,1.658,1.697);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#977F65").s().p("AgTAdIABgNQACgGAHgGIALgHQAFgEAAgEQgBgFgEgBQgFgCgNAFIgDgIQAMgIANADQAOADAAAMQAAAKgNAHQgNAJAAAGIAaAAIAAAJg");
	this.shape_8.setTransform(-47.5,-23.2,1.658,1.697);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E56770").s().p("AgIAbQgIgEgDgLQgCgJACgKQACgOAJgFQAIgFAJAFQAIAFACAKQADAKgCAKQgCAOgJAEQgFACgEAAQgEAAgEgCgAgGgOQgCAFAAAJQAAAKACAFQADAFADAAQAEAAACgFQACgFAAgKQAAgJgCgFQgCgFgEAAQgDAAgDAFg");
	this.shape_9.setTransform(0.2,-44.8,1.786,1.701);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgDARQgDgBAAgEIAGgcIAHACIgGAcQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAAAIgCAAg");
	this.shape_10.setTransform(7.5,-34.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgGAQQgEgCACgDIALgaIAGADIgLAaQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_11.setTransform(14.7,-32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgJAOQgDgCACgDIAQgXIAGAFIgQAWQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCgBg");
	this.shape_12.setTransform(21.2,-28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgMAMQgCgDACgDIAVgSIAFAFIgUATIgDABIgDgBg");
	this.shape_13.setTransform(26.7,-23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgPAFQgBgDADgBIAbgIIADAHIgbAIIgCAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_14.setTransform(34.2,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AgQACQAAgCAEgBIAcgDIABAGIgdADIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_15.setTransform(35.7,-3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgMACQgEAAAAgDQABgEADABIAdADIgBAGg");
	this.shape_16.setTransform(35.7,4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AgNAAQgDgBABgEQABgDAEABIAbAIIgDAHg");
	this.shape_17.setTransform(34.2,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AgMgGQgCgCACgDQADgDADADIAUASIgFAGg");
	this.shape_18.setTransform(26.7,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgKgIQgCgDADgCQADgCACADIAQAXIgGAEg");
	this.shape_19.setTransform(21.2,29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgIgKQgCgDAEgCQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIALAaIgGADg");
	this.shape_20.setTransform(14.7,33.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgGgLQAAgEADgBQADAAABADIAGAcIgHACg");
	this.shape_21.setTransform(7.5,35.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AgGAPIAGgcQAAgDAEAAQAEABgBAEIgGAcg");
	this.shape_22.setTransform(-7.5,35.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgJANIALgaQACgDADABQAEACgCADIgLAag");
	this.shape_23.setTransform(-14.7,33.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AgLALIAQgXQACgDADACQADACgCADIgQAXg");
	this.shape_24.setTransform(-21.2,29.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AgNAHIAVgSQACgDADADQADADgDACIgVATg");
	this.shape_25.setTransform(-26.8,24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgQABIAcgIQADgBABADQABAEgDABIgbAIg");
	this.shape_26.setTransform(-34.2,11.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgQgBIAcgDQAEgBAAAEQABADgEAAIgcADg");
	this.shape_27.setTransform(-35.7,4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAMAFIgcgDIABgGIAcADQAEABgBACQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_28.setTransform(-35.7,-3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AAMAIIgcgIIADgHIAbAIQADABgBADQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_29.setTransform(-34.2,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AAIAMIgVgTIAFgFIAVASQACADgCADIgCABIgDgBg");
	this.shape_30.setTransform(-26.8,-23.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AAFANIgQgWIAGgFIAQAXQACADgDACIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_31.setTransform(-21.2,-28.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AACAOIgLgaIAHgDIALAaQACADgEACIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_32.setTransform(-14.7,-32.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AAAAOIgGgcIAHgCIAGAcQABAEgEABIgCAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_33.setTransform(-7.5,-34.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AgQAKQgCgCABgDQABgDADgBIAYgOIAHAMIgYAOIgFABQgDAAgCgEg");
	this.shape_34.setTransform(31.1,-17.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AgNAAQgHgDAEgGQAEgGAGADIAYAOIgHAMg");
	this.shape_35.setTransform(31.1,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AgGASIAAgcQAAgHAGAAQAHAAAAAHIAAAcg");
	this.shape_36.setTransform(0,36);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AgRACIAYgOQAGgDAEAGQADAGgGADIgYAOg");
	this.shape_37.setTransform(-31.1,18.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AAHANIgYgOIAHgMIAYAOQADABABADQAAADgBACQgCAEgDAAIgFgBg");
	this.shape_38.setTransform(-31.1,-17.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AgEAQQgCgCAAgCIAAgdIAGgBIAHABIAAAdQAAAGgHAAQgCAAgCgCg");
	this.shape_39.setTransform(0,-35.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ACDEDF").s().p("AlcIqQhVABg8g9Qg8g8gBhWIAAq4QABhVA8g8QA8g8BVgBIK4AAQBWABA8A8QA9A8gBBVIAAK4QABBWg9A8Qg8A9hWgBg");
	this.shape_40.setTransform(0,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6F6F6").s().p("AlaI9QheAAhChCQhChCAAheIAAq1QAAhdBChDQBChCBeAAIK1AAQBeAABCBCQBCBCAABeIAAK1QAABehCBCQhCBCheAAg");
	this.shape_41.setTransform(-0.1,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#977F65").s().p("AluI9QhWAAg8g8Qg8g8gBhWIAArdQABhWA8g8QA8g8BWAAILdAAQBWAAA8A8QA9A8AABWIAALdQAABWg9A8Qg8A8hWAAg");
	this.shape_42.setTransform(4.7,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-56.9,119.4,117.8);


(lib.Tween7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowcopy();
	this.instance.parent = this;
	this.instance.setTransform(445.6,320.9,1,1,0,0,0,7.9,7.9);

	this.instance_1 = new lib.snowcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-259,336.7,1,1,0,0,0,7.9,7.9);

	this.instance_2 = new lib.snowcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.2,162.3,1,1,0,0,0,7.9,7.9);

	this.instance_3 = new lib.snowcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,162.3,1,1,0,0,0,7.9,7.9);

	this.instance_4 = new lib.snowcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-489.8,238.9,1,1,0,0,0,7.9,7.9);

	this.instance_5 = new lib.snowcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-251.9,116.9,1,1,0,0,0,7.9,7.9);

	this.instance_6 = new lib.snowcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(252.1,29.3,1,1,0,0,0,7.9,7.9);

	this.instance_7 = new lib.snowcopy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(513.1,-60.5,1,1,0,0,0,7.9,7.9);

	this.instance_8 = new lib.snowcopy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(358.9,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_9 = new lib.snowcopy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(99.8,-175.4,1,1,0,0,0,7.9,7.9);

	this.instance_10 = new lib.snowcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.3,-300.4,1,1,0,0,0,7.9,7.9);

	this.instance_11 = new lib.snowcopy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-159.2,-102.8,1,1,0,0,0,7.9,7.9);

	this.instance_12 = new lib.snowcopy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-517,-65.5,1,1,0,0,0,7.9,7.9);

	this.instance_13 = new lib.snowcopy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-359.8,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_14 = new lib.snowcopy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-521.1,-336.6,1,1,0,0,0,7.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,-344.5,1058.1,689.1);


(lib.Tween6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowcopy();
	this.instance.parent = this;
	this.instance.setTransform(445.5,320.8,1,1,0,0,0,7.9,7.9);

	this.instance_1 = new lib.snowcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-259,336.6,1,1,0,0,0,7.9,7.9);

	this.instance_2 = new lib.snowcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.1,162.2,1,1,0,0,0,7.9,7.9);

	this.instance_3 = new lib.snowcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,162.2,1,1,0,0,0,7.9,7.9);

	this.instance_4 = new lib.snowcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-489.9,238.8,1,1,0,0,0,7.9,7.9);

	this.instance_5 = new lib.snowcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-252,116.9,1,1,0,0,0,7.9,7.9);

	this.instance_6 = new lib.snowcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(252,29.2,1,1,0,0,0,7.9,7.9);

	this.instance_7 = new lib.snowcopy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(513.1,-60.5,1,1,0,0,0,7.9,7.9);

	this.instance_8 = new lib.snowcopy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(358.8,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_9 = new lib.snowcopy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(99.8,-175.5,1,1,0,0,0,7.9,7.9);

	this.instance_10 = new lib.snowcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.4,-300.4,1,1,0,0,0,7.9,7.9);

	this.instance_11 = new lib.snowcopy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-159.3,-102.9,1,1,0,0,0,7.9,7.9);

	this.instance_12 = new lib.snowcopy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-517.1,-65.6,1,1,0,0,0,7.9,7.9);

	this.instance_13 = new lib.snowcopy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-359.9,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_14 = new lib.snowcopy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-521.1,-336.6,1,1,0,0,0,7.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,-344.5,1058.1,689.1);


(lib.screen_snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snow4
	this.instance = new lib.Tween6copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-718.5);

	this.instance_1 = new lib.Tween7copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.9,-167.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-20.9,y:-167.9},71).wait(1));

	// snow3
	this.instance_2 = new lib.Tween6copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(172.9,15.5);

	this.instance_3 = new lib.Tween7copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.4,741.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:274.4,y:741.9},71).wait(1));

	// snow2
	this.instance_4 = new lib.Tween6copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(54.7,-757.8);

	this.instance_5 = new lib.Tween7copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:-20.9,y:15.5},71).wait(1));

	// snow1
	this.instance_6 = new lib.Tween6copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-18.1,-15.4);

	this.instance_7 = new lib.Tween7copy("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.6,704.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:6.6,y:704.5},71).wait(1));

	// background
	this.instance_8 = new lib.startpage();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-1102.4,1341.9,1462.4);


(lib.eyescopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1copy();
	this.instance.parent = this;
	this.instance.setTransform(23.9,6.4,1,1,0,0,0,23.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.86},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.69},0).wait(1).to({scaleY:0.66},0).wait(1).to({scaleY:0.63},0).wait(1).to({scaleY:0.59},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.52},0).wait(1).to({scaleY:0.49},0).wait(1).to({scaleY:0.46},0).wait(1).to({scaleY:0.42},0).wait(1).to({scaleY:0.39},0).wait(1).to({scaleY:0.36},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.22},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.28},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.35},0).wait(1).to({scaleY:0.38},0).wait(1).to({scaleY:0.41},0).wait(1).to({scaleY:0.45},0).wait(1).to({scaleY:0.48},0).wait(1).to({scaleY:0.51},0).wait(1).to({scaleY:0.54},0).wait(1).to({scaleY:0.58},0).wait(1).to({scaleY:0.61},0).wait(1).to({scaleY:0.64},0).wait(1).to({scaleY:0.68},0).wait(1).to({scaleY:0.71},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.77},0).wait(1).to({scaleY:0.81},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.87},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,12.8);


(lib.cookie_man_sad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_1
	this.instance = new lib.eyescopy();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,1,1,0,0,0,23.9,6.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C249").s().p("AAYBnQgkgOgbgTQgmgbgLgfIAAghQAJgRAUgTQAogmA3gJQAMgCALAGQALAGAFAMQAeBRgkBVQgGANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape.setTransform(11.6,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1C249").s().p("AgxBnQgNgGgGgNQgVgxACgxQABgkAMggQAFgMALgGQAKgGANACQA3AJAoAmQAUATAJARIAAAhQgLAfgmAbQgbATgkAOQgGADgGAAQgHAAgHgDg");
	this.shape_1.setTransform(-13.1,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1C249").s().p("AgsAuQgTgUAAgaQAAgZATgTQATgTAZAAQAaAAAUATQASASAAAaQAAAagSAUQgUASgaAAQgaAAgSgSg");
	this.shape_2.setTransform(-1,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgZATgTQASgTAaAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgaAAgSgTg");
	this.shape_3.setTransform(-0.2,111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgZATgTQASgTAaAAQAaAAAUATQASATAAAZQAAAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape_4.setTransform(-0.2,65.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgaATgSQASgTAaAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgTgTg");
	this.shape_5.setTransform(-0.2,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ALSomIhNAcIAsBVIhVAaIA2BXIhVAbIApBVAEXInIALhfIBsAcIAIhnIBxAlIAIhnIBrAYArRodIBNAbIgsBVIBVAbIg2BXIBVAbIgpBUAkIInIgLhfIhtAcIgHhnIhxAlIgJhnIhqAY");
	this.shape_6.setTransform(-0.8,112.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E66D76").s().p("AELAtQgTgTAAgaQAAgaATgTQATgSAaAAQAbAAATASQATATAAAaQAAAagTATQgTATgbAAQgaAAgTgTgAllAtQgTgTAAgaQAAgaATgTQATgSAaAAQAbAAATASQATATAAAaQAAAagTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(-0.6,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A96A44").s().p("AGFOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAJ6A4Ii3g4QgMgDgQADQgfAGgOAlIgCAGQgIgjAKgYQAOglAfgHQAQgDAMADIC3A4QBMAZBIgjQBHgjAahMQAGgTADgSQAGAtgPAuQgaBLhHAjQgqAVgsAAQgeAAgggKgAsNAtQhHgjgahLQgPguAGgrQADARAGASQAaBMBHAjQBIAjBMgZIC3g4IAcAAQAfAHAOAlQAKAYgIAjIgCgGQgOglgfgGIgcAAIi3A4QggAKgeAAQgsAAgqgVgAD/n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlboTQiSiSAAjOIABgZQAIC+CJCKQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_8.setTransform(0,94.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5764E").s().p("AGFRuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAIgjgKgYQgOglgfgHIgcAAIi3A4QhMAZhIgjQhHgkgahMQgGgRgDgSQgJg8Aeg5QAnhJBQgWIG/h5IAzgOQg0ggguguQiJiJgIi+IgBgZQAAjOCSiRQCRiSDOAAQDOAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIG6B4QBQAWAnBJQAeA4gJA8QgDASgGASQgaBMhHAkQhIAjhMgZIi3g4QgMgEgQAEQgfAHgOAlQgKAZAIAjQAEARAIAUQAMAeAPAXIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkQQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAptEMIAphUIhVgbIA2hXIhVgbIAshUIhNgbIBNAbIgsBUIBVAbIg2BXIBVAbgAI1CvIApBVIgphVIBVgbIg2hXIBVgaIgshUIBNgcIhNAcIAsBUIhVAaIA2BXIhVAbgAiCnOQgXAegGAeQgCAIAGAGQAHAFAIgDQBlgnBhAPQAyAHAUAKQAVAJAIgBQAJgCgIgWQgHgXgXgeQgtg7hTAAQhUAAguA7gAEForQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlrorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACPs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhTnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_9.setTransform(0,65.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj9AsQgSAAgVgJQgFgCgCgFQgCgFACgFQADgKALACIACABQAUAEAKgCQARgBALgGQAPgHAKgJQAGgEAFgHIAJgLQAFgIAKgDQAJgCAIAFQAJAFACAJQADAKgFAIIgDAEIgRAPIgQAMQgTALgSAFQgPAGgSAAIgIgBgADYAlQgRgGgPgLIgOgMIgNgNIgDgFQgDgIADgJQAEgJAIgEQAJgEAIADQAJACADAIIAHALQAEAGAFAEQAIAJANAHQALAGAPADQAJACATgDIACgBQAEAAAEACQAEACAAAEQACAFgDAEQgCAFgFABQgXAIgPAAQgUAAgSgHg");
	this.shape_10.setTransform(-2.3,-13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACKBCQgdgQgxgHQhhgPhmAnQgHADgHgFQgGgGABgIQAHgeAXgdQAug7BSAAQBUAAAuA7QAXAdAGAeQACAJgHAFQgFADgEAAQgDAAgEgCgAhSgOQgYAQgOAcQBKgXBHAEQAzACAtAPQgkhChVAAQgwAAgiAYg");
	this.shape_11.setTransform(-0.1,20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5764E").s().p("AhRgKQAhgYAxAAQBUAAAkBDQgtgQgygCQhIgEhKAYQAOgcAZgRg");
	this.shape_12.setTransform(-0.1,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5764E").s().p("AGFRuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAIgjgKgYQgOglgfgHIgcAAIi3A4QhMAZhIgjQhHgkgahMQgGgRgDgSQgJg8Aeg5QAnhJBQgWIG/h5IAzgOQg0ggguguQiJiJgIi+IgBgZQAAjOCSiRQCRiSDOAAQDOAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIG6B4QBQAWAnBJQAeA4gJA8QgDASgGASQgaBMhHAkQhIAjhMgZIi3g4QgMgEgQAEQgfAHgOAlQgKAZAIAjQAEARAIAUQAMAeAPAXIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkQQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAptEMIAphUIhVgbIA2hXIhVgbIAshUIhNgbIBNAbIgsBUIBVAbIg2BXIBVAbgAI1CvIApBVIgphVIBVgbIg2hXIBVgaIgshUIBNgcIhNAcIAsBUIhVAaIA2BXIhVAbgAA6maQAxAHAeAQQAIAEAHgFQAHgFgBgJQgHgegXgeQgtg7hTAAQhUAAguA7QgXAegGAeQgCAIAGAGQAHAFAIgDQBJgcBHAAQAbAAAbAEgAEForQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlrorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACPs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhTnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_13.setTransform(0,65.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACgDdQgdgQgxgIQhhgPhmAnQgHADgHgFQgGgGABgIQAHgeAXgdQAug7BSAAQBUAAAuA7QAXAdAGAeQACAJgHAGQgEACgFAAQgDAAgEgBgAg8CLQgYASgOAcQBKgYBHAEQAzACAtAQQgkhEhVAAQgwAAgiAYgAj9iEQgSgBgVgJQgFgCgCgEQgCgFACgFQADgKALACIACAAQAUAEAKgBQARgCALgGQAPgHAKgKQAGgEAFgGIAJgLQAFgJAKgCQAJgDAIAFQAJAFACAKQADAJgFAJIgDADIgRAQIgQAMQgTAMgSAFQgPAFgSAAIgIAAgADYiLQgRgGgPgMIgOgLIgNgPIgDgFQgDgIADgJQAEgIAIgFQAJgEAIADQAJADADAIIAHALQAEAGAFAEQAIAJANAIQALAGAPACQAJACATgDIACAAQAEgBAEACQAEADAAAEQACAFgDAEQgCAEgFACQgXAHgPAAQgUAAgSgGg");
	this.shape_14.setTransform(-2.3,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ALKobIhOAXIAmBYIhXAUIAwBaIhXAWIAjBXAEXIcIALhfIBsAcIAIhnIBxAlIAIhnIBrAYArJoSIBOAWIglBYIBXAUIgvBbIBXAUIgiBXAkJIcIgLhfIhsAcIgIhnIhxAlIgIhnIhrAY");
	this.shape_15.setTransform(-0.7,114);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A96A44").s().p("AGEOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAHAugQAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAJVBHIizhFQgKgDgNABIAAAOQgLALgHASIgCAGQgFgYACgTIgGAEIgEADIAEg0IAEgDQAKgIAOgCIABgBQAPgCAMAFICyBDQBLAfBJgfQBKgdAfhKQAHgSAEgRQAEAsgTAtQgfBJhKAeQgkAPglAAQglAAglgPgArmBHQgvgTgegkQgRgVgMgaQgTgtADgsQAEARAIASQAdBDA/AdIAOAGQBKAeBKgfICxhFIABAAIAPgCIABAJQARALAJAZQAKAYgIAjIgCgGQgNgigcgJIivBGQgmAPglAAQgkAAglgOgAD+n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgXAXgaAUgAlcoTQgwgxghg3QgQgcgMgeQglhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_16.setTransform(0.1,94.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5764E").s().p("AGERuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIgjgJgYQgKgZgRgLIgBgJIgPABIAAABIiyBFQhKAfhKgeIgNgGQhAgegdhDQgHgRgEgRQgOg8Aag7QAhhLBOgdIEwhtICHgkIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDNAAQDOAACSCSQCRCRAADOIAAAZQgJC+iICJQgvAvg2AgIAzAOIBbAZIAAAAIFYB3QBPAcAhBMQAaA6gNA7QgEASgIARQgeBLhKAeQhKAehKgeIizhFQgLgEgPACIgCAAQgNACgLAIIgEADIgDA2IADgDIAHgEQgDATAFAYQAEARAIAUIAMAbQAHAOAIAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEOQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkRQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgApLEZIAihXIhXgUIAvhbIhXgUIAlhXIhOgWIBOAWIglBXIBXAUIgvBbIBXAUgAIcC7IAjBXIgjhXIBWgWIgvhaIBXgUIgnhXIBPgXIhPAXIAnBXIhXAUIAvBaIhWAWgAA6maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBJgcBHAAQAbAAAcAEgAEEorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlsorQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACOs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhUnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_17.setTransform(0.1,65.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AK/oPIhQAQIAfBbIhYANIApBeIhYAPIAcBZAEWIQIALheIBsAbIAHhnIByAmIAIhoIBrAYAq+oEIBQAOIgdBcIBZAMIgnBeIBYANIgaBZAkKIQIgLheIhsAbIgIhnIhxAmIgIhoIhrAY");
	this.shape_18.setTransform(-0.6,115.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A96A44").s().p("AGCOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAIpBVIighNIAAAGQgLALgHASIgCAGQgFgYACgTIgGAEIgEADIAEg0IADgDIABgLQAJgBAHADIAAAAIAEACICsBRQBJAkBLgZQBMgYAlhHQAIgRAGgRQAAAtgWApQglBIhMAZQgfAKgeAAQgsAAgqgWgAq3BhQgwgPghghQgUgUgOgaQgXgpgBgsQAGAQAJARQAjA/BCAYIAOAFQBMAXBHglIClhSIACAYQAGAIAEALQAKAYgIAjIgCgGQgJgWgOgMIiRBJQgsAXguAAQgcAAgdgIgAD8n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAleoTQgwgxghg3QgQgcgNgeQgkhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_19.setTransform(0.3,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5764E").s().p("AGCRuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgSQAHgjgJgYQgEgLgGgIIgCgYIilBSQhHAmhNgXIgOgFQhCgYgjhAQgJgRgFgRQgTg5AUg+QAahPBLgjIEliIIAKgDIAAABIB+giIAzgOQg1ggguguQgwgwggg3IgFgJQg3hhgFh2IAAgZQAAjOCRiRQCSiSDNAAQDOAACSCSQCRCRAADOIAAAZQgIC+iJCJQgvAvg2AgIA0AOIBaAZIAAAAIAGADIAAAHIABgHIFHCOQBMAiAcBPQAVA7gSA7QgFARgJARQgkBHhNAZQhLAYhIgkIithSIgDgBIAAAAQgHgDgJAAIgBAMIgEACIgDA2IADgDIAHgEQgDATAFAYQAEARAIAUIAMAbQAHAOAIAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgxAAQgeAAgfgJgAEMQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkTQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAokElIAahZIhYgNIAnheIhZgMIAdhbIhQgOIBQAOIgdBbIBZAMIgnBeIBYANgAH+DFIAcBZIgchZIBXgPIgoheIBYgNIgfhaIBQgQIhQAQIAfBaIhYANIAoBeIhXAPgAA4maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBKgcBGAAQAcAAAbAEgAECorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAluorQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlFr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACMs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhWnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_20.setTransform(0.3,65.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AK1oGIhRALIAZBdIhZAIIAjBgIhZAJIAXBbAEUIHIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYAq0n2IBSAIIgWBeIBZAEIgfBhIBZAHIgTBbAkLIHIgLhfIhtAcIgHhnIhxAlIgJhnIhqAY");
	this.shape_21.setTransform(-0.5,116.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A96A44").s().p("AF/OFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAqMB2IgCgBQgygKgjgfQgVgTgQgYQgagngFgsQAHAQALAQQAnA8BEATIAOAEQBOARBEgrICJhRIADAiQAIAXgHAiIgCgGQgFgMgGgJIhzBGQgRAKgSAHQggANgjAAQgUAAgVgEgAIDBeIiDhKQgGAJgFAMIgBACIgCAGIgDgTQgLgaAFgrIADgDIAJABIAAABIAGAAICTBRQBGApBMgUQBOgUAphEQAKgQAHgRQgDAtgZAoQgpBFhOAUQgZAHgZAAQgyAAgugcgAD5n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlhoTQgwgxghg3QgQgcgNgeQgkhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_22.setTransform(0.6,94.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5764E").s().p("AGARuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIghgJgYIgCgjIiJBSQhEArhOgRIgPgEQhDgTgog8QgKgRgHgQQgYg4AQg+QAUhRBHgpIEbieIAXgJIABAHIAAgHIBugeIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDOAAQDNAACSCSQCRCRAADOIAAAZQgJC+iICJQgvAvg2AgIAzAOIBbAZIAAAAIAGADIAAAHIABgHIAIAEIAAAAIE2CfQBKAmAWBRQARA9gVA5QgHAQgJARQgpBFhOAUQhNAThGgoIiThSIgFgBIgBAAIgIgBIgEACQgFAtALAZIADAUIACAIQAEAOAGAPIAMAbIAIAOIAHAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEKQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkVQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAoCEvIAThbIhZgHIAghhIhagEIAWheIhRgIIBRAIIgWBeIBaAEIggBhIBZAHgAHkDLIAXBbIgXhbIBZgJIgjhgIBZgIIgZhcIBRgLIhRALIAZBcIhZAIIAjBgIhZAJgAA2maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBJgcBIAAQAaAAAcAEgAEAorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlworQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlHr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACKs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhYnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_23.setTransform(0.5,65.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AKon7IhSAFIASBfIhZAAIAaBjIhYACIAPBdAEUH8IALhfIBsAcIAIhnIBxAlIAIhnIBrAYAqnntIBSACIgOBfIBZgDIgXBkIBZgBIgMBcAkMH8IgKhfIhtAcIgIhnIhwAlIgJhnIhrAY");
	this.shape_24.setTransform(-0.4,117.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A96A44").s().p("AF+OFQhQgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgOALgHAMIi1EXQgvBFhRAWQhRAWhMglQhZgrgdheQgPgxAGguQADAUAGAVQAdBeBZArQBMAlBRgWQBRgWAvhFIC1kXQAHgMAOgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBQAWQBSAWBLglQBZgqAdhfQAGgVADgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgfgIgAHYBmIhihBIgCAEIgBACIgBAGIgDgSIgGgDIABgNQgFgVAEghIADgDIACAAIgBANIB6BPQBCAuBOgNQBPgOAvhCQAKgOAJgQQgHArgcAnQgvBChPAOQgRADgRAAQg7AAgygkgApgCEIgBAAQgzgGglgcQgWgRgSgXQgdgmgIgrQAHAPANAPQAsA6BEANIAPADQBPALBBgwIBXg9IAOAJQAIAXgHAiIgCgGIgFgLIhPBAQgQAMgRAIQgmASgqAAQgOAAgOgCgAD4n1QA2ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlioTQgwgxggg3QgQgcgNgeQgkhYAAhmIAAgZQAGB2A2BhIAFAJQAgA3AwAxQAvAuA0AfIgzAOQgZgTgXgXg");
	this.shape_25.setTransform(0.7,94.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B5764E").s().p("AGARuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIghgJgYIgOgJIhXA9QhAAwhPgKIgPgDQhFgOgsg5QgMgQgIgPQgcg2ALhAQANhSBEgwIEOiyIAKgEIAAAAIANgFIABAHIAAgHIBugeIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDOAAQDNAACSCSQCRCRAADOIAAAZQgIC+iJCJQgvAvg2AgIAzAOIBbAZIAAAAIAGADIAAAHIABgHIABABIAAAHIABgGIAGADIAAAAIEpC2QBGAtAQBSQAMA+gZA3QgIAQgLAQQguBBhPAOQhOAOhDguIh5hRIABgMIgCAAIgEACQgDAhAFAXIgBAMIAFAEIADASIACAIQAEAOAGAPIAMAbIAFAKIAAADIACAAIABABIADAGIAEAGIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEKQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkVQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAndEzIAMhcIhZABIAXhkIhZADIAOhfIhSgCIBSACIgOBfIBZgDIgXBkIBZgBgAHHDRIAQBdIgQhdIBZgCIgbhjIBZAAIgShfIBSgFIhSAFIASBfIhZAAIAbBjIhZACgAA2maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBKgcBHAAQAbAAAbAEgAEAorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlworQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlHr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACKs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhYnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_26.setTransform(0.5,65.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AKanxIhRgBIALBgIhZgGIATBkIhYgFIAIBeAETHzIAMheIBrAcIAIhoIBxAmIAJhnIBrAYAqZniIBSgEIgIBgIBZgJIgQBlIBZgHIgFBcAkMHzIgLheIhtAcIgHhoIhxAmIgJhnIhqAY");
	this.shape_27.setTransform(-0.4,118.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A96A44").s().p("AF+OFQhQgWgwhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgHAMIi1EXQgwBFhRAWQhQAWhMglQhZgrgdheQgPgxAGguQADAUAGAVQAdBeBZArQBMAlBQgWQBRgWAwhFIC1kXQAHgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAwBFBQAWQBRAWBLglQBagqAchfQAHgVACgUQAHAugQAxQgcBfhaAqQgvAXgxAAQgeAAgegIgAIoCVQgPAAgPgCIgVgFQglgKghgbIg0hDIgFgBIgCAEIgBACIgCAGIgCgLIgBgHIAAABIgFgRQgEgVAIgXIAUAhIBAAyQBAAzBOgIQBQgIA0g+QALgOAKgPQgKArgfAlQgyA9hOAJIgCAAIgQABIgFAAgAo1CRIgCAAQgzgDgngZQgXgQgUgVQgggjgLgrQAJAOANAPQAwA2BFAJIAQABQBQAFA8g0IBBg4QAIAXgHAiIgBgGIgCgCQgLARggAoQgPANgQAJQgqAZgzAAIgNAAgAD4n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgXAXgaAUgAlioTQgwgxggg3QgRgcgMgeQgkhYAAhmIAAgZQAFB2A2BhIAGAJQAgA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_28.setTransform(0.7,94.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B5764E").s().p("AGARuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAHghgIgYIhBA4Qg9A0hQgEIgPgCQhFgIgwg2QgNgQgJgOQggg0AGhAQAHhTBAg1ID/jFIAJAAIABAHIAAgJIgJAAIAAAAIALgEIAAAAIANgFIAAAHIAAgHIBvgeIAzgOQg0ggguguQgwgwghg3IgFgJQg2hhgFh2IgBgZQAAjOCSiRQCRiSDPAAQDNAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIBaAZIAAAAIABABIAGACIAAAHIAAgHIACABIAAAHIAAgGIAGADIAAAAIANAIIAAAHIABgHIEODCQBDAyAKBUQAIA+gdA2QgKAPgMAPQgzA+hQAIQhPAHg/gyIhAgzIgUgiQgJAXAFAXIAFAQIAAAAIABAHIACALIACAIQAEAOAGAPIAJAVIADAGIAFAKIAAADIACAAIABABIADAGIAEAGIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEKQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkVQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAm7E3IAFhdIhZAHIAQhlIhZAJIAIhgIhSAEIBSgEIgIBgIBZgJIgQBlIBZgHgAG0ExIgIheIBYAEIgThkIBZAGIgLhgIBSABIhSgBIALBgIhZgGIATBkIhYgEgAA1maQAxAHAeAQQAIAEAHgFQAHgFgBgJQgHgegXgeQgtg7hTAAQhUAAguA7QgXAegGAeQgCAIAGAGQAHAFAIgDQBJgcBIAAQAaAAAbAEgAEAorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlworQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlIr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACKs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhYnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_29.setTransform(0.5,65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},24).to({state:[{t:this.shape_14},{t:this.shape_17},{t:this.shape_16},{t:this.shape_7},{t:this.shape_15},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_20},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_23},{t:this.shape_22},{t:this.shape_7},{t:this.shape_21},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_26},{t:this.shape_25},{t:this.shape_7},{t:this.shape_24},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_26},{t:this.shape_25},{t:this.shape_7},{t:this.shape_24},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_29},{t:this.shape_28},{t:this.shape_7},{t:this.shape_27},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape_14},{t:this.shape_29},{t:this.shape_28},{t:this.shape_7},{t:this.shape_27},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-48.6,178,234);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(23.9,6.4,1,1,0,0,0,23.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.86},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.69},0).wait(1).to({scaleY:0.66},0).wait(1).to({scaleY:0.63},0).wait(1).to({scaleY:0.59},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.52},0).wait(1).to({scaleY:0.49},0).wait(1).to({scaleY:0.46},0).wait(1).to({scaleY:0.42},0).wait(1).to({scaleY:0.39},0).wait(1).to({scaleY:0.36},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.22},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.28},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.35},0).wait(1).to({scaleY:0.38},0).wait(1).to({scaleY:0.41},0).wait(1).to({scaleY:0.45},0).wait(1).to({scaleY:0.48},0).wait(1).to({scaleY:0.51},0).wait(1).to({scaleY:0.54},0).wait(1).to({scaleY:0.58},0).wait(1).to({scaleY:0.61},0).wait(1).to({scaleY:0.64},0).wait(1).to({scaleY:0.68},0).wait(1).to({scaleY:0.71},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.77},0).wait(1).to({scaleY:0.81},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.87},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,12.8);


(lib.cookie_man_sad_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_1
	this.instance_1 = new lib.eyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.1,1,1,0,0,0,23.9,6.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E1C249").s().p("AAYBnQgkgOgbgTQgmgbgLgfIAAghQAJgRAUgTQAogmA3gJQAMgCALAGQALAGAFAMQAeBRgkBVQgGANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape_30.setTransform(11.6,50.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1C249").s().p("AgxBnQgNgGgGgNQgVgxACgxQABgkAMggQAFgMALgGQAKgGANACQA3AJAoAmQAUATAJARIAAAhQgLAfgmAbQgbATgkAOQgGADgGAAQgHAAgHgDg");
	this.shape_31.setTransform(-13.1,50.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E1C249").s().p("AgsAuQgTgUAAgaQAAgZATgTQATgTAZAAQAaAAAUATQASASAAAaQAAAagSAUQgUASgaAAQgaAAgSgSg");
	this.shape_32.setTransform(-1,49.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgZATgTQASgTAaAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgaAAgSgTg");
	this.shape_33.setTransform(-0.2,111);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgZATgTQASgTAaAAQAaAAAUATQASATAAAZQAAAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape_34.setTransform(-0.2,65.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgsAtQgTgTAAgaQAAgaATgSQASgTAaAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgTgTg");
	this.shape_35.setTransform(-0.2,88);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ALSomIhNAcIAsBVIhVAaIA2BXIhVAbIApBVAEXInIALhfIBsAcIAIhnIBxAlIAIhnIBrAYArRodIBNAbIgsBVIBVAbIg2BXIBVAbIgpBUAkIInIgLhfIhtAcIgHhnIhxAlIgJhnIhqAY");
	this.shape_36.setTransform(-0.8,112.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E66D76").s().p("AELAtQgTgTAAgaQAAgaATgTQATgSAaAAQAbAAATASQATATAAAaQAAAagTATQgTATgbAAQgaAAgTgTgAllAtQgTgTAAgaQAAgaATgTQATgSAaAAQAbAAATASQATATAAAaQAAAagTATQgTATgbAAQgaAAgTgTg");
	this.shape_37.setTransform(-0.6,14.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A96A44").s().p("AGFOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAJ6A4Ii3g4QgMgDgQADQgfAGgOAlIgCAGQgIgjAKgYQAOglAfgHQAQgDAMADIC3A4QBMAZBIgjQBHgjAahMQAGgTADgSQAGAtgPAuQgaBLhHAjQgqAVgsAAQgeAAgggKgAsNAtQhHgjgahLQgPguAGgrQADARAGASQAaBMBHAjQBIAjBMgZIC3g4IAcAAQAfAHAOAlQAKAYgIAjIgCgGQgOglgfgGIgcAAIi3A4QggAKgeAAQgsAAgqgVgAD/n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlboTQiSiSAAjOIABgZQAIC+CJCKQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_38.setTransform(0,94.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B5764E").s().p("AGFRuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAIgjgKgYQgOglgfgHIgcAAIi3A4QhMAZhIgjQhHgkgahMQgGgRgDgSQgJg8Aeg5QAnhJBQgWIG/h5IAzgOQg0ggguguQiJiJgIi+IgBgZQAAjOCSiRQCRiSDOAAQDOAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIG6B4QBQAWAnBJQAeA4gJA8QgDASgGASQgaBMhHAkQhIAjhMgZIi3g4QgMgEgQAEQgfAHgOAlQgKAZAIAjQAEARAIAUQAMAeAPAXIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkQQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAptEMIAphUIhVgbIA2hXIhVgbIAshUIhNgbIBNAbIgsBUIBVAbIg2BXIBVAbgAI1CvIApBVIgphVIBVgbIg2hXIBVgaIgshUIBNgcIhNAcIAsBUIhVAaIA2BXIhVAbgAiCnOQgXAegGAeQgCAIAGAGQAHAFAIgDQBlgnBhAPQAyAHAUAKQAVAJAIgBQAJgCgIgWQgHgXgXgeQgtg7hTAAQhUAAguA7gAEForQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlrorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACPs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhTnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_39.setTransform(0,65.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Aj9AsQgSAAgVgJQgFgCgCgFQgCgFACgFQADgKALACIACABQAUAEAKgCQARgBALgGQAPgHAKgJQAGgEAFgHIAJgLQAFgIAKgDQAJgCAIAFQAJAFACAJQADAKgFAIIgDAEIgRAPIgQAMQgTALgSAFQgPAGgSAAIgIgBgADYAlQgRgGgPgLIgOgMIgNgNIgDgFQgDgIADgJQAEgJAIgEQAJgEAIADQAJACADAIIAHALQAEAGAFAEQAIAJANAHQALAGAPADQAJACATgDIACgBQAEAAAEACQAEACAAAEQACAFgDAEQgCAFgFABQgXAIgPAAQgUAAgSgHg");
	this.shape_40.setTransform(-2.3,-13);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ACKBCQgdgQgxgHQhhgPhmAnQgHADgHgFQgGgGABgIQAHgeAXgdQAug7BSAAQBUAAAuA7QAXAdAGAeQACAJgHAFQgFADgEAAQgDAAgEgCgAhSgOQgYAQgOAcQBKgXBHAEQAzACAtAPQgkhChVAAQgwAAgiAYg");
	this.shape_41.setTransform(-0.1,20.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B5764E").s().p("AhRgKQAhgYAxAAQBUAAAkBDQgtgQgygCQhIgEhKAYQAOgcAZgRg");
	this.shape_42.setTransform(-0.1,19.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B5764E").s().p("AGFRuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAIgjgKgYQgOglgfgHIgcAAIi3A4QhMAZhIgjQhHgkgahMQgGgRgDgSQgJg8Aeg5QAnhJBQgWIG/h5IAzgOQg0ggguguQiJiJgIi+IgBgZQAAjOCSiRQCRiSDOAAQDOAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIG6B4QBQAWAnBJQAeA4gJA8QgDASgGASQgaBMhHAkQhIAjhMgZIi3g4QgMgEgQAEQgfAHgOAlQgKAZAIAjQAEARAIAUQAMAeAPAXIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkQQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAptEMIAphUIhVgbIA2hXIhVgbIAshUIhNgbIBNAbIgsBUIBVAbIg2BXIBVAbgAI1CvIApBVIgphVIBVgbIg2hXIBVgaIgshUIBNgcIhNAcIAsBUIhVAaIA2BXIhVAbgAA6maQAxAHAeAQQAIAEAHgFQAHgFgBgJQgHgegXgeQgtg7hTAAQhUAAguA7QgXAegGAeQgCAIAGAGQAHAFAIgDQBJgcBHAAQAbAAAbAEgAEForQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlrorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACPs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhTnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_43.setTransform(0,65.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ACgDdQgdgQgxgIQhhgPhmAnQgHADgHgFQgGgGABgIQAHgeAXgdQAug7BSAAQBUAAAuA7QAXAdAGAeQACAJgHAGQgEACgFAAQgDAAgEgBgAg8CLQgYASgOAcQBKgYBHAEQAzACAtAQQgkhEhVAAQgwAAgiAYgAj9iEQgSgBgVgJQgFgCgCgEQgCgFACgFQADgKALACIACAAQAUAEAKgBQARgCALgGQAPgHAKgKQAGgEAFgGIAJgLQAFgJAKgCQAJgDAIAFQAJAFACAKQADAJgFAJIgDADIgRAQIgQAMQgTAMgSAFQgPAFgSAAIgIAAgADYiLQgRgGgPgMIgOgLIgNgPIgDgFQgDgIADgJQAEgIAIgFQAJgEAIADQAJADADAIIAHALQAEAGAFAEQAIAJANAIQALAGAPACQAJACATgDIACAAQAEgBAEACQAEADAAAEQACAFgDAEQgCAEgFACQgXAHgPAAQgUAAgSgGg");
	this.shape_44.setTransform(-2.3,4.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ALKobIhOAXIAmBYIhXAUIAwBaIhXAWIAjBXAEXIcIALhfIBsAcIAIhnIBxAlIAIhnIBrAYArJoSIBOAWIglBYIBXAUIgvBbIBXAUIgiBXAkJIcIgLhfIhsAcIgIhnIhxAlIgIhnIhrAY");
	this.shape_45.setTransform(-0.7,114);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A96A44").s().p("AGEOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAHAugQAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAJVBHIizhFQgKgDgNABIAAAOQgLALgHASIgCAGQgFgYACgTIgGAEIgEADIAEg0IAEgDQAKgIAOgCIABgBQAPgCAMAFICyBDQBLAfBJgfQBKgdAfhKQAHgSAEgRQAEAsgTAtQgfBJhKAeQgkAPglAAQglAAglgPgArmBHQgvgTgegkQgRgVgMgaQgTgtADgsQAEARAIASQAdBDA/AdIAOAGQBKAeBKgfICxhFIABAAIAPgCIABAJQARALAJAZQAKAYgIAjIgCgGQgNgigcgJIivBGQgmAPglAAQgkAAglgOgAD+n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgXAXgaAUgAlcoTQgwgxghg3QgQgcgMgeQglhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_46.setTransform(0.1,94.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B5764E").s().p("AGERuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIgjgJgYQgKgZgRgLIgBgJIgPABIAAABIiyBFQhKAfhKgeIgNgGQhAgegdhDQgHgRgEgRQgOg8Aag7QAhhLBOgdIEwhtICHgkIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDNAAQDOAACSCSQCRCRAADOIAAAZQgJC+iICJQgvAvg2AgIAzAOIBbAZIAAAAIFYB3QBPAcAhBMQAaA6gNA7QgEASgIARQgeBLhKAeQhKAehKgeIizhFQgLgEgPACIgCAAQgNACgLAIIgEADIgDA2IADgDIAHgEQgDATAFAYQAEARAIAUIAMAbQAHAOAIAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEOQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkRQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgApLEZIAihXIhXgUIAvhbIhXgUIAlhXIhOgWIBOAWIglBXIBXAUIgvBbIBXAUgAIcC7IAjBXIgjhXIBWgWIgvhaIBXgUIgnhXIBPgXIhPAXIAnBXIhXAUIAvBaIhWAWgAA6maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBJgcBHAAQAbAAAcAEgAEEorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlsorQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlDr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACOs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhUnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_47.setTransform(0.1,65.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AK/oPIhQAQIAfBbIhYANIApBeIhYAPIAcBZAEWIQIALheIBsAbIAHhnIByAmIAIhoIBrAYAq+oEIBQAOIgdBcIBZAMIgnBeIBYANIgaBZAkKIQIgLheIhsAbIgIhnIhxAmIgIhoIhrAY");
	this.shape_48.setTransform(-0.6,115.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A96A44").s().p("AGCOFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAIpBVIighNIAAAGQgLALgHASIgCAGQgFgYACgTIgGAEIgEADIAEg0IADgDIABgLQAJgBAHADIAAAAIAEACICsBRQBJAkBLgZQBMgYAlhHQAIgRAGgRQAAAtgWApQglBIhMAZQgfAKgeAAQgsAAgqgWgAq3BhQgwgPghghQgUgUgOgaQgXgpgBgsQAGAQAJARQAjA/BCAYIAOAFQBMAXBHglIClhSIACAYQAGAIAEALQAKAYgIAjIgCgGQgJgWgOgMIiRBJQgsAXguAAQgcAAgdgIgAD8n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAleoTQgwgxghg3QgQgcgNgeQgkhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_49.setTransform(0.3,94.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B5764E").s().p("AGCRuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgSQAHgjgJgYQgEgLgGgIIgCgYIilBSQhHAmhNgXIgOgFQhCgYgjhAQgJgRgFgRQgTg5AUg+QAahPBLgjIEliIIAKgDIAAABIB+giIAzgOQg1ggguguQgwgwggg3IgFgJQg3hhgFh2IAAgZQAAjOCRiRQCSiSDNAAQDOAACSCSQCRCRAADOIAAAZQgIC+iJCJQgvAvg2AgIA0AOIBaAZIAAAAIAGADIAAAHIABgHIFHCOQBMAiAcBPQAVA7gSA7QgFARgJARQgkBHhNAZQhLAYhIgkIithSIgDgBIAAAAQgHgDgJAAIgBAMIgEACIgDA2IADgDIAHgEQgDATAFAYQAEARAIAUIAMAbQAHAOAIAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgxAAQgeAAgfgJgAEMQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkTQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAokElIAahZIhYgNIAnheIhZgMIAdhbIhQgOIBQAOIgdBbIBZAMIgnBeIBYANgAH+DFIAcBZIgchZIBXgPIgoheIBYgNIgfhaIBQgQIhQAQIAfBaIhYANIAoBeIhXAPgAA4maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBKgcBGAAQAcAAAbAEgAECorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAluorQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlFr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACMs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhWnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_50.setTransform(0.3,65.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AK1oGIhRALIAZBdIhZAIIAjBgIhZAJIAXBbAEUIHIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYAq0n2IBSAIIgWBeIBZAEIgfBhIBZAHIgTBbAkLIHIgLhfIhtAcIgHhnIhxAlIgJhnIhqAY");
	this.shape_51.setTransform(-0.5,116.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A96A44").s().p("AF/OFQhRgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgIAMIi1EXQgvBFhRAWQhRAWhMglQhYgrgdheQgPgxAGguQACAUAHAVQAdBeBYArQBMAlBRgWQBRgWAvhFIC1kXQAIgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBRAWQBRAWBLglQBZgqAdhfQAHgVACgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgegIgAqMB2IgCgBQgygKgjgfQgVgTgQgYQgagngFgsQAHAQALAQQAnA8BEATIAOAEQBOARBEgrICJhRIADAiQAIAXgHAiIgCgGQgFgMgGgJIhzBGQgRAKgSAHQggANgjAAQgUAAgVgEgAIDBeIiDhKQgGAJgFAMIgBACIgCAGIgDgTQgLgaAFgrIADgDIAJABIAAABIAGAAICTBRQBGApBMgUQBOgUAphEQAKgQAHgRQgDAtgZAoQgpBFhOAUQgZAHgZAAQgyAAgugcgAD5n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlhoTQgwgxghg3QgQgcgNgeQgkhYAAhmIABgZQAFB2A2BhIAFAJQAhA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_52.setTransform(0.6,94.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B5764E").s().p("AGARuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIghgJgYIgCgjIiJBSQhEArhOgRIgPgEQhDgTgog8QgKgRgHgQQgYg4AQg+QAUhRBHgpIEbieIAXgJIABAHIAAgHIBugeIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDOAAQDNAACSCSQCRCRAADOIAAAZQgJC+iICJQgvAvg2AgIAzAOIBbAZIAAAAIAGADIAAAHIABgHIAIAEIAAAAIE2CfQBKAmAWBRQARA9gVA5QgHAQgJARQgpBFhOAUQhNAThGgoIiThSIgFgBIgBAAIgIgBIgEACQgFAtALAZIADAUIACAIQAEAOAGAPIAMAbIAIAOIAHAMIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEKQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkVQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAoCEvIAThbIhZgHIAghhIhagEIAWheIhRgIIBRAIIgWBeIBaAEIggBhIBZAHgAHkDLIAXBbIgXhbIBZgJIgjhgIBZgIIgZhcIBRgLIhRALIAZBcIhZAIIAjBgIhZAJgAA2maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBJgcBIAAQAaAAAcAEgAEAorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlworQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlHr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACKs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhYnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_53.setTransform(0.5,65.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AKon7IhSAFIASBfIhZAAIAaBjIhYACIAPBdAEUH8IALhfIBsAcIAIhnIBxAlIAIhnIBrAYAqnntIBSACIgOBfIBZgDIgXBkIBZgBIgMBcAkMH8IgKhfIhtAcIgIhnIhwAlIgJhnIhrAY");
	this.shape_54.setTransform(-0.4,117.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A96A44").s().p("AF+OFQhQgWgvhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgOALgHAMIi1EXQgvBFhRAWQhRAWhMglQhZgrgdheQgPgxAGguQADAUAGAVQAdBeBZArQBMAlBRgWQBRgWAvhFIC1kXQAHgMAOgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAvBFBQAWQBSAWBLglQBZgqAdhfQAGgVADgUQAGAugPAxQgdBfhZAqQgvAXgxAAQgeAAgfgIgAHYBmIhihBIgCAEIgBACIgBAGIgDgSIgGgDIABgNQgFgVAEghIADgDIACAAIgBANIB6BPQBCAuBOgNQBPgOAvhCQAKgOAJgQQgHArgcAnQgvBChPAOQgRADgRAAQg7AAgygkgApgCEIgBAAQgzgGglgcQgWgRgSgXQgdgmgIgrQAHAPANAPQAsA6BEANIAPADQBPALBBgwIBXg9IAOAJQAIAXgHAiIgCgGIgFgLIhPBAQgQAMgRAIQgmASgqAAQgOAAgOgCgAD4n1QA2ggAvgvQCJiKAIi+IABAZQAADOiSCSQgYAXgZAUgAlioTQgwgxggg3QgQgcgNgeQgkhYAAhmIAAgZQAGB2A2BhIAFAJQAgA3AwAxQAvAuA0AfIgzAOQgZgTgXgXg");
	this.shape_55.setTransform(0.7,94.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B5764E").s().p("AGARuQhQgVgwhGIi3kbQgKgOgQgLQgYgQgdAAQgdAAgbAXQgOALgHALIi1EXQgvBGhRAVQhRAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgSQAIghgJgYIgOgJIhXA9QhAAwhPgKIgPgDQhFgOgsg5QgMgQgIgPQgcg2ALhAQANhSBEgwIEOiyIAKgEIAAAAIANgFIABAHIAAgHIBugeIAzgOQg0ggguguQgwgwggg3IgGgJQg2hhgFh2IAAgZQAAjOCRiRQCSiSDOAAQDNAACSCSQCRCRAADOIAAAZQgIC+iJCJQgvAvg2AgIAzAOIBbAZIAAAAIAGADIAAAHIABgHIABABIAAAHIABgGIAGADIAAAAIEpC2QBGAtAQBSQAMA+gZA3QgIAQgLAQQguBBhPAOQhOAOhDguIh5hRIABgMIgCAAIgEACQgDAhAFAXIgBAMIAFAEIADASIACAIQAEAOAGAPIAMAbIAFAKIAAADIACAAIABABIADAGIAEAGIDlF5QAmBCgJBHQgDAVgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAEKQAIAMhfIBsAcIAHhnIBxAlIAJhnIBrAYIhrgYIgJBnIhxglIgHBnIhsgcgAkVQAIgLhfIhsAcIgIhnIhxAlIgIhnIhrAYIBrgYIAIBnIBxglIAIBnIBsgcgAndEzIAMhcIhZABIAXhkIhZADIAOhfIhSgCIBSACIgOBfIBZgDIgXBkIBZgBgAHHDRIAQBdIgQhdIBZgCIgbhjIBZAAIgShfIBSgFIhSAFIASBfIhZAAIAbBjIhZACgAA2maQAxAHAdAQQAIAEAIgFQAHgFgCgJQgGgegXgeQgug7hTAAQhTAAguA7QgXAegHAeQgBAIAGAGQAHAFAHgDQBKgcBHAAQAbAAAbAEgAEAorQgSATAAAbQAAAaASATQATATAbAAQAbAAATgTQASgTAAgaQAAgbgSgTQgTgSgbAAQgbAAgTASgAlworQgSATAAAbQAAAaASATQATATAbAAQAaAAATgTQATgTAAgaQAAgbgTgTQgTgSgaAAQgbAAgTASgAlHr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIARgQIADgEQAFgIgDgKQgCgJgJgFQgIgFgJACQgKADgFAIIgJALQgFAHgGAEQgKAJgPAIQgLAGgRABQgKACgUgEIgCgBIgDAAQgIAAgDAIgACKs6QgIAEgEAJQgDAJADAIIADAFIANAOIAOAMQAPALARAGQASAHAUAAQAPAAAXgIQAFgBACgFQADgEgCgFQAAgEgEgCQgEgCgEAAIgCABQgTADgJgCQgPgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgDgIgJgCIgHgBQgFAAgFACgAhYnUQAigYAxAAQBUAAAkBDQgtgPgzgCQhHgEhKAXQAOgcAYgRg");
	this.shape_56.setTransform(0.5,65.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AKanxIhRgBIALBgIhZgGIATBkIhYgFIAIBeAETHzIAMheIBrAcIAIhoIBxAmIAJhnIBrAYAqZniIBSgEIgIBgIBZgJIgQBlIBZgHIgFBcAkMHzIgLheIhtAcIgHhoIhxAmIgJhnIhqAY");
	this.shape_57.setTransform(-0.4,118.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A96A44").s().p("AF+OFQhQgWgwhFIi4kbQgKgPgPgKQgZgRgdAAQgdAAgbAXQgNALgHAMIi1EXQgwBFhRAWQhQAWhMglQhZgrgdheQgPgxAGguQADAUAGAVQAdBeBZArQBMAlBQgWQBRgWAwhFIC1kXQAHgMANgLQAbgXAdAAQAdAAAZARQAPAKAKAPIC4EbQAwBFBQAWQBRAWBLglQBagqAchfQAHgVACgUQAHAugQAxQgcBfhaAqQgvAXgxAAQgeAAgegIgAIoCVQgPAAgPgCIgVgFQglgKghgbIg0hDIgFgBIgCAEIgBACIgCAGIgCgLIgBgHIAAABIgFgRQgEgVAIgXIAUAhIBAAyQBAAzBOgIQBQgIA0g+QALgOAKgPQgKArgfAlQgyA9hOAJIgCAAIgQABIgFAAgAo1CRIgCAAQgzgDgngZQgXgQgUgVQgggjgLgrQAJAOANAPQAwA2BFAJIAQABQBQAFA8g0IBBg4QAIAXgHAiIgBgGIgCgCQgLARggAoQgPANgQAJQgqAZgzAAIgNAAgAD4n1QA1ggAvgvQCJiKAIi+IABAZQAADOiSCSQgXAXgaAUgAlioTQgwgxggg3QgRgcgMgeQgkhYAAhmIAAgZQAFB2A2BhIAGAJQAgA3AwAxQAuAuA0AfIgzAOQgYgTgXgXg");
	this.shape_58.setTransform(0.7,94.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B5764E").s().p("AGARuQhRgVgvhGIi4kbQgKgOgPgLQgZgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBGhRAVQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAJgUADgSQAHghgIgYIhBA4Qg9A0hQgEIgPgCQhFgIgwg2QgNgQgJgOQggg0AGhAQAHhTBAg1ID/jFIAJAAIABAHIAAgJIgJAAIAAAAIALgEIAAAAIANgFIAAAHIAAgHIBvgeIAzgOQg0ggguguQgwgwghg3IgFgJQg2hhgFh2IgBgZQAAjOCSiRQCRiSDPAAQDNAACRCSQCSCRAADOIgBAZQgIC+iJCJQgvAvg1AgIAzAOIBaAZIAAAAIABABIAGACIAAAHIAAgHIACABIAAAHIAAgGIAGADIAAAAIANAIIAAAHIABgHIEODCQBDAyAKBUQAIA+gdA2QgKAPgMAPQgzA+hQAIQhPAHg/gyIhAgzIgUgiQgJAXAFAXIAFAQIAAAAIABAHIACALIACAIQAEAOAGAPIAJAVIADAGIAFAKIAAADIACAAIABABIADAGIAEAGIDkF5QAnBCgKBHQgCAVgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEKQAIALhfIBsAcIAIhnIBxAlIAIhnIBrAYIhrgYIgIBnIhxglIgIBnIhsgcgAkVQAIgLhfIhtAcIgHhnIhxAlIgJhnIhqAYIBqgYIAJBnIBxglIAHBnIBtgcgAm7E3IAFhdIhZAHIAQhlIhZAJIAIhgIhSAEIBSgEIgIBgIBZgJIgQBlIBZgHgAG0ExIgIheIBYAEIgThkIBZAGIgLhgIBSABIhSgBIALBgIhZgGIATBkIhYgEgAA1maQAxAHAeAQQAIAEAHgFQAHgFgBgJQgHgegXgeQgtg7hTAAQhUAAguA7QgXAegGAeQgCAIAGAGQAHAFAIgDQBJgcBIAAQAaAAAbAEgAEAorQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlworQgTATAAAbQAAAaATATQATATAaAAQAbAAATgTQATgTAAgaQAAgbgTgTQgTgSgbAAQgaAAgTASgAlIr/QgCAFACAFQACAFAFACQAVAJASAAQAWACATgHQASgFATgLIAQgMIASgQIACgEQAFgIgCgKQgDgJgIgFQgIgFgKACQgJADgFAIIgJALQgGAHgFAEQgLAJgOAIQgMAGgRABQgKACgUgEIgBgBIgEAAQgIAAgDAIgACKs6QgJAEgDAJQgEAJAEAIIADAFIANAOIAOAMQAOALASAGQARAHAUAAQAQAAAWgIQAFgBADgFQACgEgBgFQgBgEgEgCQgDgCgFAAIgBABQgUADgJgCQgOgDgLgGQgNgIgIgJQgFgEgEgGIgHgLQgEgIgIgCIgHgBQgFAAgFACgAhYnUQAhgYAyAAQBUAAAjBDQgtgPgygCQhIgEhKAXQAPgcAYgRg");
	this.shape_59.setTransform(0.5,65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},24).to({state:[{t:this.shape_44},{t:this.shape_47},{t:this.shape_46},{t:this.shape_37},{t:this.shape_45},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_50},{t:this.shape_37},{t:this.shape_49},{t:this.shape_48},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_53},{t:this.shape_52},{t:this.shape_37},{t:this.shape_51},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_56},{t:this.shape_55},{t:this.shape_37},{t:this.shape_54},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_56},{t:this.shape_55},{t:this.shape_37},{t:this.shape_54},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_59},{t:this.shape_58},{t:this.shape_37},{t:this.shape_57},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},2).to({state:[{t:this.shape_44},{t:this.shape_59},{t:this.shape_58},{t:this.shape_37},{t:this.shape_57},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1}]},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-48.6,178,234);


(lib.cookie_man_happy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// eyes
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-5.3,1,1,0,0,0,23.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibALQgRgVgLgbIgIgXQgBgMAIgFQAJgHAJAFIAaALQAgAMAlAGQB1ASB7gwQAKgDAHAGQAHAGgBALQgIAkgcAjQg4BHhkAAQhkAAg3hHgAhhAUQAoAcA5AAQA7AAApgeQAegUAQgiQhZAdhWgFQg9gCg2gTQARAhAeAUg");
	this.shape.setTransform(-0.1,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBMQgagEgRgDQgSgEgTgKQgUgKgYgbQgYgagHgMIgKgPQgDgDgDgJIgEgPQgBgFAJgGQAIgGAKAFIAZALQAhALAlAGQB1ASB6gvQAKgEAHAHQAIAGgCAKQgCAJgIAQQgIAQgkAoQgkAogvAHQgfAFgVAAIgTgBgAhiANQATAQAYAHQAXAIAxgCQAzgBAdgTQAcgUAWghQhZAchWgEQgVgBgTgCQgogGgkgMQAbAbATAOg");
	this.shape_1.setTransform(-0.2,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4A4QgwgIgWgOQgXgPgHgHQgIgHgHgMIgKgPQgDgDgDgJIgEgPQgBgFAJgGQAIgGAKAFIAZALQAhALAlAGQB1ASB6gvQAKgEAHAHQAIAGgCAKQgCAJgHAOQgHAPgRAQQgSASgtASQguARgdAAQgcAAgxgIgAhdARQAWAHAEACQAEADA1AEQA0AEAlgOQAkgOAggbQhZAbhWgEQgVgBgTgCQgogFgkgMQAcAZAXAHg");
	this.shape_2.setTransform(-0.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape}]},3).wait(7));

	// body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1C249").s().p("AAYBnQhdgmgTg1IAAgiQAJgRAUgSQAogmA2gJQANgCALAGQALAGAFAMQAeBRglBVQgFANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape_3.setTransform(12.1,45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1C249").s().p("AgxBnQgNgGgGgNQgVgyACgwQABgkAMggQAFgMALgGQALgGAMACQA3AJAoAmQAUASAJARIAAAiQgTA1hdAmQgGADgHAAQgHAAgGgDg");
	this.shape_4.setTransform(-12.6,45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1C249").s().p("AgsAtQgTgSAAgbQAAgaATgTQASgSAaAAQAaAAAUASQASATAAAaQAAAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape_5.setTransform(-0.5,45.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAaAAAUASQASAUAAAZQAAAbgSASQgUATgaAAQgZAAgUgTg");
	this.shape_6.setTransform(0.3,106.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_7.setTransform(0.3,60.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_8.setTransform(0.3,83.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5AnIgBgBQgKgPgKgHQgNgJgOgEQgNgDgQgBIgdACQgJADgJgEQgIgDgDgKQgDgJAEgJQAEgJAKgDIAEgBIAYAAIAUACQAWAFAQAHQARAIAQAQQALAJAMAXQACAFgCAFQgBAFgFACQgDACgDAAQgGAAgEgGg");
	this.shape_9.setTransform(19.3,-23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKAqQgJgGAFgKQAMgXALgJQAQgQARgIQAQgHAWgFIAUgCIAKAAIANAAQAKABAGAIQAGAIgBAJQAAAKgIAGQgIAFgJgBIgFgBIgdgCQgQABgNADQgOAEgNAJQgKAHgKAPIgBABQgDAFgFABIgCAAQgEAAgEgDg");
	this.shape_10.setTransform(-19,-23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArQodIBMAcIgsBVIBVAaIg1BXIBUAbIgpBVAkIInIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALRomIhMAcIAsBVIhVAaIA1BXIhUAbIApBVAEXInIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_11.setTransform(-0.3,108.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E66D76").s().p("AELAtQgTgSAAgbQAAgaATgSQATgUAaABQAbgBATAUQATASAAAaQAAAbgTASQgTATgbAAQgaAAgTgTgAllAtQgTgSAAgbQAAgaATgSQATgUAbABQAagBATAUQATASAAAaQAAAbgTASQgTATgaAAQgbAAgTgTg");
	this.shape_12.setTransform(-0.1,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5764E").s().p("AGFRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgdAAQgcAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgRQAIgjgKgZQgOglgfgIIgcAAIi3A5QhMAZhIgjQhHgkgahMQgGgSgDgSQgIg8Adg4QAnhJBQgXIG/h4IAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQB2h2CegWQAlgGAmAAQDOAACRCSQATATAQATQBvCGAAC0IgBAYQgIC/iJCIQgvAvg1AgIAzAOIG6B3QBQAXAnBJQAdA5gJA7QgCASgGASQgaBMhHAkQhIAjhMgZIi3g5IAAAAQgNgDgPADQgfAIgOAlQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkQP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAptEMIAphUIhUgcIA1hXIhVgaIAshUIhMgbIBMAbIgsBUIBVAaIg1BXIBUAcgAI1CvIApBUIgphUIBUgbIg1hXIBVgbIgshUIBMgbIhMAbIAsBUIhVAbIA1BXIhUAbgAEFoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlroqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_13.setTransform(0.5,60.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A96A44").s().p("AGFOEQhRgWgvhFIi4kbQgegpgxAAQgcAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAcAAQAdAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAJ6A3Ii3g4IAAAAQgNgDgPADQgfAHgOAlIgCAGQgIgjAKgYQAOglAfgIQAPgDANADIAAAAIC3A4QBMAZBIgiQBHgkAahMQAGgSACgSQAHAsgPAuQgaBLhHAkQgqAVgsAAQgeAAgggLgAsNAtQhHgkgahLQgPguAGgsQADASAGASQAaBMBHAkQBIAiBMgZIC3g4IAcAAQAfAIAOAlQAKAYgIAjIgCgGQgOglgfgHIgcAAIi3A4QgfALgfAAQgsAAgqgVgAD/n2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlboUQgtgtggg0IgGgKQg/htAAiIIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_14.setTransform(0.5,89.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArWouIBKAiIgzBRIBSAhIg9BSIBRAjIgvBRAkGIxIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALXowIhLAhIAyBSIhTAgIA7BTIhSAhIAvBSAEZIxIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_15.setTransform(-0.5,107.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A96A44").s().p("AGIOEQhRgWgvhFIi4kbQgegpgxAAQgcAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgPgxAGgvQACAVAHAVQAdBeBYArQBMAkBRgWQBRgWAvhFIC1kXQAIgLANgLQAbgXAcAAQAeAAAYAQQAPAKAKAPIADAEIC1EXQAvBFBRAWQBRAWBMgkQBZgrAdheQAGgVADgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgfgJgAF9gKQAJgVANgLIgBAAIABgBIAKgGIAigKIgGgBQAfACAIABIAAAAIC7AsQBNATBFgoQBFgpAUhNQAFgTACgRQAJArgMAvQgUBNhFAoQhFAohOgTIi6grIAAAAQgKgCgrAEIAAAAIgEAAQgHABgHADQgUAMgMAcIgCAGQgHgjAJgYgAl1ArQgKgbgTgLIg3gKIgeAAIi6AoQhOAShFgpQhEgqgShNQgMgwALgrQABASAEATQATBOBEAqQBEApBPgSIC6gpIAdAAQAFgCAhAHIAAAAQAdAJANAjQAKAYgIAjIgCgGgAECn2QA2gfAvgwQAegeAYghQAdgnATgrQAnhUAEhiIAAAYQAABUgYBKQgWBGgtA9QgYAhgeAeQgYAYgZAUgAlXoUQiSiSAAjOIAAgYQAJC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_16.setTransform(0.2,89.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5764E").s().p("AGIRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgRQAHgjgKgZQgNgjgdgJIAAAAQgggHgFACIgdAAIi7ApQhOAShEgpQhFgqgShOQgFgTgBgSQgDg8Aig1QAthFBSgQIFOg8IAAAAIB4ggIAygOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgEBigmBUQgUArgcAnQgYAhgfAeQgvAvg1AgIAzAOIB3AgIAAgEIACAAIAAAFIFEBAQBSARArBHQAiA2gFA8QgCARgEATQgVBNhFApQhEAphOgUIi6gsIgBAAQgIgBgegCIAGABIgjAKIgJAGIgBABIAAAAQgNALgIAVQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAESP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkNP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAqPD5IAvhQIhRgjIA9hSIhSghIAzhQIhKgiIBKAiIgzBQIBSAhIg9BSIBRAjgAJNClIAvBRIgvhRIBSghIg7hTIBTghIgyhQIBLghIhLAhIAyBQIhTAhIA7BTIhSAhgAEIoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlooqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_17.setTransform(0.2,60.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("Arbo5IBHAnIg4BNIBRAmIhCBOIBPAoIg1BOAkHI6IgLheIhsAcIgIhoIhxAmIgIhnIhrAYALco3IhJAkIA3BPIhSAlIA+BQIhPAkIAxBQAEYI6IALheIBsAcIAIhoIBxAmIAJhnIBqAY");
	this.shape_18.setTransform(-0.4,106.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A96A44").s().p("AGJOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAF6ArQgEgYAEgSIADgKIABgBQAJgXAQgMQA5gLALgEQAOgFANACIABAAIC8AjQBOAQBDgsQBDgsARhOQADgTABgRQAMAqgKAwQgRBOhCAsQhDArhPgQIi8giIAAAAQgNgCgcAAQgbgBgiAUQgQAMgJAXIgBABIgBAFIgCgGgAl1ArQgLgdgWgLIAAAAQhDgYgIAFIjdAhQhPAOhCgtQhCgugOhPQgIgwANgqQAAASADATQAOBPBCAuQBCAtBPgOIC9gdQAagBAFABQANgCA3ARIAAAAQAWALALAdQAKAYgHAjIgDgGgAEDn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgXAYgaAUgAlXoUQiSiSAAjOIABgYQAIC/CJCIQAuAvA0AfIgyAOQgZgUgXgXg");
	this.shape_19.setTransform(0.1,89.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5764E").s().p("AGIRuQhRgWgvhFIi1kXIgDgEQgLgPgOgKQgYgQgeAAQgcAAgbAXQgNALgJALIi0EXQgvBFhRAWQhRAWhMgkQhYgrgeheQgGgVgDgVQgJhHAnhCIDkl5QAPgXAMgeQAIgUAEgRQAHgjgJgZQgMgegWgKIAAAAQg3gRgNACQgFgBgaABIi9AdQhPAOhCgtQhCgugOhPQgDgTABgSQgBg8AmgzQAxhDBTgLIFagoIAAgBIBvgdIAygOQgzgggvguQiJiIgIi/IgBgYQABjOCRiSQCSiSDNAAQDOAACSCSQCRCSAADOIAAAYQgJC/iICIQgwAvg1AgIAzAOIBhAaIAAAAIFiA0QBTAOAuBEQAkA1gCA8QAAARgEATQgQBOhDAsQhDAshPgQIi8gjIgBAAQgNgCgOAFQgLAEg5ALQgQALgJAYIAAABIgDALQgEASAEAYIABAGIACAHQADAPAHAPIACAHIABACIAMAYIACAFIAKAPIDkF5QAnBCgJBIQgDAUgGAVQgdBehZArQgwAXgxAAQgeAAgegJgAESP/IALheIBsAcIAIhoIBxAmIAJhnIBqAYIhqgYIgJBnIhxgmIgIBoIhsgcgAkMP/IgLheIhtAcIgHhoIhxAmIgJhnIhrAYIBrgYIAJBnIBxgmIAHBoIBtgcgAJgCZIAzBQIgzhQIBQgkIg+hQIBRglIg2hOIBIgkIhIAkIA2BOIhRAlIA+BQIhQAkgAqoDpIA1hOIhQgoIBChOIhRglIA5hNIhHgnIBHAnIg5BNIBRAlIhCBOIBQAogAEIoqQgTATABAaQgBAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATgAlnoqQgTATAAAaQAAAbATATQASATAbAAQAaAAAUgTQASgTABgbQgBgagSgTQgUgTgaAAQgbAAgSATg");
	this.shape_20.setTransform(0.2,60.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArbpCIBFAsIg9BJIBNAsIhHBJIBMAtIg6BKAkDJHIgLheIhtAbIgHhnIhxAmIgJhnIhrAYALcpGIhGAqIA8BLIhPAqIBFBLIhNAqIA4BMAEcJHIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_21.setTransform(-0.7,104.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A96A44").s().p("AGMOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAGBgKQAJgXAQgMQAzgfAbAAIAnABIAAAAIC/AVQBQAKA/gwQA/gxALhPQADgTgBgSQAPAqgHAwQgKBPhAAxQg/AvhPgJIi/gVIgBAAIgngCQgbgCg9AiQgQAMgJAXIgCAGQgIgjAKgYgAlyArQgNgjgcgIQhCgZhBAHIi+AQQhQAHg/gxQg+gzgIhPQgFgxAQgpQgBASABATQAJBQA+AyQA+AyBQgIIC1gPQA7gHBGAXQAcAJANAjQAKAYgHAjIgDgGgAEGn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlUoUQgpgpgegvIAAgOIgJAAQhChvAAiLIABgYQAHCgBiB7IgCgGIAJACIgCAJQAQAVATASQAuAvA0AfIgyAOQgZgUgXgXg");
	this.shape_22.setTransform(-0.2,89.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5764E").s().p("AGLRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgRQAHgjgKgZQgNgjgcgJQhGgXg7AHIi1APQhQAIg+gyQg+gygJhQQgBgTABgSQAEg7ApgxQA2g/BTgGIFUgPIABAaIAAgaIB3ggIAygOQgzgggvguQgTgTgQgUIACgJIgJgCIACAGQhih7gHigIgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIBaAYIAAgBIFlAaQBTAHAzBBQAoAyADA7QABASgDATQgLBPg/AxQg/AwhQgKIi/gVIAAAAIgngBQgbAAgzAfQgQALgJAYQgKAZAIAjQAEARAHAUIAJATQAIATAKAPIDlF5QAnBCgKBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEVP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkKP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgArCDWIA6hJIhMgtIBIhKIhOgqIA+hKIhFgsIBFAsIg+BKIBOAqIhIBKIBMAtgAJ0CGIA4BLIg4hLIBNgrIhFhLIBPgpIg8hLIBGgpIhGApIA8BLIhPApIBFBLIhNArgAELoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlloqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_23.setTransform(-0.1,60.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArapPIBBAxIhDBEIBKAyIhMBDIBIAzIhABFAkKJRIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALfpQIhDAvIBBBGIhLAwIBJBGIhJAwIA9BHAEVJRIALheIBsAbIAIhnIBxAmIAJhnIBqAY");
	this.shape_24.setTransform(-0.1,103.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A96A44").s().p("AGEOEQhRgWgvhFIi4kbQgegpgwAAQgdAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgQgxAHgvQACAVAHAVQAdBeBYArQBMAkBRgWQBRgWAvhFIC1kXQAIgLANgLQAbgXAdAAQAdAAAYAQQAPAKAKAPIADAEIC1EXQAvBFBRAWQBRAWBMgkQBZgrAdheQAGgVADgUQAGAugPAxQgdBehZArQgwAXgxAAQgeAAgegJgAF5gKQAJgWAUgMQAsgYAugHQAugGANgBIDAAIQBQAFA8g1QA8g2AEhPQACgUgCgRQASAogEAwQgEBQg8A2Qg8A1hQgFIjAgHIhEgEQg3gDguAtQgOAMgJAWIgCAGQgIgjAKgYgAl5ArQgOglgfgHQhKgfhOAFIjAABQhQACg6g3Qg6g4gChQQgCgwAUgoQgDARAAAUQADBQA6A3QA6A3BQgCIC/gBQBQgEBDAjIAAAAIAIABQARAMAKAZQAJAYgHAjIgCgGgAmcgwIAAgDIAIAEgAD+n2QA1gfAwgwQCIiIAJi/IAAAYQAADOiRCSQgYAYgaAUgAlboUQiSiSAAjOIAAgYQAIC/CKCIQAuAvA0AfIgzAOQgZgUgWgXg");
	this.shape_25.setTransform(0.6,89.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B5764E").s().p("AGDRuQhRgWgvhFIi1kXIgDgEQgKgPgPgKQgYgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAIgUAEgRQAHgjgJgZQgKgZgRgMIgIgBIAIABIgIgEIAAADIAAAAQhDgjhQAEIi/ABQhQACg6g3Qg6g3gDhQQAAgUADgQQAJg8AsgtQA7g7BUABIFIALIAAgCIB6ggIAzgOQg0ggguguQiKiIgIi/IAAgYQAAjOCSiSQCRiSDNAAQDOAACSCSQCRCSAADOIAAAYQgJC/iICIQgvAvg2AgIAzAOIBfAaIABAsIAAgsIFoAAQBTABA4A9QAsAwAHA8QACAQgCAUQgEBPg8A2Qg8A1hQgFIjAgIQgNABguAGQgtAGgtAZQgUAMgJAWQgKAZAIAjQAEARAIAUIADAIIAIASQAHAPAJAMIDkF5QAnBCgJBIQgDAUgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAENP/IALheIBtAcIAHhoIBxAmIAJhnIBqAYIhqgYIgJBnIhxgmIgHBoIhtgcgAkRP/IgLheIhtAcIgHhoIhxAmIgJhnIhrAYIBrgYIAJBnIBxgmIAHBoIBtgcgArdDBIA/hFIhIgzIBMhEIhJgxIBChEIhBgxIBBAxIhCBEIBJAxIhMBEIBIAzgAKKB4IA9BIIg9hIIBKgwIhKhGIBLguIhBhHIBDguIhDAuIBBBHIhLAuIBKBGIhKAwgAEDoqQgSATAAAaQAAAbASATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATgAlsoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAmdDvg");
	this.shape_26.setTransform(0.7,60.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArQpcIA8A3IhJA9IBEA5IhSA8IBDA6IhGA+Aj5JdIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALvpDIhDAuIBBBHIhLAvIBJBGIhKAxIA9BHAEmJdIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_27.setTransform(-1.8,102.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A96A44").s().p("AGTOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAGIgKQAJgXAPgMIAAAAQAngpAyACIBAADIDAAIQBPAEA8g0QA8g2AFhQQABgTgBgRQASAogEAwQgFBQg8A2Qg8A0hPgEIjAgIQgNAAhBgIQg1gHgaAjQgaAegIAWIgDAGQgHgjAKgYgAlrArQgLgegXgLIgLgDQgMgLgMgEQhPgThhgEIi/gRQhQgGg0g8Qg1g8AGhRQADgwAXgmQgEASgCATQgFBQA0A8QA1A8BQAHIC+AQQBZADBKAZIARAGIALAEQAXALALAeQAKAYgIAjIgCgGgAENn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlNoUQiSiSAAjOIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_28.setTransform(-0.9,89.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B5764E").s().p("AGQRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAHgUAEgRQAIgjgKgZQgLgegXgLIgLgEIgRgGQhKgZhZgDIi+gQQhQgHg1g8Qg0g8AFhPQACgTAEgSQAPg6AxgqQBAg0BSAJIFFAmICDgjIAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIBgAaIAAAAIFnABQBTACA4A9QAsAvAHA8QABAQgBATQgFBQg8A2Qg8A0hPgEIjAgIIhAgDQgygCgnApIAAAAQgPAMgJAXQgKAZAHAjQADANAGAPIADAJQAMAeAPAXIDlF5QAmBCgJBIQgDAUgGAVQgdBehZArQgvAXgxAAQgeAAgegJgAEaP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkFP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAKVB5IA9BHIg9hHIBKgwIhJhGIBLgvIhBhGIBDgvIhDAvIBBBGIhLAvIBJBGIhKAwgAr6CnIBGg/IhDg6IBSg7IhEg4IBJg+Ig8g2IA8A2IhJA+IBEA4IhSA7IBDA6gAEQoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlgoqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_29.setTransform(-0.6,60.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B5764E").s().p("AGDRuQhRgWgvhFIi1kXIgDgEQgKgPgPgKQgYgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAIgUAEgRQAHgjgJgZQgKgZgRgMIgIgBIAIABIgIgEIAAADIAAAAQhDgjhQAEIi/ABQhQACg6g3Qg6g3gDhQQAAgUADgQQAJg8AsgtQA7g7BUABIFIALIAAgCIB6ggIAzgOQg0ggguguQiKiIgIi/IAAgYQAAjOCSiSQCRiSDNAAQDOAACSCSQCRCSAADOIAAAYQgJC/iICIQgvAvg2AgIAzAOIBfAaIABAsIAAgsIFoAAQBTABA4A9QAsAwAHA8QACAQgCAUQgEBPg8A2Qg8A1hQgFIjAgIQgNABguAGQgtAGgtAZQgUAMgJAWQgKAZAIAjQAEARAIAUIADAIIAIASQAHAPAJAMIDkF5QAnBCgJBIQgDAUgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAENP/IALheIBtAcIAHhoIBxAmIAJhnIBqAYIhqgYIgJBnIhxgmIgHBoIhtgcgAkRP/IgLheIhtAcIgHhoIhxAmIgJhnIhrAYIBrgYIAJBnIBxgmIAHBoIBtgcgArdDBIA/hFIhIgzIBMhEIhJgxIBChEIhBgxIBBAxIhCBEIBJAxIhMBEIBIAzgAKKB4IA9BIIg9hIIBKgwIhKhGIBLguIhBhHIBDguIhDAuIBBBHIhLAuIBKBGIhKAwgAEDoqQgSATAAAaQAAAbASATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATgAlsoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
	this.shape_30.setTransform(0.7,60.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B5764E").s().p("AGFRuIgVgGQhCgZgpg8Ii1kXIgDgEQgLgPgPgKQgYgQgdAAQgcAAgbAXQgOALgIALIi1EXQgpA8hCAZIgVAGQhGAUhEgaIgSgIQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgRQAIgjgKgZQgOglgfgIIgcAAIi3A5QhMAZhIgjQhHgkgahMQgGgSgDgSQgIg8Adg4QAnhJBQgXIG/h4IAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIG6B3QBQAXAnBJQAdA5gJA7QgCASgGASQgaBMhHAkQhIAjhMgZIi3g5IAAAAQgNgDgPADQgfAIgOAlQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArIgSAIQgmAPgoAAQgeAAgegJgAEPP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkQP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAptEMIAphUIhUgcIA1hXIhVgaIAshUIhMgbIBMAbIgsBUIBVAaIg1BXIBUAcgAI1CvIApBUIgphUIBUgbIg1hXIBVgbIgshUIBMgbIhMAbIAsBUIhVAbIA1BXIhUAbgAEFoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlroqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_31.setTransform(0.5,60.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A96A44").s().p("AGFOEQg+gQgpgsQgOgOgLgRIi4kbQgegpgxAAQgcAAgbAXQgOALgIALIi1EXQgLARgOAOQgpAsg+AQQhRAWhLgkQgmgSgbgcQgkglgRg2QgPgxAGgvQADAVAGAVQAdBeBZArIASAIQBEAaBGgUIAVgGQBCgZApg8IC1kXQAIgLAOgLQAbgXAcAAQAdAAAYAQQAPAKALAPIADAEIC1EXQApA8BCAZIAVAGQBHAUBDgaIASgIQBZgrAdheQAHgVACgUQAGAugPAxQgQA2glAlQgbAcgmASQgvAXgxAAQgeAAgegJgAJ6A3Ii3g4IAAAAQgNgDgPADQgfAHgOAlIgCAGQgIgjAKgYQAOglAfgIQAPgDANADIAAAAIC3A4QBMAZBIgiQBHgkAahMQAGgSACgSQAHAsgPAuQgaBLhHAkQgqAVgsAAQgeAAgggLgAsNAtQhHgkgahLQgPguAGgsQADASAGASQAaBMBHAkQBIAiBMgZIC3g4IAcAAQAfAIAOAlQAKAYgIAjIgCgGQgOglgfgHIgcAAIi3A4QgfALgfAAQgsAAgqgVgAD/n2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlboUQgtgtggg0IgGgKQg/htAAiIIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_32.setTransform(0.5,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_12},{t:this.shape_15},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_12},{t:this.shape_18},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_12},{t:this.shape_21},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_12},{t:this.shape_24},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_12},{t:this.shape_27},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_30},{t:this.shape_25},{t:this.shape_12},{t:this.shape_24},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_12},{t:this.shape_21},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_12},{t:this.shape_18},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_12},{t:this.shape_15},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-53.4,177.9,234);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחרו נושא, 0, גוף האדם, 1, חיות, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(0,0,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.mycb).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-50.5,-11.5,101,23), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snow();
	this.instance.parent = this;
	this.instance.setTransform(445.6,320.9,1,1,0,0,0,7.9,7.9);

	this.instance_1 = new lib.snow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-259,336.7,1,1,0,0,0,7.9,7.9);

	this.instance_2 = new lib.snow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.2,162.3,1,1,0,0,0,7.9,7.9);

	this.instance_3 = new lib.snow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,162.3,1,1,0,0,0,7.9,7.9);

	this.instance_4 = new lib.snow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-489.8,238.9,1,1,0,0,0,7.9,7.9);

	this.instance_5 = new lib.snow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-251.9,116.9,1,1,0,0,0,7.9,7.9);

	this.instance_6 = new lib.snow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(252.1,29.3,1,1,0,0,0,7.9,7.9);

	this.instance_7 = new lib.snow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(513.1,-60.5,1,1,0,0,0,7.9,7.9);

	this.instance_8 = new lib.snow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(358.9,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_9 = new lib.snow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(99.8,-175.4,1,1,0,0,0,7.9,7.9);

	this.instance_10 = new lib.snow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.3,-300.4,1,1,0,0,0,7.9,7.9);

	this.instance_11 = new lib.snow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-159.2,-102.8,1,1,0,0,0,7.9,7.9);

	this.instance_12 = new lib.snow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-517,-65.5,1,1,0,0,0,7.9,7.9);

	this.instance_13 = new lib.snow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-359.8,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_14 = new lib.snow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-521.1,-336.6,1,1,0,0,0,7.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,-344.5,1058.1,689.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snow();
	this.instance.parent = this;
	this.instance.setTransform(445.5,320.8,1,1,0,0,0,7.9,7.9);

	this.instance_1 = new lib.snow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-259,336.6,1,1,0,0,0,7.9,7.9);

	this.instance_2 = new lib.snow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.1,162.2,1,1,0,0,0,7.9,7.9);

	this.instance_3 = new lib.snow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,162.2,1,1,0,0,0,7.9,7.9);

	this.instance_4 = new lib.snow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-489.9,238.8,1,1,0,0,0,7.9,7.9);

	this.instance_5 = new lib.snow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-252,116.9,1,1,0,0,0,7.9,7.9);

	this.instance_6 = new lib.snow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(252,29.2,1,1,0,0,0,7.9,7.9);

	this.instance_7 = new lib.snow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(513.1,-60.5,1,1,0,0,0,7.9,7.9);

	this.instance_8 = new lib.snow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(358.8,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_9 = new lib.snow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(99.8,-175.5,1,1,0,0,0,7.9,7.9);

	this.instance_10 = new lib.snow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.4,-300.4,1,1,0,0,0,7.9,7.9);

	this.instance_11 = new lib.snow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-159.3,-102.9,1,1,0,0,0,7.9,7.9);

	this.instance_12 = new lib.snow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-517.1,-65.6,1,1,0,0,0,7.9,7.9);

	this.instance_13 = new lib.snow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-359.9,-236.9,1,1,0,0,0,7.9,7.9);

	this.instance_14 = new lib.snow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-521.1,-336.6,1,1,0,0,0,7.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,-344.5,1058.1,689.1);


(lib.time_out_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// burnt_cookie
	this.instance = new lib.smoke();
	this.instance.parent = this;
	this.instance.setTransform(69.7,-54.3,1,1,0,0,0,-2.5,-21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3C3C").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgIAGgGQAEgHAIgCIAIABQAJAAAHgGQAGgGABgJQACAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAJAAAHgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAHgGQAGgGACgJQABAJAHAGQAHAGAIAAQAKAAAGgGQAIgGAAgJQABAJAIAGQAGAGAKAAQAIAAAHgGQAHgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAGAGAKAAQAJAAAGgGQAIgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAGAGQAHAGAJAAQAJAAAGgGQAHgGABgJQACAJAGAGQAHAGAJAAQAJAAAHgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAGgGQAIgGAAgJQACAJAHAGQAGAGAKAAQAJAAAHgGQAGgGABgJQACAJAGAGQAHAGAJAAQAKAAAGgGQAHgGABgJQABAJAIAGQAGAGAJAAQAKAAAGgGQAHgGABgJQABAJAHAGQAHAGAJAAQAJAAAHgGQAGgGACgJQABAJAHAGQAGAGAJAAQAKAAAHgGQAGgGACgJQAAAJAIAGQAGAGAJAAQAKAAAGgGQAHgGACgJQAAAJAIAGQAGAGAJAAQAKAAAIgHQAGgHAAgKQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJAAAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgIgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgJgFgHQgHgHgJgBIAAgCQAJgBAHgHQAFgGAAgKQAAgJgFgHQgHgHgJgBIAAgBQAJgBAHgHQAFgHAAgJQAAgKgFgGQgHgHgJgBIAAgCQAJgBAHgHQAFgHAAgJQAAgDgCgFQACgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape.setTransform(71.5,74,2.096,2.096);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606060").s().p("AHNE9QgHgHgBgIQAAAJgIAGQgGAGgKAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgKAAgGgGQgIgHAAgIQgBAJgIAGQgHAGgJAAQgIAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGgBgJQgBAJgHAGQgGAGgKAAQgIAAgHgGQgIgHAAgIQgCAJgGAGQgIAGgJAAQgJAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgIAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgGgGQgIgGAAgJQgCAJgGAGQgIAGgJAAQgJAAgHgGQgGgHgCgIQgBAJgGAGQgIAGgIAAQgKAAgGgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgHgBgIQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgIgGQgGgHgCgIQAAAJgIAGQgHAGgIAAQgJAAgHgGQgHgGgBgJQgCAJgGAGQgHAGgJAAQgJAAgHgGQgHgGgBgJQgBAJgHAGQgHAGgJAAQgJAAgHgGQgGgGgCgJQgBAJgHAGQgHAGgIAAQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgJAIgIQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgCQgLAAgGgHQgIgHAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgIAAgKQAAgKAIgHQAGgHALAAIAAgBQgLAAgGgHQgIgHAAgKIAAgCQAAgKAIgHQAGgHALAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGACAJQABgJAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAJQACgJAGgGQAIgGAJAAQAJAAAHAGQAGAGACAJQABgJAGgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAKAAQAJAAAHAGQAGAGABAJQACgJAGgGQAHgGAJAAQAJAAAIAGQAGAGACAJQAAgJAIgGQAGgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAIAAQAJAAAHAGQAGAGACAJQABgJAHgGQAGgGAJAAQAKAAAHAGQAGAGACAJQAAgJAIgGQAHgGAIAAQAKAAAGAGQAHAGABAJQABgJAIgGQAGgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGABAJQAAgJAIgGQAGgGAKAAQAIAAAHAGQAHAGABAJQACgJAGgGQAHgGAJAAQAKAAAGAGQAHAGABAJQABgJAHgGQAHgGAJAAQAJAAAHAGQAHAGABAJQABgJAHgGQAHgGAIAAQAKAAAGAGQAIAGAAAJQABgJAHgGQAIgGAJAAQAKAAAHAHQAGAHAAAKIAAACQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAJQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAGQgHAHgJABIAAACQAJABAHAHQAFAHAAAJQAAAJgFAHQgHAHgJABIAAACQAJABAHAHQAFAGAAAKQAAAJgFAHQgHAHgJABIAAABQAJABAHAHQAFAHAAAJQAAAKgGAIQgHAHgKAAQgJAAgIgGg");
	this.shape_1.setTransform(71.5,74,2.096,2.096);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(48));

	// background
	this.text = new cjs.Text("אוי לא...\nהעוגיה נשרפה ", "bold 28px 'Segoe UI'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 611;
	this.text.parent = this;
	this.text.setTransform(71.4,-264.7);

	this.instance_1 = new lib.light_blue_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-317.7,1033,660);


(lib.screen_snow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snow4
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-61.5,-718.5);

	this.instance_10 = new lib.Tween7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-20.9,-167.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,x:-20.9,y:-167.9},71).wait(1));

	// snow3
	this.instance_11 = new lib.Tween6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(172.9,15.5);

	this.instance_12 = new lib.Tween7("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(274.4,741.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,x:274.4,y:741.9},71).wait(1));

	// snow2
	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(54.7,-757.8);

	this.instance_14 = new lib.Tween7("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-20.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,x:-20.9,y:15.5},71).wait(1));

	// snow1
	this.instance_15 = new lib.Tween6("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-18.1,-15.4);

	this.instance_16 = new lib.Tween7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(6.6,704.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},71).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true,x:6.6,y:704.5},71).wait(1));

	// background
	this.instance_17 = new lib.startpage();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-1102.4,1341.9,1462.4);


(lib.pause_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(3.6,-66.9,1.46,1.46,0,0,0,23.9,6.4);

	this.instance_1 = new lib.cookie_man_pause();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.9,34,1.498,1.498,0,0,0,2,84.4);

	this.text = new cjs.Text("הפסקת שוקו", "bold 32px 'Segoe UI'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 245;
	this.text.parent = this;
	this.text.setTransform(2.8,-230.7);

	this.instance_2 = new lib.light_blue_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.5,-320,1033,660);


(lib.final_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("הבית שלי שוב בנוי!", "bold 26px 'Segoe UI'", "#8C5B3C");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 356;
	this.text.parent = this;
	this.text.setTransform(-17.8,-182.9);

	this.mistakesTXT = new cjs.Text("מספר שגיאות: 5", "bold 16px 'Segoe UI'", "#8C5B3C");
	this.mistakesTXT.name = "mistakesTXT";
	this.mistakesTXT.textAlign = "center";
	this.mistakesTXT.lineHeight = 23;
	this.mistakesTXT.lineWidth = 266;
	this.mistakesTXT.parent = this;
	this.mistakesTXT.setTransform(-175.4,84.5);

	this.timeTXT = new cjs.Text("זמן מענה: 38 שניות", "bold 16px 'Segoe UI'", "#8C5B3C");
	this.timeTXT.name = "timeTXT";
	this.timeTXT.textAlign = "center";
	this.timeTXT.lineHeight = 23;
	this.timeTXT.lineWidth = 261;
	this.timeTXT.parent = this;
	this.timeTXT.setTransform(137.3,84.5);

	this.scoreTXT = new cjs.Text("ציון: 95", "bold 24px 'Segoe UI'", "#8C5B3C");
	this.scoreTXT.name = "scoreTXT";
	this.scoreTXT.textAlign = "center";
	this.scoreTXT.lineHeight = 34;
	this.scoreTXT.lineWidth = 239;
	this.scoreTXT.parent = this;
	this.scoreTXT.setTransform(-19.2,-20.2);

	this.text_1 = new cjs.Text("איזה כיף!", "bold 26px 'Segoe UI'", "#8C5B3C");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 355;
	this.text_1.parent = this;
	this.text_1.setTransform(-17.8,-234.7);

	this.instance = new lib.house_fullcopy();
	this.instance.parent = this;
	this.instance.setTransform(15.3,-25.7,0.273,0.272,0,0,0,127.5,121.2);

	this.instance_1 = new lib.house_fullcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.1,75,0.195,0.195,0,0,0,128.7,121.3);

	this.instance_2 = new lib.house_fullcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150.7,75,0.195,0.195,0,0,0,128.2,121.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8F8").s().p("EgoCAspQi7AAiEidQiDicAAjeMAAAhIjQAAjeCDidQCEicC7AAMBQGAAAQC6AACECcQCDCdAADeMAAABIjQAADeiDCcQiECdi6AAg");
	this.shape.setTransform(-19.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.scoreTXT},{t:this.timeTXT},{t:this.mistakesTXT},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.final_bg, new cjs.Rectangle(-320.4,-277.6,602.6,571.4), null);


(lib.house_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laye_symbol
	this.instance = new lib.house_eaten();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-39.2,1,1,0,0,0,128.3,108.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACDEDF").s().p("AkSBAIAAgUIIlAAIAAAUgAkSgCIAAg9IIlAAIAAA9g");
	this.shape.setTransform(69.4,-133.3,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C03D").s().p("AkSCJIAAgaIIlAAIAAAagAkSBbIAAguIIlAAIAAAugAkSgQIAAhGQAAgVAPgPQAPgOAVAAIG/AAQAVAAAPAOQAPAPAAAVIAABGg");
	this.shape_1.setTransform(69.4,-138.1,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B27042").s().p("AjkBbQgTAAgNgNQgOgOAAgTIAAhZIABgLQAEgPAMgKQANgKAQAAIHJAAQAQAAAMAKQANAKADAPQACAFAAAGIAABZQAAATgOAOQgNANgTAAg");
	this.shape_2.setTransform(69.4,-118.8,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B27042").s().p("AiLFIIAAqPIEYAAIAAKPg");
	this.shape_3.setTransform(69.5,-76.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_start, new cjs.Rectangle(-129.8,-151.8,256.8,220.8), null);


(lib.eyes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Symbol1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,6.4,1,1,0,0,0,23.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.86},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.69},0).wait(1).to({scaleY:0.66},0).wait(1).to({scaleY:0.63},0).wait(1).to({scaleY:0.59},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.52},0).wait(1).to({scaleY:0.49},0).wait(1).to({scaleY:0.46},0).wait(1).to({scaleY:0.42},0).wait(1).to({scaleY:0.39},0).wait(1).to({scaleY:0.36},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.22},0).wait(1).to({scaleY:0.25},0).wait(1).to({scaleY:0.28},0).wait(1).to({scaleY:0.32},0).wait(1).to({scaleY:0.35},0).wait(1).to({scaleY:0.38},0).wait(1).to({scaleY:0.41},0).wait(1).to({scaleY:0.45},0).wait(1).to({scaleY:0.48},0).wait(1).to({scaleY:0.51},0).wait(1).to({scaleY:0.54},0).wait(1).to({scaleY:0.58},0).wait(1).to({scaleY:0.61},0).wait(1).to({scaleY:0.64},0).wait(1).to({scaleY:0.68},0).wait(1).to({scaleY:0.71},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.77},0).wait(1).to({scaleY:0.81},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.87},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,12.8);


(lib.cookie_man_happy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance_1 = new lib.eyes_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-5.3,1,1,0,0,0,23.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23));

	// mouth
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AibALQgRgVgLgbIgIgXQgBgMAIgFQAJgHAJAFIAaALQAgAMAlAGQB1ASB7gwQAKgDAHAGQAHAGgBALQgIAkgcAjQg4BHhkAAQhkAAg3hHgAhhAUQAoAcA5AAQA7AAApgeQAegUAQgiQhZAdhWgFQg9gCg2gTQARAhAeAUg");
	this.shape_33.setTransform(-0.1,18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQBMQgagEgRgDQgSgEgTgKQgUgKgYgbQgYgagHgMIgKgPQgDgDgDgJIgEgPQgBgFAJgGQAIgGAKAFIAZALQAhALAlAGQB1ASB6gvQAKgEAHAHQAIAGgCAKQgCAJgIAQQgIAQgkAoQgkAogvAHQgfAFgVAAIgTgBgAhiANQATAQAYAHQAXAIAxgCQAzgBAdgTQAcgUAWghQhZAchWgEQgVgBgTgCQgogGgkgMQAbAbATAOg");
	this.shape_34.setTransform(-0.2,17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag4A4QgwgIgWgOQgXgPgHgHQgIgHgHgMIgKgPQgDgDgDgJIgEgPQgBgFAJgGQAIgGAKAFIAZALQAhALAlAGQB1ASB6gvQAKgEAHAHQAIAGgCAKQgCAJgHAOQgHAPgRAQQgSASgtASQguARgdAAQgcAAgxgIgAhdARQAWAHAEACQAEADA1AEQA0AEAlgOQAkgOAggbQhZAbhWgEQgVgBgTgCQgogFgkgMQAcAZAXAHg");
	this.shape_35.setTransform(-0.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_34}]},9).to({state:[{t:this.shape_33}]},3).wait(7));

	// body
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E1C249").s().p("AAYBnQhdgmgTg1IAAgiQAJgRAUgSQAogmA2gJQANgCALAGQALAGAFAMQAeBRglBVQgFANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape_36.setTransform(12.1,45.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1C249").s().p("AgxBnQgNgGgGgNQgVgyACgwQABgkAMggQAFgMALgGQALgGAMACQA3AJAoAmQAUASAJARIAAAiQgTA1hdAmQgGADgHAAQgHAAgGgDg");
	this.shape_37.setTransform(-12.6,45.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E1C249").s().p("AgsAtQgTgSAAgbQAAgaATgTQASgSAaAAQAaAAAUASQASATAAAaQAAAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape_38.setTransform(-0.5,45.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAaAAAUASQASAUAAAZQAAAbgSASQgUATgaAAQgZAAgUgTg");
	this.shape_39.setTransform(0.3,106.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_40.setTransform(0.3,60.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtAtQgSgTAAgaQAAgaASgSQAUgTAZAAQAaAAAUATQASASAAAaQAAAagSATQgUATgaAAQgZAAgUgTg");
	this.shape_41.setTransform(0.3,83.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA5AnIgBgBQgKgPgKgHQgNgJgOgEQgNgDgQgBIgdACQgJADgJgEQgIgDgDgKQgDgJAEgJQAEgJAKgDIAEgBIAYAAIAUACQAWAFAQAHQARAIAQAQQALAJAMAXQACAFgCAFQgBAFgFACQgDACgDAAQgGAAgEgGg");
	this.shape_42.setTransform(19.3,-23);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhKAqQgJgGAFgKQAMgXALgJQAQgQARgIQAQgHAWgFIAUgCIAKAAIANAAQAKABAGAIQAGAIgBAJQAAAKgIAGQgIAFgJgBIgFgBIgdgCQgQABgNADQgOAEgNAJQgKAHgKAPIgBABQgDAFgFABIgCAAQgEAAgEgDg");
	this.shape_43.setTransform(-19,-23);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArQodIBMAcIgsBVIBVAaIg1BXIBUAbIgpBVAkIInIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALRomIhMAcIAsBVIhVAaIA1BXIhUAbIApBVAEXInIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_44.setTransform(-0.3,108.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E66D76").s().p("AELAtQgTgSAAgbQAAgaATgSQATgUAaABQAbgBATAUQATASAAAaQAAAbgTASQgTATgbAAQgaAAgTgTgAllAtQgTgSAAgbQAAgaATgSQATgUAbABQAagBATAUQATASAAAaQAAAbgTASQgTATgaAAQgbAAgTgTg");
	this.shape_45.setTransform(-0.1,9.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5764E").s().p("AGFRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgdAAQgcAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgRQAIgjgKgZQgOglgfgIIgcAAIi3A5QhMAZhIgjQhHgkgahMQgGgSgDgSQgIg8Adg4QAnhJBQgXIG/h4IAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQB2h2CegWQAlgGAmAAQDOAACRCSQATATAQATQBvCGAAC0IgBAYQgIC/iJCIQgvAvg1AgIAzAOIG6B3QBQAXAnBJQAdA5gJA7QgCASgGASQgaBMhHAkQhIAjhMgZIi3g5IAAAAQgNgDgPADQgfAIgOAlQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEPP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkQP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAptEMIAphUIhUgcIA1hXIhVgaIAshUIhMgbIBMAbIgsBUIBVAaIg1BXIBUAcgAI1CvIApBUIgphUIBUgbIg1hXIBVgbIgshUIBMgbIhMAbIAsBUIhVAbIA1BXIhUAbgAEFoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlroqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_46.setTransform(0.5,60.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A96A44").s().p("AGFOEQhRgWgvhFIi4kbQgegpgxAAQgcAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAcAAQAdAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAJ6A3Ii3g4IAAAAQgNgDgPADQgfAHgOAlIgCAGQgIgjAKgYQAOglAfgIQAPgDANADIAAAAIC3A4QBMAZBIgiQBHgkAahMQAGgSACgSQAHAsgPAuQgaBLhHAkQgqAVgsAAQgeAAgggLgAsNAtQhHgkgahLQgPguAGgsQADASAGASQAaBMBHAkQBIAiBMgZIC3g4IAcAAQAfAIAOAlQAKAYgIAjIgCgGQgOglgfgHIgcAAIi3A4QgfALgfAAQgsAAgqgVgAD/n2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlboUQgtgtggg0IgGgKQg/htAAiIIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_47.setTransform(0.5,89.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArWouIBKAiIgzBRIBSAhIg9BSIBRAjIgvBRAkGIxIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALXowIhLAhIAyBSIhTAgIA7BTIhSAhIAvBSAEZIxIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_48.setTransform(-0.5,107.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A96A44").s().p("AGIOEQhRgWgvhFIi4kbQgegpgxAAQgcAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgPgxAGgvQACAVAHAVQAdBeBYArQBMAkBRgWQBRgWAvhFIC1kXQAIgLANgLQAbgXAcAAQAeAAAYAQQAPAKAKAPIADAEIC1EXQAvBFBRAWQBRAWBMgkQBZgrAdheQAGgVADgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgfgJgAF9gKQAJgVANgLIgBAAIABgBIAKgGIAigKIgGgBQAfACAIABIAAAAIC7AsQBNATBFgoQBFgpAUhNQAFgTACgRQAJArgMAvQgUBNhFAoQhFAohOgTIi6grIAAAAQgKgCgrAEIAAAAIgEAAQgHABgHADQgUAMgMAcIgCAGQgHgjAJgYgAl1ArQgKgbgTgLIg3gKIgeAAIi6AoQhOAShFgpQhEgqgShNQgMgwALgrQABASAEATQATBOBEAqQBEApBPgSIC6gpIAdAAQAFgCAhAHIAAAAQAdAJANAjQAKAYgIAjIgCgGgAECn2QA2gfAvgwQAegeAYghQAdgnATgrQAnhUAEhiIAAAYQAABUgYBKQgWBGgtA9QgYAhgeAeQgYAYgZAUgAlXoUQiSiSAAjOIAAgYQAJC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_49.setTransform(0.2,89.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B5764E").s().p("AGIRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgRQAHgjgKgZQgNgjgdgJIAAAAQgggHgFACIgdAAIi7ApQhOAShEgpQhFgqgShOQgFgTgBgSQgDg8Aig1QAthFBSgQIFOg8IAAAAIB4ggIAygOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgEBigmBUQgUArgcAnQgYAhgfAeQgvAvg1AgIAzAOIB3AgIAAgEIACAAIAAAFIFEBAQBSARArBHQAiA2gFA8QgCARgEATQgVBNhFApQhEAphOgUIi6gsIgBAAQgIgBgegCIAGABIgjAKIgJAGIgBABIAAAAQgNALgIAVQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAESP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkNP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAqPD5IAvhQIhRgjIA9hSIhSghIAzhQIhKgiIBKAiIgzBQIBSAhIg9BSIBRAjgAJNClIAvBRIgvhRIBSghIg7hTIBTghIgyhQIBLghIhLAhIAyBQIhTAhIA7BTIhSAhgAEIoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlooqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_50.setTransform(0.2,60.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("Arbo5IBHAnIg4BNIBRAmIhCBOIBPAoIg1BOAkHI6IgLheIhsAcIgIhoIhxAmIgIhnIhrAYALco3IhJAkIA3BPIhSAlIA+BQIhPAkIAxBQAEYI6IALheIBsAcIAIhoIBxAmIAJhnIBqAY");
	this.shape_51.setTransform(-0.4,106.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A96A44").s().p("AGJOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAF6ArQgEgYAEgSIADgKIABgBQAJgXAQgMQA5gLALgEQAOgFANACIABAAIC8AjQBOAQBDgsQBDgsARhOQADgTABgRQAMAqgKAwQgRBOhCAsQhDArhPgQIi8giIAAAAQgNgCgcAAQgbgBgiAUQgQAMgJAXIgBABIgBAFIgCgGgAl1ArQgLgdgWgLIAAAAQhDgYgIAFIjdAhQhPAOhCgtQhCgugOhPQgIgwANgqQAAASADATQAOBPBCAuQBCAtBPgOIC9gdQAagBAFABQANgCA3ARIAAAAQAWALALAdQAKAYgHAjIgDgGgAEDn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgXAYgaAUgAlXoUQiSiSAAjOIABgYQAIC/CJCIQAuAvA0AfIgyAOQgZgUgXgXg");
	this.shape_52.setTransform(0.1,89.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B5764E").s().p("AGIRuQhRgWgvhFIi1kXIgDgEQgLgPgOgKQgYgQgeAAQgcAAgbAXQgNALgJALIi0EXQgvBFhRAWQhRAWhMgkQhYgrgeheQgGgVgDgVQgJhHAnhCIDkl5QAPgXAMgeQAIgUAEgRQAHgjgJgZQgMgegWgKIAAAAQg3gRgNACQgFgBgaABIi9AdQhPAOhCgtQhCgugOhPQgDgTABgSQgBg8AmgzQAxhDBTgLIFagoIAAgBIBvgdIAygOQgzgggvguQiJiIgIi/IgBgYQABjOCRiSQCSiSDNAAQDOAACSCSQCRCSAADOIAAAYQgJC/iICIQgwAvg1AgIAzAOIBhAaIAAAAIFiA0QBTAOAuBEQAkA1gCA8QAAARgEATQgQBOhDAsQhDAshPgQIi8gjIgBAAQgNgCgOAFQgLAEg5ALQgQALgJAYIAAABIgDALQgEASAEAYIABAGIACAHQADAPAHAPIACAHIABACIAMAYIACAFIAKAPIDkF5QAnBCgJBIQgDAUgGAVQgdBehZArQgwAXgxAAQgeAAgegJgAESP/IALheIBsAcIAIhoIBxAmIAJhnIBqAYIhqgYIgJBnIhxgmIgIBoIhsgcgAkMP/IgLheIhtAcIgHhoIhxAmIgJhnIhrAYIBrgYIAJBnIBxgmIAHBoIBtgcgAJgCZIAzBQIgzhQIBQgkIg+hQIBRglIg2hOIBIgkIhIAkIA2BOIhRAlIA+BQIhQAkgAqoDpIA1hOIhQgoIBChOIhRglIA5hNIhHgnIBHAnIg5BNIBRAlIhCBOIBQAogAEIoqQgTATABAaQgBAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATgAlnoqQgTATAAAaQAAAbATATQASATAbAAQAaAAAUgTQASgTABgbQgBgagSgTQgUgTgaAAQgbAAgSATg");
	this.shape_53.setTransform(0.2,60.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArbpCIBFAsIg9BJIBNAsIhHBJIBMAtIg6BKAkDJHIgLheIhtAbIgHhnIhxAmIgJhnIhrAYALcpGIhGAqIA8BLIhPAqIBFBLIhNAqIA4BMAEcJHIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_54.setTransform(-0.7,104.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A96A44").s().p("AGMOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAGBgKQAJgXAQgMQAzgfAbAAIAnABIAAAAIC/AVQBQAKA/gwQA/gxALhPQADgTgBgSQAPAqgHAwQgKBPhAAxQg/AvhPgJIi/gVIgBAAIgngCQgbgCg9AiQgQAMgJAXIgCAGQgIgjAKgYgAlyArQgNgjgcgIQhCgZhBAHIi+AQQhQAHg/gxQg+gzgIhPQgFgxAQgpQgBASABATQAJBQA+AyQA+AyBQgIIC1gPQA7gHBGAXQAcAJANAjQAKAYgHAjIgDgGgAEGn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlUoUQgpgpgegvIAAgOIgJAAQhChvAAiLIABgYQAHCgBiB7IgCgGIAJACIgCAJQAQAVATASQAuAvA0AfIgyAOQgZgUgXgXg");
	this.shape_55.setTransform(-0.2,89.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B5764E").s().p("AGLRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUAEgRQAHgjgKgZQgNgjgcgJQhGgXg7AHIi1APQhQAIg+gyQg+gygJhQQgBgTABgSQAEg7ApgxQA2g/BTgGIFUgPIABAaIAAgaIB3ggIAygOQgzgggvguQgTgTgQgUIACgJIgJgCIACAGQhih7gHigIgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIBaAYIAAgBIFlAaQBTAHAzBBQAoAyADA7QABASgDATQgLBPg/AxQg/AwhQgKIi/gVIAAAAIgngBQgbAAgzAfQgQALgJAYQgKAZAIAjQAEARAHAUIAJATQAIATAKAPIDlF5QAnBCgKBIQgCAUgHAVQgdBehZArQgvAXgxAAQgeAAgegJgAEVP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkKP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgArCDWIA6hJIhMgtIBIhKIhOgqIA+hKIhFgsIBFAsIg+BKIBOAqIhIBKIBMAtgAJ0CGIA4BLIg4hLIBNgrIhFhLIBPgpIg8hLIBGgpIhGApIA8BLIhPApIBFBLIhNArgAELoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlloqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_56.setTransform(-0.1,60.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArapPIBBAxIhDBEIBKAyIhMBDIBIAzIhABFAkKJRIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALfpQIhDAvIBBBGIhLAwIBJBGIhJAwIA9BHAEVJRIALheIBsAbIAIhnIBxAmIAJhnIBqAY");
	this.shape_57.setTransform(-0.1,103.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A96A44").s().p("AGEOEQhRgWgvhFIi4kbQgegpgwAAQgdAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgQgxAHgvQACAVAHAVQAdBeBYArQBMAkBRgWQBRgWAvhFIC1kXQAIgLANgLQAbgXAdAAQAdAAAYAQQAPAKAKAPIADAEIC1EXQAvBFBRAWQBRAWBMgkQBZgrAdheQAGgVADgUQAGAugPAxQgdBehZArQgwAXgxAAQgeAAgegJgAF5gKQAJgWAUgMQAsgYAugHQAugGANgBIDAAIQBQAFA8g1QA8g2AEhPQACgUgCgRQASAogEAwQgEBQg8A2Qg8A1hQgFIjAgHIhEgEQg3gDguAtQgOAMgJAWIgCAGQgIgjAKgYgAl5ArQgOglgfgHQhKgfhOAFIjAABQhQACg6g3Qg6g4gChQQgCgwAUgoQgDARAAAUQADBQA6A3QA6A3BQgCIC/gBQBQgEBDAjIAAAAIAIABQARAMAKAZQAJAYgHAjIgCgGgAmcgwIAAgDIAIAEgAD+n2QA1gfAwgwQCIiIAJi/IAAAYQAADOiRCSQgYAYgaAUgAlboUQiSiSAAjOIAAgYQAIC/CKCIQAuAvA0AfIgzAOQgZgUgWgXg");
	this.shape_58.setTransform(0.6,89.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B5764E").s().p("AGDRuQhRgWgvhFIi1kXIgDgEQgKgPgPgKQgYgQgdAAQgdAAgbAXQgNALgIALIi1EXQgvBFhRAWQhRAWhMgkQhYgrgdheQgHgVgCgVQgJhHAmhCIDkl5QAPgXAMgeQAIgUAEgRQAHgjgJgZQgKgZgRgMIgIgBIAIABIgIgEIAAADIAAAAQhDgjhQAEIi/ABQhQACg6g3Qg6g3gDhQQAAgUADgQQAJg8AsgtQA7g7BUABIFIALIAAgCIB6ggIAzgOQg0ggguguQiKiIgIi/IAAgYQAAjOCSiSQCRiSDNAAQDOAACSCSQCRCSAADOIAAAYQgJC/iICIQgvAvg2AgIAzAOIBfAaIABAsIAAgsIFoAAQBTABA4A9QAsAwAHA8QACAQgCAUQgEBPg8A2Qg8A1hQgFIjAgIQgNABguAGQgtAGgtAZQgUAMgJAWQgKAZAIAjQAEARAIAUIADAIIAIASQAHAPAJAMIDkF5QAnBCgJBIQgDAUgGAVQgdBehZArQgvAXgyAAQgdAAgfgJgAENP/IALheIBtAcIAHhoIBxAmIAJhnIBqAYIhqgYIgJBnIhxgmIgHBoIhtgcgAkRP/IgLheIhtAcIgHhoIhxAmIgJhnIhrAYIBrgYIAJBnIBxgmIAHBoIBtgcgArdDBIA/hFIhIgzIBMhEIhJgxIBChEIhBgxIBBAxIhCBEIBJAxIhMBEIBIAzgAKKB4IA9BIIg9hIIBKgwIhKhGIBLguIhBhHIBDguIhDAuIBBBHIhLAuIBKBGIhKAwgAEDoqQgSATAAAaQAAAbASATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATgAlsoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAmdDvg");
	this.shape_59.setTransform(0.7,60.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ArQpcIA8A3IhJA9IBEA5IhSA8IBDA6IhGA+Aj5JdIgLheIhsAbIgIhnIhxAmIgIhnIhrAYALvpDIhDAuIBBBHIhLAvIBJBGIhKAxIA9BHAEmJdIALheIBsAbIAIhnIBxAmIAIhnIBrAY");
	this.shape_60.setTransform(-1.8,102.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A96A44").s().p("AGTOEQhRgWgvhFIi4kbQgegpgyAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhRAWhLgkQhZgrgdheQgPgxAGgvQADAVAGAVQAdBeBZArQBMAkBQgWQBRgWAvhFIC1kXQAIgLAOgLQAbgXAbAAQAeAAAYAQQAPAKALAPIADAEIC1EXQAvBFBRAWQBRAWBLgkQBZgrAdheQAHgVACgUQAGAugPAxQgdBehZArQgvAXgxAAQgeAAgegJgAGIgKQAJgXAPgMIAAAAQAngpAyACIBAADIDAAIQBPAEA8g0QA8g2AFhQQABgTgBgRQASAogEAwQgFBQg8A2Qg8A0hPgEIjAgIQgNAAhBgIQg1gHgaAjQgaAegIAWIgDAGQgHgjAKgYgAlrArQgLgegXgLIgLgDQgMgLgMgEQhPgThhgEIi/gRQhQgGg0g8Qg1g8AGhRQADgwAXgmQgEASgCATQgFBQA0A8QA1A8BQAHIC+AQQBZADBKAZIARAGIALAEQAXALALAeQAKAYgIAjIgCgGgAENn2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlNoUQiSiSAAjOIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_61.setTransform(-0.9,89.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B5764E").s().p("AGQRuQhRgWgvhFIi1kXIgDgEQgLgPgPgKQgYgQgeAAQgbAAgbAXQgOALgIALIi1EXQgvBFhRAWQhQAWhMgkQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAHgUAEgRQAIgjgKgZQgLgegXgLIgLgEIgRgGQhKgZhZgDIi+gQQhQgHg1g8Qg0g8AFhPQACgTAEgSQAPg6AxgqQBAg0BSAJIFFAmICDgjIAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIBgAaIAAAAIFnABQBTACA4A9QAsAvAHA8QABAQgBATQgFBQg8A2Qg8A0hPgEIjAgIIhAgDQgygCgnApIAAAAQgPAMgJAXQgKAZAHAjQADANAGAPIADAJQAMAeAPAXIDlF5QAmBCgJBIQgDAUgGAVQgdBehZArQgvAXgxAAQgeAAgegJgAEaP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkFP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAKVB5IA9BHIg9hHIBKgwIhJhGIBLgvIhBhGIBDgvIhDAvIBBBGIhLAvIBJBGIhKAwgAr6CnIBGg/IhDg6IBSg7IhEg4IBJg+Ig8g2IA8A2IhJA+IBEA4IhSA7IBDA6gAEQoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlgoqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_62.setTransform(-0.6,60.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B5764E").s().p("AGFRuIgVgGQhCgZgpg8Ii1kXIgDgEQgLgPgPgKQgYgQgdAAQgcAAgbAXQgOALgIALIi1EXQgpA8hCAZIgVAGQhGAUhEgaIgSgIQhZgrgdheQgGgVgDgVQgJhHAmhCIDll5QAPgXAMgeQAIgUADgRQAIgjgKgZQgOglgfgIIgcAAIi3A5QhMAZhIgjQhHgkgahMQgGgSgDgSQgIg8Adg4QAnhJBQgXIG/h4IAzgOQg0ggguguQiJiIgIi/IgBgYQAAjOCSiSQCSiSDNAAQDOAACRCSQCSCSAADOIgBAYQgIC/iJCIQgvAvg1AgIAzAOIG6B3QBQAXAnBJQAdA5gJA7QgCASgGASQgaBMhHAkQhIAjhMgZIi3g5IAAAAQgNgDgPADQgfAIgOAlQgKAZAIAjQADARAIAUQAMAeAPAXIDlF5QAmBCgJBIQgCAUgHAVQgdBehZArIgSAIQgmAPgoAAQgeAAgegJgAEPP/IALheIBsAcIAIhoIBxAmIAIhnIBrAYIhrgYIgIBnIhxgmIgIBoIhsgcgAkQP/IgLheIhsAcIgIhoIhxAmIgIhnIhrAYIBrgYIAIBnIBxgmIAIBoIBsgcgAptEMIAphUIhUgcIA1hXIhVgaIAshUIhMgbIBMAbIgsBUIBVAaIg1BXIBUAcgAI1CvIApBUIgphUIBUgbIg1hXIBVgbIgshUIBMgbIhMAbIAsBUIhVAbIA1BXIhUAbgAEFoqQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATgAlroqQgTATAAAaQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	this.shape_63.setTransform(0.5,60.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A96A44").s().p("AGFOEQg+gQgpgsQgOgOgLgRIi4kbQgegpgxAAQgcAAgbAXQgOALgIALIi1EXQgLARgOAOQgpAsg+AQQhRAWhLgkQgmgSgbgcQgkglgRg2QgPgxAGgvQADAVAGAVQAdBeBZArIASAIQBEAaBGgUIAVgGQBCgZApg8IC1kXQAIgLAOgLQAbgXAcAAQAdAAAYAQQAPAKALAPIADAEIC1EXQApA8BCAZIAVAGQBHAUBDgaIASgIQBZgrAdheQAHgVACgUQAGAugPAxQgQA2glAlQgbAcgmASQgvAXgxAAQgeAAgegJgAJ6A3Ii3g4IAAAAQgNgDgPADQgfAHgOAlIgCAGQgIgjAKgYQAOglAfgIQAPgDANADIAAAAIC3A4QBMAZBIgiQBHgkAahMQAGgSACgSQAHAsgPAuQgaBLhHAkQgqAVgsAAQgeAAgggLgAsNAtQhHgkgahLQgPguAGgsQADASAGASQAaBMBHAkQBIAiBMgZIC3g4IAcAAQAfAIAOAlQAKAYgIAjIgCgGQgOglgfgHIgcAAIi3A4QgfALgfAAQgsAAgqgVgAD/n2QA1gfAvgwQCJiIAIi/IABAYQAADOiSCSQgYAYgZAUgAlboUQgtgtggg0IgGgKQg/htAAiIIABgYQAIC/CJCIQAuAvA0AfIgzAOQgYgUgXgXg");
	this.shape_64.setTransform(0.5,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_45},{t:this.shape_48},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_45},{t:this.shape_51},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_45},{t:this.shape_54},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_45},{t:this.shape_57},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_45},{t:this.shape_60},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_45},{t:this.shape_57},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},3).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_45},{t:this.shape_54},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_45},{t:this.shape_51},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_45},{t:this.shape_48},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-53.4,177.9,234);


(lib.bad_feedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bad:0,"full_t.bubble":35});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(70).call(this.frame_105).wait(1));

	// talking_buuble
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjA6QgpgZAAghQAAghApgYQAqgXA6AAQA6AAApAXQApAYAAAhQAAAhgpAZQgqAXg5AAQg6AAgqgXg");
	this.shape.setTransform(-509.4,187.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AkQgagPgBgVQABgUAagPQAZgPAkAAQAlAAAaAPQAaAPAAAUQAAAVgaAPQgaAPglAAQgjAAgagPg");
	this.shape_1.setTransform(-531.5,159.1,2.479,2.479);

	this.text = new cjs.Text("אולי בפעם הבאה...", "bold 24px 'Segoe UI'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 166;
	this.text.parent = this;
	this.text.setTransform(-500,54.4);

	this.instance = new lib.talking_bubble_mc();
	this.instance.parent = this;
	this.instance.setTransform(-500,81.3,0.599,0.704,0,0,0,143,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]},26).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.shape_1,p:{scaleX:2.479,scaleY:2.479,x:-531.5}}]},4).to({state:[{t:this.shape,p:{scaleX:0.691,scaleY:0.691}},{t:this.shape_1,p:{scaleX:1.988,scaleY:1.988,x:-531.4}},{t:this.instance},{t:this.text}]},5).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.shape_1,p:{scaleX:2.479,scaleY:2.479,x:-531.5}}]},36).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]},5).to({state:[]},4).wait(26));

	// wrong_answer
	this.instance_1 = new lib.cookie_man_sad_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-477.5,483.9,0.871,0.855,0,0,0,0,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:68.3,y:480},0).wait(1).to({y:472.1},0).wait(1).to({y:464.1},0).wait(1).to({y:456.2},0).wait(1).to({y:448.2},0).wait(1).to({y:440.2},0).wait(1).to({y:432.3},0).wait(1).to({y:424.3},0).wait(1).to({y:416.3},0).wait(1).to({y:408.4},0).wait(1).to({y:400.4},0).wait(1).to({y:392.5},0).wait(1).to({y:384.5},0).wait(1).to({y:376.5},0).wait(1).to({y:368.6},0).wait(1).to({y:360.6},0).wait(1).to({y:352.7},0).wait(1).to({y:344.7},0).wait(1).to({y:336.7},0).wait(1).to({y:328.8},0).wait(1).to({y:320.8},0).wait(1).to({y:312.8},0).wait(1).to({y:312.9},0).wait(3).to({y:313},0).wait(4).to({y:313.1},0).wait(4).to({y:313.2},0).wait(4).to({y:313.3},0).wait(4).to({y:313.4},0).wait(3).to({y:313.5},0).wait(4).to({y:313.6},0).wait(4).to({y:313.7},0).wait(4).to({y:313.8},0).wait(4).to({y:313.9},0).wait(3).to({y:314},0).wait(4).to({y:314.1},0).wait(4).to({y:314.2},0).wait(4).to({y:314.3},0).wait(4).to({y:314.4},0).wait(2).to({y:321.8},0).wait(1).to({y:329.3},0).wait(1).to({y:336.7},0).wait(1).to({y:344.1},0).wait(1).to({y:351.5},0).wait(1).to({y:359},0).wait(1).to({y:366.4},0).wait(1).to({y:373.8},0).wait(1).to({y:381.2},0).wait(1).to({y:388.7},0).wait(1).to({y:396.1},0).wait(1).to({y:403.5},0).wait(1).to({y:411},0).wait(1).to({y:418.4},0).wait(1).to({y:425.8},0).wait(1).to({y:433.2},0).wait(1).to({y:440.7},0).wait(1).to({y:448.1},0).wait(1).to({y:455.5},0).wait(1).to({y:462.9},0).wait(1).to({y:470.4},0).wait(1).to({y:477.8},0).wait(1).to({y:485.2},0).wait(1).to({y:492.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-555.1,388,155.1,200);


(lib.good_feedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{good:0,"full_t.bubble":35});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(70).call(this.frame_105).wait(1));

	// talking_buuble
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjA6QgpgZAAghQAAghApgYQAqgXA6AAQA6AAApAXQApAYAAAhQAAAhgpAZQgqAXg5AAQg6AAgqgXg");
	this.shape.setTransform(-509.4,187.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AkQgagPgBgVQABgUAagPQAZgPAkAAQAlAAAaAPQAaAPAAAUQAAAVgaAPQgaAPglAAQgjAAgagPg");
	this.shape_1.setTransform(-531.5,159.1,2.479,2.479);

	this.text = new cjs.Text("כל הכבוד!", "bold 24px 'Segoe UI'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-499.9,51.4);

	this.instance = new lib.talking_bubble_mc();
	this.instance.parent = this;
	this.instance.setTransform(-500,81.3,0.599,0.704,0,0,0,143,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]},26).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.shape_1,p:{scaleX:2.479,scaleY:2.479,x:-531.5}}]},4).to({state:[{t:this.shape,p:{scaleX:0.691,scaleY:0.691}},{t:this.shape_1,p:{scaleX:1.988,scaleY:1.988,x:-531.4}},{t:this.instance},{t:this.text}]},5).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.shape_1,p:{scaleX:2.479,scaleY:2.479,x:-531.5}}]},36).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]},5).to({state:[]},4).wait(26));

	// correct_answer
	this.instance_1 = new lib.cookie_man_happy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-477.5,483.9,0.871,0.855,0,0,0,0,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.8,x:-478.2,y:475.9},0).wait(1).to({y:468},0).wait(1).to({y:460},0).wait(1).to({y:452.1},0).wait(1).to({y:444.1},0).wait(1).to({y:436.1},0).wait(1).to({y:428.2},0).wait(1).to({y:420.2},0).wait(1).to({y:412.2},0).wait(1).to({y:404.3},0).wait(1).to({y:396.3},0).wait(1).to({y:388.4},0).wait(1).to({y:380.4},0).wait(1).to({y:372.4},0).wait(1).to({y:364.5},0).wait(1).to({y:356.5},0).wait(1).to({y:348.6},0).wait(1).to({y:340.6},0).wait(1).to({y:332.6},0).wait(1).to({y:324.7},0).wait(1).to({y:316.7},0).wait(1).to({y:308.7},0).wait(1).to({y:308.8},0).wait(3).to({y:308.9},0).wait(4).to({y:309},0).wait(4).to({y:309.1},0).wait(4).to({y:309.2},0).wait(4).to({y:309.3},0).wait(3).to({y:309.4},0).wait(4).to({y:309.5},0).wait(4).to({y:309.6},0).wait(4).to({y:309.7},0).wait(4).to({y:309.8},0).wait(3).to({y:309.9},0).wait(4).to({y:310},0).wait(4).to({y:310.1},0).wait(4).to({y:310.2},0).wait(4).to({y:310.3},0).wait(2).to({y:317.7},0).wait(1).to({y:325.2},0).wait(1).to({y:332.6},0).wait(1).to({y:340},0).wait(1).to({y:347.4},0).wait(1).to({y:354.9},0).wait(1).to({y:362.3},0).wait(1).to({y:369.7},0).wait(1).to({y:377.1},0).wait(1).to({y:384.6},0).wait(1).to({y:392},0).wait(1).to({y:399.4},0).wait(1).to({y:406.9},0).wait(1).to({y:414.3},0).wait(1).to({y:421.7},0).wait(1).to({y:429.1},0).wait(1).to({y:436.6},0).wait(1).to({y:444},0).wait(1).to({y:451.4},0).wait(1).to({y:458.8},0).wait(1).to({y:466.3},0).wait(1).to({y:473.7},0).wait(1).to({y:481.1},0).wait(1).to({y:488.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554.5,383.9,155,200);


(lib.start_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bubbleTXT:0,"bubbleTXT":38});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(4));

	// bubbleTXT
	this.bubbleTXT = new lib.start_bg();
	this.bubbleTXT.parent = this;
	this.bubbleTXT.setTransform(-32.9,-34,0.781,0.781,0,0,0,0.1,-0.1);
	this.bubbleTXT._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bubbleTXT).wait(38).to({_off:false},0).wait(4));

	// white_circles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjA6QgpgZAAghQAAghApgYQAqgXA6AAQA6AAApAXQApAYAAAhQAAAhgpAZQgqAXg5AAQg6AAgqgXg");
	this.shape.setTransform(346.3,124.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AkQgagPgBgVQABgUAagPQAZgPAkAAQAlAAAaAPQAaAPAAAUQAAAVgaAPQgaAPglAAQgjAAgagPg");
	this.shape_1.setTransform(310.3,94,2.479,2.479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape},{t:this.shape_1}]},6).to({state:[{t:this.shape},{t:this.shape_1}]},8).to({state:[]},1).wait(3));

	// cookieman
	this.instance = new lib.cookie_man_sad();
	this.instance.parent = this;
	this.instance.setTransform(389,251,0.753,0.753,0,0,0,0,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},39).wait(3));

	// Layer_1
	this.instance_1 = new lib.house_start();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-305.5,94,1.908,2.093,0,0,0,-1.7,-41.4);

	this.instance_2 = new lib.screen_snow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.4,-359.6,1,1,0,0,0,30.9,-371.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},39).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-661.5,-1090.8,1341.9,1462.4);


(lib.screen_end_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(36));

	// score board
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjA6QgpgZAAghQAAghApgYQAqgXA6AAQA6AAApAXQApAYAAAhQAAAhgpAZQgqAXg5AAQg6AAgqgXg");
	this.shape.setTransform(346.3,124.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AkQgagPgBgVQABgUAagPQAZgPAkAAQAlAAAaAPQAaAPAAAUQAAAVgaAPQgaAPglAAQgjAAgagPg");
	this.shape_1.setTransform(310.3,94,2.479,2.479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape},{t:this.shape_1}]},6).to({state:[{t:this.shape},{t:this.shape_1}]},6).wait(36));

	// cookieman
	this.instance = new lib.cookie_man_happy_1();
	this.instance.parent = this;
	this.instance.setTransform(579.9,228.4,0.726,0.726,0,0,0,252.5,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:204.4},11).to({y:228.4},12).to({y:204.4},11).to({y:228.4},12).wait(26));

	// Layer_1
	this.instance_1 = new lib.house_full();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.1,401.5,1.909,1.909,0,0,0,128.3,121.1);

	this.instance_2 = new lib.screen_snow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.4,-359.6,1,1,0,0,0,30.9,-371.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-661.5,-1090.8,1341.9,1462.4);


// stage content:
(lib.LaCasaDeCookie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$("#canvas").css("direction", "rtl"); //כיוון כתיבה מימין לשמאל
		stage.enableMouseOver(24); // לאפשר קליטת תנועות במעבר עכבר
		
		// כל השאלות
		var question0 = {
			game: "גוף האדם",
			question: "מהו שמו של האיבר שבו אנו משתמשים כדי לנשום חמצן?",
			quest_img: "images/oxygen.png",
			answers: ["ריאות", "לבלב", "כבד", "קיבה"]
		}
		var question1 = {
			game: "גוף האדם",
			question: "היכן נמצאת העצם הכי קטנה בגוף?",
			answers: ["אוזן", "לשון", "אצבע", "רגל"]
		}
		var question2 = {
			game: "גוף האדם",
			question: "היכן נמצאת העצם הכי גדולה בגוף?",
			answers: ["רגל", "hand.jpg", "גב", "בטן"]
		}
		var question3 = {
			game: "גוף האדם",
			question: "כמה צלעות יש בגוף האדם?",
			answers: ["24", "12", "32", "48", "56"]
		}
		var question4 = {
			game: "גוף האדם",
			question: "למערכת העיכול שני תפקידים עיקריים: פירוק המזון וספיגת חומרי המזון אל הדם. באיזה מהחלקים הבאים מתרחשת ספיגת המזון?",
			answers: ["הקיבה", "mouth.png", "הושט", "המעיים", "מלוא גוף האדם", "הלבלב"]
		}
		var question5 = {
			game: "גוף האדם",
			question: "מפני מה מגנים הריסים?",
			answers: ["אבק ולכלוך ", "חפצים", "יתושים", "קרני השמש"]
		}
		
		var question6 = {
			game: "גוף האדם",
			question: "מי אחראי על העברת הדם ללב ",
			quest_img: "images/heart.gif",
			answers: ["הווריד", "העורק", "עמוד השידרה", "הכבד"]
		}
		var question7 = {
			game: "גוף האדם",
			quest_img: "images/teeth.png",
			question: "כמה שיניים יש לאדם כולל שיני בינה?",
			answers: ["32", "12", "24", "30"]
		}
		var question8 = {
			game: "גוף האדם",
			question: "מהו צבע העיניים שיש לרוב האנשים?",
			answers: ["brown.png", "green.png", "yellow.png", "blue.png", "gray.png"]
		}
		var question9 = {
			game: "גוף האדם",
			question: "אילו שני חלקי גוף ממשיכים לגדול במשך כל החיים?",
			answers: ["אף ואוזניים", "עיניים ופה", "ידיים ורגליים", "לבלב וכבד"]
		}
		
		// השאלות של המשחק על החיות
		var question10 = {
			game: "חיות",
			question: "היכן חי הגמל?",
			answers: ["desert.jpg", "forest.jpg", "city.png", "beach.jpg"]
		}
		var question11 = {
			game: "חיות",
			question: "למה משמש הצוואר של הג'ירפה?",
			answers: ["ניווט בין עלי וענפי העצים", "גירוד הגוף", "ניקוי הגוף", "שיזוף הפנים בשמש"]
		}
		var question12 = {
			game: "חיות",
			question: "למה משמש הכיס שיש לקנגורו?",
			answers: ["נשיאת הגורים", "אגירת מזון", "איסוף עלים", "אין מטרה מיוחדת לכיס"]
		}
		var question13 = {
			game: "חיות",
			question: "לאיזו משפחה שייכת החיה?",
			quest_img: "images/lion.jpg",
			answers: ["משפחת החתוליים", "משפחת בעלי הכנף", "משפחת הכלביים", "משפחת הדוביים"]
		}
		var question14 = {
			game: "חיות",
			question: "למי מהקנגורואים יש כיס?",
			answers: ["לנקבות", "לכולם", "לזכרים"]
		}
		var question15 = {
			game: "חיות",
			quest_img: "giraffe.jpg",
			question: "ממה הג'ירף ניזון?",
			answers: ["leaves.png", "חרקים", "worms.png", "בשר"]
		}
		var question16 = {
			game: "חיות",
			question: "למה משמש הזנב של הקנגורו?",
			answers: ["שיווי משקל", "גירוש זבובים", "לחימה", "ניתור", "אין לו שום שימוש"]
		}
		var question17 = {
			game: "חיות",
			question: "כיצד נקרא הקול של החיה?",
			quest_img: "images/cow.jpg",
			answers: ["געייה", "צהלה", "יללה", "ציוץ", "נהמה", "המייה"]
		}
		var question18 = {
			game: "חיות",
			question: "איך קוראים לאמא של הכפיר?",
			answers: ["לביאה", "כפירה", "אריה", "נמרה"]
		}
		var question19 = {
			game: "חיות",
			question: "מה מייחד את הג'ירפה?",
			answers: ["רגליים וצוואר ארוכים מאוד", "זנב ארוך במיוחד", "עין אחת חומה ועין אחת ירוקה", "הליכה איטית", "קול מיוחד"]
		}
		
		
		
		// מערכים גלובליים
		var allQuestionsArray = []; // מערך שיכיל את האוביקטים של השאלות של המשחק שנבחר - כדי שנוכל לעשות איטרציה לשאלות
		var randomAnswersArray = []; // מערך גלובלי להחזקת התשובות הרנדומליות שהוגרלו באותו הסדר שהוגרל - בשביל לדעת מה התשובה שנלחצה
		var imgIndexArray = []; // onload מערך גלובלי לקישור בין תמונה וכפתור, לשימוש בתוך פונקצייה המוכלת ב 
		// משתנים גלובליים
		var mychoice; // משתנה לשמירת המשחק שנבחר
		var qnum; // שמירת האינדקס של השאלה - בשביל הרנדומליות יוגרל בהמשך
		var timer; // משתנה לשמירת האינטרוול של הטיימר - גלובלי בשביל עצירת הטיימר
		// גלובלי למקרה של השהיית המשחק וגם בשביל שמירת הזמן הסופי
		var questionTime; // לשמירת הזמן של כל שאלה
		var totalTime = 0; // לשמירת הזמן הסופי של המשחק
		var totalMistakes = 0; // לשמירת מספר הטעויות במשחק
		var totalQuestions; // לשמירת סה"כ השאלות שיש במשחק הנוכחי - בשביל חישוב הציון
		var finalScore = 0; // לשמירת הציון של המשחק
		// יצירת הקונטיינר שיחזיק את כל המשחק
		var gameContainer = new createjs.Container();
		
		// קריאה להתחלת המשחק
		ChooseGameScreen();
		
		
		// פונקציה ליצירת כפתור הדרופ-דאון לבחירת משחק
		function CreateComboBox() {
			// יצירת כפתור הקומבו והוספה לבמה
			CreateBtn(lib.forcomb, 630, 372, "forcombo");
			var forcombo = stage.getChildByName("forcombo"); // שמירת משתנה לקיצור דרך של הקומבו
			CreateBtn(lib.start_btn, 0, 125, "start_btn", forcombo);
			forcombo.getChildByName("start_btn").mouseEnabled = false;
			var startBtnHelper = new createjs.ButtonHelper(forcombo.getChildByName("start_btn"));
			// שינוי השקיפות של כפתור התחלת משחק לחצי שקוף
			forcombo.getChildByName("start_btn").alpha = 0.5;
			// הוספת אירוע האזנה
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		}
		
		
		// פוקנציה שמתבצעת בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			// שמירת הערך שנבחר בקומבו בוקס - כלומר המספר שמייצג את המשחק
			mychoice = evt.currentTarget.value;
			var forcombo = stage.getChildByName("forcombo"); // שמירת משתנה לקיצור דרך של הקומבו
			// שינוי השקיפות של כפתור בחרו לחצי שקוף
			forcombo.getChildByName("start_btn").mouseEnabled = false;
			forcombo.getChildByName("start_btn").alpha = 0.3;
		
			// try-אם אנחנו חוששות שהקוד ירוץ עם שגיאות -נעטוף את הקוד ב
			// המטרה פה היא להוריד את אירוע הלחיצה שהצמדנו לכפתור "בחרו משחק" לאחר שאכן נבחר משחק
			// אבל אם עדיין לא בחרנו משחק, כלומר לא הוספנו אירוע לחיצה, אין מה להוריד
			// try and catch- לכן נשתמש ב
			// אנחנו בודקות אם כבר הצמדנו לקומבו אירוע לחיצה - במידה וכן
			// מורידות את אירוע הלחיצה - כדי שכפתור הבחירה לא יהיה לחיץ 
			try {
				forcombo.getChildByName("start_btn").removeEventListener("click", CreateArrayForGame);
			}
			//catch-למקרה ואירעה שגיאה - נדפיס את השגיאה ב
			catch (error) {
				console.log("In function mycb_change - encountered an error");
			}
		
			// אם בחרו משחק תקין
			if (mychoice != 0) {
				//נבחר נושא תקין, נאפשר לחיצה
				forcombo.getChildByName("start_btn").mouseEnabled = true;
				forcombo.getChildByName("start_btn").alpha = 1; // שינוי כפתור בחירה שלקיפות מלאה
				forcombo.getChildByName("start_btn").addEventListener("click", CreateArrayForGame); // הצמדת אירוע לחיצה שייצור את המערך של המשחק הנבחר
			}
		}
		
		// בדיקה איזה משחק נבחר
		function GetGameName() {
			switch (mychoice) {
				case "1": // במידה ובחרתי במשחק של גוף האדם
					return "גוף האדם";
				case "2": // במידה ובחרתי במשחק של החיות
					return "חיות";
				default:
					console.log("אין עוד משחקים");
			}
		}
		
		// פונקציה שמתבצעת לאחר לחיצה על בחירת משחק
		// יוצרת את המערך של המשחק שנבחר
		function CreateArrayForGame() {
			// במידה והגענו לפה ממסך בחירת המשחק - נרצה להוריד את אנימציית הפתיחה
			try {
				stage.removeChild(stage.getChildByName("start_animation"));
		
			} catch (error) {
				console.log("In function CreateArrayForGame: encountered an error while removing start background from stage");
			}
		
			var gameName = GetGameName(); // משתנה לשמירת שם המשחק שנבחר
			// יצירת המערך של השאלות של המשחק הנבחר
			// עטוף בטריי כדי שהלולאה תפסיק מתי שיש שגיאה
			try {
				var i = 0; // אינדקס למעבר על כל האוביקטים של השאלות
				var evalQuestion = eval("question" + i); // שמירת האוביקט של השאלה
				// לולאה למעבר על כל האוביקטים של שהשאלות
				// מתרחשת רק כאשר אין שגיאה בשמירת אוביקט השאלה
				// כלומר, רק כאשר השאלה באמת קיימת
				while (evalQuestion) {
					if (evalQuestion.game == gameName) { // אם השאלה שייכת לסוג משחק שנבחר
						evalQuestion.tryCounter = 0; // שמירה ואיפוס מספר נסיונות המענה לשאלה
						allQuestionsArray.push(evalQuestion); // מוסיפה את האוביקט של השאלה למערך שמכיל את כל השאלות של המשחק
					}
					i++; // העלאת האינדקס ב-1
					evalQuestion = eval("question" + i); // שמירת האוביקט של השאלה הבאה בתור
				}
				// כאשר אין יותר שאלות - יציאה מהלולאה
			} catch (error) {
				console.log("In function CreateArrayForGame - encountered an error");
			}
		
			// שמירת מספר השאלות של המשחק בשביל חישוב הציון
			totalQuestions = allQuestionsArray.length;
			console.log("totalQuestions");
			console.log(totalQuestions);
		
			// במידה וזה משחק חוזר - כלומר אין כפתור כזה על הבמה
			// try- נעטוף ב
			try {
				stage.removeChild(stage.getChildByName("forcombo")); // מורידה את הקומבו מהבמה לאחר לחיצה
			} catch (error) {
				console.log("In function CreateArrayForGame: encountered an error while removing forcombo from stage");
			}
		
			Start(); // קריאה לפונקציה שמתחילה את המשחק
		}
		
		
		//פונקציה שמתחילה את כל המשחק
		function Start() {
			$("#light_blue").css("visibility", "hidden");
			$("#snow").css("visibility", "hidden");
			CreateBtn(lib.bg, 0, 0, "background"); // יצירת רקע סטטי מלא של הבוצ'ר, מערוך וקרש חיתוך
			console.log("background");
			console.log(stage.getChildByName("background"));
			CreateInstance(gameContainer, 0, 0, stage, "gameContainer"); // יצירת מופע הקונטיינר של משחק והשמתו בבמה - יחזיק את האוביקטים של המשחק
			CreateBtn(lib.progress_bar, 1130, 290, "progress_bar"); // יצירת בר ההתקדמות של המשחק
			CreatProgressText(); // יצירת תיבת הטקסט שמראה את התקדמות המשחק במספרים
			CurrengGameBar(); // יצירת הבר בו מוצג שם המשחק
			qnum = parseInt(Math.random() * allQuestionsArray.length); // הגרלת אינדקס רנדומלי של שאלה
			ShowQuestion(); // הפעלת פונקציה להצגת השאלה הנוכחית
			ShowAnswers(); // הפעלת פונקציה להצגת המסיחים של השאלה	
			CreatePauseGameButton(); // יצירת כפתור להשהיית משחק
			CreateTimer(); // יצירת הטיימר של השאלה
		}
		
		
		// פונקציה שמטרתה להציג את השאלה עצמה בלבד - טקסט ותמונה אם יש
		// השאלות מופיעות באופו רנדומלי
		function ShowQuestion() {
			CreateBtn(lib.rolling_pin, 638.95, 96.85, "rolling_pin", gameContainer); // יצירת "כפתור" בגודל המערוך שיחזיק את האוביקטים בשאלה
		
			// חילוץ הטקסט של השאלה
			var question_text = allQuestionsArray[qnum].question; // מחלץ ושומר את הטקסט של השאלה מהתא באוביקט שבמערך השאלות
			var rolling_pin = gameContainer.getChildByName("rolling_pin"); // שמירת משתנה לקיצור המערוך
			var rolling_pin_width = rolling_pin.nominalBounds.width; // שמירת אורך המערוך
			var rolling_pin_height = rolling_pin.nominalBounds.height; // שמירת גובה המערוך	
			// בדיקה האם קיימת תמונה בשאלה
			var hasImage = allQuestionsArray[qnum].hasOwnProperty("quest_img");
		
			// יצירת תיבת הטקסט של השאלה והשמת הטקסט בתיבה
			// המיקום של תיבת הטקסט מותאם לגודל המערוך
			CreateTextBox(rolling_pin, (rolling_pin_width * 0.45), 0, "questionTXTbox", question_text, "bold 14pt Arial");
			var questionTXTbox = rolling_pin.getChildByName("questionTXTbox"); // שמירת משתנה לקיצור - תיבת הטקסט של השאלה
			questionTXTbox.lineHeight = 24; // בשביל ריווח בין השורות
		
			// יצירת ההוראה - בבקשה לבחור את התשובה הנכונה
			CreateTextBox(rolling_pin, 0, 0, "instructionText", "יש לבחור בעוגיה עם התשובה הנכונה ביותר", "12pt Arial");
			var instructionText = rolling_pin.getChildByName("instructionText"); // שמירת משתנה לקיצור - ההוראה של השאלה
			// שימוש בסוג של תנאי שנקרא
			// Conditional (Ternary) Operator
			// שזה פשוט קיצור ממש מגניב לבדיקת תנאי יחיד
			//This is a one-line shorthand for an if-else statement.
			instructionText.x = hasImage ? (rolling_pin_width * 0.45) : 0;
			instructionText.textAlign = hasImage ? "right" : "center"; // מרכוז הטקסט ההוראה
			instructionText.y = rolling_pin_height * 0.3; // מיקום ההוראה בגובה המערוך
		
			// בשביל שבירת השורות בטקסט השאלה
			// שבירת שורות שונה במידה ויש תמונה או אין תמונה
			questionTXTbox.lineWidth = hasImage ? (rolling_pin_width * 0.67) : (rolling_pin_width * 0.9);
		
			// קריאה לפונקציה שמחזירה את מספר השורות בטקסט (לפי רוחב שורה שהגדרנו)
			var totalLines = LineCounterInText("bold 14pt Arial", question_text, questionTXTbox.lineWidth);
		
			// בדיקה כמה שורות יש בשאלה - והתאמת מיקום הטקסט לפי מספר השורות
			switch (totalLines) {
				case 1:
					questionTXTbox.x = hasImage ? (rolling_pin_width * 0.45) : 0; // הזזת מיקום תיבת הטקסט כדי שהטקסט יהיה ממורכז
					questionTXTbox.textAlign = hasImage ? "right" : "center"; // מרכוז הטקסט
					questionTXTbox.y = rolling_pin_height * -0.1; // מיקום טקסט השאלה בגובה המערוך
					break;
				case 2:
					questionTXTbox.y = rolling_pin_height * -0.3; // מיקום טקסט השאלה בגובה המערוך
					questionTXTbox.textAlign = "right"; // מרכוז הטקסט
					break;
				default:
					console.log("לא לא לא להגיע לפה טעות חמורה");
			}
		
			// בדיקה האם קיימת תמונה בשאלה
			if (hasImage) {
				// העלאת התמונה 
				var source_image = new Image(); // onload יצירת משתנה של תמונה חדשה כדי להשתמש בפונקציית
				source_image.src = allQuestionsArray[qnum].quest_img; // שמירת נתיב התמונה
		
				// פונקציה אנונימית שמתרחשת לאחר טעינת התמונה
				// בשביל שהתמונה תעלה בגודל שהגדרנו אותה
				source_image.onload = function () { // השמת פונקציה לתוך מאפיין אונלואד של אוביקט תמונה	
		
					// הוא מי שקרא לפונקציה this 
					// ככה אפשר לזהות לאיזה תמונה אני מתייחסת בקריאה לפונקציה זו
					var bmp = new createjs.Bitmap(this); // יצירת מופע של תמונת המסיח הנלקחת ממקור חיצוני
					bmp.name = "question_image";
		
					// מגדירה איזור פגיעה למעברי עכבר
					// בשביל רקעים שקופים או גדלי תמונות ייחודיים
					var hit = new createjs.Shape();
					hit.graphics.beginFill("#000").drawRect(0, 0, bmp.image.width, bmp.image.height);
					bmp.hitArea = hit;
		
					// מתאימה את גודל ומיקום התמונה
					bmp.regX = 0.5 * bmp.image.width; // משנה את נקודת העוגן של התמונה למרכז התמונה
					bmp.regY = 0.5 * bmp.image.height; // משנה את נקודת העוגן של התמונה למרכז התמונה	 	
					var picW = rolling_pin_width * 0.25; // הגדרת הרוחב החדש של התמונה - האחוז שיתפוס מגודל המערך - למקרה והתמונה ממש רחבה
					var picH = rolling_pin_height * 0.75; // הגדרת האורך החדש של התמונה - האחוז שיתפוס מגודל המערך
					// קריאה לפונקציה עם ערכי הגודל החדשים - מגדירה לתמונה גודל מתאים לכפתור, תוך כדי שמירת פרופורציות
					SetImgSize(bmp, picW, picH); // פונקציה לשינוי גודל תמונה
		
					// הגדרת המיקום של התמונה בתוך המערך
					bmp.x = -(rolling_pin_width / 2.8); // מזיזה אותה שמאלה
					bmp.y = 2.5; // מורידה קצת למטה
		
					// יצירת רקע לבן לתמונה - במידה והיא שקופה - בשביל הגדלת התמונה
					var whiteBg = new createjs.Shape();
					whiteBg.name = "white_background";
					whiteBg.graphics.beginFill("white").drawRect(0, 0, bmp.image.width, bmp.image.height);
					whiteBg.regX = 0.5 * bmp.image.width; // משנה את נקודת העוגן של הרקע הלבן
					whiteBg.regY = 0.5 * bmp.image.height; // משנה את נקודת העוגן של הרקע הלבן 	
					// משנה את גודל הרקע הלבן שיתאים לתמונה
					whiteBg.scaleX = bmp.scaleX * 1.05;
					whiteBg.scaleY = bmp.scaleY * 1.05;
					// הגדרת המיקום של הרקע הלבן בתוך המערך
					whiteBg.x = -(rolling_pin_width / 2.8); // מזיזה אותה שמאלה
					whiteBg.y = 2.5; // מורידה קצת למטה
		
					// הצמדת אירועים של מעברי עכבר לתמונה
					bmp.addEventListener("mouseover", ZoomInOuestionImg); // הגדלת תמונה
					bmp.addEventListener("mouseout", ZoomOutOuestionImg); // הקטנת תמונה
		
					rolling_pin.addChild(whiteBg); // הצמדת הרקע הלבן למערוך עצמו
					rolling_pin.addChild(bmp); // הצמדת התמונה למערוך עצמו
		
					// יצירת אייקון זכוכית מגדלת והצמדתו לתמונה
					CreateBtn(lib.magnify_question, 0, 0, "magnify_question", rolling_pin);
				}
			}
		}
		
		
		// פונקציה שמטרתה להציג את המסיחים עם האלמנט הרנדומלי
		function ShowAnswers() {
			CreateBtn(lib.cutting_board, 355.3, 289.3, "cutting_board", gameContainer); // יצירת "כפתור" בגודל קרש החיתוך שיחזיק את האוביקטים של המסיחים
			var answersArray = allQuestionsArray[qnum].answers.slice(); // יצירת מערך המכיל רק את המסיחים של השאלה הנוכחית
		
			// שמירת האורך של מערך המסיחים  - כדי שלא ישתנה אחרי שהוצאנו מסיחים - משתמשות בו בלולאה שיוצרת את המסיחים
			var answersArrayLength = answersArray.length;
		
			// מיקום העוגיות (המסיחים) על קרש החיתוך בצורה מותאמת למספר המסיחים
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קיצור לקרש החיתוך
			var cutting_board_width = cutting_board.nominalBounds.width; // שמירת אורך קרש חיתוך
			var cutting_board_height = cutting_board.nominalBounds.height; // שמירת גובה קרש חיתוך
			var btnX = []; // X מערך לשמירת מיקומים בציר
			var btnY = []; // Y מערך לשמירת מיקומים בציר
		
			// בדיקה כמה מסיחים יש בשאלה - ומיקום המסיחים על קרש החיתוך בהתאמה (לדוגמה שונה אם יש 3 מסיחים או 6 מסיחים)
			switch (answersArrayLength) {
				case 2: // אם יש 2 מסיחים
					btnXarr = [cutting_board_width * 0.3, cutting_board_width * (1 - 0.3)];
					btnYarr = [cutting_board_height * 0.5, cutting_board_height * 0.5];
					break;
				case 3: // אם יש 3 מסיחים
					btnXarr = [cutting_board_width * 0.17, cutting_board_width * 0.5, cutting_board_width * (1 - 0.17)];
					btnYarr = [cutting_board_height * 0.5, cutting_board_height * 0.5, cutting_board_height * 0.5];
					break;
				case 4: // אם יש 4 מסיחים
					btnXarr = [cutting_board_width * 0.3, cutting_board_width * (1 - 0.3), cutting_board_width * 0.3, cutting_board_width * (1 - 0.3)];
					btnYarr = [cutting_board_height * 0.3, cutting_board_height * 0.3, cutting_board_height * (1 - 0.3), cutting_board_height * (1 - 0.3)];
					break;
				case 5: // אם יש 5 מסיחים
					btnXarr = [cutting_board_width * 0.17, cutting_board_width * 0.5, cutting_board_width * (1 - 0.17), cutting_board_width * 0.3, cutting_board_width * (1 - 0.3)];
					btnYarr = [cutting_board_height * 0.3, cutting_board_height * 0.3, cutting_board_height * 0.3, cutting_board_height * (1 - 0.3), cutting_board_height * (1 - 0.3)];
					break;
				case 6: // אם יש 6 מסיחים
					btnXarr = [cutting_board_width * 0.17, cutting_board_width * 0.5, cutting_board_width * (1 - 0.17), cutting_board_width * 0.17, cutting_board_width * 0.5, cutting_board_width * (1 - 0.17)];
					btnYarr = [cutting_board_height * 0.3, cutting_board_height * 0.3, cutting_board_height * 0.3, cutting_board_height * (1 - 0.3), cutting_board_height * (1 - 0.3), cutting_board_height * (1 - 0.3)];
					break;
				default:
					console.log("Do not come here");
			}
		
			// יצירת כפתורי המסיחים והוספה לבמה
			for (var i = 0; i < answersArrayLength; i++) {
				var random_index_answer = parseInt(Math.random() * answersArray.length); // הגרלת אינדקס רנדומלי של מסיח
		
				CreateBtn(lib.btn, btnXarr[i], btnYarr[i], "btn" + i, cutting_board); // יצירת כפתור רנדומלי למסיח מהמערך ששכפלנו
		
				// הוספת אירוע לחיצה לכל מסיח
				var btn = cutting_board.getChildByName("btn" + i); // שמירת קיצור למופע הכפתור כדי שנוכל לפנות אליו
				btn.addEventListener('click', ClickOnCookie); // הוספת אירוע לחיצה
				btn.cursor = "pointer";
		
				// הוספת המסיח הרנדומלי שהוגרל למערך המסיחים הרנדומלי הגלובלי
				randomAnswersArray.push(answersArray[random_index_answer]);
		
				// קריאה לפונקציה שבודקת האם המסיח הרנדומלי שהוגרל הוא מסוג תמונה
				// מחזירה ערך בוליאני
				if (IsImgFile(answersArray[random_index_answer])) { // אם המשתנה הבוליאני נכון = המסיח מסוג תמונה
		
					var source_image = new Image(); // onload יצירת משתנה של תמונה חדשה כדי להשתמש בפונקציית
					source_image.src = "images/" + answersArray[random_index_answer]; // שמירת נתיב התמונה של המסיח
		
					imgIndexArray.push(source_image.src); // הוספת הנתיב של התמונה הנוכחית למערך הגלובלי לקישור בין תמונה וכפתור 
					imgIndexArray.push(i); // הוספת האינדקס של הכפתור הנוכחי בו נרצה לשים את התמונה, למערך הגלובלי לקישור בין תמונה וכפתור 
		
					source_image.onload = function () { // השמת פונקציה לתוך מאפיין אונלואד של אוביקט תמונה				
						var btnIndex; // משתנה להחזקת האינדקס הכפתור הרצוי
						// לולאה העוברת על תאי המערך הגלובלי המכילים נתיב לתמונה - תאים בעלי אינדקס זוגי בלבד
						for (var j = 0; j < imgIndexArray.length; j += 2) {
							// בכדי למצוא את אינדקס הכפתור המתאים לתמונה עלינו לוודא שאנו מתייחסות לתמונה הנכונה
							//this נתיב התמונה בה נשתמש כעת מוכל ב
							// כך אפשר לפנות אל ההורה האמיתי של המאפיין אונלואד המכיל את הפונקציה
							if (this.src == imgIndexArray[j]) { // בודק האם האוביקט תמונה שמקושר למאפיין של הפונקציה שווה לתא המערך, באמצעות אינדקס האיטרציה הנוכחי
								// בהכרח אינדקס הכפתור הרצוי נמצא בתא הבא במערך הגלובלי
								btnIndex = imgIndexArray[j + 1]; // שמירת אינדקס הכפתור הרצוי כדי שנוכל להשתמש מחוץ ללואה
							}
						}
						// שמירת מופע הכפתור בו נרצה לשים את התמונה
						var imgBtn = cutting_board.getChildByName("btn" + btnIndex); // משתמשת באינדקס הכפתור הרצוי שמצאתי בתנאי
						// A new Bitmap object is created using your image element 
						var bmp = new createjs.Bitmap(this); // יצירת מופע של תמונת המסיח הנלקחת ממקור חיצוני
						bmp.name = "answer_image";
		
						// מגדירה איזור פגיעה למעברי עכבר
						var hit = new createjs.Shape();
						hit.graphics.beginFill("#000").drawRect(0, 0, bmp.image.width, bmp.image.height);
						bmp.hitArea = hit;
		
						// מתאימה את גודל ומיקום התמונה
						bmp.regX = 0.5 * bmp.image.width; // משנה את נקודת העוגן של התמונה למרכז התמונה
						bmp.regY = 0.5 * bmp.image.height; // משנה את נקודת העוגן של התמונה למרכז התמונה	 	
						var picW = imgBtn.nominalBounds.width * 0.55; // הגדרת הרוחב החדש של התמונה- שיתפוס 60% מהכפתור
						var picH = imgBtn.nominalBounds.height * 0.55; // הגדרת הגובה החדש של התמונה- שיתפוס 60% מהכפתור
						// קריאה לפונקציה עם ערכי הגודל החדשים - מגדירה לתמונה גודל מתאים לכפתור, תוך כדי שמירת פרופורציות
						SetImgSize(bmp, picW, picH); // פונקציה לשינוי גודל תמונה		
		
						// יצירת רקע לבן לתמונה - במידה והיא שקופה - בשביל הגדלת התמונה
						var whiteBg = new createjs.Shape();
						whiteBg.name = "white_background";
						whiteBg.graphics.beginFill("white").drawRect(0, 0, bmp.image.width, bmp.image.height);
						whiteBg.regX = 0.5 * bmp.image.width; // משנה את נקודת העוגן של הרקע הלבן
						whiteBg.regY = 0.5 * bmp.image.height; // משנה את נקודת העוגן של הרקע הלבן 	
						// משנה את גודל הרקע הלבן שיתאים לתמונה
						whiteBg.scaleX = bmp.scaleX * 1.02;
						whiteBg.scaleY = bmp.scaleY * 1.02;
		
						// הצמדת אירועים של מעברי עכבר
						bmp.addEventListener("mouseover", ZoomInAnswerImage); // הגדלת תמונה
						bmp.addEventListener("mouseout", ZoomOutAnswerImage); // הקטנת תמונה
		
						imgBtn.addChild(whiteBg); //הצמדת התמונה לכפתור עצמו, כדי שהתמונה תהיה חלק מהכפתור
						imgBtn.addChild(bmp); //הצמדת התמונה לכפתור עצמו, כדי שהתמונה תהיה חלק מהכפתור
		
						// יצירת אייקון זכוכית מגדלת והצמדתו לכפתור
						CreateBtn(lib.magnify_cookie, 0, 0, "magnify_cookie", imgBtn);
					}
		
		
				} else { // במידה והתא במערך שהוגרל הוא לא תמונה - כלומר טקסט פשוט	
					// יצירת תיבת טקסט למסיח הרנדומלי והשמת הטקסט של המסיח
					CreateTextBox(btn, 0, 0, "TXT" + i, answersArray[random_index_answer]);
					var currentAnswerTXT = btn.getChildByName("TXT" + i); // קיצור לתיבת הטקסט של המסיח
					var textLength = answersArray[random_index_answer].length; // קיצור לאורך התווים של התשובה
		
					currentAnswerTXT.lineWidth = btn.nominalBounds.width * 0.76; // בשביל שבירת השורות בטקסט
					currentAnswerTXT.lineHeight = 17; // בשביל רווח בין השורות
					currentAnswerTXT.x = 0.34 * btn.nominalBounds.width; // מיקום הטקסט בציר הרוחבי
		
					// קריאה לפונקציה שמחזירה את מספר השורות בטקסט (לפי רוחב שורה שהגדרנו)
					var totalLines = LineCounterInText("12pt Arial", currentAnswerTXT.text, currentAnswerTXT.lineWidth);
		
					// בדיקה כמה שורות יש במסיח - והתאמת מיקום הטקסט לפי מספר השורות
					switch (totalLines) {
						case 1:
							currentAnswerTXT.x = -3;
							currentAnswerTXT.y = 1;
							currentAnswerTXT.textAlign = "center"; // מרכוז הטקסט בציר ה-X
							currentAnswerTXT.textBaseline = "alphabetic"; // כדי שהטקסט יראה כאילו הוא במרכז העוגייה
							break;
						case 2:
							currentAnswerTXT.y = -(0.18 * btn.nominalBounds.height);
							break;
						case 3:
							currentAnswerTXT.y = -(0.26 * btn.nominalBounds.height);
							break;
						case 4:
							currentAnswerTXT.y = -(0.33 * btn.nominalBounds.height);
							break;
						default:
							console.log("לא לא לא להגיע לפה טעות חמורה");
					}
				}
				answersArray.splice(random_index_answer, 1); // הוצאת המסיח שהגרלנו מהמערך - כדי שלא יוגרל שוב
			}
		}
		
		// תשובה נכונה - מציגה משוב להצלחה
		function RightAnswer(correctBtn) {
			DisableDistracts(); // מנטרלת לחיצה על כפתורי המסיחים
		
			// משנה נראות לעוגייה נכונה - וי ירוק
			correctBtn.gotoAndStop(2);
			// מפעילה משוב להצלחה
			CreateBtn(lib.good_feedback, 625, 350, "good_feedback", gameContainer);
		
			// מעלה את מספר נסיונות המענה של השאלה הנוכחית ב-1
			allQuestionsArray[qnum].tryCounter++;
		
			console.log("allQuestionsArray[qnum].tryCounter = " + allQuestionsArray[qnum].tryCounter);
		
			// חישוב הציון של השאלה הנוכחית
			// והוספת ציון השאלה לציון הסופי של המשחק
			finalScore += 100 / (totalQuestions * allQuestionsArray[qnum].tryCounter);
		
			console.log("finalScore = " + finalScore);
		
			// splice
			allQuestionsArray.splice(qnum, 1); // הוצאת השאלה מהמערך - כדי שלא תופיע שוב
		
			// בודקת אם זאת הייתה השאלה האחרונה
			// אם כן - יוצרת כפתור סיכום משחק
			if (allQuestionsArray.length == 0) {
				// קידום של בר ההתקדמות לפריים האחרון
				stage.getChildByName("progress_bar").gotoAndStop(10);
				var currentProgressText = "הצלחות: " + totalQuestions + "/" + totalQuestions;
				stage.getChildByName("progress_text").outputTXT.text = currentProgressText;
		
				// יצירת כפתור לאנימציית הסיום
				// בדיליי מעט בגלל האנימציה החמודה
				setTimeout(function () {
					CreateBtn(lib.continue_btn, 125, 300, "final_btn", gameContainer);
					console.log("final_btn");
					console.log(gameContainer.getChildByName("final_btn"));
					var finalButtonHelper = new createjs.ButtonHelper(gameContainer.getChildByName("final_btn")); // שימוש בכלי עזר שמדמה כפתור
					gameContainer.getChildByName("final_btn").outputTXT.text = "לסיום המשחק";
					ScaleXY(gameContainer.getChildByName("final_btn"), 1.2);
					gameContainer.getChildByName("final_btn").addEventListener('click', FinalAnimation); // הוספת אירוע לחיצה - צריכה להגיע לאנימציית הסיום
				}, 1800);
				return;
			}
		
			// קידום של בר ההתקדמות
			UpdateProgressBar();
		
			qnum = parseInt(Math.random() * allQuestionsArray.length); // הגרלת אינדקס רנדומלי לשאלה הבאה
		
			// יצירת כפתור לשאלה הבאה - בדיליי מעט בגלל האנימציה החמודה
			setTimeout(function () {
				CreateNextButton();
			}, 1800);
		}
		
		// מציגה משוב לאי-הצלחה	- לא נכון
		function WrongAnswer(distractBtn) {
			DisableDistracts(); // מנטרלת לחיצה על כפתורי המסיחים
			// משנה נראות לעוגייה לא נכונה - איקס אדום
			distractBtn.gotoAndStop(3);
		
			// מפעילה משוב לאי-הצלחה
			CreateBtn(lib.bad_feedback, 625, 350, "bad_feedback", gameContainer);
		
			// מעלה את מספר נסיונות המענה של השאלה הנוכחית ב-1
			allQuestionsArray[qnum].tryCounter++;
			// מעלה את מספר השגיאות הכולל במשחק ב-1
			totalMistakes++;
		
			console.log("allQuestionsArray[qnum].tryCounter = " + allQuestionsArray[qnum].tryCounter);
		
			DrawRandomQuestion(); // מגרילה שאלה חדשה
		
			// יצירת כפתור לשאלה הבאה - בדיליי מעט בגלל האנימציה החמודה
			setTimeout(function () {
				CreateNextButton();
			}, 1800);
		}
		
		// פונקציה להקצאת מאפיינים של מופע דינמי בסיסי
		function CreateInstance(myInstance, xPosition, yPosition, instanceParent, instanceName) {
			instanceParent.addChild(myInstance); // העלאת המופע הדינמי לאוביקט הרצוי
			myInstance.x = xPosition; // X מיקום 
			myInstance.y = yPosition; // Y מיקום 
			myInstance.name = instanceName; // יצירת שם כדי שנוכל לקרוא לה מחוץ לפונקציה
		}
		
		// פונקציה שיוצרת כפתור דינמי
		function CreateBtn(libName, xPosition, yPosition, myName = null, btnParent = stage) {
			var myBtn = new(libName); //יצירת מופע של כפתור דינמי מהספרייה
			// קריאה לפונקציה להקצאת מאפייני כפתור נוספים 
			CreateInstance(myBtn, xPosition, yPosition, btnParent, myName);
		}
		
		// פונקציה שיוצרת תיבת טקסט דינמית
		function CreateTextBox(textParent, xPosition, yPosition, myName = null, myText = "", myFont = "12pt Arial", myColor = "black") {
			var myTxt = new createjs.Text(); //יצירת תיבת טקסט
			myTxt.text = myText; // הצגת הטקסט בתיבת הטקסט
			myTxt.color = myColor; // צבע הפונט
			myTxt.font = myFont; // סוג גופן וגודל הטקסט
			myTxt.textAlign = "right"; // יישור הטקסט לימין
			// קריאה לפונקציה להקצאת מאפיינים דינמיים נוספים 
			CreateInstance(myTxt, xPosition, yPosition, textParent, myName);
		}
		
		// פונקציה שבודקת האם מחרוזת מכילה נתיב לקובץ מסוג תמונה, מחזירה ערך בוליאני	
		function IsImgFile(file) {
			// split בדיקה האם המחרוזת מכילה נקודה באמצעות הפונקציה 	
			var checkIfFileArr = file.split("."); // משתנה לשמירת המערך שהוא תוצר הספליט	
		
			// תנאי שמטרתו להחזיר שקר אם המחרוזת היא לא לתמונה
			if (checkIfFileArr.length != 2) { // בודק האם גודל המערך שונה מ-2, כלומר האם יש 0 נקודות או 2 נקודות ומעלה
				return false; // המחרוזת בטוח לא תמונה - מחזיר שקר ויוצא מהפונקציה
			}
			// בדיקה האם הסיומת היא מסוג תמונה
			switch (checkIfFileArr[1].toLowerCase()) { // התא האחרון במערך הספליט שמכיל את סוג הקובץ, מומר לאותיות קטנות
				case ("png"): // png-במידה והוא שווה ל
				case ("jpg"): // jpg-במידה והוא שווה ל
				case ("gif"): // // gif-במידה והוא שווה ל
					return true; // כלומר הוא בטוח תמונה ולכן מחזיר אמת ויוצא מהפונקציה
				default:
					return false; // המחרוזת בטוח לא תמונה - מחזיר שקר ויוצא מהפונקציה
			}
		}
		
		// מטרת הפונקציה להגדיר מחדש גודל של תמונה בלבד לפי פיקסלים
		// תוך שמירה על הפרופורציות של התמונה המקורית
		function SetImgSize(pic, newWidth, newHeight) {
			var newScaleX = newWidth / pic.image.width; // מחשב מה היחס בין רוחב התמונה הרצוי ורוחב התמונה המקורי 
			var newScaleY = newHeight / pic.image.height; // מחשב מה היחס בין גובה התמונה הרצוי וגובה התמונה המקורי 
		
			// אם יחס הרוחבים קטן יותר מיחס הגבהים
			// זה אומר שצריך להקטין יותר את הרוחב מאשר את הגובה
			if (newScaleX <= newScaleY) {
				pic.scaleX = newScaleX; // משנה את הרוחב בהתאם ליחס הרחבים
				pic.scaleY = newScaleX; // משנה את הגובה בהתאם ליחס הרחבים כדי לשמור על פרופורציה
			} else {
				pic.scaleX = newScaleY; // משנה את הרוחב בהתאם ליחס הגבהים - כדי לשמור על פרופורציה
				pic.scaleY = newScaleY; // משנה את הגובה בהתאם ליחס הגבהים 
			}
		}
		
		
		// מטרת הפונקציה להגדיר מחדש גודל של אוביקט לפי פיקסלים
		function SetSize(obj, newWidth = null, newHeight = null) // הקצאת ערך דיפולטיבי לארגומנטים של הפונקציה
		{
			if (newWidth != null) { // null אם הכנסנו ערך לתוך הארגומנט - כלומר הוא כבר לא 
				obj.scaleX = newWidth / obj.nominalBounds.width; // מחשב פי כמה הרוחב החדש גדול מהרוחב הנומינאלי
			}
			if (newHeight) { // אפשר לכתוב גם ככה
				obj.scaleY = newHeight / obj.nominalBounds.height; // מחשב פי כמה הגובה החדש גדול מהגובה הנומינאלי
			}
		}
		
		
		// פונקציה לספירת מספר השורות שנכנסות ברוחב שורה מוגדרת מראש
		function LineCounterInText(fontSize, allText, maxLineWidth) {
			// מנוע גרפי שקשור לכל מיני אוביקטים דו מימדיים - ביניהם - טקסט
			var ctx = canvas.getContext("2d");
			ctx.font = fontSize; // הפונט שהגדרנו לטקסט
			var wordArray = allText.split(" "); // יצירת מערך שמכיל את כל המילים בטקסט, כלומר תא = מילה
			var lineNum = 1; // כמה שורות יש לטקסט - הדיפולט זה שורה אחת
			var lineWidth = 0; // משתנה לשמירת רוחב הטקסט של המילים בשורה
		
			// לולאה שבודקת כמה מילים יכולות להיכנס ברוחב שורה אחת
			// מטרת הלולאה לספור כמה שורות יש בטקסט
			for (var z = 0; z < wordArray.length; z++) {
				lineWidth += ctx.measureText(wordArray[z] + " ").width; // ספירת הרוחב של המילים בשורה הנוכחית, כולל רווחים
				if (lineWidth > maxLineWidth) { // אם רוחב המילים בשורה גדול מהרוחב המקסימלי שהגדרנו לשורה
					// ספירה מחדש של שורה חדשה = שבירת שורה
					lineWidth = ctx.measureText(wordArray[z] + " ").width; // מתחילות מהמילה הראשונה
					lineNum++; // העלאת המשתנה שסופר את השורות
				}
			}
			return lineNum;
		}
		
		function DrawRandomQuestion() {
			if (allQuestionsArray.length == 1) { // בודקת אם השאלה הנוכחית היא השאלה האחרונה
				qnum = 0;
			} else { // אם זאת לא הייתה השאלה האחרונה
				var temp_qnum = parseInt(Math.random() * allQuestionsArray.length); // הגרלת אינדקס רנדומלי לשאלה הבאה
				while (qnum == temp_qnum) {
					temp_qnum = parseInt(Math.random() * allQuestionsArray.length); // הגרלת אינדקס רנדומלי לשאלה הבאה
				}
				qnum = temp_qnum;
			}
		}
		
		// פונקציה שמטרתה לנטרל את כפתורי המסיחים - שלא יהיו לחיצים
		function DisableDistracts() {
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קיצור לקרש החיתוך
			for (var i = 0; i < randomAnswersArray.length; i++) {
				var currentBtn = cutting_board.getChildByName("btn" + i); // שמירת קיצור לכפתור העוגייה
				currentBtn.removeEventListener('click', ClickOnCookie); // מורידה אירוע לחיצה
				currentBtn.cursor = "default"; // משנה את העכבר לנראות רגילה
				// במידה וקיימת תמונה במסיחים
				try {
					var bmp = currentBtn.getChildByName("answer_image"); // שמירת קיצור התמונה
					bmp.removeAllEventListeners(); // מורידה אירועי מעבר עכבר על התמונה
				} catch (err) {
					console.log("In function DisableDistracts - encountered an error");
				}
			}
		}
		
		// פונקציה שמטרתה להחזיר אפשרות לחיצה לאחר נטרול הכפתורים
		function EnableDistracts() {
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קיצור לקרש החיתוך
			for (var i = 0; i < randomAnswersArray.length; i++) {
				var currentBtn = cutting_board.getChildByName("btn" + i); // שמירת קיצור לכפתור העוגייה
				currentBtn.addEventListener('click', ClickOnCookie); // מוסיפה אירוע לחיצה
				currentBtn.cursor = "pointer"; // משנה את העכבר לנראות לחיצה
				// במידה וקיימת תמונה במסיחים
				try {
					var bmp = currentBtn.getChildByName("answer_image"); // שמירת קיצור התמונה
					// הצמדת אירועים של מעברי עכבר
					bmp.addEventListener("mouseover", ZoomInAnswerImage); // הגדלת תמונה
					bmp.addEventListener("mouseout", ZoomOutAnswerImage); // הקטנת תמונה
				} catch (err) {
					console.log("In function EnableDistracts - encountered an error");
				}
			}
		}
		
		// פונקציה שמתבצעת לאחר לחיצה על השאלה הבאה
		// כל פעם יוצרות מחדש כי כל פעם מוחקות הכל מהבמה
		function NextQuestion() {
			Clean(); // מאפסת משתנים ומנקה את המשחק
			ShowQuestion(); // קריאה לפונקציה להצגת השאלה הבאה
			ShowAnswers(); // הפעלת פונקציה להצגת המסיחים של השאלה
			CreateTimer(); // יצירת הטיימר של השאלה
			CreatePauseGameButton(); // יצירת כפתור להשהיית המשחק
			stage.getChildByName("progress_bar").visible = true; // מחזירה את הבית 
			stage.getChildByName("progress_text").visible = true; // מחזירה את מד ההתקדמות
			gameContainer.getChildByName("rolling_pin").visible = true; // מחזירה נראות לשאלה
		}
		
		// פונקציה שמטרתה לנקות את הבמה לחלוטין
		function Clean(cleanStage = false) {
			randomAnswersArray = [];
			imgIndexArray = [];
			gameContainer.removeAllChildren();
			// בודקת האם לנקות לחלוטין בהחלט את כל הבמה או רק את המחשק
			if (cleanStage) {
				stage.removeAllChildren();
			}
		}
		
		// פונקציה ליצירת כפתור הטיימר  - 30 שניות לשאלה
		function CreateTimer() {
			CreateBtn(lib.timer, 115, 160, "timer", gameContainer); // יצירת כפתור הטיימר והעלאתו לבמה
		
			console.log("timer");
			console.log(gameContainer.getChildByName("timer"));
		
			questionTime = 30; // הגדרת 30 שניות לשאלה
			CallTimerInterval(); // קריאה לפונקציה להפעלת הטיימר
		}
		
		function TimeOut() {
			clearInterval(timer); // עצירת האינטרוול של הטיימר
			DisableDistracts(); // מנטרלת לחיצה על כפתורי המסיחים
			gameContainer.getChildByName("pause_btn").visible = false; // מעלימה את כפתור השהיית המשחק
			gameContainer.getChildByName("rolling_pin").visible = false; // מעלימה את השאלה
			stage.getChildByName("progress_bar").visible = false; // מעלימה את הבית
			stage.getChildByName("progress_text").visible = false; // מעלימה את מד ההתקדמות
		
			// אם לפני שנגמר הזמן בחרתי עוגייה ולחצתי עליה
			// נוריד את הכפתור לבדיקת תשובה מהבמה לאחר שהזמן נגמר
			try {
				var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קרש החיתוך
				cutting_board.removeChild(cutting_board.getChildByName("check_btn"));
			}
			//catch-למקרה ואירעה שגיאה - נדפיס את השגיאה ב
			catch (error) {
				console.log("In function TimeOut - encountered an error");
			}
		
			// הוספת 30 שניות לזמן הסופי של המשחק
			totalTime += 30;
			// מעלה את מספר השגיאות הכולל במשחק ב-1
			// כשנגמר הזמן - זה נחשב לטעות של השחקנית, וזה נספר בכמות הטעויות
			totalMistakes++;
			// מעלה את מספר נסיונות המענה של השאלה הנוכחית ב-1
			allQuestionsArray[qnum].tryCounter++;
		
			console.log("allQuestionsArray[qnum].tryCounter = " + allQuestionsArray[qnum].tryCounter);
		
			//הוספת רקע של נגמר הזמן
			CreateBtn(lib.time_out_bg, (lib.properties.width / 2), (lib.properties.height / 2), "time_out_bg", gameContainer)
			var timeOutBg = gameContainer.getChildByName("time_out_bg");
		
			DrawRandomQuestion(); // מגרילה שאלה חדשה
			CreateNextButton(710, 600);
			gameContainer.getChildByName("next_btn").outputTXT.text = "להמשיך";
		}
		
		// פונקציה ליצירת כפתור המשך לשאלה הבאה
		function CreateNextButton(x = 125, y = 310) {
			CreateBtn(lib.continue_btn, x, y, "next_btn", gameContainer); // יצירת כפתור לשאלה הבאה
			var nextButtonHelper = new createjs.ButtonHelper(gameContainer.getChildByName("next_btn")); // שימוש בכלי עזר שמדמה כפתור
			gameContainer.getChildByName("next_btn").addEventListener('click', NextQuestion); // הוספת אירוע לחיצה	
		}
		
		// פונקציה ליצירת כפתור השהיית המשחק
		function CreatePauseGameButton() {
			CreateBtn(lib.pause_btn, 115, 264, "pause_btn", gameContainer); // יצירת כפתור להשהיית משחק
		
			console.log("pause_btn");
			console.log(gameContainer.getChildByName("pause_btn"));
		
			gameContainer.getChildByName("pause_btn").addEventListener("mousedown", PauseBtnDown); // הוספת אירוע - מתבצעת בעת לחיצה
			gameContainer.getChildByName("pause_btn").addEventListener("pressup", PauseBtnUp); // הוספת אירוע - מתבצעת בסיום לחיצה	
			gameContainer.getChildByName("pause_btn").cursor = "pointer";
		}
		
		// פונקצייה לשינוי הפריים בכפתור ההשהייה למצב התחלתי ווהמשכת המשחק
		function ResetPauseBtnAndContinueGame(event) {
			gameContainer.getChildByName("pause_btn").gotoAndStop("regular_pause");
			ContinueGame();
		}
		
		// פונקציה להשהיית המשחק
		function PauseGame() {
			clearInterval(timer); // עצירת האינטרוול של הטיימר
			DisableDistracts(); // מנטרלת לחיצה על כפתורי המסיחים
			stage.getChildByName("progress_bar").visible = false; // מעלימה את הבית
			stage.getChildByName("progress_text").visible = false; // מעלימה את מד ההתקדמות
			gameContainer.getChildByName("rolling_pin").visible = false; // מעלימה את השאלה
		
			try {
				// הסרת אירועים של מעברי עכבר לתמונה בשאלה
				var rolling_pin = gameContainer.getChildByName("rolling_pin"); // שמירת משתנה לקיצור המערוך
				var question_image = rolling_pin.getChildByName("question_image");
				question_image.removeEventListener("mouseover", ZoomInOuestionImg); // הסרת הגדלת תמונה
				question_image.removeEventListener("mouseout", ZoomOutOuestionImg); // הסרת הקטנת תמונה
			} catch (err) {
				console.log("In function PauseGame - encountered an error");
			}
		
			//הוספת רקע של הפסקת משחק
			CreateBtn(lib.pause_bg, 722, (lib.properties.height / 2), "pause_bg", gameContainer);
			var pauseBg = gameContainer.getChildByName("pause_bg"); // שמירת קיצור למסך השהיית משחק
		
			// יצירת כפתור חזרה למשחק
			CreateBtn(lib.continue_btn, 400, 370, "continue_btn", gameContainer);
			var continueBtn = gameContainer.getChildByName("continue_btn"); // קיצור דרך לכפתור המשך משחק
			continueBtn.outputTXT.text = "חזרה למשחק";
			var continueButtonHelper = new createjs.ButtonHelper(continueBtn); // שימוש בכלי עזר שמדמה כפתור
			continueBtn.addEventListener('click', ResetPauseBtnAndContinueGame); // הוספת אירוע לחיצה
		}
		
		// פונקציה להמשך משחק לאחר יציאה ממסך השהיית משחק
		function ContinueGame() {
			EnableDistracts(); // מאפשרת לחיצה על כפתורי המסיחים
			stage.getChildByName("progress_bar").visible = true; // מחזירה את הבית
			stage.getChildByName("progress_text").visible = true; // מחזירה את מד ההתקדמות
			gameContainer.getChildByName("rolling_pin").visible = true; // מחזירה את השאלה
		
			try {
				// הוספת אירועים של מעברי עכבר לתמונה בשאלה
				var rolling_pin = gameContainer.getChildByName("rolling_pin"); // שמירת משתנה לקיצור המערוך
				var question_image = rolling_pin.getChildByName("question_image");
				question_image.addEventListener("mouseover", ZoomInOuestionImg); // הסרת הגדלת תמונה
				question_image.addEventListener("mouseout", ZoomOutOuestionImg); // הסרת הקטנת תמונה
			} catch (err) {
				console.log("In function ContinueGame - encountered an error");
			}
		
			// מאפשרת לחיצה על כפתור השהיית המשחק
			gameContainer.getChildByName("pause_btn").addEventListener("mousedown", PauseBtnDown); // הוספת אירוע - מתבצעת בעת לחיצה
		
			gameContainer.removeChild(gameContainer.getChildByName("continue_btn")); // מורידה את כפתור המשך משחק שנמצא במסך השהיית משחק
			gameContainer.removeChild(gameContainer.getChildByName("pause_bg")); // מורידה את מסך השהיית המשחק
		
			CallTimerInterval(); // קריאה לפונקציה להמשך הטיימר
		}
		
		function CallTimerInterval() {
			timer = setInterval(function () { // הפונקציה פועלת רק אחרי שנייה
				//  אפס זה הפריים ההתחלתי, אבל הטיימר פועל אחרי שנייה
				// ולכן נתחיל מפריים 1 ולא 0 
				// חישוב הפריים לפי זמן השאלה
				// הזמן מתחיל משנייה 30 והוא הופכי למספר של הפריים
				var timerFrameIndex = 31 - questionTime;
				gameContainer.getChildByName("timer").gotoAndStop(timerFrameIndex);
				questionTime--;
				if (questionTime == 0) {
					gameContainer.getChildByName("timer").gotoAndStop(0);
					TimeOut(); // קריאה לפונקציה שיוצרת מסך- הזמן נגמר
				}
			}, 1000);
		}
		
		// פונקציה שמתרחשת לאחר לחיצה על מסיח (עוגייה)
		function ClickOnCookie(event) {
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קרש החיתוך
			// אם העוגייה כבר נלחצה פעם אחת - אני רוצה שבלחיצה שנייה היא תחזור למצב התחלתי, כלומר לא לחוץ
			// בדיקה האם העוגייה כבר לחוצה לפי מספר הפריים של הסימבול
			if (event.currentTarget.currentFrame == 1) {
				event.currentTarget.gotoAndStop(0); // מחזירה את העוגייה לנראות התחלתית - בלי סוכריות
				cutting_board.removeChild(cutting_board.getChildByName("check_btn")); // מורידה את הכפתור לבדיקת תשובה
				// לולאה שרצה על כל העוגיות ומחזירה לשקיפות מלאה
				for (var i = 0; i < randomAnswersArray.length; i++) {
					(cutting_board.getChildByName("btn" + i)).alpha = 1;
				}
				return
			}
		
			// לולאה שרצה על כל העוגיות
			for (var i = 0; i < randomAnswersArray.length; i++) {
				// קודם כל מחזירה את כל העוגיות למצב התחלתי
				(cutting_board.getChildByName("btn" + i)).gotoAndStop(0);
				// משנה את השקיפות שלהן לחצי
				(cutting_board.getChildByName("btn" + i)).alpha = 0.6;
			}
		
			// בשביל שהפונקציה שבודקת תשובה לא תפעל יותר מפעם אחת בעת לחיצה על כפתור הבדיקה
			// נוריד את הכפתור לבדיקת תשובה מהבמה
			try {
				cutting_board.removeChild(cutting_board.getChildByName("check_btn"));
			}
			//catch-למקרה ואירעה שגיאה - נדפיס את השגיאה ב
			catch (error) {
				console.log("In function ClickOnCookie - encountered an error");
			}
		
			event.currentTarget.alpha = 1; // משנה נראות לעוגייה הנבחירת
			event.currentTarget.gotoAndStop(1); // משנה נראות לעוגייה הנבחירת
			CreateBtn(lib.check_btn, 278, 345, "check_btn", cutting_board); // יצירת כפתור לבחירת תשובה
			var checkBtn = cutting_board.getChildByName("check_btn"); // קיצור דרך לכפתור
			var checButtonHelper = new createjs.ButtonHelper(checkBtn); // שימוש בכלי עזר שמדמה כפתור
			//checkBtn.alpha = 1; // שינוי הגדרות שקיפות עבור כפתור בחירת תשובה -  שיראה לחיץ
			checkBtn.addEventListener('click', CheckAnswer.bind(event.currentTarget)); // הוספת אירוע לחיצה
		
			// במקרה שיש תמונה במסיח - שיראו אותה מעל כולם
			cutting_board.setChildIndex(event.currentTarget, cutting_board.getNumChildren() - 1);
		}
		
		
		// פונקציה שמטרתה לבדוק אם לחצו על תשובה נכונה או שגויה
		function CheckAnswer() {
			// אם המשחק הופסק - הכפתור לא אמור להיות לחיץ ולכן לא יקרה כלום 
			// המשחק הופסק = אנחנו רואות את הפריים של המשך משחק
			if (gameContainer.getChildByName("pause_btn").currentFrame == 2) {
				return;
			}
		
			clearInterval(timer); // עצירת האינטרוול של הטיימר
		
			// הוספת הזמן שלקח לענות על השאלה למשתנה הגלובלי  - הזמן הסופי של המשחק
			totalTime += (30 - questionTime);
		
			// מעלימה את כפתור השהיית המשחק
			gameContainer.getChildByName("pause_btn").visible = false;
		
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קרש החיתוך
			cutting_board.removeChild(cutting_board.getChildByName("check_btn")); // הורדת הכפתור לבחירת התשובה מהבמה
		
			var btn_index = parseInt(this.name.slice(3)); // הוצאת האינדקס משם הכפתור שנלחץ 
			// בדיקה האם ענו על התשובה הנכונה	
			if (randomAnswersArray[btn_index] == allQuestionsArray[qnum].answers[0]) { // השוואה בין המסיח שנלחץ לבין המסיח הנכון מהמערך הגדול
				RightAnswer(this); //הפעלת פונקציה להצלחה
			} else { // במידה ולא ענו על התשובה הנכונה
				WrongAnswer(this); // הפעלת פונקציה שמקבלת את הטקסט של המסיח הלא נכון שנלחץ
			}
		}
		
		function FinalAnimation() {
			Clean(true); // מאפסת משתנים ומנקה הכל
			$("#light_blue").css("visibility", "visible");
			$("#snow").css("visibility", "visible");
			CreateBtn(lib.screen_end_anim, 661.5, 348.4, "final_animation"); // קריאה לאנימציית המשחק
		
			setTimeout(function () {
				FinalScreen(); // קריאה למסך סיכום המשחק
			}, 1800);
		}
		
		// פוקנציה שפועלת לאחר אנימציית הסיום - פה מופיע מסך סיכום המשחק
		function FinalScreen() {
			var final_animation = stage.getChildByName("final_animation"); // קיצור לאנימציית סיום
			//הוספת רקע של תוצאות המשחק
			CreateBtn(lib.final_bg, -10, -30, "final_bg", final_animation);
			var finalBg = final_animation.getChildByName("final_bg"); // שמירת קיצור למסך סיכום משחק
		
			// הצגת הזמן הסופי של המחשק
			finalBg.timeTXT.text = "זמן מענה: " + DisplayFinalTimeText();
		
			// הצגת מספר השגיאות במשחק
			finalBg.mistakesTXT.text = "מספר שגיאות: " + totalMistakes;
		
			// הצגת הציון במשחק
			finalBg.scoreTXT.text = "ציון: " + Math.round(finalScore);
		
			// כפתור "לשחק שוב" - מתחיל מחדש את המשחק ששיחקתי
			CreateBtn(lib.final_cookie_btn, 92.6, 210, "restart_btn", finalBg);
			var restartBtnHelper = new createjs.ButtonHelper(finalBg.getChildByName("restart_btn"));
			//finalBg.getChildByName("restart_btn").outputTXT.text = "לשחק שוב";
			finalBg.getChildByName("restart_btn").addEventListener('click', RestartCurrentGame); // הוספת אירוע לחיצה
		
			// כפתור "סיום" - מחזיר למסך בחירת המשחק - לקומבו בוקס
			CreateBtn(lib.final_cookie_btn, -131, 210, "end_btn", finalBg);
			var endBtnHelper = new createjs.ButtonHelper(finalBg.getChildByName("end_btn"));
			finalBg.getChildByName("end_btn").outputTXT.text = "סיום";
			finalBg.getChildByName("end_btn").addEventListener('click', RestartAndBackToChooseGame); // הוספת אירוע לחיצה
		}
		
		// פונקציה לאתחול המשחק הנוכחי
		function RestartCurrentGame() {
			ResetGameVariables(); // איפוס המשתנים של המשחק
			CreateArrayForGame(); // יצירת המערך של המשחק שוב כי השתמשנו בו במשחק הקודם - והתחלת המשחק
		}
		
		// פונקציה לחזרה למסך הראשי
		function RestartAndBackToChooseGame() {
			ResetGameVariables(); // איפוס המשתנים של המשחק
			mychoice = 0; // איפוס בחירת המשחק
			ChooseGameScreen(false); // קריאה לפונקציה שיוצרת את המסך הראשי לבחירת משחק
		}
		
		// פונקציה לאיפוס המשתנים של המשחק וניקוי הבמה
		function ResetGameVariables() {
			Clean(true); // מאפסת משתנים ומנקה הכל
			//stage.removeAllChildren(); // מנקה הכל
			totalTime = 0; // איפוס הזמן הסופי
			totalMistakes = 0; // איפוס מונה למספר הטעויות
			finalScore = 0; // איפוס הציון במשחק
		}
		
		// פונקציה להחזרת הזמן הסופי בפורמט טקסטואלי מתאים - למסך סיום
		function DisplayFinalTimeText() {
			// אם המשחק ארך יותר מדקה כולל
			if (totalTime > 59) {
				var date = new Date(0); // יוצרת זמן מאופס
				date.setSeconds(totalTime); // מגדירה את הזמן הסופי של המשחק בתור השניות של משתנה הזמן שיצרתי
				var timeString = date.toISOString().substr(14, 5); // מחזירה רק את הדקות והשניות בפורמט הנכון
				if (timeString[0] == 0) {
					return timeString.substr(1, 4);
				}
				return timeString;
			}
			// אם לא, מחזרה את הזמן הסופי עם המילה שניות
			return totalTime + " שניות";
		}
		
		
		// הגדלה!!
		// להגדיל תמונה בשאלה עצמה ולהזיז שמאלה
		function ZoomInOuestionImg(event) {
			var bigScale = 2.4; // פי כמה להגדיל
			var moveX = (bigScale - 1) * 0.5 * event.currentTarget.image.width * event.currentTarget.scaleX; // חישוב כמה צריך להזיז שמאלה
			event.currentTarget.x -= moveX; // הזזת התמונה שמאלה
			var whiteBG = event.currentTarget.parent.getChildByName("white_background"); // שמירת קיצור לרקע הלבן של התמונה
			whiteBG.x -= moveX; // הזזת הרקע הלבן שמאלה
			// ההגדלה עצמה
			ScaleXY(event.currentTarget, bigScale); // הגדלת התמונה
			ScaleXY(whiteBG, bigScale); // הגדלת הרקע הלבן
		
			// סידור האלמנטים על הבמה בסדר תלת מימדי רוצוי
			var questionBtn = event.currentTarget.parent;
			questionBtn.setChildIndex(whiteBG, questionBtn.getNumChildren() - 1);
			questionBtn.setChildIndex(event.currentTarget, questionBtn.getNumChildren() - 1);
		}
		
		// הקטנה!!
		// להקטין תמונה בשאלה עצמה ולהזיז ימינה
		function ZoomOutOuestionImg(event) { // הקטנה!!
			var bigScale = 2.4; // פי כמה הייתה ההגדלה
			var smallScale = 1 / bigScale; // חישוב בכמה צריך להקטין
			var whiteBG = event.currentTarget.parent.getChildByName("white_background"); // שמירת קיצור לרקע הלבן של התמונה
			// ההקטנה
			ScaleXY(event.currentTarget, smallScale); // הקטנה התמונה
			ScaleXY(whiteBG, smallScale); // הקטנת הרקע הלבן
			// ההזזה
			var moveX = (bigScale - 1) * 0.5 * event.currentTarget.image.width * event.currentTarget.scaleX; // חישוב כמה צריך להזיז בחזרה ימינה
			event.currentTarget.x += moveX; // הזזת התמונה ימינה	
			whiteBG.x += moveX; // הזזת הרקע הלבן ימינה	
		
			// כדי שזכוכית המגדלת תהיה הכי למעלה
			var questionBtn = event.currentTarget.parent;
			var magnifyQuestion = questionBtn.getChildByName("magnify_question");
			questionBtn.setChildIndex(magnifyQuestion, questionBtn.getNumChildren() - 1);
		}
		
		
		// להגדיל תמונה במסיחים
		function ZoomInAnswerImage(event) {
			var currentBtn = event.currentTarget.parent; // שמירת קיצור לכפתור העוגייה של התמונה
			var whiteBG = currentBtn.getChildByName("white_background"); // שמירת קיצור לרקע הלבן של התמונה
		
			ScaleXY(event.currentTarget, 2.6); // הגדלת התמונה
			ScaleXY(whiteBG, 2.6); // הגדלת הרקע הלבן
		
			whiteBG.alpha = 1;
			// כדי שהעוגייה שנלחצה תהיה מעל שאר האוביקטים
			var cutting_board = gameContainer.getChildByName("cutting_board"); // שמירת קיצור לקרש החיתוך
		
			var cookieBtn = event.currentTarget.parent;
			cutting_board.setChildIndex(cookieBtn, cutting_board.getNumChildren() - 1);
			cookieBtn.setChildIndex(event.currentTarget, cookieBtn.getNumChildren() - 1);
		
			cookieBtn.removeChild(cookieBtn.getChildByName("magnify_cookie")); // הורדת אייקון זכוכית מגדלת
		}
		
		// להקטין תמונה במסיחים
		function ZoomOutAnswerImage(event) {
			var currentBtn = event.currentTarget.parent; // שמירת קיצור לכפתור העוגייה של התמונה
			var whiteBG = currentBtn.getChildByName("white_background"); // שמירת קיצור לרקע הלבן של התמונה
			ScaleXY(event.currentTarget, (1 / 2.6)); // הקטנת התמונה
			ScaleXY(whiteBG, (1 / 2.6)); // הקטנת הרקע הלבן
		
			// יצירת אייקון זכוכית מגדלת והצמדתו לכפתור
			var cookieBtn = event.currentTarget.parent;
			CreateBtn(lib.magnify_cookie, 0, 0, "magnify_cookie", cookieBtn);
		}
		
		
		// פונקציה לשינוי דינמי של יחסי גודל אוביקט
		function ScaleXY(obj, num) {
			obj.scaleX *= num;
			obj.scaleY *= num;
		}
		
		// פונקציה שמתבצעת בעת לחיצת עכבר
		// בודקת האם המשחק בהשהייה או לא ופועלת לפי זה
		function PauseBtnDown(event) {
			// אם נמצא בהשהיית משחק
			if (event.currentTarget.currentLabel == "regular_play") {
				event.currentTarget.gotoAndStop("down_play");
				ContinueGame();
			} // אם המשחק לא בהשהייה
			else if (event.currentTarget.currentLabel == "regular_pause") {
				event.currentTarget.gotoAndStop("down_pause");
				PauseGame();
			}
		}
		
		// פונקציה שמתבצעת בשחרור עכבר
		// רק משנה את הפריימים של הכפתור
		function PauseBtnUp(event) {
			// אם נמצא בהשהיית משחק
			if (event.currentTarget.currentLabel == "down_play") {
				event.currentTarget.gotoAndStop("regular_pause");
			} // אם המשחק לא בהשהייה
			else if (event.currentTarget.currentLabel == "down_pause") {
				event.currentTarget.gotoAndStop("regular_play");
			}
		}
		
		
		// עדכון ציר התקדמות לפי יחס בין תשובות נכונות לסה"כ התשובות במשחק
		function UpdateProgressBar() {
			var currentNumberOfQuestions = allQuestionsArray.length;
			var CurrentProgressFrame = 10 - Math.round(currentNumberOfQuestions / totalQuestions * 10);
			stage.getChildByName("progress_bar").gotoAndStop(CurrentProgressFrame);
		
			var correctQuestions = totalQuestions - currentNumberOfQuestions;
			var currentProgressText = "הצלחות: " + correctQuestions + "/" + totalQuestions;
			stage.getChildByName("progress_text").outputTXT.text = currentProgressText;
		}
		
		// פונקציה ליצירת מד התקדמות טקסטואלי של המשחק
		function CreatProgressText() {
			var currentProgressText = "הצלחות: " + "0" + "/" + totalQuestions;
			CreateBtn(lib.success_counter_btn, 1165, 66, "progress_text"); //הפעלת אנימציית פתיחה
			stage.getChildByName("progress_text").outputTXT.text = currentProgressText;
		
			console.log("progress_text");
			console.log(stage.getChildByName("progress_text"));
		}
		
		
		function ChooseGameScreen(firstTime = true) {
			// במידה וזאת ההפעלה הראשונה של המשחק - מפעילה מההתחלה את אנימציית הפתיחה
			if (firstTime) {
				CreateBtn(lib.start_animation, 661.5, 348.4, "start_animation"); //הפעלת אנימציית פתיחה
				//קריאה לפונקציה שיוצרת את הכפתור לבחירת משחק
				setTimeout(function () {
					CreateComboBox();
				}, 5000);
			} else { // במידה וזה הפעלה חוזרת
				CreateBtn(lib.start_animation, 661.5, 348.4, "start_animation"); //הפעלת אנימציית פתיחה
				var startAnimation = stage.getChildByName("start_animation");
				startAnimation.gotoAndStop(38);
				startAnimation.bubbleTXT.gotoAndStop("end");
				CreateComboBox(); // יצירת הכפתור לבחירת משחק
			}
		}
		
		// //יצירת הבר בו מופיע השם של המשחק עם הלוגו
		function CurrengGameBar() {
			CreateBtn(lib.current_game, 115, 66, "current_game_bar");
			var gameBar = stage.getChildByName("current_game_bar");
			gameBar.outputTXT.text = GetGameName();
			console.log("current_game_bar");
			console.log(stage.getChildByName("current_game_bar"));
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/LaCasaDeCookie_atlas_.png?1582398900954", id:"LaCasaDeCookie_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1582398901529", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1582398901529", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1582398901529", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;