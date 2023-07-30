import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const About = ({ data }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onloadend = () => {
      try {
        const base64 = btoa(reader.result);
        setImage(base64);
      } catch (error) {
        console.log(error);
      }
    };
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!title && !image && !date && !tag && !desc) {
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
      const requestBody = {};
      if (image) {
        requestBody.image = image;
      }
      if (title) {
        requestBody.title = title;
      }
      if (date) {
        requestBody.date = date;
      }
      if (tag) {
        requestBody.tag = tag;
      }
      if (desc) {
        requestBody.desc = desc;
      }
      const response = await axios.patch(
        `http://localhost:8000/card/${data._id}`,
        requestBody
      );
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
      toast.error(err, {
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
    <div className="">
      <div className=" mt-10 md:mx-3">
        <h2 className="text-3xl font-bold text-center my-10">
          {data.cardNum} Element
        </h2>
        <div className="flex flex-col gap-2">
          <input
            className="block w-full mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-3"
            id="default_size"
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleFileInputChange}
          />
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
            placeholder={data.tag}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
            placeholder={data.date}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-3 w-full h-[6rem] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border text-ellipsis"
            value={desc}
            placeholder={data.desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="text-center pt-10">
          <button
            type="button"
            disabled={loading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center cursor-pointer"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
