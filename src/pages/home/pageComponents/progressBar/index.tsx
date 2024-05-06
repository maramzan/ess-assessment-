import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { steps } from "../../../../constants";
import theme from "../../../../utils/theme";
import { Box, Typography, colors } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const activeCompletedStyle = {
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
};

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  zIndex: 1,
  color: "#fff",
  width: 24,
  height: 24,
  borderRadius: "50%",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: colors.common.black,
  ...(ownerState.active && activeCompletedStyle),
  ...(ownerState.completed && activeCompletedStyle),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed && <CheckIcon sx={{ fontSize: 18 }} />}
    </ColorlibStepIconRoot>
  );
}

export default function CustomizedSteppers({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <Box>
      <Typography textAlign="center" variant="h5" fontWeight={600}>
        Project Progress
      </Typography>

      <Stepper
        alternativeLabel
        activeStep={currentStep}
        connector={<ColorlibConnector />}
        sx={{ marginTop: 5 }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
