import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-20 xl:px-32 flex items-center justify-center w-full bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
        <div className="text-center mt-6">
          <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Forgot Password
            </h2>
            <p className="text-sm text-center mb-4 text-gray-600">
              Enter your email address and we’ll send you instructions to reset
              your password.
            </p>
            <form>
              <input
                id="email"
                className="w-full bg-transparent border mb-4 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-500 py-2.5 rounded-full text-white"
              >
                Send Reset Link
              </button>
            </form>
            <p className="text-center mt-4">
              Remember your password?{" "}
              <button
                type="button"
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
