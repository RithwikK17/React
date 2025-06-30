import React from 'react'

function NotFound() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-danger">
                    Requested path not found
                </h3>
                <h5 className="text-danger display-5">
                    404 - Error
                </h5>
            </div>
        </div>
    </div>
  )
}

export default NotFound
