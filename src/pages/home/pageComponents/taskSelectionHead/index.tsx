import { Container, Typography } from "@mui/material";

const TaskSelectionHead = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography fontSize={32} fontWeight={600}>
        Task Selection
      </Typography>
      <Typography fontSize={24}>
        Select your desired category and service to find the right task you need
        done!
      </Typography>
    </Container>
  );
};

export default TaskSelectionHead;
