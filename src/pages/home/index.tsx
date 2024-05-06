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

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Container sx={{ paddingBottom: 5 }}>
            <TaskSelectionHead />
            <TaskSelection />
          </Container>
        );
      case 1:
        return <Schedule />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <CustomizedSteppers currentStep={currentStep} />
      {renderStepContent(currentStep)}
      <BookingSection continueNextStep={continueNextStep} />
      <Footer />
    </>
  );
};

export default Home;
