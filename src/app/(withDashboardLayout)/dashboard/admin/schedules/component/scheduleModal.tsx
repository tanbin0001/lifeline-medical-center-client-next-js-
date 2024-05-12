
import CustomDatePicker from "@/components/Forms/CustomDatePicker";
import CustomTimePicker from "@/components/Forms/CustomTimePicker";
import PHForm from "@/components/Forms/PHForm";
import CustomModal from "@/components/Shared/CustomModal/CustomModal";
import { useCreateScheduleMutation } from "@/redux/api/schedule.api";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal =  ({ open, setOpen }: TProps) => {
const [createSchedule] = useCreateScheduleMutation();

    const handleFormSubmit = async (values: FieldValues) => {
  
        values.startDate = dateFormatter(values.startDate);
        values.endDate = dateFormatter(values.endDate);
        values.startTime = timeFormatter(values.startTime);
        values.endTime = timeFormatter(values.endTime);
        try {
          const res = await createSchedule(values).unwrap();
          console.log(res);
          if (res?.length) {
            toast.success("Schedules created successfully!");
            setOpen(false);
          }
        } catch (err: any) {
          console.error(err.message);
        }
    };

    return (
        <CustomModal open={open} setOpen={setOpen} title="Create Schedule">
            <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={2} alignItems='center' justifyItems="center" sx={{
                    width:"400px"
                }}>
                    <Grid item md={12}>
                        <CustomDatePicker name="startDate" label="Start Date" />
                    </Grid>
                    <Grid item md={12}>
                        <CustomDatePicker name="endDate" label="End Date" />
                    </Grid>
                    <Grid item md={6}>
                        <CustomTimePicker name="startTime" label="Start Date" />
                    </Grid>
                    <Grid item md={6}>
                        <CustomTimePicker name="endTime" label="End Date" />
                    </Grid>
                </Grid>
                <Button  type="submit" sx={{ mt: 1 }}>
                    Create schedule
                </Button>
            </PHForm>
        </CustomModal>
    );
};

export default ScheduleModal;
