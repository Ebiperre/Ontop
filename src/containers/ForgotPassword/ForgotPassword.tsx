import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);

        setError("");
    };


    const handleSubmit = () => {
        if (!email) {
            setError("Please enter your email address.");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        alert('Your New Login Details has been sent to your email, please check and try Signing in again');
    };

    return (
        <div className="flex justify-center min-h-screen p-4 bg-gray-100 antialiased">
            <div className="container my-auto p-3 max-w-md bg-white drop-shadow-xl border border-black/20 rounded-md">
                <div className="text-center m-6">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700">Forgot your password?</h1>
                    <p className="text-gray-500">Just enter your email address below and we'll send you a link to reset your password!</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Remember your password? <Link className="text-orange3 decoration-2 hover:underline font-medium" to="/sign-in">Sign in here</Link></p>
                </div>
                <div className="m-6">
                    <form className="mb-4">
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={handleInputChange}
                                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm input-focus" />
                            {error && <span className="text-deleteRed text-xs text-right md:text-left block mt-1">{error}</span>}
                        </div>
                        <div className="mb-6">
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="md:mt-5 tracking-wide font-medium bg-orange text-white w-full py-4 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Send reset link</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to="/sign-up" className="font-semibold text-orange focus:text-orange3 focus:outline-none focus:underline">Sign up</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
