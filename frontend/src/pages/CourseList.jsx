import React from "react";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "React JS",
      description: "Learn React from basics to advanced concepts.",
      price: "₹999",
      icon: "⚛️",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Master modern JavaScript and ES6+ concepts.",
      price: "₹799",
      icon: "🟨",
    },
    {
      id: 3,
      title: "HTML & CSS",
      description: "Build beautiful and responsive websites.",
      price: "₹599",
      icon: "🌐",
    },
    {
      id: 4,
      title: "Node.js",
      description: "Build powerful backend applications with Node.js.",
      price: "₹899",
      icon: "🟢",
    },
    {
      id: 5,
      title: "MongoDB",
      description: "Learn NoSQL database concepts with MongoDB.",
      price: "₹699",
      icon: "🍃",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      description: "Create modern UIs quickly using Tailwind CSS.",
      price: "₹499",
      icon: "🎨",
    },
  ];

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

      {/* Course Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-3xl transition duration-300 group-hover:scale-110">
              {course.icon}
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              {course.title}
            </h2>

            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
              {course.description}
            </p>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-xl font-bold text-sky-600">
                {course.price}
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