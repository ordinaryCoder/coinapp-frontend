import {SET_FAV_LIST,SET_FAV_OBJ} from "./types"

    export const setFavList = (favList:{})=>({
        type:SET_FAV_LIST,
        payload:favList
    })

    // export const setCryptoId = (currCrypto:string) =>({
    //     type:SET_CURRENT_CRYPTO,
    //     payload:currCrypto
    // })

    export const setCryptoObj = (currCryptoObj:any) =>({
        type:SET_FAV_OBJ,
        payload:currCryptoObj
    })

    