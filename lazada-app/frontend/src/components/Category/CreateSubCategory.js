import { Form, useLocation, useNavigate, redirect, useLoaderData} from "react-router-dom";
import { useRef, useState } from "react";

function CreateSubCategory () {
    const data = useLoaderData();
    delete data['sub_category'];
    delete data['name'];
    
    // console.log(data);
    var initialState = [
        {
            name: 'name',
            type: 'text',
            required: "required"
        }
    ];

    const navigate = useNavigate();
    const [defaultCategory, setDefaultCategory] = useState([data]);
    const [category, setCategory] = useState(initialState);
    const [input, setInput] = useState('');
    const [require, setRequire] = useState("required");
    const [type, setType] = useState('text');
    const [fieldFormVisibility, setFieldFormVisibility] = useState('none');
    function addFieldForm() {
        setFieldFormVisibility('block');
    }
    
    function updateTypeInput(event) {
        setType(event.target.value);
    }
    
    function updateRequireInput(event) {
        setRequire(event.target.value);
    }
    
    function logInput(e) {
        setInput(e.target.value);
    }
    
    
    function closeFieldForm() {
        setFieldFormVisibility('none');
    }
    
    
    function addField() {
        if (input === '') {
            window.alert('Input must not be blanked');
            return;
        }
        let item = {
            name: input,
            type: type,
            required: require
        };
        console.log(require);
        let newItem = [
            ...category,
            item
        ]
        console.log(newItem);
        setCategory(newItem);
        closeFieldForm();
    }

    function resetForm() {
        setCategory([]);
        closeFieldForm();
    }


    return (
        <div className="row">
            <div className='col-2 left-panel mt-5'>
                <button className="btn btn-primary w-100 m-1" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
            <div className="col-8 container mt-5 w-75">
                <Form method="POST">
                    <fieldset>
                        <legend className="fw-bold h1 mb-5">Create Sub-Category</legend>
                        <div className="d-flex container mt-5 justify-content-center">
                            <h2 className="text fw-bold">Top Category Fields <span className="text text-danger">*</span></h2>
                        </div>
                        {
                            defaultCategory.map(item => {
                                var entries = Object.entries(item);
                                var data = entries.map(data => {
                                    var key = data[0];
                                    var value = data[1];
                                    return (
                                        <div className="mb-3" key={key}>
                                            <label htmlFor={key} className="form-label">{key.charAt(0).toUpperCase()}{key.slice(1)}</label>
                                            <input type="text" className="form-control" name={key} defaultValue={value} required/>
                                        </div>
                                    );
                                })
                                return data;
                            })
                        }
                        <div className="d-flex container mt-5 justify-content-center">
                            <h2 className="text fw-bold">Sub Category Fields <span className="text text-danger">*</span></h2>
                        </div>
                        {
                            category.map(item => {
                                    switch (item.type) {
                                        case 'text':
                                            return (
                                                <div className="mb-3" key={item.name}>
                                                    <label htmlFor={item.name} className="form-label">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                                                    <input type="text" className="form-control" name={item.name} required={item.required === "required"}/>
                                                </div>
                                            );
                                        case 'number':
                                            return (
                                                <div className="mb-3" key={item.name}>
                                                    <label htmlFor={item.name} className="form-label">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                                                    <input type="number" className="form-control" name={item.name} required={item.required === "required"}/>
                                                </div>
                                        );
                                        default:
                                            return (
                                                <div className="mb-3" key={item.name}>
                                                    <label htmlFor={item.name} className="form-label">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                                                    <input type="text" className="form-control" name={item.name} required={item.required === "required"}/>
                                                </div>
                                            );
                                    }
                                }
                            )
                        }
                        <div className="mb-3 d-flex justify-content-center align-item-center">
                            <button type="submit" className="btn btn-primary m-3">Save</button>
                            <button type="button" className="btn btn-success m-3" onClick={() => {addFieldForm()}}>Add Field</button>
                            <button type="button" className="btn btn-danger m-3" onClick={() => {resetForm()}}>Reset</button>
                        </div>
                    </fieldset>
                </Form>

                <div id="addFieldForm" style={{display: fieldFormVisibility}}>
                    <legend className="fw-bold">Add Field</legend>
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label fw-bold">Input</label>
                        <input type="text" id="fieldInput" className="form-control" name="input" onChange={(e) => logInput(e,setInput, input)}/>
                    </div>

                    <div className="mb-3">
                        <h6 className="fw-bold">Required</h6>
                        <input type="radio" id="required" name="required" value="required" checked={require === "required"} onChange={(e) => updateRequireInput(e)}/>
                        <label htmlFor="required">Required</label>
                        <br/>
                        <input type="radio" id="not-required" name="required" value="not-required" checked={require === "not-required"} onChange={(e) => updateRequireInput(e)}/>
                        <label htmlFor="required">Not Required</label>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold">Type</h6>
                        <input type="radio" id="required" name="type" value="text" checked={type === "text"} onChange={(e) => updateTypeInput(e)}/>
                        <label htmlFor="type">Text</label>
                        <br/>
                        <input type="radio" id="not-required" name="type" value="number" checked={type === "number"} onChange={(e) => updateTypeInput(e)}/>
                        <label htmlFor="type">Number</label>
                    </div>
                    <button className="btn btn-primary m-2" onClick={() => addField()}>Add</button>
                    <button type="reset" className="btn btn-danger m-2" onClick={() => closeFieldForm()}>Close</button>
                </div>
            </div>
        </div>
    );
}

export async function saveSubCategory({request, params}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const category = params.categoryName;
    const json = {
        category: `${category}`,
        ...data
    };
    // console.log(data);
    // console.log(category);
    await fetch(`http://localhost:3001/admin/category/${category}/create`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
        return null;
    })
    return redirect(`/admin/category/${category}`);
    // return null;
}



export async function loadTopCategoryField({request, params}) {
    const param = params.categoryName;
    const data = await fetch(`http://localhost:3001/admin/category/${param}/update`)
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


export default CreateSubCategory;
