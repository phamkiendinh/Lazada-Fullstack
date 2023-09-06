import productData from '../../../data/seller/product.json';

const Product = ({ product, orderId, onProductStatusChange }) => {
    const { productId, quantity, status } = product;

    const detailedProduct = productData.find((prod) => prod.id === productId);

    const handleStatusChange = (newStatus) => {
        onProductStatusChange(orderId, productId, newStatus);
    };

    return (
        <li>
            <p>Product ID: {productId}</p>
            <p>Product Title: {detailedProduct.title}</p>
            <p>Quantity: {quantity}</p>
            <p>Status: {status}</p>
            <button onClick={() => handleStatusChange('Shipped')}>Mark Shipped</button>
            <button onClick={() => handleStatusChange('Canceled')}>Mark Canceled</button>
        </li>
    );
};

export default Product;
