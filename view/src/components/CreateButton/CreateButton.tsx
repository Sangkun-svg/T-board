import { Button } from "@mui/material";
import styled from "styled-components";

export const CreateButton = () => {
  const handleCreateButton = (): void => {
    alert("move create page");
  };
  return (
    <Wrapper>
      <Button variant="outlined" onClick={handleCreateButton}>
        Create
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  float: right;
  margin: 0px 5px 5px 10px;
`;
