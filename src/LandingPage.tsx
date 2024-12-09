import { useEffect } from "react"
import { NavBar } from "./components/ui/NavBar"
import { useNavigate } from "react-router-dom"

export const LandingPage= ()=>{
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
            
    </div>
}