import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../utils/requests"

const Home = () => {
  return (
    <section>
      <Main />
      <Row rowId="1" title="UpComing" fetchURL={requests.apiRequestUpcomingMovies} />
      <Row rowId="2" title="Popular" fetchURL={requests.apiRequestPopularMovies} />
      <Row rowId="3" title="Trending" fetchURL={requests.apiRequestTrendingMovies} />
      <Row rowId="4" title="Top Rated" fetchURL={requests.apiRequestTopRatedMovies} />
      <Row rowId="5" title="Horror" fetchURL={requests.apiRequestHorrorMovies} />
    </section>
  )
}

export default Home
