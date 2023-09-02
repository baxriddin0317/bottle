"use client";

import { Provider } from '@/components/Context'

export const Providers = ({ children }) => {
  return (
    <Provider>
      <Body>
        {children}
      </Body>
    </Provider>
  );
};

const Body = ({ children }) => {
  return (
    <body
      suppressHydrationWarning={true}>
      {children}
    </body>
  );
};