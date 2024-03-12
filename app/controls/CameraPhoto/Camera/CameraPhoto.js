import React, { useState, useRef } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "../ImagePreview/ImagePreview";

function CameraPhoto({ cameraCallback,ContactImageURL,dataTranslate }) {
  const [dataUri, setDataUri] = useState("");
  const [dialog, setDialog] = useState({
    isVisible: false,
    message: "",
  });
  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
    cameraCallback(dataUri);
  }

  function handleCameraError(error) {
    if (error.toString().includes("Permission denied")) {
      setDialog({
        isVisible: true,
        message: dataTranslate?.please_allow_the_camera_to_access_the_app,
      });
    }
  }
  console.log("ContactImageURL",ContactImageURL);
  console.log("dataUri",dataUri);
  const isFullscreen = false;
  return (
    <div>
      {dataUri||ContactImageURL!="" ? (
        <ImagePreview dataUri={ContactImageURL!=""?ContactImageURL:dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          onCameraError={handleCameraError}
          isFullscreen={isFullscreen}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
        />
      )}
    </div>
  );
}

export default CameraPhoto;
