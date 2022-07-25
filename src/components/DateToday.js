import React from "react";
import { DateContainer } from "./DateStyles";

export const DateToday = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
};

export default DateToday;
