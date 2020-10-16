import React from 'react';
import NewsCard from './NewsCard.js';
import NewsBody from './NewsBody.js';
import Slider from './Slider.js'

class MainContent extends React.Component {
  render() {
    const slider = this.props.showSlider ? 
      <div className="row">
        <Slider 
          lastNews={this.props.items.slice(0, 4)}
          handleClick={this.props.handleClick} 
        />
      </div> :
      null;

    let data;

    if (this.props.error) {
      data = this.props.error.message;
    } else if (this.props.news) {
      data = <div className="col-lg-8 col-xs-12"><NewsBody news={this.props.news} /></div>
    } else {
      data = this.props.items.map(item => {
        return (
          <div className="col-lg-4 col-md-6 col-xs-12 card-container" key={item.id}>
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
          {slider}
          <div className="row">{data}</div>
        </div>
      </main>
    );
  }
}

export default MainContent;
