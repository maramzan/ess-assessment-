import { Container } from "@mui/material";
import Navbar from "../../components/navbar";
import CustomizedSteppers from "./pageComponents/progressBar";
import TaskSelection from "./pageComponents/taskSelection";
import TaskSelectionHead from "./pageComponents/taskSelectionHead";
import BookingSection from "./pageComponents/bookingSection";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ paddingBottom: 5 }}>
        <CustomizedSteppers />
        <TaskSelectionHead />
        <TaskSelection />
        <BookingSection />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
