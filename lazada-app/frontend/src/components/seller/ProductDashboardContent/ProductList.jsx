import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';

const ProductList = ({ products, onDelete, onEdit, onSave }) => {
    const [editingProduct, setEditingProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchMinPrice, setSearchMinPrice] = useState('');
    const [searchMaxPrice, setSearchMaxPrice] = useState('');
    const productsPerPage = 5;

    const handleEditClick = (productId) => {
        setEditingProduct(productId);
    };

    const handleCancelEdit = () => {
        setEditingProduct(null);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.date.includes(searchDate) &&
        (searchMinPrice === '' || product.price >= parseFloat(searchMinPrice)) &&
        (searchMaxPrice === '' || product.price <= parseFloat(searchMaxPrice))
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationControls = [];
    for (let page = 1; page <= totalPages; page++) {
        paginationControls.push(
            <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "active" : ""}
            >
                {page}
            </button>
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search by product name"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <input
                type="date"
                placeholder="Search by date (YYYY-MM-DD)"
                value={searchDate}
                onChange={e => setSearchDate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Search by minimum price"
                value={searchMinPrice}
                onChange={e => setSearchMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Search by maximum price"
                value={searchMaxPrice}
                onChange={e => setSearchMaxPrice(e.target.value)}
            />
            {onSave && (
                <div>
                    <h3>Add New Product</h3>
                    <ProductForm
                        product={{
                            title: '',
                            price: 0,
                            description: '',
                            dimensions: { length: 0, width: 0, height: 0 },
                        }}
                        onSave={onSave}
                        onCancel={handleCancelEdit}
                        onEdit={false}
                    />
                </div>
            )}
            <ul className='form-control' >
                {currentProducts.map(product => (
                    <li className='form-control' key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {typeof product.category === 'object' ? product.category.name : product.category.name}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Date: {product.date}</p>
                        {product.dimensions && (
                            <p>
                                Dimensions: {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height}
                            </p>
                        )}
                        {editingProduct === product.id ? (
                            <div>
                                <ProductForm
                                    product={product}
                                    onSave={(updatedFields) => {
                                        onEdit(product.id, updatedFields);
                                        setEditingProduct(null);
                                    }}
                                    onCancel={handleCancelEdit}
                                    onEdit={editingProduct === product.id}
                                />
                            </div>
                        ) : (
                            <div>
                                <button onClick={() => onDelete(product.id)}>Delete</button>
                                <button onClick={() => handleEditClick(product.id)}>Edit</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {paginationControls}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentProducts.length < productsPerPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                }),
            ]).isRequired,
            dimensions: PropTypes.shape({
                length: PropTypes.number.isRequired,
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired,
            }),
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ProductList;
