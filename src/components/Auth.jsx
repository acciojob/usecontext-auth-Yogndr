import React, { useContext } from 'react'
import { authContext } from './App'
const Auth = () => {
    const {authentication,setAuthentication}=useContext(authContext)

  return (
    <div>
        {authentication?(
            <p className='authText'>You are now authenticated, you can proceed</p>
        ):(
            <p>you are not authenticated</p>
        )}

        <input type="checkbox" checked={authentication} onChange={()=>{
            setAuthentication(!authentication)
        }}/>
        I'm not a robot
    </div>
  )
}

export default Auth