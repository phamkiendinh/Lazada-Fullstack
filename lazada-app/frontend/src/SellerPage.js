import Navigation from "./pages/seller/Navigation";
import ProductPage from "./pages/seller/ProductPage";
import OrderPage from "./pages/seller/OrderPage";
import StatsPage from "./pages/seller/StatsPage";

function SellerPage() {
    return (
        <div>
            <Navigation></Navigation>
            <ProductPage></ProductPage>
            <OrderPage></OrderPage>
            <StatsPage></StatsPage>
        </div>
    );
}

export default SellerPage;