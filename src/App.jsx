import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";
import Footer from "./components/Footer";
import Waitlist from "./components/Waitlist";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <PlanPicker />

      <Waitlist />

      <Footer />
    </div>
  );
}

export default App;