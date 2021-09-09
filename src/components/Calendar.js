// import { React, useState } from "react";
// import { format, isSameMonth, isSameDay, add } from "date-fns";
// import { Link } from "react-router-dom";

// export default function Calendar() {
//   const {
//     startOfMonth,
//     startOfWeek,
//     endOfMonth,
//     endOfWeek,
//     startOfDay,
//     addDays,
//     addMonths,
//   } = require("date-fns");

//   const [selectedDate, setSelectedDate] = useState(new Date());

//   function takeWeek(start = new Date()) {
//     let date = startOfWeek(startOfDay(start));

//     return function () {
//       const week = [...Array(7)].map((_, i) => addDays(date, i));
//       date = addDays(week[6], 1);
//       return week;
//     };
//   }

//   function takeMonth(start = new Date()) {
//     let month = [];
//     let date = start;

//     function lastDayOfRange(range) {
//       return range[range.length - 1][6];
//     }

//     return function () {
//       const weekGen = takeWeek(startOfMonth(date));
//       const endDate = startOfDay(endOfWeek(endOfMonth(date)));
//       month.push(weekGen());

//       while (lastDayOfRange(month) < endDate) {
//         month.push(weekGen());
//       }

//       const range = month;
//       month = [];
//       date = addDays(lastDayOfRange(range), 1);

//       return range;
//     };
//   }

//   console.log(takeMonth(new Date())());

//   // const tw = takeWeek(new Date());
//   // console.log(tw());
//   // console.log(tw());
//   const data = takeMonth(selectedDate)();

//   function dayColor(day) {
//     if (isSameDay(day, selectedDate)) {
//       return "calendar-day";
//     }
//   }

//   function addMonth() {
//     addMonths(selectedDate, 1);
//     console.log(addMonths(selectedDate, 1));
//   }

//   return (
//     //converting tailwind back to sass
//     <div className="calendar">
//       <div className="">
//         <h1 className="calendar-month-and-year">
//           <div className="prev-month"></div>
//           {format(selectedDate, "MMMM").toUpperCase()}{" "}
//           {format(selectedDate, "yyyy").toUpperCase()}
//           <button onClick={() => takeMonth(new Date())()} className="next-month"></button>
//         </h1>

//         <div className={"grid grid-cols-7"}>
//           {["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"].map(
//             (dayName, i) => (
//               <div className="calendar-weekday">{dayName}</div>
//             )
//           )}
//         </div>
//         {data.map((week) => (
//           <div className={"grid grid-cols-7"}>
//             {week.map((day) => (
//               // <Link to="/programs/date/time">
//                 <div
//                   onClick={() => setSelectedDate(day)}
//                   className={`${
//                     !isSameMonth(day, selectedDate)
//                       ? "calendar-day-offmonth"
//                       : "calendar-day" }
//                       // ${isSameDay(day, selectedDate)
//                       // ? "calendar-current-day"
//                       // : ""
//                   }`}
//                 >
//                   {format(day, "dd")}
//                 </div>
//               /* </Link> */
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
