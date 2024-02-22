import {Icon} from '@iconify/react';
import TextInput from '../Components/Shared/TextInput';
import PasswordInput from '../Components/Shared/PasswordInput';
import { Link } from 'react-router-dom';
const LoginComponent = () => {

    return <div className="w-full h-full flex flex-col items-center ">
    <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
        <Icon icon= "logos:spotify" width="165" />
    </div>
    <div className='inputRegion w-1/4 py-10 flex flex-col items-center justify-center'>
        <div className='font-bold mb-8'>To continue, log in to spotify</div>
        <TextInput
            label="Email address or username"
            placeholder="Email address or Username"
            className="my-5"
        />
        <PasswordInput
            label="Password"
            placeholder="Password"
        />
        <div className="w-full flex items-center justify-end my-4">
        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">LOG IN</button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-xl">Don't have an account?</div>
        <div className="w-full flex items-center justify-center text-gray-500 rounded-full border border-gray-500 py-4"><Link to = "/signup">SIGN UP FOR SPOTIFY</Link></div>
    </div>
    </div>;
};

export default LoginComponent; 