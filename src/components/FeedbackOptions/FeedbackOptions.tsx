import * as React from 'react';
import { Button } from '../Button/Button';
import { IState } from 'components/utils/reducer';
import { TAction } from 'components/utils/reducer';

interface IFeedbackOptions {
  options: IState;
  incrementOption: (stat: TAction['type']) => void;
}

export const FeedbackOptions = ({
  options,
  incrementOption,
}: IFeedbackOptions) => {
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
