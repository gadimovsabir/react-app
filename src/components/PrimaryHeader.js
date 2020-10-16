import React from 'react';
import SearchInput from './SearchInput.js';

class PrimaryHeader extends React.Component {
  shouldComponentUpdate() {
    document.querySelector('.search-input-container').classList.remove('show');
    document.querySelector('.search-input-toggle').classList.remove('hide');
    return false;
  }

  render() {
    return (
      <div className="primary-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="d-flex">
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
              <button
                className="search-input-toggle sprite"
                onClick={() => {
                  document.querySelector('.search-input-container').classList.add('show');
                  document.querySelector('.search-input-toggle').classList.add('hide');
                }}
              />
            </div>
            <SearchInput searchData={this.props.searchData} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrimaryHeader;
