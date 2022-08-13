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

export const App = () => {
  faker.setLocale("ko");
  const {
    internet: { userName, email },
    address: { cityName },
    phone: { phoneNumber },
  } = faker;

  const TableCells = ["Name", "E-mail", "Address(City)", "Phone"];

  const users = Array(10)
    .fill(null)
    .map(() => ({
      name: userName(),
      email: email(),
      address: cityName(),
      phone: phoneNumber("010-####-####"),
    }));

  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHeadCustom>
            <TableRow>
              {TableCells.map((col) => {
                return <TableCell align="center">{col}</TableCell>;
              })}
            </TableRow>
          </TableHeadCustom>
          <TableBody>
            {users.map((user) => {
              const { name, email, address, phone } = user;
              return (
                <TableRow>
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
  border: 2px solid gray;
`;

const TableHeadCustom = styled(TableHead)`
  background-color: #d3d3d3;
`;
