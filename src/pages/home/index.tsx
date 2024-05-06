import { Container } from "@mui/material";
import Navbar from "../../components/navbar";
import CustomizedSteppers from "./pageComponents/progressBar";
import TaskSelection from "./pageComponents/taskSelection";
import TaskSelectionHead from "./pageComponents/taskSelectionHead";
import BookingSection from "./pageComponents/bookingSection";
import Footer from "../../components/footer";
import { useState } from "react";

import Schedule from "./pageComponents/schedule";
const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const continueNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <Navbar />
      <CustomizedSteppers currentStep={currentStep} />
      {currentStep === 0 && (
        <Container sx={{ paddingBottom: 5 }}>
          <TaskSelectionHead />
          <TaskSelection />
        </Container>
      )}
      {currentStep === 1 && <Schedule />}
      <BookingSection continueNextStep={continueNextStep} />
      <Footer />
    </>
  );
};

export default Home;
