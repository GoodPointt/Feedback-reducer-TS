import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './utils/stats';

export const App = () => {
  const [good, setGood] = useLocalStorage('good', '');
  const [neutral, setNeutral] = useLocalStorage('neutral', '');
  const [bad, setBad] = useLocalStorage('bad', '');

  const stats = { good, neutral, bad };

  const incrementStat = stat => {
    switch (stat) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.warn(`unsupported stat - ${stat}`);
        break;
    }
  };

  const totalFeedbacks = countTotalFeedback(stats);
  const positivePercentage = countPositiveFeedbackPercentage(
    stats,
    totalFeedbacks
  );

  return (
    <div className="root__div">
      <Section title="Please leave feedback">
        <FeedbackOptions options={stats} incrementOption={incrementStat} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            stats={stats}
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
