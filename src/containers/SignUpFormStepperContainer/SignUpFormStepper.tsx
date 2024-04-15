import React, { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import PinInput from './PinInput';
import ConfirmPinInput from './ConfirmPinInput';
import SuccessMessage from './SuccessMessage';

const steps = ['Enter Username', 'Enter Transaction PIN', 'Confirm Transaction PIN', 'Congratulations!'];

const SignUpFormStepper: React.FC = () => {
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState<number>(0);
    const [username, setUsername] = useState<string>('');
    const [pin, setPin] = useState<string[]>(['', '', '', '']);
    const [confirmPin, setConfirmPin] = useState<string[]>(['', '', '', '']);
    const [errors, setErrors] = useState<string[]>([]);
    const pinInputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const validate = () => {
        const errors: string[] = [];
        if (activeStep === 0 && !username.trim()) {
            errors.push('Username is required');
        }
        if (activeStep === 1) {
            if (!pin.every((digit) => digit.trim())) {
                errors.push('Transaction PIN is required');
            } else if (pin.some((digit) => digit.length !== 1 || !/^\d+$/.test(digit))) {
                errors.push('Transaction PIN must be a 4-digit number');
            }
        }
        if (activeStep === 2) {
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
            if (activeStep === 2) {
                setActiveStep(3);
            } else {
                setActiveStep(activeStep + 1);
            }
        }
    };

    const handlePinChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);
            if (value) {
                if (index < 3) {
                    pinInputs[index + 1].current?.focus();
                }
            } else {
                if (index > 0) {
                    pinInputs[index - 1].current?.focus();
                }
            }
        }
    };

    const handleConfirmPinChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newConfirmPin = [...confirmPin];
            newConfirmPin[index] = value;
            setConfirmPin(newConfirmPin);
            if (value) {
                if (index < 3) {
                    pinInputs[index + 1].current?.focus();
                }
            } else {
                if (index > 0) {
                    pinInputs[index - 1].current?.focus();
                }
            }
        }
    };

    const moveToDashboard = () => {
        navigate('/dashboard/home');
    };

    return (
        <div className="h-screen max-w-lg mx-auto p-4 flex flex-col gap-20 justify-center items-center">
            {activeStep !== 3 && (
                <div className="flex">
                    {steps.slice(0, 3).map((label, index) => (
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
                            {index < 2 && (
                                <div className={`mx-2 border-b w-20 ${activeStep > index ? 'border-primary' : 'border-gray-300'}`}></div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {activeStep !== 3 && (
                <form className='w-full' onSubmit={handleSubmit}>
                    <div>
                        {activeStep === 0 && (
                            <UsernameInput
                                username={username}
                                setUsername={setUsername}
                                errors={errors}
                            />
                        )}
                        {activeStep === 1 && (
                            <PinInput
                                pin={pin}
                                handlePinChange={handlePinChange}
                                pinInputs={pinInputs}
                                errors={errors}
                            />
                        )}
                        {activeStep === 2 && (
                            <ConfirmPinInput
                                confirmPin={confirmPin}
                                handleConfirmPinChange={handleConfirmPinChange}
                                pinInputs={pinInputs}
                                errors={errors}
                            />
                        )}
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                disabled={activeStep === 0}
                                onClick={() => setActiveStep(activeStep - 1)}
                                className="px-4 py-2 mr-4 disabled:bg-inherit disabled:text-gray-300 disabled:cursor-not-allowed"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-2 rounded-md bg-orange2 text-white"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            )}
            {activeStep === 3 && (
                <SuccessMessage moveToDashboard={moveToDashboard} />
            )}
        </div>
    );
};

export default SignUpFormStepper;
