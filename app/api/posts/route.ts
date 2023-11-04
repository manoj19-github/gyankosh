import { NextResponse } from "next/server";
import database from "../../utils/db.config"
import getCurrentUser from "@/app/serverActions/getCurrentUser";
import { PostInterface } from "@/app/types";


export async function POST(request:Request){
    try{

    const currentUser:any = await getCurrentUser();
    if(!currentUser) return new NextResponse("Unauthorized", { status: 400 });
    

    const body = await request.json();
    
    const {title,description,assetUrl,category}= body;
    if(!title || title.trim() === "") return new NextResponse("title is required", { status: 400 });
    if(!description || description.trim() === "") return new NextResponse("description is required", { status: 400 });
    if(!category) return new NextResponse("category is required", { status: 400 });
    
    const newCategory = await database.category.update({
        where:{
            slug:category
        },
        data:{
            posts:{
                create:{
                    slug:title.toLowerCase(),
                    title:title.trim(),
                    img:!!assetUrl ? assetUrl :"",
                    desc:description,
                    userEmail:currentUser.email,


                }
            }
           
        }
    
    })
    return NextResponse.json(newCategory,{status:200});
}catch(error:any){
    console.log("error occured : ",error);
    return new NextResponse("Something went wrong", { status: 500 });
}
}






const PAGE_LIMIT=10;
export async function GET(req:Request){
    try{
        const {searchParams} =await  new URL(req.url);
        console.log('searchParams: ', searchParams);
        let page:any = searchParams.get("page");
        console.log('page: ', page);
        if(page==null || page== undefined) page=0;
        const totalPostCount =  await database.post.count({
            orderBy:{
                createdAt:"desc"
            }
        });
        const allPost =  await database.post.findMany({
            take:PAGE_LIMIT,
            skip:Number(page)*PAGE_LIMIT,
            include:{
                cat:true,
                user:true
            },
            orderBy:{
                createdAt:"desc"
            }
        });
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

