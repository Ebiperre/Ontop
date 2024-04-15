import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signUpImage from '../../../src/assets/images/signUp-illustration.svg';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    agreed: boolean | string;
}

const SignUpPageContainer = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            agreed: false,
        };
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData(prevData => ({
            ...prevData,
            [name]: inputValue,
        }));

        if (name === 'agreed' && checked) {
            setErrors(prevErrors => ({
                ...prevErrors,
                agreed: undefined,
            }));
        }
    };

    const handleSubmit = () => {
        const validationErrors: Partial<FormData> = {};
        if (!formData.firstName) {
            validationErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            validationErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.phone) {
            validationErrors.phone = 'Phone number is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }
        if (!formData.agreed) {
            validationErrors.agreed = 'You must read and accept the terms and policies of Ontop';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log(formData);
        navigate('/sign-up/steps');
    };

    return (
        <div className='mx-auto w-full flex items-center justify-center'>
            <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
                <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                    <img src={signUpImage} alt="login" className="h-[500px]" />
                </div>
                <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                    <h1 className="text-center text-2xl sm:text-3xl font-semibold text-orange">Create Account</h1>
                    <div className="w-full mt-2 text-center">
                        <p className="text-gray-600 mb-5">Create a new account to get started 💱</p>
                    </div>

                    <div className="w-full mt-5 sm:mt-8">
                        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className='flex-1'>
                                    <input
                                        required
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus"
                                        type="text"
                                        placeholder="Your first name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.firstName && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.firstName}</span>}
                                </div>
                                <div className='flex-1'>
                                    <input
                                        required
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus"
                                        type="text"
                                        placeholder="Your last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.lastName && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div>
                                <input
                                    required
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus"
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.email}</span>}
                            </div>
                            <div>
                                <input
                                    required
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus"
                                    type="number"
                                    placeholder="Enter your phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {errors.phone && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.phone}</span>}
                            </div>
                            <div>
                                <input
                                    required
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.password}</span>}
                            </div>
                            <div>
                                <div className="flex items-center gap-2 justify-start pl-2">
                                    <input required type="checkbox" className="accent-orange4 text-orange rounded border bg-gray-100 border-gray-300 focus:ring-orange ring-orange2" name="agreed" onChange={handleInputChange} />
                                    <h3 className="flex items-center whitespace-nowrap text-xs">I agree to the <a href="/terms&conditions"><span className="text-orange">&nbsp;Terms</span>&nbsp;and<span className="text-orange">&nbsp;Privacy Policy</span></a>.</h3>
                                </div>
                                {errors.agreed && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.agreed}</span>}
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <button
                                    onClick={handleSubmit}
                                    className="md:mt-5 tracking-wide font-medium bg-orange text-white w-full py-4 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Sign Up</span>
                                </button>
                                <button
                                    onClick={() => { navigate('/sign-in') }}
                                    className="text-gray-600 text-sm text-center"
                                >
                                    Already have an account? <span className='text-orange font-medium'>Sign in here.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPageContainer;
