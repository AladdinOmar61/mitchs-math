import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayShort = moment.weekdaysShort();

  state = {
    dateObject: moment(),
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
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
      daysInMonth.push(
        <td key={d} className="calendar-day">
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
