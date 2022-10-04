import React from 'react'
import axios from 'axios'
import { Navigate, useSearchParams} from 'react-router-dom'

function Auth(){
  const [searchParams] = useSearchParams()
  let viable
  
  try{
    axios.post("http://localhost:9000/auth", {token: searchParams.get("token")})
  .then((response) => {
      viable = response.data.stage
      localStorage.setItem('user', response.data.email)
      localStorage.setItem('testId', response.data.test)
      localStorage.setItem('stage', response.data.stage)
    })
    }catch(err){
      console.log(err.message)
    }
    if(viable !== "TAKEN"){
      let link = "../" + localStorage.getItem('testId')
      console.log(link)
      return <Navigate to={link} replace />
    } else{
      return "You have already taken the test"
    }
};

export default Auth