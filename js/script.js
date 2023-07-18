$(document).ready(function(){

	let error1 = "Can't be blank";
	let error2 = "Wrong format, numbers only";
	let error3 = "Can't be blank";
	let error4 = "Can't be blank";

	let adv1 = document.getElementById('error_1');
	let adv2 = document.getElementById('error_2');
	let adv3 = document.getElementById('error_3');
	let adv4 = document.getElementById('error_4');


/* inicio funcion click confirmar */


	$("div#confirmar").click(function(){
        
        let nombre= document.getElementById("nombretarjeta").value;
		let numero= document.getElementById("numerotarjeta").value;
		let mes= document.getElementById("mestarjeta").value;
		let year= document.getElementById("anotarjeta").value;
		let cvc= document.getElementById("cvctarjeta").value;

		let auxnumero = numero; 
	  	auxnumero = auxnumero.replace(/ /g,"");
	  	
	  	if (nombre.length>1 && numero.length==19 && mes.length==2 && year.length==2 && cvc.length==3 && 
	  		isNaN(auxnumero)==false && isNaN(mes)==false && isNaN(year)==false && isNaN(cvc)==false &&
	  		mes.includes(" ")==false && year.includes(" ")==false && cvc.includes(" ")==false) 
	  	{

		document.getElementById("formu").style.display= "none";
		document.getElementById("comp").style.display= "grid";
		
	  	}
	  	else{

		if (nombre.length==0) {
			error1 = "Can't be blank";
			document.getElementById("nombretarjeta").style.border="1px solid hsl(0, 100%, 66%)";

				adv1.innerHTML = error1;
		}
		else{
			error1=""
			document.getElementById("nombretarjeta").style.border="1px solid hsl(270, 3%, 87%)";
			adv1.innerHTML = error1;
		}

		
		if (numero.length==0) {
			error2 = "Can't be blank";
			document.getElementById("numerotarjeta").style.border="1px solid hsl(0, 100%, 66%)";
			
			adv2.innerHTML = error2;
		}
		else{
			

			if (isNaN(auxnumero)) {
		  		document.getElementById("numerotarjeta").style.border="1px solid hsl(0, 100%, 66%)";
		  		error2 = "Wrong format, numbers only";
				adv2.innerHTML = error2;
			}else{
				error2=""
				document.getElementById("numerotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
				adv2.innerHTML = error2;
			}
		}

		if (mes.length==0 || year.length==0) {
			error3 = "Can't be blank";
			if (mes.length==0) {
				document.getElementById("mestarjeta").style.border="1px solid hsl(0, 100%, 66%)";
			}
			if (year.length==0) {
				document.getElementById("anotarjeta").style.border="1px solid hsl(0, 100%, 66%)";
			}

			adv3.innerHTML = error3;
		}
		else{
			 
			if (isNaN(mes) || isNaN(year) || mes.includes(" ") || year.includes(" ")) {
				
				if (isNaN(mes) || mes.includes(" ")) {
					error3 = "Wrong format, numbers only";
					document.getElementById("mestarjeta").style.border="1px solid hsl(0, 100%, 66%)";
				}

				if (isNaN(year) || year.includes(" ")) {
					error3 = "Wrong format, numbers only";
					document.getElementById("anotarjeta").style.border="1px solid hsl(0, 100%, 66%)";
				}

				adv3.innerHTML = error3;
			}else{
				error3=""
				document.getElementById("mestarjeta").style.border="1px solid hsl(270, 3%, 87%)";
				document.getElementById("anotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
				adv3.innerHTML = error3;
			}
			

			
		}


		if (cvc.length==0) {
			error4 = "Can't be blank";
			document.getElementById("cvctarjeta").style.border="1px solid hsl(0, 100%, 66%)";
			adv4.innerHTML = error4;
		}
		else{
			if (isNaN(cvc) || cvc.includes(" ")) {
				error4 = "Wrong format, numbers only";
				document.getElementById("cvctarjeta").style.border="1px solid hsl(0, 100%, 66%)";
				adv4.innerHTML = error4;
			}else{
				error4=""
				document.getElementById("cvctarjeta").style.border="1px solid hsl(270, 3%, 87%)";
				adv4.innerHTML = error4;
			}
			

		}

		
		}
    });
    /* fin funcion click confirmar */

    /* inicio funcion click continuar */

	$("div#continuar").click(function(){
		window.location.reload()
	});
	/* **************finfuncion click continuar ************ */



	/* ************** funcion para validar nombre ************ */
	nombre_t = $('input#nombretarjeta').val();
	$('span#nombre_tarjeta').html("JANE APPLESEED");


	$('input#nombretarjeta').on('input', function() {
	  	nombre_t = $('input#nombretarjeta').val();
	  	

	  	if (nombre_t.length==0) {
	  		$('span#nombre_tarjeta').html("JANE APPLESEED");

	  	}else{
	  		$('span#nombre_tarjeta').html(nombre_t);
	  	}

	});
	/* ************** FIN funcion para validar nombre ************ */

	/* ************** funcion para validar input numero de tarjeta ************ */

	numero_t = $('input#numerotarjeta').val();
	$('span#numero_tarjeta').html("0000 0000 0000 0000");


	$('input#numerotarjeta').on('input', function() {
	  	numero_t = $('input#numerotarjeta').val();

	  	

	  	if (numero_t.length==0 || numero_t.length>19) {
	  		$('span#numero_tarjeta').html("0000 0000 0000 0000");
	  		if (numero_t.length>19) {
	  			
	  		}
	  		else{
	  			document.getElementById("numerotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
	  			error2 = "";
				adv2.innerHTML = error2;
	  		}
	  	}else{
	  		$('span#numero_tarjeta').html(numero_t);
	  		document.getElementById("numerotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
	  		error2 = "";
			adv2.innerHTML = error2;
	  	}
	  	

	});
	/* ************** FIN funcion para validar input numero de tarjeta ************ */

	/* ************** funcion2 para validar input numero de tarjeta ************ */
	numerotarjeta.addEventListener('keyup', (e) => {
	
		let valorInput = e.target.value;

		numerotarjeta.value = valorInput
		.replace(/\s/g, '')
		.replace(/([0-z]{4})/g, '$1 ')
		.trim();
		/*esta parte la logre gracias a: 
		https://www.youtube.com/watch?v=7bciaLTTr7s
		https://codea.app/blog/eliminar-espacios-input#:~:text=Para%20eliminar%20espacios%20en%20blanco,luego%20la%20reemplazamos%20sin%20espacios.
		en esta parte se da el formato al formulario de la tarjeta*/
	
	});

	/* ************** FIN funcion2 para validar input numero de tarjeta ************ */

	/* ************** funciones para validar input de fecha ************ */
	mm_t = $('input#mestarjeta').val();
	yy_t = $('input#anotarjeta').val();

	$('span#span_mm').html("00");
	$('span#span_yy').html("00");


	$('input#mestarjeta').on('input', function() {
	  	mm_t = $('input#mestarjeta').val();
	  	

	  	if (mm_t.length==0 || mm_t.length>2) {
	  		$('span#span_mm').html("00");
	  		if (mm_t.length>2) {
	  			document.getElementById("mestarjeta").style.border="1px solid hsl(0, 100%, 66%)";

	  			error3 = "Wrong format, too long";
				adv3.innerHTML = error3;
	  		}
	  		else{
	  		document.getElementById("mestarjeta").style.border="1px solid hsl(270, 3%, 87%)";
			
	  			error3 = "";
				adv3.innerHTML = error3;
	  		}
	  	}else{
	  		$('span#span_mm').html(mm_t);
	  		document.getElementById("mestarjeta").style.border="1px solid hsl(270, 3%, 87%)";
	  	}
	  	
	});

/* **************  input de YY ************ */
	$('input#anotarjeta').on('input', function() {
	  	yy_t = $('input#anotarjeta').val();
	  	

	  	if (yy_t.length==0 || yy_t.length>2) {
	  		$('span#span_yy').html("00");
	  		if (yy_t.length>2) {
	  			
	  			document.getElementById("anotarjeta").style.border="1px solid hsl(0, 100%, 66%)";
	  			error3 = "Wrong format, too long";
				adv3.innerHTML = error3;
	  		}
	  		else{

			document.getElementById("anotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
	  			error3 = "";
				adv3.innerHTML = error3;
	  		}
	  	}else{
	  		$('span#span_yy').html(yy_t);
	  		document.getElementById("anotarjeta").style.border="1px solid hsl(270, 3%, 87%)";
	  	}
	  	
	});
/* ************** FIN funciones para validar input de fecha ************ */

/* ************** funcion para validar input de CVC ************ */

	clave_t = $('input#cvctarjeta').val();
	$('span#span_clave').html("000");

	$('input#cvctarjeta').on('input', function() {
	  	clave_t = $('input#cvctarjeta').val();
	  	

	  	if (clave_t.length==0 || clave_t.length>3) {
	  		$('span#span_clave').html("000");
	  	}else{
	  		$('span#span_clave').html(clave_t);
	  	}
	  	
	});
	/* **************FIN funcion para validar input de CVC ************ */



});




