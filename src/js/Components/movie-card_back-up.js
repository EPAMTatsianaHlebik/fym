import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import MovieImage from "./movieImage";
// import politician from "../../img/politician.jpg"
import ModalBox from "../Layout-Components/modal-box";

export default function MovieCard(props) {
  return (
    <>
      <div className="card">
        <MovieImage src={props.src} title={props.title} />
        <div className="card-info">
          <div className="card-title">{props.title}</div>
          <div className="card-date">{props.releasedate}</div>
          <div className="card-genre">{props.genre}</div>
        </div>
        <Icon className="card-icon" text="..." onShowModal = { props.onShowModal }>
        { props.showModal && (
          <ModalBox hideModal={props.hideModal}>
            show={this.state.showModal}
            onHide={this.hideModal}
            name={this.state.dataModal.name}
            {this.props.name}
            <div>Edit</div>
            <div>Delite</div>
          </ModalBox>)
        }
        </Icon>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired,
}
MovieCard.defaultProps = {
  title: "Super Movie",
  description: "Missing description",
  genre: "just good movie",
  releasedate: "year missing",
}
