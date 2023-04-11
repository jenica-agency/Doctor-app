import { useState } from "react";
import SingleBLog from "./SingleBLog";
import Button from "react-bootstrap/Button";
import CreateBlogModal from "./CreateBlogModal";

const GroupBlogs = ({ blogs }) => {
  //craete modal
  const [showCreateModal, setShowUpdateModal] = useState(false);
  const handleCloseCreateModal = () => setShowUpdateModal(false);
  const handleOpenCreateModal = () => setShowUpdateModal(true);
  return (
    <div className="GroupBlogs">
      <Button variant="primary" onClick={handleOpenCreateModal}>
        إضافة مدونة
      </Button>
      <CreateBlogModal
        modalState={showCreateModal}
        handleClose={handleCloseCreateModal}
      />
      {blogs.map((blog) => {
        return <SingleBLog key={blog._id + 1} blog={blog} />;
      })}
    </div>
  );
};

export default GroupBlogs;
