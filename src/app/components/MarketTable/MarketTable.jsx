"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TablePagination,
  Container,
} from "@mui/material";
import { getData } from "@/utils/getData";
import CoinBox from "../CoinBox/CoinBox";

const MarketTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const btc = data?.find((coin) => coin.id === "bitcoin");
  const eth = data?.find((coin) => coin.id === "ethereum");
  const sol = data?.find((coin) => coin.id === "solana");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StatBox = ({ coin, label }) => (
    <CoinBox>
      <Box className="flex items-center justify-between">
        <Box>
          <Typography variant="body2" className="text-gray-400 uppercase tracking-wider font-semibold text-[10px] md:text-xs">
            {label}
          </Typography>
          <Typography variant="h5" className="font-bold text-white mt-1 text-lg md:text-2xl">
            {coin ? `$${coin.current_price.toLocaleString()}` : "Loading..."}
          </Typography>
        </Box>
        {coin && (
          <Box
            className={`px-2 py-1 rounded text-[10px] md:text-xs font-bold ${
              coin.price_change_percentage_24h > 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? "+" : ""}
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </Box>
        )}
      </Box>
    </CoinBox>
  );

  return (
    <section className="py-16 md:py-24 px-0 bg-gray-950 relative overflow-hidden">
      {/* GRADIENT BLOBS */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />

      <Container className="relative z-10">
        <Typography
          variant="h2"
          component="h3"
          align="center"
          className="font-black text-white mb-10 md:mb-16 uppercase tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Today's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Crypto Prices</span>
        </Typography>

        {/* Top Stats */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <StatBox coin={btc} label="Bitcoin" />
          <StatBox coin={eth} label="Ethereum" />
          <Box className="sm:col-span-2 md:col-span-1">
            <StatBox coin={sol} label="Solana" />
          </Box>
        </Box>

        {/* Main Table */}
        <TableContainer
          component={Paper}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-x-auto shadow-2xl"
          sx={{ backgroundColor: "transparent" }}
        >
          <Table sx={{ minWidth: { xs: 800, md: 900 } }}>
            <TableHead className="bg-white/5">
              <TableRow>
                <TableCell className="text-white font-bold border-white/10 py-4 md:py-6">Coin</TableCell>
                <TableCell align="right" className="text-white font-bold border-white/10 py-4 md:py-6">Price</TableCell>
                <TableCell align="right" className="text-white font-bold border-white/10 py-4 md:py-6">24h Change</TableCell>
                <TableCell align="right" className="text-white font-bold border-white/10 py-4 md:py-6">Market Cap</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((coin) => (
                  <TableRow
                    key={coin.id}
                    className="hover:bg-white/5 transition-colors group"
                    sx={{ "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.05)" } }}
                  >
                    <TableCell>
                      <Box className="flex items-center gap-3 md:gap-4">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
                        <Box>
                          <Typography className="text-white font-bold text-sm md:text-base">{coin.name}</Typography>
                          <Typography className="text-gray-400 text-[10px] md:text-xs uppercase">{coin.symbol}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className="text-white font-semibold text-sm md:text-base">
                        ${coin.current_price.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        className={`font-bold text-sm md:text-base ${
                          coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h > 0 ? "+" : ""}
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className="text-gray-300 font-medium text-sm md:text-base">
                        ${coin.market_cap.toLocaleString()}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" className="py-16 md:py-20 text-gray-400">
                    <Box className="flex flex-col items-center gap-4">
                      <Box className="w-10 h-10 md:w-12 md:h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                      Loading market data...
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              color: "white",
              ".MuiTablePagination-selectIcon": { color: "white" },
              ".MuiTablePagination-actions": { color: "white" },
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          />
        </TableContainer>
      </Container>
    </section>
  );
};

export default MarketTable;
