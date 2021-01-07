import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayShort = moment.weekdaysShort();
  render() {
    let weekdayshortname = this.weekdayShort.map((day) => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return (
      <div className="calendar">
        <tr className="week-table">{weekdayshortname}</tr>
      </div>
    );
  }
}
