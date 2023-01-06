import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import { FeedbackText } from './Statistics/Statistics.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none; margin:0; padding:0;};
  body{
    height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    color: '#010101'; 
  }
`;

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const nameFeedback = ['Good', 'Bad', 'Neutral'];
  const countTotalFeedback = good + bad + neutral;

  const onBtnClick = e => {
    switch (e.target.textContent) {
      case 'Good':
        setGood (prevGood => prevGood + 1);
        break;
      
      case 'Bad':
        setBad (prevBad => prevBad + 1);
        break;
      
      case 'Neutral':
        setNeutral (prevNeutral => prevNeutral + 1);
        break;
      
      default: break;
    }
  };
  
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback !== 0
      ? Math.round((good / countTotalFeedback) * 100) : 0;
  };

  return (
    <div>
      <GlobalStyle />
      <Section title={'Please, leave feedback'}>
      <FeedbackOptions options={nameFeedback} onLeaveFeedback={onBtnClick} />
      <FeedbackText>Statistics:</FeedbackText>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />)
          : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
      </Section>
    </div>
  );
};

