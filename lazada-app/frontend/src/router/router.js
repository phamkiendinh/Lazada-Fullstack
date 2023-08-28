import { createBrowserRouter } from "react-router-dom";

// 404 Pages
import Error from "../components/Error/Error";

//Seller and Admin
import Admin from "../pages/Admin";
import SellerApproval from "../components/AdminSellerApproval/SellerApproval";

//Loader 
import { loadAdmin } from "../pages/Admin";
import { loadAllSubCategory } from "../components/AdminCategory/SubCategory";
import { loadSeller } from "../components/AdminSellerApproval/SellerApproval";
import { loadAllTopCategory } from "../components/AdminCategory/TopCategory";
import { loadTopCategory } from "../components/AdminCategory/UpdateTopCategory";
//Component
import TopCategory from "../components/AdminCategory/TopCategory";
import CreateTopCategory from "../components/AdminCategory/CreateTopCategory";
import SubCategory from "../components/AdminCategory/SubCategory";
import CreateSubCategory, { loadTopCategoryField } from "../components/AdminCategory/CreateSubCategory";

//Action Function
import { saveTopCategory } from "../components/AdminCategory/CreateTopCategory";
import { saveSubCategory } from "../components/AdminCategory/CreateSubCategory";
import UpdateTopCategory, { updateTopCategory } from "../components/AdminCategory/UpdateTopCategory";
import UpdateSubCategory, {loadSubCategory, updateSubCategory} from "../components/AdminCategory/UpdateSubCategory";
export const routes = createBrowserRouter([
    {
        path : '/admin',
        element : <Admin />,
        loader : loadAdmin,
        error : <Error />
    },
    {
        path : '/admin/category',
        element : <TopCategory />,
        loader : loadAllTopCategory,
        error : <Error />
    },
    {
        path : '/admin/seller',
        element : <SellerApproval />,
        loader : loadSeller,
        error : <Error />
    },
    {
        path : '/admin/category/create',
        element : <CreateTopCategory />,
        action : saveTopCategory,
        error : <Error />
    },
    {
        path : '/admin/category/:categoryName/update',
        element : <UpdateTopCategory />,
        action : updateTopCategory,
        loader : loadTopCategory,
        error : <Error />
    },
    {
        path : '/admin/category/:categoryName',
        element : <SubCategory />,
        loader : loadAllSubCategory,
        error  : <Error />
    },
    {
        path : '/admin/category/:categoryName/create',
        element : <CreateSubCategory />,
        action : saveSubCategory,
        loader : loadTopCategoryField,
        error : <Error />
    },
    {
        path : '/admin/category/:categoryName/:subCategoryName/update',
        element : <UpdateSubCategory />,
        action: updateSubCategory,
        loader: loadSubCategory,
        error : <Error />
    }
]);
