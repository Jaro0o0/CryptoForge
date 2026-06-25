"use client"

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const newsItems = [
  { tag: 'Trending', title: 'Bitcoin Hits New Yearly High as Adoption Surges', color: 'from-cyan-400 to-cyan-500' },
  { tag: 'Analysis', title: 'Ethereum Layer-2 Volume Breaks All-Time Record', color: 'from-purple-400 to-purple-500' },
  { tag: 'News', title: 'Solana Leads Q2 Gains Among Top Cryptocurrencies', color: 'from-teal-400 to-cyan-500' },
];

const NewsView = () => (
  <motion.div
    key="news"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="text-white w-full"
  >
    <Typography
      variant="h3"
      className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
      sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}
    >
      Market Insights
    </Typography>
    <Box className="space-y-3">
      {newsItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <Box className="group p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 cursor-pointer text-left">
            <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${item.color} text-[10px] font-bold uppercase tracking-wider mb-1.5`}>
              {item.tag}
            </span>
            <Typography className="font-semibold text-sm md:text-base text-white/90 group-hover:text-white transition-colors leading-snug">
              {item.title}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  </motion.div>
);

export default NewsView;
