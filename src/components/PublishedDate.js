import React from 'react';
import './PublishedDate.css';

class PublishedDate extends React.Component {
  render() { 
    const date = new Date(this.props.published);

    return (
      <div className={`date-container ${this.props.cssClass || ''}`}>
        <span className="day date">{date.getDate()}</span>
        <span className="month date">{MONTHS[date.getMonth()]}</span>
        <span className="time">{timeToString(date.getHours(), date.getMinutes())}</span>
      </div>
    );
  }
}

function timeToString(hours, minutes) {
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes;
}

const MONTHS = [
  'янв.',
  'фев.',
  'март',
  'апр.',
  'май',
  'июнь',
  'июль',
  'авг.',
  'сент.',
  'окт.',
  'нояб.',
  'дек.'
];

export default PublishedDate;
