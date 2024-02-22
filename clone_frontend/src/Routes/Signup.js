import {Icon} from '@iconify/react';
import TextInput from '../Components/Shared/TextInput';
import PasswordInput from '../Components/Shared/PasswordInput';
import { Link } from 'react-router-dom';
const SignupComponent = () => {

    return <div className="w-full h-full flex flex-col items-center ">
    <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
        <Icon icon= "logos:spotify" width="165" />
    </div>
    <div className='inputRegion w-1/4 py-10 flex flex-col items-center justify-center'>
        <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>
        <TextInput
            label="Email address"
            placeholder="Email address"
            className="my-5"
        />
        <TextInput
            label="Confirm Email address"
            placeholder="Enter your email again"
            className="mb-5"
        />
        <PasswordInput
            label="Create password"
            placeholder="Enter a strong password"
        />
        <TextInput
            label="What should we call you?"
            placeholder="Enter a profile name"
            className="my-5"
        />
        <div className="w-full flex items-center justify-center my-4">
        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">SIGN UP</button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-xl">Already have an account?</div>
        <div className="w-full flex items-center justify-center text-gray-500 rounded-full border border-gray-500 py-4"><Link to= "/login" >LOG IN INSTEAD</Link></div>
    </div>
    </div>;
};

export default SignupComponent; 