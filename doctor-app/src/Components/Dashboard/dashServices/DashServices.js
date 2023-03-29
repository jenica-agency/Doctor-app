import GroupServices from "./GroupServices";
import ServiceForm from "./ServiceForm";
// import SingleService from "./SingleService";

const DashServices = () => {
  return (
    <div className="dashService">
      <ServiceForm />
      {/* <SingleService /> */}
      <GroupServices />
    </div>
  );
};

export default DashServices;
