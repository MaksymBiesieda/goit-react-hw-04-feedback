import React, { useState } from "react";
import Section from './Section/Section ';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions ';
import Notification from './Notification/Notification';

export default function App () {
  
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  

 const updatingState = (name) => {
   switch (name) {
     case 'good': setGood(prev => prev + 1);
       break;
     case 'neutral': setNeutral(prev => prev + 1);
       break;
     case 'bad': setBad(prev => prev + 1);
       break;
     default: throw new Error();
   }
  }

  const countTotalFeedback = () => {
   
    return (good + neutral + bad)
  };

  const countPositiveFeedbackPercentage = () => Math.round(100 * good / countTotalFeedback());
  
  
  
     return (
       <div>
       <Section title="Please leave feedback">
       <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={updatingState}/>
       </Section>
         <Section title="Statistics">
           {countTotalFeedback() ? ( <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>) : (<Notification message="There is no feedback"/>)}
      
       </Section>
       </div>
     )
   }



