import React from 'react';
import './PublishedDate.css';

class PublishedDate extends React.Component {
  render() { 
    const date = new Date(this.props.published);

    return (
      <div className="date-container">
        <div className="date">
          <span>{date.getDate()}</span><br />
          {MONTHS[date.getMonth()]}
        </div>
        <div className="time">{timeToString(date.getHours(), date.getMinutes())}</div>
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
