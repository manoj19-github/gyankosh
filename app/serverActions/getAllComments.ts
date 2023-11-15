import database from "../utils/db.config"
import { PostInterface } from '../types'

const getAllCommentsByPostId = async(postId:string)=>{
    try{
        return await database.post.findUnique({
            where:{
                id:postId,
            },
            include:{
                comments:{
                    include:{
                        user:true
                    }
                }


            }
        });
    }catch(error:any){
        console.log("error  : ",error);
        return null
    }
    

}
export default getAllCommentsByPostId;

