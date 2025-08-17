import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef();

    // Close modal on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Close modal on ESC key press
    useEffect(() => {
        function handleEsc(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        } else {
            document.removeEventListener("keydown", handleEsc);
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
            <div
                ref={modalRef}
                className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative"
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                >
                    &#x2715;
                </button>
                {children}
            </div>
        </div>
    );
}
export default Modal