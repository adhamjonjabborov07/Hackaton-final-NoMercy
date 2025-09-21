import React, { useState } from "react";

function Lost() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const items = [
    { id: 1, name: "Wallet", date: "2023-12-01" },
    { id: 2, name: "Phone", date: "2023-12-05" },
    { id: 3, name: "Keys", date: "2023-12-03" },
  ];

  const filtered = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="lost-container">
      <h1 data-aos="fade-right">Lost Items</h1>

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
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id} data-aos="fade-up">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lost;
