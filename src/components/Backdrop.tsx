
import { motion } from "framer-motion";

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Backdrop({ children, onClick }: BackdropProps) {

  return (
    <motion.div 
      className={`
        absolute top-0 left-0 w-full h-full max-h-[calc(100svh-73px)] md:max-h-[calc(100svh-90px)]
        bg-neutral-400/50 backdrop-blur-md z-[500]
        flex items-center justify-center
      `}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

