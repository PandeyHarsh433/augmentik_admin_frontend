import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import axios from "axios";
import requireSignIn from "../components/Authenticate";

const MainPage = () => {
  const [mainData, setMainData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/app/about");
    const data = await response.data;
    setMainData(data);
  };
  return (
    <div className="relative">
      <Navbar />
      <Main data={mainData} />
    </div>
  );
};

export default requireSignIn(MainPage);
