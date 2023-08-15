import { Link } from "react-router-dom";
function SellerApproval() {
    return (
        <div className='col-8 d-inline-block mt-5'>
                <div id='category-crud' className='container d-flex justify-content-center'>
                    <button className='btn btn-success'>
                        <Link to="category/create" className='text-white'>
                            Create New Seller
                        </Link>
                    </button>
                </div>
        </div>
    );
}


export function loadSeller() {
    return null
}

export default SellerApproval;