import * as React from 'react';

interface TextInputInlineProps extends React.Props<TextInputInline> {
  name: string;
  value: string;
  onChange: Function;
  label?: string;
  placeholder?: string;
  error?: string;
}

export class TextInputInline extends React.Component<TextInputInlineProps, any> {

  render() {
    let {name, label, onChange, placeholder, value, error} = this.props;

    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }

    let labelElement: React.ReactNode;
    if (label) {
      labelElement = (<label htmlFor={name}>{label}</label>);
    }

    return (
      <div className={wrapperClass}>
        {labelElement}
        <label htmlFor={name}>{label}</label>
        <input
          type='text'
          name={name}
          className='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    );
  };
}
