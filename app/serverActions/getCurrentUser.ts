import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

 const getCurrentUser=async()=>{
    try{
        return await getServerSession(authOptions);
        
        

    }catch(error){
        console.log("error occured : ",error);
        throw new Error("error occured");

    }
    

 }
 export default getCurrentUser;