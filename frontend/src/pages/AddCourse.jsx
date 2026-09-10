import { useState } from "react";
import axios from "axios";
import { v4 as randomId } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: "",
    img: "",
    trainer: "",
    price: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((NewCourse) => ({ ...NewCourse, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.values(course).some((value) => !value.trim())) {
      toast.error("Please fill all the fields!!");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3000/courses", {
        ...course,
        price: Number(course.price),
        id: randomId(),
      });
      toast.success("Course added successfully.");
      setCourse({
        courseName: "",
        img: "",
        trainer: "",
        price: "",
        description: "",
      });
      navigate("/");
    } catch {
      toast.error("Could not add the course. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-7rem)] bg-[#f4f1eb] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgba(25,31,38,0.12)] sm:p-10">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e47b5e]">
            Course management
          </p>
          <h1 className="text-4xl font-black tracking-[-0.04em] text-[#19262d]">
            Add a new course
          </h1>
          <p className="mt-3 text-[#718080]">
            Share a course with learners by adding its essential details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="courseName"
              className="mb-2 block text-sm font-semibold text-[#19262d]"
            >
              Course name
            </label>
            <input
              id="courseName"
              name="courseName"
              type="text"
              value={course.courseName}
              onChange={handleChange}
              placeholder="e.g. React fundamentals"
              className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
            />
          </div>

          <div>
            <label
              htmlFor="img"
              className="mb-2 block text-sm font-semibold text-[#19262d]"
            >
              Image URL
            </label>
            <input
              id="img"
              name="img"
              type="url"
              value={course.img}
              onChange={handleChange}
              placeholder="https://example.com/course.jpg"
              className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
            />
          </div>

          <div>
            <label
              htmlFor="trainer"
              className="mb-2 block text-sm font-semibold text-[#19262d]"
            >
              Trainer
            </label>
            <input
              id="trainer"
              name="trainer"
              type="text"
              value={course.trainer}
              onChange={handleChange}
              placeholder="Trainer name"
              className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-semibold text-[#19262d]"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={course.price}
              onChange={handleChange}
              placeholder="999"
              className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-[#19262d]"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={course.description}
              onChange={handleChange}
              placeholder="What will learners gain from this course?"
              className="w-full resize-y rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="sm:col-span-2 rounded-xl bg-[#e47b5e] px-5 py-3.5 font-bold text-white transition hover:bg-[#d9684b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Adding course..." : "Add course"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddCourse;
