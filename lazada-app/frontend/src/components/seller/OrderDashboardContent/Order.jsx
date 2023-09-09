import React from 'react';

const Order = ({ order, onProductStatusChange }) => {
    const { _id, customer, items } = order;

    const handleStatusChange = (productId, newStatus) => {
        // Call the parent component's function to update the product status
        onProductStatusChange(_id, productId, newStatus);
    };

    return (
        <div>
            <h2>Order ID: {_id}</h2>
            {customer && customer.name && <p>Customer: {customer.name}</p>}
            <ul>
                {items.map((product) => {
                    const { _id: productId, description, price, status, name } = product;

                    return (
                        <li key={productId}>
                            <p>Product Name: {name}</p>
                            <p>Product Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Status: {status}</p>
                            <button onClick={() => handleStatusChange(productId, 'Shipped')}>
                                Mark Shipped
                            </button>
                            <button onClick={() => handleStatusChange(productId, 'Canceled')}>
                                Mark Canceled
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Order;
