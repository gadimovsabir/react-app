import React from 'react';
import './NewsBody.css';

class NewsBody extends React.Component {
  render() {
    const images = this.props.news.newsMedia.map(src => {
      return (
        <div className="img-wrapper">
          <img src={src} />
        </div>
      );}
    );

    return (
      <>
        <img className="news-img" src={this.props.news.imgSrc} />
        <h1 className="news-title">{this.props.news.title}</h1>
        <p className="news-body">{this.props.news.body}</p>
        {images}
      </>
    );
  }
}

export default NewsBody;
