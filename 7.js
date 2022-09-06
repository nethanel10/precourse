const primeNumberFromOneToN = (n)=>{ 
    var count=0;

    if(n===1)
    count++
      else if(n>1){
        for(var i=2;i<n;i++){
            if(prime(i))
            count++
        }
        return count;
    }
        
    }
    const prime=(number)=>{
        var div=0;
for(var i=1; i<=number/2; i++)
{
if(number%i==0)
div++;
}
if(div>=2)
return false;
else
return true;

    }

    
    
