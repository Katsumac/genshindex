import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AbilityTable({ abilityData }) {

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

  return (
    <TableContainer component={Paper} sx={{minWidth: 200, maxWidth: 1000, mb: 8 }} style={{marginLeft: "auto", marginRight: "auto"}}>
      <Table sx={{ minWidth: 200, maxWidth: 1000 }} aria-label="customized table">
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
              <StyledTableCell align="left" style={{whiteSpace:"pre-wrap"}}>{ability.description.replace(/\n/g, "\n\n").replace(/\n\n\n\n/g, "\n")}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}