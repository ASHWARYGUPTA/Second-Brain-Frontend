import { useForm, useWatch } from "react-hook-form"
import { ContentPostType } from "./States/utils";
import Button from "./Button";


// interface ContentPostType{
//     typeLink?:typeLinkType;
//     text?:string;
//     link?:string;
//     title?:string;
//     heading?:string;
//     textAbout?:string;
//     tags?:Array<String>;
//     varient?:ContentPostVarient;
//     CreatedAt?:Date;
// }

export const InputPostBoxForm = ()=>{
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        getValues,
        getFieldState,
        watch

    } = useForm<ContentPostType>();

    const DefaultInputStyle = "pl-2 h-[2rem] w-[100%] border-2 border-black rounded-xl focus:bg-purple-300 placeholder-purple-600 placeholder-opacity-50";
    const DefaultContainerStyle = "grid grid-cols-4 col-span-4 flex justify-center items-center";
   return (
    <form>
        <div className="grid grid-cols-4 gap-y-3">
            <div className={DefaultContainerStyle}>
                <div className="">
                    <label>Enter Title: </label>
                </div>
                <div className="col-span-3">
                    <input 
                    className={DefaultInputStyle}
                    // className=""
                    placeholder="Second Brain" 
                    />
                </div>
            </div>

            <div className={DefaultContainerStyle}>
                <div className="">
                    <label>Enter Heading: </label>
                </div>
                <div className="col-span-3">
                    <input className={DefaultInputStyle}
                    placeholder="How to Build a Second Brain"
                    />
                </div>
            </div>

            <div className="col-span-3">Select your post type: </div>
            <div className="col-span-4 flex justify-around">
                
                <div>
                    <input type="radio" {...register("typeLink")} value={"link"} id = "link"/><label htmlFor="link" >Link</label>
                </div>
                
                <div>
                    <input type="radio" {...register("typeLink")} value={"youtube"} id ="youtube"/><label htmlFor="youtube">Youtube</label>
                </div>
                <div>
                    <input type="radio" {...register("typeLink")} value={"twitter"} id="twitter"/><label htmlFor="twitter">Twitter</label>
                </div>

                <div>
                    <input type="radio" {...register("typeLink")} value={"instagram"} id="instagram"/><label htmlFor="instagram">Instagram</label>
                </div>

                <div>
                    <input type="radio" {...register("typeLink")} value={"normalPost"} id = "normalPost"/><label htmlFor="normalPost" >Normal Post</label>
                </div>
            </div>


            {watch("typeLink") == "link" &&<>
            <div className={DefaultContainerStyle}>
                <div className="">
                    <label>Enter Link: </label>
                </div>
                <div className="col-span-3">
                    <input className={DefaultInputStyle}
                    placeholder="How to Build a Second Brain"
                    type="url"
                    {...register("link")}
                    />
                </div>
            </div>
            </> 
            }

            {watch("typeLink") == "instagram" &&<><div className="">
                <label>Enter Insta Post Url: </label>
            </div>
            <div className="col-span-3">
                <input className={DefaultInputStyle}
                placeholder="https://www.instagram.com/shitindianssay/reel/DDMnUaANvxs/"
                type="url"
                {...register("link")}
                />
            </div>
            </> 
            }

            {watch("typeLink") == "youtube" &&<>
                <div className="">
                    <label>Enter Youtube link: </label>
                </div>
                <div className="col-span-3">
                    <input className={DefaultInputStyle}
                    placeholder="https://www.youtube.com/embed/UrW19xffEUk?si=JPAu5OgGTlB1eeua"
                    type="url"
                    {...register("link")}
                    />
                </div>

            </> 
            }

            {watch("typeLink") == "twitter" &&<><div className="">
                <label>Enter Twitter Post Url: </label>
            </div>
            <div className="col-span-3">
                <input className={DefaultInputStyle}
                placeholder="https://x.com/maybe_riya/status/1864673389497209264"
                type="url"
                {...register("link")}
                />
            </div>
            </> 
            }

            <div className="col-span-4">
                <label>Enter Description: </label>
            </div>
            <div className="col-span-4">
                <textarea 
                className="border-2 border-black w-full h-[70px] rounded-lg p-1 focus:bg-purple-300 placeholder-purple-600 placeholder-opacity-50"
                placeholder="Enter Some Description"
                />
            </div>

            
            <div className="grid grid-cols-4 col-span-4 items-center">
                <div className="">
                    <label>Add Tags </label>
                </div>
                <div className="col-span-2">
                    <input className={DefaultInputStyle}
                    placeholder="productive"
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                    className="bg-purple-300 px-5 py-1 rounded-lg border-1 border-solid border-black text-purple-600"
                    type="button"
                    >Add</button>
                </div>

                <div>

                </div>
            </div>
            
            
            

        </div>
    </form>
   )
}