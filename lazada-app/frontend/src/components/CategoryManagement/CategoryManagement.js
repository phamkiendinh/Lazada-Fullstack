import {useState} from 'react';
import TopCategories from "./TopCategories";
import { Link, Outlet } from 'react-router-dom';

function CategoryManagement() {
    const [topCategories, setTopCategories] = useState([
        {
            id: 1,
            name: "First Item",
            category: "Electronic"
        },
        {
            id: 2,
            name: "Second Item",
            category: "Vehicles"
        },
        {
            id: 3,
            name: "Third Item",
            category: "Biology"
        },
    ]);

    return (

        <div className='col-8 d-inline-block mt-5'>
                <div id='category-crud' className='container d-flex justify-content-center'>
                    <button className='btn btn-success'>
                        <Link to="category/create" className='text-white'>
                            Create New Category
                        </Link>
                    </button>
                </div>
                <div className='d-block justify-content-center'>
                    <TopCategories categories={{item: topCategories, function: setTopCategories}}/>
                </div>
        </div>
    );
}


export function loadCategory() {
    return null;
}

export default CategoryManagement;