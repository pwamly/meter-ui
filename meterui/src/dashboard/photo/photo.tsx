import { Link, Outlet } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


function Photo(){
    const webcamRef = useRef<any>(null);
    const [imgSrc, setImgSrc] = useState<any>(null);
    const [takePhoto, setTakePhoto] = useState(false);
  
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    const videoConstraints = {
      width: 100,
      height: 180,
      facingMode: { exact: "environment" },
    };

    return(
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
            {imgSrc==null?<div id="camera-stream">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                minScreenshotWidth={80}
                minScreenshotHeight={80}
              />
            </div>:<img src={imgSrc} alt="img" />}
            <input name="" placeholder="Enter Unit Readings (1130.7)" />
            <div id="button-container">
              {imgSrc==null?<Button variant="contained" disableElevation fullWidth onClick={()=>capture()}>
                takePhoto
              </Button>:<Button variant="contained">Save</Button>}
              <Button
                variant="contained"
                disableElevation
                fullWidth
                color="error"
                onClick={()=>setImgSrc(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div id="photo2">
            <img
              id="photo"
              src={require("../../assets/cameraicon.png")}
              onClick={() => {setTakePhoto(true)}}
            />
          </div>
        )}
      </Card>
    )
}

export default Photo;

