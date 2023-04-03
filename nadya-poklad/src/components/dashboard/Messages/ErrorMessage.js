import React from "react";
import Card from "react-bootstrap/Card";

export default function ErrorMessage({ message }) {
  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <Card.Title>Error!</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text data-testid="error-message">
          
          setTimeout(()=> { message}, 5000);
          
        </Card.Text>
      </Card.Body>
        
    </Card>
  );
}

const cardStyle = {
  width: "90%",
  marginBottom: 15,
  marginTop: 15,
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#acd8ec",
  borderWidth: 3,
  borderColor: "#6098ad",
};

const cardHeaderStyle = {
  width: "100%",
  backgroundColor: "#c2ced6",
};
