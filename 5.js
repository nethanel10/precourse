const numFactorial = (num)=>{ 
    var n = 1
    for(var i = 1; i<=num; i++) {
        n*= i
    }
    return n
}