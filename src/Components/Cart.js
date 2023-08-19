import React from 'react';
import { useContext } from 'react';
import { cartContext } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import emptyCart from './images/empty-cart.png'
import { Link } from 'react-router-dom';
import './Styles/Cart.css';

export default function Cart() {

    const globalState = useContext(cartContext);
    const state = globalState.state;
    const dispatch = globalState.dispatch;
    var amount = state.reduce((total, item) => {
        return (total + item.price * item.quantity);
    }, 0)

    return (

        <div className="h-100 rounded">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    {amount > 0 ? (<div className="col-10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-dark">Shopping Cart</h3>
                        </div>

                        {state.map((item, index) => {
                            return <div className="card w-100 mb-4" key={index}>
                                <div className="card-body p-3">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="text-center col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={item.image}
                                                className="cart-img img-fluid w-50" alt="item" />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{item.title}</p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex button">
                                            <button className="btn px-2 border-0"
                                                onClick={() => {
                                                    if (item.quantity > 1) {
                                                        dispatch({ type: "DEC", payload: item })
                                                    } else {
                                                        dispatch({ type: "DEL", payload: item })
                                                    }
                                                }}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>

                                            <div className="form-control form-control-sm m-1 text-center">{item.quantity}</div>

                                            <button className="btn px-2 border-0"
                                                onClick={() => dispatch({ type: "INC", payload: item })}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">${item.quantity * item.price}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end button">
                                            <button onClick={() => dispatch({ type: "DEL", payload: item })} className="btn border-0 text-danger">
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                        <div className="card w-100 mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="fw-bold mb-0">Total:</h5>
                                    <h5 className="fw-bold mb-0">${amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>) : (<div className='text-center my-5'>
                        <img src={emptyCart} alt="empty-cart" />
                        <h4>Nothing to see here!</h4>
                        <Link className='text-dark' to={'/'}>Go to Shopping Zone </Link>
                    </div>)}
                </div>
            </div>
        </div>
    )
}