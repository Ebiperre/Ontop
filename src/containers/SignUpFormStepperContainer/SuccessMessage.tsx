import React from 'react';
import success from '../../../src/assets/gifs/success.gif';
import { Link } from 'react-router-dom';

const SuccessMessage: React.FC = () => {
    return (
        <div className='font-author text-center flex flex-col items-center justify-center gap-1 md:gap-3'>
            <div>
                <img src={success} alt="Successful Registration" />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-medium">Account Setup Successful! 🎉</h3>
                <p className="text-sm md:text-base mb-5 text-grey2">Your account setup is successful. Welcome to OnTop! We're excited to have you join our community. You can now go to your <strong>Dashboard</strong> and carry out activities</p>
            </div>
            <Link to={"/dashboard/home"} className="bg-orange2 text-white py-2.5 px-8 rounded">
                Go to Dashboard
            </Link>
        </div>
    );
};

export default SuccessMessage;
