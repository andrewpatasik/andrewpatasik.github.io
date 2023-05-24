import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Home from "./pages/home";

function App() {
  return (
    <div
      style={{ fontFamily: "inter, sans-serif" }}
      className="flex flex-col w-3/5 mx-auto"
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
