import { Link } from 'react-router-dom';

function NotFound( ) {
  return(
<>
<div className="flex items-center justify-center h-screen bg-gray-100 p-6">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go back to Home
      </Link>
    </div>
  </div>

  </>
  )
}


export default NotFound;