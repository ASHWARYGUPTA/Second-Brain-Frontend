import { CredentialResponse, GoogleLogin,useGoogleOneTapLogin } from '@react-oauth/google';
import Button from './Button';
import { application } from 'express';
import { useEffect } from 'react';



export const SocialNetworkSignIn = ()=>{
    
    useGoogleOneTapLogin({
            onSuccess:async credentialResponse => {
                console.log(credentialResponse.credential);
                await fetch("http://localhost:3000/api/v1/decodeJwt",{
                    method:"GET",
                    headers:{
                        'Accept': 'application/json',
                        "Content-Type":"application/json",
                        "credentials":"include",
                        "token":`${credentialResponse.credential}`
                    }
                }).then((res)=>{
                    return res.json()
                }).then((res)=>{
                    console.log(res);
                })
            },
            onError: () => {
                console.log('Login Failed');
            },
        })


    return <div className=" flex flex-col justify-around items-center ml-8 h-[50%] w-[35%] border-solid border-2 rounded-2xl border-black bg-white text-black">
            <div>
                <div className='text-2xl font-bold flex justify-center mb-6'>
                <u>SignIn/SignUp</u>
                </div>
                <div className='text-sm align-middle flex justify-center h-[2rem] w-[250px] items-center '>
                    <p className="">Use Social Media Networks to SignIn to Second Brain Platform</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                <GoogleLogin
                onSuccess={async (credentialResponse:CredentialResponse)=>{
                    console.log(credentialResponse.credential);
                await fetch("http://localhost:3000/api/v1/decodeJwt",{
                    method:"GET",
                    headers:{
                        'Accept': 'application/json',
                        "Content-Type":"application/json",
                        "credentials":"include",
                        "token":`${credentialResponse.credential}`
                    }
                }).then((res)=>{
                    return res.json()
                }).then((res)=>{
                    console.log(res);
                })
                }}
                onError={()=>{
                    console.log("error")
                }}
                
                theme='filled_blue'
                shape="rectangular"
                text="signin_with"
                logo_alignment="center"
                width="300px"
                size="large"
                useOneTap
                >
                </GoogleLogin>
            </div>

            
            
            {/* <Button text = {"Sign in with Google 🚀"} onClick={() => login()}></Button> */}
    </div>
}