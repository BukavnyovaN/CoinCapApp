import React, { ComponentProps, FC } from 'react';

export const combineContexts = (...components: FC[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent: any) => {
      return ({ children }: any): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children } : any) => <>{children}</>,
  );
};