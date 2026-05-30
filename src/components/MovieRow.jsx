import { useEffect, useState } from "react";
import axios from "../api/axios";
import YouTube from "react-youtube";

function MovieRow({ title, fetchUrl }) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");
const [showTrailer, setShowTrailer] = useState(false);
const [selectedMovie, setSelectedMovie] = useState(null);

const [favorites, setFavorites] = useState(
JSON.parse(localStorage.getItem("favorites")) || []
);

useEffect(() => {
const fetchData = async () => {
if (!fetchUrl) return;


  try {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results || []);
  } catch (error) {
    console.error(error);
    setMovies([]);
  }
};

fetchData();

}, [fetchUrl]);

const handleTrailer = async (movie) => {
try {
const response = await axios.get(
`/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
);


  const trailer = response.data.results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  if (trailer) {
    setTrailerUrl(trailer.key);
    setShowTrailer(true);
  } else {
    alert("Trailer not found");
  }
} catch (error) {
  console.error(error);
}


};

const addToFavorites = (movie) => {
const exists = favorites.find(
(fav) => fav.id === movie.id
);


if (!exists) {
  const updatedFavorites = [...favorites, movie];

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );

  alert("Added to My List ❤️");
}


};

return (
<div style={{ padding: "20px" }}> <h2>{title}</h2>

```
  <div
    style={{
      display: "flex",
      overflowX: "auto",
      gap: "15px",
      paddingTop: "10px",
    }}
  >
    {movies.map((movie) =>
      movie.poster_path ? (
        <div
          key={movie.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name}
            onClick={() => handleTrailer(movie)}
            onDoubleClick={() => setSelectedMovie(movie)}
            style={{
              width: "150px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />

          <button
            onClick={() => addToFavorites(movie)}
            style={{
              marginTop: "8px",
              padding: "5px 10px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ❤️ My List
          </button>
        </div>
      ) : null
    )}
  </div>

  {showTrailer && (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div>
        <button
          onClick={() => setShowTrailer(false)}
          style={{
            marginBottom: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Close Trailer
        </button>

        <YouTube
          videoId={trailerUrl}
          opts={{
            width: "900",
            height: "500",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </div>
    </div>
  )}

  {selectedMovie && (
    <div
      onClick={() => setSelectedMovie(null)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#141414",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {selectedMovie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title || selectedMovie.name}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        )}

        <h2>
          {selectedMovie.title || selectedMovie.name}
        </h2>

        <p>⭐ Rating: {selectedMovie.vote_average}</p>

        <p>
          📅 Release Date:{" "}
          {selectedMovie.release_date ||
            selectedMovie.first_air_date}
        </p>

        <p>{selectedMovie.overview}</p>

        <button
          onClick={() => setSelectedMovie(null)}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close Details
        </button>
      </div>
    </div>
  )}
</div>


);
}

export default MovieRow;
