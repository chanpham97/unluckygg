import React, { Component } from 'react';

import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div id='homePage'> 
        <form className='form-inline searchBar' action='/user'>
          <label> Enter your summoner name: </label>
          <br/>
          <input type='text' className='form-control' placeholder='e.g. AreYouBoyOrGirl, iamchanese123'/>
          <button type='submit' className='btn btn-primary'><span className='glyphicon glyphicon-search'/></button>
        </form>
      </div>
    );
  }
}

export default HomePage;