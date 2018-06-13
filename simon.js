	function obtenerKeyCode(el)
	{
		return el.getAttribute("data-key");
	}

	function activar(keyCode, options = {}) 
	{
		let el;
		el = tarjetasArreglo[keyCode];
		el.classList.add("active");
		
		if (options.exito) 
		{
			el.classList.add("success");
		}
		else if (options.falla)
		{
			el.classList.add("fail");
		}
		//despues de un tiempo desactiva la tecla en elemnto pasado por parametro
		setTimeout ( function desactivar() { el.className = "key" }, 500);
	}


	function generarTeclas(niveles)
	{
		//declara un nuevo arreglo con lengh = niveles y rellena todos en valor 0
		let arreglo = new Array(niveles).fill(0);
		//rellena el arreglo a travez de una funcion pasada por parametro
		arreglo = arreglo.map(generarTeclaAleatoria);
		return arreglo;
	}

	function generarTeclaAleatoria(min, max) 
	{
		if (min == 0 || max == 0) 
		{
			min = 1;
			max = 16;
		}
		return Math.round( Math.random() * (max - min) + min  )
	}

	function pasarNivel(nivelActual) 
	{
		iArreglo = 0; //reinicia la cuenta del keydown

		//indicador de victoria total
		if (nivelActual == niveles) alert("ganaste");

		//indicador de nivel acutal
		alert("Nivel " + nivelActual);

		for (let i = 0; i < nivelActual; i++) 
		{	
			//animador de las teclas iniciales
			setTimeout(  function () { activar(tarjetas[i]) } , 1000 * (i+1)  );
		}
	}	

	function clicar(dataKey) 
	{
			
		if ( dataKey == tarjetas[iArreglo]) 
		{
			activar(dataKey, {exito:true});
			iArreglo++;
		}
		else
		{
			activar(dataKey, {falla:true});
			
			setTimeout( function() { alert("perdiste"); }, 500 ) 
			setTimeout( function() { iniciarJuego(); }, 1000 ) 
				
			
			
		} 
		
		if (iArreglo == nivelInicial) 
		{
			nivelInicial++;
			window.removeEventListener("onclick", clicar)
			setTimeout ( function() { pasarNivel(nivelInicial) }, 500 );
			
		}
	}


	function iniciarJuego()
	{
		tarjetasArreglo = document.getElementsByClassName('key');
		niveles = 16;
		tarjetas = generarTeclas(niveles); //es un array, se genera apenas empieza la app
		iArreglo = 0;
		nivelInicial = 1;
		pasarNivel(nivelInicial);
	}

	let tarjetasArreglo;
	let niveles;
	let tarjetas;
	let iArreglo;
	let nivelInicial;



	



	

