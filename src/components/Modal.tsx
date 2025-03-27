import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
  modalOpen: boolean;
}

const modalVariants = {
  hidden: { 
    y: "100svh",
    opacity: 0,
  },
  visible: { 
    y: "0",
    opacity: 1,
  },
  exit: { 
    y: "100svh",
    opacity: 0,
  },
}

export default function Modal({ children, handleClose, modalOpen }: ModalProps) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          max-h-10/12
          w-5xl
          max-w-10/12
          bg-neutral-50
          rounded-lg
          flex flex-column 
          items-center
          justify-center
          relative
          border-4 border-lime-500
          "
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {modalOpen && children}

        <div className="absolute top-0 right-0 m-2 p-2">
          <button 
            className="bg-neutral-200 p-2 rounded-full"
            onClick={handleClose}
          >
            X
          </button>
        </div>

      </motion.div>
    </Backdrop>
  );
}