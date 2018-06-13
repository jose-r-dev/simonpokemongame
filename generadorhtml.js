window.onload = function ventanaCargada()
{

	function numeroAleatorio(min, max)
	{
		return Math.round( Math.random() * (max - min) + min )
	}
	
	function rellenarArreglo (arreglo)
	{
		//rellena el arreglo de forma aleatoria
		let aux = 0;
	
		for (let i = 0; i < arreglo.length; i++) 
		{
			aux = numeroAleatorio(1,150);
			
			//comparar aux con arreglo desde 0 hasta [i]
			for (let j = 0; j <= i; j++) 
			{
				// si es aux == algun valor del arreglo
				if (aux == arreglo[j]) 
				{
					// generar otro aux y volver a comparar desde 0 hasta i
					aux = numeroAleatorio(1,150)
					j = 0;
	
				}
			}
	
			arreglo[i] = aux;
		}	
	
		return arreglo
	}
	
	function colocarImagenes() 
	{
		//funcion para rellenar cada div "fila"	con 4 pokemones
		let contenedorImagen = "";
		let arregloImagenes = new Array (4).fill("");
		let contadorPokemonesString = "";
	
		for (let i = 0; i <= 3; i++) 
		{	
			// condicionales para añadir los "00" en los numero en el api de la pokedex
			if (pokemones[contadorPokemones] < 10)
			{
				contadorPokemonesString = "00" + String(pokemones[contadorPokemones]) ;
			}
			else if (pokemones[contadorPokemones] <100 && pokemones[contadorPokemones] >= 10)
			{
				contadorPokemonesString = "0" + String (pokemones[contadorPokemones]);
			}
			else
			{
				contadorPokemonesString = String (pokemones[contadorPokemones]);
			}

			contenedorImagen = ` <div class="key" data-key= "${contadorPokemones}" onclick="clicar(${contadorPokemones})">
									<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${contadorPokemonesString}.png" alt="squirtle">
								</div> ` ;
			arregloImagenes[i] = contenedorImagen;

			contadorPokemones++;

		}
	
		return arregloImagenes;
	}
	
	function rellenarFilas ()
	{
		for (let i = 0; i < filas.length; i++) 
		{
			filas[i].innerHTML = colocarImagenes();
		}
		
	}
	
	//arreglo de 20 pokemones al azar
	let contadorPokemones = 0;
	let pokemones = new Array(20).fill(0);
	pokemones = rellenarArreglo(pokemones);
	
	//divs de clase fila en el html
	let filas = document.getElementsByClassName("row");
	rellenarFilas();

	setTimeout(function(){iniciarJuego(),1000})
	
}


