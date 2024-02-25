import { useState } from 'react';
import {Icon} from '@iconify/react';
import TextInput from '../Components/Shared/TextInput';
import PasswordInput from '../Components/Shared/PasswordInput';
import { Link, useNavigate} from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useCookies } from 'react-cookie';
const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => { 
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest("/auth/login",data);
        if(response && !response.err){
            console.log(response);
            const token = response.token;
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        }
        else{
            alert("Failure");
        }
    };


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
            value={email}
            setValue={setEmail}
        />
        <PasswordInput
            label="Password"
            placeholder="Password"
            value={email}
            setValue={setEmail}
        />
        <div className="w-full flex items-center justify-end my-4">
        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full" onClick={(e) => {
            e.preventDefault();
            login();
        }}>LOG IN</button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-xl">Don't have an account?</div>
        <div className="w-full flex items-center justify-center text-gray-500 rounded-full border border-gray-500 py-4"><Link to = "/signup">SIGN UP FOR SPOTIFY</Link></div>
    </div>
    </div>;
};

export default LoginComponent; 