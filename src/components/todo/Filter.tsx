import * as React from 'react';

interface LinkProp {
  active: boolean;
  children: React.ReactNode;
  onClick: Function;
}

export class Filter extends React.Component<LinkProp, any> {

  constructor(props: any, context: any) {
    super(props, context);

    this.filter = this.filter.bind(this);
  }

  filter(event: any) {
    event.preventDefault();

    let {onClick} = this.props;
    onClick();
  }

  render() {

    let { active, children } = this.props;

    return (
      <button type='button' className='btn btn-default' onClick={this.filter} disabled={active}>{children}</button>
    );
  }
}
