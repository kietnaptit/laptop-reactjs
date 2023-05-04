import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";

function Laptops(props){
    const[laptops, setLaptops] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:8080/laptops")
        .then((response) => response.json())
        .then((data) => setLaptops(data))
        .catch((err) => console.log(err));

    }, []);
    return(
        <div>
            <h2 className="text-center">Laptops List</h2>
            {/* <SearchBox/> */}
            <div className="row">
                <button className="btn btn-primary">Add Laptop</button>
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
                        {laptops.map((laptop) => (
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
export default Laptops;