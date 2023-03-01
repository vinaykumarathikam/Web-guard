import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
function CardPage(props) {
  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: "3rem",
        marginTop: "3rem",
        marginRight: 0,
        backgroundColor: "#1DACD6",
      }}
    >
      <Card.Img as={Image} src={props.image} fluid={true} alt="Card image" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">explore</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPage;
