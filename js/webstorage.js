function save()
{
    localStorage.setItem('name',document.getElementById('txt').value)
    alert(localStorage.getItem('name'))
    console.log(document.getElementById('txt').attributes)
}
function get()
{
   
    alert(localStorage.getItem('name'))
    
}
function sessionsave(){
    sessionStorage.name=document.getElementById('txt').value
}
function sessionget()
{
    alert(sessionStorage.name)
}
var c=document.querySelector('#can')
var ctx=c.getContext("2d")
ctx.moveTo(0,0)
ctx.lineTo(204,104)
ctx.stroke();