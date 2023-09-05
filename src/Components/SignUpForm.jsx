// Hooks
import { useState } from "react";

// Icons
import VisibleIcon from "../Icons/VisibleIcon";
import HiddenIcon from "../Icons/HiddenIcon";

const SignupForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-white text-black  rounded-lg p-10 pt-15 relative">
      <h1 className="text-2xl font-medium mb-2 text-center">
        Welocome to ToDoPro
      </h1>

      <p className="text-xs font-light mb-5 text-center">
        Please enter your details
      </p>

      <form>
        <div className="w-full mb-5 border-b border-black">
          <input
            type="text"
            placeholder="Fullname"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            type="text"
            placeholder="Username"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            type="text"
            placeholder="Email"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 flex items-center border-b border-black">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowPassword} className="mr-2">
            {showPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>

        <div className="w-full flex items-center border-b border-black">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowConfirmPassword} className="mr-2">
            {showConfirmPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>
      </form>

      <button className="bg-dark text-white w-full py-2 rounded-full mt-4 border-black border-2 hover:bg-white hover:text-black transition-all duration-200">
        Sign Up
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]">
        Already have an account? <span to="/sign-in">Sign In</span>
      </div>
    </div>
  );
};

export default SignupForm;
