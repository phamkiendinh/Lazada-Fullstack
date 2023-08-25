import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import { loadAdmin } from "../pages/Admin";
import { loadSubCategory } from "../components/Category/SubCategory";
import SellerApproval from "../components/SellerApproval/SellerApproval";
import { loadSeller } from "../components/SellerApproval/SellerApproval";
import TopCategory from "../components/Category/TopCategory";
import { loadTopCategory } from "../components/Category/TopCategory";
import CreateTopCategory from "../components/Category/CreateTopCategory";
import SubCategory from "../components/Category/SubCategory";
import CreateSubCategory from "../components/Category/CreateSubCategory";
export const routes = createBrowserRouter([
    {
        path: '/admin',
        element: <Admin />,
        loader: loadAdmin
    },
    {
        path: '/admin/category',
        element: <TopCategory />,
        loader: loadTopCategory,
    },
    {
        path: 'seller',
        element: <SellerApproval />,
        loader: loadSeller
    },
    {
        path: '/admin/category/create',
        element: <CreateTopCategory />,
    },
    {
        path: '/admin/category/:categoryName',
        element: <SubCategory />,
        loader: loadSubCategory,
    },
    {
        path: '/admin/category/:categoryName/create',
        element: <CreateSubCategory />
    }
]);
