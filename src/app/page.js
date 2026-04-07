import { Container } from "@mui/system";
import Image from "next/image";
import Header from "./components/Header/Header";
import { Typography } from "@mui/material";
import { Button }from "@mui/material";


import Table from "./components/Table/Table.jsx";


export default function Home() {
  return (
      <>
        <section className="w-full h-screen bg-linear-to-r from-cyan-500 to-purple-500 relative">
          <Container className='absolute top-[20%] left-[10%]'>
              <Header/>
              <Typography variant="h1" component='h3'>Crypto</Typography>
              <Typography component='p'>Description</Typography>
              <Button variant="outlined">Outlined</Button>

          </Container>
        </section>
        <section className="py-[95px] px-0">
          <Container>
            <Typography variant="h1" component='h3' align="center" gutterBottom>Today's Crypto Prices</Typography>
            <Table/>
          </Container>
        </section>
      </>
  );
}
