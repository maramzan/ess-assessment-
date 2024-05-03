import Navbar from "../../components/navbar";
import CustomizedSteppers from "./pageComponents/progressBar";
import TaskSelectionHead from "./pageComponents/taskSelectionHead";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CustomizedSteppers />
      <TaskSelectionHead />
    </div>
  );
};

export default Home;
