import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import productData from '../../../data/seller/product.json';

const ProductApp = () => {
    const [products, setProducts] = useState([]);
    const [nextProductId, setNextProductId] = useState(1);

    useEffect(() => {
        setProducts(productData);
    }, []);

    const handleDelete = productId => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    const handleEdit = (productId, updatedFields) => {
        const updatedProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product, ...updatedFields };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const handleAddProduct = (newProduct) => {
        const updatedProducts = [...products, { ...newProduct, id: nextProductId }];
        setProducts(updatedProducts);
        setNextProductId(nextProductId + 1);
    };

    return (
        <div>
            <ProductList
                products={products}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onSave={handleAddProduct}
                onCancel={() => {}}
            />
        </div>
    );
};

export default ProductApp;
