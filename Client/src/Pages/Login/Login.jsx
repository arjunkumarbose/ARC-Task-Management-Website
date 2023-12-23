import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import Navbar from "../../Component/Navbar/Navbar";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then(() => {
        navigate("/");
        toast("Logged in sucessfully!", {
          icon: "✅",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className=" my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
        <div className="flex-1 max-w-sm bg-slate-200 p-14 rounded-lg ">
          <h1 className="text-3xl font-bold mb-5 text-center">Sign In</h1>
          <form onSubmit={handleLogin}>
            <label className="font-bold " htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              name="email"
              className="py-3 px-3 mb-3 mt-1 w-full rounded-lg"
              placeholder="john@gmail.com"
            />
            <label className="font-bold " htmlFor="email">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              required
              className="py-3 px-3 mt-1 w-full rounded-lg"
              placeholder="Password..."
            />
            <div className="flex justify-center">
              <input
                type="submit"
                value="Sign In"
                className="px-14 py-2 rounded-lg bg-green-400 font-medium mt-5 text-black cursor-pointer text-lg"
              />
            </div>
          </form>
          <p className="my-2 text-center font-medium">or</p>
          <SocialLogin />
          <p className="font-bold mt-2 text-center">
            Dont have any Account?
            <Link to="/register" className="pl-2 text-red-400">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
