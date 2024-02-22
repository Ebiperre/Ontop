import classes from './SignUpPageContainer.module.css';
import loginImage from '../../../src/assets/images/login-illustration.svg'

const SignUpPageContainer = () => {
    return (
        <div className={classes.container}>
            <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5">
                <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                    <img src={loginImage} alt="login" className="h-[500px]" />
                </div>
                <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                    <h1 className="text-center text-2xl sm:text-3xl font-semibold text-orange">Create Account</h1>
                    <div className="w-full mt-5 sm:mt-8">
                        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="text" placeholder="Your first name" />
                                <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="text" placeholder="Your last name" />
                            </div>
                            <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="email" placeholder="Enter your email" />
                            <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="tel" placeholder="Enter your phone" />
                            <input className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="password" placeholder="Password" />
                            <div className="flex items-center gap-1 sm:gap-4 justify-start pl-2">
                                <input type="checkbox" className="accent-orange4 text-white" />
                                <h3 className="flex items-center whitespace-nowrap text-xs">I agree to the <a href=""><span className="text-orange">&nbsp;Terms</span>&nbsp;and<span className="text-orange">&nbsp;Privacy Policy</span></a>.</h3>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                <button className="md:mt-5 tracking-wide font-semibold bg-orange text-white w-full py-4 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><span>Sign Up</span></button>
                                <button className="md:mt-5 tracking-wide text-orange font-semibold border-orange border  w-full py-4 rounded-lg hover:bg-orange hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><span>Sign In</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPageContainer;
