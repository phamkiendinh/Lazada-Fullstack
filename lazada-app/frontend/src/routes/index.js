import HomePage from './../pages/HomePage/index'
import MyOrder from './../pages/MyOrder/MyOrder'
import SignUpPage from './../pages/SignUpPage/index'
import SignInPage from './../pages/SingInPage/index'
import NotFoundPage from './../pages/NotFoundPage/NotFoundPage'
import ProductDetailPage from './../pages/ProductDetail/index'
import TypeProductPage from './../pages/TypeProduct/TypeProductPage'
import OrderManagement from './../pages/OrderManagement/index'
import Dashboard from './../pages/DashboardPage/Dashboard'
import PrivateRoute from './PrivateRoute';
import SearchingProduct from './../components/CardTypeProduct/SearchingProducts';

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/my-order',
    page: MyOrder,
    isShowHeader: true
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false
  },
  {
    path: '/product-detail/:id',
    page: ProductDetailPage,
    isShowHeader: true
  },
  {
    path: '/type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '/searching-products/:query',
    page: SearchingProduct,
    isShowHeader: true
  },
  {
    path: '/track-order',
    page: OrderManagement,
    isShowHeader: true
  },
  {
    path: '/dashboard/user',
    page: PrivateRoute, // Use PrivateRoute as middleware
    nestedRoutes: [
      {
        path: '',
        page: Dashboard
      }
    ],
    isShowHeader: true
  },
  {
    path: '/dashboard/user/orders',
    page: OrderManagement,
    isShowHeader: true
  },

  {
    path: '*',
    page: NotFoundPage
  }
]
