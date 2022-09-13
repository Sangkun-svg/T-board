import { Button, Modal, Box } from "@mui/material";
import styled from "styled-components";
import * as React from "react";
import { RegisterForm } from "../Form";

export const CreateButton = () => {
  const [modal, setModal] = React.useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <Wrapper>
      <Button
        className="user-create-button"
        onClick={handleModal}
        variant="outlined"
      >
        Create User
      </Button>
      <Modal
        className="c_userModal"
        open={modal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RegisterForm />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  float: right;
  margin: 0px 5px 5px 10px;
`;
