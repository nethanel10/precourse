//imports
var figlet = require('figlet') // npm i figlet
var prompt = require('prompt-sync')() //npm i prompt-sync

//useful vars
let selectedWord;
let guessedWords = []
let guessedWordsRegExp = new RegExp(`[^]`, "g")
let guesses = 10
let words = ["banana", "cat", "fox", "apple", "juice"]

//print cool welcome message
const welcomeMsg = () => {
    figlet('Hangman', function(err, data) {
        if (err) return console.err(err)
        console.log(data)
    });
}

//select random word, prints welcome message, and starts the game loop
const gameInit = async () => {
    selectedWord = words[Math.floor(Math.random()*words.length)]
    welcomeMsg()
    await sleep(5)
    while(guesses>0) {
        if(!formatByGuessedWords().includes("_")) return outro(true)
        console.log(`you have ${guesses} guesses left !`)
        console.log(formatByGuessedWords())
        attemptSession()
    }
    outro(false)
}

//the attempt function. get a letter, check for match with the word,
//and handle the response according to the matching status.
const attemptSession = () => {
    const letter = prompt("enter a guess: ")
    if(letter.length !== 1 || /[^a-zA-Z]/.test(letter)) return console.log("syntax error. the word should be only 1 character, and only alphabetic characters allowed.")
    if(selectedWord.toLowerCase().includes(letter.toLowerCase()))
    {
        guessedWords.push(letter.toLowerCase())
        guessedWordsRegExp = new RegExp(`[^${guessedWords.join("")}]`, "g")
    }
    else {
        guesses--
        if(guesses !== 0) console.log("wrong guess. try again")
    }
    
}

//RegExp formatting - every word in the selectedWord that the guessedWords not contains, display as "_"
const formatByGuessedWords = () => selectedWord.replaceAll(guessedWordsRegExp, "_")

const outro = (success) => {
    if(success) return console.log("Good job! you win the game!")
    return console.log("you are out of guesses. Better luck next time")
}

//sleep helper
const sleep = async (time) => await new Promise(resolve => setTimeout(resolve, time))

//starts the game
gameInit()