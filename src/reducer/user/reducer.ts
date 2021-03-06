import { SET_UID } from "./types"

interface IInitialReducer{
    uid:string;
    email:string;
    favList:[];
}
const initialReducer:IInitialReducer = {
    uid:'wZ3x4Tew2oMxbpgoqaHBas3rPWI2',
    email:'',
    favList:[]
}
export default (
    state:IInitialReducer=initialReducer,
    {type,payload}:{type:string,payload:any})=>
    {
        switch(type){
            case SET_UID:{
                return {
                    ...state,
                    uid:payload
                }
            }
            default:
                return {...state}
        }
}