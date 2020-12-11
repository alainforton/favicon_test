# favicon_test (16x16)

Prueba de distintos modos de incrustar favicon y su peso correspondiente. 
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
	var canvas = document.createElement('canvas');
	canvas.width=16;
	canvas.height=16;
	var ctx=canvas.getContext('2d');
	
	var doblex = 0;
	var dobley = 0;
	
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			if(((x+y)%2)==0){
				ctx.fillStyle="white";
				ctx.fillRect(x+doblex,y+dobley,2,2);
			}else{
				ctx.fillStyle="black";
				ctx.fillRect(x+doblex,y+dobley,2,2);
			}
			console.log(x, y);
			doblex = doblex + 1;
		}
		doblex = 0;
		dobley = dobley + 1;
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

# Resultado final

---

* favicon_1_: html 123 Bytes + favicon.ico 318 Bytes = 441 Bytes
* favicon_2_: html 556 Bytes 
* favicon_3_: html 98  Bytes + js 465 Bytes  = 562 Bytes
* favicon_4_: html 274 Bytes

---

Realizar un script, para obtener el base 64 del favicon que quieras es mejor que la imagen o pasar la imagen a base 64. Por lo tanto despues de esta preuba se detecta que realizar el favicon por js es menos pesado.




