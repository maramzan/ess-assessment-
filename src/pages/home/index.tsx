import { Container } from "@mui/material";
import Navbar from "../../components/navbar";
import CustomizedSteppers from "./pageComponents/progressBar";
import TaskSelection from "./pageComponents/taskSelection";
import TaskSelectionHead from "./pageComponents/taskSelectionHead";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <CustomizedSteppers />
        <TaskSelectionHead />
        <TaskSelection />
      </Container>
    </>
  );
};

export default Home;
