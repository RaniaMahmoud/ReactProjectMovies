import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInst from "../../axios/Axios";
import ApIKey from "../../config/config";
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => { 
        axiosInst.get(`popular?api_key=${ApIKey}`)
        .then((result) => {
            console.log(result.data);
            setItems(result.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 ms-5">
                {items.map((item) => {
                    console.log(item);
                    return (
                        <div className="col" key={item.id}>
                            <div className="card card h-100">
                                <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} style={{ height: "500px"}} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.overview}</p>
                                    <Link to={`details/${item.id}`} className="btn btn-dark btn-lg me-5">Movie Details</Link>
                                    {/* <a href={`details/${item.id}`} className="btn btn-dark">Movie Details</a> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Items;