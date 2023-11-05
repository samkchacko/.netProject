window.addEventListener('load',()=>{
        console.log(navigator.userAgentData)
        data1.innerHTML=(navigator.userAgent)
        data2.innerHTML=(navigator.userAgentData.brands[0].brand+navigator.userAgentData.brands[1].brand)
})
let data1=document.querySelector('#one')
let data2=document.querySelector('#two')