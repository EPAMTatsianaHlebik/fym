import React from "react";
import Select from "../Components/select";

let genres = [
  {
    title: "all",
    id: '989'
  },
  {
    title: "documentary",
    id: '989d'
  },
  {
    title: "camedy",
    id: '989s'
  },
  {
    title: "horror",
    id: '989f'
  },
  {
    title: "crime",
    id: '989g'
  }
]

export default function MovieListPanel() {
  return (
    <>
      <ul>
      {genres.map((genre) =>(
         <li key = {genre.id}>{genre.title} </li>
      ))
      }
      </ul>
      <Select />
    </>
  )
}
