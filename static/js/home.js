function ageInDays(){
    var birtYear=prompt("Enter your birth year");
    var date = new Date(); 
    var ageDay=(2020-birtYear)*365;
    var h1=document.createElement('h1');
    var answer = document.createTextNode('You are '+ageDay+ ' days old.')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(answer);
    
    document.getElementById("flex-box-result").appendChild(h1);
    }
    
    function reset(){
        document.getElementById("ageInDays").remove();
    }
    
    
    