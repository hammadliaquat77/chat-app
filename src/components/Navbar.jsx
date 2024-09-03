import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../database/firebase.Config'; // Make sure the path to your Firebase config is correct

function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
         console.log('Sign-Out');
         

        Swal.fire({
          title: 'Signed Out!',
          text: 'You have been successfully signed out.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        navigate('/login'); // Redirect to the login page after sign-out
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: `Sign out failed: ${error.message}`,
          icon: 'error',
          confirmButtonText: 'Retry',
        });
      });
  };

  return (
    <header className="text-gray-600 body-font w-full h-[100vh]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Chat-App</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
          <a className="mr-5 hover:text-gray-900"> link</a>
        </nav>
        <button
          onClick={handleSignOut}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          SignOut
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;