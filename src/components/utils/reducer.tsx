export interface IState {
  good: number;
  neutral: number;
  bad: number;
}

export type TAction = { type: string; payload: number };

export function reducer(prevState: IState, action: TAction): IState {
  if (action.type === 'good') {
    return {
      ...prevState,
      good: prevState.good + action.payload,
    };
  } else if (action.type === 'neutral') {
    return {
      ...prevState,
      neutral: prevState.neutral + action.payload,
    };
  } else if (action.type === 'bad') {
    return {
      ...prevState,
      bad: prevState.bad + action.payload,
    };
  }
  return prevState;
}
