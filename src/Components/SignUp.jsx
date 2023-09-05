// Images
import Hero from "../Images/Hero.png";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="h-[600px] flex bg-cream p-2 rounded-lg">
      <div className="flex flex-grow items-center justify-center">
        <img src={Hero} alt="" className="h-full" />
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
