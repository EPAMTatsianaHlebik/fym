// import React from "react";
import React, { Component, Suspense } from "react";

import politician from "../img/politician.jpg"
import matrix from "../img/the-matrix.jpg"
import dueDate from "../img/due-date.jpg"

// const matrix = React.lazy(() => import("../img/the-matrix.jpg")); // why do not work
// const dueDate = React.lazy(() => import("../img/due-date.jpg"));
// const Overlay = React.lazy(() => import( "./Layout-Components/overlay"));

const Header = React.lazy(() => import( "./Layout-Components/header"));
const HeaderContainer = React.lazy(() => import( "./Containers/header-container"));
const Main = React.lazy(() => import( "./Layout-Components/main"));
const MovieListErrorBoundery = React.lazy(() => import( "./Containers/movie-list-error-boundery"));
const MovieList = React.lazy(() => import( "./Containers/movie-list"));
const Footer = React.lazy(() => import( "./Layout-Components/footer"));
const FormAddMovieContainer = React.lazy(() => import( "./Containers/form-add-movie-container"));
const FormEditMovieContainer = React.lazy(() => import( "./Containers/form-edit-movie-container"));
const FormDeleteMovieContainer = React.lazy(() => import( "./Containers/form-delete-movie-container"));
const Overlay = React.lazy(() => import( "./Layout-Components/overlay"));
const ModalBox = React.lazy(() => import( "./Layout-Components/modal-box"));

class App extends Component {

  state = {
    showPageModal: false,
    activeModal: " ",
    header: { 
      title: "Find your movie",
      addBtn: {
        addBtnText: "+ Add Movie",
        addBtnAssistiveText: "click to check if you can",
      },
      search: {
        text: "search",
        placeholder: "What do you want to watch?"
      },
    },
    addMovieModal: {
      id: "add-movie",
      legend: "Add Movie",
      form:{
        aMovieTitle: {
          title: "Title",
          placeholder: "Movie Title here",
        },
        aMovieDate: {
          title: "Release Date",
          placeholder: "Select date",
        },
        aMovieUrl: {
          title: "Movie Url",
          placeholder: "Movie Url here",
        },
        aMovieGenre: {
          title: "Select Genre",
          placeholder: "Select Genre",
        },
        aMovieOverview: {
          title: "Overview",
          placeholder: "Overview here",
        },
        aMovieRuntime: {
          title: "Runtime",
          placeholder: "Runtime here",
        },
      },
      btnResetText: "reset",
      btnSubmitText: "submit"
    },
    editMovieModal: {
      id: "edit-movie",
      legend: "Edit Movie",
      form:{
        aMovieTitle: {
          title: "Title",
          placeholder: "Movie Title here",
        },
        aMovieDate: {
          title: "Release Date",
          placeholder: "Select date",
        },
        aMovieUrl: {
          title: "Movie Url",
          placeholder: "Movie Url here",
        },
        aMovieGenre: {
          title: "Select Genre",
          placeholder: "Select Genre",
        },
        aMovieOverview: {
          title: "Overview",
          placeholder: "Overview here",
        },
        aMovieRuntime: {
          title: "Runtime",
          placeholder: "Runtime here",
        },
        btnResetText: "reset",
        btnSubmitText: "save"
      }
    },
    deleteMovieModal: {
      id: "delete-movie",
      legend: "Delete Movie",
      text: "Are you sure you want to delete this movie?",
      btnSubmitText: "confirm"
    },
    movies: [
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
    ],
  }

  getModal = (e, modalId) => {
    e.preventDefault();
    console.log(modalId);
    this.setState({ showPageModal: true, activeModal: modalId });
  };
  hideModal = () => {
    this.setState({ showPageModal: false });
  };

  render() {
    console.log(this.state.showPageModal);
    // const { showPageModal, header, addMovieModal, editMovieModal, deleteMovieModal, movies } = this.state;
    const blurClass = this.state.showPageModal ? 'blur':'';
    return (
      <>
      <Suspense fallback = "Loading...">
        <div  className={blurClass}> 
            <Header>
              <HeaderContainer 
                header = {this.state.header} 
                onShowModal={(e) => this.getModal(e, this.state.addMovieModal.id)} />
            </Header>
            <Main>
              <MovieListErrorBoundery>
                <MovieList 
                  movies = {this.state.movies}
                  onShowModalEdit={(e) => this.getModal(e, this.state.editMovieModal.id)} 
                  onShowModalDelete={(e) => this.getModal(e, this.state.deleteMovieModal.id)} />
              </MovieListErrorBoundery>
            </Main>
            <Footer>
              <p className="center rose">nextflix roulette logo</p>
            </Footer>
          </div>

          { this.state.showPageModal && (
            <Overlay>
              <ModalBox
                  onHide={this.hideModal} >
                    
                <FormAddMovieContainer id={this.state.addMovieModal.id} addMovieModal={this.state.addMovieModal} />
                <FormEditMovieContainer id={this.state.editMovieModal.id} editMovieModal={this.state.editMovieModal} />
                <FormDeleteMovieContainer id={this.state.deleteMovieModal.id} deleteMovieModal={this.state.deleteMovieModal} />
                
              </ModalBox>
            </Overlay>
          )}
        </Suspense>
      </>
    );
  }
}

export default App
