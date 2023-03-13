import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar/Index";

function Index() {
  return (
    <>
      <Navbar />
      <div style={{ height: "150px", width: "100%" ,background:'red'}}>
        <img
          src={require("../assets/tanesco-pc.jpg")}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <Outlet />
    </>
  );
}

export default Index;
