import { useEffect } from "react"
import { NavBar } from "./components/ui/NavBar"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const LandingPage= ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        document.title = "Landing Page"
    },[])
    return <div>
        <div>
            <NavBar textButton1="SignUp" textButton2="SignIn" onClickButton1={()=>{navigate("/signup")}}
                onClickButton2={()=>{navigate("/signin")}}
                />
        </div>
        <div className="flex justify-center items-center h-screen w-screen">
            <div>
                <div>
                    <Link to = "/signin"><text className="text-purple-600">Sign In</text></Link>&nbsp;to continue
                </div>
                <div>
                    Or Try <Link to = "/signin"><text className="text-purple-600">Signing Up</text></Link>&nbsp;to continue
                </div>
            </div>
        </div>
    </div>
}

export default LandingPage;