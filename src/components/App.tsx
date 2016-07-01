import * as React from 'react';
import { Link, IndexLink } from 'react-router';

interface AppProps {
  children: React.ReactNode;
}

export class App extends React.Component<AppProps, any> {
  render() {

    let {children} = this.props;

    return (
      <div>
        <nav className='navbar navbar-inverse navbar-static-top'>
          <div className='container-fluid'>

            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <Link className='navbar-brand' to='/'><i className='glyphicon glyphicon-home' /></Link>
            </div>

            <div className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li><IndexLink to='/todo'>Todos</IndexLink></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </div>

          </div>
        </nav>

        <br/>
        {children}
      </div>
    );
  }
};
