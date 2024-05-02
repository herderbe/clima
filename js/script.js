const apiKey = '8495d6a446944e14885130713242604'

let divInfo = document.querySelector('.info')
let btnBuscar = document.getElementById('btnBuscar')
let inputBuscar = document.getElementById('locacion')
let icono = document.getElementById('icono')
let TempDescrip = document.getElementById('tempDescrip')
let latitud = document.getElementById('lat')
let longitud = document.getElementById('lon')
let gradosTemp = document.getElementById('Temperatura')

btnBuscar.addEventListener('click',buscar)
 async function buscar(){
    
    let locacion = inputBuscar.value
    await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=es&q=${encodeURIComponent(locacion)}`)
    .then(respuesta => respuesta.json())
    .then(dato =>{
        const {location,current} = dato

        let icon = current.condition.icon
        let urlIcono = `https:${icon}`
        icono.setAttribute('src',urlIcono)

        let grados = current.temp_c
        gradosTemp.textContent = `${grados}°C`
 
        let lat = location.lat
        latitud.textContent = lat

        let lon = location.lon
        longitud.textContent = lon

        let DescripTemp = current.condition.text
        TempDescrip.textContent = `${DescripTemp}`
    })
    .catch(error =>{
        console.log('error al obtener datos',error)
    })
    divInfo.classList.remove('info-ac')
}