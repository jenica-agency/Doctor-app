import { useEffect, useState } from "react";
import SingleService from "./SingleService";
import "./dashServices.css";

const GroupServices = () => {
  const [services, setServices] = useState([]);

  const handleDeleteRerender = (id) => {
    const udatedServices = services.filter((service) => {
      return service._id !== id;
    });
    setServices(udatedServices);
  };
  const handleUpdateRerender = (id, updatedService) => {
    const udatedServices = services.map((service) => {
      return service._id === id ? { _id: id, ...updatedService } : service;
    });
    setServices(udatedServices);
  };

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
          <SingleService
            key={service._id}
            index={index}
            service={service}
            handleDeleteRerender={handleDeleteRerender}
            handleUpdateRerender={handleUpdateRerender}
          />
        ))}
    </div>
  );
};
export default GroupServices;
