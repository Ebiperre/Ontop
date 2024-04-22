import React from 'react';

interface ConfirmPinInputProps {
    confirmPin: string[];
    handleConfirmPinChange: (index: number, value: string) => void;
    pinInputs: React.RefObject<HTMLInputElement>[];
    errors: string[];
}

const ConfirmPinInput: React.FC<ConfirmPinInputProps> = ({ confirmPin, handleConfirmPinChange, pinInputs, errors }) => {
    return (
        <div className='font-author text-left flex flex-col gap-1 md:gap-3'>
            <h3 className="text-2xl md:text-3xl font-medium">Confirm Transaction PIN</h3>
            <p className="text-sm md:text-base mb-5 text-grey2">Please confirm your transaction PIN.</p>
            <div className="flex mx-auto">
                {confirmPin.map((digit, index) => (
                    <input
                        key={index}
                        ref={pinInputs[index]}
                        type="number"
                        maxLength={1}
                        className="w-12 h-12 text-3xl border border-gray-300 rounded-lg text-center mr-2 input-focus"
                        value={digit}
                        onChange={(e) => handleConfirmPinChange(index, e.target.value)}
                    />
                ))}
            </div>
            <span className="text-xs text-center text-deleteRed mt-1">
                {errors.includes('Confirm Transaction PIN is required') ? 'Confirm Transaction PIN is required' : errors.includes('Transaction PIN and Confirm PIN must match') ? 'Transaction PIN and Confirm PIN must match' : ''}
            </span>
        </div>
    );
};

export default ConfirmPinInput;
