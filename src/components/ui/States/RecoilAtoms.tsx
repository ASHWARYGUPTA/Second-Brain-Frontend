import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { ContentPostType } from "./utils";



export const loadingAtom = atom({
    key:"loadingAtom",
    default:true
})

export const isCorrect = atom({
    key:"isCorrect",
    default:true
})

export const isLoggedIn = atom({
    key:"isLoggedIn",
    default:selector({
        key:"isLoggedInSelector",
        get:async ({get})=>{
            return await fetch("http://localhost:3000/api/v1/signin",{
                method:"GET",
                credentials:"include"
            }).then((res)=>res.json()).then((res)=>res.value);
        }
    })
})

export const viewInputBox = atom({
    key:"viewInputBox",
    default:false
})

export const postsArray = atom({
    key:"postsArray",
    default: selector({
        key:"postsArraySelector",
        get:async ({get})=>{
            const data = await fetch("http://localhost:3000/content",{
                method:"GET",
                credentials:"include"
            }).then(res=>res.json()).then(res=>res)
            return data
        }
    })
})

export const posts = atomFamily({
    key:"posts",
    default: id => selectorFamily({
        key:"postsSelectorFamily",
        get: id=> async ({get})=>{
            const posts = await get(postsArray);

            posts.filter((x:ContentPostType)=>x.id === id)

        }
    })
})

