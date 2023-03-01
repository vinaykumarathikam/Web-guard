import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Scan() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("enterd");

    emailjs
      .sendForm(
        "service_z44sp9r",
        "template_gcr0c6s",
        form.current,
        "Yt-Lg2vPgiA9UjGI_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Form ref={form} onSubmit={sendEmail} style={{ color: "green" }}>
      <Form.Group className="mb-3" controlId="user_name">
        <Form.Control
          type="text"
          placeholder="Enter ur name"
          name="user_name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="user_email">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="user_email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="url">
        <Form.Control
          type="text"
          placeholder="Enter the web url"
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit" value="Send">
        Submit
      </Button>
    </Form>
  );
}

export default Scan;
