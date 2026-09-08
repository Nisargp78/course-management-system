import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as randomId } from "uuid";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";

const SignUp = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [gender, setGender] = useState("");
  let navigate = useNavigate(null);

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields!!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!!");
      return;
    }

    let data = await axios.get(`http://localhost:3000/users?email=${email}`);

    if (data.data.length > 0) {
      toast.error("User already exists!!");
      return;
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    let user = {
      username,
      email,
      password: hashedPassword,
      gender,
      role: "user",
      id: randomId(),
    };

    let res = await axios.post("http://localhost:3000/users", user);

    if (res.status === 201) {
      toast.success("User Registered Successfully!!");
      navigate("/");
    } else {
      toast.error("Something went wrong!!");
    }
  };
  return (
    <div className="min-h-[calc(100vh-7rem)] bg-[#f4f1eb] px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_24px_80px_rgba(25,31,38,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="relative hidden overflow-hidden bg-[#19262d] p-12 text-[#f7f3ea] lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-36 border-[#e47b5e]/30"></div>
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-36 border-[#d8a85c]/20"></div>
          <div className="relative">
            <div className="mb-16 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e47b5e] text-lg font-black text-[#19262d]">
                C
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.28em]">
                Coursework
              </span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8a85c]">
              Start learning
            </p>
            <h1 className="max-w-sm text-5xl font-black leading-[1.03] tracking-[-0.04em]">
              Make room for a better kind of progress.
            </h1>
          </div>
          <p className="relative max-w-xs text-sm leading-6 text-[#b8c1c1]">
            Create your account, find a course you care about, and turn
            curiosity into a useful habit.
          </p>
        </aside>
        <main className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
          <div className="mb-8">
            <div className="mb-7 flex items-center gap-3 lg:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e47b5e] text-lg font-black text-[#19262d]">
                C
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#19262d]">
                Coursework
              </span>
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e47b5e]">
              New learner
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#19262d] sm:text-5xl">
              Create your account
            </h2>
            <p className="mt-3 text-base text-[#718080]">
              Join us and make your next hour count.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-lg flex-col gap-5"
          >
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#19262d]"
                htmlFor="signup-username"
              >
                Username
              </label>
              <input
                id="signup-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none transition-all placeholder:text-[#9aa5a3] focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#19262d]"
                htmlFor="signup-email"
              >
                Email address
              </label>
              <input
                id="signup-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none transition-all placeholder:text-[#9aa5a3] focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#19262d]"
                htmlFor="signup-password"
              >
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none transition-all placeholder:text-[#9aa5a3] focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#19262d]"
                htmlFor="signup-confirm-password"
              >
                Confirm password
              </label>
              <input
                id="signup-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none transition-all placeholder:text-[#9aa5a3] focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center gap-5 py-2 text-sm text-[#718080]">
              <span className="font-semibold text-[#19262d]">Gender</span>
              <div className="flex items-center gap-2">
                <label htmlFor="signup-male">Male</label>
                <input
                  type="radio"
                  value="male"
                  checked={gender == "male"}
                  onChange={(e) => setGender(e.target.value)}
                  id="signup-male"
                  className="h-4 w-4 cursor-pointer accent-[#e47b5e]"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="signup-female">Female</label>
                <input
                  type="radio"
                  value="female"
                  checked={gender == "female"}
                  onChange={(e) => setGender(e.target.value)}
                  id="signup-female"
                  className="h-4 w-4 cursor-pointer accent-[#e47b5e]"
                />
              </div>
            </div>
            <button className="mt-2 cursor-pointer rounded-xl bg-[#e47b5e] p-3.5 text-base font-bold tracking-wide text-[#19262d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9684b] hover:shadow-lg hover:shadow-[#e47b5e]/25 active:translate-y-0">
              Sign Up
            </button>
            <div className="border-t border-[#edf0ed] pt-5 text-sm text-[#718080]">
              <p>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-bold text-[#d9684b] hover:text-[#19262d]"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
