import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/UserContext";

const NavContainer = () => {
  let { user } = useContext(userContext);

  return (
    <div className="flex items-center gap-4 text-lg font-semibold md:gap-8">
      <Link
        to="/"
        className="text-gray-700 transition duration-300 hover:text-blue-600"
      >
        Courses
      </Link>

      {user?.role === "admin" && (
        <Link
          to="/addcourse"
          className="text-gray-700 transition duration-300 hover:text-blue-600"
        >
          Add Course
        </Link>
      )}

      {user?.role === "user" && (
        <Link
          to="/cart"
          className="text-gray-700 transition duration-300 hover:text-blue-600"
        >
          Cart
        </Link>
      )}

      {user ? (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"
          title={user.username}
        >
          {user.username?.charAt(0).toUpperCase()}
        </span>
      ) : (
        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NavContainer;