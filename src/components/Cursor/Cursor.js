import React, { useState, useRef, useEffect } from "react";
import "./Cursor.scss";
import { motion } from "framer-motion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Cursor = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(100);

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      width: circleSize,
      height: circleSize,
      x: circlePosition.x - circleSize / 2,
      y: circlePosition.y - circleSize / 2,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="Cursor"
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0,
      }}
    ></motion.div>
  );
};

export default Cursor;
