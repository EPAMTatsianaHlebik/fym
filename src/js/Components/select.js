import React from "react";
import PropTypes from "prop-types";

let options = [
  {
    title: "releaze date",
    value: "releaze-date",
    id: 'jw23'
  },
  {
    title: "most popular",
    value: "most-popular",
    id: '24r2w'
  },
  {
    title: "most expensive",
    value: "most-expensive",
    id: '6ytwe'
  }
]

export default function Select(props) {
  return (
    <>
      <select>
      {options.map((option) =>(
          <option key={option.id} value={option.value}>{option.title}
          </option>
      ))}
      </select>
    </>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
Select.defaultProps = {
  id: "Missing id",
  value: "Missing value",
  title: "Missing title"
}
