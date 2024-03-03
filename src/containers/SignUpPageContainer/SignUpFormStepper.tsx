import React, { useState, useRef } from 'react';
import { Button, Typography, TextField } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const steps = ['Enter Username', 'Enter Transaction PIN', 'Confirm Transaction PIN', 'Congratulations!'];

const SignUpFormStepper: React.FC = () => {
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
            if (activeStep === steps.length - 1) {
                console.log('Form submitted:', { username, pin });
            } else {
                setActiveStep(activeStep + 1);
            }
        }
    };

    const handlePinChange = (index: number, value: string) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
        if (value && index < 3) {
            pinInputs[index + 1].current?.focus();
        }
    };

    const handleConfirmPinChange = (index: number, value: string) => {
        const newConfirmPin = [...confirmPin];
        newConfirmPin[index] = value;
        setConfirmPin(newConfirmPin);
        if (value && index < 3) {
            pinInputs[index + 1].current?.focus();
        }
    };

    const moveToDashboard = () => {
        // Navigate to dashboard or perform any other relevant action
        console.log('Moving to dashboard...');
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="mb-8">
                {steps.map((label, index) => (
                    <div key={label} className="flex items-center mb-4">
                        {index > 0 && <div className={`h-0.5 flex-grow bg-gray-300 mr-2 ${activeStep > index ? 'bg-primary' : ''}`}></div>}
                        {activeStep > index ? (
                            <CheckCircle className="text-green-500 mr-2" />
                        ) : (
                            <div className="h-6 w-6 rounded-full border border-gray-300 mr-2 flex items-center justify-center">
                                {index + 1}
                            </div>
                        )}
                        <Typography variant="h6">{label}</Typography>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    {activeStep === 0 && (
                        <div>
                            <Typography variant="h5">Enter Username</Typography>
                            <Typography variant="body1">Please provide your username for the account.</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={errors.includes('Username is required')}
                                helperText={errors.includes('Username is required') ? 'Username is required' : ''}
                            />
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div>
                            <Typography variant="h5">Enter Transaction PIN</Typography>
                            <Typography variant="body1">Please set a 4-digit transaction PIN for your account.</Typography>
                            <div className="flex">
                                {pin.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={pinInputs[index]}
                                        type="text"
                                        maxLength={1}
                                        className="w-12 h-12 text-3xl border border-gray-300 rounded-lg text-center mr-2 focus:outline-none"
                                        value={digit}
                                        onChange={(e) => handlePinChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                            <Typography variant="caption" color="error" className="mt-1">
                                {errors.includes('Transaction PIN must be a 4-digit number') ? 'Transaction PIN must be a 4-digit number' : ''}
                            </Typography>
                        </div>
                    )}
                    {activeStep === 2 && (
                        <div>
                            <Typography variant="h5">Confirm Transaction PIN</Typography>
                            <Typography variant="body1">Please confirm your transaction PIN.</Typography>
                            <div className="flex">
                                {confirmPin.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={pinInputs[index]}
                                        type="text"
                                        maxLength={1}
                                        className="w-12 h-12 text-3xl border border-gray-300 rounded-lg text-center mr-2 focus:outline-none"
                                        value={digit}
                                        onChange={(e) => handleConfirmPinChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                            <Typography variant="caption" color="error" className="mt-1">
                                {errors.includes('Confirm Transaction PIN is required') ? 'Confirm Transaction PIN is required' : errors.includes('Transaction PIN and Confirm PIN must match') ? 'Transaction PIN and Confirm PIN must match' : ''}
                            </Typography>
                        </div>
                    )}
                    {activeStep === 3 && (
                        <div>
                            <Typography variant="h5">Congratulations!</Typography>
                            <Typography variant="body1">Your account setup is successful.</Typography>
                            <Button variant="contained" color="primary" onClick={moveToDashboard} className="mt-4">
                                Go to Dashboard
                            </Button>
                        </div>
                    )}
                </div>
                <div className="mt-8">
                    <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>
                        Back
                    </Button>
                    <Button type="submit" variant="contained" color="primary" className="ml-4">
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpFormStepper;
