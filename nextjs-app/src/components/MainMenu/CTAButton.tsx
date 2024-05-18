import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#__next');

const CTAButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button
        className="border-2 border-[#111a1d] text-white py-2 px-4 bg-[#111a1d] hover:bg-[#1a2b2d] transition-colors ml-4"
        onClick={() => setIsPopupOpen(true)}
        style={{ visibility: 'visible', backgroundColor: '#111a1d' }} // Ensures button is visible
      >
        Color Simulator
      </button>

      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Color Simulator Modal"
      >
        <div style={modalContentStyle}>
          <iframe
            src="/virtual_gun_coater/coater76b8.html"
            style={iframeStyle}
            frameBorder="0"
          ></iframe>
          <button onClick={closeModal} style={closeButtonStyle}>
            &#10005;
          </button> {/* Close button */}
        </div>
      </Modal>
    </>
  );
};

// Styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10000, // High z-index
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    padding: '0',
    border: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

const modalContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: '25px',
  color: '#111a1d',
};

export default CTAButton;
