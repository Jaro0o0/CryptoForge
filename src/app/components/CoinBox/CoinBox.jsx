import { Paper } from "@mui/material";

function CoinBox({children}) {
    return ( 
        <Paper elevation={4} className="p-4">
            {children}
        </Paper>
     );
}

export default CoinBox ;
