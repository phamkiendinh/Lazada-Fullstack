
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useEffect and useState

function SubCategory() {
  const navigate = useNavigate();
  const params = useParams();
  const topCategory = params.categoryName;
  const [subCategoryData, setSubCategoryData] = useState([]); // Use state to store sub-category data

  useEffect(() => {
    // Fetch sub-category data when the component mounts
    async function fetchSubCategoryData() {
      try {
        const response = await fetch(`http://localhost:3001/admin/category/${topCategory}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubCategoryData(data); // Update state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }

    fetchSubCategoryData();
  }, [topCategory]); // Run the effect when topCategory changes

  if (!subCategoryData || subCategoryData.length === 0) {
    return (
      <div>
        <div className='row'>
          <div className='col-2 left-panel mt-5'>
            <button className="btn btn-primary w-100 m-1" onClick={() => navigate(`/admin/category/${topCategory}`)}>
              Go Back
            </button>
          </div>
          <div className='col-8 d-inline-block mt-5'>
            <div className='d-flex justify-content-center mt-5'>
              <h1 className="text text-white fw-bold border border-3 p-5 bg-primary border-black">Add Your First Sub-Category</h1>
            </div>
            <div id='category-crud' className='container d-flex justify-content-center'>
              <button className='btn btn-success'>
                <Link to="create" className='text-white' state={{ history: `${window.location.href}` }}>
                  Create New Sub-Category
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async function updateSubCategory(category) {
    navigate(`/admin/category/${topCategory}/${category}/update`);
  }

  async function deleteSubCategory(category) {
    try {
      await fetch(`http://localhost:3001/admin/category/${topCategory}/${category}/delete`, {
        method: 'DELETE'
      });

      // You might want to handle successful deletion here, like showing a message.

      // After deletion, you can refresh the data.
      const updatedData = subCategoryData.filter(item => item.name !== category);
      setSubCategoryData(updatedData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className='row'>
        <div className='col-2 left-panel mt-5'>
          <button className="btn btn-primary w-100 m-1" onClick={() => navigate(`/admin/category`)}>
            Go Back
          </button>
        </div>
        <div className='col-8 d-inline-block mt-5'>
          <div id='category-crud' className='container d-flex justify-content-center'>
            <button className='btn btn-success'>
              <Link to="create" className='text-white' state={{ history: `${window.location.href}` }}>
                Create New Sub-Category
              </Link>
            </button>
          </div>
          <div className='d-block justify-content-center'>
            {subCategoryData.map(category => {
              const key = category.name;
              return (
                <div className='d-flex container-fluid' key={key}>
                  <div className="container-fluid border border-2 border-primary w-100 mt-2 d-flex">
                    <h3>
                      <span className='text-danger'>
                        {key.charAt(0).toUpperCase()}{key.slice(1)}
                      </span>
                      <br />
                    </h3>
                  </div>
                  <div className='d-flex w-25'>
                    <button className='btn btn-primary mx-1 mt-2'>
                      <Link to={`${key}/detail`} className='text text-white' state={category}>Details</Link>
                    </button>
                    <button className='btn btn-primary mx-1 mt-2' onClick={() => updateSubCategory(key)}>Update</button>
                    <button className='btn btn-danger mx-1 mt-2' onClick={() => deleteSubCategory(key)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;


