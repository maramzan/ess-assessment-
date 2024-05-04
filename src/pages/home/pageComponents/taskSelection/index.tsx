import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";
import BagImage from "../../../../assets/png/Bag.png";
import BagWhite from "../../../../assets/png/bagWhite.png";
import { CATEGORIES } from "../../../../constants";
import theme from "../../../../utils/theme";
import React, { useState } from "react";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  //
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
}));

export default function TaskSelection() {
  const [expanded, setExpanded] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const checkService = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedCategory = e.currentTarget.innerText;
    if (selectedTags.includes(selectedCategory)) {
      setSelectedTags((prev) => prev.filter((tag) => tag !== selectedCategory));
    } else {
      selectedTags.length < 3 &&
        setSelectedTags((prev) => [...prev, selectedCategory]);
    }
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots["transition"] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          marginTop: 5,
          "& .MuiAccordion-region": {
            height: expanded ? "auto" : 0,
          },
          ".MuiAccordionSummary-content": {
            display: "flex",
            justifyContent: "space-between",
          },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          sx={{
            marginTop: 5,
            padding: 1,
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize={24} fontWeight={600} display={"flex"}>
            Job Category{" "}
            {selectedTags.map((tag) => (
              <span key={tag} style={{ fontWeight: 400, marginLeft: "10px" }}>
                {`• ${tag}`}
              </span>
            ))}
          </Typography>
          <Typography fontSize={16}>{`${selectedTags.length}/3`}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          {CATEGORIES.map((category) => (
            <Box
              onClick={checkService}
              key={category}
              sx={{
                ...classes.categoryTag,
                ...(selectedTags.includes(category) && classes.selectedTag),
              }}
            >
              <img
                src={selectedTags.includes(category) ? BagWhite : BagImage}
                alt="Bag"
              />
              <Typography
                color={selectedTags.includes(category) ? "white" : "black"}
                fontSize={20}
                fontWeight={500}
                marginLeft={2}
              >
                {category}
              </Typography>
            </Box>
          ))}
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Need HVAC or Water filtration services?{" "}
            <span style={{ fontWeight: 600, textDecoration: "underline" }}>
              Call to request Home Advisor
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const classes = {
  categoryTag: {
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
};
