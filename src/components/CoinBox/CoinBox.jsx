import { Box, Paper } from "@mui/material";

function CoinBox({children, onClick}) {
    return ( 
        <Box 
            onClick={onClick}
            className="p-4 rounded-md flex-1 cursor-pointer transition-all hover:bg-white/40"  
            sx={{ 
                flexGrow: 1, 
                backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            {children}  
        </Box>
     );
}

export default CoinBox ;
