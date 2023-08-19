import React from 'react';
import './Styles/ProductCard.css'

export default function ProductCard(props) {

    return (

        <div className="card my-3">
            <img src={props.image} className="card-img-top" alt="pic" />
            <div className="card-body">
                <h5 className="card-title"><b>{props.title}</b></h5>
                {/* <p className="card-text">{props.desc}</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Category: </b>{props.category}</li>
                <li className="list-group-item"><b>Price: </b>${props.price}</li>
            </ul>
            <div className="card-body cartButton">
                <button
                    onClick={() => props.dispatch({type: "ADD", payload:props.item})}
                    className="btn">Add to Cart</button>
            </div>
        </div>

    )

}