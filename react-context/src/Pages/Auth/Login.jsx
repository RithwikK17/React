import React from 'react'

function Login() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-dark">Login</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" method='post'>

                            <div className="form-group mt-2">
                                <label htmlFor="email" className='form-label'>Your Email</label>
                                <input type="email" name="email" id="email" className="form-control" required />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="password" className='form-label'>Your Password</label>
                                <input type="password" name="password" id="password" className="form-control" required />
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" value="Login User" className="btn btn-outline-success" />
                                <input type="reset" value="Clear" className="btn btn-outline-danger float-end" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
