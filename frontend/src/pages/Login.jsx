import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";
import { userContext } from "../context/UserContext";

const Login = () => {
  let { login } = useContext(userContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("user");
  let navigate = useNavigate(null); 
  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      toast.error("Please fill all the fields!!");
      return;
    }

    let res = await axios.get(
      `http://localhost:3000/users?email=${email}&role=${role}`,
    );

    let user = res.data[0];
    let ValidPassword = await bcrypt.compare(password, user.password);

    if (!user || !ValidPassword) {
      toast.error("Invalid credentials!!");
      return;
    }

    login(user);
    navigate("/");
    toast.success("User Login Successful!!");
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
                CodeCrafters
              </span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8a85c]">
              Welcome back
            </p>
            <h1 className="max-w-sm text-5xl font-black leading-[1.03] tracking-[-0.04em]">
              Pick up where your learning left off.
            </h1>
          </div>
          <p className="relative max-w-xs text-sm leading-6 text-[#b8c1c1]">
            Your next useful skill is closer than you think. Sign in and keep
            building your momentum.
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
              Member access
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#19262d] sm:text-5xl">
              Login your account
            </h2>
            <p className="mt-3 text-base text-[#718080]">
              Welcome back. Your classroom is ready.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-lg flex-col gap-5"
          >
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#19262d]"
                htmlFor="login-email"
              >
                Email address
              </label>
              <input
                id="login-email"
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
                htmlFor="login-password"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-[#d9dfdc] bg-[#f8faf8] p-3.5 text-[#19262d] outline-none transition-all placeholder:text-[#9aa5a3] focus:border-[#e47b5e] focus:bg-white focus:ring-4 focus:ring-[#e47b5e]/10"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center gap-5 py-2 text-sm text-[#718080]">
              <span className="font-semibold text-[#19262d]">Role</span>
              <div className="flex items-center gap-2">
                <label htmlFor="login-admin">Admin</label>
                <input
                  id="user"
                  type="radio"
                  value="admin"
                  checked={role == "admin"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 cursor-pointer accent-[#e47b5e]"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="login-user">User</label>
                <input
                  id="login-user"
                  type="radio"
                  value="user"
                  checked={role == "user"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 cursor-pointer accent-[#e47b5e]"
                />
              </div>
            </div>
            <button className="mt-2 cursor-pointer rounded-xl bg-[#e47b5e] p-3.5 text-base font-bold tracking-wide text-[#19262d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9684b] hover:shadow-lg hover:shadow-[#e47b5e]/25 active:translate-y-0">
              Log in
            </button>
            <div className="border-t border-[#edf0ed] pt-5 text-sm text-[#718080]">
              <div className="flex items-center gap-2">
                <p>Don't have an account?</p>
                <Link
                  to={"/signup"}
                  className="font-bold text-[#d9684b] hover:text-[#19262d]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
