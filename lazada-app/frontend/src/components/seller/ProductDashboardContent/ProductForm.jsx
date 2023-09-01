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
        category: initialCategory || "",
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={updatedFields.title} onChange={(e) => handleFieldChange("title", e.target.value)} />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" value={updatedFields.price} onChange={(e) => handleFieldChange("price", parseFloat(e.target.value))} />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={updatedFields.description} onChange={(e) => handleFieldChange("description", e.target.value)} />

                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" step="1" value={updatedFields.quantity} onChange={e => handleFieldChange("quantity", e.target.value)} />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={updatedFields.date} onChange={e => handleFieldChange("date", e.target.value)} />

                <label htmlFor="length">Length:</label>
                <input type="number" name="length" step="1" value={updatedFields.dimensions.length} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, length: parseFloat(e.target.value) })} />

                <label htmlFor="width">Width:</label>
                <input type="number" name="width" step="1" value={updatedFields.dimensions.width} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, width: parseFloat(e.target.value) })} />

                <label htmlFor="height">Height:</label>
                <input type="number" name="height" step="1" value={updatedFields.dimensions.height} onChange={(e) => handleFieldChange("dimensions", { ...updatedFields.dimensions, height: parseFloat(e.target.value) })} />

                <label htmlFor="category">Category:</label>
                <select name="category" value={updatedFields.category.id} onChange={(e) => handleFieldChange("category", { id: e.target.value, name: categoryData.find(category => category.id === parseInt(e.target.value, 10)).name })}>
                    <option value="">Select a category</option>
                    {categoryData.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button type="submit">{onEdit ? "Save Changes" : "Add Product"}</button>
                {onEdit && <button type="button" onClick={onCancel}>Cancel</button>}
            </form>
        </div>
    );
};

export default ProductForm;
