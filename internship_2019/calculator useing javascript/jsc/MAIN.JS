 
function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
 
function solve() 
{ 
    let text = document.getElementById("result").value 
    let a = eval(text) 
    document.getElementById("result").value = a
} 
 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
