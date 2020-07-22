import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = props => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/product")
            .then( res => {
                console.log(res);
                setProducts(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {products.map( (p, i) => 
                <div className="card mt-3" key={i}>
                    <div className="card-header bg-primary text-white">{p.title}</div>
                    <div className="card-body">
                        <p>Price: ${p.price}</p>
                        <p>Description: {p.description}</p>
                        <p>Created At: {p.createdAt}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Display;