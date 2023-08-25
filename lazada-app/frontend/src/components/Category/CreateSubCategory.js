import { Form, redirect, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function CreateSubCategory () {
    var initialState = [
        {
            name: 'Name',
            type: 'text',
            required: true
        }
    ];
    const history = useLocation().state.history;
    console.log(history);
    const navigate = useNavigate();
    const [defaultCategory, setDefaultCategory] = useState(initialState);
    const [category, setCategory] = useState(initialState);
    const [input, setInput] = useState('');
    const [require, setRequire] = useState("required");
    const [type, setType] = useState('text');
    const [fieldFormVisibility, setFieldFormVisibility] = useState('none');

    async function saveSubCategory(event) {
        const data = await Object.fromEntries(new FormData(event.currentTarget));
        console.log(JSON.stringify(data));
        fetch('http://localhost:3001/admin/category/:caregoryName/create', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e);
            return null;
        })
        window.location.replace(`${history}`);
    }

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
        let newItem = [
            ...category,
            item
        ]
        console.log(newItem);
        setCategory(newItem);
        closeFieldForm();
    }

    function resetForm() {
        setCategory(defaultCategory);
        closeFieldForm();
    }


    return (
        <div className="container mt-5 w-75">
            <Form onSubmit= {(e) => saveSubCategory(e)}>
                <fieldset>
                    <legend className="fw-bold">Create Sub-Category</legend>
                    {
                        category.map(item => {
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <div className="mb-3" key={item.name}>
                                            <label htmlFor={item.name} className="form-label">{item.name}</label>
                                            <input type="text" className="form-control" name={item.name} required/>
                                        </div>
                                    );
                                case 'number':
                                    return (
                                        <div className="mb-3" key={item.name}>
                                            <label htmlFor={item.name} className="form-label">{item.name}</label>
                                            <input type="number" className="form-control" name={item.name} required/>
                                        </div>
                                    );
                                default:
                                    return (
                                        <div className="mb-3" key={item.name}>
                                            <label htmlFor={item.name} className="form-label">{item.name}</label>
                                            <input type="text" className="form-control" name={item.name} required/>
                                        </div>
                                    );
                            }
                        })
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
    );
}



export default CreateSubCategory;