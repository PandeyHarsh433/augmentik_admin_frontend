import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutGroup from "./../components/AboutGroup";
import requireSignIn from "../components/Authenticate";
import axios from "axios";

const AboutPage = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/cards");
    const data = await response.data;
    setMainData(data);
  };

  return (
    <div className="relative">
      <Navbar />
      <AboutGroup data={mainData} />;
    </div>
  );
};

export default requireSignIn(AboutPage);
