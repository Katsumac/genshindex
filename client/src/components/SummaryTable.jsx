import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SummaryTable({ summaryData }) {

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
    <TableContainer component={Paper} sx={{minWidth: 100, maxWidth: 500, mb: 8 }} style={{marginLeft: "auto", marginRight: "auto"}}>
      <Table sx={{ minWidth: 100, maxWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{width: "50%"}}>Category</StyledTableCell>
            <StyledTableCell style={{width: "50%"}} align="left">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summaryData.map((summary) => (
            <StyledTableRow key={summary.category}>
              <StyledTableCell component="th" scope="row" style={{whiteSpace:"pre-wrap"}}>
                {summary.category}
              </StyledTableCell>
              <StyledTableCell align="left" style={{whiteSpace:"pre-wrap"}}>{summary.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}