import React from "react";
import Button from "../Components/button";
import InputText from "../Components/input-text";
import Label from "../Components/label";
import MultiSelectGenre from "../Components/multy-select-genre";
import ReleazeDate from "../Components/date-picker";

export default function MovieForm({mData}) {
  return (
    <>
      <form>
        <legend><h1>{mData.legend}</h1></legend>
          <Label for="add-movie-title" title={mData.form.aMovieTitle.title} />
          <InputText className="margin-b-3" id="add-movie-title" placeholder={mData.form.aMovieTitle.placeholder} />

          <Label for="add-movie-date" title={mData.form.aMovieDate.title}  />
          <ReleazeDate className="margin-b-3" id="add-movie-date" placeholder={mData.form.aMovieDate.placeholder} />

          <Label for="add-movie-url" title={mData.form.aMovieUrl.title}  />
          <InputText className="margin-b-3" id="add-movie-url" placeholder={mData.form.aMovieUrl.placeholder} />

          <Label for="add-movie-genre" title={mData.form.aMovieGenre.title}  />
          <MultiSelectGenre className="margin-b-3" id="add-movie-genre" placeholder={mData.form.aMovieGenre.placeholder} />

          <Label for="add-movie-overview" title={mData.form.aMovieOverview.title}  />
          <InputText className="margin-b-3" id="add-movie-overview" placeholder={mData.form.aMovieOverview.placeholder}  />

          <Label for="add-movie-runtime" title={mData.form.aMovieRuntime.title}  />
          <InputText className="margin-b-3" id="add-movie-runtime" placeholder={mData.form.aMovieRuntime.placeholder} />

          <div className="justify-end margin-tb-4">
            <Button className="btn--reset" assistiveText="click to">{mData.btnResetText}</Button>                                                    
            <Button className="margin-left-2">{mData.btnSubmitText}</Button>
          </div>
      </form>
    </>
  )
}
