import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Navbar/Nav";
import Rows from "./components/Row/Rows";
import requests from "./request";
function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Rows title="Animation" fetchUrl={requests.fetchAnimation} />
      <Rows title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
