import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Products.css';

function Products() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setList(json))
        return () => {
            setList([]);
        }
    }, [setList]);

    let url = useLocation();

    return (
        <div className="products">
            <h1>Products list:</h1>
            <ul>
                {list.map(elem => <li key={elem.id}><Link to={`${url.pathname}/${elem.id}`}>{elem.title}</Link></li>)}
            </ul>
        </div>
    );
}

export default Products;