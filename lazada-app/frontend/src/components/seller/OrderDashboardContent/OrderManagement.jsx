import { useState } from 'react';
import OrderList from './OrderList';
import orderData from '../../../data/seller/order.json';

const OrderManagement = () => {
    const [orders, setOrders] = useState(orderData);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    const handleProductStatusChange = (orderId, productId, newStatus) => {
        const updatedOrders = orders.map((order) => {
            if (order.orderId === orderId) {
                const updatedProducts = order.products.map((product) => {
                    if (product.productId === productId) {
                        return { ...product, status: newStatus };
                    }
                    return product;
                });
                return { ...order, products: updatedProducts };
            }
            return order;
        });
        setOrders(updatedOrders);
    };

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const totalPages = Math.ceil(orders.length / ordersPerPage);
    const paginationControls = [];
    for (let page = 1; page <= totalPages; page++) {
        paginationControls.push(
            <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "active" : ""}
            >
                {page}
            </button>
        );
    }

    return (
        <div>
            <OrderList
                orders={currentOrders}
                onProductStatusChange={handleProductStatusChange}
            />

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {paginationControls}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastOrder >= orders.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrderManagement;
