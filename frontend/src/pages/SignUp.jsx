import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../utils/constant";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const handleFormChnage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        BASE_URL + "/auth/registration/",
        formData,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status == 201) {
        navigate("/login");
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
              Sign up to QuickAI
            </h2>
            <form onSubmit={handleSignUp}>
              <input
                id="first_name"
                name="first_name"
                className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="text"
                placeholder="First Name"
                onChange={handleFormChnage}
                required
              />
              <input
                id="last_name"
                name="last_name"
                className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="text"
                placeholder="Last Name"
                onChange={handleFormChnage}
                required
              />
              <input
                id="email"
                name="email"
                className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="email"
                placeholder="Email"
                onChange={handleFormChnage}
                required
              />
              <input
                id="password1"
                name="password1"
                className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="password"
                placeholder="Password"
                onChange={handleFormChnage}
                required
              />
              <input
                id="password2"
                name="password2"
                className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="password"
                placeholder="Confirm Password"
                onChange={handleFormChnage}
                required
              />
              <button
                type="submit"
                className="w-full mt-2 mb-3 bg-indigo-500 py-2.5 rounded-full text-white cursor-pointer"
              >
                Sign up
              </button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
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
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
