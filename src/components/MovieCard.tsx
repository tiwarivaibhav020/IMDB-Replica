import React from "react";

interface MovieCardProps {
  title: string;
  year: string;
  posterUrl: string;
  imdbRating?: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, posterUrl, imdbRating, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "180px",
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "0 auto",
        cursor: onClick ? "pointer" : "default",
      }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      onKeyDown={(e) => { if (e.key === "Enter" && onClick) onClick(); }}
    >
      <img
        src={posterUrl && posterUrl !== "N/A" ? posterUrl : "https://via.placeholder.com/180x270?text=No+Image"}
        alt={`Poster of ${title}`}
        style={{ width: "100%", height: "270px", objectFit: "cover" }}
      />
      <div style={{ padding: "0.5rem" }}>
        <h3 style={{ margin: "0.2rem 0" }}>{title}</h3>
        <p style={{ margin: "0.2rem 0", color: "#666" }}>{year}</p>
        {imdbRating && <p style={{ margin: "0.2rem 0", fontWeight: "bold" }}>IMDb: {imdbRating}</p>}
      </div>
    </div>
  );
};

export default MovieCard;