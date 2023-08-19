import React, { useReducer } from 'react';
import { createContext } from 'react';

export const cartContext = createContext()
export default function Context(props) {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const addItem = state.filter((item) => action.payload.id === item.id)
                if (addItem.length > 0) {
                    return state
                } else {
                    return [...state, action.payload];
                }

            case "INC":
                const increaseQuantity = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
                return increaseQuantity;

            case "DEC":
                const decreaseQuantity = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
                return decreaseQuantity;

            case "DEL":
                const removeItem = state.filter((item) => item.id !== action.payload.id)
                return removeItem;

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, []);

    const info = { state, dispatch }

    return (

        <cartContext.Provider value={info}>{props.children}</cartContext.Provider>

    )

}