import { SET_UID } from "./types";

export const setUid = (uid:string)=>( {
        type:SET_UID,
        payload:uid
    })


