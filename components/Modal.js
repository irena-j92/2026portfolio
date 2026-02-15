import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1c1c1c] p-6 max-w-5xl w-full mx-4">
        <button
          onClick={onClose}
          className="float-right text-gray-600 hover:text-gray-800"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
