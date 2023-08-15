import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import { loadAdmin } from "../pages/Admin";
import CategoryManagement from "../components/CategoryManagement/CategoryManagement";
import { loadCategory } from "../components/CategoryManagement/CategoryManagement";
import SellerApproval from "../components/SellerApproval/SellerApproval";
import { loadSeller } from "../components/SellerApproval/SellerApproval";
import CreateTopCategory from "../components/CategoryManagement/CreateTopCategory";
import { saveTopCategory } from "../components/CategoryManagement/CreateTopCategory";

export const routes = createBrowserRouter([
    {
        path: '/admin',
        element: <Admin />,
        loader: loadAdmin,
        children: [
            {
                path: 'category',
                element: <CategoryManagement />,
                loader: loadCategory,
            },
            {
                path: 'seller',
                element: <SellerApproval />,
                loader: loadSeller
            }
        ],
    },
    {
        path: '/admin/category/create',
        element: <CreateTopCategory />,
        action: saveTopCategory,
    },
    {

    }
]);
