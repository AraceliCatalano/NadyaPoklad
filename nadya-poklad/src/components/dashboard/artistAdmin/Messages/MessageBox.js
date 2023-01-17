import React from "react";
import Card from "react-bootstrap/Card";

export default function MessageBox({ message }) {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Text data-testid="messagebox-message">{message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const cardStyle = {
  width: "90%",
  marginBottom: 5,
  marginTop: 5,
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#c2ced6",
  borderWidth: 1,
  borderColor: "#41818d",
  color: "#000000"
};
