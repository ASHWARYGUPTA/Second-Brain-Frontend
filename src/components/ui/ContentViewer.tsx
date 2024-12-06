import { ContentPost } from "./ContentPost"
import { ContentPostSocialMedia } from "./ContentPostSocialMedia"
import { ContentPostTwitter } from "./ContentPostTwitter"
import { ContentPostYoutube } from "./ContentPostYoutube"
import { InputPostBox } from "./InputPostBox"

export const ContentViewer = ()=>{
    return (
        <div>
            <div className="my-4 mx-6 ml-8 font-bold text-xl">
                All Notes
            </div>
            <div className="flex flex-wrap">
                <div className=""><ContentPost varient = "important"/></div>
                <div className=""><ContentPostYoutube/></div>
                <div className=""><ContentPost/></div>
                <div className=""><ContentPost/></div>
                <div className=""><ContentPost/></div>
                <div className=""><ContentPost/></div>   
                <div className=""><ContentPost/></div>   
                <div className=""><ContentPost/></div>   
                <div className=""><ContentPost/></div>   
                <div className=""><ContentPost/></div>   
                <div className=""><ContentPostTwitter/></div>   
                <div className=""><ContentPostSocialMedia typeLink="instagram"/></div>   
                <div className=""><ContentPost/></div> 
                <div className=""><ContentPost/></div> 
                <div className=""><ContentPost/></div> 
            </div>
            
        </div>
        
        
    )
}