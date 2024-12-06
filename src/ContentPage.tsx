import { useEffect } from "react"
import { ContentViewer } from "./components/ui/ContentViewer"
import { AddIcon } from "./components/ui/Icons/AddIcon"
import { ShareIcon } from "./components/ui/Icons/ShareIcon"
import { NavBar } from "./components/ui/NavBar"
import { SideBar } from "./components/ui/SideBar"
import { useNavigate } from "react-router-dom"

export const ContentPage = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        document.title = "Dashboard"
    },[])
    return <>
        <div className='bg-[#F9FBFC] flex-wrap relative'>
        
        <div className='absolute flex'>
          <div className='w-[150px]'>
            <SideBar/>
          </div>
          <div className='absolute w-[100%]'>
                <NavBar 
                textButton1="Add Content" 
                textButton2="Share" 
                startIcon1={<AddIcon/>} 
                startIcon2={<ShareIcon/>}
                onClickButton1={()=>{}}
                onClickButton2={()=>{}}
                />
          </div>
          
          <div className='flex-wrap mt-[70px] m-9'>
            <ContentViewer/>
          </div>
        </div>
        
      </div>
    </>
}