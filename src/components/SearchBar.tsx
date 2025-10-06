// src/components/SearchBar.tsx
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (newTerm: string) => void;
}

// SearchBar component: controlled input for movie search
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
};

export default SearchBar;