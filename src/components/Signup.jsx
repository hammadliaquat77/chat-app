
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../database/firebase.Config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup(props) {
  const navigate = useNavigate();

  console.log('Signup Props', props);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  async function handleSignup(e) {
    e.preventDefault();
    console.log('Name==>', name);
    console.log('Email==>', email);
    console.log('Password==>', password);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const uid = response.user.uid;
      const userData = { name: name, email: email, uid };

      await setDoc(doc(db, 'users', uid), userData);

      console.log('Sign-up');
      
      Swal.fire({
        title: 'Signup Completed!',
        text: 'Thanks For Signup',
        icon: 'success',
        confirmButtonText: 'Okay'
      });

        
        navigate('/Login'); 


    } catch (error) {
      Swal.fire({
        title: 'Something Went Wrong!',
        text: error.message, 
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign-Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            UserName
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            placeholder="Enter your UserName"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
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
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={handleSignup}
          >
            Sign-Up
          </button>
        </div>

        <div className='mt-6 text-center flex justify-between'>
          <a className='text-sm text-indigo-900 hover:text-indigo-950' href="Login">
            Login?
          </a>
          <a className='text-sm text-indigo-500 hover:text-indigo-700' href="#">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
