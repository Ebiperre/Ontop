import React, { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import UsernameInput from './UsernameInput';
import PinInput from './PinInput';
import ConfirmPinInput from './ConfirmPinInput';
import BillingInformationInput from './BillingInformationInput';
import SuccessMessage from './SuccessMessage';

const steps = ['Enter Username', 'Enter Transaction PIN', 'Confirm Transaction PIN', 'Billing Information', 'Congratulations!'];

const SignUpFormStepper: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(1);
    const [username, setUsername] = useState<string>('');
    const [pin, setPin] = useState<string[]>(['', '', '', '']);
    const [confirmPin, setConfirmPin] = useState<string[]>(['', '', '', '']);
    const [errors, setErrors] = useState<string[]>([]);
    const pinInputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const validate = () => {
        const errors: string[] = [];
        if (activeStep === 1 && !username.trim()) {
            errors.push('Username is required');
        }
        if (activeStep === 2) {
            if (!pin.every((digit) => digit.trim())) {
                errors.push('Transaction PIN is required');
            } else if (pin.some((digit) => digit.length !== 1 || !/^\d+$/.test(digit))) {
                errors.push('Transaction PIN must be a 4-digit number');
            }
        }
        if (activeStep === 3) {
            if (!confirmPin.every((digit) => digit.trim())) {
                errors.push('Confirm Transaction PIN is required');
            } else if (confirmPin.join('') !== pin.join('')) {
                errors.push('Transaction PIN and Confirm PIN must match');
            }
        }
        setErrors(errors);
        return errors.length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            if (activeStep === 4) {
                setActiveStep(5);
            } else {
                setActiveStep(activeStep + 1);
            }
        }
    };

    const handleBack = () => {
        setActiveStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const handlePinChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);
            if (value && index < 3) {
                pinInputs[index + 1].current?.focus();
            } else if (!value && index > 0) {
                pinInputs[index - 1].current?.focus();
            }
        }
    };

    const handleConfirmPinChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newConfirmPin = [...confirmPin];
            newConfirmPin[index] = value;
            setConfirmPin(newConfirmPin);
            if (value && index < 3) {
                pinInputs[index + 1].current?.focus();
            } else if (!value && index > 0) {
                pinInputs[index - 1].current?.focus();
            }
        }
    };

    return (
        <div className="h-screen max-w-lg mx-auto p-4 flex flex-col gap-20 justify-center items-center">
            {activeStep !== 5 && (
                <div className="flex">
                    {steps.slice(0, 4).map((label, index) => (
                        <div key={label} className="flex items-center mb-4">
                            {index > 0 && (
                                <div className={`h-0.5 flex-grow bg-gray-300 mr-2 ${activeStep > index ? 'bg-primary' : ''}`}></div>
                            )}
                            {activeStep > index ? (
                                <FiCheckCircle className="text-orange2 mr-2 h-12 w-12" />
                            ) : (
                                <div className="h-12 w-12 rounded-full border border-gray-300 mr-2 flex items-center justify-center">
                                    {index + 1}
                                </div>
                            )}
                            {index < 3 && (
                                <div className={`mx-2 border-b w-20 ${activeStep > index ? 'border-primary' : 'border-gray-300'}`}></div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <form className='w-full' onSubmit={handleSubmit}>
                <div>
                    {activeStep === 1 && (
                        <UsernameInput
                            username={username}
                            setUsername={setUsername}
                            errors={errors}
                        />
                    )}
                    {activeStep === 2 && (
                        <PinInput
                            pin={pin}
                            handlePinChange={handlePinChange}
                            pinInputs={pinInputs}
                            errors={errors}
                        />
                    )}
                    {activeStep === 3 && (
                        <ConfirmPinInput
                            confirmPin={confirmPin}
                            handleConfirmPinChange={handleConfirmPinChange}
                            pinInputs={pinInputs}
                            errors={errors}
                        />
                    )}
                    {activeStep === 4 && (
                        <BillingInformationInput />
                    )}
                    {activeStep !== 5 && (
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                disabled={activeStep === 1}
                                onClick={handleBack}
                                className="px-4 py-2 mr-4 disabled:bg-inherit disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-slate-300 rounded font-medium"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-2 rounded-md bg-orange2 text-white"
                            >
                                {activeStep === 4 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    )}
                </div>
            </form>
            {activeStep === 5 && (
                <SuccessMessage />
            )}
        </div>
    );
};

export default SignUpFormStepper;
