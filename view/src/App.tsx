import { faker } from "@faker-js/faker";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { CreateButton } from "./components";

export const App = () => {
  faker.setLocale("ko");
  const {
    internet: { userName, email },
    address: { cityName },
    phone: { number },
  } = faker;

  const TableCells = { 1: "Name", 2: "E-mail", 3: "Address(City)", 4: "Phone" };

  const users = Array(10)
    .fill(null)
    .map((el, idx) => ({
      id: idx,
      name: userName(),
      email: email(),
      address: cityName(),
      phone: number("010-####-####"),
    }));

  return (
    <Wrapper>
      <CreateButton />
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHeadCustom>
            <TableRow>
              {Object.entries(TableCells).map((col) => {
                let [keys, value] = col;
                return (
                  <TableCell key={keys} align="center">
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeadCustom>
          <TableBody>
            {users.map((user) => {
              const { name, email, address, phone, id } = user;
              return (
                <TableRow key={id}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{email}</TableCell>
                  <TableCell align="center">{address}</TableCell>
                  <TableCell align="center">{phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-top: 5%;
  height: auto;
`;

const TableHeadCustom = styled(TableHead)`
  background-color: #d3d3d3;
`;
