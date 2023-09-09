import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter new category'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
