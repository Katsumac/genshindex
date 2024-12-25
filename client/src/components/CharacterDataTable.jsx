import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#224488",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CharacterDataTable({ abilityData }) {
  return (
    <TableContainer component={Paper} sx={{minWidth: 200, maxWidth: 900, mb: 8 }} style={{marginLeft: "auto", marginRight: "auto"}}>
      <Table sx={{ minWidth: 200, maxWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abilityData.map((ability) => (
            <StyledTableRow key={ability.name}>
              <StyledTableCell component="th" scope="row" style={{whiteSpace:"pre-wrap"}}>
                {ability.name}
              </StyledTableCell>
              <StyledTableCell align="left" style={{whiteSpace:"pre-wrap"}}>{ability.unlock}</StyledTableCell>
              <StyledTableCell align="left" style={{whiteSpace:"pre-wrap"}}>{ability.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}