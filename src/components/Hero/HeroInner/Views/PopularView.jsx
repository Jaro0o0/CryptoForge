"use client"

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CoinBox from '../../../common/CoinBox/CoinBox';

const coinGradients = {
  BTC: { bg: 'from-amber-500/20 to-amber-600/5', border: 'hover:border-amber-500/30', text: 'from-amber-400 to-amber-500' },
  ETH: { bg: 'from-blue-500/20 to-blue-600/5', border: 'hover:border-blue-500/30', text: 'from-blue-400 to-indigo-400' },
  SOL: { bg: 'from-teal-500/20 to-teal-600/5', border: 'hover:border-teal-500/30', text: 'from-teal-400 to-cyan-400' },
};

const PopularView = ({ btcData, ethData, solData }) => (
  <motion.div
    key="popular"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className='grid grid-cols-1 sm:grid-cols-2 gap-3 w-full'
  >
    {[
      { data: btcData, label: 'BTC' },
      { data: ethData, label: 'ETH' },
      { data: solData, label: 'SOL' }
    ].map((coin, idx) => {
      const gradient = coinGradients[coin.label];
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.35 }}
        >
          <CoinBox>
            <Box className={`flex items-center gap-3 p-1 rounded-xl bg-gradient-to-r ${gradient.bg} border border-white/[0.04] ${gradient.border} transition-all duration-300`}>
              <Box className="p-2 bg-white/5 rounded-lg border border-white/5">
                {coin.data?.image && <img src={coin.data.image} alt={coin.label} className="w-6 h-6 md:w-7 md:h-7" />}
              </Box>
              <Box className="text-left">
                <Typography className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">{coin.label}</Typography>
                <Typography className="text-white font-bold leading-none text-sm md:text-base">
                  {coin.data ? `$${coin.data.current_price.toLocaleString()}` : (
                    <span className="animate-pulse">...</span>
                  )}
                </Typography>
              </Box>
              {coin.data?.price_change_percentage_24h && (
                <Box className="ml-auto mr-2">
                  <Typography
                    className={`text-xs font-bold ${coin.data.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}
                  >
                    {coin.data.price_change_percentage_24h >= 0 ? '+' : ''}
                    {coin.data.price_change_percentage_24h.toFixed(1)}%
                  </Typography>
                </Box>
              )}
            </Box>
          </CoinBox>
        </motion.div>
      );
    })}
  </motion.div>
);

export default PopularView;
