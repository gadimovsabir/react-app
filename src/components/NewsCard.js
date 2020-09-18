import React from 'react';
import PublishedDate from './PublishedDate.js';
import './NewsCard.css';

class NewsCard extends React.Component {
  render() {
    return (
      <div className="news-card">
        <div className="news-img" style={{backgroundImage: `url(${this.props.imgSrc})`}}>
          <PublishedDate published={this.props.published} />
        </div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default NewsCard;
