import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ArtistPostService from "../../services/artist.services";
import '../../styles/App.css';

//[For Alba and future Ara] "getArtistPostId" is the prop coming from ArtistAdmin 
const ArtistItems = ({ getArtistPostId }) => {
  const [ artistPosts, setArtistPosts ] = useState([]);
  useEffect(() => {
    getArtistPosts();
  }, []);

  const getArtistPosts = async() => {
    const data = await ArtistPostService.getAllArtistPosts();
    console.log(data.docs);
    setArtistPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };

  const deleteHandler = async(id) => {
    await ArtistPostService.deleteArtistPost(id);
    getArtistPosts();
  };
  
  return (
    <>
      <div className="mb-2">
        <Button 
          variant="btn" 
          onClick={getArtistPosts}
          >
          Refresh List
        </Button>
      </div>
      {/* <pre>{JSON.stringify(artistPosts, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {artistPosts.map((doc, index) => {
            return (

            <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.description}</td> 
            <td>{doc.imageURL}</td> 
            <td>{doc.status}</td>
            <td>
              <Button
                variant="btn"
                className="edit"
                onClick={(e) => getArtistPostId(doc.id)}
              >
                Edit
              </Button>
              <Button
                variant="btn"
                className="delete"
                onClick={(e) => deleteHandler(doc.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
            )

          })}
        </tbody>
      </Table>
    </>
  );
};

export default ArtistItems;
