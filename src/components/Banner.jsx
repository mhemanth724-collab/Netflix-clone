function Banner() {
  return (
    <div
      style={{
        height: "60vh",
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original//9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Featured Movie
        </h1>
        <p style={{ width: "50%", marginTop: "10px" }}>
          This is a Netflix clone banner section. We will later connect API
          for real movies.
        </p>

        <div style={{ marginTop: "20px" }}>
          <button style={{ marginRight: "10px", padding: "10px 20px" }}>
            ▶ Play
          </button>
          <button style={{ padding: "10px 20px" }}>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;