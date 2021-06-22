import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [inputNumber, setNumber] = useState(1)
  const [answer, setAnswer] = useState("")
  const [coinResult, setCoinResult] = useState("")
  const [guess, setGuess] = useState('')


const handleInc = () => {
  setNumber(inputNumber + 1)
}

const handleCoinToss = () => {
  const randNum = Math.random()
  randNum <= 0.5 ? setCoinResult("Heads"): setCoinResult("Tails")
}

const handleGuessChange = (evt) => {
  setGuess(evt.target.value)
}

const guessCheck = () => {
  guess === answer ? setGuess(""): console.log('Not Correct')
}

const fizzBuzzLogic = () => {
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    setAnswer("fizzbuzz")
  } else if (inputNumber % 3 === 0) {
    setAnswer("fizz")
  } else if (inputNumber % 5 === 0) {
    setAnswer("buzz")
  } else {
    setAnswer(inputNumber);
  }
}

useEffect(fizzBuzzLogic, [inputNumber])
useEffect(guessCheck, [answer])

  return (
    <div>
      <button value={inputNumber} onClick={handleInc}>Add 1</button>

      <h2>Number is: {inputNumber}</h2>
      <h2>Answer is: {answer}</h2>

      <form>
        <input type='text' placeholder='Answer' value={guess} onChange={handleGuessChange}></input>
      </form>


      <button value={coinResult} onClick={handleCoinToss}>Heads or Tails, Motherflipper!</button>
      <h2>{coinResult}</h2>
    </div>
  );
}

export default App;
