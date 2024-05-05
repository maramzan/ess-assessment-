import { Box, Stack, Typography } from "@mui/material";
import CustomButton from "../../../../components/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BookingSection = () => {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CustomButton onClick={() => {}}>Continue to Booking</CustomButton>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems={"center"}
        marginTop={2}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Add Another Task
        </Typography>
        <ArrowRightAltIcon />
      </Stack>
    </Box>
  );
};

export default BookingSection;
