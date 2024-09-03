import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading(props) {

    const navigate = useNavigate()

   useEffect( ()=> {
        checkUser()
   }, [])


   const checkUser = async () => {
        const userId = await localStorage.getItem('userId')
        setTimeout(() =>{

            if(userId !== null) {
                 navigate('/Home')
                 // window.location.href = '/Home'
                }else{
                navigate('/Login')
                // window.location.href = '/Login'
            }
        }, 2000)
   }

  return (
    <div>
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>

    </div>
  )
}

export default Loading;