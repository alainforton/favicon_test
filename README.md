# favicon_test
Prueba de distintos modos de incrustar favicon y su peso correspondiente.

**Se realiza 4 pruebas para detectar que pesa en kbytes o bytes, a la hora de incrustar el favicon.ico**

---
favicon_1_: [test 1](https://alainforton.github.io/favicon_test/favicon_1_.html) 
favicon_2_: [test 2](https://alainforton.github.io/favicon_test/favicon_2_.html)
favicon_3_: [test 3](https://alainforton.github.io/favicon_test/favicon_3_.html)
favicon_4_: [test 4](https://alainforton.github.io/favicon_test/favicon_4_.html)
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
Se realiza js para que lo haga dinamicamente.
```javascript
window.onload = function(){ 
	var canvas = document.createElement('canvas');
	canvas.width=8;
	canvas.height=8;
	var ctx=canvas.getContext('2d');
	
	for(var i = 0; i < 8; i++){
		for(var j = 0; j < 8; j++){
			if(((i+j)%2)==0){
				ctx.fillStyle="white";
				ctx.fillRect(i,j,1,1);
			}else{
				ctx.fillStyle="black";
				ctx.fillRect(i,j,1,1);
	}}}
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
<link type="image/x-icon" rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQYlWP4////fwYGhv+4aAZ8kv/////PMCxMAAADhp9hCrL3JwAAAABJRU5ErkJggg==">
```

## Resultado final
---
favicon_1_: html 123 Bytes + favicon.ico 318 Bytes = 441 Bytes
favicon_2_: html 556 Bytes 
favicon_3_: html 98  Bytes + js 415 Bytes  = 512 Bytes
favicon_4_: html 257 Bytes 
---

Realizar un script, para obtener el base 64 del favicon que quieras es mejor que la imagen o pasar la imagen a base 64. Por lo tanto despues de esta preuba se detecta que realizar el favicon por js es menos pesado.




