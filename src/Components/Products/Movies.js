import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInst from "../../axios/Axios";
import  { ApIKey } from "../../config/config";
import "../Products/movies.css"
const Items = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    // setPage(1);
    useEffect(() => { 
        CallAPI();
    }, []);
    return (
        <>
            <div className="row row-cols-4 g-4 mt-5 ms-5 me-5">
                {items.map((item) => {
                    console.log(item);
                    return (
                        <div className="col" key={item.id}>
                            <div className="card card h-100">
                                <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} style={{ height: "500px"}} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.overview}</p>
                                    {/* <Link to={`details/${item.id}`} className="btn btn-dark btn-lg me-5">Movie Details</Link> */}
                                    <a href={`details/${item.id}`} className="btn btn-dark cardstyle">Movie Details</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="card-footer mt-5 row">
                <div className="col-6">
                    <button className="btn btn-outline-dark mt-3 mb-4" disabled={page===1?true:false} onClick={Prev}>Previos</button>
                </div>
                <div className="col-6 text-end">
                    <button className="btn btn-outline-dark mt-3 mb-4" disabled={page===500?true:false} onClick={Next}>Next</button>                
                </div>
                
                
            </div>
        </>
    );
    function Prev(){
        console.log("Prev "+page)
        if(page>1){
            let Npage=page - 1;
            console.log(Npage);
            setPage(Npage);
            console.log(page);
            CallAPI();
        }
    }
    function Next(){
        console.log("Next "+page);
        if(page < 500){
            let Npage = page + 1;
            console.log(Npage);
            setPage(Npage);
            console.log(page);
            CallAPI()
        }
    }
    function CallAPI(){
        axiosInst.get(`popular?api_key=${ApIKey}&page=${page}`)
        .then((result) => {
            console.log(result.data);
            setItems(result.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }
};


export default Items;