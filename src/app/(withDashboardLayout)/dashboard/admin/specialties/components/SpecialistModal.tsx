import CustomFileUploader from "@/components/Forms/CustomFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import CustomModal from "@/components/Shared/CustomModal/CustomModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialties.api";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import {   FieldValues } from "react-hook-form";
import { toast } from "sonner";








type Tprops ={
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const SpecialistModal = ({open, setOpen}:Tprops) => {
    const [createSpecialty] = useCreateSpecialtyMutation();
 

    const handleFormSubmit = async(values:FieldValues) => {
const data = modifyPayload(values);
try {
    const res = await createSpecialty(data).unwrap();
 if(res?.id){
    toast.success("Specialty created successfully");
    setOpen(false)
 }

} catch (error:any) {
    console.error(error.message);
}
    }
 
    return (
  <CustomModal open={open} setOpen={setOpen} title="Create a new Specialty">
 <PHForm onSubmit={handleFormSubmit}>
<Grid container spacing='2'>
<Grid item md={6}>
<PHInput name="title" label="Title"/>
</Grid>
<Grid item md={6}>
<CustomFileUploader name="file" label="Upload File"/>
</Grid>
</Grid>
<Button sx={{
    mt:1
}} type="submit">Create</Button>
 </PHForm>
    </CustomModal>
 );
};

export default SpecialistModal;