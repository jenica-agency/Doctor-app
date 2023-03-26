import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleService = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={service.attachment} />
      <Card.Body>
        <Card.Title>{service.header}</Card.Title>
        <Card.Text>{service.brif}</Card.Text>
        <Button variant="success">Update</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleService;
