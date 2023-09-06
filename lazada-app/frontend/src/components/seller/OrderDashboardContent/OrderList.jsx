import Order from './Order';

const OrderList = ({ orders, onProductStatusChange }) => {
  return (
    <div>
      {orders.map((order) => (
        <Order key={order.orderId} order={order} onProductStatusChange={onProductStatusChange} />
      ))}
    </div>
  );
};

export default OrderList;
