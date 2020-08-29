
import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import Label from "../Components/label";
import SearchBox from "../Layout-Components/search-box"

export default function SearchElement() {
  return (
    <>
      <Label for="search-movie" title="Find your movie"  />
      <SearchBox>
        <InputText id="search-movie" placeholder="What do you want to watch?" />
        <Button className="btn" text="search"/>
      </SearchBox>
    </>
  )
}
