import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const { google } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const axios = useAxios();
  const navigate = useNavigate();
  console.log(allUsers);

  const handleGoogle = () => {
    google()
      .then((res) => {
        navigate("/");
        toast("Login was successful!", {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        console.log(res.user);
        const isExist = allUsers.find(
          (allUser) => allUser.email === res.user.email
        );
        const userData = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
          role: "outhers",
        };
        if (isExist) {
          return;
        } else {
          axios.post("/users", userData).then((res) => {
            console.log(res.data);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    axios.get("/users").then((res) => {
      setAllUsers(res.data);
    });
  }, []);

  return (
    <div className="flex justify-center text-center items-center">
      <button
        onClick={handleGoogle}
        className="px-10 flex items-center justify-center gap-2 py-2 rounded font-medium cursor-pointer text-lg"
      >
        <p className="text-xl">
          <FcGoogle />
        </p>
        <p>Sign in with Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
