function Sumar()
{
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var x=0
    var res=document.getElementById("res")
    x=val1+val2
    res.innerHTML=x
}
function Restar()
{
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var x=0
    var res=document.getElementById("res")
    x=val1-val2
    res.innerHTML=x
}
function Multiplicar()
{
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var x=0
    var res=document.getElementById("res")
    x=val1*val2
    res.innerHTML=x
}
function Division()
{
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var x=0
    var res=document.getElementById("res")
    x=val1/val2
    res.innerHTML=x
}