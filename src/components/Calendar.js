import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayShort = moment.weekdaysShort();

  state = {
    dateObject: moment(),
    allMonths: moment.months(),
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  monthList = (props) => {
    let months = [];
    props.data.map((data) => {
      months.push(
        <td>
          <span>{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    let monthList = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });
    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colspan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthList}</tbody>
      </table>
    );
  };

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    console.log(dateObject);
    console.log(firstDay);
    return firstDay;
  };

  render() {
    let weekdayshortname = this.weekdayShort.map((day) => {
      return (
        <th key={day} className="week-day">
          <span className="day">{day}</span>
        </th>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          <span className="day-num">{d}</span>
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }

      let daysInMonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
      });
    });
    return (
      <div className="calendar">
        <div className="tail-datetime-calendar">
          <div className="calendar-navi">{this.month()}</div>
        </div>
        <div className="calendar-date">
          <this.monthList data={moment.months()} />
        </div>
        <table className="calendar-table">
          <thead>
            <tr className="week-table">{weekdayshortname}</tr>
          </thead>
          <tbody className="days">{daysInMonth}</tbody>
        </table>
      </div>
    );
  }
}
