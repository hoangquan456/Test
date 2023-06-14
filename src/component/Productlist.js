import React from 'react';
import Product from './Product';

const Productlist = () => {
    const list = [
        {id: 1, name: "sữa", price: 112}, 
        {id: 2, name: "trứng", price: 234}, 
        {id: 3, name: "rau", price: 324}, 
        {id: 4, name: "gà", price: 411}, 
    ]

    return (
        <div>
            {list.map((a) =>
                <Product name = {a.name} price = {a.price}></Product>
            )}
        </div>
    );
};

export default Productlist;