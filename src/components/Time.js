import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Time = () => {
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning , Sameer";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon , Sameer";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "You should be sleeping now , Good night";
    }
  };

  return (
    <div>
      <p>
        <Moment format="LT"></Moment>
      </p>
      <p>{greeting()}</p>
    </div>
  );
};

export default Time;
