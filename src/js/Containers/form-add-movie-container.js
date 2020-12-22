import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import Label from "../Components/label";
import MultiSelectGenre from "../Components/multy-select-genre";
import ReleazeDate from "../Components/date-picker";

export default function FormAddMovieContainer({addMovieModal}) {
  return (
    <>
      <form>
        <legend><h1>{addMovieModal.legend}</h1></legend>
          <Label for="add-movie-title" title={addMovieModal.form.aMovieTitle.title} />
          <InputText className="margin-b-3" id="add-movie-title" placeholder={addMovieModal.form.aMovieTitle.placeholder} />

          <Label for="add-movie-date" title={addMovieModal.form.aMovieDate.title}  />
          <ReleazeDate className="margin-b-3" id="add-movie-date" placeholder={addMovieModal.form.aMovieDate.placeholder} />

          <Label for="add-movie-url" title={addMovieModal.form.aMovieUrl.title}  />
          <InputText className="margin-b-3" id="add-movie-url" placeholder={addMovieModal.form.aMovieUrl.placeholder} />

          <Label for="add-movie-genre" title={addMovieModal.form.aMovieGenre.title}  />
          <MultiSelectGenre className="margin-b-3" id="add-movie-genre" placeholder={addMovieModal.form.aMovieGenre.placeholder} />

          <Label for="add-movie-overview" title={addMovieModal.form.aMovieOverview.title}  />
          <InputText className="margin-b-3" id="add-movie-overview" placeholder={addMovieModal.form.aMovieOverview.placeholder}  />

          <Label for="add-movie-runtime" title={addMovieModal.form.aMovieRuntime.title}  />
          <InputText className="margin-b-3" id="add-movie-runtime" placeholder={addMovieModal.form.aMovieRuntime.placeholder} />

          <div className="justify-end margin-tb-4">
            <Button className="btn--reset" assistiveText="click to">{addMovieModal.btnResetText}</Button>                                                    
            <Button className="margin-left-2">{addMovieModal.btnSubmitText}</Button>
          </div>
      </form>
    </>
  )
}
