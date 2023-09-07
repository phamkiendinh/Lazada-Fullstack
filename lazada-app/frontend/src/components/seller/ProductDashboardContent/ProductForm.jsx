import { useState } from 'react';
import categoryData from '../../../data/seller/category.json';

const ProductForm = ({ product, onSave, onCancel, onEdit }) => {
    const defaultDimensions = {
        length: 0,
        width: 0,
        height: 0,
    };

    const initialCategory = categoryData.find(category => category.name === product.category);

    const [updatedFields, setUpdatedFields] = useState({
        ...product,
        dimensions: product.dimensions || defaultDimensions,
        date: product.date || "",
        category: initialCategory ? initialCategory.id : "", 
    });

    const handleFieldChange = (fieldName, value) => {
        setUpdatedFields(prevFields => ({
            ...prevFields,
            [fieldName]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(updatedFields);
    };

    return (
        <div>
            <form className='form-control' onSubmit={handleSubmit}>
                <label className='form-control'  htmlFor="title">Title:</label>
                <input className='form-control'  type="text" id="title" name="title" value={updatedFields.title} onChange={(e) => handleFieldChange("title", e.target.value)} />

                <label className='form-control'  htmlFor="price">Price:</label>
                <input className='form-control'  type="number" id="price" name="price" step="0.01" value={updatedFields.price} onChange={(e) => handleFieldChange("price", parseFloat(e.target.value))} />

                <label className='form-control'  htmlFor="description">Description:</label>
                <input className='form-control'  type="text" id="description" name="description" value={updatedFields.description} onChange={(e) => handleFieldChange("description", e.target.value)} />

                <label className='form-control'  htmlFor="quantity">Quantity:</label>
                <input className='form-control'  type="number" id="quantity" name="quantity" step="1" value={updatedFields.quantity} onChange={e => handleFieldChange("quantity", e.target.value)} />

                <label className='form-control'  htmlFor="date">Date:</label>
                <input className='form-control'  type="date" id="date" name="date" value={updatedFields.date} onChange={e => handleFieldChange("date", e.target.value)} />

                <label className='form-control'  htmlFor="length">Length:</label>
                <input className='form-control'  type="number" name="length" step="1" value={updatedFields.dimensions.length} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, length: parseFloat(e.target.value) })} />

                <label className='form-control'  htmlFor="width">Width:</label>
                <input className='form-control'  type="number" name="width" step="1" value={updatedFields.dimensions.width} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, width: parseFloat(e.target.value) })} />

                <label className='form-control'  htmlFor="height">Height:</label>
                <input className='form-control'  type="number" name="height" step="1" value={updatedFields.dimensions.height} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, height: parseFloat(e.target.value) })} />

                <label className='form-control'  htmlFor="category">Category:</label>
                <select
                    className='form-control'
                    name="category"
                    value={updatedFields.category}
                    onChange={(e) => handleFieldChange("category", e.target.value)}
                >
                    <option value="" className='form-control'>Select a category</option>
                    {categoryData.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button className='form-control'  type="submit">{onEdit ? "Save Changes" : "Add Product"}</button>
                {onEdit && <button className='form-control'  type="button" onClick={onCancel}>Cancel</button>}
            </form>
        </div>
    );
};

export default ProductForm;
