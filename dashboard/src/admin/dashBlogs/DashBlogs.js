import React from "react";
import GroupBlogs from "./GroupBolgs";
import { useState, useEffect } from "react";
const DashBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  //fetch all blogs
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const response = await fetch("/blogs", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setBlogs(rjson);
      }
    };
    fetchAllBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className="dashboard-blogs w-100">
      <h2>التحكم في المدونات</h2>
      <GroupBlogs blogs={blogs} />
    </div>
  );
};

export default DashBlogs;
