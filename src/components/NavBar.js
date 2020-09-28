import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="container">
          <nav>
            <a className="link" onClick={this.props.loadData} data-id="0" href="#">Главная</a>
            <a className="link" onClick={this.props.loadData} data-id="1" href="#">Политика</a>
            <a className="link" onClick={this.props.loadData} data-id="2" href="#">Экономика</a>
            <a className="link" onClick={this.props.loadData} data-id="3" href="#">Общество</a>
            <a className="link" onClick={this.props.loadData} data-id="4" href="#">Война</a>
            <a className="link" onClick={this.props.loadData} data-id="5" href="#">Криминал</a>
            <a className="link" onClick={this.props.loadData} data-id="6" href="#">Спорт</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
