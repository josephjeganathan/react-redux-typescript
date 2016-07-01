import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/App';
import { HomePage } from './components/home/HomePage';
import { TodoPage } from './components/todo/TodoPage';
import { AboutPage } from './components/about/AboutPage';
import { NotFoundPage } from './components/notfound/NotFoundPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='todo' component={TodoPage}/>
    <Route path='about' component={AboutPage}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
);
