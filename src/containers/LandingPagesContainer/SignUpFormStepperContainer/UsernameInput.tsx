import React from 'react';

interface UsernameInputProps {
    username: string;
    setUsername: (username: string) => void;
    errors: string[];
}

const UsernameInput: React.FC<UsernameInputProps> = ({ username, setUsername, errors }) => {
    return (
        <div className='font-author text-left flex flex-col gap-1 md:gap-3'>
            <h3 className="text-2xl md:text-3xl font-medium">Hey there 👋 <br /> Welcome To OnTop</h3>
            <p className="text-sm md:text-base mb-5 text-grey2">Please provide your username for the account. Let’s get to know you! We’ll need you to choose a really cool name that other users can find you with</p>
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
    );
};

export default UsernameInput;
