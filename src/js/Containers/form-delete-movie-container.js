import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import Label from "../Components/label";
import MultiSelectGenre from "../Components/multy-select-genre";
import ReleazeDate from "../Components/date-picker";

export default function FormEditeMovieContainer({deleteMovieModal}) {
  return (
    <>
      <form>
        <legend><h1>{deleteMovieModal.legend}</h1></legend>
          <div>{deleteMovieModal.text}</div>
          <div className="justify-end margin-tb-4">                                                  
            <Button className="margin-left-2">{deleteMovieModal.btnSubmitText}</Button>
          </div>
      </form>
    </>
  )
}
