import React from 'react';

interface PinInputProps {
    pin: string[];
    handlePinChange: (index: number, value: string) => void;
    pinInputs: React.RefObject<HTMLInputElement>[];
    errors: string[];
}

const PinInput: React.FC<PinInputProps> = ({ pin, handlePinChange, pinInputs, errors }) => {
    return (
        <div className='font-author text-left flex flex-col gap-1 md:gap-3'>
            <h3 className="text-2xl md:text-3xl font-medium">Enter Transaction PIN</h3>
            <p className="text-sm md:text-base mb-5 text-grey2">Please set a 4-digit transaction PIN for your account. Your pin would be used to authenticate your request for transactions and authentications.</p>
            <div className="flex mx-auto">
                {pin.map((digit, index) => (
                    <input
                        key={index}
                        ref={pinInputs[index]}
                        type="number"
                        maxLength={1}
                        className="w-12 h-12 text-3xl border border-gray-300 rounded-lg text-center mr-2 input-focus"
                        value={digit}
                        onChange={(e) => handlePinChange(index, e.target.value)}
                    />
                ))}
            </div>
            <span className="text-xs text-center text-deleteRed mt-1">
                {errors.includes('Transaction PIN must be a 4-digit number') ? 'Transaction PIN must be a 4-digit number' : ''}
            </span>
        </div>
    );
};

export default PinInput;
