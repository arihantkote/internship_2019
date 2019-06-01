//logic of tables and for synatx


function result(){
var num,i ;



 num=Number(document.getElementById('enter').value);

    for ( i=1 ;i<=10 ;i++)
    {
        
        var ans= document.getElementById('answer')
        ans .innerHTML += num + "*"+ i + "=" + (num*i) + "<br>"
    

        
    }

    

}