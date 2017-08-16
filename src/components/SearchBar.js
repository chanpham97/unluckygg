import React, { Component } from 'react';

import '../App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar"> 
      <form className="form-inline">
        <label id="summoner-label"> Enter your summoner name: </label>
        <br/>
        <input type="text" className="form-control" id="summoner-name" placeholder="e.g. AreYouBoyOrGirl, iamchanese123"/>
        <button type="submit" className="btn btn-primary" id="search-button"><span className="glyphicon glyphicon-search"/></button>
        
      </form>
      </div>
    );
  }
}

export default SearchBar;