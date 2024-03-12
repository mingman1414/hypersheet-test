import React from "react";
import "./ImagePreview.css";
import Image from "next/image";

function ImagePreview({ dataUri, isFullscreen }) {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";
  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <Image
        src={dataUri} 
        alt="Mô tả hình ảnh"
        width={500}
        height={300} />
    </div>
  );
}

export default ImagePreview;
