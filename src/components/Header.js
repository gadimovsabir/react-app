import React from 'react';
import PrimaryHeader from './PrimaryHeader.js';
import NavBar from './NavBar.js';

class Header extends React.Component {
  render() {
    window.addEventListener('scroll', () => {
      const navToggle = document.querySelector('.nav-toggle');

      if (window.pageYOffset < 43) {
        navToggle.style.opacity = 0;
        navToggle.style.cursor = 'default';
      } else {
        navToggle.style.opacity = 1;
        navToggle.style.cursor = 'pointer';
      }
    });

    return (
      <header>
        <PrimaryHeader
          loadData={this.props.loadData}
          searchData={this.props.searchData}
        />
        <NavBar loadData={this.props.loadData} />
      </header>
    );
  }
}

export default Header;
