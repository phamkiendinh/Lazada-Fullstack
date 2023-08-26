import HomePage from './../pages/HomePage/index'
import OrderPage from './../pages/OrderPage/OrderPage'
import MyOrder from './../pages/MyOrder/MyOrder'
import SignUpPage from './../pages/SignUpPage/index'
import SignInPage from './../pages/SingInPage/index'
import NotFoundPage from './../pages/NotFoundPage/NotFoundPage'
import ProductDetailPage from './../pages/ProductDetail/index'
import TypeProductPage from './../pages/TypeProduct/TypeProductPage';
import OrderManagement from './../pages/OrderManagement/index';


export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/order',
    page: OrderPage,
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
    path: '/track-order',
    page: OrderManagement,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
