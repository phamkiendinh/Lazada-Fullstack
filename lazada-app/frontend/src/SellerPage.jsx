import Navigation from './pages/seller/Navigation'
import ProductPage from './pages/seller/ProductPage'
import OrderPage from './pages/seller/OrderPage'
import StatsPage from './pages/seller/StatsPage'
import React from 'react'

const SellerPage = () => {
  return (
    <div>
      <Navigation />
      <ProductPage />
      <OrderPage />
      <StatsPage />
    </div>
  )
}

export default SellerPage
