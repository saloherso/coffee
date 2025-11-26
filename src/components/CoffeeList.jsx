
import React, { useEffect, useState } from "react";
import Card from "./";
import { getProducts } from "../services/productService";
import "./CoffeeList.css";

export default function CoffeeList() {
  const [coffees, setCoffees] = useState([]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setCoffees(data);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = onlyAvailable
    ? coffees.filter((c) => c.available)
    : coffees;

  return (
    <div className="coffee-list-wrapper">
      <div className="coffee-list-card">
        <h1 className="title">Our Collection</h1>

        <p className="subtitle">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div className="tabs">
          <button
            className={!onlyAvailable ? "tab active" : "tab"}
            onClick={() => setOnlyAvailable(false)}
          >
            All Products
          </button>
          <button
            className={onlyAvailable ? "tab active" : "tab"}
            onClick={() => setOnlyAvailable(true)}
          >
            Available Now
          </button>
        </div>

        <div className="count-and-status">
          {loading ? (
            <span className="status">Loading...</span>
          ) : error ? (
            <span className="status error">{error}</span>
          ) : (
            <span className="status">{filtered.length} products</span>
          )}
        </div>

        <div className="grid">
          {!loading &&
            !error &&
            filtered.map((coffee) => (
              <Card
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                image={coffee.image}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
