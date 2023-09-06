const ProductStats = ({ productsData }) => {
  const totalProducts = productsData.length;
  const productsByCategory = productsData.reduce((categoryCount, product) => {
    categoryCount[product.category.name] = (categoryCount[product.category.name] || 0) + 1;
    return categoryCount;
  }, {});

  return (
    <div>
      <h2>Product Statistics</h2>
      <p>Total Products: {totalProducts}</p>
      <h3>Products by Category:</h3>
      <ul>
        {Object.keys(productsByCategory).map(categoryName => (
          <li key={categoryName}>
            {categoryName}: {productsByCategory[categoryName]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductStats;
