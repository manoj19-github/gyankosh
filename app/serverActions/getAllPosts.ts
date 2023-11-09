import database from "../utils/db.config"
import { PostInterface } from '../types'
import queryString from "query-string"
const getAllPost=async(page=0)=>{
    try{
        const url = queryString.stringifyUrl({
            url:`${process.env.NEXT_PUBLIC_URL}/api/posts`,
            query:{
                page
            }
           
        },{skipNull:true});
        
        const resp = await fetch(url,{cache:"no-store"});

        const data = await resp.json();
        console.log('data: ', data);
        
        return data;
        
        
    }catch(error:any){
        console.log("error occured",error);
    }

}
export default getAllPost