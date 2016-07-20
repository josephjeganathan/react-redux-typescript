import * as React from 'react';
import FilterLink from '../../containers/FilterLink';

export const FilterGroup = () => (
  <div className='btn-group' role='group'>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
  </div>
);
