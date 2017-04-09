import React from 'react';
import { Header } from 'components/widgets';
import NotificationSystem from 'react-notification-system';
import * as Action from 'common/actions';

export const Layout = ({ children }) => (
  <div>
    <NotificationSystem ref={Action.setNotificationRef} />
    <header>
      <Header />
    </header>
    <div className="container">
      {children}
    </div>
  </div>
);
