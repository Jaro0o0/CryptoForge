"use client"

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CoinBox from '../../../common/CoinBox/CoinBox';

const PopularView = ({ btcData, ethData, solData }) => (
  <motion.div
    key="popular"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'
  >
    {[
      { data: btcData, label: 'BTC' },
      { data: ethData, label: 'ETH' },
      { data: solData, label: 'SOL' }
    ].map((coin, idx) => (
      <CoinBox key={idx}>
        <Box className='flex items-center gap-4'>
          <Box className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-colors">
            {coin.data?.image && <img src={coin.data.image} alt={coin.label} className="w-6 h-6 md:w-8 md:h-8" />}
          </Box>
          <Box className="text-left">
            <Typography className="text-gray-400 text-[10px] md:text-xs font-bold uppercase">{coin.label}</Typography>
            <Typography variant='h6' className="text-white font-bold leading-none text-sm md:text-lg">
              {coin.data ? `$${coin.data.current_price.toLocaleString()}` : '...'}
            </Typography>
          </Box>
        </Box>
      </CoinBox>
    ))}
  </motion.div>
);

export default PopularView;
