import { useState } from 'react';
import {useCookies} from "react-cookie";
import {Icon} from '@iconify/react';
import TextInput from '../Components/Shared/TextInput';
import PasswordInput from '../Components/Shared/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";
const SignupComponent = () => {

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const signUp = async () => {
        if(email !== confirmEmail) {
            alert(
                "Email and Confirm email feilds must match. Please check again"
            );
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest("/auth/register/",data);
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
        <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>
        <TextInput
            label="Email address"
            placeholder="Email address"
            className="my-5"
            value={email}
            setValue={setEmail}
        />
        <TextInput
            label="Confirm Email address"
            placeholder="Enter your email again"
            className="mb-5"
            value={confirmEmail}
            setValue={setConfirmEmail}
        />
        <TextInput
            label="Username"
            placeholder="Enter your username"
            className="mb-5"
            value={username}
            setValue={setUserName}
        />
        <PasswordInput
            label="Create password"
            placeholder="Enter a strong password"
            value={password}
            setValue={setPassword}
        />
        <div className='w-full flex justify-between items-center space-x-8'>
        <TextInput         
            label="First Name"
            placeholder="Enter your first name"
            className="my-5"
            value={firstName}
            setValue={setFirstName}
        />
        <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            className="my-5"
            value={lastName}
            setValue={setLastName}
        />
        </div>
        <div className="w-full flex items-center justify-center my-4">
        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full" onClick={(e) => {
             e.preventDefault();
             signUp();
        }}>
            SIGN UP</button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-xl">Already have an account?</div>
        <div className="w-full flex items-center justify-center text-gray-500 rounded-full border border-gray-500 py-4"><Link to= "/login" >LOG IN INSTEAD</Link></div>
    </div>
    </div>;
};

export default SignupComponent; 