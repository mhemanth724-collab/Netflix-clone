function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;