import React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div>
        <input type="search" placeholder="Поиск" className="search-input" />
        <button className="search-btn sprite" />
      </div>
    );
  }
}

export default SearchInput;
