import React from 'react';
import PrimaryHeader from './PrimaryHeader.js';
import NavBar from './NavBar.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <PrimaryHeader loadData={this.props.loadData} searchData={this.props.searchData} />
        <NavBar loadData={this.props.loadData} />
      </header>
    );
  }
}

export default Header;
