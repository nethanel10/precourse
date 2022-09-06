const divideOrHasSeven = (start,end)=>{ 
    
    var count = 0
    for(let i = start; i<=end; i++) {
        if(i%7 === 0) count++
        else if(hasSeven(i)) count++
    }
    return count
}

const hasSeven = (num) => {
    if(num.toString().includes("7")) return true
    return false
}
