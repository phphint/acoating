import React, { useState, useEffect } from 'react';

interface ModalProps {
    title: string;
    description: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white text-black w-full max-w-md m-auto flex-col flex ">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold">{title}</h1>
                    <button onClick={onClose} className="text-black">
                        {/* Icon or text to close modal */}
                        X
                    </button>
                </div>
                <div className="mt-2">
                    <p>{description}</p>
                </div>
                <div className="mt-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
