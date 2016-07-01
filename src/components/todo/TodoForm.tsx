import * as React from 'react';
import { TextInputInline } from '../common/TextInputInline';

export const TodoForm = ({text, onSave, onChange}) => (
  <form onSubmit={onSave } className='form-inline'>

    <TextInputInline name='text' onChange={onChange} value={text} />

    <button type='submit' className='btn btn-info'>Add Todo</button>
  </form>
);
