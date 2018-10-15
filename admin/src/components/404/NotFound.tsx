import React from 'react';
import './styles/NotFound.less';

// types
import { RoutePageProps } from '@/types/router';

const NotFound = ({ location }: RoutePageProps) => {
  return (
    <div className="not-found__container">
      <h1 className="title">404 Error Page #2</h1>
      <p className="zoom-area">
        找不到 <b>{location.pathname}</b> 页面{' '}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
    </div>
  );
};

export default NotFound;
