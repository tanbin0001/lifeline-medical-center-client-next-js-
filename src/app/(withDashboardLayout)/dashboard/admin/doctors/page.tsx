"use client"

import { Box, Button, Stack } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
    const [ isModalOpen, setIsModalOOpen] = useState(false)
 return (
 <Box>
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsModalOOpen(true)}>
            Create Doctor
        </Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOOpen}/>
    </Stack>
 </Box>
 );
};

export default DoctorsPage;