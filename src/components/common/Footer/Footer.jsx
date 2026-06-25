"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#Home" },
  { label: "Market", href: "#Market" },
  { label: "Choose Us", href: "#Choose Us" },
  { label: "About US", href: "#About Us" },
];

const socialIcons = [
  {
    d: "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612",
    viewBox: "0 0 16 16",
  },
  {
    d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258V8.05h2.23l-.355 2.325H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
    viewBox: "0 0 16 16",
  },
  {
    d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
    viewBox: "0 0 16 16",
  },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(3, 7, 18, 0.9)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(16px)",
      }}
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <Typography
              variant="h5"
              className="font-black tracking-tighter text-2xl"
              sx={{
                background: "linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CryptoForge
            </Typography>
            <Typography variant="body2" className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Your premier destination for crypto market insights and portfolio management.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            {socialIcons.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, y: -3 }}
                className="flex justify-center items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-2.5 rounded-full backdrop-blur-sm cursor-pointer hover:border-cyan-500/50 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox={icon.viewBox}>
                  <path d={icon.d} />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <Typography variant="body2" className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} CryptoForge. All rights reserved.
          </Typography>
          <Box className="flex gap-6">
            <Typography variant="body2" className="text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors text-xs">
              Privacy Policy
            </Typography>
            <Typography variant="body2" className="text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors text-xs">
              Terms of Use
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Footer;
