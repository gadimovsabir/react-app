import React from 'react';
import NewsCard from './NewsCard.js';
import NewsBody from './NewsBody.js';

class MainContent extends React.Component {
  render() {
    let data;

    if (this.props.error) {
      data = this.props.error.message;
    } else if (this.props.news) {
      data = <div className="col-lg-8"><NewsBody news={this.props.news} /></div>
    } else {
      data = this.props.items.map(item => {
        return (
          <div className="col-lg-4 card-container" key={item.id}>
            <NewsCard
              newsData={item}
              handleClick={this.props.handleClick}
            />
          </div>
        );
      }); 
    }

    return (
      <main>
        <div className="container">
          <div className="row">{data}</div>
        </div>
      </main>
    );
  }
}

export default MainContent;
