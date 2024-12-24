import { useEffect } from "react"
import { NavBar } from "./components/ui/NavBar"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { isLoggedIn } from "./components/ui/States/RecoilAtoms";
import { Loader } from "./components/ui/Loader";

const LandingPage= ()=>{
    const navigate = useNavigate();
    const isLoggedInVal = useRecoilValueLoadable(isLoggedIn);
    useEffect(()=>{
        document.title = "Landing Page"
    },[])
    return <div>
        {isLoggedInVal.state === "loading"?
        <Loader/>
        :
        <>{isLoggedInVal.state === "hasValue" && isLoggedInVal.contents === true?
        <div>
            <div>
                {isLoggedInVal.contents === false?
                <NavBar 
                    textButton1="SignUp" 
                    textButton2="SignIn" 
                    onClickButton1={()=>{navigate("/signup")}}
                    onClickButton2={()=>{navigate("/signin")}}
                />:<NavBar
                    textButton1="DashBoard" 
                    textButton2="SignUp" 
                    onClickButton1={()=>{navigate("/dashboard")}}
                    onClickButton2={()=>{navigate("/signup")}}
                    />}
            </div>
            <div className="flex justify-center items-center h-screen w-screen">
                {isLoggedInVal.contents === true?
                <div>
                    <div>
                        <Link to = "/signin"> <span className="text-purple-600">Sign In</span></Link>&nbsp;to continue
                    </div>
                    <div>
                        Or Try <Link to = "/signin"><span className="text-purple-600">Signing Up</span></Link>&nbsp;to continue
                    </div>
                </div>:
                <>
                <div>
                    <Link to ="/dashboard"><span className="text-purple-600">Go to DashBoard</span></Link>
                </div>
                </>
                }
                
            </div>
        </div>
        :<>
            ERROR OCCURED
        </>
        }</>
        }
    </div>
}

export default LandingPage;