"use client"

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from "@/redux/api/doctor.api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete"
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";


const DoctorsPage = () => {
    const [ isModalOpen, setIsModalOOpen] = useState(false);
    const [deleteDoctor] = useDeleteDoctorMutation();
    const query:Record<string,any> = {};
    
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedTerm =  useDebounced({
        searchQuery:searchTerm,
        delay:600
    });

    if(!!debouncedTerm){

        query["searchTerm"]=searchTerm;
    }



    const {data, isLoading} = useGetAllDoctorsQuery({...query});
    const doctors = data?.doctors;
    const meta = data?.meta;
    
    const handleDelete = async(id:string) => {
        console.log(id);
        try {
            const res = await     deleteDoctor(id).unwrap();
            if(res.id){
                toast.success("Specialty deleted successfully!")
            }
        
        } catch (error:any) {
            console.log(error);
        }
         
         }
        
    const columns: GridColDef[] = [
        { field: 'name',   flex:1, headerName:"Name"},
        { field: 'email',   flex:1, headerName:"Email"},
        { field: 'contactNumber',   flex:1, headerName:"Contact Number"},
 
        { field: 'action',  flex:1, headerAlign:"center",align:"center", headerName:"Action", renderCell:({row}) => {
            return <Box>
               <IconButton onClick={()=>handleDelete(row.id)} aria-label='delete'><DeleteIcon/></IconButton>
            </Box>
        }},
       
      ];
 
 return (
 <Box>
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsModalOOpen(true)}>
            Create Doctor
        </Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOOpen}/>
        <TextField onChange={(e) =>  setSearchTerm(e.target.value)} size="small" placeholder="search doctors"/>
    </Stack>
    {!isLoading ?<Box my={5}>
        
        <DataGrid
            rows={doctors}
            columns={columns}
          
          />
        </Box> : <h1>Loading...</h1>}
 </Box>
 );
};

export default DoctorsPage;