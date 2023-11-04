import database from "../utils/db.config"

const getSidebarPost = async()=>{
    try{
        const postsData= await database.post.findMany({
            take:5,
            skip:0,
            include:{
                cat:true,
                user:true
            },
            orderBy:{
                createdAt:"desc"
            }
        });
        return  postsData?.map((self)=>{
            return {
                ...self,
                createdAt:self.createdAt.toISOString(),
                updatedAt:self.updatedAt.toISOString()

            }
        });
    }catch(error:any){
        console.log("error occured : ",error);
        throw new Error(error)
    }
}

export default getSidebarPost;