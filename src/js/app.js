import React from "react";
import Header from "./Layout-Components/header";
import HeaderContainer from "./Containers/header-container";
import Main from "./Layout-Components/main";
import MovieListErrorBoundery from "./Containers/movie-list-error-boundery";
import MovieList from "./Containers/movie-list";
import Footer from "./Layout-Components/footer";

export default function App() {

  return (
    <>
      <Header>
        <HeaderContainer />
      </Header>
      <Main>
        <MovieListErrorBoundery>
          <MovieList />
        </MovieListErrorBoundery>
      </Main>
      <Footer>
        <p className="center rose">nextflix roulette logo</p>
      </Footer>
    </>
  );
}
