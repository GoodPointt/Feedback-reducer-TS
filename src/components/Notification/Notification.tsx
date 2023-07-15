import * as React from 'react';

interface INotificationProps {
  message: string;
}

export const Notification = ({ message }: INotificationProps) => (
  <p>{message}</p>
);
