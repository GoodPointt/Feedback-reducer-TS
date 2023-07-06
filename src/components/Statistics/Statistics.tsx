import * as React from 'react';
import { getColorByStat } from 'components/utils/stats';

import css from './Statistics.module.css';

interface StatisticsProps {
  stats: {
    good: number;
    neutral: number;
    bad: number;
  };
  totalFeedbacks: number;
  positivePercentage: string;
}

export const Statistics: React.FC<StatisticsProps> = ({
  stats,
  totalFeedbacks,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {Object.keys(stats).map(stat => (
          <li className={css.stats__item} key={stat}>
            {stat}:{' '}
            <span style={{ color: getColorByStat(stat) }}>{stats[stat]}</span>
          </li>
        ))}
      </ul>
      <h4>Total feedbacks: {totalFeedbacks}</h4>
      <h4>Positive feedback: {positivePercentage}</h4>
    </>
  );
};
