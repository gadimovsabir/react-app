import React from 'react';
import SearchInput from './SearchInput.js'

class PrimaryHeader extends React.Component {
  render() {
    return (
      <div className="primary-header">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="logo"></span>
          <SearchInput />
        </div>
      </div>
    );
  }
}

export default PrimaryHeader;
