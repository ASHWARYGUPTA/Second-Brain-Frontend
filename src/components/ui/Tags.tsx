interface TagsType {
    text?:String
}

export const Tags = (props:TagsType)=>{
    return <div className=" text-sm flex justify-center border-solid border-1 bg-[#ECF3FC]  rounded-full w-max mr-[2px] my-[2px]">
        <div className="px-[8px] py-[2px] text-[#645BCA]">
            #{props.text?props.text:"Enter Text"}
        </div>
    </div>
}