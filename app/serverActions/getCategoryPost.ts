import database from "../utils/db.config"
import { PostInterface } from '../types'
import queryString from "query-string"
const getCategoryPost=async(page=0,category:string)=>{
    try{
        const url = queryString.stringifyUrl({
            url:`${process.env.NEXT_PUBLIC_URL}/api/categories`,
            query:{
                page,
                category
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
export default getCategoryPost