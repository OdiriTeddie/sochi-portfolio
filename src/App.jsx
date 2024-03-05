import "./App.scss";
import { Hero } from "./components/hero-section";
import { StorePreview } from "./components/store-preview";
import { Footer } from "./layout";
// import { Header } from "./layout/header/Header";

function App() {
  return (
    <div className="main-body">
      <Hero />
      <StorePreview />
      <Footer />
    </div>
  );
}

export default App;
