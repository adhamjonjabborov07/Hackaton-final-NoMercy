import React, { useState, useEffect } from "react";

function Found() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("foundItems")) || [];
    setItems(saved);
  }, []);

  const filtered = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="lost-container">
      <h1 data-aos="fade-right">Found Items</h1>

      <div className="controls" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? "⬆️ Asc" : "⬇️ Desc"}
        </button>
      </div>

      <table className="lost-table" data-aos="zoom-in">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Date</th>
            <th>Location</th>
            <th>Finder</th>
            <th>Description</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id} data-aos="fade-up">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
              <td>{item.finder}</td>
              <td>{item.description || "—"}</td>
              <td>
                {item.photo ? (
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }}
                  />
                ) : (
                  "No photo"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Found;
