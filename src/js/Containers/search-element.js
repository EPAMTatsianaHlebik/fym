
import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import SearchBox from "../Layout-Components/search-box"

export default function SearchElement({search}) {
  return (
    <>
      <SearchBox>
        <InputText id="search-movie" placeholder={search.placeholder} />
        <Button>{search.text}</Button>
      </SearchBox>
    </>
  )
}
