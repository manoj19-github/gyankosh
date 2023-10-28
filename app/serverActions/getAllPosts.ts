import database from "../utils/db.config"
import { PostInterface } from '../types'
import queryString from "query-string"
const getAllPost=async(page=1)=>{
    try{
        const url = queryString.stringifyUrl({
            url:`${process.env.NEXT_PUBLIC_URL}/api/posts`,
           
        },{skipNull:true});
        
        const resp = await fetch(url);

        const data = await resp.json();
        console.log('data: ', data);
        return data;
        
        
    }catch(error:any){
        console.log("error occured",error);
    }

}
export default getAllPost