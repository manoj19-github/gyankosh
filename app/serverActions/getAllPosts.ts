import database from "../utils/db.config"
import { PostInterface } from '../types'
const getAllPost=async()=>{
    try{
        const allPost =  await database.post.findMany({
            take:10,
            skip:0,
            include:{
                cat:true,
                user:true
            },
            orderBy:{
                createdAt:"desc"
            }
        });
        const safePostData:PostInterface[] = allPost?.map((self)=>{
            return {
                ...self,
                createdAt:self.createdAt.toISOString(),
                updatedAt:self.updatedAt.toISOString()

            }
        });
        return safePostData

        
    }catch(error:any){
        console.log("error occured");
    }

}
export default getAllPost