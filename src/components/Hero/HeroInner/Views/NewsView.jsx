"use client"

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const NewsView = () => (
  <motion.div
    key="news"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="text-white w-full"
  >
    <Typography variant="h3" className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-3xl md:text-4xl">
      Market Insights
    </Typography>
    <Box className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Box key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer text-left">
          <Typography className="text-cyan-400 text-xs font-bold uppercase mb-1">Trending</Typography>
          <Typography className="font-semibold text-base md:text-lg">Bitcoin Hits New Yearly High as Adoption Surges</Typography>
        </Box>
      ))}
    </Box>
  </motion.div>
);

export default NewsView;
