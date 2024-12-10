import { useRecoilStateLoadable, useRecoilValueLoadable } from "recoil"
import ContentPost  from "./ContentPost"
import ContentPostSocialMedia  from "./ContentPostSocialMedia"
import { InputPostBox } from "./InputPostBox"
import { isLoggedIn } from "./States/RecoilAtoms"
import { Loader } from "./Loader"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const ContentViewer = ()=>{
    const [isLoggedInLoadable,setIsLoggeedIn] = useRecoilStateLoadable(isLoggedIn);
    return (
        <div>
            {
            isLoggedInLoadable.state == "loading"&&
            <div className="h-screen w-screen flex justify-center items-center">
                {/* @ts-ignore */}
                <Loader height="50" width="50" radius="5" colors={["#5046E2","#5046E2","#5046E2","#5046E2","#5046E2"]}/>
            </div>
            }
        
            {isLoggedInLoadable.state == "hasValue" && isLoggedInLoadable.contents === true&&<div>

                <div className="my-4 mx-6 ml-8 font-bold text-xl">
                    All Notes
                </div>
                <div className="flex flex-wrap">
                    <div className=""><ContentPost varient = "important"/></div>
                    <div className=""><ContentPostSocialMedia typeLink="youtube"/></div>
                    <div className=""><ContentPost/></div>
                    <div className=""><ContentPost/></div>
                    <div className=""><ContentPost/></div>
                    <div className=""><ContentPost/></div>   
                    <div className=""><ContentPost/></div>   
                    <div className=""><ContentPost/></div>   
                    <div className=""><ContentPost/></div>   
                    <div className=""><ContentPost/></div>   
                    <div className=""><ContentPostSocialMedia typeLink="twitter"/></div>
                    <div className=""><ContentPostSocialMedia typeLink="instagram"/></div>   
                    <div className=""><ContentPost/></div> 
                    <div className=""><ContentPost/></div> 
                    <div className=""><ContentPost/></div> 
                    <div><ContentPostSocialMedia 
                    title="Insta post"
                    heading="This is Important"
                    link="https://www.youtube.com/embed/YZZOCyeWdY0"
                    textAbout="Some random Text"
                    typeLink="youtube"
                    tags={["Productivity","Link"]}
                    varient="important"
                    /></div>
                </div>
            </div>
            }

            {isLoggedInLoadable.contents === false&&
            <>
                <div className=" h-screen w-screen flex justify-center items-center">
                    <div className="mr-[200px] h-[3rem] w-[480px]">
                        An Error Occured/You are Not Signed In 
                        <Link to="/SignIn" className="text-purple-600">&nbsp;Sign In&nbsp;</Link> to Continue
                        OR <Link to= "/Signup" className="text-purple-600">&nbsp;SignUp&nbsp;</Link>
                    </div>
                </div>
            </>}
        </div>
        
        
    )
}

export default ContentViewer;