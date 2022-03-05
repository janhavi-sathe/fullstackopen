import './App.css';
import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ label, value, perc }) => (
  <tr>
    <td>{label}</td><td>{value} {perc ? '%' : ''}</td>
  </tr>
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
      {totalFeedback ?
        <table>
          <tbody>
            <StatisticLine label={'good'} value={good} />
            <StatisticLine label={'neutral'} value={neutral} />
            <StatisticLine label={'bad'} value={bad} />
            <StatisticLine label={'total'} value={totalFeedback} />
            <StatisticLine label={'average'} value={average} />
            <StatisticLine label={'positive'} value={percPositive} perc={'true'} />
          </tbody>
        </table>
        : "No feedback given"}

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
