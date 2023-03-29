import { useEffect, useState } from "react";
import SingleService from "./SingleService";
import "./dashServices.css";
import ServiceUpdateForm from "./ServiceUpdateForm";

const GroupServices = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);

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
          <div>
            <SingleService key={service._id} index={index} service={service} />
          </div>
        ))}
      <ServiceUpdateForm service={service} />
    </div>
  );
};
export default GroupServices;
