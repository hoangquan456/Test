import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <div class = "single">
            Sản phẩm {name} có giá là {price}
        </div>
    );
};

export default Product;