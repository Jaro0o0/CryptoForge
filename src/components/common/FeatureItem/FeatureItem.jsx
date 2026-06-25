import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FeatureItem = ({ title, desc, icon, index = 0 }) => (

  <motion.div
  className="flex gap-4 group items-center md:items-start text-center md:text-left flex-col md:flex-row"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Box className="flex h-fit justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-3 md:p-4 rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </Box>
    <Box>
      <Typography variant="h5" component="h2" className="font-bold text-white mb-1 text-lg md:text-xl">
        {title}
      </Typography>
      <Typography component="p" className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
        {desc}
      </Typography>
    </Box>
    </motion.div>
);

export default FeatureItem;
