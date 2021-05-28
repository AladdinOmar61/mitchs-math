import React from "react";

function Confirmation() {
  return <div>
      <h1 className="confirm">Confirmation</h1>
      <p className="confirm-message">Here is your information, is this okay?</p>
      <p className="confirm-info">-Monthname- -Dayname- -Time-</p>
      <button className="confirm-button">Confirm</button>
  </div>;
}

export default Confirmation;
