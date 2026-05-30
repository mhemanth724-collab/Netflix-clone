import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import SearchBar from "../components/SearchBar";
import requests from "../api/requests";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Banner />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {searchTerm.trim() && (
        <MovieRow
          title={`Search Results: ${searchTerm}`}
          fetchUrl={requests.searchMovies(searchTerm)}
        />
      )}

      <MovieRow
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />

      <MovieRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <MovieRow
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <MovieRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <MovieRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Footer />
    </div>
  );
}

export default Home;