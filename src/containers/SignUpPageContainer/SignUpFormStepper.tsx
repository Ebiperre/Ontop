import React, { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import success from '../../../src/assets/gifs/success.gif';

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
                            <div className='font-author text-left flex flex-col gap-1 md:gap-3'>
                                <h3 className="text-2xl md:text-3xl font-medium">Hey there 👋 <br /> Welcome To OnTop</h3>
                                <p className="text-sm md:text-base mb-5 text-grey2">Please provide your username for the account.Let’s get to know you! We’ll need you to choose a really cool name that other users can find you with</p>
                                <input
                                    type="text"
                                    className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus ${errors.includes('Username is required') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-primary`}
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.includes('Username is required') && (
                                    <span className="text-deleteRed text-xs text-right md:text-left block">Username is required</span>
                                )}
                            </div>
                        )}
                        {activeStep === 1 && (
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
                        )}
                        {activeStep === 2 && (
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
                <div className='font-author text-center flex flex-col items-center justify-center gap-1 md:gap-3'>
                    <div>
                        <img src={success} alt="Successful Registration" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-medium">Account Setup Successful! 🎉</h3>
                        <p className="text-sm md:text-base mb-5 text-grey2">Your account setup is successful.Welcome to OnTop! We're excited to have you join our community. You can now go to your <strong onClick={moveToDashboard}>Dashboard</strong> and carry out activities</p>
                    </div>
                    <button onClick={moveToDashboard} className="bg-orange2 text-white py-2.5 px-8 rounded">
                        Go to Dashboard
                    </button>
                </div>
            )}
        </div>
    );
};

export default SignUpFormStepper;
