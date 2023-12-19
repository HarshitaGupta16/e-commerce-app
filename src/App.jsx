import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div style={{ height: "70vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
