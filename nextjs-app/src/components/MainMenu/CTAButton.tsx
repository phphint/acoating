// CTAButton.tsx

import React, { useState } from 'react';

const CTAButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to close the modal if the background (not the content) is clicked
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
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

      {isPopupOpen && (
        <div style={popupBackgroundStyle} onClick={closeModal}>
          <div style={popupContentStyle} onClick={e => e.stopPropagation()}> {/* Prevents modal close when clicking inside */}
            <iframe
              src="/virtual_gun_coater/coater76b8.html"
              style={{ width: '100%', height: 'calc(100% - 40px)', borderRadius: '8px' }}
              frameBorder="0"
            ></iframe>
            <button
              onClick={() => setIsPopupOpen(false)}
              style={closeButtonStyle}
            >&#10005;</button> {/* Close button */}
          </div>
        </div>
      )}
    </>
  );
};

// Styles
const popupBackgroundStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContentStyle: React.CSSProperties = {
  margin: '15px',
  backgroundColor: '#fff',
  padding: '20px',
  paddingTop: '30px', // Added space for the close button
  paddingBottom: '0px', // Added space for the close button

  width: '60%',
  height: '80%',
  position: 'relative', // Needed for the absolute positioning of the close button
  borderRadius: '8px',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0px',
  right: '10px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: '25px', // Adjust as needed
  color: '#111a1d', // Adjust as needed
};

export default CTAButton;
