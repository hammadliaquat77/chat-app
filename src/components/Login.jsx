import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../database/firebase.Config'; // Ensure you have the correct path to your firebase config
// import Loading from './Loading';


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = (e) => {
    setIsloading(true)
    e.preventDefault();

    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user);

       setIsloading(false)

        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        
        console.log('user is loggin');
        
        navigate('/Home'); 
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);

        Swal.fire({
          title: 'Login Failed',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Retry',
        });
        setIsloading(false)
      });

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
           {isloading ? 
             <div className="w-full flex justify-center py-2 px-4 rounded">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" className='h-12 w-12' />        
             </div>
              :
          
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Login
            </button>
}
          </div>
        </form>
        <div className='mt-6 text-center flex justify-between'>
          <a className='text-sm text-indigo-900 hover:text-indigo-950' href="Signup">
            SignUp?
          </a>

          <a className='text-sm text-indigo-500 hover:text-indigo-700' href="#">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
