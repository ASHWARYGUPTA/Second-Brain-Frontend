import { atom, selector } from "recoil";



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