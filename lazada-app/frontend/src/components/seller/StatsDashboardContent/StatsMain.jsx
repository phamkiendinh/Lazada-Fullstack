import OrderStats from './OrderStats';
import ProductStats from './ProductStats';
import ordersData from '../../../data/seller/order.json';
import productsData from '../../../data/seller/product.json';

const StatsMain = () => {
  return (
    <div>
      <OrderStats ordersData={ordersData} productsData={productsData} />
      <ProductStats productsData={productsData} />
    </div>
  );
};

export default StatsMain;