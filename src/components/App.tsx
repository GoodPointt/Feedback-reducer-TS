import { useEffect, useReducer } from 'react';
import * as React from 'react';

import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './utils/stats';
import { reducer } from './utils/reducer';
import { TAction } from './utils/reducer';

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem('STATS_STATE') || 'null') || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    window.localStorage.setItem('STATS_STATE', JSON.stringify(state));
  }, [state]);

  const incrementStat = (stat: TAction['type']) => {
    dispatch({ type: stat, payload: 1 });
  };

  const totalFeedbacks = countTotalFeedback(state);
  const positivePercentage = countPositiveFeedbackPercentage(
    state,
    totalFeedbacks
  );

  return (
    <div className="root__div">
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} incrementOption={incrementStat} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            stats={state}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
