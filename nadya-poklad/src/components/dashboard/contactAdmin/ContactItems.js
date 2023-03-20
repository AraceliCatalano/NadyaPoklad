import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ContactService from "../../../services/contact.services";
import '../../../styles/App.css';


const ContactItems = ({ getContactPostId }) => {
  const [contactPosts, setContactPosts] = useState([]);
  useEffect(() => {
    getContactPosts();
  }, []);

  const getContactPosts = async () => {
    const data = await ContactService.getAllContactPosts();
    console.log(data.docs);
    setContactPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  const deleteHandler = async (id) => {
    await ContactService.deleteContactPost(id);
    getContactPosts();
  };

  return (
    <>     
      <h4 className="title mt-3"> Current contact items currently showing: </h4>
      <Container className="mt-6 pt-6">
        
        <Button className="mt-2 mb-1"
          variant="btn"
          onClick={getContactPosts}
        >
          Refresh List
        </Button>
        {
          contactPosts.map((doc, index) => {
            return (

              <Row key={doc.id}>
                <Row className="post-header">
                  <Col sm={8}>
                    <p>Contact: {doc.contact}</p>
                  </Col>
                  <Col sm={2}>
                    <Button
                      variant="btn"
                      className="edit"
                      onClick={(e) => getContactPostId(doc.id)}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col sm={2}>
                    <Button
                      variant="btn"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
                
              </Row>
            )

          })

        }
      </Container>

    </>
  );
};

export default ContactItems;
