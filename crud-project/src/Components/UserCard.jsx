import React from 'react'
import { NavLink } from 'react-router-dom'

function UserCard(props) {
    const { _id, name, email, mobile, role, address, dob, deleteHandler } = props



  return (
    <div className='col-md-4 col-sm-6 col-lg-4'>
      <div className="card mt-3">
        <div className="card-header text-center">
            <h5 className="card-title text-capitalize text-success">
                { name }
            </h5>
        </div>
        <div className="card-body">
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Email</strong>
                    <span className="text-success float-end">{ email }</span>
                </li>
                <li className="list-group-item">
                    <strong>Mobile</strong>
                    <span className="text-success float-end">{ mobile }</span>
                </li>
                <li className="list-group-item">
                    <strong>DOB</strong>
                    <span className="text-success float-end">{ new Date(dob).toDateString() }</span>
                </li>
                <li className="list-group-item">
                    <strong>Role</strong>
                    <span className="text-success float-end">{ role }</span>
                </li>
                <li className="list-group-item">
                    <strong>Address</strong>
                    <span className="text-success float-end">{ address || "---" }</span>
                </li>
            </ul>
        </div>
        <div className="card-footer">
            <NavLink to={`/edit/${_id}`} className="btn btn-outline-info">
                <i className='bi bi-pencil'></i>Edit
            </NavLink>
            <button onClick={()=> deleteHandler(_id)} className='btn btn-outline-danger float-end'>
                <i className='bi bi-trash'></i>Delete
            </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
