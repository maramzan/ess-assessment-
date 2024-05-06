import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import DateCalendarValue from "../calender";
import { TIME_SLOTS } from "../../../../constants";
import theme from "../../../../utils/theme";

const Schedule = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography fontSize={32} fontWeight={600}>
        Schedule Your Task
      </Typography>
      <Box sx={classes.container}>
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Select a day
          </Typography>
          <DateCalendarValue />
        </Box>
        <Box marginLeft={4}>
          <Typography fontSize={24} fontWeight={700}>
            Select a time
          </Typography>
          <Box>
            {TIME_SLOTS.map((slot) => (
              <Box marginTop={3} key={slot.title}>
                <Typography fontSize={20} marginBottom={1} fontWeight={600}>
                  {slot.title}
                </Typography>
                <FormControl>
                  <RadioGroup
                    color={theme.palette.secondary.main}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <Stack
                      direction={"row"}
                      gap={1}
                      display={"flex"}
                      flexWrap={"wrap"}
                    >
                      {slot.timeSlots.map((time) => (
                        <FormControlLabel
                          sx={classes.radioLabel}
                          key={time}
                          value={time}
                          control={<Radio sx={classes.radio} />}
                          label={time}
                        />
                      ))}
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Schedule;
const classes = {
  radioLabel: {
    border: "2px solid rgba(0,0,0,0.15)",
    padding: "0 10px",
    borderRadius: 3,
    marginRight: 2,
  },
  container: {
    border: "1px solid rgba(0,0,0,0.15)",
    marginTop: 3,
    padding: 3,
    borderRadius: 4,
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    justifyContent: {
      xs: "center",
      sm: "space-between",
    },
  },
  radio: {
    color: theme.palette.secondary.main,
    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  },
};
