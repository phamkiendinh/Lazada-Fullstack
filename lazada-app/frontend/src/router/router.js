import { createBrowserRouter } from 'react-router-dom'

// 404 Pages
import Error from '../components/Error/Error'

// Seller and Admin
import Admin from '../pages/Admin'
import SellerApproval, {
  loadSeller
} from '../components/AdminSellerApproval/SellerApproval'

// Loader
import { loadAdmin } from '../pages/Admin'
import { loadAllSubCategory } from '../components/AdminCategory/SubCategory'
import { loadAllTopCategory } from '../components/AdminCategory/TopCategory'
import { loadTopCategory } from '../components/AdminCategory/UpdateTopCategory'
import SellerPage from '../SellerPage'
// Component
import TopCategory from '../components/AdminCategory/TopCategory'
import TopCategoryDetail from '../components/AdminCategory/TopCategoryDetail'
import CreateTopCategory from '../components/AdminCategory/CreateTopCategory'
import SubCategory from '../components/AdminCategory/SubCategory'
import SubCategoryDetail from '../components/AdminCategory/SubCategoryDetail'
import CreateSubCategory, {
  loadTopCategoryField
} from '../components/AdminCategory/CreateSubCategory'

// Action Function
import UpdateTopCategory from '../components/AdminCategory/UpdateTopCategory'
import UpdateSubCategory, {
  loadSubCategory,
  updateSubCategory
} from '../components/AdminCategory/UpdateSubCategory'
import HomePage from './../pages/HomePage/index'
import NotFoundPage from './../pages/NotFoundPage/NotFoundPage'

// export const routes = createBrowserRouter([
//   {
//     path: '/admin',
//     element: <Admin />,
//     loader: loadAdmin,
//     error: <NotFoundPage />
//   },
//   // Category Management
//   {
//     path: '/admin/category',
//     element: <TopCategory />,
//     loader: loadAllTopCategory,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/create',
//     element: <CreateTopCategory />,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName/update',
//     element: <UpdateTopCategory />,
//     loader: loadTopCategory,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName/detail',
//     element: <TopCategoryDetail />,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName',
//     element: <SubCategory />,
//     loader: loadAllSubCategory,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName/create',
//     element: <CreateSubCategory />,
//     loader: loadTopCategoryField,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName/:subCategoryName/update',
//     element: <UpdateSubCategory />,
//     loader: loadSubCategory,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/category/:categoryName/:subCategoryName/detail',
//     element: <SubCategoryDetail />,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/admin/seller',
//     element: <SellerApproval />,
//     loader: loadSeller,
//     error: <NotFoundPage />
//   },
//   {
//     path: '/seller',
//     element: <SellerPage />
//   }
// ])
