import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchBackend(props){
    const params = useParams();
    const[laptops, setLaptops] = useState([]);
    const keyword = params.keyword;
    useEffect(() =>{
        fetch(`http://localhost:8080/laptop/search?keyword=${keyword}`)
        .then((response) => response.json())
        .then((data) => setLaptops(data))
        .catch((err) => console.log(err));

    }, []);
    return(
        <div>
            <h2 className="text-center">Laptops List</h2>
            
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
                                    <a href={`/${laptop.id}`} className="btn btn-primary">View</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default SearchBackend;