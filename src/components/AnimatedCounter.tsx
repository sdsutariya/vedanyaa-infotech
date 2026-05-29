import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const isPercent = value.includes("%");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numeric);
    }
  }, [isInView, motionValue, numeric]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + (isPercent ? "%" : "+") + suffix;
      }
    });
    return unsub;
  }, [springValue, isPercent, suffix]);

  return <span ref={ref} />;
}
