import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
function Reveal({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.2 },
      variants,
      transition: { delay },
      children
    }
  );
}
export {
  Reveal as R
};
