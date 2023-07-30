import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Main = ({ data }) => {
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (!title || !title2 || !title3 || !desc) {
      toast.error("Please fill all the fields!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    try {
      const response = await axios.patch("http://localhost:8000/app/about", {
        title: title,
        title2: title2,
        title3: title3,
        desc: desc,
      });
      setLoading(false);
      toast.success("Updated Succesfully...!!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      setLoading(false);
      toast.error("Error while updating...!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="absolute left-[37%] top-40 md:left-[3%]">
      <h2 className="text-3xl font-bold text-center">Main Section</h2>
      <div className=" mt-10">
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
            placeholder={data.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
            placeholder={data.title2}
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
          />
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
            placeholder={data.title3}
            value={title3}
            onChange={(e) => setTitle3(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full h-[rem] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border text-ellipsis"
            placeholder={data.desc}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center pt-10">
        <button
          disabled={loading}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center mr-2 px-7 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center cursor-pointer"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Main;
