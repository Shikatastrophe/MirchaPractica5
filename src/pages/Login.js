import React from 'react'
import { GithubLogo, GoogleLogo } from '../assets';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { addUser, removeUser } from '../redux/bazarSlice';
import  emailjs  from '@emailjs/browser'

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) =>{
        emailjs.init({
            publicKey: "VgPJ30KtQ9GFgXCBY",
            });
        e.preventDefault()
        signInWithPopup(auth,provider).then((result)=>{
            const user = result.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                })
            );
            var params = {
                to_name : user.displayName,
                from_name : "PWIPSTORE",
                email_id : user.email,
                message : "Hola! Gracias por iniciar sesión en PWIPSTORE."
            }
            emailjs.send("service_xe9h8xf","template_06g5qyj",params).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
                );
            setTimeout(()=>{
                navigate("/");
            },1500)
        }).catch((error)=>{
            console.log(error)
        })
    };

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            // Sign-out Succesful.
            toast.success("Log Out Successfully!");
            dispatch(removeUser());
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    return <div className="w-full flex flex-col item-center justify-center gap-10 py-20">
        <div className="w-full flex items-center justify-center gap-10">
            <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                <img className='w-8' src={GoogleLogo} alt="googlelogo" />
                <span className="text-sm text-gray-900">Sign in with Google</span>
            </div>
            <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign out</button>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
            <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                <img className='w-8' src={GithubLogo} alt="googlelogo" />
                <span className="text-sm text-gray-900">Sign in with Google</span>
            </div>
            <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign out</button>
        </div>
        <ToastContainer 
            position='top-left'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
        />
    </div> 
};

export default Login;
