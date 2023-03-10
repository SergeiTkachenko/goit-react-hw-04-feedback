import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    const percent = (good / (good + neutral + bad)) * 100;
    return Number(percent.toFixed(0));
  }

  render() {
    return (
      <Layout>
        <Section title="Please leave feadback">
          <FeedbackOptions
            FeedBackList={this.state}
            TotalFidback={this.countTotalFeedback()}
            PositiveFeedback={this.countPositiveFeedbackPercentage()}
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            FeedBackList={this.state}
            TotalFidback={this.countTotalFeedback()}
            PositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
