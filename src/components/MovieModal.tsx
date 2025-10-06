// src/components/MovieModal.tsx
import React from "react";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  plot: string;
  actors: string;
  genre: string;
  runtime: string;
  posterUrl: string;
}

const MovieModal: React.FC<MovieModalProps> = ({
  isOpen,
  onClose,
  title,
  plot,
  actors,
  genre,
  runtime,
  posterUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            fontSize: "1.5rem",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2>{title}</h2>
        <img
          src={posterUrl}
          alt={`${title} Poster`}
          style={{ width: "100%", maxHeight: "300px", objectFit: "contain", marginBottom: "1rem" }}
        />
        <p><strong>Plot: </strong>{plot}</p>
        <p><strong>Actors: </strong>{actors}</p>
        <p><strong>Genre: </strong>{genre}</p>
        <p><strong>Runtime: </strong>{runtime}</p>
      </div>
    </div>
  );
};

export default MovieModal;