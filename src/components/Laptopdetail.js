import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Laptopdetail(props){
    const params = useParams();
    const [laptop, setLaptop] = useState({});
    const id = params.id;
    const onSaveClick = () => {
        console.log(laptop);
        fetch(`http://localhost:8080/laptop/save/${id}`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(laptop),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((data) => setLaptop(data))
        .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetch(`http://localhost:8080/laptop/${id}`)
        .then((response) => response.json())
        .then((data) => setLaptop(data))
        .catch((err) => console.log(err));
    }, []);
    return(
        <div>
            <h1>{id < 0 ? "New Laptop" : `Laptop ${id}`}</h1>
            ID:{" "}
            <input type="number" value={laptop.id} onChange={(e) => setLaptop({...laptop, id : e.target.value})} />
            <br/>
            Name:{" "}
            <input type="text" value={laptop.name} onChange={(e) => setLaptop({...laptop, id : e.target.value})} />
            <br/>
            Date:{" "}
            <input type="text" value={laptop.date} onChange={(e) => setLaptop({...laptop, id : e.target.value})} />
            <br/>
            Brand:{" "}
            <input type="text" value={laptop.brand} onChange={(e) => setLaptop({...laptop, id : e.target.value})} />
            <br/>
            Sold:{" "}
            <input type="checkbox" checked={laptop.sold} onChange={(e) => setLaptop({...laptop, id : e.target.value})} />
            <br/>
            <button>Save</button>
        </div>

    );
}
export default Laptopdetail;