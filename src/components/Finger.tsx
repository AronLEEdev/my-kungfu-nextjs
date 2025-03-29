"use client";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
export default function Finger() {
  const [showFinger, setShowFinger] = useState(true);
  let timeout: any = null;
  useEffect(() => {
    const handleScroll = () => {
      setShowFinger(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
        ) {
          setShowFinger(false);
        } else {
          setShowFinger(true);
        }
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  if (showFinger)
    return (
      <div className="fixed bottom-2.5">
        <motion.div
          style={{
            fontSize: "1.25rem",
            borderRadius: "50%"
          }}
          animate={{
            scale: [1, 1.2, 1] // 从1放大到1.2，再回到1
          }}
          transition={{
            duration: 1, // 动画持续时间
            repeat: Infinity, // 无限循环
            ease: "easeInOut" // 缓动效果
          }}
        >
          &#128071;
        </motion.div>
      </div>
    );
}
