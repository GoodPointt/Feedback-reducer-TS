import * as React from 'react';

interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: ISectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
