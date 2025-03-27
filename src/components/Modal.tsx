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
            w-[clamp(50%,700px,90%)]
            h-[min(50%, 300px]
            bg-neutral-50
            m-auto
            p-8
            rounded-lg
            flex flex-column 
            items-center
            justify-center
            relative
            "
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 right-0 m-2 p-2">
            <button 
              className="bg-neutral-200 p-2 rounded-full"
              onClick={handleClose}
            >
              X
            </button>
          </div>

          {modalOpen && children}
        </motion.div>
    </Backdrop>
  );
}