import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <PlanPicker />

      <Footer />
    </div>
  );
}

export default App;