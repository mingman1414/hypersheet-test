import * as React from "react";

export default function IconButton({ icon, styleBorder, padding, onClick }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return <div>IconButton</div>;
}
