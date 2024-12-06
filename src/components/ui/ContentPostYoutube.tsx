import { DeleteIcon } from "./Icons/DeleteIcon";
import { ShareIconGrey } from "./Icons/ShareIcon";
import { YoutubeIcon } from "./Icons/YoutubeIcon";
import { Tags } from "./Tags";


type ContentPostVarient = "normal"|"important";

interface ContentPostInterface{
    text?:string;
    link?:string;
    title?:string;
    textAbout?:string;
    tags?:Array<String>;
    varient?:ContentPostVarient;
}

type ContentPostVarientType = Record<ContentPostVarient,string>;


const ContentPostVarientUse:ContentPostVarientType = {
    "normal":"",
    "important":""
} 

const DefaultStyles:String = "flex-wrap my-4 h-fit rounded-md border-solid border mx-[30px] px-[15px] py-[15px] w-[400px] justify-center item-center shadow-md";

export const ContentPostYoutube = (props:ContentPostInterface)=>{
    return (
        <div className={`${DefaultStyles} ${ContentPostVarientUse[props.varient?props.varient:"normal"]}`}>
            <div className="pb-3 pt-2">
                <div className="flex justify-between items-center h-[1em]">
                    <div className="flex items-center"><YoutubeIcon/> <span className="font-medium">How to Build a Seocnd Brain</span></div>
                    <div className="flex items-center w-[50%] justify-end"><ShareIconGrey/> <DeleteIcon/></div>
                </div>
            </div>
            
            <div className="h-fit py-4 flex-wrap">
                <iframe width="100%" height="200px" src="https://www.youtube.com/embed/DcNxg61kSFc"
                allowFullScreen
                />  
            </div>
            <div className="h-[87px] overflow-auto flex-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Assumenda, unde. Atque odit ratione rem cupiditate, 
                nobis culpa commodi, ad quo voluptatum eveniet \
                temporibus similique dolores itaque alias non soluta quia!
            </div>
            <div className="my-1 flex flex-wrap">
                <Tags text={"productivity"}/>
                <Tags text={"ideas"}/>
                <Tags text={"productivity"}/>
                <Tags text={"productivity"}/>
            </div>

            <div className="text-[#8B8C91] text-sm ml-1">
                Added on 23/11/2021
            </div>
            
        </div>
    )
    
}