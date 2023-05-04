import React, { useState, useEffect } from "react";


function SearchBox(props) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/laptops");
      const data = await response.json();
      setItems(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setResults(performSearch(query, items));
  }, [query, items]);

  function performSearch(query, items) {
    if (!items) {
      return [];
    }
    if(!query){
        return items;
    }
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.brand.toLowerCase().includes(query.toLowerCase())
    );
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setQuery(value);
  }

  const handleSearchBackend = () => {
    window.location.href = `/search/${query}`;
  }
  
  return (
    <div>
        <h2 className="text-center">Laptops List</h2>
            <br></br>
            <div>
                <input type="text" id="query" value={query} onChange={handleInputChange} placeholder="Enter the search keyword" />
                <a class="btn btn-primary" id="search-backend" onClick={handleSearchBackend}>Search</a>
            </div>
      <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Brand</th>
                            <th>Sold</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((laptop) => (
                            <tr key={laptop.id}>
                                <td>{laptop.id}</td>
                                <td>{laptop.name}</td>
                                <td>{laptop.date}</td>
                                <td>{laptop.brand}</td>
                                <td>
                                    <input type="checkbox" defaultChecked={laptop.sold} />
                                </td>
                                <td>
                                    <a href={laptop.id} className="btn btn-primary">View</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  );
}

export default SearchBox;
