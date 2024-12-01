import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, signUp } from "../../firebase";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const userAuth = async (e) => {
    e.preventDefault();

    if (!email || !password || (signState === "Sign Up" && !name)) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (signState === "Sign In") {
      await login(email, password);
      toast.success("Sign in successfully!");
    } else {
      await signUp(name, email, password);
      toast.success("Sign up successfully!");
    }
  };

  return (
    <div
      className="bg-img h-screen w-full overflow-hidden bg-no-repeat bg-cover bg-transparent opacity-80"
      style={{ backgroundImage: `url('/background_banner.jpg')` }}
    >
      <div className="px-10 md:px-20">
        <div className="mt-7">
          <div className="logo">
            <Link>
              <img src={logo} alt="logo" className="w-28 h-auto" />
            </Link>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-[#000000bd] px-8 py-4 w-[350px] rounded-md shadow-md font-inter">
              <form>
                <h2 className="text-3xl mt-7 text-white">{signState}</h2>
                {signState === "Sign Up" ? (
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id=""
                    placeholder="Your name"
                    className="bg-[#333333] mt-8 px-3 py-2 w-full border-none rounded-md outline-none text-base"
                  />
                ) : (
                  ""
                )}
                <br />
                <input
                  type="email"
                  name="email"
                  value={email}
                  id=""
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-[#333333] mt-4 px-3 py-2 w-full border-none rounded-md outline-none text-base"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  value={password}
                  id=""
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="bg-[#333333] mt-4 px-3 py-2 w-full border-none rounded-md outline-none text-base"
                />{" "}
                <br />
                <button
                  type="submit"
                  onClick={userAuth}
                  className="w-full mt-4 bg-[#F11D11] py-2 rounded-md text-base border-none outline-none"
                >
                  {signState}
                </button>
                <div className=" flex justify-between mt-4 items-center pb-4">
                  <div>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id=""
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="checkbox"
                      className="text-sm ml-1 text-gray-200 cursor-pointer"
                    >
                      Remember Me
                    </label>
                  </div>
                  <p className="text-sm text-gray-200 cursor-pointer hover:text-[#F11D11] transition-all duration-300">
                    Need help?
                  </p>
                </div>
              </form>
              <div className="">
                {signState === "Sign In" ? (
                  <p className="text-sm text-gray-400">
                    New to Netflix?{" "}
                    <span
                      onClick={() => setSignState("Sign Up")}
                      className="text-base text-white font-semibold cursor-pointer hover:text-[#F11D11] transition-all duration-300 ml-2"
                    >
                      Sign Up Now
                    </span>{" "}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400">
                    Already have account?{" "}
                    <span
                      onClick={() => setSignState("Sign In")}
                      className="text-base text-white font-semibold cursor-pointer hover:text-[#F11D11] transition-all duration-300 ml-2"
                    >
                      Sign In Now
                    </span>{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
