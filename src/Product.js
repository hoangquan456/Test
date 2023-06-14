import React from 'react';

const Product = ({name, price, quantity}) => {
    return (
        <div>
            <div>Tên sản phẩm: {name} </div>
            <div>Giá tiền 1 đơn vị: {price} </div>
            <div>Số lượng còn lại: {quantity} </div>
        </div>
    );
};

export default Product;