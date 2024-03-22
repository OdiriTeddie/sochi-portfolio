import { Outlet } from "react-router-dom";
import { Header } from "../layout/header";
// import { Footer } from "../component/footer";
import "./root.styles.scss";

export default function Root() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
