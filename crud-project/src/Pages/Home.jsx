import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import UserCard from '../Components/UserCard';


const URL = "https://mern-crud-rest-api.onrender.com";

function Home(props) {
  const [users,setUsers] = useState([])

  const getData = async ()=> {
    await axios.get(`${URL}/api/user/all`)
    .then(res=>{
      console.log(`users =`,res)
      setUsers(res.data.users)
    }).catch(err=> toast.error(err.response.data.msg))
  }

  const readUserData = useCallback(()=> getData(),[])

  useEffect(()=>{
    readUserData()
  },[])

  //delete user
  const deleteHandler = async (id) => {
    try{
      if(window.confirm(`Are you sure to delete user???`)){
        await axios.delete(`${URL}/api/user/delete/${id}`)
        .then(res => {
          toast.success(res.data.msg)
          readUserData()
        }).catch(err => toast.error(err.response.data.msg))
      }
    }catch (err){
        toast.error(err.message)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="text-success display-3">Home</h3>
        </div>
      </div>

      <div className="row">
        {
          users?.map((item,index)=>{
            return(
              <UserCard key={index} {...item} deleteHandler={deleteHandler}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
