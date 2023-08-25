import { useLoaderData, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftPanel from "../Panel/LeftPanel/LeftPanel";


function SubCategory() {
    const data = useLoaderData();

    var result = data.map(category => {
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
                    <button className='btn btn-primary mx-1 mt-2'>Update</button>
                    <button className='btn btn-danger mx-1 mt-2'>Delete</button>
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
                            <Link to="create" className='text-white' state={{history: `${window.location.href}`}}>
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

export async function loadSubCategory() {
    const url = window.location.pathname;
    var index = url.lastIndexOf('/');
    console.log(url);
    console.log(index);
    var newString = url.slice(index + 1);
    console.log(newString);
    var params = 'Electronic'
    var data = await
    fetch(`http://localhost:3001/admin/category/${params}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({category : `${params}`})
    })
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

export default SubCategory;