(function(global){
	function UserBox(options){
		this.options = options || {};
		this.options.init ? this.init() : '';
		this.options.drag ? this.drag() : '';
	}
	UserBox.prototype = {
		init :function(){
			this.dom = document.createElement("div");
			this.dom.className = "box";
			document.body.appendChild(this.dom);
			this.style();
		},
		style :function (){
			this.css = '.box{width:100px;height:100px;background:red;position:absolute;}.box:hover{cursor:move;}'
			// this.styles = document.createElement("style");
			this.styles = document.getElementsByTagName("style")[0] || document.createElement("style");
			console.log(this.styles);
			document.head.appendChild(this.styles);
			this.styles.innerHTML = this.css;
		},
		drag :function(){
			var _this = this;
			_this.dom.onmousedown = function(ev){
				var ev = event || ev;
				var left1 = ev.clientX - _this.dom.offsetLeft;
				var top1 = ev.clientY - _this.dom.offsetTop;
				document.onmousemove = function(ev){
					var ev = event || ev;
					_this.dom.style.left = ev.clientX - left1+'px';
					_this.dom.style.top = ev.clientY - top1+'px';
				}
				document.onmouseup = function(){
					document.onmousemove = document.onmouseup = null;
				}
				ev.preventDefault();
			}
		}
	}
	global.UserBox = UserBox;
})(window)
