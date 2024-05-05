import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Typography } from "@mui/material";

export default function RowRadioButtonsGroup({ title }: { title: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      <Typography marginRight={1} fontWeight={500} fontSize={24}>
        {title}
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <Box
            sx={{
              border: "2px solid rgba(0,0,0,0.15)",
              padding: "0 10px",
              borderRadius: 2,
              marginRight: 2,
            }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </Box>
          <Box
            sx={{
              border: "2px solid rgba(0,0,0,0.15)",
              padding: "0 10px",
              borderRadius: 2,
              marginRight: 2,
            }}
          >
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
