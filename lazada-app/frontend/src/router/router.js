import { createBrowserRouter } from "react-router-dom";

//Seller and Admin
import Admin from "../pages/Admin";
import SellerApproval from "../components/SellerApproval/SellerApproval";

//Loader 
import { loadAdmin } from "../pages/Admin";
import { loadAllSubCategory } from "../components/Category/SubCategory";
import { loadSeller } from "../components/SellerApproval/SellerApproval";
import { loadAllTopCategory } from "../components/Category/TopCategory";
import { loadTopCategory } from "../components/Category/UpdateTopCategory";
//Component
import TopCategory from "../components/Category/TopCategory";
import CreateTopCategory from "../components/Category/CreateTopCategory";
import SubCategory from "../components/Category/SubCategory";
import CreateSubCategory, { loadTopCategoryField } from "../components/Category/CreateSubCategory";

//Action Function
import { saveTopCategory } from "../components/Category/CreateTopCategory";
import { saveSubCategory } from "../components/Category/CreateSubCategory";
import UpdateTopCategory, { updateTopCategory } from "../components/Category/UpdateTopCategory";
import UpdateSubCategory, {loadSubCategory, updateSubCategory} from "../components/Category/UpdateSubCategory";
export const routes = createBrowserRouter([
    {
        path: '/admin',
        element: <Admin />,
        loader: loadAdmin
    },
    {
        path: '/admin/category',
        element: <TopCategory />,
        loader: loadAllTopCategory,
    },
    {
        path: 'seller',
        element: <SellerApproval />,
        loader: loadSeller
    },
    {
        path: '/admin/category/create',
        element: <CreateTopCategory />,
        action: saveTopCategory
    },
    {
        path: '/admin/category/:categoryName/update',
        element: <UpdateTopCategory />,
        action: updateTopCategory,
        loader: loadTopCategory
    },
    {
        path: '/admin/category/:categoryName',
        element: <SubCategory />,
        loader: loadAllSubCategory
    },
    {
        path: '/admin/category/:categoryName/create',
        element: <CreateSubCategory />,
        action: saveSubCategory,
        loader: loadTopCategoryField
    },
    {
        path: '/admin/category/:categoryName/:subCategoryName/update',
        element: <UpdateSubCategory />,
        action: updateSubCategory,
        loader: loadSubCategory
    }
]);
