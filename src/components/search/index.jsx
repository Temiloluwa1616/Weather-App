import { Search } from "lucide-react";

export default function SearchComponent({ search, setSearch, handleSearch }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search for any city..."
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}