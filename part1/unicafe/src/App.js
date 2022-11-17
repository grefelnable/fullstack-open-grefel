import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad, totalFeedback, averagePositiveFeedback } = props;

  if (totalFeedback === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticsType text="good" />
            </td>
            <td>
              <StatisticsRating value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsType text="neutral" />
            </td>
            <td>
              <StatisticsRating value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsType text="bad" />
            </td>
            <td>
              <StatisticsRating value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsType text="total" />
            </td>
            <td>
              <StatisticsRating value={totalFeedback} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsType text="positive" />
            </td>
            <td>
              <StatisticsRating value={averagePositiveFeedback} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
// Button Component
const Button = (props) => {
  const { onClick, btnType } = props;
  return (
    <div>
      <button onClick={onClick}>{btnType}</button>
    </div>
  );
};

// Statistics Type
const StatisticsType = (props) => {
  return <>{props.text}</>;
};
// Statistics Rating
const StatisticsRating = (props) => {
  return <>{props.value}</>;
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const averagePositiveFeedback = (good / totalFeedback) * 100 + " %";
  return (
    <div>
      <h2>Give Feedback</h2>
      {/* Feedback buttons */}
      <table>
        <tbody>
          <tr>
            <td>
              <Button onClick={() => setGood(good + 1)} btnType="good" />
            </td>
            <td>
              <Button
                onClick={() => setNeutral(neutral + 1)}
                btnType="neutral"
              />
            </td>
            <td>
              <Button onClick={() => setBad(bad + 1)} btnType="bad" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Statistics */}
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        totalFeedback={totalFeedback}
        averagePositiveFeedback={averagePositiveFeedback}
      />
    </div>
  );
};

export default App;
