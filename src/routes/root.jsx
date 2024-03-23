import { Outlet } from "react-router-dom";
import { Header } from "../layout/header";
import "./root.styles.scss";
import { MobileHeader } from "../layout/mobile-header";
import { useGlobalContext } from "../utils/context";

export default function Root() {
  const { activeMobile, handleMobileMenu } = useGlobalContext();

  const handleBodyMenu = () => {
    if (activeMobile) {
      handleMobileMenu();
    }
  };

  return (
    <div className="layout">
      <MobileHeader />
      <Header />
      <main
        onClick={handleBodyMenu}
        className={`main ${activeMobile ? "active" : ""}`}
      >
        <Outlet />
      </main>
    </div>
  );
}
