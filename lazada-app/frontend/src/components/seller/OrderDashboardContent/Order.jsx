import Product from './Product';

const Order = ({ order, onProductStatusChange }) => {
    const { orderId, customerInfo, products } = order;

    return (
        <div>
            <h2>Order ID: {orderId}</h2>
            <p>Customer: {customerInfo.name}</p>
            <ul>
                {products.map((product) => (
                    <Product
                        key={product.productId}
                        product={product}
                        orderId={orderId}
                        onProductStatusChange={onProductStatusChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Order;
