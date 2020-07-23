import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const ProductForm = props => {

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");
    const[errors, setErrors] = useState({});

    const create = e => {
        e.preventDefault();
        const newProduct = {title, price, description};

        axios.post("http://localhost:8000/api/product/new", newProduct)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={ create } className="col-sm-8 offset-sm-2 mt-5">
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" onChange={ e => setTitle(e.target.value)} />
                {errors.title ? <p className="text-danger">{errors.title.properties.message}</p>: ""}
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" step="0.01" className="form-control" onChange={ e => setPrice(e.target.value)} value={price}/>
                {errors.price ? <p className="text-danger">{errors.price.properties.message}</p>: ""}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" onChange={ e => setDescription(e.target.value)} />
                {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: ""}
            </div>
            <input type="submit" className="btn btn-primary btn-block" value="Create Product"/>
        </form>
    )

}

export default ProductForm;