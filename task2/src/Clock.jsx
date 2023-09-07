import React, { Component } from 'react';
import './index.scss';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: props.offset,
    };
  }

  getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };

  render() {
    return (
      <div className="clock">
        <div className="clock__location">New York</div>
        <div className="clock__time">7:00:51 AM</div>
      </div>
    );
  }
}

export default Clock;
