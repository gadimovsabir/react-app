import React from 'react';
import PublishedDate from './PublishedDate.js';
import './NewsCard.css';

class NewsCard extends React.Component {
  render() {
    return (
      <div className="news-card" onClick={(e) => this.props.handleClick(e, this.props.newsData)}>
        <div className="news-card-img" style={{backgroundImage: `url(${this.props.newsData.imgSrc})`}}>
          <PublishedDate published={this.props.newsData.published} />
        </div>
        <div className="title">{this.props.newsData.title}</div>
      </div>
    );
  }
}

export default NewsCard;
