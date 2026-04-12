import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@mui/material';

import { useState, useEffect } from "react";

//api
import { getData } from '@/utils/getData';



function BasicTable() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getData();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); 
  
    const btcPrice = data?.find(coin => coin.id === 'bitcoin')?.current_price;

    return ( 
      <>
      <Typography variant='h4' align="center" sx={{ mb: 4 }}>
        {btcPrice ? `BTC Price: $${btcPrice.toLocaleString()}` : 'Loading BTC Price...'}
      </Typography>

        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Coin</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h Change</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.slice(0, 10).map((coin) => (
              <TableRow
                key={coin.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={coin.image} alt={coin.name} width={30} height={30} />
                    {coin.name}
                  </Box>
                </TableCell>
                <TableCell align="right">${coin.current_price.toLocaleString()}</TableCell>
                <TableCell 
                  align="right" 
                  sx={{ color: (coin.price_change_percentage_24h || 0) > 0 ? 'green' : 'red' }}
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </TableCell>
                <TableCell align="right">${coin.market_cap.toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">Loading data...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
     );
}

export default BasicTable;