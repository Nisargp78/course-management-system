import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-8 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-blue-400">
            CourseHub
          </h2>

          <p className="leading-7 text-gray-400">
            Learn new skills, improve your knowledge, and build your future
            with our online courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link className="transition hover:text-white" to="/">
              Courses
            </Link>

            <Link className="transition hover:text-white" to="/addcourse">
              Add Course
            </Link>

            <Link className="transition hover:text-white" to="/cart">
              Cart
            </Link>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Account
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link className="transition hover:text-white" to="/signup">
              Sign Up
            </Link>

            <Link className="transition hover:text-white" to="/login">
              Login
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Contact Us
          </h3>

          <p className="mb-2 text-gray-400">
            Email: support@coursehub.com
          </p>

          <p className="text-gray-400">
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2026 CourseHub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer