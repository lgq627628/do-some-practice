(function(){

	var _jQuery = window.jQuery;
	var _$ = window.$;

	// 暴露接口供外界使用
	var jQuery = window.jQuery = window.$ = function(selector){
		return new jQuery.fn.init(selector);
	};

	// 处理原型对象
	jQuery.fn = jQuery.prototype = {
		init:function(selector){
			var ele = document.querySelectorAll(selector);
			Array.prototype.push.apply(this,ele);
			return this;
		},
		jQuery:"1.0.0",
		length:0,
		size:function(){
			return this.length;
		}
	};
	jQuery.fn.init.prototype = jQuery.fn;
	// 实现继承，这里只处理一个参数，也就是插件的扩展
	jQuery.extend = jQuery.fn.extend = function(){
		var obj = arguments[0];
		for(var name in obj){
			this[name] = obj[name];
		}
	};

	// 添加静态方法，为jQ本身添加全局方法
	jQuery.extend({
		trim:function(text){
			return (text||"").replace(/^\s+|\s+$/g,"");
		},
		noConflict:function(){
			window.$ = _$;
			window.jQuery = _jQuery;
			return jQuery;
		}
	});

	// 添加实例方法，为jQ对象添加方法
	jQuery.fn.extend({
		get:function(num){
			return this[num];
		},
		each:function(fn){
			for (var i = 0; i < this.length; i++) {
				fn(i,this[i]);
			};
			return this;
		},
		css:function(){
			var len = arguments.length;
			if(len == 1){
				return this[0].style[arguments[0]];
			}else{
				var name = arguments[0];
				var value = arguments[1];
				this.each(function(index,ele){
					ele.style[name] = value;
				});
			}
			return this;
		}
	});

})();