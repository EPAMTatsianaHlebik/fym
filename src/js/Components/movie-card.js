import React, { Component } from "react";
import PropTypes from "prop-types"; //??
import Icon from "./icon";
import MovieImage from "./movieImage";
import ModalCard from "./modal-card";
// import politician from "../../img/politician.jpg"

class MovieCard extends Component {
  
  render (){
    return (
      <>
        <div className="card">
          <MovieImage src={this.props.src} title={this.props.title} />
          <div className="card-info">
            <div className="card-title">{this.props.title}</div>
            <div className="card-date">{this.props.releasedate}</div>
            <div className="card-ganre">{this.props.ganre}</div>
          </div>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default MovieCard