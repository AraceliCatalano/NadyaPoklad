import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import ArtistPostService from "../../services/artist.services";
import '../../styles/App.css';


//[For Alba and future Ara] "getArtistPostId" is the prop coming from ArtistAdmin 
const ArtistItems = ({ getArtistPostId }) => {
  const [artistPosts, setArtistPosts] = useState([]);
  useEffect(() => {
    getArtistPosts();
  }, []);

  const getArtistPosts = async () => {
    const data = await ArtistPostService.getAllArtistPosts();
    console.log(data.docs);
    setArtistPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  const deleteHandler = async (id) => {
    await ArtistPostService.deleteArtistPost(id);
    getArtistPosts();
  };

  return (
    <>
      {/* <pre>{JSON.stringify(artistPosts, undefined, 2)}</pre> */}

      <Container className="mt-6 pt-6">
        <Button
          variant="btn"
          onClick={getArtistPosts}
        >
          Refresh List
        </Button>
        {
          artistPosts.map((doc, index) => {
            return (

              <Row key={doc.id}>
                <Row className="post-header">
                  <Col>
                    <p>Post order: {index + 1}</p>
                  </Col>
                  <Col>
                    <Button
                      variant="btn"
                      className="edit"
                      onClick={(e) => getArtistPostId(doc.id)}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="btn"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
                <Col sm className="artist-content-col">
                  <Image src={doc.imageURL} fluid className='image' />
                </Col>
                <Col sm>
                  <p>{doc.description}</p>
                </Col>
                
              </Row>
            )

          })

        }
      </Container>

    </>
  );
};

export default ArtistItems;
