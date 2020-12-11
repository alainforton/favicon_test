
window.onload = function(){ 

var contadoranimacion = 0;

	let canvas = document.createElement('canvas');
	canvas.width=16;
	canvas.height=16;
	let ctx = canvas.getContext('2d');
var colors = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQYlWP4////fwYGhv+4aAZ8kv/////PMCxMAAADhp9hCrL3JwAAAABJRU5ErkJggg==','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVQ4je2QoQEAMAyD+P+q+B7F7OxWG4kAAWY0IyDgK7MO/IoXLwN90Ad9oBkPpwdEH1RbDS0AAAAASUVORK5CYII='];	
	let contador = {
		x : 0,
		y : 0
	}
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			
			ctx.fillStyle= ((( x + y ) % 2) == 0) ? "red" : "black";
			ctx.fillRect( x + contador.x, y + contador.y, 2, 2);
			
			contador.x++;
		}
		
		contador.x = 0;
		contador.y++;
	}
	var ico = document.createElement('link');
	ico.type='image/x-icon';
	ico.rel='shortcut icon';
	ico.href=canvas.toDataURL("image/x-icon");
	document.getElementsByTagName('head')[0].appendChild(ico);
	
		
	
	return setInterval(function() {    
 		console.log(contadoranimacion);
 		ico.href = colors[contadoranimacion%2] ;
 		contadoranimacion++;
 	
	}, 200);
}
