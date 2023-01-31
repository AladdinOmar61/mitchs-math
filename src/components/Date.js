import React from "react";
import Header from "./Header.js";

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDate: "",
      inputTime: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1 className="date-prompt">Select A Date and Time</h1>
        <form className="calendarForm">
          <input
            type="date"
            className="calendar-date"
            value={this.state.inputDate}
            onChange={(evt) => this.updateDate(evt)}
          />
          <input
            type="time"
            className="calendar-time"
            value={this.state.inputTime}
            onChange={(evt) => this.updateTime(evt)}
          />
                <button className="next">Next</button>
        </form>
        {console.log(this.state.inputDate)}
        {console.log(this.state.inputTime)}
      </div>
    );
  }

  updateDate(evt) {
    this.setState({
      inputDate: evt.target.value,
    });
  }
  updateTime(evt) {
    this.setState({
      inputTime: evt.target.value,
    });
  }
}

export default Date;
