import { ReactNode } from "react";
import { LiaTimesSolid } from "react-icons/lia";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
  }
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-tl-xl rounded-tr-xl shadow p-6 transition-all
           absolute bottom-0 w-full
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <LiaTimesSolid />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;