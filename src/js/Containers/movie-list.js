import React, { Component } from "react";
import MovieListPanel from "./movie-list-panel";
import MovieListBox from "../Layout-Components/movie-list-box";
import TotalMovies from "../Components/total-movies";
import MovieCard from "../Components/movie-card";
import Icon from "../Components/icon";
import ModalCard from "../Components/modal-card";

class MovieList extends Component {
  state = {
    showModal: false,
    dataModal: {
      title: ""
    }
  };

  getModal = (e, data) => {
    e.preventDefault();
    this.setState({ showModal: true, dataModal: data });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        {/* <MovieListPanel /> */}
        <TotalMovies amount={this.props.movies.length} text="movies found"></TotalMovies>
        <MovieListBox>
          {this.props.movies.map((movie) =>(
            <MovieCard
            title = {movie.title}
            description = {movie.description}
            src = {movie.src}
            ganre = {movie.ganre}
            releasedate = {movie.releasedate}
            key = {movie.id}>
              
              <Icon className="card-icon" text="..." 
              onClick={(e) => this.getModal(e, movie)}/>

            {this.state.showModal & this.state.dataModal.title == movie.title ? 
              <ModalCard
                   show={this.state.showModal}
                   onHide={this.hideModal}
                   onShowModalEdit={this.props.onShowModalEdit}
                   onShowModalDelete={this.props.onShowModalDelete} /> 
            : null}
            </MovieCard>
          ))
          }
        </MovieListBox>
      </>
    )
  }
}

export default MovieList
