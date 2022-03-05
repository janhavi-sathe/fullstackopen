import './App.css';
import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ label, value }) => (
  <p>
    {label} {value}
  </p>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  
  let average = ((good - bad) / totalFeedback).toPrecision(4);
  let percPositive = ((good / totalFeedback) * 100).toPrecision(4);

  const updateStatistics = () => {
    average = ((good - bad) / totalFeedback).toPrecision(4);
    percPositive = ((good / totalFeedback) * 100).toPrecision(4);
  }

  const handleFeedbackButton = (handleClick) => {
    handleClick();
    // updateStatistics();
  }

  const onGoodClick = () => {
    setGood(good + 1);
    setTotalFeedback(totalFeedback + 1);
    console.log('Clicked Good ', good);
  }

  const onNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotalFeedback(totalFeedback + 1);
    console.log('Clicked Neutral ', neutral);
  }

  const onBadClick = () => {
    setBad(bad + 1);
    setTotalFeedback(totalFeedback + 1);
    console.log('Clicked Bad ', bad);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => handleFeedbackButton(onGoodClick)} text={'good'} />
        <Button handleClick={() => handleFeedbackButton(onNeutralClick)} text={'neutral'} />
        <Button handleClick={() => handleFeedbackButton(onBadClick)} text={'bad'} />
      </div>
      <h1>statistics</h1>
      <Statistic label={'good'} value={good} />
      <Statistic label={'neutral'} value={neutral} />
      <Statistic label={'bad'} value={bad} />
      <Statistic label={'total'} value={totalFeedback} />
      <Statistic label={'average'} value={average} />
      <Statistic label={'positive %'} value={percPositive} />
    </div>
  )
}

export default App;
