 
// logic of even  and odd 

            function findOddEven(){
                
                var num = document.getElementById('num').value;
    
                if ( num % 2 == 0)
                 {
                    document.getElementById('result').innerHTML=num + ' is a Even number';
                    alert( value=num +" is even number")
                }else{
                    document.getElementById('result').innerHTML =num + ' is a Odd number';
                    alert( value=num+" is odd number")
                }
                } 