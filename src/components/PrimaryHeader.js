import React from 'react';
import SearchInput from './SearchInput.js';
import NavBar from './NavBar';

class PrimaryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: false,
    }
  }

  render() {
    return (
      <div className="fixed-header">
        <div className="primary-header">
          <div className="container">
            <div className="row align-items-center">
              <span className="logo " onClick={this.props.loadData} data-id="0"></span>
              <span
                className="nav-toggle sprite"
                onClick={() => {
                  if (window.pageYOffset < 43) return false;
                  this.setState({showNavBar: !this.state.showNavBar});
                }}
              >
                Kateqoriyalar
              </span>
              <SearchInput searchData={this.props.searchData} />
            </div>
          </div>
        </div>
        {this.state.showNavBar ?
          <NavBar loadData={this.props.loadData} cssClass="fixed-nav-bar" /> :
          null
        }
      </div>
    );
  }
}

export default PrimaryHeader;
