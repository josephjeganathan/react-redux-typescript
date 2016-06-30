import * as React from 'react';

interface LinkProp {
  active: boolean;
  children: React.ReactNode;
  onClick: Function;
}

class Link extends React.Component<LinkProp, any> {

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

    if (active) {
      return (<span>{children}</span>);
    }

    return (
      <a href='#' onClick={this.filter}>
        {children}
      </a>
    );
  }
}

export default Link;
