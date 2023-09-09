import React, { useState } from 'react'
import UserMenu from '../../components/AdminLayout/UserMenu'


const OrderManagement = () => {
  return (
      <div className="container-flui p-3 m-3" style={{ height: "80vh" }}>
          <div className="row">
            <div className="col-md-3">
                <UserMenu></UserMenu>
            </div>
            <div className="col-md-9">
                <h3> Track Orders</h3>
            </div>
          </div>
      </div>

  )
}

export default OrderManagement
