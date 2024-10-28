import { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { title } from "./primitives";

export default function TextScroller(
  textList: String[],
  startPos: number,
  endPos: number
) {
  const y = useMotionValue(startPos);
  const input = [startPos, (startPos + endPos) / 2, endPos];
  const output = [1, 0.4, 1];
  const opacity = useTransform(y, input, output);
  const [indexs, setIndexs] = useState([0, 1]);
  useMotionValueEvent(y, "change", (latest) => {
    if (latest === endPos) {
      setIndexs([(indexs[0] + 2) % textList.length, indexs[1]]);
    }
    if (latest === startPos) {
      setIndexs([indexs[0], (indexs[1] + 2) % textList.length]);
    }
  });
  function generateTextDiv() {
    return (
      <motion.span
        style={{ y, opacity }}
        animate={{ y: endPos }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
          repeatDelay: 2,
          repeatType: "reverse",
        }}
        className="absolute"
      >
        {indexs.map((x) => (
          <div key={`container_${textList[x]}`}>
            <h2 className={title({ color: "blue", size: "xs" })}>
              {textList[x]}
            </h2>
            <br />
          </div>
        ))}
      </motion.span>
    );
  }
  return (
    <span className="relative overflow-y-hidden overflow-x-visible h-7 w-40 inline-block translate-y-2">
      {generateTextDiv()}
    </span>
  );
}
