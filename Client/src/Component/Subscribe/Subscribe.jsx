import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        icon: "🚫",
        style: {
          background: "#ff6347",
          color: "#fff",
        },
      });
      return;
    }

    setTimeout(() => {
      toast.success("Subscription successful!", {
        icon: "👍",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }, 1000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Want to see Back in action?
          </h1>
          <p className="max-w-md mx-auto mt-5 text-gray-500">
            ARC is a community of developers, designers, creators, and
            entrepreneurs. Our mission is to help each other grow, connect, and
            build.
          </p>

          <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Email Address"
            />

            <button
              onClick={handleSubscribe}
              className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <FaEnvelope className="inline-block mr-2" />
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
