import React from 'react';
import PublishedDate from './PublishedDate.js';
import './Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.changeSlideIndex = this.changeSlideIndex.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.mouseOver = false;
    this.state = {
      currentSlideIndex: 0,
    };
  }

  changeSlideIndex(e, minus) {
    let currentSlideIndex = this.state.currentSlideIndex;
    currentSlideIndex = minus ? --currentSlideIndex : ++currentSlideIndex;
    currentSlideIndex = (currentSlideIndex > 3) ? 0 : currentSlideIndex;
    currentSlideIndex = (currentSlideIndex < 0) ? 3 : currentSlideIndex;
    this.changeSlideImg(currentSlideIndex);
    this.setState({currentSlideIndex});
  }

  changeSlideImg(slideIndex) {
    const classes = ['first-slide', 'second-slide', 'third-slide', 'forth-slide'];
    const li = document.querySelector('.slider > ul').firstElementChild;
    li.className = classes[slideIndex];
  }

  restartTimer() {
    this.timer = this.timer || setInterval(this.changeSlideIndex, 4000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
    this.mouseOver = true;
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const lastNews = this.props.lastNews;
    if (!this.mouseOver) {
      this.timer = this.timer || setInterval(this.changeSlideIndex, 4000);
    }

    return (
      <div className="slider" onMouseOver={this.stopTimer} onMouseOut={this.restartTimer}>
        <ul onClick={(e) => this.props.handleClick(e, lastNews[this.state.currentSlideIndex])}>
          <li><img src={lastNews[0].imgSrc} /></li>
          <li><img src={lastNews[1].imgSrc} /></li>
          <li><img src={lastNews[2].imgSrc} /></li>
          <li><img src={lastNews[3].imgSrc} /></li>
        </ul>
        <div className="arrow left-arrow sprite" onClick={(e) => this.changeSlideIndex(e, -1)}></div>
        <div className="arrow right-arrow sprite" onClick={this.changeSlideIndex}></div>
        <div className="slide-info">
          <PublishedDate
            published={lastNews[this.state.currentSlideIndex].published}
            cssClass="slide-date"
          />
          <div className="slide-title">{lastNews[this.state.currentSlideIndex].title}</div>
        </div>
      </div>
    );
  }
}

export default Slider;
