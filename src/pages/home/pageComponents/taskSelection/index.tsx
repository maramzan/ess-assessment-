import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, TextField } from "@mui/material";
import BagImage from "../../../../assets/png/Bag.png";
import BagWhite from "../../../../assets/png/bagWhite.png";
import {
  CATEGORIES,
  SERVICES,
  TASK,
  TASK_SELECTION,
} from "../../../../constants";
import theme from "../../../../utils/theme";
import React, { useCallback, useState } from "react";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import ServicesCard from "../serviceCard";
import RowRadioButtonsGroup from "../checkbox";
import MyDropzone from "../dropzone";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
}));

export default function TaskSelection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  const checkService = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedCategory = e.currentTarget.innerText;
    if (selectedTags.includes(selectedCategory)) {
      setSelectedTags((prev) => prev.filter((tag) => tag !== selectedCategory));
    } else {
      // selectedTags.length < 1 &&
      setSelectedTags([selectedCategory]);
    }
  };

  const handleServiceClick = useCallback((serviceName: string) => {
    setSelectedService(serviceName);
  }, []);

  const handleTaskClick = useCallback((taskName: string) => {
    setSelectedTask(taskName);
  }, []);

  return (
    <div>
      {TASK_SELECTION.map((item) => {
        return (
          <Accordion
            key={item.id}
            sx={{
              marginTop: 5,
              "& .MuiAccordion-region": {
                ...(item.id === 1 ? { height: "auto" } : {}),
              },
              ".MuiAccordionSummary-content": {
                display: "flex",
                justifyContent: "space-between",
              },
              "& .MuiAccordionDetails-root": {
                ...(item.id === 1 ? { display: "block" } : {}),
              },
            }}
          >
            <AccordionSummary
              sx={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontSize={24} fontWeight={600} display={"flex"}>
                {item.heading}

                <span style={{ fontWeight: 400, marginLeft: "10px" }}>
                  {item.id === 1 && selectedTags.map((tag) => `• ${tag}`)}
                  {item.id === 2 && selectedService && `• ${selectedService}`}
                  {item.id === 3 && selectedTask && `• ${selectedTask}`}
                </span>
              </Typography>
              <Typography
                fontSize={16}
              >{`${selectedTags.length}/3`}</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ display: "flex" }}>
              {item.id === 1 && (
                <>
                  {CATEGORIES.map((category) => (
                    <Box
                      onClick={checkService}
                      key={category}
                      sx={{
                        ...classes.categoryTag,
                        ...(selectedTags.includes(category) &&
                          classes.selectedTag),
                      }}
                    >
                      <img
                        src={
                          selectedTags.includes(category) ? BagWhite : BagImage
                        }
                        alt="Bag"
                      />
                      <Typography
                        color={
                          selectedTags.includes(category) ? "white" : "black"
                        }
                        fontSize={20}
                        fontWeight={500}
                        marginLeft={2}
                      >
                        {category}
                      </Typography>
                    </Box>
                  ))}
                  <Typography
                    fontSize={24}
                    color={theme.palette.text.secondary}
                  >
                    Need HVAC or Water filtration services?{" "}
                    <span
                      style={{ fontWeight: 600, textDecoration: "underline" }}
                    >
                      Call to request Home Advisor
                    </span>
                  </Typography>
                </>
              )}

              {item.id === 2 &&
                SERVICES.map((service) => {
                  return (
                    <Box
                      key={service.id}
                      onClick={() => handleServiceClick(service?.name)}
                      sx={{ paddingRight: 2 }}
                    >
                      <ServicesCard service={service} key={service.id} />
                    </Box>
                  );
                })}

              {item.id === 3 &&
                TASK.map((task) => {
                  return (
                    <Box
                      key={task.id}
                      onClick={() => handleTaskClick(task?.name)}
                      sx={{ paddingRight: 2 }}
                    >
                      <ServicesCard service={task} key={task.id} />
                    </Box>
                  );
                })}

              {item.id === 4 && (
                <Box sx={{ width: "100%", padding: "0 20px" }}>
                  <RowRadioButtonsGroup title="Question 1:" />
                  <RowRadioButtonsGroup title="Question 2:" />
                  <RowRadioButtonsGroup title="Question 3:" />
                  <Typography marginTop={2} fontSize={16} fontWeight={600}>
                    Note
                  </Typography>
                  <TextField
                    sx={{ width: "100%", marginTop: 1 }}
                    id="outlined-multiline-static"
                    placeholder="Describe the problem, the size, dimensions etc"
                    multiline
                    rows={5}
                  />
                  <Typography marginTop={2} fontSize={16} fontWeight={600}>
                    Attach An Image
                  </Typography>
                  <MyDropzone />
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const classes = {
  categoryTag: {
    cursor: "pointer",
    padding: "10px 20px",
    border: "2px solid rgba(0,0,0,0.15)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "16px",
    margin: "0 10px 10px 0",
  },
  selectedTag: {
    backgroundColor: theme.palette.secondary.main,
  },
  accordionSummary: {
    marginTop: 5,
    padding: 1,
  },
};
