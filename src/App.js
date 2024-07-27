import SidebarNav from "./components/SidebarNav/SidebarNav";
import FormSteps from "./components/FormSteps/FormSteps";
import StepButtons from "./components/StepButtons/StepButtons";
import { useSelector } from "react-redux";

function App() {
  const activeStep = useSelector((state) => state.activeStep);
  return (
    <main className="flex justify-center min-h-screen lg:items-center bg-[#1A1B1E]">
      <div className="lg:flex hidden m-[20px] flex-row min-h-[663px] w-[1018px] bg-white rounded-[16px] p-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <SidebarNav />
        <div className={`flex-1 overflow-hidden flex flex-col  py-[25px] pr-[80px] pl-[100px] gap-[20px] ${activeStep === 6 ? 'items-center justify-center relative' : 'justify-between'}`}>
          <FormSteps/>
          <StepButtons/>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-between w-full lg:hidden">
        <div className="w-full">
          <SidebarNav/>
          <FormSteps />
        </div>
        <div className={`${activeStep > 5 ? 'hidden' : 'block'} fixed bottom-0 w-full bg-white p-[20px] z-50 shadow-[0_1px_10px_rgba(0,0,0,0.1)]`}>
          <StepButtons />
        </div>
      </div>
    </main>
  );
}

export default App;
