import { NextResponse } from "next/server";
import database from "../../utils/db.config"
import getCurrentUser from "@/app/serverActions/getCurrentUser";
import { PostInterface } from "@/app/types";




const PAGE_LIMIT=10;
export async function GET(req:Request){
    try{
        const {searchParams} =await  new URL(req.url);
        let page:any = searchParams.get("page");
        const catSlug:any = searchParams?.get("category");
        if(catSlug ===null || catSlug === undefined) return new NextResponse("category name invalid", { status: 400 });
        console.log('page: ', page);
        if(page==null || page== undefined) page=0;
        const totalPostCount =  await database.post.count({
            where:{
                catSlug
            },
            orderBy:{
                createdAt:"desc"
            }
        });
        const allPost =  await database.post.findMany({
            
            take:PAGE_LIMIT,
            skip:Number(page)*PAGE_LIMIT,
            where:{
                catSlug
            },
            include:{
                cat:true,
                user:true
            },
            orderBy:{
                createdAt:"desc"
            }
        });
        console.log('allPost: ', allPost);
 
        const safePostData:any[] = allPost?.map((self)=>{
            return {
                ...self,
                createdAt:self.createdAt.toISOString(),
                updatedAt:self.updatedAt.toISOString()

            }
        });
        return NextResponse.json({
            postData:safePostData as PostInterface[],
            totalLength:totalPostCount,
            pageIndex:page
        },{status:200})
    }catch(error){
        console.log("error occured 91",error);
        return new NextResponse("Something went wrong", { status: 500 });
    }
}

