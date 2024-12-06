import { useEffect } from "react"
import { NavBar } from "./components/ui/NavBar"
import { SignInComponent } from "./components/ui/SignInComponent"
import { SocialNetworkSignIn } from "./components/ui/SocialNetworkSignIn"
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { useForm } from "react-hook-form"
import { isCorrect, isLoggedIn } from "./components/ui/States/RecoilAtoms"
import { Loader } from "./components/ui/Loader"
import { useNavigate } from "react-router-dom"



export const SignInPage = ()=>{
    const navigate = useNavigate();
    const isLoggedInVal = useRecoilValueLoadable(isLoggedIn);
    const isCorrectValue = useRecoilValue(isCorrect);

    useEffect(()=>{
        document.title = "SignIn";
    },[])

    return<>
    
    <div className="mb-5">
        <NavBar textButton1="SignUp" textButton2="Go To Home" onClickButton1={()=>navigate("/Signup")} onClickButton2={()=>navigate("/dashboard")}/>
        
    </div>
    <div>
        {isLoggedInVal.state == "loading"?<div className="h-screen w-screen flex justify-center items-center">
                {/* @ts-ignore */}
                <Loader height="50" width="50" radius="5" colors={["#5046E2","#5046E2","#5046E2","#5046E2","#5046E2"]}/>
            </div>:<>
            {isLoggedInVal.state == "hasValue" && isLoggedInVal?<>
            <div className="w-screen h-screen flex justify-center items-center flex-wrap">
                <div className=" flex justify-center items-center h-[600px] w-[1200px] border-solid border border-black p-4 pb-0 rounded-lg bg-purple-300">
                    User Already Signed In please <span ><a className="text-purple-600 mx-1">Logout</a></span>to ReSignIn
                </div>
            </div>
            </>:<>
                <div className="w-screen h-screen flex justify-center items-center flex-wrap">
                    <div className="flex justify-around items-center h-[600px] w-[1200px] border-solid border border-black p-4 pb-0 rounded-lg bg-purple-300">
                        <SignInComponent/>
                        <SocialNetworkSignIn/>
                    </div>
                </div>
                <div className="">
                        <p>{!isCorrectValue?"Invalid Credentials":""}</p>   
                </div>
            </>}
            
        </>}
        
    </div>
        
    
        

    </>
    
    
    
}

