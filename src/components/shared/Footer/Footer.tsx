import { Box, Container, Link, Stack, Typography } from "@mui/material";
import facebookIcon from '@/assets/landing_page/facebook.png'
import Image from "next/image";

const Footer = () => {
 return (
 <Box  bgcolor="rgb(17, 26, 34) " py={5}>
  <Container >
  <Stack direction="row" gap={4} justifyContent="center"  >
        <Typography color="#fff" component={Link} href="/consultation">Consultation</Typography>
        <Typography color="#fff" component={Link} href="/health">Health Plans</Typography>
        <Typography color="#fff" component={Link} href="/medicine">Medicine</Typography>
        <Typography color="#fff" component={Link} href="/diagnostics">Diagnostics</Typography>
        <Typography color="#fff" component={Link} href="/ngos">NGOs</Typography>
    </Stack>
  <Stack direction="row" gap={2} justifyContent="center"  py={3}>
      <Image  src={facebookIcon}  width={30} height={30} alt="facebook icon "/>
      <Image  src={facebookIcon}  width={30} height={30} alt="facebook icon "/>
      <Image  src={facebookIcon}  width={30} height={30} alt="facebook icon "/>
    </Stack>
    <div className="border-b-[1px] border-dashed">

    </div>
    <Stack direction="row" gap={2} justifyContent="center"  py={3}>
    <Typography color="#fff" component="p">&copy;2024 lifeline medical center</Typography>
    </Stack>
  </Container>
 </Box>
 );
};

export default Footer;