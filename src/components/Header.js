import React from 'react';
import PrimaryHeader from './PrimaryHeader.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <PrimaryHeader loadData={this.props.loadData} />
      </header>
    );
  }
}

export default Header;
