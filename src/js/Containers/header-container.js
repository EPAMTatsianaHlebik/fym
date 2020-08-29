import React from "react";
import SearchElement from "./search-element";
import FormContainer from "./form-container";
import Button from "../Components/button";
import AddMovieBox from "../Layout-Components/add-movie-box"

export default function HeaderContainer() {
  return (
    <>
      <FormContainer>
        <SearchElement />
      </FormContainer>
      <AddMovieBox>
        <Button className="btn btn--secondary" text="+ Add Movie" />
      </AddMovieBox>
    </>
  )
}
