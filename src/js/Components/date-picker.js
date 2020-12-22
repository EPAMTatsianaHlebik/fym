import React from "react";
import DatePicker from 'react-date-picker';

export default function ReleazeDate(props) {

  return (
    <>
      <DatePicker
        format = "y"
        yearPlaceholder = {props.placeholder}
        maxDetail = "century"
        minDetail = "year"
        minDate = { new Date(1895, 11, 1)}
        maxDate = { new Date(2020, 9, 1)}
        clearIcon = {null} 
      />
    </>
  );
};
