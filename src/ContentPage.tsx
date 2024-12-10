import { useEffect } from "react"
import  ContentViewer from "./components/ui/ContentViewer"
import { AddIcon } from "./components/ui/Icons/AddIcon"
import { ShareIcon } from "./components/ui/Icons/ShareIcon"
import { NavBar } from "./components/ui/NavBar"
import { SideBar } from "./components/ui/SideBar"
import { useNavigate } from "react-router-dom"
import { InputPostBox } from "./components/ui/InputPostBox"
import { useRecoilValue } from "recoil"
import { viewInputBox } from "./components/ui/States/RecoilAtoms"
import { useSetRecoilState } from "recoil"

const ContentPage = ()=>{
    const viewInputBoxVal = useRecoilValue(viewInputBox);
    const setViewInputBoxVal = useSetRecoilState(viewInputBox);
    useEffect(()=>{
        document.title = "Dashboard"
        
    },[])
    return <>
        <div className='bg-[#F9FBFC]'>
        
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
                onClickButton1={()=>{setViewInputBoxVal(c=>!c)}}
                onClickButton2={()=>{}}
                />
          </div>
          
          <div className='mt-[70px] m-9'>
            <ContentViewer/>
          </div>
        </div>
        {viewInputBoxVal && <InputPostBox/>}
        
      </div>
    </>
}

export default ContentPage;