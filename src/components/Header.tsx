import React from "react";

// Header component: displays the top navigation bar with site name
const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: "#212121",
      color: "white",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold"
    }}>
      IMDB Replica
    </header>
  );
};

export default Header;