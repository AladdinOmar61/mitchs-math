import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayShort = moment.weekdaysShort();

  state = {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
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

  setMonth = (month) => {
    let monthNo = this.state.allMonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject,
    });
  };

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
    });
  };

  year = () => {
    return this.state.dateObject.format("Y");
  };

  setYear = (year) => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
    });
  };

  showYearTable = (e) => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showDateTable: !this.state.showDateTable,
    });
  };

  onPrev = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
    });
  };
  onNext = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
    });
  };

  monthList = (props) => {
    let months = [];
    props.data.map((data) => {
      months.push(
        <td
          key={data}
          className="calendar-month-select"
          onClick={(e) => {
            this.setMonth(data);
          }}
        >
          <span className="calendar-month-select-span">{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
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

  yearTable = (props) => {
    let months = [];
    let nextten = moment().set("year", props).add("year", 12).format("Y");

    let twelveyears = this.getDates(props, nextten);

    twelveyears.map((data) => {
      months.push(
        <td
          key={data}
          className="calendar-year-select"
          onClick={(e) => {
            this.setYear(data);
          }}
        >
          <span className="calendar-year-select-span">{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-year">
        <thead>
          <tr>
            <th colSpan="4">Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  render() {
    let weekdayshortname = this.weekdayShort.map((day) => {
      return (
        <th key={day} className="week-day">
          <span className="week-day-num">{day}</span>
        </th>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d === this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          <span className="days-num">{d}</span>
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
          <div className="calendar-navi">
            <span
              onClick={(e) => {
                this.onPrev();
              }}
              class="calendar-button calendar-button-prev"
            />
            &lt;
            <span
              onClick={(e) => {
                this.showMonth();
              }}
              className="calendar-label"
            >
              {this.month()}
            </span>
            <span
              className="calendar-label"
              onClick={(e) => this.showYearTable()}
            >
              {this.year()}
            </span>
            <span
              onClick={(e) => {
                this.onNext();
              }}
              className="calendar-button calendar-button-next"
            >
              &gt;
            </span>
          </div>
        </div>
        <div className="calendar-date">
          {this.state.showYearTable && <this.yearTable props={this.year()} />}
          {this.state.showMonthTable && (
            <this.monthList data={moment.months()} />
          )}
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
