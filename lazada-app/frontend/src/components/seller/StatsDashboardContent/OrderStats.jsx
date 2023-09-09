const OrderStats = ({ ordersData, productsData }) => {
  const totalSales = ordersData.length;
  const totalUnitsSold = ordersData.reduce((acc, order) => {
    return acc + order.products.reduce((sum, product) => sum + product.quantity, 0);
  }, 0);
  const totalRevenue = ordersData.reduce((acc, order) => {
    return acc + order.products.reduce((sum, product) => {
      const productData = productsData.find(p => p.id === product.productId);
      return sum + (productData ? productData.price * product.quantity : 0);
    }, 0);
  }, 0);

  return (
    <div>
      <h2>Order Statistics</h2>
      <p>Total Sales: {totalSales}</p>
      <p>Total Units Sold: {totalUnitsSold}</p>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
    </div>
  );
};

export default OrderStats;
