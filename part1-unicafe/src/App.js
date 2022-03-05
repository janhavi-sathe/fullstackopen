import './App.css';
import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ label, value, perc }) => (
  <p>
    {value} {perc ? '%' : ''} {label}
  </p>
)

// a proper place to define a component
const Statistics = ({ statistics }) => {
  let good = statistics.good;
  let neutral = statistics.neutral;
  let bad = statistics.bad;
  let totalFeedback = statistics.totalFeedback;

  let average = ((good - bad) / totalFeedback).toPrecision(4);
  let percPositive = ((good / totalFeedback) * 100).toPrecision(4);

  return (
    <div>
      <h1>Statistics</h1>
      <Statistic label={'good'} value={good} />
      <Statistic label={'neutral'} value={neutral} />
      <Statistic label={'bad'} value={bad} />
      <Statistic label={'total'} value={totalFeedback} />
      <Statistic label={'average'} value={average} />
      <Statistic label={'positive'} value={percPositive} perc={'true'} />
    </div>

  )

}



const App = () => {
  // save clicks of each button to its own state
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0
  })


  const onGoodClick = () => {
    const newStatistics = {
      ...statistics,
      good: statistics.good + 1,
      totalFeedback: statistics.totalFeedback + 1
    }
    setStatistics(newStatistics)
    console.log('Clicked Good ', statistics.good);
  }

  const onNeutralClick = () => {
    const newStatistics = {
      ...statistics,
      neutral: statistics.neutral + 1,
      totalFeedback: statistics.totalFeedback + 1
    }
    setStatistics(newStatistics)
    console.log('Clicked Neutral ', statistics.neutral);
  }

  const onBadClick = () => {
    const newStatistics = {
      ...statistics,
      bad: statistics.bad + 1,
      totalFeedback: statistics.totalFeedback + 1
    }
    setStatistics(newStatistics)
    console.log('Clicked Bad ', statistics.bad);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Give Feedback</h1>
        <div className='Feedback-buttons'>
          <Button handleClick={() => onGoodClick()} text={'good'} />
          <Button handleClick={() => onNeutralClick()} text={'neutral'} />
          <Button handleClick={() => onBadClick()} text={'bad'} />
        </div>
        <Statistics statistics={statistics} />
      </div>
    </div>
  )
}

export default App;
