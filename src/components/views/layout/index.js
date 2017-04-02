import React from 'react';
import { Header } from 'components/widgets';

export const Layout = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <div className="container">
      {children}
    </div>
  </div>
);
