import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const URL  = "https://dummyjson.com"

function Home() {

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-dark">Home</h3>
            </div>
        </div>
    </div>
  )
}

export default Home
