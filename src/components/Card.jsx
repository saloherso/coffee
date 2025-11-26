
import React from "react";
import "./Card.css";

export default function Card({
  id,
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}) {
  const fallback = "https://via.placeholder.com/400x300?text=Coffee+Image";

  return (
    <article className="card" aria-labelledby={`coffee-${id}`}>
      <div className="image-wrapper">
        <img
          src={image || fallback}
          alt={name}
          className={available ? "coffee-img" : "coffee-img dimmed"}
        />
        {popular && <span className="badge popular">Popular</span>}
        {!available && <span className="badge soldout">Sold Out</span>}
      </div>

      <div className="card-content">
        <div className="header">
          <h3 id={`coffee-${id}`} className="coffee-name">{name}</h3>
          <div className="price">{price}</div>
        </div>

        <div className="footer">
          {rating !== null && rating !== undefined ? (
            <div className="rating">⭐ {rating} {votes ? <span className="votes">({votes})</span> : null}</div>
          ) : (
            <div className="no-rating">No ratings</div>
          )}
        </div>
      </div>
    </article>
  );
}
