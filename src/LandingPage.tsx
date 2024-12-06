import { useEffect } from "react"
import { NavBar } from "./components/ui/NavBar"

export const LandingPage= ()=>{
    useEffect(()=>{
        document.title = "Landing Page"
    },[])
    return <div>
        <div>
            <NavBar textButton1="SignUp" textButton2="SignIn"/>
        </div>
            
    </div>
}