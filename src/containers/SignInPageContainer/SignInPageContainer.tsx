import { useNavigate } from 'react-router-dom';
import signInImage from '../../../src/assets/images/signIn-illustration.svg';

const SignInPageContainer = () => {
    const navigate = useNavigate();

    return (
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5">
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
                        <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="email" placeholder="Enter your email" />
                        <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="password" placeholder="Password" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 sm:gap-4 justify-start pl-2">
                                <input type="checkbox" className="accent-orange4 text-white" />
                                <h3 className="flex items-center whitespace-nowrap text-xs">Remember me</h3>
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Forgot password?</a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                            <button
                                onClick={() => { }}
                                className="md:mt-5 tracking-wide font-semibold bg-orange text-white w-full py-4 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><span>Sign In</span></button>
                            <button
                                onClick={() => { navigate('/sign-up') }}
                                className="md:mt-5 tracking-wide text-orange font-semibold border-orange border  w-full py-4 rounded-lg hover:bg-orange hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><span>Sign Up</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPageContainer;