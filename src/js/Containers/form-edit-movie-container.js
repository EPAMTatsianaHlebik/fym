import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import Label from "../Components/label";
import MultiSelectGenre from "../Components/multy-select-genre";
import ReleazeDate from "../Components/date-picker";

export default function FormEditMovieContainer({editMovieModal}) {
  return (
    <>
      <form>
        <legend><h1>{editMovieModal.legend}</h1></legend>
          <Label for="add-movie-title" title={editMovieModal.form.aMovieTitle.title} />
          <InputText className="margin-b-3" id="add-movie-title" placeholder={editMovieModal.form.aMovieTitle.placeholder} />

          <Label for="add-movie-date" title={editMovieModal.form.aMovieDate.title}  />
          <ReleazeDate className="margin-b-3" id="add-movie-date" placeholder={editMovieModal.form.aMovieDate.placeholder} />

          <Label for="add-movie-url" title={editMovieModal.form.aMovieUrl.title}  />
          <InputText className="margin-b-3" id="add-movie-url" placeholder={editMovieModal.form.aMovieUrl.placeholder} />

          <Label for="add-movie-genre" title={editMovieModal.form.aMovieGenre.title}  />
          <MultiSelectGenre className="margin-b-3" id="add-movie-genre" placeholder={editMovieModal.form.aMovieGenre.placeholder} />

          <Label for="add-movie-overview" title={editMovieModal.form.aMovieOverview.title}  />
          <InputText className="margin-b-3" id="add-movie-overview" placeholder={editMovieModal.form.aMovieOverview.placeholder}  />

          <Label for="add-movie-runtime" title={editMovieModal.form.aMovieRuntime.title}  />
          <InputText className="margin-b-3" id="add-movie-runtime" placeholder={editMovieModal.form.aMovieRuntime.placeholder} />

          <div className="justify-end margin-tb-4">
            <Button className="btn--reset" assistiveText="click to">{editMovieModal.btnResetText}</Button>                                                    
            <Button className="margin-left-2">{editMovieModal.btnSubmitText}</Button>
          </div>
      </form>
    </>
  )
}
