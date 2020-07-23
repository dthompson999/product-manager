import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Detail = (props) => {

    const [details, setDetails] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then( res => {
                console.log(res);
                setDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [props._id]);

    return (
        <div>
            <div className="card mt-4">
                <div className="card-header bg-primary text-white">{details.title}</div>
                <div className="card-body">
                    <p><span style={{fontWeight: 'bold'}}>Description:</span> {details.description}</p>
                    <p><span style={{fontWeight: 'bold'}}>Price:</span> ${details.price}</p>
                    <p><span style={{fontWeight: 'bold'}}>Created At:</span> {moment(details.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
                    <p><span style={{fontWeight: 'bold'}}>Updated At:</span> {moment(details.updatedAt).format('MMMM Do YYYY, h:mm a')}</p>
                    <p><span style={{fontWeight: 'bold'}}>Database ID:</span> {details._id}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;