import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <PlanPicker />

      <footer className="mt-auto bg-[#000000] px-20 py-6 text-center text-xl text-[#EEEEEE]">
        <p>All plans are billed per seat, every month.</p>
      </footer>
    </div>
  );
}

export default App;