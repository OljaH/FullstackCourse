import { useState } from 'react'

const StatisticLine = (props) => {
  let additional = "";
  if (props.text === "positive") {
    additional = " %";
  }
  return (
    <tr>
      <td>{props.text}:</td><td>{props.value}{additional}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const all = props.params.good+props.params.bad+props.params.neutral
  const average = (props.params.good-props.params.bad)/all
  const positive = props.params.good/all*100

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr><th><h2>statistics</h2></th></tr>
        <StatisticLine text="good" value={props.params.good} />
        <StatisticLine text="neutral" value={props.params.neutral} />
        <StatisticLine text="bad" value={props.params.bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>

    </table>
  )


}

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const params = {
    good: good,
    neutral: neutral,
    bad: bad,

  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Statistics params={params}></Statistics>

    </div>
  )
}

export default App