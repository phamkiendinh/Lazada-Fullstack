import {Link, useLoaderData} from 'react-router-dom';
import LeftPanel from '../Panel/LeftPanel/LeftPanel';
function TopCategory() {
    const categories = useLoaderData();
    var result = categories.map(category => {
        const entries = Object.entries(category);
        return (
            <div className='d-flex container-fluid'>
                <Link to={`${category['name']}`} className='w-75'>
                    <div className="container-fluid border border-2 border-primary w-100 mt-2">
                        {
                            <h3> 
                                {entries.map(entry => {
                                    return (
                                        <>
                                            <span className='text-danger'>
                                                {entry[0].charAt(0).toUpperCase()}{entry[0].slice(1)}
                                            </span>
                                            <span className='text-dark'>
                                                : {entry[1]}
                                            </span>
                                            <br/>
                                        </>
                                    );
                                })}
                            </h3>
                        }
                    </div>
                </Link>
                <div className='d-flex w-25'>
                    <button className='btn btn-primary mx-1 mt-2' onClick={() => updateTopCategory(0)}>Update</button>
                    <button className='btn btn-danger mx-1 mt-2' onClick={() => deleteTopCategory(0)}>Delete</button>
                </div>
            </div>
            );
        })
    return (
        <div>
            <div className='row'>
                <div className='col-2 left-panel bg-dark mt-5'>
                    <LeftPanel />
                </div>
                <div className='col-8 d-inline-block mt-5'>
                    <div id='category-crud' className='container d-flex justify-content-center'>
                        <button className='btn btn-success'>
                            <Link to="create" className='text-white'>
                                Create New Category
                            </Link>
                        </button>
                    </div>
                    <div className='d-block justify-content-center'>
                        {result}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TopCategory;


export async function loadTopCategory() {
    var data = await
    fetch('http://localhost:3001/admin/category')
    .then(res => res.json())
    .then(data => {
        return data;
    })
    .catch(e => {
        console.log(e);
        return null;
    })
    return data;
}

function updateTopCategory(category) {
    console.log(category);
}


function deleteTopCategory(category) {
    console.log(category);

}