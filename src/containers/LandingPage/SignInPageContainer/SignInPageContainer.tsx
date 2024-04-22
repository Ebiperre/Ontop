import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signInImage from '../../../../src/assets/images/signIn-illustration.svg';

interface FormData {
    email: string;
    password: string;
}

const SignInPageContainer = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = () => {
        const validationErrors: Partial<FormData> = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log({ ...formData, rememberMe });
    };

    return (
        <div className='mx-auto w-full flex items-center justify-center'>
            <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
                <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                    <img src={signInImage} alt="login" className="h-[500px]" />
                </div>
                <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                    <h1 className="text-center text-2xl sm:text-3xl font-semibold text-orange">Welcome back! 🎉</h1>
                    <div className="w-full mt-2 text-center">
                        <p className="text-gray-600 mb-5">Sign in to your account to continue</p>
                    </div>
                    <div className="w-full mt-5 sm:mt-8">
                        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
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
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{errors.password}</span>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 justify-start pl-2">
                                    <input type="checkbox" className="accent-orange4 text-orange rounded border bg-gray-100 border-gray-300 focus:ring-orange dark:focus:ring-orange2 ring-orange2" onChange={handleRememberMeChange} />
                                    <h3 className="flex items-center whitespace-nowrap text-xs">Remember me</h3>
                                </div>
                                <div className="text-right">
                                    <Link to="/sign-in/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <button
                                    onClick={handleSubmit}
                                    className="md:mt-5 tracking-wide font-medium bg-orange text-white w-full py-4 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Sign In</span>
                                </button>
                                <button
                                    onClick={() => { navigate('/sign-up') }}
                                    className="text-gray-600 text-sm text-center"
                                >
                                    Don't have an account? <span className='text-orange font-medium'>Sign up here.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPageContainer;
