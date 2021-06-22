import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [inputNumber, setNumber] = useState(1)
  const [answer, setAnswer] = useState("")

const handleInc = () => {
  setNumber(inputNumber + 1)
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

// useEffect(() => {
//   console.log(inputNumber)
//     if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
//     setAnswer("fizzbuzz")
//   } else if (inputNumber % 3 === 0) {
//     setAnswer("fizz")
//   } else if (inputNumber % 5 === 0) {
//     setAnswer("buzz")
//   } else {
//     setAnswer(inputNumber);
//   } console.log(answer)
// }, [inputNumber])

  return (
    <div>
      <button value={inputNumber} onClick={handleInc}>Add 1</button>

      <h2>Number is: {inputNumber}</h2>
      <h2>Answer is: {answer}</h2>
    </div>
  );
}

export default App;
