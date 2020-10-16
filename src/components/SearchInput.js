import React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search-input-container">
        <input 
          type="search"
          placeholder="Поиск"
          className="search-input"
          onKeyUp={(e) => {
            if (e.key != 'Enter') return false;
            this.props.searchData(e.target.value);
          }
        } 
        />
        <button 
          className="search-btn sprite"
          onClick={() => this.props.searchData(document.querySelector('.search-input').value)}
        />
      </div>
    );
  }
}

export default SearchInput;
