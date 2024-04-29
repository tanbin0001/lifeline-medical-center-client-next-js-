import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
 return (
 <Container>
<Stack py={2} alignItems="center" direction="row" justifyContent="space-between">
    <Typography variant="h5" component="h1" fontWeight={600}>LifeLine Medical Center</Typography>
    <Stack direction="row" gap={4}  justifyContent={"space-between"}>
        <Typography component={Link} href="/consultation">Consultation</Typography>
        <Typography component={Link} href="/health">Health Plans</Typography>
        <Typography component={Link} href="/medicine">Medicine</Typography>
        <Typography component={Link} href="/diagnostics">Diagnostics</Typography>
        <Typography component={Link} href="/ngos">NGOs</Typography>
    </Stack>
    <Button component={Link} href="/login">Login</Button>
</Stack>

 </Container>
 );
};

export default Navbar;