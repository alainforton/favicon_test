# favicon_test (16x16)
# Prueba de distintas posibilidades del favicon

## 1 ICO kbytes ? 
El ico y base 64 del test 1 y 2 [favicon.cc](https://www.favicon.cc/?action=icon&file_id=802401)

**Se realiza 4 pruebas para detectar que pesa en kbytes o bytes, a la hora de incrustar el favicon.ico**

---

* favicon_1_: [test 1](https://alainforton.github.io/favicon_test/favicon_1_.html) 
* favicon_2_: [test 2](https://alainforton.github.io/favicon_test/favicon_2_.html)
* favicon_3_: [test 3](https://alainforton.github.io/favicon_test/favicon_3_.html)
* favicon_4_: [test 4](https://alainforton.github.io/favicon_test/favicon_4_.html)

---

* Test 1 
Se utiliza el modo que se utiliza normalmente, es decir un archivo ico, mas el tag del link referenciando el mismo.

```html
<link href="img/favicon.ico" rel="icon" type="image/x-icon">
```

* Test 2 
Se utiliza el favicon encriptado en base 64

```html
<link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEAEQARABEAEQARABEAEREAEQARABEAEQARABEAEQAAEQARABEAEQARABEAEQAREQARABEAEQARABEAEQARAAARABEAEQARABEAEQARABERABEAEQARABEAEQARABEAABEAEQARABEAEQARABEAEREAEQARABEAEQARABEAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" rel="icon" type="image/x-icon"/>
```

* Test 3
Se realiza js para que lo haga dinamicamente. En el test el js esta min.
```javascript

window.onload = function(){ 
	let canvas = document.createElement('canvas');
	canvas.width=16;
	canvas.height=16;
	let ctx = canvas.getContext('2d');
	
	let contador = {
		x : 0,
		y : 0
	}
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			
			ctx.fillStyle= ((( x + y ) % 2) == 0) ? "white" : "black";
			ctx.fillRect( x + contador.x, y + contador.y, 2, 2);
			
			contador.x++;
		}
		
		contador.x = 0;
		contador.y++;
	}
	var link = document.createElement('link');
	link.type='image/x-icon';
	link.rel='shortcut icon';
	link.href=canvas.toDataURL("image/x-icon");
	document.getElementsByTagName('head')[0].appendChild(link);
}

```

* Test 4 
Aprovechando el js se genera y a posteriori se copia el tag link.

```html
<link type="image/x-icon" rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVQ4je2QoQEAAAiD+P9pLAarWrdGGAHsAQJumbfgehz8FKRBGqSBqgV8on2fKb+SIQAAAABJRU5ErkJggg==">
```

## Resultado final

---

* favicon_1_: html 123 Bytes + favicon.ico 318 Bytes = 441 Bytes
* favicon_2_: html 556 Bytes 
* favicon_3_: html 98  Bytes + js 465 Bytes  = 562 Bytes
* favicon_4_: html 274 Bytes

---

Realizar un script, para obtener el base 64 del favicon que quieras es mejor que la imagen o pasar la imagen a base 64. Por lo tanto despues de esta preuba se detecta que realizar el favicon por js es menos pesado.

## 2 favicon animado
Para animar el favicon se puede tomar distintos caminos, pero al final y despues de dos pruebas he determinado que realizar primero el dise;o en js y encriptarlo a base 64 es menos pesado, aunque no se tiene en cuenta para dise;os mas complejos.

En este enlace puedes ver el favicon intercalado animado con un setInterval a 200 [Animado](https://alainforton.github.io/favicon_test/favicon_animado_.html)

```javascript
	return setInterval(function() {    
 		ico.href = colors[contadoranimacion%2] ;
 		contadoranimacion++; 	
	}, 200);
```
 Lo que se hace es cambiar directamente el href(el base 64) entre dos opciones con modulo de 2.
