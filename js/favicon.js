window.onload = function(){ 
	// Se instancia canvas
  let canvas = document.createElement('canvas');
	// Puedes elegir otros 32x32, pero hay que tener en cuenta luego en los for los pix
  canvas.width=16;
	canvas.height=16;
	let ctx = canvas.getContext('2d');
	// Contadores x : izq a der, y : arr a aba
	let contador = {
		x : 0,
		y : 0
	}
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			// Se hace modulo de dos para que en par blanco impar negro(tablero de ajedrez)
			ctx.fillStyle= ((( x + y ) % 2) == 0) ? "white" : "black";
      // Se suman la cordenadas mas contador
			ctx.fillRect( x + contador.x, y + contador.y, 2, 2);
			contador.x++;
		}
		// x Se inicializa en cada y (puedes modificarlo para que se haga como tu quieras) 
		contador.x = 0;
		contador.y++;
	}
  // Se crea el link y se append en el head, ya convertido a base64 gracias al .toDataURL()
	var link = document.createElement('link');
	link.type='image/x-icon';
	link.rel='shortcut icon';
	link.href=canvas.toDataURL("image/x-icon");
	document.getElementsByTagName('head')[0].appendChild(link);
}
