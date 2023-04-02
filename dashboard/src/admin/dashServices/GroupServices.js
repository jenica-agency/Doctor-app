import  { useEffect, useState } from "react";
import SingleService from "./SingleService";
import "./dashServices.css";
import React from "react";
const GroupServices = () => {
  const [services, setServices] = useState([]);

  //fetch all services
  useEffect(() => {
    const fetchAllServices = async () => {
      const response = await fetch("/allservices", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setServices(rjson);
      }
    };
    fetchAllServices();
  }, []);
  console.log(services);
  return (
    <div className="GroupServices ">
      {services &&
        services.map((service, index) => (
          <SingleService key={service._id} index={index} service={service} />
        ))}
    </div>
  );
};
export default GroupServices;
