import React, { ComponentProps, ComponentType, FC } from 'react';

import { ModalWindowProvider } from './modalWindowContext';
import { ModalCartProvider } from './modalCartContext';

type Providers = [ComponentType<any>, ComponentProps<any>?][];

const combineProviders = (providers: Providers): React.FC<{ children: React.ReactNode }>=> providers.reduce(
  (AccumulatedProviders, [Provider, props = {}]) => ({ children }: any) => (
    <AccumulatedProviders>
      <Provider {...props}>
        <>{children}</>
      </Provider>
    </AccumulatedProviders>
  ),
  ({ children }: any) => <>{children}</>
);

export const AllProviders = combineProviders([
  [ModalWindowProvider],
  [ModalCartProvider],
]);