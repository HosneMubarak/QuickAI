import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../utils/constant";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChnage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL + "/auth/login/", formData, {
        withCredentials: true,
      });
      console.log(response.data);
      if (response.status == 200) {
        navigate("/ai");
      }
    } catch (error) {}
  };

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-20 xl:px-32 flex items-center justify-center w-full bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
        <div className="text-center mt-6">
          <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Sign in to QuickAI
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleFormChnage}
                required
              />
              <input
                id="password"
                className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleFormChnage}
                required
              />
              <div className="text-right py-4">
                <button
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password
                </button>
              </div>
              <button
                type="submit"
                className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white cursor-pointer"
              >
                Log in
              </button>
            </form>
            <p className="text-center mt-4">
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </p>
            <button
              type="button"
              className="cursor-pointer w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
            >
              <img
                className="h-4 w-4"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
                alt="googleFavicon"
              />
              Log in with Google
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
