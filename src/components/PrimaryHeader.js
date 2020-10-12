import React from 'react';
import SearchInput from './SearchInput.js';

class PrimaryHeader extends React.Component {
  render() {
    return (
      <div className="primary-header">
        <div className="container">
          <div className="row align-items-center">
            <span className="logo " onClick={this.props.loadData} data-id="0"></span>
            <span
              className="nav-toggle sprite"
              onClick={() => {
                if (window.pageYOffset < 43) return false;
                const navContainer = document.querySelector('.nav-container');
                navContainer.classList.toggle('fixed-nav-container');
              }}
            >
              Kateqoriyalar
            </span>
            <SearchInput searchData={this.props.searchData} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrimaryHeader;
