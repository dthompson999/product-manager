import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const EditProduct = props => {

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");
    const[errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => {
                console.log(res);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdateProduct = e => {
        e.preventDefault();
        const product = {title, price, description};
        axios.put(`http://localhost:8000/api/product/update/${props._id}`, product)
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
        <form onSubmit={UpdateProduct} className="col-sm-8 offset-sm-2 mt-5">
            <h2>Edit Product</h2>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" onChange={ e => setTitle(e.target.value)} value={title}/>
                {errors.title ? <p className="text-danger">{errors.title.properties.message}</p>: ""}
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" onChange={ e => setPrice(e.target.value)} value={price}/>
                {errors.price ? <p className="text-danger">{errors.price.properties.message}</p>: ""}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" onChange={ e => setDescription(e.target.value)} value={description}/>
                {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: ""}
            </div>
            <input type="submit" className="btn btn-primary btn-block" value="Update Product"/>
        </form>
    )

}

export default EditProduct;