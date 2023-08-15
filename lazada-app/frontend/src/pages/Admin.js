import CategoryManagement from '../components/CategoryManagement/CategoryManagement';
import SellerApproval from '../components/SellerApproval/SellerApproval';
import LeftPanel from '../components/Panel/LeftPanel/LeftPanel';
import { Outlet } from 'react-router-dom';

function Admin() {
    return (
        <div className='row'>
            <div className='col-2 left-panel bg-dark mt-5'>
                <LeftPanel />
            </div>
            <Outlet />
        </div>
    );
}

export function loadAdmin() {
    return null;
}


export default Admin;