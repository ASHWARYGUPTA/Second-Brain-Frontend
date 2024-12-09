import { ContentPost } from "./ContentPost"
import { ContentPostSocialMedia } from "./ContentPostSocialMedia"
import { InputPostBox } from "./InputPostBox"

export const ContentViewer = ()=>{
    return (
        <div>
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
        
        
    )
}