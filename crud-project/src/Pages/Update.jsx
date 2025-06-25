import React , { useEffect,useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const URL = "https://mern-crud-rest-api.onrender.com";

function Update() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [user,setUser] = useState({
      name: "",
      email: "",
      mobile: "",
      gender: "",
      dob: "",
      address: ""
    })
  
    const [gender,setGender] = useState("")

    const readSingle = async () => {
      await axios.get(`${URL}/api/user/single/${id}`)
      .then(res => {
        setUser(res.data.user)
        setGender(res.data.user.gender)
      }).catch(err => toast.error(err.response.data.msg))
    }

    useEffect(()=> {
      readSingle()
    },[])
  
    const readUser = (e) => {
      const {name, value} = e.target
      setUser({ ...user , [name]:value})
    }

    const submitHandler = async (e) => {
    try{
      e.preventDefault();// to avoid page reload on submit

      let data = {
        ...user,
        gender
      }
      console.log(`new user =`, data)

      await axios.put(`${URL}/api/user/add`, data)
      .then(res =>{
        toast.success(res.data.msg)
        navigate('/')
      })
      .catch(err=>toast.error(err.response.data.msg))

    }catch(error){
      toast.error(error.response)
    }
  }
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Update</h3>
          
          <p className="text-secondary"> {id} </p>
          <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form method='post' autoComplete='off' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" value={user.name} onChange={readUser} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Your Mobile</label>
                  <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={readUser} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" name="email" id="email" value={user.email} onChange={readUser} className='form-control' required />
                </div>
                <div className='form-group mt-2'>
                  <label htmlFor="gender">Your Gender <br /></label>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="gender" id="gender" value={gender} className='form-check-input' onChange={(e)=> setGender(gender)} 
                    checked={gender === "male"}/>
                    <label className='form-check-label'>Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="gender" id="gender" value={gender} className='form-check-input' onChange={(e)=> setGender(gender)}
                    checked={gender === "female"} />
                    <label className='form-check-label'>Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="gender" id="gender" value={gender} className='form-check-input' onChange={(e)=> setGender(gender)}
                    checked={gender === `transgender`} />
                    <label className='form-check-label'>Others</label>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="dob">Your Date of birth {new Date(user.dob).toLocaleDateString()}</label>
                  <input type="date" name="dob" id="dob"  onChange={readUser} className='form-control' value={user.dob}  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="addres">Adress</label>
                  <textarea name="address" id="address" className='form-control' required 
                  cols={30} rows={6} value={user.address} onChange={readUser} placeholder='Your Address'/>
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Update User" className='btn btn-success' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>
  )
}

export default Update