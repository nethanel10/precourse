const longestWord = (sentence)=>{
    const filteredSentence = sentence.replace(/[^a-zA-Z ]/g, "")
         var longestWord = filteredSentence.split(' ').sort(function(a, b) {
              return b.length - a.length
})
return longestWord[0]
}