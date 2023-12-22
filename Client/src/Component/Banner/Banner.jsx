import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div>
      <section className="w-full bg-white dark:bg-wickeddark">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Your all in one <br className="hidden lg:block" />
                  Task Management Tool!
                </h1>

                <div className="flex justify-center items-center text-center">
                  <div className="sm:max-w-lg sm:flex md:mx-auto mt-8">
                    {user ? (
                      <Link to="/dashboard">
                        <button className="mt-3 bg-blue-400 w-96 text-white px-5 py-3 rounded-md font-medium">
                          Let’s Explore
                        </button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button className="mt-3 bg-blue-400 w-96 text-white px-5 py-3 rounded-md font-medium">
                          Let’s Explore
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
