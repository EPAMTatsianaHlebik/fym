import React, { Component } from "react";
import SearchElement from "./search-element";
import FormContainer from "./form-container";
import Button from "../Components/button";
import AddMovieContainer from "./addMovieContainer";
import AddMovieBox from "../Layout-Components/add-movie-box";


export default function HeaderContainer({header, onShowModal}) {
  return (
    <>
      <FormContainer>
        <h1> {header.title} </h1>
        <SearchElement search={header.search} />
      </FormContainer>
      <AddMovieBox>
        <AddMovieContainer>
          <Button 
            className="btn--secondary" 
            assistiveText={header.addBtn.addBtnAssistiveText}
            onClick = {onShowModal}
            >
              {header.addBtn.addBtnText}
            </Button>
        </AddMovieContainer>
      </AddMovieBox>
    </>
  );
}
