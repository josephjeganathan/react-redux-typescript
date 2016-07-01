import * as React from 'react';
import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className='jumbotron'>
      <h1 className='alt-header'>404 Page Not Found</h1>
      <Link to='/'> Go back to homepage </Link>
    </div>
  );
};
