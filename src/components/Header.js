import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>UNLUCKY.gg</a>
          </div>
          <ul className='nav navbar-nav'>
            <li><a href='/user'>User Page</a></li>
            <li><a href='/stats'>Stats</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;