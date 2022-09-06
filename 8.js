const capitalize = (word)=>{
    let newWord = word
    const vowels = ["a", "e", "i", "o", "u", "y"]
    vowels.map((v, i) => newWord = newWord.replaceAll(vowels[i], vowels[i].toUpperCase()))
    return newWord
}
