window.addEventListener('load',()=>{
        console.log(navigator.geolocation.getCurrentPosition(loc))
        data1.innerHTML=(navigator.userAgent)
        data2.innerHTML=(` Browser is ${navigator.userAgentData.brands[0].brand} and brand is ${navigator.userAgentData.brands[1].brand}`)
})
loc=(position)=>{
        data3.innerHTML=`${name.toUpperCase()} your current location is ${position.coords.latitude}Latitude and ${position.coords.longitude}Longitude`
        
}
let data1=document.querySelector('#one')
let data2=document.querySelector('#two')
let data3=document.querySelector('#three')
let name=prompt()