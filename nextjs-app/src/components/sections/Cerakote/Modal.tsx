import React from 'react';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  url: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-xl w-full">
        <button onClick={handleClose} className="float-right font-bold">X</button>
        <iframe src={url} title="Test Result" className="w-full h-80" allowFullScreen />
      </div>
    </div>
  );
};

export default Modal;
