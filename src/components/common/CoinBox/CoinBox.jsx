import { Box, Paper } from "@mui/material";

function CoinBox({children, onClick}) {
    return ( 
        <Box 
            onClick={onClick}
            className="p-4 rounded-xl flex-1 cursor-pointer transition-all duration-300"  
            sx={{ 
                flexGrow: 1, 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                },
            }}
        >
            {children}  
        </Box>
     );
}

export default CoinBox ;
