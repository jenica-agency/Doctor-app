import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./dashServices.css";
const SingleService = ({ service }) => {
  const handleDelete = async () => {
    const response = await fetch("/allservices/admin/" + service._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log("the service was deleted");
    }
  };

  return (
    <Card className="card" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={service.attachment} />
      <Card.Body>
        <Card.Title>{service.header}</Card.Title>
        <Card.Text>{service.brif}</Card.Text>
        <Button variant="success">Edit</Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleService;
