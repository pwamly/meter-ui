import { Link, Outlet } from "react-router-dom";
import User from "./user/user";
import Card from "@mui/material/Card";
import Navbar from "../home/navbar/Index";
import Button from "@mui/material/Button";
import { useState } from "react";
import camera from "../helper";

import "./index.css";

function Index() {
  const [takePhoto, setTakePhoto] = useState(false);
  const takePic = () => {
    setTakePhoto(true);
    setTimeout(function () {
      // Run camera methods here
      camera.startCamera(160, 160);
      camera.takeSnapshot();
    }, 100); // Delay of 5 seconds (5000 milliseconds)
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "150px", width: "100%", background: "red" }}>
        <img
          src={require("../assets/tanesco-pc.jpg")}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "400px",
          background: "",
        }}
      >
        {takePhoto ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "90%",
            }}
          >
            <div id="camera-stream"></div>
            <input name="" placeholder="Enter Unit Readings (1130.7)"/>
            <div id="button-container">
              <Button variant="contained" disableElevation fullWidth>
                Save
              </Button>
              <Button
                variant="contained"
                disableElevation
                fullWidth
                color="error"
                disabled
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div id="photo2">
            <img
              id="photo"
              src={require("../assets/cameraicon.png")}
              onClick={() => {
                takePic();
              }}
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default Index;
