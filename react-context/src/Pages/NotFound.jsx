import React from 'react'

function NotFound() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-danger">
                Requested Path Not-Found
            </h3>
            <h className="text-danger display-5">
                404 - !Error!
            </h>
        </div>
      </div>
    </div>
  )
}

export default NotFound
