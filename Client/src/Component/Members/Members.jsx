import { MdOutlineDesignServices } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa";
import { SiOpsgenie } from "react-icons/si";

const Members = () => {
  return (
    <div>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-cyan-400 rounded-md">
              <MdOutlineDesignServices />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Designers
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Ensuring the best time management for designers to manage their
            tasks.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-400 rounded-md">
              <SiOpsgenie />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Professionals
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Benifical for busy persons to manage their time and work.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-orange-400 rounded-md">
              <FaHeadSideVirus />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Developers
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Developers can manage their tasks and time to complete them.
          </p>
        </div>
      </div>

      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-blue-500 uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900  sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 ">
                Build a simply and powered collaborative space for all your
                team. Track, share, measure, you have a fully control, it&#x27;s
                never be simply and efficient.
              </p>
              <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JcNY4c0dhaLXM8XqzKhWMSzl-JtLNpEgEw&usqp=CAU"
                    alt="1"
                  />
                  <img
                    className="w-40 rounded-lg shadow-lg md:w-64"
                    width="260"
                    src="https://hive.com/wp-content/uploads/2022/06/to-do-list.jpg"
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <img
                    className="w-24 rounded-lg shadow-lg md:w-40"
                    width="170"
                    src="https://cdn.shopify.com/s/files/1/0882/3478/files/to-do-list-1.jpg?v=1535084461"
                    alt="3"
                  />
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="https://www.spica.com/sites/5d683cbd24d35f11477fed0f/content_entry5d8b217524d35f11477ff600/60641ea024d35f16f2dc0c2f/files/SpicaBlog_Everything-about-a-to-do-list.jpg?1702122891"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
