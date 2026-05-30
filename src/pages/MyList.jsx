function MyList() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>❤️ My List</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {favorites.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.name}
              style={{
                width: "180px",
                borderRadius: "10px",
              }}
            />

            <p
              style={{
                width: "180px",
                textAlign: "center",
              }}
            >
              {movie.title || movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;