import { Link } from "react-router-dom";
function LeftPanel() {
    return (
        <>
            <button className="btn btn-primary w-100 m-1">
                <Link to="category" className="text text-white">Category Management</Link>
            </button>
            <button className="btn btn-primary w-100 m-1">
                <Link to="seller" className="text text-white">Seller Management</Link>
            </button>
        </>
    );
}


export default LeftPanel;