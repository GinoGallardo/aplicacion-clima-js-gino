let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'b00b07e15d77c2d3d5a476e02b85f22c'
let difkelvin = 273.15
let icono_animado = document.getElementById('icono_animado')
let contenedor = document.getElementById('contenedor')

document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if (ciudad){
    FetchDatosClima(ciudad)
  }
})

function FetchDatosClima(ciudad){
  fetch (`${urlBase}?q=${ciudad}&appid=${api_key}`)
  .then(data => data.json())
  .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima (data){
  console.log(data)
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=''

  const ciudadNombre = data.name
  const paisNombre = data.sys.country
  const temperatura = data.main.temp
  const humedad = data.main.humidity
  const icono = data.weather[0].main

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difkelvin)}°c`

  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La humedad es: ${humedad}`

  const descripcion = document.createElement('span')

  switch (icono) {
    case 'Thunderstorm':
      icono_animado.src='image/thunder.svg'
      descripcion.textContent = 'Tormenta'
      break;
    case 'Drizzle':
      icono_animado.src='image/rainy-2.svg'
      descripcion.textContent = 'Llovizna'
      break;
    case 'Rain':
      icono_animado.src='image/rainy-7.svg'
      descripcion.textContent = 'Lluvia'
      break;
    case 'Snow':
      icono_animado.src='image/snowy-6.svg'
      descripcion.textContent = 'Nieve'
      break;                        
    case 'Clear':
        icono_animado.src='image/day.svg'
        descripcion.textContent = 'Cielo Despejado'
      break;
    case 'Atmosphere':
      icono_animado.src='image/weather.svg'
      descripcion.textContent = 'Inestable'
        break;  
    case 'Clouds':
      icono_animado.src='image/cloudy-night-1.svg'
      descripcion.textContent = 'Cielo nublado'
        break;  
    default:
      icono_animado.src='image/cloudy-day-1.svg'
      descripcion.textContent = 'Cielo despejado'
  }

  icono_animado.style.width = '70%'

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(descripcion)
}


