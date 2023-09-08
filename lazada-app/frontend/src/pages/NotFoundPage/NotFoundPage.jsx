import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from './../../routes/index'

const NotFoundPage = () => {
  // Find the route that corresponds to the homepage
  const homepageRoute = routes.find(route => route.path === '/')

  return (
    <></>
  );

  // return (
  //   <div
  //     style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       height: '100vh'
  //     }}
  //   >
  //     <img
  //       src='https://lzd-img-global.slatic.net/g/tps/tfs/TB13Sz0saNj0u4jSZFyXXXgMVXa-600-300.png'
  //       alt=''
  //     />
  //     <div>
  //       <p className='text-center'>
  //         {' '}Trang bạn tìm không tồn tại. Vui lòng quay trở lại trang chủ.
  //       </p>
  //     </div>

  //     <div style={{ margin: '24px auto' }}>
  //       <NavLink
  //         to={homepageRoute.path}
  //         className='px-2 py-2 bg-danger rounded-2 text-white text-decoration-none shadow-sm'
  //       >
  //         Back To HomePage
  //       </NavLink>
  //     </div>
  //   </div>
  // )
}

export default NotFoundPage
