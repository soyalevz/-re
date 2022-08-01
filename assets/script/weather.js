
window.addEventListener('load', ()=>{
   let lon
   let lat

   let temperaturaValor = document.getElementById('temperatura-valor')
   let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

   let ubicacion = document.getElementById('ubicacion')
   let iconoAnimado = document.getElementById('icono-animado')

   let vientoVelocidad = document.getElementById('viento-velocidad')

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition( posicion =>{
			// console.log(posicion.coords.latitude)
			lon =  posicion.coords.longitude
			lat = posicion.coords.latitude

			const url = `https://api.openweathermap.org/data/2.5/weather?q=Santiago&lang=es&units=metric&appid=${'f6a1c95964d066052872d79da71dd548'}`

			fetch(url)
			.then (response => {return response.json()})
			.then( data =>{
				let temp = Math.round(data.main.temp)
				temperaturaValor.textContent = `${temp} °C`
                console.log (data.weather[0].description)
				
				let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`

				console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='assets/animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='assets/animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='assets/animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='assets/animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='assets/animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='assets/animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='assets/animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }

				

			})
			.catch(error =>{
				console.log(error)
			})
		})
	}
})