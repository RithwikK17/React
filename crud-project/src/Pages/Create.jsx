import React from 'react'

function Create() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-success">Create User</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form method='post' autoComplete='off'>
                <div className="form-group mt-2">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Your Mobile</label>
                  <input type="number" name="mobile" id="mobile" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" name="email" id="email" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="address">Your Address</label>
                  <textarea name="address" id="address" className='form-control' required rows={6}></textarea>
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Create User" className='btn btn-success' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
