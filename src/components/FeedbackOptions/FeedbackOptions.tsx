import * as React from 'react';
import { Button } from '../Button/Button';

interface State {
  good: number;
  neutral: number;
  bad: number;
}

interface FeedbackOptionsProps {
  options: State;
  incrementOption: (stat: 'good' | 'neutral' | 'bad' | string) => void;
}

export const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({
  options,
  incrementOption,
}) => {
  return (
    <div className="buttons-wrap">
      {Object.keys(options).map(option => (
        <Button
          buttonType="button"
          key={option}
          onClick={() => incrementOption(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
