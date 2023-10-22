import database from "../utils/db.config"

const getAllCategories = async()=>{
    try{
        return await database.category.findMany();
    }catch(error:any){
        console.log("error occured : ",error);
        throw new Error(error)
    }
}

export default getAllCategories;