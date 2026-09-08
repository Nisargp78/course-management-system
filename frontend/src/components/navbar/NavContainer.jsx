import { Link } from 'react-router-dom'

const NavContainer = () => {
  return (
    <div className="flex items-center gap-8 text-lg font-semibold">
      <Link
        to="/"
        className="text-gray-700 transition duration-300 hover:text-blue-600"
      >
        Courses
      </Link>

      <Link
        to="/addcourse"
        className="text-gray-700 transition duration-300 hover:text-blue-600"
      >
        Add Course
      </Link>

      <Link
        to="/cart"
        className="text-gray-700 transition duration-300 hover:text-blue-600"
      >
        Cart
      </Link>

      <Link
        to="/login"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        Login
      </Link>
    </div>
  )
}

export default NavContainer