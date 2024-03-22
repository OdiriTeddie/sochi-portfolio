import "./App.scss";
import { Hero } from "./components/hero-section";
import { StorePreview } from "./components/store-preview";
import { Footer } from "./layout";
// import { Header } from "./layout/header/Header";

function App() {
  return (
    <section className="main-body">
      <Hero />
      <StorePreview />
      <Footer />
    </section>
  );
}

export default App;
