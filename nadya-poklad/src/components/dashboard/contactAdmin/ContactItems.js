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
      <Container className="mt-4 pt-6">
        
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
                  <Col >
                    <p>Contact: {doc.contact}</p>
                  </Col>
                  </Row>
                  <Row>
                  <Col >
                    <Button
                      variant="btn"
                      className="edit me-2 mb-2"
                      onClick={(e) => getContactPostId(doc.id)}
                    >
                      Edit
                    </Button>
                  
                    <Button
                      variant="btn"
                      className="delete mb-2"
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
