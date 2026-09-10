import { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/courses");
        setCourses(response.data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-linear-to-br from-sky-50 via-white to-indigo-50 px-5 py-12">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-600">
          Learn & Grow
        </p>

        <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
          Explore Our Courses
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
          Learn in-demand technologies with practical courses designed to
          improve your skills and build real-world projects.
        </p>
      </div>

      {isLoading && (
        <p className="py-12 text-center text-slate-500">Loading courses...</p>
      )}

      {hasError && (
        <p className="py-12 text-center text-red-600">
          Could not load courses. Please start the backend server and try again.
        </p>
      )}

      {!isLoading && !hasError && courses.length === 0 && (
        <p className="py-12 text-center text-slate-500">
          No courses have been added yet.
        </p>
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
          >
            <img
              src={course.img}
              alt={course.courseName}
              className="mb-5 h-48 w-full rounded-xl object-cover"
            />

            <h2 className="text-2xl font-bold text-slate-800">
              {course.courseName}
            </h2>

            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
              {course.description}
            </p>

            <p className="mt-3 text-sm font-semibold text-slate-600">
              Trainer: {course.trainer}
            </p>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-xl font-bold text-sky-600">
                ₹{course.price}
              </span>

              <button className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 active:scale-95">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;