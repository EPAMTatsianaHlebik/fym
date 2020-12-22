// import React from "react";
import React, { useState } from "react"; //????
import MultiSelect from "react-multi-select-component";

export default function MultiSelectGenre() {

  const props = [
    { label: "Crime", value: "Crime" },
    { label: "Documentary", value: "Documentary" },
    { label: "Horor", value: "Horor" },
    { label: "Comedy", value: "Comedy" },
  ];
  
  const [selected, setSelected] = useState([]);

  return (
    <>
      <MultiSelect
        options={props}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        disableSearch={true} 
        hasSelectAll={false}
        overrideStrings={{
          selectSomeItems: "Select Genre",
      }}
      />
    </>
  );
};
