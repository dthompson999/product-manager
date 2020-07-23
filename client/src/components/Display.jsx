import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/product")
            .then( res => {
                console.log(res);
                setProducts(res.data)
            })
            .catch(err => console.log(err));
    }


    useEffect( () => {
        fetchProducts();
    }, []);

    const remove = _id => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
            .then(res => {
                console.log(res);
                fetchProducts();
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="container mt-5">
                <table className="table table-striped table-hover table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>Product Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map( (p, i) => 
                        <tr key={i}>
                            <td>{p.title}</td>
                            <td>
                                <Link className="btn btn-sm btn-outline-primary mr-2" to={`/product/${p._id}`}>View </Link>
                                <Link className="btn btn-sm btn-outline-warning mr-2" to={`/product/update/${p._id}`}>Edit</Link>
                                <button className="btn btn-sm btn-outline-danger mr-2" onClick={e => remove(p._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Display;