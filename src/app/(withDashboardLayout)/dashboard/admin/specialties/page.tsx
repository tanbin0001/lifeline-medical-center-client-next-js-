"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React from 'react';
import SpecialistModal from './components/SpecialistModal';
import { useDeleteSpecialtyMutation, useGetSpecialtiesQuery } from '@/redux/api/specialties.api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';

import DeleteIcon from "@mui/icons-material/Delete"
import { toast } from 'sonner';






const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const {data, isLoading} = useGetSpecialtiesQuery({});
    const [deleteSpecialty]=useDeleteSpecialtyMutation();
  
const handleDelete = async(id:string) => {
try {
    const res = await     deleteSpecialty(id).unwrap();
    if(res.id){
        toast.success("Specialty deleted successfully!")
    }

} catch (error:any) {
    console.log(error);
}
 
 }


    const columns: GridColDef[] = [
        { field: 'title',   width: 400 , headerName:"Title"},
        { field: 'icon',  flex:1 , headerName:"Icon", renderCell:({row}) => {
            return <Box>
                <Image src={row.icon} alt='icon' width={30} height={30}/>
            </Box>
        }},
        { field: 'action',  flex:1, headerAlign:"center",align:"center", headerName:"Action", renderCell:({row}) => {
            return <Box>
               <IconButton onClick={()=>handleDelete(row.id)} aria-label='delete'><DeleteIcon/></IconButton>
            </Box>
        }},
       
      ];
      
    return (
 <Box>
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
<Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
<SpecialistModal  open={isModalOpen} setOpen={setIsModalOpen}/>
<TextField placeholder='Search Specialist' size='small'/>
    </Stack>
    {!isLoading ?<Box my={5}>
        
        <DataGrid
            rows={data}
            columns={columns}
          
          />
        </Box> : <h1>Loading...</h1>}
 </Box>
    );
};

export default SpecialtiesPage;