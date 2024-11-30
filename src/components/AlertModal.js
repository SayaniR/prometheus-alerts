import React from 'react';

const AlertModal = ({isOpen,toggleModal}) => {
    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-100 bg-opacity-10 z-20"
                    onClick={toggleModal}
                ></div>
            )}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div
                        className="bg-white rounded-lg  p-6 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800"></h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={toggleModal}
                            >
                                &times;
                            </button>
                        </div>

                        
                        <p className="text-gray-600">
                            
                        </p>

                       
                    </div>
                </div>
            )}
        </div>
    );
};


export default AlertModal;
