import React from "react";
import MovieListPanel from "./movie-list-panel";
import MovieListBox from "../Layout-Components/movie-list-box";
import TotalMovies from "../Components/total-movies";
import MovieCard from "../Components/movie-card";
import politician from "../../img/politician.jpg"
import matrix from "../../img/the-matrix.jpg"
import dueDate from "../../img/due-date.jpg"

let movies = [
  {
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    id: 'j123',
    src: matrix,
    ganre: 'Action, Sci-Fi',
    releasedate: '1999'
  },
  {
    title: "Due Date",
    description: "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.",
    id: 'e4r2w',
    src: dueDate,
    ganre: 'Comedy, Drama ',
    releasedate: '2010'
  },
  {
    title: "The Politician",
    description: "Payton Hobart, a student from Santa Barbara, has known since age seven that he's going to be President of the United States.",
    id: '6yt4e',
    src: politician,
    ganre: 'Comedy, Drama ',
    releasedate: '2019'
  },
  {
    title: "The Politician 2",
    description: "Payton Hobart, a student from Santa Barbara, has known since age seven that he's going to be President of the United States.",
    id: '6y4t4e',
    src: politician,
    ganre: 'Comedy, Drama ',
    releasedate: '2019'
  },
  {
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    id: 'j1253',
    src: matrix,
    ganre: 'Action, Sci-Fi',
    releasedate: '1999'
  },
  {
    title: "Due Date",
    description: "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.",
    id: 'e4r2w7',
    src: dueDate,
    ganre: 'Comedy, Drama ',
    releasedate: '2010'
  }
]
console.log (movies);

export default function MovieList() {
  return (
    <>
    <script>console.log (movies);</script>
      {/* <MovieListPanel /> */}
      <TotalMovies amount={movies.length} text="movies found"></TotalMovies>
      <MovieListBox>
        {movies.map((movie) =>(
          <MovieCard
          title = {movie.title}
          description = {movie.description}
          src = {movie.src}
          ganre = {movie.ganre}
          releasedate = {movie.releasedate}
          key = {movie.id}
        />
        ))
        }
      </MovieListBox>
    </>
  )
}
