const countOddFromZeroToNum = (num)=>{ 
    var count=0;
    for(var i=0;i<=num;i++){
        if(i%2 !== 0) count++
    }
    return count;

}