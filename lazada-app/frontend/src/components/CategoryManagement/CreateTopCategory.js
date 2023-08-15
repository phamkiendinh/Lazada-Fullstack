import { Form } from "react-router-dom";
import { useState } from "react";

function CreateTopCategory () {
    var initialState = [
        {
            Name: '',
            type: 'text',
            required: true
        },
        {
            Category: '',
            type: 'text',
            required: true
        },
        {
            Price: '',
            type: 'number',
            required: true
        }

    ];
    const [category, setCategory] = useState(initialState);
    const [newField, setNewField] = useState(false);
    const [input, setInput] = useState('');
    const [require, setRequire] = useState("required");
    const [type, setType] = useState('text');
    return (
        <div className="container mt-5 w-75">
            <Form method="POST" className="">
                <fieldset>
                    <legend className="fw-bold">Create Top-Category</legend>
                    {
                        category.map(item => {
                            var object = Object.entries(item);
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <div className="mb-3" key={object[0][0]}>
                                            <label htmlFor={object[0][0]} className="form-label">{object[0][0]}</label>
                                            <input type="text" className="form-control" name={object[0][0]}/>
                                        </div>
                                    );
                                case 'number':
                                    return (
                                        <div className="mb-3" key={object[0][0]}>
                                            <label htmlFor={object[0][0]} className="form-label">{object[0][0]}</label>
                                            <input type="number" className="form-control" name={object[0][0]}/>
                                        </div>
                                    );
                                default:
                                    break;
                            }
                        })
                    }
                    <div className="mb-3 d-flex justify-content-center align-item-center">
                        <button type="button" className="btn btn-success m-3" onClick={(e) => addFormField(e)}>Add Field</button>
                        <button type="submit" className="btn btn-primary m-3">Submit</button>
                        <button type="reset" className="btn btn-danger m-3">Reset</button>
                    </div>
                </fieldset>
            </Form>

            <Form>
                <fieldset>
                    <legend className="fw-bold">Add Field</legend>
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label fw-bold">Input</label>
                        <input type="text" className="form-control" name="input" onChange={(e) => logInput(e,setInput, input)}/>
                    </div>

                    <div className="mb-3">
                        <h6 className="fw-bold">Required</h6>
                        <input type="radio" id="required" name="required" value="required" checked={require === "required"} onChange={(e) => updateRequireInput(e,setRequire)}/>
                        <label htmlFor="required">Required</label>
                        <br/>
                        <input type="radio" id="not-required" name="required" value="not-required" checked={require === "not-required"} onChange={(e) => updateRequireInput(e,setRequire)}/>
                        <label htmlFor="required">Not Required</label>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold">Type</h6>
                        <input type="radio" id="required" name="type" value="text" checked={type === "text"} onChange={(e) => updateTypeInput(e,setType)}/>
                        <label htmlFor="type">Text</label>
                        <br/>
                        <input type="radio" id="not-required" name="type" value="number" checked={type === "number"} onChange={(e) => updateTypeInput(e,setType)}/>
                        <label htmlFor="type">Number</label>
                    </div>
                    <button className="btn btn-primary m-2" onClick={addField}>Add</button>
                    <button className="btn btn-danger m-2" onClick={closeField}>Close</button>
                </fieldset>
            </Form>
        </div>
    );
}

function updateTypeInput(event, setType) {
    setType(event.target.value);
}

function updateRequireInput(event, setRequire) {
    setRequire(event.target.value);
}

function logInput(e, setInput, input) {
    setInput(e.target.value);
}


function addFormField(e) {
    console.log(e);
    return (
        <Form>
            <div className="mb-3 d-flex justify-content-center align-item-center">
                <button type="button" className="btn btn-success m-3" onClick={(e) => addFormField(e)}>Add Field</button>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
                <button type="reset" className="btn btn-danger m-3">Reset</button>
            </div>
        </Form>
    );
}

function addField() {

}

function closeField() {

}

export function saveTopCategory() {
    console.log("Called");
    return null;
}

export default CreateTopCategory;
