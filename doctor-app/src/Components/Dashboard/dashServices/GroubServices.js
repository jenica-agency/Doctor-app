import { useEffect, useState } from "react";
import SingleService from "./SingleService";
import "./dashServices.css";

const GroubServices = () => {
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

  return (
    <div className="GroubServices container">
      {services &&
        services.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
    </div>
  );
};
export default GroubServices;
