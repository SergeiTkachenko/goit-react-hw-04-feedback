import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const review = ['good', 'neutral', 'bad'];

  const addFeedback = value => {
    switch (value) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return null;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = (good / (good + neutral + bad)) * 100;
    return Number(percent.toFixed(0));
  };

  return (
    <Layout>
      <Section title="Please leave feadback">
        <FeedbackOptions options={review} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          TotalFidback={countTotalFeedback()}
          PositiveFeedback={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
