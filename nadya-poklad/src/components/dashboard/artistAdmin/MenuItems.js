import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import AddMenuItemForm from "./AddMenuItemForm";
import MenuItemCard from "./MenuItemCard";
import ErrorMessage from "../Messages/ErrorMessage";
import MessageBox from "../Messages/MessageBox";
import useMenuItems from "../FirebaseHooks/useArtistItems";

export default function MenuItems() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successfull, setSuccessfull] = useState(null);
  const [addBtnText, setAddBtnText] = useState("Add new item");
  const [addMenuItemVisible, setAddMenuItemVisible] = useState(false);
  const menuItems = useMenuItems();
  
  useEffect(() => {
    setError(menuItems.error);
  }, [menuItems.error])

  useEffect(() => {
    setLoading(menuItems.loading);
  }, [menuItems.loading])

  useEffect(()=> {
    setSuccessfull(menuItems.succesfull);
  }, [menuItems.succesfull])

  useEffect(() => {
    if (addMenuItemVisible) setAddBtnText("Close");
    if (!addMenuItemVisible) setAddBtnText("Add new item");
  }, [addMenuItemVisible]);

  const toggleAddMenuItemVisible = () => {
    setAddMenuItemVisible(!addMenuItemVisible);
  };

  return (
    <Container className="container-page">   
      <Row className="container-menu-add-form">
        <Row>
          <Col>
            <Button
              variant="btn"
              role="button"
              data-testid="button-toggle-addMenuItemVisible"
              onClick={toggleAddMenuItemVisible}
            >
              {addBtnText}
            </Button>
          </Col>
        </Row>
        {addMenuItemVisible ? (
          <AddMenuItemForm menuItems={menuItems} />
        ) : null}
      </Row>
    
      <Row className="container-menu-item-cards mt-2">
        {error !== null && <ErrorMessage message={error} />}
        {successfull !== null &&  <MessageBox message={successfull} /> }

        <h5 className="title posts-title">List of posts in The Artist section</h5>
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          menuItems.data.map((item) => {
            return (
              <MenuItemCard
                key={item.id}
                item={item}
                updateItem={menuItems?.updateItem}
                deleteItem={menuItems?.deleteItem}
                updateItemActicity={menuItems?.updateItemActivity}
                setError={setError}
                setSuccessfull={setSuccessfull}
              />
            );
          })
        )}
      </Row>
    </Container>
  );
}
